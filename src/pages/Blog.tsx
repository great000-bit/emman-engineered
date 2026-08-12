import { useState, useMemo } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { blogPosts, BlogPost } from "@/data/blogData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, ArrowRight, MessageSquare, HelpCircle, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import { Link } from "react-router-dom";
import BarFanCorner from "@/components/shared/BarFanCorner";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Web Design", "Business", "Marketing", "Tech", "Finance"];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
      <section className="bg-background pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle radial background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-wide mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 inline-block mb-4">
              Our Blog
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-2 mb-6 max-w-4xl mx-auto leading-[1.15]">
              Practical guides for Nigerian businesses going <span className="font-serif italic font-normal text-accent/90">digital</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
              Articles, case studies, and insights from our team of engineers, designers, and marketing strategists.
            </p>
          </ScrollReveal>

          {/* Search Bar */}
          <ScrollReveal delay={0.2}>
            <div className="relative max-w-md mx-auto mb-10">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blog posts..."
                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-full py-3.5 pl-12 pr-6 text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground/40" />
            </div>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal delay={0.24}>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pb-4 border-b border-foreground/10 mb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.05}>
                  <article className="group h-full flex flex-col border border-foreground/10 rounded-2xl overflow-hidden bg-card hover:bg-foreground/[0.01] hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                    {/* Post Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-black/80 text-white px-2.5 py-1 rounded-md border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
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
                        <h2 className="text-lg font-bold font-display text-foreground leading-snug group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-foreground/60 leading-relaxed font-body">
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
                    setSearchQuery("");
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
