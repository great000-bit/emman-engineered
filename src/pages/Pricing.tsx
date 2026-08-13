import { useState } from "react";
import { ArrowRight, ArrowUpRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/SEO";
import { pricingFaqs, pricingTableSections, getServicePrice } from "@/data/pricingData";
import { getService } from "@/data/serviceCategories";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";

const PricingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <PageLayout>
      <SEO path="/pricing" title="Transparent Service Pricing | Creative Emman Limited" description="Starting prices for Creative Emman Limited website, branding, software, marketing, automation, media and training services." jsonLd={[buildBreadcrumbSchema([{ name: "Pricing", path: "/pricing" }])]} />

      <section className="hero-atmosphere px-4 pb-16 pt-36 sm:px-6 sm:pb-24 sm:pt-44">
        <div className="container-narrow mx-auto text-center">
          <h1 className="mx-auto max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[.96] tracking-[-.055em]">Clear pricing before the conversation starts</h1>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Businesses deserve a realistic idea of project cost before committing to a call. These are starting prices for Creative Emman Limited services; final quotations reflect scope, complexity, integrations, timelines and deliverables.</p>
        </div>
      </section>

      <nav aria-label="Pricing categories" className="sticky top-[4.9rem] z-30 border-y border-border bg-background/92 backdrop-blur-xl">
        <div className="container-wide mx-auto flex gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {pricingTableSections.map((section) => <a key={section.id} href={`#${section.id}`} className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground/75 transition-colors hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background">{section.shortLabel}</a>)}
        </div>
      </nav>

      <div className="bg-background">
        {pricingTableSections.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className={`scroll-mt-36 border-b border-border px-4 py-20 sm:px-6 sm:py-28 ${sectionIndex % 2 ? "bg-card/45" : ""}`}>
            <div className="container-wide mx-auto">
              <ScrollReveal><div className="mb-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">{String(sectionIndex + 1).padStart(2, "0")}</p><h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-tight tracking-[-.04em]">{section.title}</h2></div><p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">{section.description}</p></div></ScrollReveal>
              <div className="pricing-table-wrap overflow-x-auto border-y border-border" role="region" aria-label={`${section.title} pricing`} tabIndex={0}>
                <table className="w-full min-w-[760px] border-collapse text-left">
                  <thead><tr className="text-[11px] font-bold uppercase tracking-[.16em] text-muted-foreground"><th className="px-4 py-5 sm:px-6">Service</th><th className="px-4 py-5 sm:px-6">NGN starting price</th><th className="px-4 py-5 sm:px-6">USD starting price</th><th className="px-4 py-5 text-right sm:px-6">Timeline / billing</th></tr></thead>
                  <tbody>{section.serviceSlugs.map((slug) => { const service = getService(slug); const price = getServicePrice(slug); if (!service || !price) return null; return <tr key={slug} className="pricing-row group border-t border-border"><td className="px-4 py-6 sm:px-6"><Link to={`/services/${slug}`} className="inline-flex items-center gap-2 font-semibold text-foreground"><span className="transition-transform duration-200 group-hover:translate-x-1">{service.name}</span><ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></td><td className="px-4 py-6 font-bold text-foreground sm:px-6">{price.amount}</td><td className="px-4 py-6 text-muted-foreground sm:px-6">{price.usdAmount}</td><td className="px-4 py-6 text-right text-muted-foreground sm:px-6">{price.timeline}</td></tr>; })}</tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground md:hidden">Swipe horizontally to view all pricing details.</p>
            </div>
          </section>
        ))}
      </div>

      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto"><div className="mb-12 text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Questions before a quote</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Pricing FAQs</h2></div><div className="border-t border-border">{pricingFaqs.map((faq, index) => { const open = expandedFaq === index; return <div key={faq.question} className="border-b border-border"><button onClick={() => setExpandedFaq(open ? null : index)} aria-expanded={open} className="flex w-full items-center justify-between gap-6 py-6 text-left hover:text-accent"><span className="flex items-center gap-3 font-semibold"><HelpCircle className="h-4 w-4 shrink-0 text-accent" />{faq.question}</span><span className={`text-2xl transition-transform ${open ? "rotate-45" : ""}`}>+</span></button>{open && <p className="max-w-3xl pb-7 pl-7 leading-relaxed text-muted-foreground">{faq.answer}</p>}</div>; })}</div></div>
      </section>

      <section className="bg-[#08101c] px-4 py-24 text-white sm:px-6 sm:py-32"><div className="container-narrow mx-auto text-center"><h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Ready for an exact quotation?</h2><p className="mx-auto mt-5 max-w-2xl text-white/60">Tell us what needs to change. We will map the right service mix, timeline and deliverables before work begins.</p><Link to="/contact" className="group mt-8 inline-flex min-h-14 items-center rounded-full bg-white p-1 pl-6 font-bold text-black"><span>Start the conversation</span><span className="ml-5 grid h-11 w-11 place-items-center rounded-full bg-black text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowRight className="h-4 w-4" /></span></Link></div></section>
    </PageLayout>
  );
};

export default PricingPage;
