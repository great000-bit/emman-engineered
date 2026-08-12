import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CTABanner = () => (
  <section className="section-padding bg-muted/40 relative overflow-hidden border-t border-border">
    {/* Decorative blur */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container-wide mx-auto relative z-10">

      {/* Heading */}
      <div className="max-w-2xl text-left mb-12 sm:mb-16">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">Get Started</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Ready to get <span className="font-serif italic font-medium text-accent">started?</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Double Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">

        {/* Card 1: Launch Project */}
        <ScrollReveal className="flex" delay={0.1}>
          <div className="w-full border border-border bg-card/50 hover:bg-card hover:border-foreground/20 p-8 sm:p-10 rounded-2xl flex flex-col justify-between items-start text-left transition-all duration-300 group">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground group-hover:text-accent transition-colors">
                Launch a new project
              </h3>
              <p className="text-sm sm:text-base text-foreground/55 leading-relaxed font-body">
                Partner with our team of engineers, designers, and growth experts to build high-performance products, websites, and brand campaigns.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 group/btn inline-flex items-stretch"
            >
              <span className="inline-flex items-center bg-foreground text-background text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 sm:px-7 rounded-l-full border border-foreground group-hover/btn:bg-accent group-hover/btn:text-white group-hover/btn:border-accent transition-colors">
                Start a Project
              </span>
              <span className="inline-flex items-center justify-center w-12 sm:w-14 aspect-square rounded-full bg-accent text-white -ml-px group-hover/btn:bg-foreground group-hover/btn:text-background transition-all duration-300 group-hover/btn:rotate-45">
                <ArrowRight size={20} strokeWidth={2.25} />
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Card 2: Training / Bootcamp */}
        <ScrollReveal className="flex" delay={0.2}>
          <div className="w-full border border-accent/25 bg-accent/[0.03] hover:bg-accent/[0.05] hover:border-accent/40 p-8 sm:p-10 rounded-2xl flex flex-col justify-between items-start text-left transition-all duration-300 group shadow-lg shadow-accent/5">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground group-hover:text-accent transition-colors">
                Join our training programs
              </h3>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed font-body">
                Accelerate your career. Request training or join our professional bootcamps covering Frontend Engineering, UI/UX Design, and digital skills.
              </p>
            </div>

            <Link
              to="/trainings"
              className="mt-8 group/btn inline-flex items-stretch"
            >
              <span className="inline-flex items-center bg-transparent text-foreground text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 sm:px-7 rounded-l-full border border-border group-hover/btn:border-accent group-hover/btn:text-accent transition-colors">
                Explore Trainings
              </span>
              <span className="inline-flex items-center justify-center w-12 sm:w-14 aspect-square rounded-full bg-foreground/5 text-foreground -ml-px border border-border group-hover/btn:bg-accent group-hover/btn:text-white group-hover/btn:border-accent transition-all duration-300 group-hover/btn:rotate-45">
                <ArrowRight size={20} strokeWidth={2.25} />
              </span>
            </Link>
          </div>
        </ScrollReveal>

      </div>

    </div>
  </section>
);

export default CTABanner;
