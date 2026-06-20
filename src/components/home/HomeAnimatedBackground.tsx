import { useReducedMotion } from "framer-motion";
import heroPoster from "@/assets/hero-bg-poster.jpg";

/**
 * Full Home-page background. Rendered exactly once, at the top of Index.tsx, and
 * NEVER imported by any other page — that is what keeps the video off every other route,
 * not a CSS toggle that could leak.
 *
 * Performance notes (this replaced an earlier version that was the actual cause of the
 * site-wide slowness):
 *  - `position: fixed` means this layer is painted once and never re-laid-out on scroll —
 *    far cheaper than re-rendering a background per-section or using `background-attachment: fixed`.
 *  - No JS-driven (`framer-motion`) infinite animation loops here. The previous version animated
 *    `background-position` and `scale` on full-viewport `mix-blend-mode` layers, which forces
 *    expensive repaints every frame, forever, even when the user has scrolled far past the hero.
 *    Static CSS gradients give the same "cinematic" feel for a fraction of the cost.
 *  - `pointer-events: none` so it never intercepts clicks on content above it.
 *  - Video uses `preload="metadata"` (not the default `auto`) so the browser doesn't eagerly
 *    buffer the whole file competing with first-paint resources.
 *  - Respects `prefers-reduced-motion`: when set, the video is paused entirely (still shown
 *    via its poster frame) rather than left looping.
 */

export type HomeBgVariant = "aurora" | "ember" | "violet-drift" | "mono-grid";

const VARIANT_LAYERS: Record<HomeBgVariant, string> = {
  // Default — cool cyan/blue, matches the brand accent
  aurora:
    "radial-gradient(ellipse 70% 50% at 78% 10%, hsl(200 100% 55% / 0.16) 0%, transparent 60%), " +
    "radial-gradient(ellipse 60% 45% at 12% 90%, hsl(190 90% 50% / 0.10) 0%, transparent 55%)",
  // Warm amber/orange cinematic variant
  ember:
    "radial-gradient(ellipse 65% 50% at 85% 15%, hsl(28 90% 55% / 0.14) 0%, transparent 60%), " +
    "radial-gradient(ellipse 55% 45% at 10% 85%, hsl(15 80% 50% / 0.09) 0%, transparent 55%)",
  // Violet/magenta tech variant
  "violet-drift":
    "radial-gradient(ellipse 70% 50% at 80% 12%, hsl(265 70% 58% / 0.15) 0%, transparent 60%), " +
    "radial-gradient(ellipse 60% 45% at 14% 88%, hsl(280 60% 50% / 0.10) 0%, transparent 55%)",
  // Restrained near-monochrome variant with a faint grid feel, for a more "engineering" mood
  "mono-grid":
    "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(200 40% 60% / 0.10) 0%, transparent 65%), " +
    "linear-gradient(180deg, hsl(220 15% 30% / 0.06) 0%, transparent 40%)",
};

interface HomeAnimatedBackgroundProps {
  variant?: HomeBgVariant;
}

const HomeAnimatedBackground = ({ variant = "aurora" }: HomeAnimatedBackgroundProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Looping video base layer */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPoster}
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Selected static color-mood layer — no animation, just a fixed gradient tint */}
      <div className="absolute inset-0" style={{ background: VARIANT_LAYERS[variant] }} />

      {/* Dark overlay for contrast across the full page, slightly heavier than the old
          hero-only version since this now sits behind text-bearing sections too */}
      <div className="absolute inset-0 bg-[#0a0a0b]/80" />

      {/* Static grain — single non-animated layer, cheap */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />
    </div>
  );
};

export default HomeAnimatedBackground;
