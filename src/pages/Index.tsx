import PageLayout from "@/components/layout/PageLayout";
import HomeAnimatedBackground from "@/components/home/HomeAnimatedBackground";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VisualShowcase from "@/components/home/VisualShowcase";
import CTABanner from "@/components/home/CTABanner";
import SEO from "@/components/SEO";

const Index = () => (
  <PageLayout>
    <SEO
      path="/"
      title="Creative Emman Limited | Global Creative & Technology Agency"
      description="Creative Emman Limited helps startups, founders, businesses, and organizations worldwide build premium websites, brand identities, UI/UX experiences, digital products, content systems, videos, motion graphics, and growth-focused online experiences."
      keywords={[
        "global creative agency",
        "creative technology agency",
        "web development agency",
        "branding agency",
        "UI UX design agency",
        "digital product design agency",
        "social media management agency",
        "video editing agency",
        "motion graphics agency",
        "startup branding agency",
        "business website development",
        "Creative Emman Limited",
        "creative agency in Nigeria",
        "website design in Rivers State",
      ]}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Creative Emman Limited",
        image: "https://emman-engineered.vercel.app/favicon.png",
        url: "https://emman-engineered.vercel.app",
        email: "creativeemmanlimited@gmail.com",
        telephone: "+234-703-784-5433",
        priceRange: "$$",
        address: { "@type": "PostalAddress", addressLocality: "Rivers State", addressCountry: "NG" },
        // areaServed is "Global" rather than just "NG" — Creative Emman Limited takes
        // clients internationally, not only within Nigeria; local accuracy is preserved
        // via the address field above.
        areaServed: "Global",
        description:
          "Creative Emman Limited is a global creative and technology company based in Rivers State, Nigeria, helping startups, founders, businesses, and organizations build modern websites, brand identities, UI/UX experiences, digital products, content systems, video assets, motion graphics, and growth-focused online experiences.",
      }}
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
      <CTABanner />
    </div>
  </PageLayout>
);

export default Index;
