import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { trainings } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen } from "lucide-react";

const TrainingsPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="bg-primary pt-32 pb-20 px-6">
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

    {/* Programs */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading
          label="Programs"
          title="Available Courses"
          description="Each program is designed for practical, portfolio-ready outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainings.map((training, i) => (
            <ScrollReveal key={training.title} delay={i * 0.08}>
              <div className="card-elevated p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {training.duration}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{training.title}</h3>
                <p className="text-sm text-accent font-medium mb-3">{training.focus}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{training.description}</p>
                <Link to="/contact">
                  <Button variant="accent" size="sm" className="w-full">Enroll Now</Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials placeholder */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Testimonials</span>
          <h2 className="text-3xl md:text-4xl mt-3 mb-4">What Our Alumni Say</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Testimonials from past participants will appear here as our programs grow.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary text-center">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4">
            Invest in Your Growth
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            Join a structured program designed to transform your skills into professional capability.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Link to="/contact">
            <Button variant="hero">Get Started</Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default TrainingsPage;
