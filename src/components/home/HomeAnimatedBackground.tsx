import { useReducedMotion } from "framer-motion";

export type HomeBgVariant = "aurora" | "ember" | "violet-drift" | "mono-grid";

const VARIANT_LAYERS: Record<HomeBgVariant, string> = {
  // Default — cool cyan/blue, matches the brand accent
  aurora:
    "radial-gradient(ellipse 70% 50% at 78% 10%, hsl(200 100% 55% / 0.12) 0%, transparent 60%), " +
    "radial-gradient(ellipse 60% 45% at 12% 90%, hsl(190 90% 50% / 0.07) 0%, transparent 55%)",
  // Warm amber/orange cinematic variant
  ember:
    "radial-gradient(ellipse 65% 50% at 85% 15%, hsl(28 90% 55% / 0.10) 0%, transparent 60%), " +
    "radial-gradient(ellipse 55% 45% at 10% 85%, hsl(15 80% 50% / 0.06) 0%, transparent 55%)",
  // Violet/magenta tech variant
  "violet-drift":
    "radial-gradient(ellipse 70% 50% at 80% 12%, hsl(265 70% 58% / 0.11) 0%, transparent 60%), " +
    "radial-gradient(ellipse 60% 45% at 14% 88%, hsl(280 60% 50% / 0.07) 0%, transparent 55%)",
  // Restrained near-monochrome variant
  "mono-grid":
    "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(200 40% 60% / 0.08) 0%, transparent 65%), " +
    "linear-gradient(180deg, hsl(220 15% 30% / 0.04) 0%, transparent 40%)",
};

interface HomeAnimatedBackgroundProps {
  variant?: HomeBgVariant;
}

const HomeAnimatedBackground = ({ variant = "aurora" }: HomeAnimatedBackgroundProps) => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Selected static color-mood layer — no animation, just a fixed gradient tint */}
      <div className="absolute inset-0" style={{ background: VARIANT_LAYERS[variant] }} />

      {/* Theme-aware overlay for contrast across the full page */}
      <div className="absolute inset-0 bg-background/80 transition-colors duration-300" />

      {/* Static grain — single non-animated layer, cheap */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />
    </div>
  );
};

export default HomeAnimatedBackground;
