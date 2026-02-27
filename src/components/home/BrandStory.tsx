import ScrollReveal from "@/components/shared/ScrollReveal";

const BrandStory = () => (
  <section className="section-padding bg-secondary">
    <div className="container-wide mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Our Story</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
            Built on Precision, Driven by Purpose
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Creative Emman was founded on a singular conviction: that digital excellence demands more than creativity — it demands engineering discipline. We emerged from the intersection of technical mastery and strategic design thinking.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.24}>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to deliver institutional-grade digital solutions that scale with ambition. Every project we undertake is structured, measured, and optimized — because premium outcomes require premium processes.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-accent/30" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Strategic Vision</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BrandStory;
