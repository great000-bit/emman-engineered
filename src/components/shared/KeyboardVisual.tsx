/**
 * Pure-CSS keyboard key grid for the 404 page — rows of skewed "404" keycaps receding
 * into the distance, with a handful of keys lit in the brand blue/cyan instead of the
 * yellow/orange seen in generic references. No image asset needed, so this stays cheap
 * and theme-able via the site's existing --accent / --blue-glow tokens.
 */
const ROWS = 6;
const COLS = 9;

// Deterministic pseudo-random pick of which keys glow, so the lit cluster reads as an
// intentional diagonal highlight sweep rather than fully random noise.
const isLit = (row: number, col: number) => {
  const diagonal = row + col;
  return diagonal >= 6 && diagonal <= 9 && row >= 1 && row <= 4;
};

const KeyboardVisual = () => (
  <div
    className="absolute inset-0 overflow-hidden select-none pointer-events-none"
    style={{ perspective: "1400px" }}
    aria-hidden="true"
  >
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        transform: "rotateX(48deg) rotateZ(-8deg) scale(1.5)",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="grid gap-3 sm:gap-4"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: ROWS }).map((_, row) =>
          Array.from({ length: COLS }).map((_, col) => {
            const lit = isLit(row, col);
            return (
              <div
                key={`${row}-${col}`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-[10px] sm:text-xs font-mono font-semibold tracking-wide"
                style={{
                  background: lit
                    ? "linear-gradient(155deg, hsl(var(--blue-glow) / 0.95) 0%, hsl(var(--accent) / 0.85) 55%, hsl(220 30% 12%) 100%)"
                    : "linear-gradient(155deg, hsl(220 12% 22%) 0%, hsl(220 14% 14%) 55%, hsl(220 18% 8%) 100%)",
                  color: lit ? "hsl(220 40% 10%)" : "hsl(220 10% 45%)",
                  boxShadow: lit
                    ? "0 6px 18px -4px hsl(var(--blue-glow) / 0.55), inset 0 1px 0 0 hsl(0 0% 100% / 0.25)"
                    : "0 4px 10px -4px rgba(0,0,0,0.6), inset 0 1px 0 0 hsl(0 0% 100% / 0.05)",
                  transform: lit ? "translateZ(6px)" : "translateZ(0px)",
                }}
              >
                404
              </div>
            );
          }),
        )}
      </div>
    </div>

    {/* Vignette so the grid fades into the page background at the edges, no hard cutoff.
        Heavier toward center where the headline/CTA sit, so text stays fully legible. */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 65% 55% at 50% 48%, hsl(var(--primary) / 0.75) 0%, hsl(var(--primary) / 0.2) 55%, hsl(var(--primary)) 90%)",
      }}
    />
  </div>
);

export default KeyboardVisual;
