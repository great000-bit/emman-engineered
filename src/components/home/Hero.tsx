import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { HeroCTALink } from "@/components/shared/HeroCTA";

const PARTNERS = [
  { name: "CA Express", logo: "CA Express" },
  { name: "DHI Group", logo: "DHI Group" },
  { name: "TEF", logo: "TEF" },
  { name: "VFD Group", logo: "VFD Group" },
  { name: "GMC Logistics", logo: "GMC Logistics" }
];

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
    {/* Spacer for floating nav clearance */}
    <div className="h-24 sm:h-32 flex-shrink-0" />

    {/* Main Content Area */}
    <div className="relative z-10 flex-1 flex items-center">
      <div className="container-wide mx-auto w-full px-4 sm:px-6 py-12 lg:py-5">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.08] text-center"
          >
            We build digital products <br />
            that <span className="font-serif italic font-medium text-accent underline decoration-accent/30 decoration-wavy underline-offset-4 sm:underline-offset-8">scale brands.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-foreground/65 max-w-2xl leading-relaxed text-center mx-auto"
          >
            Partner with a dedicated digital agency that understands your vision. We build
            high-performing digital products, websites, and brand experiences that drive real results.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center justify-center"
          >
            {/* Primary Fused Pill */}
            <HeroCTALink to="/contact" label="Start a Project" />

            {/* Secondary Fused Pill */}
            <Link to="/portfolio" className="group inline-flex items-stretch">
              <span className="inline-flex items-center bg-transparent text-foreground/80 text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 sm:px-7 rounded-l-full border border-foreground/20 hover:border-accent hover:text-accent transition-colors">
                See Our Work
              </span>
              <span className="inline-flex items-center justify-center w-12 sm:w-14 aspect-square rounded-full bg-foreground/5 text-foreground/80 -ml-px border border-foreground/20 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 group-hover:rotate-45">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Partners Logo Row */}
    {/* <div className="relative z-10 w-full border-t border-foreground/5 bg-foreground/[0.03] backdrop-blur-sm py-10">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-center text-foreground/40 uppercase mb-8"
        >
          Trusted by leading companies & startups
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16"
        >
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="text-lg sm:text-xl font-display font-bold tracking-wider text-foreground/30 hover:text-accent transition-all duration-300 cursor-default hover:scale-105 select-none"
            >
              {partner.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div> */}
  </section>
);

export default Hero;
