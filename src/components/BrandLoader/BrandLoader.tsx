import { useEffect, useLayoutEffect, useState } from "react";
import type { AnimationEvent } from "react";
import "./BrandLoader.css";

const removeBootstrap = () => {
  document.getElementById("brand-loader-bootstrap")?.remove();
};

const BrandLoader = () => {
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    removeBootstrap();
  }, []);

  useEffect(() => {
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

  const finish = (event: AnimationEvent<HTMLElement>) => {
    if (
      event.currentTarget !== event.target ||
      event.animationName !== "brand-loader-reveal"
    ) {
      return;
    }

    document.documentElement.classList.remove("brand-loader-active");
    document.documentElement.classList.add("brand-loader-complete");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <section
      className="brand-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Creative Emman Limited"
      onAnimationEnd={finish}
    >
      <svg
        className="brand-loader__ambient-wave"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brand-water-fill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#001c38" stopOpacity="0" />
            <stop offset="55%" stopColor="#006fbd" stopOpacity="0.2" />
            <stop offset="88%" stopColor="#00a3f5" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#bfefff" stopOpacity="0.72" />
          </linearGradient>
          <filter id="brand-water-distortion" x="-20%" y="-10%" width="150%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006 0.018"
              numOctaves="2"
              seed="7"
              result="waterNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="waterNoise"
              scale="46"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>

        <g filter="url(#brand-water-distortion)">
          <path
            fill="url(#brand-water-fill)"
            d="M-80-80H610C760 52 466 166 626 296C786 428 488 548 648 680C804 810 526 924 690 1080H-80Z"
          />
          <path
            className="brand-loader__water-edge"
            d="M610-80C760 52 466 166 626 296C786 428 488 548 648 680C804 810 526 924 690 1080"
          />
          <path
            className="brand-loader__water-highlight"
            d="M550-80C696 58 418 172 578 302C732 430 442 552 600 684C750 814 480 932 642 1080"
          />
        </g>
      </svg>
      <span className="brand-loader__ring brand-loader__ring--outer" aria-hidden="true" />
      <span className="brand-loader__ring brand-loader__ring--inner" aria-hidden="true" />

      <div className="brand-loader__asset">
        <div className="brand-loader__mark-wrap">
          <svg
            className="brand-loader__mark"
            viewBox="0 0 27.21 27.21"
            role="img"
            aria-label="Creative Emman Limited logo"
          >
            <path
              className="brand-loader__crescent"
              fill="#00A3F5"
              d="M13.63 6.45c.97 0 1.89.2 2.73.57h-.24c-7.42 0-7.42 12.98 0 12.98h.63c-.94.49-2 .76-3.12.76-3.84 0-6.94-3.21-6.94-7.16s3.11-7.16 6.94-7.16z"
            />
            <path
              className="brand-loader__top-piece"
              fill="#FFFFFF"
              d="M18.98 9.04c.78.97 1.32 2.16 1.51 3.47h-3.8c-.43-.01-.8-.17-1.1-.47-.3-.3-.45-.67-.45-1.1v-.33c0-.43.15-.8.45-1.1.3-.3.67-.45 1.1-.45h2.29z"
            />
            <path
              className="brand-loader__bottom-piece"
              fill="#FFFFFF"
              d="M20.52 14.51c-.16 1.3-.65 2.48-1.39 3.47H16.7c-.42 0-.79-.15-1.09-.45-.31-.3-.46-.67-.46-1.1v-.33c0-.43.15-.8.45-1.1.3-.3.67-.46 1.1-.47h3.83z"
            />
          </svg>
          <span className="brand-loader__spark" aria-hidden="true" />
        </div>

        <div className="brand-loader__name-window">
          <div className="brand-loader__name">
            <span className="brand-loader__name-white">Creative</span>
            <span className="brand-loader__name-blue">Emman Limited</span>
          </div>
        </div>

      </div>

      <div className="brand-loader__progress" aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default BrandLoader;
