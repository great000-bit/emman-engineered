import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** "subtle" for small text elements, "standard" for cards/blocks (default) */
  distance?: "subtle" | "standard";
}

const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const directionMap = (dist: number) => ({
  up: { y: dist, x: 0 },
  down: { y: -dist, x: 0 },
  left: { x: dist, y: 0 },
  right: { x: -dist, y: 0 },
  none: { x: 0, y: 0 },
});

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up", distance = "standard" }: ScrollRevealProps) => {
  const dist = distance === "subtle" ? 16 : 32;
  const offset = directionMap(dist)[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        delay,
        ease: PREMIUM_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
