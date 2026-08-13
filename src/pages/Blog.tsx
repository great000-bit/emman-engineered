import { useState, useMemo } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { blogPosts } from "@/data/blogData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, HelpCircle, Phone, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import { Link } from "react-router-dom";
import BarFanCorner from "@/components/shared/BarFanCorner";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory]);

  return (
    <PageLayout>
      <SEO
        path="/blog"
        title="Blog & Insights | Creative Emman Limited"
        description="Practical guides, insights, and resources to help Nigerian businesses scale and execute their digital operations."
        jsonLd={[
          buildBreadcrumbSchema([{ name: "Blog", path: "/blog" }]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        {/* Subtle radial background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <ScrollReveal>
            <div className="mb-14 inline-flex items-center gap-2 text-sm text-muted-foreground"><Link to="/">Home</Link><ChevronRight className="h-4 w-4" /><span className="text-foreground">Blog</span></div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="mx-auto mb-7 max-w-5xl text-[clamp(3.2rem,6vw,6.5rem)] font-bold leading-[.98] tracking-[-.06em] text-foreground">
              Practical guides for Nigerian businesses going <span className="font-serif italic font-normal text-accent/90">digital</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-foreground/60 sm:text-lg">
              Clear, practical thinking on customer growth, websites, marketing and technology—written for Nigerian business owners making real decisions.
            </p>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal delay={0.24}>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 border-b border-foreground/10 pb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "bg-foreground/[0.04] text-foreground/75 hover:bg-foreground/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="pb-24 px-4 sm:px-6 bg-background">
        <div className="container-wide mx-auto">
          {filteredPosts.length > 0 ? (
            <div className={filteredPosts.length === 1 ? "grid grid-cols-1" : "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"}>
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.05}>
                  <article className={`group h-full overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-foreground/[0.01] hover:shadow-lg ${filteredPosts.length === 1 ? "lg:grid lg:grid-cols-[1.25fr_.75fr]" : "flex flex-col"}`}>
                    {/* Post Image Container */}
                    <div className={`relative overflow-hidden bg-foreground/5 ${filteredPosts.length === 1 ? "aspect-[16/9] lg:aspect-auto lg:min-h-[470px]" : "aspect-[16/10]"}`}>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-black/80 text-white px-2.5 py-1 rounded-md border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className={`flex flex-1 flex-col justify-between ${filteredPosts.length === 1 ? "p-7 sm:p-10 lg:p-12" : "p-6"}`}>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-xs text-foreground/40 font-body">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className={`${filteredPosts.length === 1 ? "text-3xl sm:text-4xl" : "text-lg"} font-bold font-display text-foreground leading-tight group-hover:text-accent transition-colors`}>
                          {post.title}
                        </h2>
                        <p className={`${filteredPosts.length === 1 ? "text-base" : "text-sm"} text-foreground/60 leading-relaxed font-body`}>
                          {post.excerpt}
                        </p>
                      </div>

                       <div className="pt-6 border-t border-foreground/5 mt-6">
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-foreground transition-colors"
                        >
                          Read Article <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="text-center py-16 max-w-md mx-auto space-y-4">
                <HelpCircle className="w-12 h-12 text-foreground/25 mx-auto" />
                <h3 className="text-lg font-bold font-display text-foreground">No posts found</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  We couldn't find any articles matching your current search parameters. Try adjusting your query or category filters.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("All");
                  }}
                  className="font-bold uppercase tracking-wider text-xs"
                >
                  Clear Filters
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* FAQ/CTA Bottom Banner */}
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

export default BlogPage;
