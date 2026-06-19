import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import websiteIcon from "@/assets/website-icon.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
      <div
        className={`container-wide mx-auto flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border transition-all duration-300 nav-glass ${
          scrolled
            ? "nav-glass-scrolled border-primary-foreground/10 shadow-2xl shadow-black/30"
            : "border-primary-foreground/[0.08]"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <img
            src={websiteIcon}
            alt="Creative Emman"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
          />
          <span className="hidden sm:inline font-brand text-sm sm:text-base font-bold text-primary-foreground tracking-tight truncate">
            Creative<span className="text-accent">Emman</span>
          </span>
        </Link>

        {/* Desktop nav links — centered within bar */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                  setDesktopDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimeout.current = setTimeout(() => setDesktopDropdownOpen(false), 150);
                }}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent whitespace-nowrap ${
                    location.pathname.startsWith(link.path) ? "text-accent" : "text-primary-foreground/75"
                  }`}
                  onClick={() => setDesktopDropdownOpen((v) => !v)}
                  aria-expanded={desktopDropdownOpen}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${desktopDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl border border-primary-foreground/10 p-2 nav-glass-scrolled shadow-2xl shadow-black/40"
                    >
                      <Link
                        to={link.path}
                        className="block px-4 py-2.5 rounded-xl text-sm font-medium text-primary-foreground hover:bg-primary-foreground/[0.06] hover:text-accent transition-colors"
                      >
                        All Portfolio
                      </Link>
                      <div className="my-1 border-t border-primary-foreground/10" />
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 rounded-xl text-sm text-primary-foreground/70 hover:bg-primary-foreground/[0.06] hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent whitespace-nowrap ${
                  location.pathname === link.path ? "text-accent" : "text-primary-foreground/75"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop right: pill CTA, same bar */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="hero-pill" size="sm" className="rounded-full">
              Start a Project
            </Button>
          </Link>
        </div>

        {/* Mobile right: compact CTA + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Link to="/contact" className="inline-flex">
            <Button variant="accent" size="sm" className="h-9 px-3 text-xs">
              Start
            </Button>
          </Link>
          <button
            className="relative w-11 h-11 flex items-center justify-center text-primary-foreground"
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

              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.path}>
                    <button
                      className={`w-full flex items-center justify-between text-lg font-medium ${
                        location.pathname.startsWith(link.path) ? "text-accent" : "text-primary-foreground/80"
                      }`}
                      onClick={() => setMobilePortfolioOpen((v) => !v)}
                      aria-expanded={mobilePortfolioOpen}
                    >
                      {link.label}
                      <ChevronDown size={18} className={`transition-transform ${mobilePortfolioOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobilePortfolioOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pt-3 pl-3">
                            <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                              All Portfolio
                            </Link>
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-medium ${
                      location.pathname === link.path ? "text-accent" : "text-primary-foreground/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Link to="/contact" className="mt-4">
                <Button variant="accent" className="w-full">
                  Start a Project
                </Button>
              </Link>
              <div className="mt-auto pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/40 space-y-2">
                <a href="mailto:creativeemmanlimited@gmail.com" className="block hover:text-accent transition-colors">creativeemmanlimited@gmail.com</a>
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
