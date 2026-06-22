import { Link } from "react-router-dom";
import { navLinks } from "@/data/siteData";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import SocialLinks from "@/components/shared/SocialLinks";
import websiteIcon from "@/assets/website-icon.png";

const Footer = () => (
  <footer className="relative bg-primary text-primary-foreground overflow-hidden">
    {/* Subtle motion gradient bg */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, hsl(200 100% 48% / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, hsl(200 100% 58% / 0.3) 0%, transparent 50%)",
      }}
    />

    <div className="container-wide mx-auto px-4 sm:px-6 relative z-10">
      {/* Big rounded CTA, top/center of the footer */}
      <div className="pt-16 sm:pt-24 pb-12 sm:pb-16 flex flex-col items-center text-center">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 sm:gap-3 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-semibold text-accent-foreground shadow-2xl transition-transform duration-300 hover:scale-[1.03]"
          style={{
            background: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--blue-glow)) 100%)",
            boxShadow: "0 0 60px hsl(200 100% 55% / 0.35)",
          }}
        >
          Let's Partner Up
          <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-12 sm:pb-16">
        {/* Logo column */}
        <div>
          <img
            src={websiteIcon}
            alt="Creative Emman Limited logo"
            className="w-16 h-16 object-contain logo-pulse mb-4"
          />
          <span className="font-brand text-lg font-bold block mb-3 leading-tight">
            Creative<span className="text-accent">Emman</span>
            <span className="text-primary-foreground/50 font-medium"> Limited</span>
          </span>
          <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
            Premium digital execution engineered with excellence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/40">
            Navigation
          </h4>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/40">
            Services
          </h4>
          <nav className="flex flex-col gap-3">
            {["Web Development", "UI/UX Design", "Graphic Design", "Videography", "Motion Graphics Design", "Photography"].map((s) => (
              <Link
                key={s}
                to="/services"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {s}
              </Link>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/40">
            Connect
          </h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <a href="mailto:creativeemmanlimited@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors break-all">
              <Mail size={14} className="flex-shrink-0" /> <span className="break-all">creativeemmanlimited@gmail.com</span>
            </a>
            <a href="tel:07037845433" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} className="flex-shrink-0" /> 07037845433
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="flex-shrink-0" /> Rivers State, Nigeria
            </span>
            <SocialLinks className="flex gap-5 mt-3" />
          </div>
        </div>
      </div>

      {/* Large soft brand wordmark, low in the footer — purely decorative, hidden from a11y tree.
          Sized in vw so the full word reads cleanly within the container at any viewport
          width (this is the failure mode to avoid: a fixed/clamped font-size here can
          render wider than the box and get cropped into illegible letter-fragments). */}
      <div
        aria-hidden="true"
        className="relative w-full overflow-hidden select-none pointer-events-none flex justify-center"
        style={{ height: "clamp(48px, 9vw, 130px)" }}
      >
        <span
          className="font-brand absolute top-1/2 whitespace-nowrap font-bold text-primary-foreground/[0.07] leading-none"
          style={{ fontSize: "8vw", transform: "translateY(-38%)" }}
        >
          Creative Emman
        </span>
      </div>

      {/* Accent divider + copyright */}
      <div
        className="pb-8 pt-6 text-center text-xs text-primary-foreground/40"
        style={{ borderTop: "1px solid hsl(200 100% 48% / 0.2)" }}
      >
        © 2026 Creative Emman Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
