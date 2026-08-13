import { ArrowLeft, ArrowUpRight, Linkedin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { getTeamMember } from "@/data/teamMembers";
import { buildBreadcrumbSchema } from "@/lib/seoSchema";

const TeamProfilePage = () => {
  const { slug = "" } = useParams();
  const member = getTeamMember(slug);
  if (!member) return <Navigate to="/about" replace />;
  const description = `${member.name} is ${member.role} at Creative Emman Limited, contributing expertise in ${member.discipline.toLowerCase()}.`;
  return (
    <PageLayout>
      <SEO path={`/team/${member.slug}`} title={`${member.name} — ${member.role} | Creative Emman Limited`} description={description} image={member.image} type="website" jsonLd={buildBreadcrumbSchema([{ name: "About", path: "/about" }, { name: member.name, path: `/team/${member.slug}` }])} />
      <section className="hero-atmosphere px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
        <div className="container-wide mx-auto">
          <Link to="/about" className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to About</Link>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20 xl:gap-28">
            <div className="overflow-hidden rounded-[1.25rem] bg-muted"><img src={member.image} alt={member.name} className="aspect-[4/5] h-full w-full object-cover" /></div>
            <div>
              <h1 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.055em]">{member.name}</h1>
              <p className="mt-6 text-xl font-semibold text-accent sm:text-2xl">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.discipline}</p>
              <p className="mt-8 max-w-2xl text-base leading-[1.85] text-muted-foreground sm:text-lg">{member.fullBio}</p>
              {member.skills.length > 0 && <div className="mt-9 flex flex-wrap gap-2" aria-label={`${member.name} skills`}>{member.skills.map((skill) => <span key={skill} className="rounded-full border border-border px-4 py-2 text-xs text-foreground/70">{skill}</span>)}</div>}
              <div className="mt-10 flex flex-wrap gap-3">
                {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 font-semibold text-background transition-colors hover:bg-accent hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>}
                {member.portfolio && <a href={member.portfolio} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-foreground/25 px-6 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">Portfolio <ArrowUpRight className="h-4 w-4" /></a>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamProfilePage;
