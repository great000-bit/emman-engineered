import { Link } from "react-router-dom";
import { navLinks } from "@/data/siteData";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold mb-4">
            Creative<span className="text-accent">Emman</span>
          </h3>
          <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
            Premium digital execution engineered with excellence. We build systems that scale, designs that convert, and experiences that endure.
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

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/40">
            Connect
          </h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <a href="mailto:hello@creativeemman.com" className="hover:text-accent transition-colors">
              hello@creativeemman.com
            </a>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
              <a href="mailto:hello@creativeemman.com" aria-label="Email" className="hover:text-accent transition-colors"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Creative Emman. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
