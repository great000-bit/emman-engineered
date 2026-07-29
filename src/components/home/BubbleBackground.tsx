import { useEffect, useRef } from "react";

interface BubbleBackgroundProps {
  className?: string;
  interactive?: boolean;
  opacity?: number;
}

const BubbleBackground = ({
  className = "",
  interactive = true,
  opacity = 0.15,
}: BubbleBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      el.style.setProperty("--mouse-x", `${mouseRef.current.x}px`);
      el.style.setProperty("--mouse-y", `${mouseRef.current.y}px`);
    };

    el.addEventListener("mousemove", handleMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMove);
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-auto ${className}`}
      style={{ opacity }}
    >
      <svg className="hidden">
        <defs>
          <filter id="bubble-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ filter: "url(#bubble-goo) blur(40px)" }}
      >
        {/* Bubble 1 */}
        <div
          className="absolute rounded-full animate-[bubble1_25s_ease-in-out_infinite]"
          style={{
            width: "34%",
            height: "34%",
            top: "6%",
            left: "2%",
            background: "radial-gradient(circle at center, rgba(18,113,255,0.8) 0%, transparent 50%)",
          }}
        />
        {/* Bubble 2 */}
        <div
          className="absolute rounded-full animate-[bubble2_20s_ease-in-out_infinite]"
          style={{
            width: "30%",
            height: "30%",
            top: "50%",
            left: "70%",
            background: "radial-gradient(circle at center, rgba(0,220,255,0.8) 0%, transparent 50%)",
          }}
        />
        {/* Bubble 3 */}
        <div
          className="absolute rounded-full animate-[bubble3_28s_ease-in-out_infinite]"
          style={{
            width: "36%",
            height: "36%",
            top: "70%",
            left: "30%",
            background: "radial-gradient(circle at center, rgba(100,149,237,0.8) 0%, transparent 50%)",
          }}
        />
        {/* Bubble 4 */}
        <div
          className="absolute rounded-full animate-[bubble4_22s_ease-in-out_infinite]"
          style={{
            width: "28%",
            height: "28%",
            top: "20%",
            left: "55%",
            background: "radial-gradient(circle at center, rgba(30,90,200,0.8) 0%, transparent 50%)",
          }}
        />
        {/* Bubble 5 */}
        <div
          className="absolute rounded-full animate-[bubble5_30s_ease-in-out_infinite]"
          style={{
            width: "32%",
            height: "32%",
            top: "40%",
            left: "10%",
            background: "radial-gradient(circle at center, rgba(65,165,255,0.6) 0%, transparent 50%)",
          }}
        />
        {/* Interactive bubble following mouse */}
        {interactive && (
          <div
            className="absolute rounded-full transition-transform [transition-duration:3000ms] ease-out"
            style={{
              width: "20%",
              height: "20%",
              top: "var(--mouse-y, 50%)",
              left: "var(--mouse-x, 50%)",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle at center, rgba(18,113,255,0.7) 0%, transparent 50%)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BubbleBackground;
