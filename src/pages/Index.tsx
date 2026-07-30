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
import { COMPANY_EMAIL, COMPANY_PHONE, ORGANIZATION_ID, SITE_URL } from "@/config/site";

const Index = () => (
  <PageLayout>
    <SEO
      path="/"
      title="Creative Emman Limited | Creative & Technology Company"
      description="Creative Emman Limited is a creative and technology company in Rivers State, Nigeria, delivering websites, branding, UI/UX, social media, video, motion graphics, and photography."
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
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": ORGANIZATION_ID,
          name: "Creative Emman Limited",
          image: `${SITE_URL}/og-image.jpg`,
          logo: `${SITE_URL}/favicon.png`,
          url: SITE_URL,
          email: COMPANY_EMAIL,
          telephone: COMPANY_PHONE,
          priceRange: "$$",
          address: { "@type": "PostalAddress", addressRegion: "Rivers State", addressCountry: "NG" },
          areaServed: "Worldwide",
          description:
            "Creative Emman Limited is a creative and technology company based in Rivers State, Nigeria, helping startups, founders, and businesses build websites, brand identities, UI/UX experiences, social media content, video assets, motion graphics, and photography.",
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
