import { Link } from "react-router-dom";
import { navLinks } from "@/data/siteData";
import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import websiteIcon from "@/assets/website-icon.png";

const Footer = () => (
  <footer className="relative bg-primary text-primary-foreground overflow-hidden">
    {/* Subtle motion gradient bg */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, hsl(200 100% 48% / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(200 100% 58% / 0.3) 0%, transparent 50%)",
      }}
    />

    <div className="container-wide mx-auto px-6 py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo column */}
        <div>
          <img
            src={websiteIcon}
            alt="Creative Emman"
            className="w-16 h-16 object-contain logo-pulse mb-4"
          />
          <span className="font-brand text-lg font-bold block mb-3">
            Creative<span className="text-accent">Emman</span>
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
            {["Web Development", "UI/UX Design", "Graphic Design", "Videography", "Photography"].map((s) => (
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
            <a href="mailto:creativeemman@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} /> creativeemman@gmail.com
            </a>
            <a href="https://wa.me/2347037845433" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} /> +234 703 784 5433
            </a>
            <div className="flex gap-4 mt-3">
              <a href="#" aria-label="LinkedIn" className="social-glow text-primary-foreground/50"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" className="social-glow text-primary-foreground/50"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="social-glow text-primary-foreground/50"><Instagram size={18} /></a>
              <a href="mailto:creativeemman@gmail.com" aria-label="Email" className="social-glow text-primary-foreground/50"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent divider + copyright */}
      <div className="mt-12 pt-8 text-center text-xs text-primary-foreground/40" style={{ borderTop: "1px solid hsl(200 100% 48% / 0.2)" }}>
        © {new Date().getFullYear()} Creative Emman. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
