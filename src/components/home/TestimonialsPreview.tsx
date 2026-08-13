import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const experiences = [
  {
    eyebrow: "Clarity from day one",
    statement: "Every engagement begins with a clear scope, shared priorities and a practical plan built around the outcome your business needs.",
    detail: "Discovery & scope",
    number: "01",
  },
  {
    eyebrow: "Progress you can see",
    statement: "Visible milestones and focused review points keep your team informed, involved and confident from first concept to final delivery.",
    detail: "Collaborative delivery",
    number: "02",
  },
  {
    eyebrow: "Value beyond launch",
    statement: "Thoughtful documentation, context-rich handover and dependable support make every solution easier to own, use and grow.",
    detail: "Handover & support",
    number: "03",
  },
];

const TestimonialsPreview = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const current = experiences[active];
  const next = experiences[(active + 1) % experiences.length];
  const last = experiences[(active + 2) % experiences.length];

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % experiences.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <section
      className="overflow-hidden border-t border-border bg-background px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 lg:py-24"
      aria-labelledby="client-experience-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1540px]">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-accent">The client experience</p>
              <h2 id="client-experience-heading" className="text-[clamp(2.8rem,5vw,5.2rem)] font-bold leading-[.98] tracking-[-.055em] text-foreground">
                What working with us <span className="font-serif font-medium italic">feels like</span>
              </h2>
            </div>
            <Link to="/testimonials" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-foreground hover:text-accent">
              How we earn trust
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
          <motion.article layout className="relative flex min-h-[23rem] flex-col justify-between overflow-hidden rounded-[1.35rem] bg-[#0c1220] p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <Quote className="mb-12 h-10 w-10 fill-accent text-accent" aria-hidden="true" />
                <p className="max-w-5xl text-[clamp(1.55rem,2.4vw,2.65rem)] font-medium leading-[1.28] tracking-[-.03em]">{current.statement}</p>
              </motion.div>
            </AnimatePresence>
            <div className="relative z-10 mt-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-accent">{current.eyebrow}</p>
                <p className="mt-1 text-sm text-white/60">{current.detail}</p>
              </div>
              <span className="font-serif text-6xl italic text-white/12">{current.number}</span>
            </div>
            {!reducedMotion && <motion.div key={`progress-${active}`} className="absolute bottom-0 left-0 h-1 bg-accent" initial={{ width: 0 }} animate={{ width: paused ? "0%" : "100%" }} transition={{ duration: paused ? 0 : 6, ease: "linear" }} />}
          </motion.article>

          <button
            type="button"
            onClick={() => setActive((active + 1) % experiences.length)}
            className="group relative flex min-h-[23rem] flex-col justify-between overflow-hidden rounded-[1.35rem] bg-accent p-7 text-left text-white transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            aria-label={`Show ${next.eyebrow}`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-white/70">Up next</p>
              <p className="mt-14 text-xl font-semibold leading-relaxed sm:text-2xl">{next.statement}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div><p className="font-bold">{next.eyebrow}</p><p className="mt-1 text-sm text-white/70">{next.detail}</p></div>
              <ArrowUpRight className="h-7 w-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActive((active + 2) % experiences.length)}
            className="group flex flex-col gap-7 rounded-[1.35rem] border border-border bg-muted/70 p-7 text-left transition-colors hover:border-accent/30 hover:bg-muted sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:col-span-2"
            aria-label={`Show ${last.eyebrow}`}
          >
            <p className="max-w-5xl text-xl font-medium leading-relaxed text-foreground sm:text-2xl lg:text-[1.75rem]">{last.statement}</p>
            <div className="flex shrink-0 items-center gap-4 sm:min-w-64">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/12 font-bold text-accent">{last.number}</span>
              <div><p className="font-bold text-foreground">{last.eyebrow}</p><p className="mt-1 text-sm text-muted-foreground">{last.detail}</p></div>
            </div>
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2" aria-label="Client experience slides">
          {experiences.map((experience, index) => (
            <button
              key={experience.number}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${experience.eyebrow}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${active === index ? "w-9 bg-accent" : "w-2 bg-foreground/20 hover:bg-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
