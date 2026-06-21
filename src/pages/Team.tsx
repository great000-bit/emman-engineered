import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { teamMembers } from "@/data/siteData";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink, ArrowLeft, Phone, Mail, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import websiteIcon from "@/assets/website-icon.png";
import BarFanCorner from "@/components/shared/BarFanCorner";

const TeamCarousel = () => {
  const doubled = [...teamMembers, ...teamMembers];

  return (
    <div className="overflow-hidden w-full">
      <style>{`
        @keyframes teamMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${teamMembers.length * 312}px);
          }
        }
        .animate-team-marquee {
          animation: teamMarquee 30s linear infinite;
        }
        .animate-team-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-team-marquee {
            animation: none;
            transform: none;
            overflow-x: auto;
          }
        }
      `}</style>
      <div
        className="flex gap-6 animate-team-marquee"
        style={{ width: "max-content" }}
      >
        {doubled.map((member, i) => (
          <div
            key={`${member.id}-${i}`}
            className="relative w-72 flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03]"
          >
            <div className="aspect-[3/4] flex items-center justify-center"
              style={{ background: "radial-gradient(ellipse at center, hsl(210 80% 55% / 0.08) 0%, transparent 70%)" }}
            >
              <img
                src={member.image}
                alt={`${member.name} — Creative Emman Limited`}
                className="w-full h-full object-cover logo-pulse"
              />
            </div>

            <div className="absolute inset-0 bg-primary/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6" style={{ transitionDuration: "250ms" }}>
              <h3 className="text-lg font-display font-bold text-primary-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent mb-2">{member.role}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {member.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">{tech}</span>
                ))}
                {member.stack.length > 4 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-foreground/5 text-primary-foreground/45 border border-primary-foreground/10">+{member.stack.length - 4} more</span>
                )}
              </div>
              <Link to={`/team/${member.id}`}>
                <Button variant="accent" size="sm" className="w-full">View Profile</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamPage = () => (
  <PageLayout>
    <SEO
      path="/team"
      title="Our Team | Creative Emman Limited — Digital Agency Nigeria"
      description="Meet the engineers, designers, and strategists behind Creative Emman Limited — a multidisciplinary team delivering premium digital products from Rivers State, Nigeria."
    />
    <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
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

      <ScrollReveal delay={0.06}>
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <img
            src={websiteIcon}
            alt="Creative Emman Limited"
            className="w-20 h-20 sm:w-28 sm:h-28 object-contain logo-pulse"
          />
          <span className="mt-4 text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/40">
            One Studio, Five Disciplines
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <TeamCarousel />
      </ScrollReveal>
    </section>

    <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
      <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
      <div className="relative container-narrow mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
            Work with the team
            <br />
            behind the work.
          </h2>
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
      <SEO
        path={`/team/${member.id}`}
        title={`${member.name} — ${member.role} | Creative Emman Limited`}
        description={member.bio}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          description: member.bio,
          worksFor: { "@type": "Organization", name: "Creative Emman Limited" },
        }}
      />
      <section className="bg-primary pt-32 px-6">
        <div className="container-narrow mx-auto">
          <Link to="/team" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
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
              <img
                src={member.image}
                alt={`${member.name} — Creative Emman Limited`}
                className="w-full h-full object-cover rounded-3xl logo-pulse"
              />
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
                {member.portfolio && member.portfolio !== "#" && member.portfolio !== "" && (
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                    <Button variant="accent" size="sm"><ExternalLink size={14} className="mr-1.5" /> Portfolio</Button>
                  </a>
                )}
                {member.linkedin && member.linkedin !== "#" && member.linkedin !== "" && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero-pill" size="sm"><Linkedin size={14} className="mr-1.5" /> LinkedIn</Button>
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`}>
                    <Button variant="hero-pill" size="sm"><Mail size={14} className="mr-1.5" /> Email</Button>
                  </a>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-12 p-6 rounded-xl border border-primary-foreground/10 backdrop-blur-lg bg-primary-foreground/[0.03]">
                <p className="text-sm text-primary-foreground/60 mb-3">Interested in working with {member.name.split(" ")[0]}?</p>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/contact">
                    <Button variant="accent">Work With Us</Button>
                  </Link>
                  <a href="mailto:creativeemmanlimited@gmail.com">
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
