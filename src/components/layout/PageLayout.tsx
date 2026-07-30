import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  ORGANIZATION_ID,
  SERVICE_NAMES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  WEBSITE_ID,
} from "@/config/site";

interface PageLayoutProps {
  children: ReactNode;
}

// Organization + WebSite JSON-LD describe the company/site as a whole, not any one page,
// so they belong here (rendered on every route via PageLayout) rather than duplicated into
// each page's own <SEO> jsonLd prop. Multiple <Helmet> instances across the tree merge
// correctly — this is a different situation from putting the same tags in the static
// index.html, which does NOT get deduped against (verified empirically; see index.html).
const SiteWideStructuredData = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        legalName: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon.png`,
        },
        image: `${SITE_URL}/og-image.jpg`,
        description: SITE_DESCRIPTION,
        email: COMPANY_EMAIL,
        telephone: COMPANY_PHONE,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Rivers State",
          addressCountry: "NG",
        },
        areaServed: "Worldwide",
        knowsAbout: SERVICE_NAMES,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: COMPANY_EMAIL,
          telephone: COMPANY_PHONE,
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
        sameAs: SOCIAL_PROFILES,
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        description: SITE_DESCRIPTION,
        inLanguage: "en-NG",
        publisher: { "@id": ORGANIZATION_ID },
      })}
    </script>
  </Helmet>
);

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <SiteWideStructuredData />
    <Header />
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="flex-1"
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);

export default PageLayout;
