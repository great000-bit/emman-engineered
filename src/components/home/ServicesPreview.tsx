import { Link } from "react-router-dom";
import { services } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";

// Masonry sizing pattern — varied paddings/min-heights for natural rhythm
const sizing = [
  "md:min-h-[320px]",
  "md:min-h-[260px]",
  "md:min-h-[380px]",
  "md:min-h-[280px]",
  "md:min-h-[360px]",
  "md:min-h-[300px]",
  "md:min-h-[340px]",
];

const ServicesPreview = () => (
  <section className="section-padding bg-primary relative overflow-hidden">
    {/* Subtle background grid */}
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />

    <div className="container-wide mx-auto relative">
      <SectionHeading
        label="What We Do"
        title="Core Services"
        description="Seven integrated disciplines. One premium standard. Every project engineered for impact."
        light
      />

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 mt-4">
        {services.map((service, i) => (
          <div key={service.title} className="break-inside-avoid mb-6 lg:mb-8">
            <ScrollReveal delay={(i % 3) * 0.08}>
              <div
                className={`group relative cursor-pointer p-8 lg:p-10 rounded-2xl border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.07] hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.25)] flex flex-col ${sizing[i % sizing.length]}`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/10 transition-transform group-hover:-translate-y-0.5 group-hover:bg-accent/15">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-semibold text-primary-foreground mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-[15px] text-primary-foreground/60 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all mt-auto"
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
