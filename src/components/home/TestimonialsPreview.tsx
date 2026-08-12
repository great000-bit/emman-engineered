import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const TestimonialsPreview = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden border-t border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/10 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-2xl text-center mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">Testimonials</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              What our clients <span className="font-serif italic font-medium text-accent">say</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-foreground/60 leading-relaxed font-body">
              Real feedback from partners who trusted us to build exceptional digital experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Layout (2 columns split: 60/40) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16">

          {/* Large Testimonial - 7/12 */}
          <ScrollReveal className="lg:col-span-7 flex" delay={0.1}>
            <div className="w-full bg-card/50 border border-border hover:border-foreground/20 p-8 sm:p-10 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 relative group">
              <Quote className="absolute top-8 right-8 text-foreground/5 w-16 h-16 pointer-events-none group-hover:text-accent/10 transition-colors duration-300" />

              <div className="space-y-6">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                  Highly Recommended
                </span>
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed font-display">
                  "Creative Emman Limited delivered an enterprise-grade platform that exceeded our expectations. Their technical precision and structured delivery were unmatched."
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="text-base font-bold text-foreground font-display">Adaeze Nwosu</h4>
                <p className="text-xs text-foreground/50 mt-0.5">CEO, Finova Technologies</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Accent Testimonial - 5/12 */}
          <ScrollReveal className="lg:col-span-5 flex" delay={0.2}>
            <div className="w-full bg-accent/[0.03] border border-accent/25 hover:border-accent/40 p-8 sm:p-10 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 relative group shadow-lg shadow-accent/5">
              <Quote className="absolute top-8 right-8 text-accent/5 w-12 h-12 pointer-events-none group-hover:text-accent/10 transition-colors duration-300" />

              <div className="space-y-6">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/20 px-2.5 py-1 rounded-full">
                  UI/UX Redesign
                </span>
                <p className="text-base sm:text-lg md:text-xl font-medium text-foreground/95 leading-relaxed font-body">
                  "The UI/UX redesign transformed our patient portal. User engagement increased by 340% within the first quarter."
                </p>
              </div>

              <div className="mt-8 border-t border-accent/20 pt-6">
                <h4 className="text-base font-bold text-foreground font-display">Fatima Hassan</h4>
                <p className="text-xs text-foreground/60 mt-0.5 font-body">Product Lead, Meridian Health</p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Small Bottom Banner */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-card/30 border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <p className="text-sm sm:text-base text-foreground/70 max-w-xl">
              Join 50+ scaling companies that choose Creative Emman to build and grow their digital presence.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-accent hover:text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 shrink-0"
            >
              Start Your Project
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default TestimonialsPreview;
