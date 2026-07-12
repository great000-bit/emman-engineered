import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

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
        "@type": "Organization",
        name: "Creative Emman Limited",
        url: "https://www.creativeemmanlimited.com",
        logo: "https://www.creativeemmanlimited.com/favicon.png",
        description:
          "Creative Emman Limited is a global creative and technology company helping startups, businesses, and organisations build websites, brand identities, digital products, and growth-focused digital experiences.",
        email: "creativeemmanlimited@outlook.com",
        telephone: "+234-703-784-5433",
        address: { "@type": "PostalAddress", addressLocality: "Rivers State", addressCountry: "NG" },
        // LinkedIn confirmed by the site owner: https://www.linkedin.com/company/creative-emman-limited
        sameAs: [
          "https://www.instagram.com/creativeemman_limited?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          "https://x.com/CE_Limited1?s=20",
          "https://web.facebook.com/profile.php?id=61591330806057",
          "https://www.linkedin.com/company/creative-emman-limited",
        ],
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Creative Emman Limited",
        url: "https://www.creativeemmanlimited.com",
        description:
          "Creative Emman Limited is a global creative and technology company helping businesses build websites, brand identities, digital products, and growth-focused digital experiences.",
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
