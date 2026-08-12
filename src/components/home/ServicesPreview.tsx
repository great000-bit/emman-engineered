import { Link } from "react-router-dom";
import { Code2, TrendingUp, Rocket, GraduationCap, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const SERVICES = [
  {
    icon: Code2,
    title: "Build",
    description: "Website development, custom applications, SaaS platforms, and UI/UX design.",
    linkText: "Explore Build Services",
    path: "/services"
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Social media marketing, growth strategies, brand visibility, and lead generation.",
    linkText: "Explore Grow Services",
    path: "/services"
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "High-performance systems, scale consulting, content strategies, and video assets.",
    linkText: "Explore Scale Services",
    path: "/services"
  },
  {
    icon: GraduationCap,
    title: "Train",
    description: "Professional bootcamps, UI/UX masterclasses, video editing, and tech bootcamps.",
    linkText: "Explore Training",
    path: "/trainings"
  }
];

const ServicesPreview = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden border-t border-border">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-3xl text-center mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-3">Our Core Verticals</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Everything your business needs <br className="hidden sm:inline" />
              to <span className="font-serif italic font-medium text-accent">grow online</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((srv, i) => {
            const IconComponent = srv.icon;
            return (
              <ScrollReveal key={srv.title} delay={0.08 * i} className="flex">
                <Link
                  to={srv.path}
                  className="group relative flex flex-col justify-between w-full rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent/30 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-3">
                      {srv.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-foreground/60 leading-relaxed font-body mb-6">
                      {srv.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:gap-2.5 transition-all duration-300 mt-auto">
                    {srv.linkText} <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
