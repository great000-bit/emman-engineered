import { motion } from "framer-motion";
import heroPoster from "@/assets/hero-bg-poster.jpg";

/**
 * Home page hero background, layered:
 *  1. Looping video (base layer)
 *  2. Four lightweight abstract animated gradient-mesh layers — cinematic, creative-tech,
 *     subtle motion. These are CSS/SVG only (no extra video files needed) so they stay
 *     fast, and they sit additively over the video for depth rather than replacing it.
 *  3. Dark contrast overlay + grain (unchanged from before)
 *
 * This component is only ever rendered by Hero.tsx, which is only ever rendered on the
 * homepage (Index.tsx) — so the video/animated background never reaches other pages.
 */
const HeroBackground = () => (
  <>
    {/* Layer 1 — looping video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={heroPoster}
    >
      <source src="/video/hero-bg.mp4" type="video/mp4" />
    </video>

    {/* Layer 2 — slow-drifting cyan/blue mesh, upper-right */}
    <motion.div
      className="absolute inset-0 mix-blend-screen"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 80% 15%, hsl(200 100% 55% / 0.22) 0%, transparent 60%)",
      }}
      animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Layer 3 — slow-drifting violet/magenta mesh, lower-left, offset timing for parallax feel */}
    <motion.div
      className="absolute inset-0 mix-blend-screen"
      style={{
        background:
          "radial-gradient(ellipse 55% 45% at 15% 85%, hsl(265 70% 55% / 0.16) 0%, transparent 60%)",
      }}
      animate={{ opacity: [0.5, 0.9, 0.5], scale: [1.05, 1, 1.05] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    {/* Layer 4 — soft diagonal sweep of light, like a slow lens flare drifting across frame */}
    <motion.div
      className="absolute inset-0 mix-blend-overlay opacity-40"
      style={{
        background:
          "linear-gradient(115deg, transparent 30%, hsl(200 100% 70% / 0.10) 48%, transparent 66%)",
      }}
      animate={{ backgroundPositionX: ["-30%", "130%"] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    />

    {/* Layer 5 — fine animated noise/particle field for cinematic texture, very subtle */}
    <motion.div
      className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "radial-gradient(hsl(0 0% 100% / 0.8) 0.6px, transparent 0.6px)",
        backgroundSize: "26px 26px",
      }}
      animate={{ backgroundPosition: ["0px 0px", "26px 26px"] }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
    />

    {/* Dark gradient overlay — ensures text legibility, heavier toward bottom-left where copy sits */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(115deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.55) 32%, rgba(10,10,11,0.15) 55%, rgba(10,10,11,0.45) 100%), linear-gradient(to top, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.1) 45%)",
      }}
    />

    {/* Grain */}
    <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />
  </>
);

export default HeroBackground;
