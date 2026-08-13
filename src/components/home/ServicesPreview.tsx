import { Link } from "react-router-dom";
import { Hammer, TrendingUp, Rocket, GraduationCap, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const SERVICES = [
  {
    icon: Hammer,
    title: "Build",
    description: "Websites, e-commerce stores, mobile apps, custom software, and hosting infrastructure. We design and build digital products that are fast, beautiful, and built to convert.",
    linkText: "Explore Build Services",
    path: "/services"
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "SEO, Google Ads, social media marketing, content production, email campaigns, and event marketing. We put your brand in front of the right people, at the right time.",
    linkText: "Explore Grow Services",
    path: "/services"
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "Automation, AI systems, analytics dashboards, and growth retainers. For businesses ready to remove bottlenecks and grow without adding headcount.",
    linkText: "Explore Scale Services",
    path: "/services"
  },
  {
    icon: GraduationCap,
    title: "Train",
    description: "Corporate workshops, online courses, and mentorship for teams and individuals looking to build real digital skills, from WordPress to digital marketing strategy.",
    linkText: "Explore Train Services",
    path: "/trainings"
  }
];

const ServicesPreview = () => {
  return (
    <section id="services" className="relative overflow-hidden border-t border-border bg-background px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1540px]">

        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <ScrollReveal>
            <h2 className="text-[clamp(2.6rem,4.25vw,4.35rem)] font-bold leading-[1.02] tracking-[-.05em] text-foreground xl:whitespace-nowrap">
              Everything your business needs to <span className="font-serif font-medium italic">win online</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {SERVICES.map((srv, i) => {
            const IconComponent = srv.icon;
            return (
              <ScrollReveal key={srv.title} delay={0.08 * i} className="flex">
                <Link
                  to={srv.path}
                  className="group relative flex min-h-[25rem] w-full flex-col justify-between rounded-[1.2rem] border border-white/5 bg-[#0c1220] p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-[#111a2c] hover:shadow-xl hover:shadow-black/15 sm:p-9 lg:p-10"
                >
                  <div>
                    {/* Icon */}
                    <div className="mb-9 flex h-12 w-12 items-center justify-start text-white transition-transform duration-300 group-hover:scale-110">
                      <IconComponent size={38} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 font-display text-2xl font-bold text-white sm:text-[1.65rem]">
                      {srv.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-8 font-body text-base leading-[1.55] text-white/88">
                      {srv.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <span className="mt-auto inline-flex items-center gap-1.5 text-base font-semibold text-white transition-all duration-300 group-hover:gap-2.5 group-hover:text-accent">
                    {srv.linkText} <ArrowRight size={16} />
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
