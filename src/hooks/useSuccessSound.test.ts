import { afterEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useSuccessSound } from "./useSuccessSound";

describe("useSuccessSound", () => {
  const win = window as Window & { webkitAudioContext?: typeof AudioContext; AudioContext?: typeof AudioContext };
  const originalAudioContext = win.AudioContext;
  const originalWebkitAudioContext = win.webkitAudioContext;

  afterEach(() => {
    vi.restoreAllMocks();
    win.AudioContext = originalAudioContext;
    win.webkitAudioContext = originalWebkitAudioContext;
  });

  it("fails gracefully when Web Audio is unavailable", () => {
    win.AudioContext = undefined;
    win.webkitAudioContext = undefined;

    const { result } = renderHook(() => useSuccessSound());
    expect(result.current.unlockSuccessSound).toBeInstanceOf(Function);
    expect(result.current.playSuccessSound).toBeInstanceOf(Function);

    expect(() => result.current.unlockSuccessSound()).not.toThrow();
    expect(() => result.current.playSuccessSound()).not.toThrow();
  });

  it("unlocks and plays sound only after success", async () => {
    const resume = vi.fn(() => Promise.resolve());
    const connect = vi.fn();
    const disconnect = vi.fn();
    const createGain = vi.fn(() => ({ gain: { value: 0 }, connect, disconnect }));
    const createOscillator = vi.fn(() => ({
      type: "sine",
      frequency: { value: 0 },
      connect,
      start: vi.fn(),
      stop: vi.fn(),
      disconnect,
      onended: null,
    }));
    const close = vi.fn(() => Promise.resolve());
    const currentTime = 0;

    class MockAudioContext {
      state = "running";
      destination = {};
      currentTime = currentTime;
      resume = resume;
      createGain = createGain;
      createOscillator = createOscillator;
      close = close;
    }

    win.AudioContext = MockAudioContext as unknown as typeof AudioContext;

    const { result } = renderHook(() => useSuccessSound());
    await result.current.unlockSuccessSound();
    expect(resume).not.toHaveBeenCalled();

    expect(() => result.current.playSuccessSound()).not.toThrow();
    expect(createGain).toHaveBeenCalled();
    expect(createOscillator).toHaveBeenCalledTimes(2);
  });
});
