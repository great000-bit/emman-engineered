import { Instagram, Facebook } from "lucide-react";

// Custom X (formerly Twitter) glyph — lucide doesn't ship the rebranded X mark.
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.59 8.67L23 22h-6.77l-5.3-6.93L4.8 22H1.54l8.12-9.28L1 2h6.91l4.79 6.34L18.244 2Zm-1.19 18h1.87L7.04 4H5.04l12.014 16Z" />
  </svg>
);

// Confirmed official profile URLs for Instagram, X, and Facebook. LinkedIn is
// intentionally omitted — searched for the official Creative Emman Limited LinkedIn
// company page and could not confirm one exists, or distinguish it from unrelated
// similarly-named profiles. Do not add a "#" placeholder (the brand's SEO/social spec
// explicitly forbids dead social links). Once the real LinkedIn URL is confirmed, add it
// back as a fourth entry here, in PageLayout.tsx's Organization sameAs array, and in the
// aria-label list — same pattern as the three entries below.
export const SOCIAL_LINKS = [
  { label: "Visit Creative Emman Limited on Instagram", href: "https://www.instagram.com/creativeemman_limited", Icon: Instagram },
  { label: "Visit Creative Emman Limited on X", href: "https://x.com/CE_Limited1", Icon: XIcon },
  { label: "Visit Creative Emman Limited on Facebook", href: "https://web.facebook.com/profile.php?id=61591330806057", Icon: Facebook },
] as const;

interface SocialLinksProps {
  size?: number;
  className?: string;
  iconClassName?: string;
}

/**
 * The site's single source of truth for social icons — Instagram, X, Facebook (LinkedIn
 * pending a confirmed official URL, see note above), with consistent sizing, the
 * blue/cyan glow hover state (.social-glow, defined in index.css), and accessible labels
 * for screen readers.
 */
const SocialLinks = ({ size = 20, className = "flex gap-5", iconClassName = "text-primary-foreground/50 p-2 -m-2" }: SocialLinksProps) => (
  <div className={className}>
    {SOCIAL_LINKS.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`social-glow transition-colors ${iconClassName}`}
      >
        <Icon size={size} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
