const SITE_URL = "https://www.creativeemmanlimited.com";

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

/**
 * Builds an FAQPage JSON-LD schema. Only ever pass this to a page's <SEO jsonLd> when the
 * same question/answer pairs are actually visible on that page — Google's guidelines
 * require FAQPage schema to match visible content, not be added speculatively.
 */
export const buildFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});
