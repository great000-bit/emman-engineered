import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  { number: "01", title: "Discover", copy: "We clarify the business goal, audience, constraints and evidence already available." },
  { number: "02", title: "Strategise", copy: "We shape scope, priorities, information architecture and a delivery route everyone can understand." },
  { number: "03", title: "Design", copy: "We turn the strategy into clear visual systems, journeys and testable creative direction." },
  { number: "04", title: "Build", copy: "We develop, produce and integrate with attention to performance, accessibility and maintainability." },
  { number: "05", title: "Launch", copy: "We check the final experience, prepare the handover and put the work into the world." },
  { number: "06", title: "Grow", copy: "Where required, we support iteration, content, campaigns and ongoing digital improvement." },
];

const ProcessPreview = () => (
  <section className="section-padding bg-background relative overflow-hidden border-t border-border">
    <div className="container-wide mx-auto">
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <ScrollReveal>
          <div className="lg:sticky lg:top-32"><h2 className="text-3xl sm:text-5xl leading-tight text-foreground">Structure creates room for better creative work.</h2><p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">A clear process keeps decisions visible, reduces rework and helps ambitious projects move without losing their original intent.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground">Discuss your project <ArrowRight className="h-4 w-4" /></Link></div>
        </ScrollReveal>
        <div className="border-t border-border">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={(index % 3) * 0.04}>
              <div className="grid gap-3 border-b border-border py-7 sm:grid-cols-[56px_150px_1fr] sm:gap-6 sm:py-9"><span className="text-xs font-mono text-accent">{step.number}</span><h3 className="text-xl text-foreground">{step.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{step.copy}</p></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessPreview;
