import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { trainings } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Phone, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import BarFanCorner from "@/components/shared/BarFanCorner";

const TrainingsPage = () => (
  <PageLayout>
    <SEO
      path="/trainings"
      title="Trainings | Creative Emman Limited"
      description="Explore Creative Emman Limited training opportunities for creatives, developers, designers, marketers, and emerging digital talent."
      jsonLd={[
        ...trainings.map((t) => ({
          "@context": "https://schema.org",
          "@type": "Course",
          name: t.title,
          description: t.description,
          provider: { "@type": "Organization", name: "Creative Emman Limited", sameAs: "https://www.creativeemmanlimited.com" },
        })),
        buildBreadcrumbSchema([{ name: "Trainings", path: "/trainings" }]),
      ]}
    />
    <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Education</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
            Training Programs Built for <span className="text-accent">Mastery</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-lg text-primary-foreground/60 max-w-xl">
            Structured learning paths designed by industry practitioners. We don't teach theory — we build capability.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        <SectionHeading
          label="Programs"
          title="Available Courses"
          description="Each program is designed for practical, portfolio-ready outcomes."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainings.map((training, i) => (
            <ScrollReveal key={training.title} delay={i * 0.08}>
              <div className="p-8 h-full flex flex-col rounded-xl border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all hover:-translate-y-1"
                style={{ transitionDuration: "var(--duration-fast)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/10">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary-foreground/50">
                    <Clock size={12} />
                    {training.duration}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-primary-foreground mb-2">{training.title}</h3>
                <p className="text-sm text-accent font-medium mb-3">{training.focus}</p>
                <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6 flex-1">{training.description}</p>
                <Link to="/contact">
                  <Button variant="accent" size="sm" className="w-full">Enroll Now</Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Testimonials</span>
          <h2 className="text-3xl md:text-4xl text-primary-foreground mt-3 mb-4">What Our Alumni Say</h2>
          <p className="text-primary-foreground/50 max-w-md mx-auto mb-6">
            Testimonials from past participants will appear here as our programs grow.
          </p>
          <Link to="/testimonials">
            <Button variant="hero-pill" size="sm">View Testimonials</Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
      <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <div className="relative container-narrow mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
            Invest in skills
            <br />
            that actually ship.
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/55 mb-8 max-w-md mx-auto">
            Join a structured program designed to turn what you learn into work you can show.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
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

export default TrainingsPage;
