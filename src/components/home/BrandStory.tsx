import ScrollReveal from "@/components/shared/ScrollReveal";
import logo3D from "@/assets/creative-emman-3d-logo-transparent.webp";

const BrandStory = () => (
  <section className="section-padding bg-primary border-t border-primary-foreground/5">
    <div className="container-wide mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Our Story</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-3 mb-6">
            Built on Precision, Driven by Purpose
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-primary-foreground/60 leading-relaxed mb-4">
            Creative Emman Limited is a multidisciplinary creative and technology company. We exist at the intersection of engineering discipline, strategy, design, and storytelling — built on a singular conviction that digital excellence demands more than creativity alone.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <p className="text-primary-foreground/60 leading-relaxed mb-4">
            We help founders, startups, businesses, and brands build a digital presence that actually performs — across website development, UI/UX design, graphic and brand design, social media management, videography, video editing, and motion graphics design. Every discipline under one roof, working from the same strategic brief.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.28}>
          <p className="text-primary-foreground/60 leading-relaxed">
            Our mission is to deliver institutional-grade digital solutions that scale with ambition. Every project we undertake is structured, measured, and optimized — because premium outcomes require premium processes. We are built on precision, premium execution, creativity, and growth.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="flex items-center justify-center py-8 md:py-0">
          <div
            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 transition-transform duration-300 hover:scale-105 [perspective:1200px]"
          >
            {/* Ambient glow behind the logo */}
            <div
              className="absolute inset-[-20%] rounded-full blur-3xl opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--blue-glow) / 0.35) 0%, hsl(var(--accent) / 0.15) 45%, transparent 75%)",
              }}
            />
            <img
              src={logo3D}
              alt="Creative Emman 3D logo"
              className="logo-rotate-3d relative w-full h-full object-contain drop-shadow-[0_0_40px_hsl(var(--blue-glow)/0.45)]"
              style={{ transformStyle: "preserve-3d" }}
              draggable={false}
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BrandStory;
