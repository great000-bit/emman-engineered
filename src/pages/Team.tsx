import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { teamMembers } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink, ArrowLeft, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const TeamCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...teamMembers, ...teamMembers];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6"
        animate={{ x: isPaused ? undefined : [0, -(teamMembers.length * 320)] }}
        transition={
          isPaused
            ? { type: "tween", duration: 0 }
            : { x: { duration: 30, repeat: Infinity, ease: "linear" } }
        }
        style={{ width: "fit-content" }}
      >
        {doubled.map((member, i) => (
          <div
            key={`${member.id}-${i}`}
            className="relative w-72 flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03]"
          >
            <div className="aspect-[3/4] flex items-center justify-center"
              style={{ background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.08) 0%, transparent 70%)" }}
            >
              <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center border border-accent/20">
                <span className="text-2xl font-display font-bold text-accent">{member.name[0]}</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-primary/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6" style={{ transitionDuration: "250ms" }}>
              <h3 className="text-lg font-display font-bold text-primary-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent mb-2">{member.role}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {member.stack.map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">{tech}</span>
                ))}
              </div>
              <p className="text-xs text-primary-foreground/60 leading-relaxed mb-4">{member.bio}</p>
              <Link to={`/team/${member.id}`}>
                <Button variant="accent" size="sm" className="w-full">View Profile</Button>
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TeamPage = () => (
  <PageLayout>
    <section className="bg-primary pt-32 pb-20 px-6">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <span className="text-sm font-medium tracking-widest uppercase text-accent">Our People</span>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-3 mb-4 max-w-3xl">
            The Team Behind the <span className="text-accent">Execution</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-lg text-primary-foreground/60 max-w-xl">
            A multidisciplinary team of engineers, designers, and strategists united by a commitment to excellence.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container-wide mx-auto mb-8">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl text-primary-foreground mb-2">Meet the Team</h2>
          <p className="text-primary-foreground/50">Hover to learn more about each team member.</p>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.1}>
        <TeamCarousel />
      </ScrollReveal>
    </section>

    <section className="section-padding bg-primary text-center border-t border-primary-foreground/5">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-6">
            Work With Our Team
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero">Start a Project</Button>
            </Link>
            <Button variant="hero-pill" onClick={() => window.open("https://wa.me/2347037845433", "_blank")}>
                <Phone size={16} className="mr-2" /> WhatsApp Us
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export const TeamProfile = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center bg-primary">
          <p className="text-primary-foreground">Team member not found.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="bg-primary pt-32 pb-12 px-6">
        <div className="container-narrow mx-auto">
          <Link to="/team" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Team
          </Link>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto grid md:grid-cols-3 gap-12">
          <ScrollReveal>
            <div className="aspect-[3/4] rounded-xl border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03] flex items-center justify-center"
              style={{ background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.08) 0%, transparent 70%)" }}
            >
              <div className="w-24 h-24 rounded-full bg-accent/15 flex items-center justify-center border border-accent/20">
                <span className="text-4xl font-display font-bold text-accent">{member.name[0]}</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="md:col-span-2">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl text-primary-foreground mb-2">{member.name}</h1>
              <p className="text-accent font-medium mb-6">{member.role}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-primary-foreground/60 leading-relaxed mb-8">{member.bio}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {member.stack.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">{tech}</span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="flex gap-3 flex-wrap">
                <a href={member.portfolio}>
                  <Button variant="accent" size="sm"><ExternalLink size={14} /> Portfolio</Button>
                </a>
                <a href={member.linkedin}>
                  <Button variant="hero-pill" size="sm"><Linkedin size={14} /> LinkedIn</Button>
                </a>
                <Button variant="hero-pill" size="sm" onClick={() => window.open("https://wa.me/2347037845433", "_blank")}><Phone size={14} /> Contact</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-12 p-6 rounded-xl border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03]">
                <p className="text-sm text-primary-foreground/60 mb-3">Interested in working with {member.name.split(" ")[0]}?</p>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/contact">
                    <Button variant="accent">Work With Us</Button>
                  </Link>
                  <a href="mailto:creativeemman@gmail.com">
                    <Button variant="hero-pill" size="sm"><Mail size={14} /> Email Us</Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
