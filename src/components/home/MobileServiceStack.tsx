import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useTransform, useReducedMotion, useMotionValue, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/siteData";
import {
  WebDevMockup, SocialMockup, UIUXMockup, GraphicMockup, VideoMockup, VideoEditingMockup, PhotoMockup, MotionMockup,
} from "./ServiceMockups";

/**
 * Mobile-only (below `md`, 768px) sticky stacked-card scroll animation for the Core
 * Services section. Desktop/tablet keep the existing grid (ServicesPreview.tsx) — this
 * component is a completely separate render path, gated by Tailwind's `md:hidden` at
 * the call site, so it never affects desktop layout.
 *
 * Why not plain CSS `position: sticky`: this exact repo has a site-wide
 * `html, body { overflow-x: hidden }` rule (needed elsewhere to stop horizontal bleed
 * from decorative elements) that was confirmed, in an earlier pinned-section build, to
 * silently break `position: sticky`'s containing-block calculation in this environment —
 * the element never actually pins, it just scrolls normally. Rather than re-debug that
 * same failure mode, this reuses the proven approach from that fix: manual scroll-
 * progress tracking via `getBoundingClientRect` on a passive, rAF-throttled scroll
 * listener, driving `position: fixed` pinning gated to each card's own slice of the
 * overall scroll range. Every animated value is opacity/transform/box-shadow.
 */

const MOCKUPS: Record<string, React.FC> = {
  "Website Development": WebDevMockup,
  "Social Media Management": SocialMockup,
  "UI/UX Design": UIUXMockup,
  "Graphic Design": GraphicMockup,
  "Videography": VideoMockup,
  "Video Editing": VideoEditingMockup,
  "Photography": PhotoMockup,
  "Motion Graphics Design": MotionMockup,
};

const CardContent = ({ service, Mockup }: { service: typeof services[number]; Mockup?: React.FC }) => (
  <>
    <div className="relative flex-shrink-0 mx-4 mt-4 rounded-2xl bg-black/40 border border-primary-foreground/[0.06] overflow-hidden h-40">
      {Mockup ? <Mockup /> : <div className="w-full h-full bg-primary-foreground/[0.02]" />}
    </div>
    <div className="flex-1 flex flex-col items-center text-center px-6 pt-5 pb-7">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent mb-3">
        <service.icon size={13} />
        {service.title}
      </div>
      <h3 className="font-display font-semibold text-primary-foreground mb-2 text-lg">
        {service.description.split(".")[0]}.
      </h3>
      <p className="text-sm text-primary-foreground/55 leading-relaxed max-w-[280px]">
        {service.includes.slice(0, 2).join(" · ")}
      </p>
      <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/40 group-hover:text-accent group-hover:gap-2.5 transition-all">
        Explore <ArrowRight size={12} />
      </span>
    </div>
  </>
);

/** One card in the stack. All cards share the same `position: fixed` slot — like a
 * physical stack of cards sitting on top of each other — and only opacity/scale/y/
 * z-index differentiate which one currently reads as "on top". This is deliberately
 * simpler than an earlier version that tried to switch each card between `fixed` and
 * `absolute` depending on whether it was "active" — that introduced exactly the kind of
 * off-by-one/stale-state bugs (cards overlapping, never unpinning) that this avoids by
 * just always keeping every card in the same fixed slot and letting opacity hide the
 * ones not currently on top. */
const StackCard = ({
  service,
  index,
  progress,
}: {
  service: typeof services[number];
  index: number;
  progress: MotionValue<number>;
}) => {
  const Mockup = MOCKUPS[service.title];
  const isFirst = index === 0;

  // The earlier version relied on opacity alone to differentiate cards, but with this
  // much body text even a small simultaneous-opacity window reads as legible overlap.
  // No simultaneous-opacity overlap, ever: each card ramps up to full opacity over the
  // half-unit approaching its own index and back down to zero over the half-unit
  // leaving it — using the midpoint between adjacent indices as the hard zero-crossing
  // means card N's opacity hits exactly 0 at the same progress value where card N+1's
  // opacity is still 0 on its way up, so there's no frame where both are translucent.
  // (An earlier version with even a ~16px-wide overlap window produced a visible
  // one-frame "double exposure" during fast scrolling.)
  const opacity = useTransform(
    progress,
    isFirst ? [index, index + 0.5] : [index - 0.5, index, index + 0.5],
    isFirst ? [1, 0] : [0, 1, 0],
  );
  // Incoming: scales up from slightly small + offset below into full size/position.
  // Outgoing: scales down and lifts further up/back as the next card takes over.
  const scale = useTransform(
    progress,
    isFirst ? [index, index + 1] : [index - 0.3, index, index + 1],
    isFirst ? [1, 0.9] : [0.88, 1, 0.9],
  );
  const translateY = useTransform(
    progress,
    isFirst ? [index, index + 1] : [index - 0.3, index, index + 1],
    isFirst ? [0, -26] : [14, 0, -26],
  );
  const shadowOpacity = useTransform(progress, [index, index + 1], [0.45, 0.15]);
  const boxShadow = useTransform(shadowOpacity, (v) => `0 ${20 + index}px ${40 + index * 4}px -12px rgba(0,0,0,${v})`);
  // Once a card has fully handed off, drop its pointer-events so it can't intercept
  // taps meant for the card now visually on top of it.
  const pointerEvents = useTransform(progress, (p) => (p >= index && p < index + 0.95 ? "auto" : "none"));

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y: translateY,
        zIndex: 10 + index,
        boxShadow,
        pointerEvents,
        position: "fixed",
        top: "90px",
      }}
      className="left-4 right-4"
    >
      <Link

        to="/services"
        className="group relative flex flex-col rounded-[28px] border border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-sm overflow-hidden min-h-[420px] block"
      >
        <CardContent service={service} Mockup={Mockup} />
      </Link>
    </motion.div>
  );
};

