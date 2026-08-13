import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/serviceCategories";
import { getServicePrice } from "@/data/pricingData";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";

const ServicesPage = () => (
  <PageLayout>
    <SEO path="/services" title="Creative & Technology Services | Creative Emman Limited" description="Build, grow, scale and train with one Creative Emman Limited team across websites, software, brand, marketing, automation and practical digital training." jsonLd={buildBreadcrumbSchema([{ name: "Services", path: "/services" }])} />
    <section className="relative overflow-hidden bg-primary px-4 pb-20 pt-32 text-primary-foreground sm:px-6 sm:pb-28 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/.25),transparent_35%)]" />
      <div className="container-wide relative mx-auto"><h1 className="max-w-6xl text-5xl leading-[.96] sm:text-7xl lg:text-8xl">Everything your business needs to move forward—under one roof.</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/60">Our services follow four practical stages: establish the foundation, bring the right audience, strengthen the systems and build internal capability.</p><div className="mt-9 flex flex-wrap gap-3"><Link to="/contact"><Button variant="accent" size="lg">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link><Link to="/pricing"><Button variant="dark-outline" size="lg">See Pricing</Button></Link></div></div>
    </section>
    <section className="bg-background">
      {serviceCategories.map((category, categoryIndex) => (
        <article key={category.slug} id={category.slug} className="border-b border-border px-4 py-20 sm:px-6 sm:py-28">
          <div className="container-wide mx-auto grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <ScrollReveal><div className="lg:sticky lg:top-32"><span className="text-xs text-accent">0{categoryIndex + 1}</span><p className="mt-4 text-xs font-bold uppercase tracking-[.24em] text-accent">{category.name}</p><h2 className="mt-5 text-4xl sm:text-6xl">{category.shortDescription}</h2><p className="mt-5 leading-relaxed text-muted-foreground">{category.description}</p><Link to={`/services/${category.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">View all {category.name} services <ArrowRight className="h-4 w-4" /></Link></div></ScrollReveal>
            <div className="divide-y divide-border border-y border-border">{category.services.map((item, index) => <ScrollReveal key={item.slug} delay={Math.min(index * .015, .12)}><Link to={`/services/${item.slug}`} className="group grid gap-3 py-5 transition-colors hover:bg-card sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:px-4"><span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-lg transition-transform group-hover:translate-x-1 group-hover:text-accent sm:text-xl">{item.name}</h3><p className="mt-1 max-w-xl text-sm text-muted-foreground">{item.summary}</p></div><span className="flex items-center gap-2 whitespace-nowrap text-sm text-foreground/60">{getServicePrice(item.slug)?.amount}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /></span></Link></ScrollReveal>)}</div>
          </div>
        </article>
      ))}
    </section>
    <section className="bg-primary px-4 py-24 text-center text-primary-foreground"><div className="container-narrow mx-auto"><h2 className="text-4xl sm:text-6xl">Not sure where to start?</h2><p className="mx-auto mt-5 max-w-xl text-primary-foreground/55">Share the current problem and desired outcome. We’ll recommend the right services in the right order.</p><Link to="/contact" className="mt-8 inline-block"><Button variant="accent" size="lg">Start the Conversation <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div></section>
  </PageLayout>
);

export default ServicesPage;
