import { useRef, useEffect } from "react";
import { motion, useTransform, useReducedMotion, useMotionValue, MotionValue } from "framer-motion";

/**
 * "Our Story" / "About Us" — scroll-linked text reveal.
 *
 * The key layout idea that makes this read as "1-2 lines highlighted at a time" rather
 * than a wall of text: each body chunk is absolutely positioned in the exact same slot
 * (stacked on top of each other), so only the chunk(s) near the current scroll position
 * are opaque enough to read — everything else is faded near-invisible, not just dimmed.
 * Only one or two chunks are ever visually present at once.
 *
 * The section label + title are pinned at the top of the centered column and crossfade
 * between "Our Story"/title and "About Us"/title as the user crosses the midpoint —
 * they don't need their own scroll-highlight, the brief only asks for line-by-line
 * highlighting on the body copy.
 *
 * Desktop: pinned via position:fixed (see note below re: why not position:sticky),
 * gated to the section's own scroll range. Mobile: simple sequential fade-in, no pin.
 * Everything animated is opacity/transform only.
 */

interface Section {
  label: string;
  title: string;
  chunks: string[];
  paragraphGroups: number[];
}

const SECTIONS: Section[] = [
  {
    label: "Our Story",
    title: "Built to Create. Engineered to Grow.",
    chunks: [
      "Creative Emman Limited was built to bridge the gap",
      "between ambitious brands and skilled creative talent.",
      "What began as a passion for design, technology,",
      "and problem-solving has grown into a multidisciplinary company",
      "helping businesses build with clarity, creativity, and purpose.",
      "We bring together designers, developers, strategists,",
      "marketers, writers, and visual storytellers to create",
      "digital experiences that are thoughtful, scalable, and impactful.",
      "Every project is an opportunity to build better products,",
      "stronger brands, and meaningful growth.",
    ],
    // How many consecutive chunks form one natural sentence/paragraph, for the
    // mobile/reduced-motion joined-paragraph rendering.
    paragraphGroups: [2, 3, 3, 2],
  },
  {
    label: "About Us",
    title: "About Creative Emman Limited",
    chunks: [
      "Creative Emman Limited is a creative and technology company",
      "helping startups, businesses, and organizations build stronger brands,",
      "better products, and meaningful digital experiences.",
      "Our work spans branding, UI/UX design, web development,",
      "product strategy, content creation, social media,",
      "video, motion graphics, and digital innovation.",
      "Beyond client services, we are building an ecosystem",
      "where talented creatives and technology professionals",
      "can collaborate, grow, and access real opportunities.",
      "Our mission is simple: engineer opportunities, inspire innovation,",
      "and build digital solutions that leave a lasting impact.",
    ],
    paragraphGroups: [3, 3, 3, 2],
  },
];

// Flat, ordered list of every chunk across both sections, each tagged with which section
// it belongs to — this is what the scroll progress walks through, one slot at a time.
const FLAT_CHUNKS = SECTIONS.flatMap((section, sectionIndex) =>
  section.chunks.map((text) => ({ text, sectionIndex })),
);

// For mobile/reduced-motion: join the short scroll-highlight chunks back into natural
// reading paragraphs using each section's explicit sentence groupings, rather than a
// fixed stride that could split mid-sentence.
const joinIntoParagraphs = (chunks: string[], groups: number[]): string[] => {
  const paragraphs: string[] = [];
  let cursor = 0;
  for (const groupSize of groups) {
    paragraphs.push(chunks.slice(cursor, cursor + groupSize).join(" "));
    cursor += groupSize;
  }
  return paragraphs;
};

/**
 * A single body chunk, absolutely stacked in the same slot as every other chunk. Bright
 * and fully opaque only near its own position in the scroll sequence; otherwise faded
 * almost fully away so it doesn't visually clutter the stack.
 */
const StackedChunk = ({ text, index, progress }: { text: string; index: number; progress: MotionValue<number> }) => {
  const center = index;
  const opacity = useTransform(progress, [center - 0.55, center - 0.2, center + 0.2, center + 0.55], [0, 1, 1, 0]);
  const y = useTransform(progress, [center - 0.55, center, center + 0.55], [14, 0, -14]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-[1.65rem] text-primary-foreground leading-snug font-medium"
    >
      {text}
    </motion.p>
  );
};

