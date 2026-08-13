interface BrandLogoProps {
  className?: string;
  location?: "navigation" | "footer" | "content";
  decorative?: boolean;
}

const BrandLogo = ({ className = "", location = "content", decorative = false }: BrandLogoProps) => {
  const sizeClass = location === "footer" ? "h-16 w-16 sm:h-20 sm:w-20" : location === "navigation" ? "h-10 w-10" : "h-14 w-14";
  return (
    <span className={`brand-logo relative inline-grid shrink-0 place-items-center ${sizeClass} ${className}`} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : "Creative Emman Limited"} aria-hidden={decorative || undefined}>
      <img src="/creative-emman-logo-light.png" alt="" className="brand-logo-light absolute inset-0 h-full w-full object-contain" decoding="async" />
      <img src="/creative-emman-logo.png" alt="" className="brand-logo-dark absolute inset-0 h-full w-full object-contain" decoding="async" />
    </span>
  );
};

export default BrandLogo;
