// Curved radial grid that fans out from a vanishing point behind the CTA copy.
// Pure SVG, theme-driven (uses brand --accent / --blue-glow tokens), no external assets.
const RadialGridGlow = () => {
  // Vanishing point sits just above center so the curves arc upward through the headline,
  // mirroring the reference: lines converge low-center, bowing outward toward all four edges.
  const cx = 500;
  const cy = 560;

  // Concentric arcs (like rings of a dish), each a smooth curve through 3 points.
  const arcRadii = [70, 130, 200, 280, 370, 470, 580, 700, 830, 970];

  // Radial spokes fanning out at varying angles, all converging toward (cx, cy).
  const spokeAngles = [
    200, 210, 222, 235, 248, 262, 278, 295, 245, 215, 192, 168, 145, 122, 98,
    100, 80, 62, 45, 30, 15, 350, 335, 318,
  ];

  const arcPath = (r: number) => {
    // Draw a wide shallow arc above the vanishing point, bowing toward the top edge.
    const x1 = cx - r * 1.05;
    const x2 = cx + r * 1.05;
    const yTop = cy - r * 0.62;
    return `M ${x1} ${cy} Q ${cx} ${yTop} ${x2} ${cy}`;
  };

  const spokePath = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const len = 1400;
    const x2 = cx + Math.cos(rad) * len;
    const y2 = cy + Math.sin(rad) * len;
    return `M ${cx} ${cy} L ${x2} ${y2}`;
  };

  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="gridFade" cx="50%" cy="80%" r="62%">
          <stop offset="0%" stopColor="hsl(var(--blue-glow))" stopOpacity="1" />
          <stop offset="30%" stopColor="hsl(var(--accent))" stopOpacity="0.85" />
          <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="coreGlow" cx="50%" cy="82%" r="32%">
          <stop offset="0%" stopColor="hsl(var(--blue-glow))" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(var(--blue-glow))" stopOpacity="0" />
        </radialGradient>
        <mask id="fadeMask">
          <rect width="1000" height="700" fill="url(#gridFade)" />
        </mask>
      </defs>

      {/* soft core glow at the vanishing point */}
      <rect width="1000" height="700" fill="url(#coreGlow)" />

      <g mask="url(#fadeMask)" stroke="hsl(var(--blue-glow))" fill="none" strokeWidth="1.3">
        {arcRadii.map((r) => (
          <path key={`arc-${r}`} d={arcPath(r)} opacity={0.85} />
        ))}
        {spokeAngles.map((a) => (
          <path key={`spoke-${a}`} d={spokePath(a)} opacity={0.65} />
        ))}
      </g>
    </svg>
  );
};

export default RadialGridGlow;
