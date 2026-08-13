import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import { ArrowRight, Calendar, Clock, User, CheckCircle2, ArrowLeft, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BarFanCorner from "@/components/shared/BarFanCorner";
import { blogPosts } from "@/data/blogData";
import { getArticleById, type ContentBlock } from "@/data/blogArticlesData";

// ── Content block renderer ───────────────────────────────────────────────────
const renderBlock = (block: ContentBlock, idx: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={idx}
          className="text-base text-foreground/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "heading":
      return (
        <h2
          key={idx}
          id={block.id}
          className="text-2xl sm:text-3xl font-bold font-display text-foreground pt-8 pb-1"
        >
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={idx} className="list-disc pl-6 space-y-2 text-foreground/80">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote
          key={idx}
          className="border-l-4 border-accent pl-6 italic my-6 text-foreground/70"
        >
          {block.text}
        </blockquote>
      );
    case "checklist":
      return (
        <div key={idx} className="space-y-4 my-4">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <p className="text-base text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      );
    case "roadmap":
      return (
        <div key={idx} className="my-10 p-6 sm:p-8 border border-border bg-card/40 rounded-2xl">
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-6 text-center">
            {block.title}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {block.steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-lg shadow-accent/20 text-sm">
                  {s.step}
                </div>
                <h5 className="font-bold text-sm text-foreground mt-3 mb-1">{s.title}</h5>
                <p className="text-xs text-foreground/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

// ── Page ─────────────────────────────────────────────────────────────────────
const BlogArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  // Look up post metadata & article content
  const matchedPost = blogPosts.find((p) => p.id === id);
  const post = matchedPost || {
    id: id ?? "unknown",
    title: "Blog Article",
    excerpt: "",
    date: "",
    readTime: "",
    category: "Articles",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
  };

  const article = getArticleById(post.id);
  const tocItems = article?.tocItems ?? [];
  const content = article?.content ?? [];
  const author = article?.author ?? "Great Emman";

  // Active TOC section tracking
  const [activeSection, setActiveSection] = useState<string>(tocItems[0]?.id ?? "");

  useEffect(() => {
    setActiveSection(tocItems[0]?.id ?? "");
    const observers: IntersectionObserver[] = [];
    tocItems.forEach(({ id: sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(sectionId); },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.id]);

  // Related articles (same category, up to 3)
  const relatedArticles = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);
  const articleIndex = blogPosts.findIndex((item) => item.id === post.id);
  const previousArticle = articleIndex > 0 ? blogPosts[articleIndex - 1] : undefined;
  const nextArticle = articleIndex >= 0 && articleIndex < blogPosts.length - 1 ? blogPosts[articleIndex + 1] : undefined;

  if (!matchedPost) return <Navigate to="/blog" replace />;

  return (
    <PageLayout>
      <SEO
        path={`/blog/${post.id}`}
        title={`${post.title} | Creative Emman Limited`}
        description={post.excerpt}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date ? new Date(post.date).toISOString() : undefined,
            author: { "@type": "Person", name: author },
            publisher: { "@type": "Organization", name: "Creative Emman Limited", logo: { "@type": "ImageObject", url: "https://www.creativeemmanlimited.com/creative-emman-logo.png" } },
            mainEntityOfPage: `https://www.creativeemmanlimited.com/blog/${post.id}`,
          },
          buildBreadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.id}` },
          ]),
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border bg-background pb-8 pt-28 sm:pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-accent font-medium mb-6">
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <ChevronRight size={10} className="text-foreground/30" />
              <span className="text-foreground/60">{post.category}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
              {post.category}
            </span>
            <h1 className="mx-auto mb-6 mt-6 max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-.045em] text-foreground sm:text-6xl lg:text-7xl">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="flex items-center justify-center gap-4 text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent">
                  <User size={14} />
                </div>
                <span className="font-semibold text-foreground">{author}</span>
              </div>
              {post.date && <><span>•</span><span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span></>}
              {post.readTime && <><span>•</span><span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span></>}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Article layout ── */}
      <section className="bg-background py-12 sm:py-16 px-4 sm:px-6">
        <div className="container-wide mx-auto max-w-6xl">
          {/* Featured image */}
          <ScrollReveal>
            <div className="relative mx-auto mb-14 aspect-video max-w-4xl overflow-hidden rounded-2xl border border-border shadow-xl">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" decoding="async" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* ── Sidebar TOC ── */}
            <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start hidden lg:block">
              {tocItems.length > 0 && (
                <div className="border border-border bg-card/30 rounded-2xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/45 border-b border-border pb-3 mb-4">
                    Table of Contents
                  </h3>
                  <ul className="space-y-3.5 text-left text-sm">
                    {tocItems.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block transition-all duration-200 font-medium leading-snug pl-3 border-l-2 ${
                              isActive
                                ? "text-accent font-semibold border-accent"
                                : "text-foreground/55 hover:text-foreground border-transparent"
                            }`}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/50 hover:text-accent mt-8 transition-colors">
                <ArrowLeft size={14} /> Back to Blog
              </Link>
            </aside>

            {/* ── Main article content ── */}
            <article className="lg:col-span-9 text-left max-w-none">
              {content.length > 0 ? (
                <div className="space-y-6 text-foreground/80 font-body leading-relaxed text-base">
                  {content.map((block, idx) => renderBlock(block, idx))}
                </div>
              ) : (
                /* Fallback: no article data yet — show excerpt */
                <p className="text-lg text-foreground/70 leading-relaxed">{post.excerpt}</p>
              )}

              {/* Contextual service CTA */}
              <div className="mt-12 p-8 border border-border bg-muted/30 rounded-3xl relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10 max-w-xl">
                  <h3 className="text-xl font-bold text-foreground mb-2">Need help applying this to your business?</h3>
                  <p className="text-sm text-foreground/60 mb-6 leading-relaxed">
                    Share your current challenge and Creative Emman Limited will help identify a practical next step.
                  </p>
                  <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent/90">Discuss your project <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related articles only appear once another published article exists. */}
      {relatedArticles.length > 0 && <section className="section-padding bg-background border-t border-border">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12 text-center">
              Related <span className="font-serif italic font-normal text-accent/90">articles</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((art, index) => (
              <ScrollReveal key={art.id} delay={index * 0.08}>
                <Link
                  to={`/blog/${art.id}`}
                  className="group block h-full border border-border rounded-2xl overflow-hidden bg-card hover:bg-card/80 hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-left"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img src={art.imageUrl} alt={art.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase bg-black/80 text-white px-2.5 py-1 rounded-md border border-white/10">{art.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-display text-foreground leading-snug group-hover:text-accent transition-colors mb-2 line-clamp-2">{art.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed font-body line-clamp-3">{art.excerpt}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>}

      {(previousArticle || nextArticle) && (
        <nav aria-label="Article navigation" className="bg-background px-4 sm:px-6 pb-16">
          <div className="container-wide mx-auto grid border-y border-border sm:grid-cols-2">
            <div className="sm:border-r border-border">
              {previousArticle && <Link to={`/blog/${previousArticle.id}`} className="group flex items-center gap-4 py-7 sm:pr-8"><ArrowLeft className="h-5 w-5 text-accent group-hover:-translate-x-1 transition-transform" /><span><span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Previous article</span><span className="mt-1 block text-sm text-foreground group-hover:text-accent">{previousArticle.title}</span></span></Link>}
            </div>
            <div>
              {nextArticle && <Link to={`/blog/${nextArticle.id}`} className="group flex items-center justify-end gap-4 py-7 text-right sm:pl-8"><span><span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Next article</span><span className="mt-1 block text-sm text-foreground group-hover:text-accent">{nextArticle.title}</span></span><ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" /></Link>}
            </div>
          </div>
        </nav>
      )}

      {/* ── CTA ── */}
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

export default BlogArticlePage;
