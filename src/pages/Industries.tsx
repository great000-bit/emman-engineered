import { ArrowRight, Building2, Check, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";

const Industries = () => (
  <PageLayout>
    <SEO
      path="/industries"
      title="Industries | Creative Emman Limited"
      description="Explore how Creative Emman Limited combines strategy, design, development and media for startups, SMEs, professional firms, retail, education and media teams."
      keywords={["creative technology company Nigeria", "digital agency for Nigerian businesses", "industry website design Nigeria"]}
      jsonLd={buildBreadcrumbSchema([{ name: "Industries", path: "/industries" }])}
    />

    <section className="relative overflow-hidden bg-primary pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 78% 20%, hsl(var(--accent) / .22), transparent 38%)" }} />
      <div className="container-wide mx-auto relative">
        <ScrollReveal>
          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-8xl leading-[0.95] text-primary-foreground">
            Different sectors. One disciplined approach to <span className="text-accent">digital growth.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-primary-foreground/60">
            We adapt the mix of strategy, design, technology and media to the realities of each organisation—not a generic industry template.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <SectionHeading title="Find the route closest to your challenge" description="Each industry page connects common business needs to relevant Creative Emman Limited services." align="left" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 border-l border-t border-border">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.slug} delay={(index % 3) * 0.06}>
              <Link to={`/industries/${industry.slug}`} className="group flex min-h-[330px] flex-col justify-between border-r border-b border-border p-7 sm:p-9 hover:bg-card transition-colors">
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xs font-mono text-foreground/35">0{index + 1}</span>
                    <ArrowRight className="h-5 w-5 text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{industry.eyebrow}</p>
                  <h2 className="mt-4 text-2xl sm:text-3xl text-foreground">{industry.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{industry.summary}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card border-y border-border">
      <div className="container-wide mx-auto grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <ScrollReveal>
          <div className="max-w-lg"><Globe2 className="h-8 w-8 text-accent" /><h2 className="mt-6 text-3xl sm:text-5xl">Built in Nigeria. Ready for wider markets.</h2></div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {["Local market understanding", "International design standards", "Multidisciplinary delivery", "Clear, milestone-led collaboration"].map((item) => (
            <div key={item} className="flex gap-3 bg-background p-6 text-sm text-foreground/75"><Check className="h-4 w-4 shrink-0 text-accent" />{item}</div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto text-center">
        <Building2 className="mx-auto h-8 w-8 text-accent" />
        <h2 className="mt-6 text-3xl sm:text-5xl">Your sector is context. Your challenge is the starting point.</h2>
        <p className="mx-auto mt-5 max-w-xl text-primary-foreground/60">Tell us what needs to change, and we’ll shape the right combination of services around it.</p>
        <Link to="/contact" className="inline-block mt-8"><Button variant="accent" size="lg">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
      </div>
    </section>
  </PageLayout>
);

export default Industries;
