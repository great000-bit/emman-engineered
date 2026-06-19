import { Link } from "react-router-dom";
import { PortfolioProject } from "@/data/portfolioData";
import ProtectedImage from "@/components/shared/ProtectedImage";
import StatusBadge from "./StatusBadge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: PortfolioProject;
  ctaLabel?: string;
}

const ProjectCard = ({ project, ctaLabel = "View Project" }: ProjectCardProps) => {
  const goesLive = Boolean(project.liveUrl);

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
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/70 group-hover:text-accent group-hover:gap-2.5 transition-all">
        {goesLive ? ctaLabel : ctaLabel}
        {goesLive ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
      </span>
    </>
  );

  const cardClasses =
    "group block rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.025] hover:bg-primary-foreground/[0.045] hover:border-accent/25 transition-all duration-500 p-4";

  if (goesLive) {
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {cardInner}
      </a>
    );
  }

  return (
    <Link to={`/portfolio/${project.category}/${project.slug}`} className={cardClasses}>
      {cardInner}
    </Link>
  );
};

export default ProjectCard;
