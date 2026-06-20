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
      title="Creative Emman | Premium Digital Agency in Nigeria"
      description="Premium digital agency in Nigeria offering website development, social media management, UI/UX design, graphic design, videography & photography. Engineered for excellence and results."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Creative Emman",
        image: "https://emman-engineered.vercel.app/favicon.png",
        url: "https://emman-engineered.vercel.app",
        email: "creativeemmanlimited@gmail.com",
        telephone: "+234-905-138-0648",
        priceRange: "$$",
        address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
        areaServed: "NG",
        description:
          "Premium digital agency in Nigeria offering website development, social media management, UI/UX design, graphic design, videography and photography.",
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
