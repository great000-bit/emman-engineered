import { pillars } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import IconGlow from "@/components/shared/IconGlow";

const WhyChooseUs = () => (
  <section className="section-padding bg-primary border-t border-primary-foreground/5">
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
            <div className="p-8 rounded-xl border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all group hover:-translate-y-1"
              style={{ transitionDuration: "var(--duration-fast)" }}
            >
              <IconGlow icon={pillar.icon} size="md" className="mb-5" />
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
