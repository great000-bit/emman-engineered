import { Link } from "react-router-dom";
import { services } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";

const ServicesPreview = () => (
  <section className="section-padding">
    <div className="container-wide mx-auto">
      <SectionHeading
        label="What We Do"
        title="Core Services"
        description="Six integrated disciplines. One premium standard. Every project engineered for impact."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.08}>
            <div className="card-elevated p-8 h-full group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 transition-transform group-hover:-translate-y-0.5">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
              >
                Explore <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
