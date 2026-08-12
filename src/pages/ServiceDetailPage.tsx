import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import { serviceDetails } from "@/data/serviceDetails";
import { services } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Phone, Check, HelpCircle, Code2, ChevronRight } from "lucide-react";
import BarFanCorner from "@/components/shared/BarFanCorner";

// Helper to format text with asterisks as italicized accent font
const formatTitle = (title: string) => {
  const parts = title.split(/\*(.*?)\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="font-serif italic font-normal text-accent">
          {part}
        </span>
      );
    }
    return part;
  });
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !serviceDetails[slug]) {
    return <Navigate to="/404" replace />;
  }

  const detail = serviceDetails[slug];

  // Find icon from services list in services.ts
  const coreService = services.find(
    s => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );
  const IconComponent = coreService?.icon || Code2;


  return (
    <PageLayout>
      <SEO
        path={`/services/${slug}`}
        title={`${detail.title} Services | Creative Emman Limited`}
        description={detail.heroDescription}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: detail.title,
            description: detail.heroDescription,
            provider: {
              "@type": "Organization",
              name: "Creative Emman Limited",
              url: "https://www.creativeemmanlimited.com"
            },
            areaServed: "Global"
          },
          buildBreadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: detail.title, path: `/services/${slug}` }
          ])
        ]}
      />

      {/* ── Section 1: Hero ── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-background">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-wide mx-auto text-center relative z-10">
          <ScrollReveal>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center justify-center gap-1.5 text-xs font-semibold text-foreground/40 mb-8 uppercase tracking-wider font-mono">
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <ChevronRight size={12} className="text-foreground/25" />
              <span className="text-foreground/70">{detail.title}</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            {/* Service badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-8">
              <IconComponent size={14} />
              {detail.label || detail.title}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-foreground mt-2 mb-6 max-w-4xl mx-auto leading-[1.1]">
              {formatTitle(detail.heroTitle)}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <p className="text-base sm:text-lg text-foreground/55 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
              {detail.heroDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.26}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="rounded-full px-8 font-bold uppercase tracking-wider text-xs shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all">
                  Get Free Estimate <ArrowRight size={14} className="ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="rounded-full px-8 font-bold uppercase tracking-wider text-xs border-foreground/10 hover:text-black hover:bg-black dark:border-white/12 dark:hover:bg-white/[0.04] ">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Problem Intro ── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-card border-t border-white/[0.06]">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left copy */}
            <div className="space-y-6 order-2 lg:order-1">
              <ScrollReveal>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                  The Reality
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  {formatTitle(detail.problemTitle)}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="text-base sm:text-lg text-foreground/60 leading-relaxed font-body">
                  {detail.problemDescription}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.24}>
                <div className="pt-2">
                  <Link to="/contact">
                    <Button className="rounded-full px-7 font-bold border border-black hover:bg-black hover:text-white uppercase tracking-wide text-xs shadow-md shadow-accent/15">
                      Fix This Now <ArrowRight size={13} className="ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right image */}
            <div className="order-1 lg:order-2">
              <ScrollReveal delay={0.2}>
                <div className="relative group rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
                  {/* Corner accent */}

                  {detail.problemImage.toLowerCase().endsWith(".mp4") ? (
                    <video
                      src={detail.problemImage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={detail.problemImage}
                      alt={detail.title}
                      className="w-full aspect-[4/3] object-cover  group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-accent text-white text-[11px] font-black uppercase tracking-wider shadow-lg">
                      Creative Emman
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Sub-services Grid ── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 mb-5">
                Our Offerings
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {formatTitle(detail.servicesTitle)}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {detail.subServices.map((sub, i) => (
              <ScrollReveal key={sub.title} delay={i * 0.08} className="flex">
                <article className="w-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-white/8 bg-card hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
                  <div>
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/15 transition-colors">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{sub.title}</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed font-body mb-6">{sub.description}</p>
                  </div>

                  <div className="border-t border-white/8 pt-5">
                    <ul className="space-y-2.5">
                      {sub.features.map(f => (
                        <li key={f} className="flex items-start gap-2.5 text-xs text-foreground/70 font-body">
                          <span className="w-4 h-4 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={10} className="text-accent" />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Process ── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-card border-t border-white/[0.06]">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 mb-5">
                Structured Workflow
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {formatTitle(detail.processTitle)}
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {detail.processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-white/8 bg-background hover:border-accent/20 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group">
                  {/* Step number badge */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-sm font-black text-accent tracking-wider font-mono">{step.number}</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors">{step.title}</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed font-body">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Tools Stack ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background border-t border-white/[0.06]">
        <div className="container-wide mx-auto">
          <ScrollReveal className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">
              {detail.toolsTitle || "Tools & Technologies We Use"}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
              {detail.tools.map(tool => (
                <span
                  key={tool}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground/75 bg-card border border-white/10 rounded-full hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 6: Pricing Table ── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-card border-t border-white/[0.06]">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 mb-5">
                Project Pricing
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {formatTitle(detail.pricingTitle)}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16}>
            <div className="overflow-x-auto rounded-2xl border border-white/10 max-w-5xl mx-auto shadow-xl">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-accent/10 border-b border-white/10">
                    <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-foreground/70">Package Plan</th>
                    <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-foreground/70">Typical Timeframe</th>
                    <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-foreground/70">Best Suitable For</th>
                    <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-accent text-right">Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.pricingTable.map((plan, i) => (
                    <tr
                      key={plan.name}
                      className={`border-b border-white/[0.05] transition-colors hover:bg-accent/5 ${i % 2 === 0 ? "bg-background" : "bg-card"
                        }`}
                    >
                      <td className="px-6 py-5 text-sm font-bold text-foreground">{plan.name}</td>
                      <td className="px-6 py-5 text-sm text-foreground/60 font-body">{plan.timeframe}</td>
                      <td className="px-6 py-5 text-sm text-foreground/60 font-body">{plan.idealFor}</td>
                      <td className="px-6 py-5 text-sm font-black text-accent text-right whitespace-nowrap">{plan.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-foreground/35 text-center mt-5 max-w-lg mx-auto leading-relaxed">
              * Timelines and pricing are estimates based on standard deliverables. Bring us your project brief for an exact quotation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 7: FAQ ── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-background border-t border-white/[0.06]">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <ScrollReveal>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                  Answers & Support
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  {formatTitle(detail.faqTitle)}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
                  <div className="absolute inset-0 z-10 pointer-events-none" />
                  <img
                    src={detail.faqImage}
                    alt="FAQ illustration"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <Accordion type="single" collapsible className="space-y-3">
                  {detail.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-white/8 bg-card rounded-xl px-5 py-0.5 hover:border-accent/20 transition-all duration-200"
                    >
                      <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground text-left py-5 hover:text-accent hover:no-underline">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                            <HelpCircle size={12} className="text-accent" />
                          </span>
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-foreground/55 leading-relaxed font-body pb-5 pt-0 pl-9">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      {/* ── Section 9: CTA Banner ── */}
      <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
        <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />

        <div className="relative container-narrow mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
              Which service<br />starts your next win?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-base text-primary-foreground/55 max-w-md mx-auto mb-8 font-body">
              Pick a lane or bring the whole brief — we'll map out the right team and timeline.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-row gap-3 justify-center items-center flex-wrap">
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
};

export default ServiceDetailPage;
