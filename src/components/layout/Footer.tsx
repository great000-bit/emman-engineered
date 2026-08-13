import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { SOCIAL_LINKS } from "@/components/shared/SocialLinks";

const linkGroups = [
  { title: "Services", links: [{ label: "Website Development", to: "/services/website-development" }, { label: "UI UX Design", to: "/services/ui-ux-design" }, { label: "Brand Identity", to: "/services/brand-identity-design" }, { label: "Social Media", to: "/services/social-media-management" }, { label: "Software", to: "/services/custom-web-applications" }, { label: "Media", to: "/services/creative-content-production" }] },
  { title: "Company", links: [{ label: "About", to: "/about" }, { label: "Work", to: "/work" }, { label: "Blog", to: "/blog" }, { label: "Pricing", to: "/pricing" }, { label: "Contact", to: "/contact" }] },
  { title: "Career", links: [{ label: "Internships", to: "/internships" }, { label: "Applications", to: "/applications" }, { label: "Trainings", to: "/trainings" }] },
  { title: "Industries", links: [{ label: "Oil & Gas", to: "/industries/oil-gas" }, { label: "Education", to: "/industries/education" }, { label: "Real Estate", to: "/industries/real-estate" }, { label: "Healthcare", to: "/industries/healthcare" }, { label: "Hospitality", to: "/industries/hospitality" }, { label: "SMEs & Startups", to: "/industries/smes-startups" }] },
];

const socialNames: Record<string, string> = { Instagram: "Instagram", X: "X", Facebook: "Facebook", LinkedIn: "LinkedIn" };
const getSocialName = (label: string) => Object.keys(socialNames).find((name) => label.includes(name)) ?? label;

const Footer = () => (
  <footer className="premium-footer relative z-10 border-t border-border bg-card text-foreground">
    <div className="container-wide mx-auto px-4 sm:px-6">
      <div className="grid gap-10 border-b border-border py-16 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end">
        <h2 className="max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[.92] tracking-[-.06em]">Let&apos;s build what your business needs next.</h2>
        <Link to="/contact" className="group inline-flex min-h-14 w-fit items-center rounded-full bg-foreground p-1 pl-6 font-bold text-background transition-colors hover:bg-accent hover:text-white"><span>Start a Project</span><span className="ml-5 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRight className="h-4 w-4" /></span></Link>
      </div>

      <div className="grid gap-14 py-16 lg:grid-cols-[1.1fr_1.9fr] lg:gap-20">
        <div>
          <Link to="/" aria-label="Creative Emman Limited home" className="inline-flex items-center gap-4"><BrandLogo location="footer" /><span className="text-xl font-bold">Creative <span className="text-accent">Emman</span> Limited</span></Link>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">A Port Harcourt-based creative technology company building connected brand, digital product, growth and media systems.</p>
          <div className="mt-8 space-y-3 text-sm text-foreground/70"><a href="mailto:creativeemmanlimited1@gmail.com" className="group flex items-center gap-3 hover:text-accent"><Mail className="h-4 w-4" /><span className="break-all">creativeemmanlimited1@gmail.com</span></a><a href="tel:+2347037845433" className="flex items-center gap-3 hover:text-accent"><Phone className="h-4 w-4" />+234 703 784 5433</a><p className="flex items-center gap-3"><MapPin className="h-4 w-4" />Port Harcourt, Rivers State, Nigeria</p></div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          {linkGroups.map((group) => <nav key={group.title} aria-label={group.title}><h3 className="mb-5 text-sm font-semibold text-foreground">{group.title}</h3><div className="space-y-3">{group.links.map((link) => <Link key={link.to} to={link.to} className="footer-link group flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><span>{link.label}</span><ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link>)}</div></nav>)}
        </div>
      </div>

      <div className="flex flex-col gap-6 border-t border-border py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Creative Emman Limited. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">{SOCIAL_LINKS.map(({ label, href }) => <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label} className="group inline-flex items-center gap-1 hover:text-foreground">{getSocialName(label)}<ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}</div>
        <nav aria-label="Legal" className="flex gap-5"><Link to="/privacy" className="hover:text-foreground">Privacy</Link><Link to="/terms" className="hover:text-foreground">Terms</Link></nav>
      </div>
    </div>
  </footer>
);

export default Footer;
