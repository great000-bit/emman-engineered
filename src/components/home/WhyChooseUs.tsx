import { pillars } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const WhyChooseUs = () => (
  <section className="section-padding bg-primary">
    <div className="container-wide mx-auto">
      <SectionHeading
        label="Why Us"
        title="Engineered for Excellence"
        description="Four pillars that define how we approach every engagement."
        light
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={i * 0.08}>
            <div className="p-8 rounded-lg border border-primary-foreground/10 hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-3">{pillar.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{pillar.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
