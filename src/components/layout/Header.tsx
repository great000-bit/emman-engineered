import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { serviceCategories } from "@/data/serviceCategories";
import BrandLogo from "@/components/BrandLogo";

type Dropdown = "services" | "industries" | "career" | null;

const Header = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">(() => typeof document !== "undefined" && document.documentElement.classList.contains("light") ? "light" : "dark");
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<Dropdown>(null);
  const [activePillar, setActivePillar] = useState("build");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<Dropdown>(null);
  const [mobilePillars, setMobilePillars] = useState<Record<string, boolean>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const openDropdown = (value: Dropdown) => { cancelClose(); setDropdown(value); };
  const scheduleClose = () => { cancelClose(); closeTimer.current = setTimeout(() => setDropdown(null), 190); };
  const isActive = (path: string) => path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  const careerActive = isActive("/internships") || isActive("/applications");
  const navClass = (path: string, active = isActive(path)) => `site-nav-link rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[.07em] transition-colors ${active ? "is-active" : ""}`;

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => { const handler = () => setScrolled(window.scrollY > 12); handler(); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  useEffect(() => { setDropdown(null); setMobileOpen(false); }, [location.pathname]);
  useEffect(() => { const handler = (event: KeyboardEvent) => { if (event.key === "Escape") { setDropdown(null); setMobileOpen(false); } }; document.addEventListener("keydown", handler); return () => document.removeEventListener("keydown", handler); }, []);
  useEffect(() => { if (!mobileOpen) return; const previous = document.body.style.overflow; const trigger = menuButtonRef.current; document.body.style.overflow = "hidden"; requestAnimationFrame(() => closeButtonRef.current?.focus()); return () => { document.body.style.overflow = previous; trigger?.focus(); }; }, [mobileOpen]);
  useEffect(() => () => cancelClose(), []);

  const activeCategory = serviceCategories.find((item) => item.slug === activePillar) ?? serviceCategories[0];
  const careerLinks = [
    { name: "Internships", path: "/internships", copy: "Learn, build and gain real project experience with Creative Emman Limited." },
    { name: "Applications", path: "/applications", copy: "View current opportunities and submit an application to join our team." },
  ];

  const dropdownMotion = { initial: { opacity: 0, y: -8, scale: .985 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -8, scale: .985 }, transition: { duration: .24, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className={`site-nav-shell container-wide relative mx-auto flex items-center justify-between rounded-full border px-4 py-2 sm:px-5 ${scrolled ? "is-scrolled" : ""}`}>
        <Link to="/" aria-label="Creative Emman Limited home" className="flex shrink-0 items-center gap-2"><BrandLogo location="navigation" /><span className="site-nav-brand hidden text-sm font-bold sm:block">Creative <span className="text-accent">Emman</span> Limited</span></Link>

        <nav aria-label="Main navigation" className="site-nav-inner hidden items-center rounded-full border p-1 lg:flex">
          <div onMouseEnter={() => openDropdown("services")} onMouseLeave={scheduleClose}>
            <button onClick={() => openDropdown("services")} onFocus={() => openDropdown("services")} aria-haspopup="true" aria-expanded={dropdown === "services"} className={navClass("/services")}>Services <ChevronDown className={`ml-1 inline h-3 w-3 ${dropdown === "services" ? "rotate-180" : ""}`} /></button>
            <AnimatePresence>{dropdown === "services" && <motion.div {...dropdownMotion} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="nav-dropdown-panel fixed inset-x-0 top-[5rem] mx-auto max-h-[calc(100vh-6rem)] w-[min(92vw,1080px)] overflow-y-auto p-3 text-foreground" role="menu">
              <div className="grid gap-3 lg:grid-cols-[190px_1fr_260px]">
                <div className="rounded-2xl bg-background p-3"><Link to="/services" className="nav-dropdown-item mb-2 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold">All services <ArrowUpRight className="h-4 w-4" /></Link>{serviceCategories.map((category) => <button key={category.slug} onMouseEnter={() => setActivePillar(category.slug)} onFocus={() => setActivePillar(category.slug)} className={`mb-1 w-full rounded-xl px-3 py-3 text-left ${activeCategory.slug === category.slug ? "bg-accent text-white" : "nav-dropdown-item"}`}><strong className="block text-sm uppercase tracking-wider">{category.name}</strong><span className="mt-1 block text-[11px] opacity-65">{category.shortDescription}</span></button>)}</div>
                <div className="p-4"><div className="border-b border-border pb-4"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-accent">{activeCategory.name}</p><p className="mt-2 text-sm text-muted-foreground">{activeCategory.description}</p></div><div className="mt-3 grid grid-cols-2 gap-x-5">{activeCategory.services.map((item) => <Link key={item.slug} to={`/services/${item.slug}`} role="menuitem" className="nav-service-item group flex min-h-10 items-center justify-between border-b border-border/60 py-2 px-1 text-[12px]"><span>{item.name}</span><ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100" /></Link>)}</div></div>
                <div className="rounded-2xl bg-[#080d16] p-6 text-white"><h3 className="text-3xl leading-tight">{activeCategory.outcome}</h3><p className="mt-4 text-sm leading-relaxed text-white/55">Start with the business problem. We will map the right service sequence and confirm scope before work begins.</p><Link to="/contact" className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold">Get a Quote <ArrowUpRight className="h-4 w-4" /></Link></div>
              </div>
            </motion.div>}</AnimatePresence>
          </div>

          <div onMouseEnter={() => openDropdown("industries")} onMouseLeave={scheduleClose}>
            <button onClick={() => openDropdown("industries")} onFocus={() => openDropdown("industries")} aria-haspopup="true" aria-expanded={dropdown === "industries"} className={navClass("/industries")}>Industries <ChevronDown className={`ml-1 inline h-3 w-3 ${dropdown === "industries" ? "rotate-180" : ""}`} /></button>
            <AnimatePresence>{dropdown === "industries" && <motion.div {...dropdownMotion} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="nav-dropdown-panel fixed inset-x-0 top-[5rem] mx-auto w-[min(92vw,650px)] p-3 text-foreground" role="menu"><div className="grid grid-cols-2 gap-2">{industries.map((industry) => <Link key={industry.slug} to={`/industries/${industry.slug}`} role="menuitem" className="nav-dropdown-item group flex min-h-16 items-center justify-between rounded-xl px-4 text-sm font-semibold">{industry.name}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>)}</div></motion.div>}</AnimatePresence>
          </div>

          <Link to="/work" className={navClass("/work")}>Work</Link><Link to="/pricing" className={navClass("/pricing")}>Pricing</Link><Link to="/about" className={navClass("/about")}>About</Link><Link to="/blog" className={navClass("/blog")}>Blog</Link>
          <div onMouseEnter={() => openDropdown("career")} onMouseLeave={scheduleClose}>
            <button onClick={() => openDropdown("career")} onFocus={() => openDropdown("career")} aria-haspopup="true" aria-expanded={dropdown === "career"} className={navClass("/career", careerActive)}>Career <ChevronDown className={`ml-1 inline h-3 w-3 ${dropdown === "career" ? "rotate-180" : ""}`} /></button>
            <AnimatePresence>{dropdown === "career" && <motion.div {...dropdownMotion} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="nav-dropdown-panel fixed right-[max(1.25rem,calc((100vw-80rem)/2))] top-[5rem] w-[min(92vw,430px)] p-3 text-foreground" role="menu">{careerLinks.map((item) => <Link key={item.path} to={item.path} role="menuitem" className="nav-dropdown-item group flex items-start justify-between gap-5 rounded-xl p-4"><span><strong className="block text-sm">{item.name}</strong><span className="mt-1 block text-xs leading-relaxed opacity-65">{item.copy}</span></span><ArrowUpRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>)}</motion.div>}</AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-2 lg:flex"><Link to="/contact"><Button variant="accent" size="sm" className="rounded-full px-5 text-xs font-bold uppercase tracking-wider">Get a Quote</Button></Link><button onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"} className="site-theme-toggle grid h-9 w-9 place-items-center rounded-full border">{theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</button></div>
        <div className="flex items-center gap-2 lg:hidden"><button onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"} className="site-theme-toggle grid h-9 w-9 place-items-center rounded-full border">{theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</button><button ref={menuButtonRef} onClick={() => setMobileOpen(true)} aria-label="Open menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation" className="site-mobile-toggle grid h-10 w-10 place-items-center"><Menu /></button></div>
      </div>

      <AnimatePresence>{mobileOpen && <><motion.button aria-label="Close menu backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 z-[998] bg-black/55 backdrop-blur-sm lg:hidden" /><motion.nav id="mobile-navigation" aria-label="Mobile navigation" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }} className="fixed right-0 top-0 z-[999] flex h-full w-[min(25rem,100vw)] flex-col overflow-y-auto bg-card text-foreground lg:hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-4"><Link to="/" className="flex items-center gap-2"><BrandLogo location="navigation" decorative /><span className="text-sm font-bold">Creative Emman Limited</span></Link><button ref={closeButtonRef} onClick={() => setMobileOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-border"><X className="h-5 w-5" /></button></div>
        <div className="flex-1 p-4">
          <MobileToggle label="Services" open={mobileSection === "services"} onClick={() => setMobileSection(mobileSection === "services" ? null : "services")} />
          <AnimatePresence initial={false}>{mobileSection === "services" && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-3"><Link to="/services" className="block border-b border-border py-3 text-sm font-semibold text-accent">All services</Link>{serviceCategories.map((category) => <div key={category.slug} className="border-b border-border"><button onClick={() => setMobilePillars((state) => ({ ...state, [category.slug]: !state[category.slug] }))} className="flex min-h-14 w-full items-center justify-between text-left"><span><strong className="block text-sm">{category.name}</strong><span className="text-xs text-muted-foreground">{category.shortDescription}</span></span><ChevronDown className={`h-4 w-4 ${mobilePillars[category.slug] ? "rotate-180" : ""}`} /></button>{mobilePillars[category.slug] && <div className="pb-3"><Link to={`/services/${category.slug}`} className="block py-2 text-xs font-bold uppercase text-accent">Explore {category.name}</Link>{category.services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} className="block min-h-10 py-2 text-sm text-muted-foreground">{service.name}</Link>)}</div>}</div>)}</motion.div>}</AnimatePresence>
          <MobileToggle label="Industries" open={mobileSection === "industries"} onClick={() => setMobileSection(mobileSection === "industries" ? null : "industries")} />
          <AnimatePresence initial={false}>{mobileSection === "industries" && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-3 pb-3">{industries.map((industry) => <Link key={industry.slug} to={`/industries/${industry.slug}`} className="block min-h-11 py-3 text-sm text-muted-foreground">{industry.name}</Link>)}</motion.div>}</AnimatePresence>
          <MobileToggle label="Career" open={mobileSection === "career"} active={careerActive} onClick={() => setMobileSection(mobileSection === "career" ? null : "career")} />
          <AnimatePresence initial={false}>{mobileSection === "career" && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-3 pb-3">{careerLinks.map((item) => <Link key={item.path} to={item.path} className="block min-h-16 border-b border-border py-3"><strong className="block text-sm">{item.name}</strong><span className="mt-1 block text-xs text-muted-foreground">{item.copy}</span></Link>)}</motion.div>}</AnimatePresence>
          {[{ label: "Work", path: "/work" }, { label: "Pricing", path: "/pricing" }, { label: "About", path: "/about" }, { label: "Blog", path: "/blog" }, { label: "Trainings", path: "/trainings" }, { label: "Contact", path: "/contact" }].map((item) => <Link key={item.path} to={item.path} className={`flex min-h-12 items-center rounded-xl px-3 text-sm font-bold uppercase tracking-wider ${isActive(item.path) ? "text-accent" : "text-foreground/75"}`}>{item.label}</Link>)}
        </div>
      </motion.nav></>}</AnimatePresence>
    </header>
  );
};

const MobileToggle = ({ label, open, onClick, active = false }: { label: string; open: boolean; onClick: () => void; active?: boolean }) => <button onClick={onClick} className={`flex min-h-12 w-full items-center justify-between rounded-xl px-3 text-sm font-bold uppercase tracking-wider ${active ? "text-accent" : ""}`}>{label}<ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} /></button>;

export default Header;
