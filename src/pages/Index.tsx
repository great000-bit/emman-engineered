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
      title="Creative Emman Limited | Web Design, Branding & Digital Solutions in Nigeria"
      description="Creative Emman Limited is a creative and technology company in Nigeria offering web development, UI/UX design, branding, social media management, video editing, motion graphics, and digital growth solutions."
      keywords={[
        "Creative Emman Limited",
        "creative agency in Nigeria",
        "web development company in Nigeria",
        "branding agency in Nigeria",
        "UI UX design company in Nigeria",
        "digital agency in Nigeria",
        "social media management Nigeria",
        "video editing company Nigeria",
        "motion graphics designer Nigeria",
        "website design in Rivers State",
        "creative agency Rivers State",
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
        areaServed: "NG",
        description:
          "Creative Emman Limited is a creative and technology company in Rivers State, Nigeria, helping startups, businesses, and organizations build stronger brands, modern websites, digital products, content systems, video assets, and growth-focused online experiences.",
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
