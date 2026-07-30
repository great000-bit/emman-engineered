import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./BrandLoader.css";

const removeBootstrap = () => {
  document.getElementById("brand-loader-bootstrap")?.remove();
};

const BrandMark = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <motion.svg
    className="brand-loader__mark"
    viewBox="0 0 27.21 27.21"
    role="img"
    aria-label="Creative Emman Limited logo"
    initial={{ scale: reduceMotion ? 1 : 0.94 }}
    animate={{ scale: 1 }}
    transition={{ duration: reduceMotion ? 0.01 : 1.35, ease: [0.16, 1, 0.3, 1] }}
  >
    <motion.path
      fill="#00A3F5"
      d="M13.63 6.45c.97 0 1.89.2 2.73.57h-.24c-7.42 0-7.42 12.98 0 12.98h.63c-.94.49-2 .76-3.12.76-3.84 0-6.94-3.21-6.94-7.16s3.11-7.16 6.94-7.16z"
      initial={reduceMotion ? false : { opacity: 0, x: -3, rotate: -10, scale: 0.76 }}
      animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
      transition={{ delay: reduceMotion ? 0 : 0.1, duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "13.6px 13.6px" }}
    />
    <motion.path
      fill="#FFFFFF"
      d="M18.98 9.04c.78.97 1.32 2.16 1.51 3.47h-3.8c-.43-.01-.8-.17-1.1-.47-.3-.3-.45-.67-.45-1.1v-.33c0-.43.15-.8.45-1.1.3-.3.67-.45 1.1-.45h2.29z"
      initial={reduceMotion ? false : { opacity: 0, x: 3, y: -2, scale: 0.78 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ delay: reduceMotion ? 0 : 0.4, duration: reduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "17.8px 10.8px" }}
    />
    <motion.path
      fill="#FFFFFF"
      d="M20.52 14.51c-.16 1.3-.65 2.48-1.39 3.47H16.7c-.42 0-.79-.15-1.09-.45-.31-.3-.46-.67-.46-1.1v-.33c0-.43.15-.8.45-1.1.3-.3.67-.46 1.1-.47l3.83-.02z"
      initial={reduceMotion ? false : { opacity: 0, x: 3, y: 2, scale: 0.78 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ delay: reduceMotion ? 0 : 0.68, duration: reduceMotion ? 0.01 : 0.48, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "17.8px 16.2px" }}
    />
  </motion.svg>
);

const BrandLoader = () => {
  const reduceMotion = Boolean(useReducedMotion());
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    removeBootstrap();
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("loader-seen");
    document.documentElement.classList.add("brand-loader-active");

    const safetyTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("brand-loader-active");
      document.documentElement.classList.add("brand-loader-complete");
      setVisible(false);
    }, 6200);

    return () => {
      window.clearTimeout(safetyTimer);
      document.documentElement.classList.remove("brand-loader-active");
    };
  }, []);

  const finish = () => {
    document.documentElement.classList.remove("brand-loader-active");
    document.documentElement.classList.add("brand-loader-complete");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="brand-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Creative Emman Limited"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: 5,
        times: [0, 0.9, 1],
        ease: [0.4, 0, 0.2, 1],
      }}
      onAnimationComplete={finish}
    >
      <motion.div
        className="brand-loader__lockup"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: reduceMotion ? 4.25 : 4.35,
          times: [0, 0.08, 0.92, 1],
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="brand-loader__asset">
          <BrandMark reduceMotion={reduceMotion} />

          <motion.div
            className="brand-loader__name-mask"
            initial={
              reduceMotion
                ? { gridTemplateColumns: "0fr", marginLeft: 0, opacity: 0 }
                : {
                    gridTemplateColumns: "0fr",
                    marginLeft: 0,
                    opacity: 0,
                    clipPath: "inset(0 100% 0 0)",
                  }
            }
            animate={
              reduceMotion
                ? {
                    gridTemplateColumns: ["0fr", "1fr", "1fr", "0fr"],
                    marginLeft: [0, 24, 24, 0],
                    opacity: [0, 1, 1, 0],
                  }
                : {
                    gridTemplateColumns: ["0fr", "1fr", "1fr", "0fr"],
                    marginLeft: [0, 24, 24, 0],
                    opacity: [0, 1, 1, 0],
                    clipPath: [
                      "inset(0 100% 0 0)",
                      "inset(0 0% 0 0)",
                      "inset(0 0% 0 0)",
                      "inset(0 100% 0 0)",
                    ],
                  }
            }
            transition={{
              delay: reduceMotion ? 0.55 : 1.15,
              duration: reduceMotion ? 3.25 : 2.9,
              times: [0, 0.3, 0.72, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="brand-loader__name-inner">
              <span className="brand-loader__name">
                <span>Creative</span>
                <span className="brand-loader__name-accent">Emman Limited</span>
              </span>
            </span>
          </motion.div>

          {!reduceMotion && (
            <motion.span
              className="brand-loader__glow"
              aria-hidden="true"
              initial={{ x: "-140%", opacity: 0 }}
              animate={{
                x: ["-140%", "-140%", "140%", "140%"],
                opacity: [0, 0.42, 0.24, 0],
              }}
              transition={{
                delay: 2.55,
                duration: 1,
                times: [0, 0.12, 0.86, 1],
                ease: "easeInOut",
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BrandLoader;
