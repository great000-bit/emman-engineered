import { ArrowRight, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";

const proofPoints = [
  "Project scope and expectations are clarified before production begins.",
  "Milestones make progress and review points visible throughout delivery.",
  "Final work is presented with the context needed to use and maintain it.",
];

const TestimonialsPage = () => (
  <PageLayout>
    <SEO
      path="/testimonials"
      title="Client Feedback | Creative Emman Limited"
      description="Learn how Creative Emman Limited approaches transparent collaboration, structured delivery and verified client feedback."
      jsonLd={buildBreadcrumbSchema([{ name: "Client Feedback", path: "/testimonials" }])}
    />

    <section className="relative overflow-hidden bg-primary pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 75% 25%, hsl(var(--accent) / .22), transparent 36%)" }} />
      <div className="container-wide mx-auto relative">
        <ScrollReveal><h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-8xl leading-[.95] text-primary-foreground">Trust should be earned—and every quote should be verifiable.</h1></ScrollReveal>
        <ScrollReveal delay={0.16}><p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-primary-foreground/60">We are preparing this page for confirmed client feedback. We will only publish testimonials that can be attributed accurately and approved by the people behind them.</p></ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <ScrollReveal><div><MessageSquareQuote className="h-8 w-8 text-accent" /><h2 className="mt-6 text-3xl sm:text-5xl text-foreground">What you can expect while we build that record.</h2><p className="mt-5 text-muted-foreground leading-relaxed">Clear communication and accountable delivery are designed into our process—not added after something goes wrong.</p></div></ScrollReveal>
        <div className="border-t border-border">
          {proofPoints.map((point, index) => <ScrollReveal key={point} delay={index * 0.06}><div className="flex gap-4 border-b border-border py-7"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /><p className="text-foreground/75 leading-relaxed">{point}</p></div></ScrollReveal>)}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card border-y border-border text-center">
      <div className="container-narrow mx-auto"><h2 className="text-3xl sm:text-5xl text-foreground">Judge the thinking. Review the work. Then start a conversation.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">Explore the current case studies and see how Creative Emman Limited approaches different digital challenges.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/work"><Button variant="outline" size="lg">View Our Work</Button></Link><Link to="/contact"><Button variant="accent" size="lg">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div></div>
    </section>
  </PageLayout>
);

export default TestimonialsPage;
