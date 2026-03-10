import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Phone } from "lucide-react";

const CTABanner = () => (
  <section className="section-padding bg-primary relative overflow-hidden border-t border-primary-foreground/5">
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, hsl(210 80% 55% / 0.06) 0%, transparent 70%)" }}
    />
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button variant="hero">Start Your Project</Button>
          </Link>
          <Button variant="hero-pill" onClick={() => window.open("https://wa.me/2347037845433", "_blank")}>
              <Phone size={16} className="mr-2" /> WhatsApp Us
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
