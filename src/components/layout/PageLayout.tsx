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
        url: "https://emman-engineered.vercel.app",
        logo: "https://emman-engineered.vercel.app/favicon.png",
        email: "creativeemmanlimited@gmail.com",
        telephone: "+234-703-784-5433",
        address: { "@type": "PostalAddress", addressLocality: "Rivers State", addressCountry: "NG" },
        // TODO: populate with real Instagram, X, Facebook, and LinkedIn profile URLs once
        // they exist. Do not insert placeholder/fake social links — an empty array is
        // correct until real ones are available.
        sameAs: [],
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Creative Emman Limited",
        url: "https://emman-engineered.vercel.app",
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
