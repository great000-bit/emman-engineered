import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { portfolioProjects } from "@/data/portfolioData";

const clients = Array.from(new Set(portfolioProjects.map((project) => project.clientName).filter(Boolean)));

const ClientTrustRail = () => {
  const reduced = useReducedMotion();
  const railRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const marks = reduced ? clients : [...clients, ...clients];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "120px 0px" });
    observer.observe(rail);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={railRef} aria-labelledby="client-trust-title" className="border-y border-border bg-card/70 py-8 sm:py-10">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <p id="client-trust-title" className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Trusted by ambitious brands and organisations</p>
      </div>
      <div className="client-rail mt-7 overflow-hidden" tabIndex={0} aria-label="Creative Emman Limited client names">
        <div className={`flex w-max items-center ${reduced ? "mx-auto flex-wrap justify-center" : "client-rail-track"}`} style={!reduced && !visible ? { animationPlayState: "paused" } : undefined}>
          {marks.map((client, index) => (
            <span key={`${client}-${index}`} className="mx-4 inline-flex min-h-14 min-w-[190px] items-center justify-center border-x border-border px-7 text-center text-base font-bold tracking-tight text-foreground/45 transition-colors hover:text-foreground sm:mx-7 sm:text-lg" aria-hidden={!reduced && index >= clients.length}>
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTrustRail;
