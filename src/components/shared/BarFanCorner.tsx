// Fan of vertical capsule bars radiating from a corner, like a sunburst made of rounded columns.
// Matches the cta.gallery "Migrate today" reference pattern — rebuilt in brand blue.
interface BarFanCornerProps {
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

// Bell-curve length distribution creates a smooth dome silhouette (short at the edges,
// tall in the middle of the cluster, short again) — matches the reference's fan shape.
const BAR_COUNT = 15;
const MIN_LEN = 60;
const MAX_LEN = 280;
const BAR_W = 9;
const GAP = 13;
const VIEW = 320;

const buildLengths = () => {
  const mid = (BAR_COUNT - 1) / 2;
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    const dist = Math.abs(i - mid) / mid; // 0 at center, 1 at edges
    // Ease so the dome has a flatter top and steeper sides, like the reference.
    const eased = Math.pow(dist, 1.6);
    const base = MAX_LEN - eased * (MAX_LEN - MIN_LEN);
    // Small jitter per-bar so it doesn't look mechanically perfect.
    const jitter = (i % 2 === 0 ? 1 : -1) * (8 + (i * 7) % 18);
    return Math.max(MIN_LEN, Math.min(MAX_LEN, base + jitter));
  });
};

const BarFanCorner = ({ corner, className = "" }: BarFanCornerProps) => {
  const isTop = corner.startsWith("top");
  const isLeft = corner.endsWith("left");

  const bars = buildLengths().map((len, i) => {
    // Bars march along the edge starting at the corner, each extending inward (length = "height").
    const pos = i * GAP + 4;
    const x = isLeft ? pos : VIEW - pos - BAR_W;
    const y = isTop ? 0 : VIEW - len;
    return { x, y, len };
  });

  // Gradient direction: brightest near the corner edge, fading toward the inner tip.
  const gradY1 = isTop ? "0" : "1";
  const gradY2 = isTop ? "1" : "0";

  return (
    <svg
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      className={`absolute pointer-events-none ${className}`}
      style={{
        top: isTop ? 0 : "auto",
        bottom: isTop ? "auto" : 0,
        left: isLeft ? 0 : "auto",
        right: isLeft ? "auto" : 0,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`barFade-${corner}`} x1="0" y1={gradY1} x2="0" y2={gradY2}>
          <stop offset="0%" stopColor="hsl(var(--blue-glow))" stopOpacity="0.95" />
          <stop offset="55%" stopColor="hsl(var(--blue-accent))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--blue-accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        {bars.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={BAR_W}
            height={b.len}
            rx={3.5}
            fill={`url(#barFade-${corner})`}
          />
        ))}
      </g>
    </svg>
  );
};

export default BarFanCorner;
