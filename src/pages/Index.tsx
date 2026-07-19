import PageLayout from "@/components/layout/PageLayout";
import HomeAnimatedBackground from "@/components/home/HomeAnimatedBackground";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VisualShowcase from "@/components/home/VisualShowcase";
import FAQ from "@/components/home/FAQ";
import { homeFaqs } from "@/data/homeFaqs";
import CTABanner from "@/components/home/CTABanner";
import SEO from "@/components/SEO";
import { buildFaqSchema } from "@/lib/seoSchema";

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
          image: "https://www.creativeemmanlimited.com/favicon.png",
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
      <BrandStory />
      <ServicesPreview />
      <WhyChooseUs />
      <VisualShowcase />
      <FAQ />
      <CTABanner />
    </div>
  </PageLayout>
);

export default Index;
