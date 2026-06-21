import { useParams, Navigate, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { categoryMeta, getProjectsByCategory, PortfolioCategory } from "@/data/portfolioData";
import { ChevronRight } from "lucide-react";

const VALID_CATEGORIES = Object.keys(categoryMeta) as PortfolioCategory[];

const CTA_LABELS: Record<PortfolioCategory, string> = {
  "web-development": "View Project",
  "ui-ux-design": "View Case Study",
  "graphic-brand-design": "View This Project",
  "social-media-management": "View Campaign",
  "videography-video-editing": "Watch Project",
  "motion-graphics-design": "View Motion Project",
};

const PortfolioCategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  if (!category || !VALID_CATEGORIES.includes(category as PortfolioCategory)) {
    return <Navigate to="/portfolio" replace />;
  }

  const cat = category as PortfolioCategory;
  const meta = categoryMeta[cat];
  const projects = getProjectsByCategory(cat);

  return (
    <PageLayout>
      <SEO
        path={`/portfolio/${cat}`}
        title={`${meta.label} Portfolio | Creative Emman Limited`}
        description={meta.seoDescription}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${meta.label} Portfolio`,
            url: `https://emman-engineered.vercel.app/portfolio/${cat}`,
          },
          buildBreadcrumbSchema([
            { name: "Portfolio", path: "/portfolio" },
            { name: meta.label, path: `/portfolio/${cat}` },
          ]),
        ]}
      />

      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-1.5 text-xs text-primary-foreground/40 mb-4">
              <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
              <ChevronRight size={12} />
              <span className="text-primary-foreground/60">{meta.label}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">Portfolio</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
              {meta.label}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-lg text-primary-foreground/60 max-w-xl">{meta.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-wide mx-auto">
          {projects.length === 0 ? (
            <p className="text-primary-foreground/50 text-center py-16">
              New {meta.label.toLowerCase()} projects are on the way. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.07}>
                  <ProjectCard project={project} ctaLabel={CTA_LABELS[cat]} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioCategoryPage;
