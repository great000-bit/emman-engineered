import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleNetwork from "./ParticleNetwork";
import BubbleBackground from "./BubbleBackground";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center 65%",
      }}
    />

    {/* Layer 1: Dark navy gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, rgba(3,8,20,0.85) 0%, rgba(3,8,20,0.55) 50%, rgba(3,8,20,0.95) 100%)",
      }}
    />

    {/* Layer 2: Subtle radial glow matching horizon */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 65%, hsl(210 80% 55% / 0.08) 0%, transparent 70%)",
      }}
    />

    {/* Noise grain */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />

    {/* Layer 3: Tech particle network */}
    <ParticleNetwork />

    {/* Layer 3b: Bubble background */}
    <BubbleBackground
      interactive
      opacity={0.12}
      className="absolute inset-0 z-[1]"
    />

    {/* Content — positioned in upper-middle safe zone */}
    <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pb-32 pt-24 md:pb-40 md:pt-32">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="inline-block text-primary-foreground/60 text-xs font-medium tracking-[0.3em] uppercase mb-8"
      >
        Premium Digital Technology Company
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.08] mb-6 tracking-tight"
      >
        Premium Digital Execution{" "}
        <br className="hidden sm:block" />
        <span className="text-white/90">Engineered with Excellence</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-base md:text-lg text-[#D1D5DB] max-w-lg mx-auto mb-10 leading-relaxed"
      >
        We architect digital systems with precision, transforming bold visions
        into scalable, high-performance solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <Link to="/contact">
          <Button variant="hero-pill">Start a Project</Button>
        </Link>
        <Link to="/services">
          <Button variant="hero-pill">View Services</Button>
        </Link>
      </motion.div>
    </div>

    {/* Bottom fade for section transition */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent" />
  </section>
);

export default Hero;
