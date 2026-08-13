import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceDetails } from "@/data/serviceDetails";
import { getService, getServiceCategory } from "@/data/serviceCategories";
import { getServicePrice } from "@/data/pricingData";
import { portfolioProjects } from "@/data/portfolioData";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";

const technologyByCategory = {
  build: ["React", "TypeScript", "WordPress", "Node.js", "Figma", "Cloud platforms"],
  grow: ["Google Analytics", "Search Console", "Meta Business Suite", "Email platforms", "Content systems"],
  scale: ["APIs", "Automation platforms", "CRM systems", "Analytics tools", "Cloud databases"],
  train: ["Live workshops", "Guided projects", "Design tools", "Development environments", "Portfolio review"],
};

const processByCategory = {
  build: ["Discover the business and audience", "Map the experience and requirements", "Design and prototype", "Build and integrate", "Test, launch and hand over"],
  grow: ["Audit the current position", "Define audiences and measurable goals", "Plan channels and content", "Launch coordinated activity", "Review evidence and improve"],
  scale: ["Map the current workflow", "Identify the highest-value bottleneck", "Design the system and data flow", "Build in controlled stages", "Train the team and monitor adoption"],
  train: ["Assess learning needs", "Set practical outcomes", "Teach through guided exercises", "Review applied projects", "Provide feedback and next steps"],
};

const categoryPortfolioMap: Record<string, string[]> = {
  build: ["web-development", "ui-ux-design", "graphic-brand-design"],
  grow: ["social-media-management", "graphic-brand-design", "videography-video-editing"],
  scale: ["web-development", "ui-ux-design"],
  train: ["web-development", "ui-ux-design", "graphic-brand-design"],
};

