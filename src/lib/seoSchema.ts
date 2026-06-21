const SITE_URL = "https://emman-engineered.vercel.app";

/**
 * Builds a BreadcrumbList JSON-LD schema for a page. Pass an ordered list of
 * { name, path } from the page directly under Home down to the current page
 * (Home itself can be omitted — it's added automatically as the first item).
 *
 * Example: buildBreadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }, { name: "Web Development", path: "/portfolio/web-development" }])
 */
export const buildBreadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});
