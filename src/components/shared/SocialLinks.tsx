import { Instagram, Facebook, Linkedin } from "lucide-react";

// Custom X (formerly Twitter) glyph — lucide doesn't ship the rebranded X mark.
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.59 8.67L23 22h-6.77l-5.3-6.93L4.8 22H1.54l8.12-9.28L1 2h6.91l4.79 6.34L18.244 2Zm-1.19 18h1.87L7.04 4H5.04l12.014 16Z" />
  </svg>
);

// TODO: replace the '#' placeholders with the real profile URLs for each platform once available.
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
] as const;

interface SocialLinksProps {
  size?: number;
  className?: string;
  iconClassName?: string;
}

/**
 * The site's single source of truth for social icons — exactly Instagram, X, Facebook,
 * LinkedIn, in that order, with consistent sizing, the blue/cyan glow hover state
 * (.social-glow, defined in index.css), and accessible labels for screen readers.
 */
const SocialLinks = ({ size = 20, className = "flex gap-5", iconClassName = "text-primary-foreground/50 p-2 -m-2" }: SocialLinksProps) => (
  <div className={className}>
    {SOCIAL_LINKS.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target={href !== "#" ? "_blank" : undefined}
        rel={href !== "#" ? "noopener noreferrer" : undefined}
        aria-label={label}
        className={`social-glow transition-colors ${iconClassName}`}
      >
        <Icon size={size} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
