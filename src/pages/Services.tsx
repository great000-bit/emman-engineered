import PageLayout from "@/components/layout/PageLayout";
import { services } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import BarFanCorner from "@/components/shared/BarFanCorner";
import IconGlow from "@/components/shared/IconGlow";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesPage = () => (
  <PageLayout>
    <SEO
      path="/services"
      title="Services | Creative Emman Limited"
      description="Explore Creative Emman Limited's website design, web development, branding, UI/UX, SEO, and digital strategy services for startups, businesses, and organisations."
      keywords={[
        "web development company",
        "UI UX design company",
        "branding company",
        "digital product design company",
        "social media management company",
        "video editing company",
        "motion graphics company",
        "startup branding company",
        "website development Nigeria",
        "web design Rivers State",
        "UI UX designer Nigeria",
        "logo design Nigeria",
        "branding company Nigeria",
        "social media management Nigeria",
        "video editing Nigeria",
        "videography Rivers State",
        "motion graphics Nigeria",
        "creative technology company in Nigeria",
      ]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Creative Emman Limited",
          url: "https://www.creativeemmanlimited.com",
          email: "creativeemmanlimited@outlook.com",
          telephone: "+234-703-784-5433",
          address: { "@type": "PostalAddress", addressLocality: "Rivers State", addressCountry: "NG" },
          areaServed: "Global",
          serviceType: "Creative and Technology Services",
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              provider: { "@type": "Organization", name: "Creative Emman Limited" },
              areaServed: "Global",
            },
          })),
        },
        buildBreadcrumbSchema([{ name: "Services", path: "/services" }]),
      ]}
    />
    <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Our Expertise</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
            Services Built for <span className="text-accent">Impact</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-lg text-primary-foreground/60 max-w-xl">
            Eight integrated disciplines delivering premium digital outcomes. Every service engineered with institutional precision.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto space-y-14 sm:space-y-20">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={0.05}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <IconGlow icon={service.icon} size="lg" className="mb-6" />
                <h2 className="text-2xl md:text-3xl text-primary-foreground mb-4">{service.title}</h2>
                <p className="text-primary-foreground/60 leading-relaxed mb-6">{service.description}</p>
                <Link to="/contact">
                  <Button variant="accent">Make Enquiry</Button>
                </Link>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-primary-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="details" className="border-primary-foreground/10">
                    <AccordionTrigger className="text-sm font-medium text-primary-foreground/70 hover:text-accent">
                      More Details
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-primary-foreground/50 leading-relaxed">
                      {(service as any).longDescription ?? `Our ${service.title.toLowerCase()} service follows a structured delivery process: Discovery, Strategy, Execution, and Optimization. Every engagement is scoped precisely and delivered on milestone.`}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {i < services.length - 1 && <div className="border-t border-primary-foreground/10 mt-14 sm:mt-20" />}
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
      <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <div className="relative container-narrow mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
            Which service
            <br />
            starts your next win?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-sm md:text-base text-primary-foreground/55 max-w-md mx-auto mb-8">
            Pick a lane or bring the whole brief — we'll map out the right team and timeline.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-row gap-3 justify-center items-center">
            <Link to="/contact">
              <Button variant="light-fill">
                Let's Work Together <ArrowRight size={15} className="ml-1.5" />
              </Button>
            </Link>
            <Button variant="dark-outline" onClick={() => window.open("https://wa.me/2347037845433", "_blank")}>
                <Phone size={14} className="mr-1.5" /> WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </div>

    </section>

  </PageLayout>
);

export default ServicesPage;
