import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      style={{ transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="container-wide mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-bold text-primary-foreground tracking-tight">
          Creative<span className="text-primary-foreground/70">Emman</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="hero-pill" size="sm">
              Start a Project
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 h-full w-72 bg-primary/80 backdrop-blur-xl p-8 pt-20 md:hidden flex flex-col gap-6 border-l border-primary-foreground/10 shadow-2xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? "text-accent" : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-4">
                <Button variant="accent" className="w-full">
                  Start a Project
                </Button>
              </Link>
              <div className="mt-auto pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/40 space-y-2">
                <a href="mailto:greatemmawori@gmail.com" className="block hover:text-accent transition-colors">greatemmawori@gmail.com</a>
                <a href="https://wa.me/2347037845433" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">+234 703 784 5433</a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
