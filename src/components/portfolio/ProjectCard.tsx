import { Link } from "react-router-dom";
import { PortfolioProject } from "@/data/portfolioData";
import ProtectedImage from "@/components/shared/ProtectedImage";
import StatusBadge from "./StatusBadge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: PortfolioProject;
  ctaLabel?: string;
}

// The card ALWAYS navigates to the internal case-study detail page.
// If a liveUrl exists, the "Visit Live Site" button is shown on the detail
// page itself — not here — so the card click is never hijacked.
const ProjectCard = ({ project, ctaLabel = "View Case Study" }: ProjectCardProps) => {
  const cardInner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
        <ProtectedImage
          src={project.coverImage}
          alt={`${project.title} — cover image`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1.5">{project.projectType}</p>
      <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">{project.title}</h3>
      <p className="text-sm text-primary-foreground/55 leading-relaxed mb-4 line-clamp-2">{project.shortDescription}</p>
      {/* Visual-only rendering of the hero CTA shape (pill + circular icon). The whole card
          is already the clickable element, so this is presentational, not a nested link —
          nesting a real <a>/<Link> here would be invalid HTML and break click semantics. */}
      <span className="inline-flex items-stretch w-fit">
        <span className="inline-flex items-center bg-white text-[#0a0a0b] text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-l-full">
          {ctaLabel}
        </span>
        <span className="inline-flex items-center justify-center w-9 aspect-square rounded-full bg-accent text-[#0a0a0b] -ml-px transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={16} strokeWidth={2.25} />
        </span>
      </span>
    </>
  );

  const cardClasses =
    "group block rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.025] hover:bg-primary-foreground/[0.045] hover:border-accent/25 transition-all duration-500 p-4";

  return (
    <Link to={`/portfolio/${project.category}/${project.slug}`} className={cardClasses}>
      {cardInner}
    </Link>
  );
};

export default ProjectCard;
