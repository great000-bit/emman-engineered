import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroPoster from "@/assets/hero-bg-poster.jpg";
import TypingHeadline from "./TypingHeadline";

const HERO_LINES = [
  "We design.",
  "We build digital solutions.",
  "We manage your social presence.",
  "We craft brand identities.",
  "We shoot your story.",
  "We edit your vision.",
  "We engineer premium websites.",
];

const Hero = () => (
  <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0b]">
    {/* Full-bleed looping video background */}
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

    {/* Spacer for floating nav clearance */}
    <div className="h-24 sm:h-28 flex-shrink-0" />

    {/* Main content area — fills remaining height, content pinned bottom */}
    <div className="relative z-10 flex-1 flex flex-col justify-end">
      <div className="container-wide mx-auto w-full px-4 sm:px-6 pb-10 sm:pb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-6">

          {/* Bottom-left: headline + supporting line */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <TypingHeadline
                lines={HERO_LINES}
                className="text-white font-bold leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-white/70 max-w-md leading-relaxed"
            >
              We partner with founders and brands across web development,
              UI/UX, motion, video, and visual identity.
            </motion.p>
          </div>

          {/* Bottom-right: two-part CTA — filled pill + circular arrow, IntegratedBio pattern */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <Link to="/contact" className="group inline-flex items-stretch">
              <span className="inline-flex items-center bg-white text-[#0a0a0b] text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 sm:px-7 rounded-l-full border border-white">
                Start a Project
              </span>
              <span className="inline-flex items-center justify-center w-12 sm:w-14 aspect-square rounded-full bg-accent text-[#0a0a0b] -ml-px transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={20} strokeWidth={2.25} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
