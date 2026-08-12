import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Sun, Moon, Sparkles, Code2, Rocket, GraduationCap, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import websiteIcon from "@/assets/Creativeemanlogo.svg";
import websiteIcon2 from "@/assets/Creative_eman.png";

/* ─── Service / Portfolio data ─── */
type ServiceItem = { name: string; path: string; badge?: string };

const WEB_SERVICES: ServiceItem[] = [
  { name: "Website Development", path: "/services/website-development" },
  { name: "UI/UX Design", path: "/services/ui-ux-design" },
];

const CREATIVE_SERVICES: ServiceItem[] = [
  { name: "Graphic Design", path: "/services/graphic-design" },
  { name: "Motion Graphics Design", path: "/services/motion-graphics-design" },
];

const MEDIA_SERVICES: ServiceItem[] = [
  { name: "Videography", path: "/services/videography" },
  { name: "Video Editing", path: "/services/video-editing" },
  { name: "Photography", path: "/services/photography" },
];

const GROWTH_SERVICES: ServiceItem[] = [
  { name: "Social Media Management", path: "/services/social-media-management" },
  { name: "Professional Training", path: "/trainings" },
  { name: "Online Courses", path: "/trainings", badge: "SOON" },
];

const PORTFOLIO_ITEMS = [
  { name: "Website Development", path: "/portfolio/web-development" },
  { name: "UI/UX Design", path: "/portfolio/ui-ux-design" },
  { name: "Graphic & Brand Design", path: "/portfolio/graphic-brand-design" },
  { name: "Social Media Management", path: "/portfolio/social-media-management" },
  { name: "Videography & Video Editing", path: "/portfolio/videography-video-editing" },
  { name: "Motion Graphics Design", path: "/portfolio/motion-graphics-design" },
];

