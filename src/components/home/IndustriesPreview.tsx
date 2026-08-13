import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "@/data/industries";
import ScrollReveal from "@/components/shared/ScrollReveal";

const IndustriesPreview = () => (
  <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden border-t border-primary-foreground/10">
    <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 15% 20%, hsl(var(--accent) / .25), transparent 32%)" }} />
    <div className="container-wide mx-auto relative">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end mb-12 sm:mb-16">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-5xl leading-tight">Context changes. Our standard doesn’t.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="max-w-xl lg:ml-auto text-sm sm:text-base leading-relaxed text-primary-foreground/55">We shape the right combination of digital product, brand, development and media capability around the way your organisation actually works.</p>
        </ScrollReveal>
      </div>

      <div className="border-t border-primary-foreground/15">
        {industries.map((industry, index) => (
          <ScrollReveal key={industry.slug} delay={(index % 3) * 0.04}>
            <Link to={`/industries/${industry.slug}`} className="group grid gap-4 border-b border-primary-foreground/15 py-6 sm:grid-cols-[60px_1fr_1fr_40px] sm:items-center sm:py-8">
              <span className="text-xs font-mono text-primary-foreground/30">0{index + 1}</span>
              <h3 className="text-xl sm:text-2xl text-primary-foreground group-hover:text-accent transition-colors">{industry.name}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/45">{industry.summary}</p>
              <ArrowRight className="h-5 w-5 text-primary-foreground/30 transition-all group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.15}><Link to="/industries" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary-foreground">Explore all industries <ArrowRight className="h-4 w-4" /></Link></ScrollReveal>
    </div>
  </section>
);

export default IndustriesPreview;
