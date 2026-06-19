import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import RadialGridGlow from "@/components/shared/RadialGridGlow";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="relative overflow-hidden bg-primary border-t border-primary-foreground/5 pt-28 pb-32 sm:pt-36 sm:pb-40">
    <RadialGridGlow />

    <div className="relative container-wide mx-auto text-center px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-primary-foreground mb-6">
          Stop guessing.
          <br />
          Start engineering growth.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-base md:text-lg text-primary-foreground/60 max-w-md mx-auto mb-10">
          Tell us what you're building. We'll show you exactly how we'd execute it — no fluff, no filler.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Link to="/contact">
          <Button variant="accent-pill">
            Let's Work Together <ArrowRight size={18} className="ml-1" />
          </Button>
        </Link>
        <p className="text-xs text-primary-foreground/40 mt-4">
          No obligation. Just a real conversation about your project.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
