import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

export const useSuccessSound = () => {
  const contextRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);

  const getAudioContext = useCallback((): AudioContextLike | null => {
    if (contextRef.current) return contextRef.current;

    const AudioCtor = window.AudioContext ?? window.webkitAudioContext;
    if (!AudioCtor) return null;

    try {
      const ctx = new AudioCtor();
      contextRef.current = ctx as AudioContext;
      return ctx as AudioContext;
    } catch {
      return null;
    }
  }, []);

  const unlockSuccessSound = useCallback(async () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      try {
        await ctx.resume();
      } catch {
        // Silence any browser autoplay/permission error.
      }
    }
  }, [getAudioContext]);

  const playSuccessSound = useCallback(() => {
    const ctx = contextRef.current ?? getAudioContext();
    if (!ctx || isPlayingRef.current) return;

    const startSound = () => {
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
      if (ctx.state !== "running") return;

      const gain = ctx.createGain();
      gain.gain.value = 0.04;
      gain.connect(ctx.destination);

      const makeOscillator = () => {
        const oscillator = ctx.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.value = 440;
        oscillator.connect(gain);
        return oscillator;
      };

      const firstOscillator = makeOscillator();
      const secondOscillator = makeOscillator();
      const now = ctx.currentTime;

      firstOscillator.start(now);
      secondOscillator.start(now + 0.08);
      firstOscillator.stop(now + 0.32);
      secondOscillator.stop(now + 0.44);

      isPlayingRef.current = true;

      let endedCount = 0;
      const cleanup = () => {
        endedCount += 1;
        if (endedCount < 2) return;
        if (!isPlayingRef.current) return;
        isPlayingRef.current = false;
        try {
          firstOscillator.disconnect();
          secondOscillator.disconnect();
          gain.disconnect();
        } catch {
          // ignore cleanup errors
        }
      };

      firstOscillator.onended = cleanup;
      secondOscillator.onended = cleanup;
    };

    try {
      startSound();
    } catch {
      // A playback failure must not affect form submission.
    }
  }, [getAudioContext]);

  useEffect(() => {
    return () => {
      const ctx = contextRef.current;
      if (!ctx) return;
      ctx.close().catch(() => {
        // Ignore close failures on unmount.
      });
      contextRef.current = null;
    };
  }, []);

  return {
    unlockSuccessSound,
    playSuccessSound,
  };
};
