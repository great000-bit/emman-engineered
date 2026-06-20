import { Link } from "react-router-dom";
import { LucideIcon, ArrowUpRight } from "lucide-react";

/**
 * The exact two-part CTA pattern from the homepage Hero's "Start a Project" button —
 * a solid pill label fused to a circular accent-colored icon button that rotates on hover.
 * Centralized here so every portfolio CTA (cards, category pages, project details, video/
 * graphic/UI-UX/web-dev/motion/social) renders the identical style instead of drifting
 * into separate one-off button treatments.
 */
interface HeroCTAProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

interface HeroCTALinkProps extends HeroCTAProps {
  to: string;
}

interface HeroCTAAnchorProps extends HeroCTAProps {
  href: string;
  target?: string;
  rel?: string;
}

interface HeroCTAButtonProps extends HeroCTAProps {
  onClick?: () => void;
  type?: "button" | "submit";
}

const ctaInner = (label: string, Icon: LucideIcon) => (
  <>
    <span className="inline-flex items-center bg-white text-[#0a0a0b] text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 sm:px-7 rounded-l-full border border-white">
      {label}
    </span>
    <span className="inline-flex items-center justify-center w-12 sm:w-14 aspect-square rounded-full bg-accent text-[#0a0a0b] -ml-px transition-transform duration-300 group-hover:rotate-45">
      <Icon size={20} strokeWidth={2.25} />
    </span>
  </>
);

export const HeroCTALink = ({ to, label, icon = ArrowUpRight, className = "" }: HeroCTALinkProps) => (
  <Link to={to} className={`group inline-flex items-stretch ${className}`}>
    {ctaInner(label, icon)}
  </Link>
);

export const HeroCTAAnchor = ({ href, label, icon = ArrowUpRight, target, rel, className = "" }: HeroCTAAnchorProps) => (
  <a href={href} target={target} rel={rel} className={`group inline-flex items-stretch ${className}`}>
    {ctaInner(label, icon)}
  </a>
);

export const HeroCTAButton = ({ onClick, label, icon = ArrowUpRight, type = "button", className = "" }: HeroCTAButtonProps) => (
  <button type={type} onClick={onClick} className={`group inline-flex items-stretch ${className}`}>
    {ctaInner(label, icon)}
  </button>
);