const ServiceDetailPage = () => {
  const { slug = "" } = useParams();
  const categoryPage = getServiceCategory(slug);
  const catalogService = getService(slug);
  const legacyDetail = serviceDetails[slug];

  if (!categoryPage && !catalogService && !legacyDetail) return <Navigate to="/services" replace />;

  const category = categoryPage ?? getServiceCategory(catalogService?.category ?? "build")!;
  const title = categoryPage?.name ?? catalogService?.name ?? legacyDetail.title;
  const summary = categoryPage?.description ?? legacyDetail?.heroDescription ?? catalogService!.summary;
  const price = categoryPage
    ? { amount: "Multiple starting points", timeline: "Service dependent", note: "Explore the services below or request a scoped recommendation." }
    : getServicePrice(slug) ?? { amount: legacyDetail?.pricingTable[0]?.price ?? "Custom Quote", timeline: legacyDetail?.pricingTable[0]?.timeframe ?? "Scope dependent", note: "Final cost depends on scope, functionality, timeline and integrations." };
  const deliverables = legacyDetail?.subServices ?? [
    { title: "Discovery and direction", description: `A focused review of the context, users and success criteria for ${title.toLowerCase()}.`, features: ["Business and audience context", "Priority definition", "Delivery roadmap"] },
    { title: "Experience and system design", description: "A considered structure for the content, workflow or customer experience before execution begins.", features: ["Information or workflow architecture", "Design direction", "Review checkpoints"] },
    { title: "Production and implementation", description: "Disciplined execution with clear milestones, ownership and quality checks.", features: ["Production-ready deliverables", "Responsive implementation where relevant", "Documented decisions"] },
    { title: "Handover and next steps", description: "A usable final delivery with practical guidance for operating and improving it.", features: ["Quality assurance", "Handover guidance", "Recommended next phase"] },
  ];
  const process = legacyDetail?.processSteps.map((step) => step.title) ?? processByCategory[category.slug];
  const tools = legacyDetail?.tools ?? technologyByCategory[category.slug];
  const faqs = legacyDetail?.faqs ?? [
    { question: `What does a ${title} engagement include?`, answer: "The final scope is based on the business goal, existing assets, required integrations and delivery timeline. Every proposal confirms deliverables before work begins." },
    { question: "Can this service be delivered in phases?", answer: "Yes. When useful, we prioritise the smallest high-value phase and define later work around evidence, budget and operational readiness." },
    { question: "How is final pricing confirmed?", answer: `The public starting point is ${price.amount}. A written proposal confirms the exact scope, milestones, assumptions and cost.` },
  ];
  const relatedServices = category.services.filter((item) => item.slug !== slug).slice(0, 4);
  const relevantWork = portfolioProjects.filter((project) => categoryPortfolioMap[category.slug].includes(project.category)).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: summary,
    provider: { "@type": "Organization", name: "Creative Emman Limited", url: "https://www.creativeemmanlimited.com" },
    areaServed: ["Nigeria", "Africa", "Worldwide"],
  };

  return (
    <PageLayout>
      <SEO
        path={`/services/${slug}`}
        title={`${title} in Nigeria | Creative Emman Limited`}
        description={`${summary} View deliverables, process, starting pricing and related Creative Emman Limited work.`}
        jsonLd={[serviceSchema, buildBreadcrumbSchema([{ name: "Services", path: "/services" }, { name: title, path: `/services/${slug}` }])]}
      />

      <section className="relative overflow-hidden bg-primary px-4 pb-20 pt-32 text-primary-foreground sm:px-6 sm:pb-28 sm:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,hsl(var(--accent)/.26),transparent_36%)]" />
        <div className="container-wide relative mx-auto">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[.18em] text-primary-foreground/45">
            <Link to="/services" className="hover:text-accent">Services</Link><ChevronRight className="h-3 w-3" />
            <Link to={`/services/${category.slug}`} className="hover:text-accent">{category.name}</Link>
            {!categoryPage && <><ChevronRight className="h-3 w-3" /><span>{title}</span></>}
          </nav>
          <ScrollReveal><p className="mt-12 text-xs font-bold uppercase tracking-[.25em] text-accent">{category.name} service</p></ScrollReveal>
          <ScrollReveal delay={0.06}><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.96] sm:text-7xl lg:text-8xl">{categoryPage ? `${title} what comes next.` : title}</h1></ScrollReveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <ScrollReveal delay={0.12}><p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/62">{summary}</p></ScrollReveal>
            <ScrollReveal delay={0.18}><div className="flex flex-wrap gap-3"><Link to="/contact"><Button variant="accent" size="lg">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link><Link to="/pricing"><Button variant="dark-outline" size="lg">See Full Pricing</Button></Link></div></ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <ScrollReveal><div className="lg:sticky lg:top-32"><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">The context</p><h2 className="mt-5 text-3xl sm:text-5xl">Make the investment solve a real business problem.</h2></div></ScrollReveal>
          <ScrollReveal delay={0.08}><div className="space-y-6 text-lg leading-relaxed text-muted-foreground"><p>{legacyDetail?.problemDescription ?? `${title} works best when it is tied to a specific customer, operational or capability problem—not treated as an isolated deliverable.`}</p><p>{category.outcome}</p></div></ScrollReveal>
        </div>
      </section>

      {categoryPage && (
        <section className="border-y border-border bg-card section-padding">
          <div className="container-wide mx-auto"><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Explore {category.name}</p><h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl">Services for this stage of growth</h2><div className="mt-12 divide-y divide-border border-y border-border">{category.services.map((item, index) => <Link key={item.slug} to={`/services/${item.slug}`} className="group grid gap-3 py-6 transition-colors hover:bg-background/60 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:px-4"><span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-xl text-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent">{item.name}</h3><p className="mt-1 max-w-2xl text-sm text-muted-foreground">{item.summary}</p></div><span className="inline-flex items-center gap-2 text-sm text-foreground">{getServicePrice(item.slug)?.amount}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div>
        </section>
      )}

      {!categoryPage && <section className="border-y border-border bg-card section-padding"><div className="container-wide mx-auto"><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">What we deliver</p><h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl">A complete engagement, not an isolated output</h2><div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">{deliverables.map((item, index) => <ScrollReveal key={item.title} delay={index * .05}><article className="h-full bg-background p-7 sm:p-9"><span className="text-xs text-accent">0{index + 1}</span><h3 className="mt-7 text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p><ul className="mt-6 space-y-2">{item.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-foreground/70"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{feature}</li>)}</ul></article></ScrollReveal>)}</div></div></section>}

      <section className="section-padding bg-background"><div className="container-wide mx-auto grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Process</p><h2 className="mt-4 text-3xl sm:text-5xl">Clear stages. Visible decisions.</h2><div className="mt-8 flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">{tool}</span>)}</div></div><div className="border-t border-border">{process.map((step, index) => <div key={step} className="grid grid-cols-[3rem_1fr] items-center border-b border-border py-6"><span className="text-xs text-accent">0{index + 1}</span><h3 className="text-xl">{step}</h3></div>)}</div></div></section>

      <section className="border-y border-border bg-primary section-padding text-primary-foreground"><div className="container-wide mx-auto grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Starting price</p><h2 className="mt-5 text-4xl sm:text-6xl">{price.amount}</h2><p className="mt-4 max-w-xl text-primary-foreground/55">{price.note}</p></div><div className="lg:text-right"><p className="text-sm text-primary-foreground/45">Typical timing</p><p className="mt-2 text-xl">{price.timeline}</p><div className="mt-6 flex flex-wrap gap-3 lg:justify-end"><Link to="/contact"><Button variant="accent">Get a Quote</Button></Link><Link to="/pricing"><Button variant="dark-outline">See Full Pricing</Button></Link></div></div></div></section>

      {relevantWork.length > 0 && <section className="section-padding bg-background"><div className="container-wide mx-auto"><div className="flex items-end justify-between gap-8"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Relevant work</p><h2 className="mt-4 text-3xl sm:text-5xl">See the thinking in context</h2></div><Link to="/work" className="hidden text-sm text-accent sm:inline-flex">All work <ArrowRight className="ml-2 h-4 w-4" /></Link></div><div className="mt-12 grid gap-6 md:grid-cols-3">{relevantWork.map((project) => <Link key={project.slug} to={`/work/${project.category}/${project.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card"><div className="aspect-[4/3] overflow-hidden"><img src={project.coverImage} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div className="p-6"><p className="text-xs uppercase tracking-wider text-accent">{project.status}</p><h3 className="mt-3 text-xl group-hover:text-accent">{project.title}</h3></div></Link>)}</div></div></section>}

      <section className="border-t border-border bg-card section-padding"><div className="container-wide mx-auto grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Related services</p><h2 className="mt-4 text-3xl sm:text-5xl">Connected capability</h2><div className="mt-8 divide-y divide-border border-y border-border">{relatedServices.map((item) => <Link key={item.slug} to={`/services/${item.slug}`} className="group flex items-center justify-between py-4"><span>{item.name}</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-accent" /></Link>)}</div></div><div><p className="text-xs font-bold uppercase tracking-[.22em] text-accent">Questions</p><Accordion type="single" collapsible className="mt-5">{faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>

      <section className="bg-primary px-4 py-24 text-center text-primary-foreground"><div className="container-narrow mx-auto"><h2 className="text-4xl sm:text-6xl">Ready to make {title.toLowerCase()} useful?</h2><p className="mx-auto mt-5 max-w-xl text-primary-foreground/55">Tell us what needs to change. We’ll recommend the right starting point and confirm scope before work begins.</p><Link to="/contact" className="mt-8 inline-block"><Button variant="accent" size="lg">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div></section>
    </PageLayout>
  );
};

export default ServiceDetailPage;
