import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-primary to-navy-light opacity-90" />
      <motion.div
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(210 80% 55% / 0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(210 80% 55% / 0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>

    <div className="relative container-wide mx-auto px-6 py-32 md:py-40">
      <div className="max-w-3xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-6"
        >
          Digital Technology & Creative Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-6"
        >
          Premium Digital Execution, Engineered with{" "}
          <span className="text-accent">Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-primary-foreground/60 max-w-xl mb-10 leading-relaxed"
        >
          We architect digital systems with precision, transforming bold visions into scalable, high-performance solutions that drive measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/services">
            <Button variant="hero">View Services</Button>
          </Link>
          <Link to="/contact">
            <Button variant="hero-outline">Start a Project</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