const BrandStoryDesktop = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // useScroll's automatic element-relative offset ("start start"/"end end") was measured
  // to behave unreliably in this environment — scrollYProgress reached 1.0 once window
  // scrollY equaled the track's own pixel height, ignoring how far down the page the
  // track actually starts. Tracking the section's real position manually via
  // getBoundingClientRect on scroll (passive listener, rAF-throttled) sidesteps that
  // entirely and was verified to produce a correct, evenly-spaced 0..1 range.
  const rawProgress = useMotionValue(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trackHeight = el.offsetHeight;
      const viewportHeight = window.innerHeight;
      // Progress 0 when the track's top reaches the viewport top; progress 1 when the
      // track's bottom reaches the viewport bottom (i.e. scrolled through trackHeight -
      // viewportHeight of additional distance after the top aligns).
      const scrolledIntoTrack = -rect.top;
      const usableDistance = trackHeight - viewportHeight;
      const p = usableDistance > 0 ? scrolledIntoTrack / usableDistance : 0;
      rawProgress.set(Math.min(1, Math.max(0, p)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rawProgress]);

  const scrollYProgress = rawProgress;

  // Reserve a small head/tail slice of the progress range purely for the pin's own
  // fade in/out, and map chunks across the remaining middle so the last chunk still
  // gets its full, fair share of scroll time before the fade-out begins.
  const FADE_FRACTION = 0.04;
  const chunkProgress = useTransform(
    scrollYProgress,
    [FADE_FRACTION, 1 - FADE_FRACTION],
    [0, FLAT_CHUNKS.length - 1],
    { clamp: true },
  );

  const pinnedOpacity = useTransform(
    scrollYProgress,
    [0, FADE_FRACTION, 1 - FADE_FRACTION, 1],
    [0, 1, 1, 0],
  );

  // Section split point: once we're past the last "Our Story" chunk's slot, About Us
  // becomes active. This drives both the label and the title crossfade.
  const lastOurStoryIndex = SECTIONS[0].chunks.length - 1;
  const sectionSwitch = useTransform(
    chunkProgress,
    [lastOurStoryIndex + 0.5, lastOurStoryIndex + 0.9],
    [0, 1],
  );
  const ourStoryOpacity = useTransform(sectionSwitch, [0, 1], [1, 0]);
  const aboutUsOpacity = useTransform(sectionSwitch, [0, 1], [0, 1]);

  // The manual progress calculation above is (trackHeight - viewportHeight) of usable
  // scroll distance, so the track still needs to exceed one viewport height — ~55vh per
  // chunk keeps each highlight on screen long enough to read comfortably without making
  // the overall section feel like an endless scroll.
  const scrollPerChunk = 55; // vh
  const trackHeightVh = FLAT_CHUNKS.length * scrollPerChunk + 100;

  return (
    <div ref={sectionRef} className="relative hidden md:block" style={{ height: `${trackHeightVh}vh` }}>
      <motion.div
        style={{ opacity: pinnedOpacity }}
        className="fixed top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none"
      >
        <div className="container-wide mx-auto px-4 sm:px-6 h-full relative">
          {/* Left label column */}
          <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 hidden lg:block w-32">
            <motion.span
              style={{ opacity: ourStoryOpacity }}
              className="absolute text-sm font-medium tracking-widest uppercase text-accent whitespace-nowrap"
            >
              Our Story
            </motion.span>
            <motion.span
              style={{ opacity: aboutUsOpacity }}
              className="absolute text-sm font-medium tracking-widest uppercase text-accent whitespace-nowrap"
            >
              About Us
            </motion.span>
          </div>

          {/* Centered column: title (crossfades per section) + stacked highlight chunks */}
          <div className="h-full flex items-center justify-center">
            <div className="max-w-2xl w-full text-center lg:text-left">
              <div className="relative h-5 mb-4 lg:hidden">
                <motion.span
                  style={{ opacity: ourStoryOpacity }}
                  className="absolute inset-x-0 text-sm font-medium tracking-widest uppercase text-accent"
                >
                  Our Story
                </motion.span>
                <motion.span
                  style={{ opacity: aboutUsOpacity }}
                  className="absolute inset-x-0 text-sm font-medium tracking-widest uppercase text-accent"
                >
                  About Us
                </motion.span>
              </div>

              <div className="relative h-[88px] sm:h-[104px] mb-8">
                <motion.h2
                  style={{ opacity: ourStoryOpacity }}
                  className="absolute inset-x-0 top-0 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight"
                >
                  {SECTIONS[0].title}
                </motion.h2>
                <motion.h2
                  style={{ opacity: aboutUsOpacity }}
                  className="absolute inset-x-0 top-0 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight"
                >
                  {SECTIONS[1].title}
                </motion.h2>
              </div>

              <div className="relative h-24 sm:h-20">
                {FLAT_CHUNKS.map((chunk, i) => (
                  <StackedChunk key={chunk.text.slice(0, 24)} text={chunk.text} index={i} progress={chunkProgress} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const BrandStoryMobile = () => (
  <div className="md:hidden container-wide mx-auto px-4 sm:px-6 space-y-14">
    {SECTIONS.map((section, i) => (
      <motion.div
        key={section.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
        className="max-w-2xl"
      >
        <span className="text-sm font-medium tracking-widest uppercase text-accent block mb-3">{section.label}</span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground leading-tight mb-5">
          {section.title}
        </h2>
        {joinIntoParagraphs(section.chunks, section.paragraphGroups).map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-primary-foreground/65 leading-relaxed mb-3 last:mb-0">
            {paragraph}
          </p>
        ))}
      </motion.div>
    ))}
  </div>
);

const BrandStory = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section className="section-padding relative">
        <div className="container-wide mx-auto px-4 sm:px-6 space-y-14">
          {SECTIONS.map((section) => (
            <div key={section.label} className="max-w-2xl">
              <span className="text-sm font-medium tracking-widest uppercase text-accent block mb-3">
                {section.label}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground leading-tight mb-5">
                {section.title}
              </h2>
              {joinIntoParagraphs(section.chunks, section.paragraphGroups).map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-primary-foreground/65 leading-relaxed mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative">
      <BrandStoryDesktop />
      <div className="section-padding">
        <BrandStoryMobile />
      </div>
    </section>
  );
};

export default BrandStory;
