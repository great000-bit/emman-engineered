import { LucideIcon } from "lucide-react";

/**
 * Wraps a lucide icon in a premium, glowing, faux-3D container: layered gradients,
 * an inner highlight, and a soft blue/cyan glow. Used anywhere a service or feature
 * icon appears, so icons read as consistent "premium tech" rather than flat outlines.
 */
interface IconGlowProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: { box: "w-10 h-10", icon: 18 },
  md: { box: "w-14 h-14", icon: 26 },
  lg: { box: "w-16 h-16", icon: 30 },
};

const IconGlow = ({ icon: Icon, size = "md", className = "" }: IconGlowProps) => {
  const dims = SIZES[size];

  return (
    <div
      className={`relative ${dims.box} rounded-xl flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        background:
          "linear-gradient(145deg, hsl(var(--blue-glow) / 0.22), hsl(var(--accent) / 0.08) 60%, transparent)",
        boxShadow:
          "0 0 0 1px hsl(var(--accent) / 0.18) inset, 0 1px 0 0 hsl(var(--blue-glow) / 0.35) inset, 0 8px 24px -8px hsl(var(--blue-glow) / 0.45)",
      }}
    >
      {/* top highlight sliver — gives the faux-3D glass-edge effect */}
      <div
        className="absolute inset-x-1.5 top-1 h-1/3 rounded-t-lg pointer-events-none"
        style={{ background: "linear-gradient(to bottom, hsl(var(--blue-glow) / 0.25), transparent)" }}
      />
      <Icon
        size={dims.icon}
        className="relative text-accent"
        style={{ filter: "drop-shadow(0 0 6px hsl(var(--blue-glow) / 0.6))" }}
        strokeWidth={1.75}
      />
    </div>
  );
};

export default IconGlow;