const StaticStackedList = ({ stackServices }: { stackServices: typeof services }) => (
  // prefers-reduced-motion fallback: same cards, no pinning/scaling, simple stacked
  // list, matching the rest of the site's reduced-motion behavior.
  <div className="space-y-5 px-4">
    {stackServices.map((service) => {
      const Mockup = MOCKUPS[service.title];
      return (
        <Link
          key={service.title}
          to="/services"
          className="group relative flex flex-col rounded-[28px] border border-primary-foreground/10 bg-primary-foreground/[0.025] overflow-hidden min-h-[360px]"
        >
          <CardContent service={service} Mockup={Mockup} />
        </Link>
      );
    })}
  </div>
);

const MobileServiceStack = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rawProgress = useMotionValue(0);
  // Separate, unclamped signal: 0 before the track, 1 inside it, 2 after it — used only
  // to know when to hide the whole fixed stack once scrolled past, since rawProgress
  // itself is clamped to [0, total-1] and can't tell "still inside" from "scrolled past".
  const trackPhase = useMotionValue(1);
  const prefersReducedMotion = useReducedMotion();

  const stackServices = services.slice(0, 8);
  const total = stackServices.length;

  // The whole stack only needs to be fixed-pinned while the track is actually on
  // screen. Once scrolled past the track's end, normal page content (the next homepage
  // section) should take over — gate the wrapper's own visibility/pointer-events to the
  // track's range so the fixed cards don't linger on top of whatever comes next.
  // These must be called unconditionally (before any early return) to satisfy React's
  // Rules of Hooks — calling them after a conditional `return` would make the hook
  // count differ between renders if prefersReducedMotion ever changed.
  const stackOpacity = useTransform(trackPhase, (phase) => (phase === 1 ? 1 : 0));
  const stackPointerEvents = useTransform(trackPhase, (phase) => (phase === 1 ? "auto" : "none"));

  useEffect(() => {
    if (prefersReducedMotion) return;
    let ticking = false;
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trackHeight = el.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolledIntoTrack = -rect.top;
      const usableDistance = trackHeight - viewportHeight;
      const p = usableDistance > 0 ? scrolledIntoTrack / usableDistance : 0;
      // Reserve the final slice of `p` as a hold/settle buffer for the last card —
      // otherwise the last card's opacity peak (rawProgress === total-1) coincides with
      // the exact instant p reaches 1 and the wrapper starts hiding, so the last card
      // never actually gets a visible moment. Mapping rawProgress across only the first
      // (1 - TAIL_BUFFER) of p gives it real breathing room before the hand-off to
      // normal scrolling.
      const TAIL_BUFFER = 0.12;
      const mappedP = Math.min(1, p / (1 - TAIL_BUFFER));
      rawProgress.set(Math.min(1, Math.max(0, mappedP)) * (total - 1));
      trackPhase.set(p < 0 ? 0 : p > 1 ? 2 : 1);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rawProgress, total, prefersReducedMotion, trackPhase]);

  if (prefersReducedMotion) {
    return <StaticStackedList stackServices={stackServices} />;
  }

  // Each card gets ~85vh of scroll distance — short enough that users aren't stuck on
  // one card, long enough to register the layered stack effect before the next arrives.
  const vhPerCard = 85;
  const trackHeightVh = total * vhPerCard + 100;

  return (
    <div ref={trackRef} className="relative" style={{ height: `${trackHeightVh}vh` }}>
      <motion.div style={{ opacity: stackOpacity, pointerEvents: stackPointerEvents }}>
        {stackServices.map((service, i) => (
          <StackCard key={service.title} service={service} index={i} progress={rawProgress} />
        ))}
      </motion.div>
    </div>
  );
};

export default MobileServiceStack;
