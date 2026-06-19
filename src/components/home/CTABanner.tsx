import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import BarFanCorner from "@/components/shared/BarFanCorner";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
    {/* Corner bar-fan bursts — visible on desktop, clipped tighter on mobile via overflow-hidden on the section */}
    <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
    <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
    <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
    <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />

    <div className="relative container-narrow mx-auto text-center px-4">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
          Stop guessing.
          <br />
          Start engineering growth.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-sm md:text-base text-primary-foreground/55 max-w-md mx-auto mb-8">
          Tell us what you're building. We'll show you exactly how we'd execute it — no fluff, no filler.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="flex flex-row gap-3 justify-center items-center">
          <Link to="/contact">
            <Button variant="light-fill">
              Let's Work Together <ArrowRight size={15} className="ml-1.5" />
            </Button>
          </Link>
          <Button
            variant="dark-outline"
            onClick={() => window.open("https://wa.me/2347037845433", "_blank")}
          >
            Talk to Us
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
