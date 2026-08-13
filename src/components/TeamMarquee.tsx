import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutTeamMembers } from "@/data/teamMembers";
import { Marquee } from "@/components/ui/marquee";

type Member = (typeof aboutTeamMembers)[number];

const TeamCard = ({ member, active, onActivate, onDeactivate }: { member: Member; active: boolean; onActivate: () => void; onDeactivate: () => void }) => (
  <article
    className={`team-profile-card group relative w-[270px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card sm:w-[310px] ${active ? "is-active" : ""}`}
    tabIndex={0}
    onMouseEnter={onActivate}
    onMouseLeave={onDeactivate}
    onFocus={onActivate}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) onDeactivate(); }}
    onClick={onActivate}
  >
    <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={member.image} alt={member.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] group-focus-within:scale-[1.02]" /></div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060a11] via-[#060a11]/95 to-transparent px-5 pb-5 pt-16 text-white">
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="mt-1 text-sm text-white/65">{member.role}</p>
      <p className="mt-1 text-xs text-[#25b7f7]">{member.discipline}</p>
      <Link to={`/team/${member.slug}`} onClick={(event) => event.stopPropagation()} className="team-profile-cta mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition-all hover:bg-[#12aef3] hover:text-white focus-visible:opacity-100">View {member.firstName}&apos;s Profile <ArrowUpRight className="h-3.5 w-3.5" /></Link>
    </div>
  </article>
);

const TeamMarquee = () => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const members = aboutTeamMembers;
  return (
    <div className={`team-marquee-v2 ${activeSlug ? "is-engaged" : ""}`} onMouseLeave={() => setActiveSlug(null)}>
      <div className="container-wide mx-auto mb-4 flex min-h-10 items-center justify-between gap-4 px-4 sm:px-6">
        <span className="text-xs text-muted-foreground">
          Hover or select a profile to pause and explore
        </span>
        <button
          type="button"
          onClick={() => { setPaused((value) => !value); setActiveSlug(null); }}
          aria-pressed={paused}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          {paused ? "Resume marquee" : "Pause marquee"}
        </button>
      </div>
      <Marquee duration={58} repeat={2} paused={paused || Boolean(activeSlug)} className="py-2 [--gap:1rem]">
        {members.map((member) => <TeamCard key={member.id} member={member} active={activeSlug === member.slug} onActivate={() => setActiveSlug(member.slug)} onDeactivate={() => setActiveSlug(null)} />)}
      </Marquee>
    </div>
  );
};

export default TeamMarquee;
