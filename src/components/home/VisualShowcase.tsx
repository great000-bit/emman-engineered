import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { portfolioProjects, categoryMeta } from "@/data/portfolioData";

const FEATURED_SLUGS = [
  "brightpath-academy-website",
  "luxebyte-mobile-banking",
  "adeyemi-partners-law-firm-website"
];

const VisualShowcase = () => {
  const featuredProjects = portfolioProjects.filter((p) => FEATURED_SLUGS.includes(p.slug));

  return (
    <section className="section-padding bg-muted/40 relative overflow-hidden border-t border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-2xl text-center mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Projects we're <span className="font-serif italic font-medium text-accent">proud of</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {featuredProjects.map((p, i) => {
            const catLabel = categoryMeta[p.category]?.label || p.category;
            return (
              <ScrollReveal key={p.id} delay={0.08 * i} className="flex">
                <Link
                  to={`/work/${p.category}/${p.slug}`}
                  className="group relative flex flex-col w-full rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent/30 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/5 text-left"
                >
                  {/* Project Cover Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted border-b border-border">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Label */}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                        {catLabel}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-display text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                        {p.title.split(" — ")[0]}
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm text-foreground/55 leading-relaxed font-body">
                        {p.shortDescription}
                      </p>
                    </div>

                    {/* View Details Text Link */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent mt-6 group-hover:gap-2 transition-all duration-300">
                      View Case Study <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View Portfolio Button */}
        <ScrollReveal delay={0.3} className="flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-stretch"
          >
            <span className="inline-flex items-center bg-foreground text-background text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 sm:px-7 rounded-l-full border border-foreground">
              View All Work
            </span>
            <span className="inline-flex items-center justify-center w-12 sm:w-14 aspect-square rounded-full bg-accent text-white -ml-px transition-transform duration-300 group-hover:rotate-45">
              <ArrowRight size={20} strokeWidth={2.25} />
            </span>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default VisualShowcase;
