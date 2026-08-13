import { lazy, Suspense } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HomeAnimatedBackground from "@/components/home/HomeAnimatedBackground";
import Hero from "@/components/home/Hero";
import ClientTrustRail from "@/components/home/ClientTrustRail";
import DeferredSection from "@/components/shared/DeferredSection";
import { homeFaqs } from "@/data/homeFaqs";
import SEO from "@/components/SEO";
import { buildFaqSchema } from "@/lib/seoSchema";

const BrandStory = lazy(() => import("@/components/home/BrandStory"));
const ServicesPreview = lazy(() => import("@/components/home/ServicesPreview"));
const VisualShowcase = lazy(() => import("@/components/home/VisualShowcase"));
const IndustriesPreview = lazy(() => import("@/components/home/IndustriesPreview"));
const ProcessPreview = lazy(() => import("@/components/home/ProcessPreview"));
const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));
const TestimonialsPreview = lazy(() => import("@/components/home/TestimonialsPreview"));
const InsightsPreview = lazy(() => import("@/components/home/InsightsPreview"));
const FAQ = lazy(() => import("@/components/home/FAQ"));
const CTABanner = lazy(() => import("@/components/home/CTABanner"));

const Deferred = ({ children, minHeight }: { children: React.ReactNode; minHeight?: string }) => (
  <DeferredSection minHeight={minHeight}><Suspense fallback={null}>{children}</Suspense></DeferredSection>
);

const Index = () => (
  <PageLayout>
    <SEO
      path="/"
      title="Creative Emman Limited | Global Creative & Technology Company"
      description="Creative Emman Limited is a global creative and technology company helping startups, businesses, and organisations build websites, brand identities, digital products, and growth-focused digital experiences."
      keywords={[
        "global creative technology company",
        "creative technology company",
        "web development company",
        "branding company",
        "UI UX design company",
        "digital product design company",
        "social media management company",
        "video editing company",
        "motion graphics company",
        "startup branding company",
        "business website development",
        "Creative Emman Limited",
        "website design company in Nigeria",
        "website design in Rivers State",
      ]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Creative Emman Limited",
          image: "https://www.creativeemmanlimited.com/creative-emman-logo.png",
          url: "https://www.creativeemmanlimited.com",
          email: "creativeemmanlimited1@gmail.com",
          telephone: "+234-703-784-5433",
          priceRange: "$$",
          address: { "@type": "PostalAddress", addressLocality: "Rivers State", addressCountry: "NG" },
          // areaServed is "Global" rather than just "NG" — Creative Emman Limited takes
          // clients internationally, not only within Nigeria; local accuracy is preserved
          // via the address field above.
          areaServed: "Global",
          description:
            "Creative Emman Limited is a global creative and technology company based in Rivers State, Nigeria, helping startups, founders, businesses, and organizations build modern websites, brand identities, UI/UX experiences, digital products, content systems, video assets, motion graphics, and growth-focused online experiences.",
        },
        // FAQPage schema — only included here because the same Q&As are genuinely
        // rendered on this page via the <FAQ /> component below.
        buildFaqSchema(homeFaqs),
      ]}
    />
    {/* Fixed, full-page cinematic background — Home page only. This component is never
        imported by any other page, which is what actually keeps it off every other route. */}
    <HomeAnimatedBackground variant="aurora" />

    <div className="relative z-10">
      <Hero />
      <ClientTrustRail />
      <Deferred minHeight="36rem"><BrandStory /></Deferred>
      <Deferred minHeight="42rem"><ServicesPreview /></Deferred>
      <Deferred minHeight="40rem"><VisualShowcase /></Deferred>
      <Deferred><IndustriesPreview /></Deferred>
      <Deferred><ProcessPreview /></Deferred>
      <Deferred><WhyChooseUs /></Deferred>
      <Deferred minHeight="36rem"><TestimonialsPreview /></Deferred>
      <Deferred><InsightsPreview /></Deferred>
      <Deferred minHeight="34rem"><FAQ /></Deferred>
      <Deferred minHeight="22rem"><CTABanner /></Deferred>
    </div>
  </PageLayout>
);

export default Index;
