import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-navy-dark overflow-hidden">
    {/* Deep layered background */}
    <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-primary to-navy-dark" />

    {/* Flowing light streaks — top right */}
    <motion.div
      className="absolute -top-20 -right-40 w-[900px] h-[900px] opacity-40"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, hsl(210 80% 55% / 0.12) 0%, hsl(220 60% 30% / 0.06) 40%, transparent 70%)",
      }}
      animate={{ rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    {/* Flowing light streaks — bottom left */}
    <motion.div
      className="absolute -bottom-32 -left-40 w-[700px] h-[700px] opacity-30"
      style={{
        background:
          "radial-gradient(ellipse at 40% 60%, hsl(210 80% 55% / 0.1) 0%, hsl(240 40% 20% / 0.05) 50%, transparent 70%)",
      }}
      animate={{ rotate: [0, -6, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
    />

    {/* Center radial glow behind text */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, hsl(210 80% 55% / 0.15) 0%, transparent 70%)",
      }}
    />

    {/* Subtle noise / grain overlay */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />

    {/* Content */}
    <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-32 md:py-40">
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
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-bold leading-[1.08] mb-6 tracking-tight"
      >
        Premium Digital Execution{" "}
        <br className="hidden sm:block" />
        <span className="text-primary-foreground/90">Engineered with Excellence</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-base md:text-lg text-primary-foreground/40 max-w-lg mx-auto mb-10 leading-relaxed"
      >
        We architect digital systems with precision, transforming bold visions into scalable, high-performance solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col items-center gap-5"
      >
        <Link to="/contact">
          <Button variant="hero-pill">Start a Project</Button>
        </Link>
        <Link
          to="/services"
          className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors tracking-wide"
        >
          View Services
        </Link>
      </motion.div>
    </div>

    {/* Bottom gradient fade for section transition */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent" />
  </section>
);

export default Hero;
