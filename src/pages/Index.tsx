import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VisualShowcase from "@/components/home/VisualShowcase";
import CTABanner from "@/components/home/CTABanner";

const Index = () => (
  <PageLayout>
    <Hero />
    <BrandStory />
    <ServicesPreview />
    <WhyChooseUs />
    <VisualShowcase />
    <CTABanner />
  </PageLayout>
);

export default Index;
