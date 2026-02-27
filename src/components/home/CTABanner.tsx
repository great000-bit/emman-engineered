import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CTABanner = () => (
  <section className="section-padding bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-navy-dark to-primary opacity-50" />
    <div className="relative container-wide mx-auto text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
          Ready to Build Something{" "}
          <span className="text-accent">Exceptional</span>?
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-lg text-primary-foreground/60 max-w-lg mx-auto mb-10">
          Let's discuss how we can engineer your next digital solution with precision and excellence.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Link to="/contact">
          <Button variant="hero">Start Your Project</Button>
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
