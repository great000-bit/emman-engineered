import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BarFanCorner from "@/components/shared/BarFanCorner";
import { portfolioProjects, categoryMeta, portfolioCategoryOrder } from "@/data/portfolioData";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    // Generate dropdown labels dynamically from keys
    return ["All", ...portfolioCategoryOrder];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <PageLayout>
      <SEO
        path="/portfolio"
        title="Portfolio | Creative Emman Limited Projects & Case Studies"
        description="Explore Creative Emman Limited's portfolio across web development, UI/UX design, branding, social media management, videography, video editing, and motion graphics."
        keywords={[
          "Creative Emman Limited portfolio",
          "web design portfolio Nigeria",
          "branding portfolio Nigeria",
          "UI UX design portfolio",
          "video editing portfolio Nigeria",
          "motion graphics portfolio Nigeria",
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Creative Emman Limited Portfolio",
            url: "https://www.creativeemmanlimited.com/portfolio",
          },
          buildBreadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-background pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-wide mx-auto relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-accent font-medium mb-6">
              Home <span className="text-foreground/30">•</span> Work
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
              Projects that perform, <br className="hidden sm:inline" />
              not just <span className="font-serif italic font-medium text-accent">projects that look good</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="mt-6 text-sm sm:text-base text-foreground/60 max-w-3xl mx-auto leading-relaxed">
              Every project we work on is built with high performance and focus on the client. View our work across web design, e-commerce, application development, digital marketing, brand design, video editing, social media management, training, content writing, search engine optimization, IT support, website care and growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-background py-6 border-b border-border max-md:hidden lg:sticky top-[72px] z-20 backdrop-blur-md bg-background/80">
        <div className="container-wide mx-auto px-4 sm:px-6">
          <div className="flex gap-2 flex-wrap pb-2 scrollbar-none justify-start md:justify-center">
            {categories.map((cat) => {
              const label = cat === "All" ? "All" : categoryMeta[cat as keyof typeof categoryMeta]?.label || cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                    ? "bg-accent text-white"
                    : "bg-card border border-border text-foreground/60 hover:text-foreground hover:border-foreground/30"
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => {
              const meta = categoryMeta[p.category];
              const projectTags = p.toolsUsed || p.features || [p.projectType];

              return (
                <ScrollReveal key={p.id} delay={i * 0.05} className="flex">
                  <Link
                    to={`/portfolio/${p.category}/${p.slug}`}
                    className="group relative flex flex-col w-full rounded-2xl border border-border bg-card hover:bg-card/80 hover:border-accent/30 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/5 text-left"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted border-b border-border">
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                          <ArrowRight size={18} />
                        </span>
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category Label */}
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                          {meta?.label || p.category}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold font-display text-foreground mt-1 mb-1">
                          {p.title}
                        </h3>

                        {/* Subtitle / Focus */}
                        <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-2">
                          {p.projectType}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-foreground/60 leading-relaxed font-body">
                          {p.shortDescription}
                        </p>
                      </div>

                      {/* Tag Badges */}
                      <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                        {projectTags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-muted text-[10px] font-medium text-foreground/75 border border-border/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
        <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <div className="relative container-narrow mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
              Which service
              <br />
              starts your next win?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-base text-primary-foreground/55 max-w-md mx-auto mb-8">
              Pick a lane or bring the whole brief — we'll map out the right team and timeline.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-row gap-3 justify-center items-center">
              <Link to="/contact">
                <Button variant="light-fill">
                  Let's Work Together <ArrowRight size={15} className="ml-1.5" />
                </Button>
              </Link>
              <Button variant="dark-outline" onClick={() => window.open("https://wa.me/2347037845433", "_blank")}>
                <Phone size={14} className="mr-1.5" /> WhatsApp
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioPage;
