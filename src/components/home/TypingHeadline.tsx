import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cycles through service-based statements. Each line types out
 * character by character, holds, then swipes up and out before
 * the next line types in. Loops indefinitely.
 */
interface TypingHeadlineProps {
  lines: string[];
  className?: string;
  style?: React.CSSProperties;
  typingSpeedMs?: number;
  holdMs?: number;
  align?: "left" | "center";
}

const TypingHeadline = ({ lines, className = "", style, typingSpeedMs = 45, holdMs = 1400, align = "left" }: TypingHeadlineProps) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "exiting">("typing");
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const currentLine = lines[lineIndex];

    if (reducedRef.current) {
      setTyped(currentLine);
      const hold = setTimeout(() => {
        setLineIndex((i) => (i + 1) % lines.length);
      }, 1800);
      return () => clearTimeout(hold);
    }

    if (phase === "typing") {
      if (typed.length < currentLine.length) {
        const t = setTimeout(() => setTyped(currentLine.slice(0, typed.length + 1)), typingSpeedMs);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), 120);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("exiting"), holdMs);
      return () => clearTimeout(t);
    }

    if (phase === "exiting") {
      const t = setTimeout(() => {
        setTyped("");
        setLineIndex((i) => (i + 1) % lines.length);
        setPhase("typing");
      }, 450);
      return () => clearTimeout(t);
    }
  }, [phase, typed, lineIndex, lines, typingSpeedMs, holdMs]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ minHeight: "1.2em", ...style }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={lineIndex}
          initial={{ y: 0, opacity: 1 }}
          animate={phase === "exiting" ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={align === "center" ? "text-center" : "text-left"}
        >
          {typed}
          <span
            className="inline-block w-[3px] ml-1 align-middle bg-current"
            style={{
              height: "0.85em",
              opacity: phase === "typing" ? 1 : 0,
              animation: phase === "typing" ? "blinkCursor 0.9s steps(1) infinite" : "none",
            }}
          />
        </motion.div>
      </AnimatePresence>
      <style>{`
        @keyframes blinkCursor { 0%,50% { opacity: 1; } 50.01%,100% { opacity: 0; } }
      `}</style>
    </div>
  );
};

export default TypingHeadline;
