import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { blogPosts } from "@/data/blogData";

const InsightsPreview = () => (
  <section className="section-padding bg-muted/40 relative overflow-hidden border-t border-border">
    <div className="container-wide mx-auto">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16">
        <ScrollReveal><h2 className="text-3xl sm:text-5xl text-foreground">Useful thinking for better digital decisions.</h2></ScrollReveal>
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-foreground">View all insights <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className={`grid gap-px bg-border border border-border ${blogPosts.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
        {blogPosts.slice(0, 2).map((post, index) => (
          <ScrollReveal key={post.id} delay={index * 0.08}>
            <Link to={`/blog/${post.id}`} className="group flex min-h-[320px] flex-col justify-between bg-background p-7 sm:p-10 hover:bg-card transition-colors">
              <div><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-accent">{post.category}</span><span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" />{post.readTime}</span></div><h3 className="mt-10 max-w-xl text-2xl sm:text-3xl leading-tight text-foreground group-hover:text-accent transition-colors">{post.title}</h3><p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p></div>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/60 group-hover:text-accent">Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsPreview;
