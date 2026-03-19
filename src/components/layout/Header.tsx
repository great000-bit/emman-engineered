import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import websiteIcon from "@/assets/website-icon.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={websiteIcon}
            alt="Creative Emman"
            className="w-11 h-11 object-contain"
          />
          <span className="hidden md:inline font-brand text-lg font-bold text-primary-foreground tracking-tight">
            Creative<span className="text-accent">Emman</span>
          </span>
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

        {/* Morphing hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-4">
            <span
              className={`absolute left-0 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </div>
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
              className="fixed inset-0 bg-primary/60 backdrop-blur-sm md:hidden"
              style={{ zIndex: 9998 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 h-full w-72 p-8 pt-20 md:hidden flex flex-col gap-6 shadow-2xl"
              style={{
                zIndex: 9999,
                backgroundColor: "rgba(0, 3, 36, 0.97)",
                backdropFilter: "blur(40px) saturate(200%)",
                WebkitBackdropFilter: "blur(40px) saturate(200%)",
                borderLeft: "1px solid rgba(0, 170, 242, 0.15)",
                boxShadow: "-4px 0 30px rgba(0, 3, 36, 0.8)",
              }}
            >
              {/* Mobile logo */}
              <div className="absolute top-5 left-8">
                <img src={websiteIcon} alt="Creative Emman" className="w-10 h-10" />
              </div>

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
                <a href="mailto:creativeemman@gmail.com" className="block hover:text-accent transition-colors">creativeemman@gmail.com</a>
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
