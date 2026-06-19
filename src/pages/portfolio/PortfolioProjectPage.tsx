import { useParams, Navigate, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ProtectedImage from "@/components/shared/ProtectedImage";
import SEO from "@/components/SEO";
import StatusBadge from "@/components/portfolio/StatusBadge";
import AssetMarquee from "@/components/portfolio/AssetMarquee";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, categoryMeta, PortfolioCategory } from "@/data/portfolioData";
import { ChevronRight, ExternalLink, Play, ArrowRight } from "lucide-react";

const PortfolioProjectPage = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project || !category || project.category !== category) {
    return <Navigate to="/portfolio" replace />;
  }

  const meta = categoryMeta[project.category as PortfolioCategory];

  return (
    <PageLayout>
      <SEO
        path={`/portfolio/${project.category}/${project.slug}`}
        title={`${project.title} | Creative Emman Portfolio`}
        description={project.shortDescription}
      />

      {/* Hero */}
      <section className="bg-primary pt-24 sm:pt-32 pb-10 sm:pb-14 px-4 sm:px-6">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-1.5 text-xs text-primary-foreground/40 mb-4 flex-wrap">
              <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
              <ChevronRight size={12} />
              <Link to={`/portfolio/${project.category}`} className="hover:text-accent transition-colors">{meta.label}</Link>
              <ChevronRight size={12} />
              <span className="text-primary-foreground/60">{project.title}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <StatusBadge status={project.status} />
              <span className="text-xs text-primary-foreground/40 uppercase tracking-wider">{project.projectType}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 max-w-3xl leading-tight">
              {project.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-lg text-primary-foreground/60 max-w-2xl">{project.story}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category-specific body */}
      {project.category === "web-development" && <WebDevDetail project={project} />}
      {project.category === "ui-ux-design" && <UiUxDetail project={project} />}
      {project.category === "graphic-brand-design" && <BrandDetail project={project} />}
      {project.category === "social-media-management" && <SocialDetail project={project} />}
      {project.category === "videography-video-editing" && <VideoDetail project={project} />}
      {project.category === "motion-graphics-design" && <MotionDetail project={project} />}

      {/* Shared closing CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl text-primary-foreground mb-4">
              Want something like this for your brand?
            </h2>
            <Link to="/contact">
              <Button variant="accent">
                Start Your Project <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

// ---------- Category-specific detail sections ----------

import type { PortfolioProject } from "@/data/portfolioData";

const SectionWrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`section-padding bg-primary ${className}`}>
    <div className="container-narrow mx-auto">{children}</div>
  </section>
);

const WebDevDetail = ({ project }: { project: PortfolioProject }) => (
  <>
    <SectionWrap>
      <ScrollReveal>
        <div className="rounded-2xl overflow-hidden border border-primary-foreground/10 mb-10">
          <ProtectedImage src={project.coverImage} alt={`${project.title} website preview`} className="w-full h-full object-cover" />
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-10">
        <ScrollReveal>
          <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">Main Features</h3>
          <ul className="space-y-2">
            {project.features?.map((f) => (
              <li key={f} className="text-sm text-primary-foreground/60 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">Tools &amp; Technologies</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.toolsUsed?.map((t) => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">{t}</span>
            ))}
          </div>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="accent">View Project <ExternalLink size={15} className="ml-2" /></Button>
            </a>
          ) : (
            <p className="text-sm text-primary-foreground/40">Live link not yet public for this concept case study.</p>
          )}
        </ScrollReveal>
      </div>
    </SectionWrap>
  </>
);

const UiUxDetail = ({ project }: { project: PortfolioProject }) => (
  <SectionWrap>
    <div className="space-y-16">
      {project.behanceStyleSections?.map((sec, i) => (
        <ScrollReveal key={sec.heading} delay={i * 0.05}>
          <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-3">{sec.heading}</h3>
          <p className="text-primary-foreground/60 leading-relaxed max-w-2xl mb-6">{sec.description}</p>
          {i === 0 && (
            <div className="rounded-2xl overflow-hidden border border-primary-foreground/10">
              <ProtectedImage src={project.coverImage} alt={`${project.title} hero mockup`} className="w-full h-full object-cover" />
            </div>
          )}
        </ScrollReveal>
      ))}
    </div>
  </SectionWrap>
);

const BrandDetail = ({ project }: { project: PortfolioProject }) => (
  <>
    {project.logoImage && (
      <SectionWrap>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-4">
            <div className="w-28 h-28 rounded-2xl overflow-hidden border border-primary-foreground/10 mb-6">
              <ProtectedImage src={project.logoImage} alt={`${project.clientName} logo`} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-display font-semibold text-primary-foreground">{project.clientName}</h3>
          </div>
        </ScrollReveal>
      </SectionWrap>
    )}

    <SectionWrap>
      <ScrollReveal>
        <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-3">Story Behind the Logo</h3>
        <p className="text-primary-foreground/60 leading-relaxed max-w-2xl">{project.story}</p>
      </ScrollReveal>
    </SectionWrap>

    {project.colorPalette && (
      <SectionWrap>
        <ScrollReveal>
          <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-6">Color Palette</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.colorPalette.map((c) => (
              <div key={c.hex} className="rounded-xl overflow-hidden border border-primary-foreground/10">
                <div className="h-20" style={{ backgroundColor: c.hex }} />
                <div className="p-3 bg-primary-foreground/[0.03]">
                  <p className="text-sm text-primary-foreground font-medium">{c.name}</p>
                  <p className="text-xs text-primary-foreground/40 uppercase">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrap>
    )}

    {project.typography && (
      <SectionWrap>
        <ScrollReveal>
          <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-6">Typography</h3>
          <div className="space-y-6">
            {project.typography.map((t) => (
              <div key={t.role} className="border-b border-primary-foreground/10 pb-6">
                <p className="text-xs text-accent uppercase tracking-wider mb-2">{t.role} — {t.fontStack}</p>
                <p className="text-2xl text-primary-foreground" style={{ fontFamily: t.fontStack }}>{t.sample}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrap>
    )}

    {project.assets && (
      <SectionWrap>
        <ScrollReveal>
          <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-6">Brand Assets</h3>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <AssetMarquee images={project.assets} />
        </ScrollReveal>
      </SectionWrap>
    )}
  </>
);

const SocialDetail = ({ project }: { project: PortfolioProject }) => (
  <>
    <SectionWrap>
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <ScrollReveal>
          <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">Campaign Objective</h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">{project.campaignObjective}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">Content Direction</h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">{project.contentDirection}</p>
        </ScrollReveal>
      </div>
    </SectionWrap>

    {project.samplePosts && (
      <SectionWrap>
        <ScrollReveal>
          <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-6">Sample Posts</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.samplePosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="rounded-xl overflow-hidden border border-primary-foreground/10">
                <div className="aspect-square">
                  <ProtectedImage src={post.image} alt="Sample social media post" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-primary-foreground/55 p-3 leading-relaxed">{post.caption}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrap>
    )}

    {project.sampleMetrics && (
      <SectionWrap>
        <ScrollReveal>
          <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-4">Sample Campaign Metrics</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {project.sampleMetrics.map((m) => (
              <div key={m.label}>
                <p className="text-3xl font-display font-bold text-accent mb-1">{m.value}</p>
                <p className="text-xs text-primary-foreground/50">{m.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrap>
    )}
  </>
);

const VideoDetail = ({ project }: { project: PortfolioProject }) => (
  <SectionWrap>
    <ScrollReveal>
      <div className="relative rounded-2xl overflow-hidden border border-primary-foreground/10 aspect-video mb-8 group cursor-pointer">
        <ProtectedImage src={project.coverImage} alt={`${project.title} video preview`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={24} className="text-accent-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>
      {project.videoType && (
        <span className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6 inline-block">
          {project.videoType}
        </span>
      )}
      <Button variant="accent">Watch Project <Play size={14} className="ml-2" /></Button>
    </ScrollReveal>
  </SectionWrap>
);

const MotionDetail = ({ project }: { project: PortfolioProject }) => (
  <>
    <SectionWrap>
      <ScrollReveal>
        <div className="relative rounded-2xl overflow-hidden border border-primary-foreground/10 aspect-video mb-6">
          <ProtectedImage src={project.coverImage} alt={`${project.title} motion preview`} className="w-full h-full object-cover" />
        </div>
        {project.motionUseCase && (
          <span className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 inline-block">
            {project.motionUseCase}
          </span>
        )}
      </ScrollReveal>
    </SectionWrap>

    {project.storyboard && (
      <SectionWrap>
        <ScrollReveal>
          <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-6">Storyboard</h3>
        </ScrollReveal>
        <div className="space-y-5">
          {project.storyboard.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.06}>
              <div className="flex gap-5 items-start p-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.02]">
                <span className="text-2xl font-display font-bold text-accent/60 flex-shrink-0">{s.step}</span>
                <p className="text-sm text-primary-foreground/65 leading-relaxed pt-1">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrap>
    )}
  </>
);

export default PortfolioProjectPage;
