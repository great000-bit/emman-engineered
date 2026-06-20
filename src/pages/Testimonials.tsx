import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import BarFanCorner from "@/components/shared/BarFanCorner";
import SEO from "@/components/SEO";

const testimonials = [
  {
    name: "Adaeze Nwosu",
    company: "Finova Technologies",
    text: "Creative Emman delivered an enterprise-grade platform that exceeded our expectations. Their technical precision and structured delivery were unmatched.",
  },
  {
    name: "James Okonkwo",
    company: "Atlas Logistics",
    text: "From concept to deployment, their team demonstrated exceptional engineering discipline. Our web platform now handles 10x the traffic seamlessly.",
  },
  {
    name: "Fatima Hassan",
    company: "Meridian Health",
    text: "The UI/UX redesign transformed our patient portal. User engagement increased by 340% within the first quarter.",
  },
  {
    name: "Michael Ade",
    company: "Vertex Capital",
    text: "Their brand identity work gave us the institutional presence we needed. Every deliverable was precise, strategic, and beautifully executed.",
  },
  {
    name: "Chioma Eze",
    company: "NovaTech Solutions",
    text: "The video production quality rivaled agencies three times their size. Creative Emman is a serious technology partner.",
  },
  {
    name: "Daniel Osei",
    company: "Prism Ventures",
    text: "We've worked with many agencies. Creative Emman is the only one that treats digital execution as engineering. Highly recommended.",
  },
  {
    name: "Blessing Amadi",
    company: "Zenith Education",
    text: "Their training program fundamentally changed how our team approaches frontend development. Structured, practical, and world-class.",
  },
  {
    name: "Kola Balogun",
    company: "Apex Realty",
    text: "The photography and videography elevated our brand beyond anything we imagined. Every frame felt cinematic and intentional.",
  },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: typeof testimonials; direction?: "left" | "right"; speed?: number }) => {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...items, ...items];
  const totalWidth = items.length * 400;

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left"
            ? isPaused ? undefined : [0, -totalWidth]
            : isPaused ? undefined : [-totalWidth, 0],
        }}
        transition={
          isPaused
            ? { type: "tween", duration: 0 }
            : { x: { duration: speed, repeat: Infinity, ease: "linear" } }
        }
        style={{ width: "fit-content" }}
      >
        {doubled.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="w-[300px] sm:w-[380px] flex-shrink-0 rounded-xl p-6 sm:p-8 border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all group"
            style={{ transitionDuration: "var(--duration-fast)" }}
          >

            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div>
              <p className="text-sm font-display font-semibold text-primary-foreground">{t.name}</p>
              <p className="text-xs text-accent">{t.company}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsPage = () => {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4);

  return (
    <PageLayout>
      <SEO
        path="/testimonials"
        title="Client Testimonials | Creative Emman — Digital Agency Nigeria"
        description="What clients say about working with Creative Emman. Real results from website, branding and digital projects across Nigeria and beyond."
        jsonLd={testimonials.map((t) => ({
          "@context": "https://schema.org",
          "@type": "Review",
          reviewBody: t.text,
          author: { "@type": "Person", name: t.name },
          itemReviewed: { "@type": "Organization", name: "Creative Emman" },
        }))}
      />
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-widest uppercase text-accent">Testimonials</span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
              What Our Clients <span className="text-accent">Say</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="text-lg text-primary-foreground/60 max-w-xl">
              Real feedback from partners who trusted us to build exceptional digital experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-primary py-16 space-y-8">
        <ScrollReveal>
          <MarqueeRow items={firstRow} direction="left" speed={35} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <MarqueeRow items={secondRow} direction="right" speed={40} />
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
        <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <div className="relative container-narrow mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-4 leading-tight">
              Your story could
              <br />
              read like these.
            </h2>
            <p className="text-sm md:text-base text-primary-foreground/55 mb-8 max-w-md mx-auto">
              Every result above started with one message. Send yours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-row gap-3 justify-center items-center">
              <Link to="/contact">
                <Button variant="light-fill">
                  Let's Work Together <ArrowRight size={15} className="ml-1.5" />
                </Button>
              </Link>
              <Button variant="dark-outline" onClick={() => window.open("https://wa.me/2349051380648", "_blank")}>
                  <Phone size={14} className="mr-1.5" /> WhatsApp
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/50">
              <a href="mailto:creativeemmanlimited@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={14} /> creativeemmanlimited@gmail.com
              </a>
              <a href="https://wa.me/2349051380648" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={14} /> 09051380648
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default TestimonialsPage;
