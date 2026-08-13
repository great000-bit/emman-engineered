import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { heroPhraseSets } from "@/data/heroData";

const ReelPhrase = ({ phrase, index, reduced }: { phrase: string; index: number; reduced: boolean }) => {
  const movesUp = index !== 1;
  const [lead, phraseTail] = phrase.split("\u00a0");
  const tail = phraseTail.replace(/\.$/, "");
  return (
    <span className={`relative block h-[1.12em] overflow-hidden whitespace-nowrap ${index === 2 ? "font-serif italic font-medium text-accent" : ""}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={phrase}
          className="absolute inset-0"
          initial={reduced ? false : { y: movesUp ? "110%" : "-110%", opacity: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { y: movesUp ? "-110%" : "110%", opacity: 0.2 }}
          transition={{ duration: reduced ? 0.15 : 0.68, delay: reduced ? 0 : index * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          <span aria-hidden="true">{lead}<span className="inline-block w-[.24em]" />{tail}<span className="font-sans not-italic text-black dark:text-white">.</span></span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const HeroButton = ({ to, children, outline = false }: { to: string; children: React.ReactNode; outline?: boolean }) => (
  <Link to={to} className={`group inline-flex min-h-14 items-center rounded-full border p-1 pl-6 text-sm font-bold transition-colors ${outline ? "border-foreground/25 text-foreground hover:bg-foreground hover:text-background" : "border-foreground bg-foreground text-background hover:bg-accent hover:text-white"}`}>
    <span>{children}</span>
    <span className={`ml-5 grid h-11 w-11 place-items-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${outline ? "bg-foreground text-background group-hover:bg-background group-hover:text-foreground" : "bg-background text-foreground group-hover:bg-white group-hover:text-black"}`}>
      <ArrowUpRight className="h-4 w-4" />
    </span>
  </Link>
);

const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const [setIndex, setSetIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setSetIndex((current) => (current + 1) % heroPhraseSets.length), 3650);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const phrases = heroPhraseSets[setIndex];
  return (
    <section className="hero-atmosphere relative flex min-h-[min(980px,100svh)] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center text-center">
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-[1080px] text-[clamp(2.55rem,6.1vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground">
          <span className="block">Nigeria&apos;s full service</span>
          <span className="block">creative and technology company.</span>
          <span aria-label={`${phrases[0]} ${phrases[1]} ${phrases[2]}`} className="mt-[0.12em] grid w-full grid-cols-1 items-center justify-center gap-x-[0.14em] text-[.78em] sm:grid-cols-[4.8em_5.5em_6.4em] sm:text-[.58em]">
            <ReelPhrase phrase={phrases[0]} index={0} reduced={reduced} />
            <ReelPhrase phrase={phrases[1]} index={1} reduced={reduced} />
            <ReelPhrase phrase={phrases[2]} index={2} reduced={reduced} />
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.65 }} className="mt-8 max-w-3xl text-[clamp(.98rem,1.5vw,1.22rem)] leading-relaxed text-muted-foreground">
          From brand identity and digital products to growth, automation and media, Creative Emman Limited gives ambitious African businesses one capable team for the journey ahead.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <HeroButton to="/contact">Get a Free Quote</HeroButton>
          <HeroButton to="/work" outline>See Our Work</HeroButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
