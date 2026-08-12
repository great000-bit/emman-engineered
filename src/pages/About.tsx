import PageLayout from "@/components/layout/PageLayout";
import { teamMembers } from "@/data/teamMembers";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink, Mail, Phone, ArrowRight, ShieldCheck, Heart, Users, Compass, Globe } from "lucide-react";
import SEO from "@/components/SEO";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";
import { Link } from "react-router-dom";
import BarFanCorner from "@/components/shared/BarFanCorner";
import founderImg from "@/assets/GreatEmman-wori.jpeg";
import StartedIMage from "@/assets/StartImage.jpg"

const AboutPage = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality is non-negotiable",
      desc: "We don't make compromises on performance, structure, or visual elegance. Every line of code and pixel must serve a purpose."
    },
    {
      icon: Users,
      title: "Humans over systems",
      desc: "Our solutions are built for people first. Technology is just the medium to improve lives and business relationships."
    },
    {
      icon: Compass,
      title: "Transparency in everything",
      desc: "Open communication, honest timelines, and clear deliverables. We treat your projects as if they were our own."
    },
    {
      icon: Heart,
      title: "Community over competition",
      desc: "We believe in building together. We actively train and mentor the next generation of designers and engineers to grow the local tech ecosystem."
    },
    {
      icon: Globe,
      title: "African excellence, global standards",
      desc: "We are here to prove that local execution and talent from Port Harcourt can meet and exceed international benchmarks."
    }
  ];

  return (
    <PageLayout>
      <SEO
        path="/about"
        title="About Us | Creative Emman Limited"
        description="Learn more about Creative Emman Limited, our values, our founder, and the talented team building high-performance digital experiences."
        jsonLd={[
          buildBreadcrumbSchema([{ name: "About", path: "/about" }]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-background pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-wide mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 inline-block mb-4">
              Who We Are
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-2 mb-6 max-w-4xl mx-auto leading-[1.15]">
              A digital agency built for Africa's <span className="font-serif italic font-normal text-accent/90">digital future</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="text-base sm:text-lg text-foreground/60 max-w-3xl mx-auto mb-10 leading-relaxed font-body">
              Creative Emman Limited is a forward-thinking digital agency focused on building premium digital solutions. We combine design precision with technical engineering to empower businesses across the globe.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Where We Started Section */}
      <section className="section-padding bg-background border-t border-foreground/10">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
                Where Creative Emman started and where <span className="font-serif italic font-normal text-accent">we're going</span>
              </h2>
              <p className="text-foreground/60 leading-relaxed font-body">
                Founded in Port Harcourt, Creative Emman Limited started as a small design studio with a massive vision: to build world-class digital products and brand campaigns right from the heart of the Niger Delta.
              </p>
              <p className="text-foreground/60 leading-relaxed font-body">
                Today, we have grown into a multidisciplinary team serving clients globally. We are committed to showing that world-class design, engineering, and digital growth strategies can be engineered locally to drive international impact.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-foreground/10">
                <img
                  src={StartedIMage}
                  alt="Team collaboration in modern workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-foreground/[0.01] border-t border-foreground/10">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
                The values that guide everything <span className="font-serif italic font-normal text-accent">we do</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="p-8 border border-foreground/10 rounded-2xl bg-card hover:bg-foreground/[0.01] transition-all h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">{val.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed font-body">{val.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-background border-t border-foreground/10">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Image */}
            <ScrollReveal className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 aspect-[3/4]">
                <img
                  src={founderImg}
                  alt="Great Emman-wori - Founder of Creative Emman Limited"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </ScrollReveal>

            {/* Founder Bio */}
            <ScrollReveal delay={0.16} className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-widest text-accent uppercase block">
                  Founder & Vision Architect
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
                  About the <span className="font-serif italic font-normal text-accent">founder</span>
                </h2>
                <h3 className="text-xl font-bold text-foreground mt-2">Great Emman-wori</h3>
              </div>

              <div className="space-y-4 text-foreground/65 leading-relaxed font-body text-sm">
                <p>
                  Great Emman-wori established Creative Emman Limited with a vision to build premium digital infrastructure and branding solutions. He works at the unique intersection of software engineering, cinematography, brand identity strategy, and creative direction.
                </p>
                <p>
                  With years of experience directing high-performance digital projects, visual campaigns, and technical software deliveries, he has guided the agency to scale operation boundaries, mentoring young Nigerian creatives and tech practitioners in the process.
                </p>
                <p>
                  Under his direction, the agency has grown from Port Harcourt to service global clients, adhering to strict, high-fidelity engineering standards and visual brand aesthetics.
                </p>
              </div>

              <div className="pt-4 flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => window.open("https://www.linkedin.com/in/great-emman-wori", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn Profile
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                  onClick={() => window.open("mailto:greatemmanwori@gmail.com", "_blank")}
                >
                  <Mail className="w-4 h-4 mr-2" /> Email Me
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section-padding bg-foreground/[0.01] border-t border-foreground/10">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
                The people behind <span className="font-serif italic font-normal text-accent">Creative Emman</span>
              </h2>
              <p className="text-sm text-foreground/60 mt-3 font-body">
                Our multidisciplinary team unites to engineer high-fidelity applications and design languages.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <ScrollReveal key={member.id} delay={idx * 0.05}>
                <div className="group border border-foreground/10 rounded-2xl overflow-hidden bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="aspect-[3/4] overflow-hidden bg-foreground/5 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-bold font-display text-foreground group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-foreground/50 mt-1 font-body">{member.role}</p>
                    </div>

                    <div className="flex gap-3 pt-3 border-t border-foreground/5">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/40 hover:text-accent transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/40 hover:text-accent transition-colors"
                          aria-label={`${member.name} Portfolio`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="section-padding bg-background border-t border-foreground/10">
        <div className="container-narrow mx-auto text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
              Find us in <span className="font-serif italic font-normal text-accent">Port Harcourt</span>
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto mt-4 leading-relaxed font-body">
              Creative Emman Limited is headquartered in Port Harcourt, Rivers State, Nigeria. We service clients globally with our modern remote integration workspace.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="p-6 border border-foreground/10 rounded-xl bg-card">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Location</h3>
              <p className="text-sm text-foreground/80 font-body">Port Harcourt, Rivers State, Nigeria</p>
            </div>
            <div className="p-6 border border-foreground/10 rounded-xl bg-card">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Email</h3>
              <a href="mailto:creativeemmanlimited1@gmail.com" className="text-sm text-foreground/80 hover:text-accent transition-colors font-body">
                creativeemmanlimited1@gmail.com
              </a>
            </div>
            <div className="p-6 border border-foreground/10 rounded-xl bg-card">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Phone</h3>
              <a href="tel:07037845433" className="text-sm text-foreground/80 hover:text-accent transition-colors font-body">
                07037845433
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative overflow-hidden bg-primary text-center py-20 sm:py-28">
        <BarFanCorner corner="top-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-left" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="top-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <BarFanCorner corner="bottom-right" className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] opacity-80" />
        <div className="relative container-narrow mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-5 leading-tight">
              Which service
              <br />
              starts your next win?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-base text-primary-foreground/55 max-w-md mx-auto mb-8">
              Pick a lane or bring the whole brief — we'll map out the right team and timeline.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
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
};

export default AboutPage;