/* ─── Component ─── */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "portfolio" | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  /* ─── Theme ─── */
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined"
      ? ((localStorage.getItem("theme") as "light" | "dark") ?? "dark")
      : "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ─── Close on route change ─── */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  /* ─── Scroll detection ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── Click outside to close dropdowns ─── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ─── Escape key ─── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  // Navbar is always dark — these classes use white text regardless of page theme
  const linkCls = (path: string) =>
    `text-[13px] font-semibold tracking-wide px-3.5 uppercase py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${location.pathname === path
      ? "text-accent bg-white/[0.08]"
      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
    }`;

  const dropdownBtnCls = (key: string) =>
    `flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${activeDropdown === key
      ? "bg-accent text-white shadow-sm"
      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
    }`;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4"
      style={{ position: "fixed" }}
    >
      {/* ── Floating pill bar ── */}
      <div
        className="container-wide mx-auto flex items-center justify-between gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 bg-[#0a0a0b]/90 border border-white/10 shadow-2xl backdrop-blur-md"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="Creative Emman Home">
          <img
            src={websiteIcon}
            alt="Creative Emman Limited"
            className="h-8 w-36 object-contain max-sm:hidden"
            style={{ transform: "scale(1.4)", transformOrigin: "left center", marginLeft: "1rem" }}
          />
          <img
            src={websiteIcon2}
            alt="Creative Emman"
            className="h-10 w-auto object-contain hidden max-sm:block"
          />
        </Link>

        {/* ── Desktop: inner pill nav ── */}
        <nav
          className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-1 py-1"
          aria-label="Main navigation"
        >
          {/* Services — trigger + dropdown wrapped together */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              className={dropdownBtnCls("services")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "services"}
            >
              Services
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Services mega-menu — anchored to this button */}
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="nav-dropdown-panel grid"
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: "-8rem",
                    width: "min(88vw, 800px)",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "0.5rem",
                    padding: "1.75rem 1rem",
                    zIndex: 100,
                  }}
                  role="menu"
                >
                  {/* WEB & INTERFACE */}
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                      Web & Interface
                    </span>
                    <ul className="space-y-1.5">
                      {WEB_SERVICES.map(s => (
                        <li key={s.name} className="flex items-center gap-2">
                          <Link to={s.path} className="block text-[13px] font-medium text-foreground/65 hover:text-accent py-0.5 transition-colors" role="menuitem">
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* CREATIVE & BRAND */}
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                      Creative & Brand
                    </span>
                    <ul className="space-y-1.5">
                      {CREATIVE_SERVICES.map(s => (
                        <li key={s.name} className="flex items-center gap-2">
                          <Link to={s.path} className="block text-[13px] font-medium text-foreground/65 hover:text-accent py-0.5 transition-colors" role="menuitem">
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* MEDIA & PRODUCTION */}
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                      Media & Production
                    </span>
                    <ul className="space-y-1.5">
                      {MEDIA_SERVICES.map(s => (
                        <li key={s.name} className="flex items-center gap-2">
                          <Link to={s.path} className="block text-[13px] font-medium text-foreground/65 hover:text-accent py-0.5 transition-colors" role="menuitem">
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* GROWTH & TRAINING */}
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                      Growth & Training
                    </span>
                    <ul className="space-y-1.5">
                      {GROWTH_SERVICES.map(s => (
                        <li key={s.name} className="flex items-center gap-2">
                          <Link to={s.path} className="text-[13px] font-medium text-foreground/65 hover:text-accent py-0.5 transition-colors" role="menuitem">
                            {s.name}
                          </Link>
                          {s.badge && (
                            <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                              {s.badge}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio — trigger + dropdown wrapped together */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "portfolio" ? null : "portfolio")}
              className={dropdownBtnCls("portfolio")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "portfolio"}
            >
              Portfolio
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${activeDropdown === "portfolio" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Portfolio dropdown — anchored to this button */}
            <AnimatePresence>
              {activeDropdown === "portfolio" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="nav-dropdown-panel"
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    width: "240px",
                    padding: "0.4rem",
                    zIndex: 100,
                  }}
                  role="menu"
                >

                  {PORTFOLIO_ITEMS.map(item => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center px-3 py-2.5 rounded-lg text-[13px] font-medium text-foreground/70 hover:bg-foreground/[0.04] hover:text-accent transition-all"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/portfolio" className={linkCls("/portfolio")}>Work</Link>
          <Link to="/pricing" className={linkCls("/pricing")}>Pricing</Link>
          <Link to="/about" className={linkCls("/about")}>About</Link>
          <Link to="/blog" className={linkCls("/blog")}>Blog</Link>
        </nav>

        {/* ── Desktop right actions ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link to="/contact">
            <Button
              variant="accent"
              size="sm"
              className="rounded-full font-bold uppercase tracking-wider text-xs px-5"
            >
              Start a Project
            </Button>
          </Link>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 hover:bg-white/[0.08] text-white/80 hover:text-white transition-all duration-200"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* ── Mobile right actions ── */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 text-white/80 hover:text-white hover:bg-white/[0.08] transition-all"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <button
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE DRAWER
      ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/50 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 998 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-80 lg:hidden flex flex-col overflow-y-auto"
              style={{
                zIndex: 999,
                background: "hsl(var(--card))",
                borderLeft: "1px solid hsl(var(--foreground) / 0.08)",
                boxShadow: "-8px 0 40px hsl(0 0% 0% / 0.25)",
              }}
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/[0.06]">
                <img src={websiteIcon2} alt="Creative Emman" className="h-10 object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground/10 text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex flex-col gap-1 px-4 py-5 flex-1">
                {/* Services accordion */}
                <div className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(v => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wider text-foreground/75 hover:bg-foreground/[0.04] rounded-xl transition-colors"
                  >
                    Services
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-2 space-y-5">
                          {[
                            { label: "Web & Interface", items: WEB_SERVICES },
                            { label: "Creative & Brand", items: CREATIVE_SERVICES },
                            { label: "Media & Production", items: MEDIA_SERVICES },
                            { label: "Growth & Training", items: GROWTH_SERVICES },
                          ].map(({ label, items }) => (
                            <div key={label}>
                              <span className="block text-[9px] font-black uppercase tracking-widest text-accent mb-2">
                                {label}
                              </span>
                              <div className="space-y-1.5">
                                {items.map(s => (
                                  <Link
                                    key={s.name}
                                    to={s.path}
                                    className="flex items-center gap-2 text-[13px] text-foreground/60 hover:text-accent transition-colors"
                                  >
                                    {s.name}
                                    {s.badge && (
                                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                                        {s.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Portfolio accordion */}
                <div className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobilePortfolioOpen(v => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wider text-foreground/75 hover:bg-foreground/[0.04] rounded-xl transition-colors"
                  >
                    Portfolio
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${mobilePortfolioOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobilePortfolioOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1 space-y-1.5">
                          {PORTFOLIO_ITEMS.map(item => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block text-[13px] text-foreground/60 hover:text-accent py-0.5 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simple links */}
                {[
                  { label: "Work", path: "/portfolio" },
                  { label: "Pricing", path: "/pricing" },
                  { label: "About", path: "/about" },
                  { label: "Blog", path: "/blog" },
                ].map(({ label, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === path
                      ? "text-accent bg-foreground/[0.04]"
                      : "text-foreground/75 hover:bg-foreground/[0.04] hover:text-foreground"
                      }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="px-4 py-5 border-t border-foreground/[0.06] space-y-3">
                <Link to="/contact" className="block">
                  <Button variant="accent" className="w-full font-bold uppercase tracking-wider rounded-full">
                    Start a Project
                  </Button>
                </Link>
                <div className="text-[11px] text-foreground/35 space-y-1 pt-1">
                  <a href="mailto:creativeemmanlimited1@gmail.com" className="block hover:text-accent transition-colors">
                    creativeemmanlimited1@gmail.com
                  </a>
                  <a href="tel:07037845433" className="block hover:text-accent transition-colors">
                    07037845433
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
