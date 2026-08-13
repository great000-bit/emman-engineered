import { Cpu, Users, DollarSign, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const BENEFITS = [
  {
    icon: Cpu,
    title: "Deep Tech Expertise",
    description: "Our engineering team builds on modern, scalable stacks that ensure speed, security, and long-term viability."
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "We create beautiful, intuitive interfaces that engage users and convert visitors into loyal clients."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no scope creep. We provide clear, milestone-based pricing that fits your budget."
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Results",
    description: "We align our incentives with your success. We deliver on time and work until you are completely satisfied."
  }
];

const WhyChooseUs = () => (
  <section className="section-padding bg-muted/40 relative overflow-hidden border-t border-border">
    {/* Decorative blur */}
    <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container-wide mx-auto relative z-10">

      {/* Centered Heading */}
      <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            What makes Creative Emman Limited <span className="font-serif italic font-medium text-accent">different</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-foreground/60 leading-relaxed font-body max-w-lg mx-auto">
            We focus on real outcomes, not just deliverables. Here is why founders and teams trust us with their projects.
          </p>
        </ScrollReveal>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {BENEFITS.map((b, i) => {
          const IconComp = b.icon;
          return (
            <ScrollReveal key={b.title} delay={i * 0.08}>
              <div
                className="p-6 sm:p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent/25 transition-all duration-300 group flex gap-5 text-left"
              >

                {/* Text Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/55 leading-relaxed font-body">
                    {b.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

    </div>
  </section>
);

export default WhyChooseUs;
