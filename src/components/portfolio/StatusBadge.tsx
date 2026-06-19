import { ProjectStatus } from "@/data/portfolioData";

const STYLES: Record<ProjectStatus, string> = {
  "Concept Case Study": "bg-accent/10 text-accent border-accent/25",
  "Internal Project": "bg-primary-foreground/10 text-primary-foreground/70 border-primary-foreground/20",
  "Client Project": "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
};

const StatusBadge = ({ status, className = "" }: { status: ProjectStatus; className?: string }) => (
  <span
    className={`inline-flex items-center text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border ${STYLES[status]} ${className}`}
  >
    {status}
  </span>
);

export default StatusBadge;
