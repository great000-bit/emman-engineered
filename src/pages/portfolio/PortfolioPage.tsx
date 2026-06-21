import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ProtectedImage from "@/components/shared/ProtectedImage";
import SEO from "@/components/SEO";
import { categoryMeta, portfolioCategoryOrder, getProjectsByCategory } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

const PortfolioPage = () => (
  <PageLayout>
    <SEO
      path="/portfolio"
      title="Portfolio | Creative Emman Limited — Digital Agency Nigeria"
      description="Explore Creative Emman Limited's work across web development, UI/UX design, brand identity, social media, video, and motion graphics."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Creative Emman Limited Portfolio",
        url: "https://emman-engineered.vercel.app/portfolio",
      }}
    />

    <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Our Work</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
            Portfolio <span className="text-accent">by Discipline</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-lg text-primary-foreground/60 max-w-xl">
            Browse our work by category. Each discipline is presented in the format that suits it best —
            live sites, case studies, campaign breakdowns, and motion previews.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioCategoryOrder.map((category, i) => {
          const meta = categoryMeta[category];
          const projects = getProjectsByCategory(category);
          const coverImage = projects[0]?.coverImage;

          return (
            <ScrollReveal key={category} delay={i * 0.06}>
              <Link
                to={`/portfolio/${category}`}
                className="group relative block rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-accent/25 transition-all duration-500 aspect-[16/10]"
              >
                {coverImage && (
                  <ProtectedImage
                    src={coverImage}
                    alt={`${meta.label} portfolio cover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                    {projects.length} {projects.length === 1 ? "Project" : "Projects"}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
                    {meta.label}
                  </h2>
                  <p className="text-sm text-primary-foreground/60 max-w-md mb-4">{meta.description}</p>
                  <span className="inline-flex items-stretch w-fit">
                    <span className="inline-flex items-center bg-white text-[#0a0a0b] text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-l-full">
                      Explore Category
                    </span>
                    <span className="inline-flex items-center justify-center w-9 aspect-square rounded-full bg-accent text-[#0a0a0b] -ml-px transition-transform duration-300 group-hover:rotate-45">
                      <ArrowRight size={16} strokeWidth={2.25} />
                    </span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  </PageLayout>
);

export default PortfolioPage;
