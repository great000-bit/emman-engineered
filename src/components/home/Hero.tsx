import { motion } from "framer-motion";
import TypingHeadline from "./TypingHeadline";
import { HeroCTALink } from "@/components/shared/HeroCTA";

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
  <section className="relative min-h-screen flex flex-col overflow-hidden">
    {/* Background now lives once at the page level (HomeAnimatedBackground in Index.tsx),
        fixed behind every homepage section — Hero no longer renders its own video/layers. */}

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
            <HeroCTALink to="/contact" label="Start a Project" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
