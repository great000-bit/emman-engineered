import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useReducedMotion, useMotionValue, MotionValue } from "framer-motion";

/**
 * "Our Story" / "About Us" — scroll-linked text highlight.
 *
 * Design intent (this replaced an earlier version that hid most of the text and forced
 * line-by-line reading — too slow to feel premium): the FULL body text for the active
 * section is visible at all times, dimmed to a muted gray. As the user scrolls, a
 * highlight sweeps down through it in ~2-line chunks, brightening each chunk to white
 * while the others stay muted. Nothing is hidden before its turn — it's a highlight
 * sweep over visible text, not a reveal-from-nothing.
 *
 * Layout: editorial two-column — small uppercase label pinned on the left, full title +
 * body text in normal flow on the right. Not centered.
 *
 * Desktop: pinned via position:fixed while the track is in view, progress computed
 * manually via getBoundingClientRect on a passive/rAF-throttled scroll listener (verified
 * in an earlier pass to be more reliable here than Framer's automatic useScroll offset).
 * Mobile: no pinning (avoids the scroll-jank risk of a tall pinned section on phones) —
 * instead each section's full text scrolls normally, with the same dim/highlight sweep
 * driven by how far the section has scrolled through the viewport.
 * Everything animated is opacity/color/transform only.
 */

interface ChunkDef {
  text: string;
}

interface Section {
  label: string;
  title: string;
  chunks: ChunkDef[];
}

// Body copy split into ~2-line chunks (the unit the highlight sweep moves through).
const SECTIONS: Section[] = [
  {
    label: "Our Story",
    title: "Built to Create. Engineered to Grow.",
    chunks: [
      { text: "Creative Emman Limited was built to bridge the gap between ambitious brands and skilled creative talent." },
      { text: "What began as a passion for design, technology, and problem-solving has grown into a multidisciplinary company helping businesses build with clarity, creativity, and purpose." },
      { text: "We bring together designers, developers, strategists, marketers, writers, and visual storytellers to create digital experiences that are thoughtful, scalable, and impactful." },
      { text: "Every project is an opportunity to build better products, stronger brands, and meaningful growth." },
    ],
  },
  {
    label: "About Us",
    title: "About Creative Emman Limited",
    chunks: [
      { text: "Creative Emman Limited is a creative and technology company helping startups, businesses, and organizations build stronger brands, better products, and meaningful digital experiences." },
      { text: "Our work spans branding, UI/UX design, web development, product strategy, content creation, social media, video, motion graphics, and digital innovation. Beyond client services, we are building an ecosystem where talented creatives and technology professionals can collaborate, grow, and access real opportunities." },
      { text: "Our mission is simple: engineer opportunities, inspire innovation, and build digital solutions that leave a lasting impact." },
    ],
  },
];

/**
 * One body chunk. Always visible; only its opacity shifts between a low, non-distracting
 * dim level and full white as the highlight sweep passes through, plus a very slight
 * y-drift. Color itself stays a single off-white the whole time — varying the opacity of
 * one consistent color (rather than crossfading two different HSL lightness values, as
 * an earlier version did) is what keeps inactive lines from reading as "almost as bright
 * as the active line".
 */
const HighlightChunk = ({ text, index, progress }: { text: string; index: number; progress: MotionValue<number> }) => {
  const center = index;
  // Inactive opacity sits in the 0.18–0.28 range requested — low enough that the active
  // chunk clearly dominates, high enough that the full passage is still legible as
  // context, not invisible.
  const opacity = useTransform(
    progress,
    [center - 0.85, center - 0.35, center + 0.35, center + 0.85],
    [0.22, 1, 1, 0.22],
  );
  const y = useTransform(progress, [center - 0.85, center, center + 0.85], [4, 0, -4]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="font-story-text text-lg sm:text-xl md:text-[1.4rem] leading-relaxed sm:leading-relaxed font-medium text-primary-foreground mb-4 last:mb-0"
    >
      {text}
    </motion.p>
  );
};

/** Title for a section — brightens once its section becomes active, stays bright while active. */
const SectionTitle = ({ title, opacity }: { title: string; opacity: MotionValue<number> }) => (
  <motion.h2
    style={{ opacity }}
    className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl font-story-text font-bold text-primary-foreground leading-tight"
  >
    {title}
  </motion.h2>
);

const BrandStoryDesktop = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rawProgress = useMotionValue(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trackHeight = el.offsetHeight;
      const viewportHeight = window.innerHeight;
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

  // Flat list of every chunk across both sections, each knowing its own section index —
  // the highlight sweeps through this whole list in one continuous pass.
  const flatChunks = SECTIONS.flatMap((section, sectionIndex) =>
    section.chunks.map((c) => ({ ...c, sectionIndex })),
  );

  const FADE_FRACTION = 0.04;
  const chunkProgress = useTransform(
    rawProgress,
    [FADE_FRACTION, 1 - FADE_FRACTION],
    [0, flatChunks.length - 1],
    { clamp: true },
  );
  const pinnedOpacity = useTransform(
    rawProgress,
    [0, FADE_FRACTION, 1 - FADE_FRACTION, 1],
    [0, 1, 1, 0],
  );

  // Index of the first chunk belonging to each section, used to know which section's
  // label/title/chunk-block is "active" at any point in the sweep.
  const sectionStartIndex = SECTIONS.reduce<number[]>((acc, section, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + SECTIONS[i - 1].chunks.length);
    return acc;
  }, []);

  const lastOurStoryIndex = SECTIONS[0].chunks.length - 1;
  const sectionSwitch = useTransform(chunkProgress, [lastOurStoryIndex + 0.4, lastOurStoryIndex + 0.8], [0, 1]);
  const ourStoryOpacity = useTransform(sectionSwitch, [0, 1], [1, 0]);
  const aboutUsOpacity = useTransform(sectionSwitch, [0, 1], [0, 1]);
  const sectionOpacities = [ourStoryOpacity, aboutUsOpacity];

  // The manual progress calc above uses (trackHeight - viewportHeight) as the usable
  // scroll distance, so the track needs to exceed one viewport height. ~48vh per chunk
  // keeps the sweep readable without dragging the section out forever.
  const scrollPerChunk = 48; // vh
  const trackHeightVh = flatChunks.length * scrollPerChunk + 100;

  return (
    <div ref={sectionRef} className="relative hidden md:block" style={{ height: `${trackHeightVh}vh` }}>
      <motion.div
        style={{ opacity: pinnedOpacity }}
        className="fixed top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none"
      >
        <div className="container-wide mx-auto px-4 sm:px-6 h-full">
          <div className="h-full grid grid-cols-[160px_1fr] lg:grid-cols-[220px_1fr] items-center gap-8 lg:gap-16">
            {/* Left column: section label, pinned in place */}
            <div className="relative h-6">
              {SECTIONS.map((section, i) => (
                <motion.span
                  key={section.label}
                  style={{ opacity: sectionOpacities[i] }}
                  className="absolute inset-0 text-sm font-story-label font-semibold tracking-widest uppercase text-accent whitespace-nowrap"
                >
                  {section.label}
                </motion.span>
              ))}
            </div>

            {/* Right column: title + full dimmed body text with highlight sweep */}
            <div className="max-w-2xl">
              <div className="relative h-[5.5rem] sm:h-24 md:h-28 mb-8">
                {SECTIONS.map((section, i) => (
                  <SectionTitle key={section.label} title={section.title} opacity={sectionOpacities[i]} />
                ))}
              </div>

              <div className="relative">
                {SECTIONS.map((section, sIdx) => (
                  <motion.div
                    key={section.label}
                    style={{ opacity: sectionOpacities[sIdx] }}
                    className={sIdx === 0 ? "relative" : "absolute inset-0"}
                  >
                    {section.chunks.map((chunk, cIdx) => (
                      <HighlightChunk
                        key={chunk.text.slice(0, 24)}
                        text={chunk.text}
                        index={sectionStartIndex[sIdx] + cIdx}
                        progress={chunkProgress}
                      />
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Mobile: no pinning. Each section's full text sits in normal flow, label above the
 * text. The highlight sweep is driven by how far the section has scrolled through the
 * viewport (0 = just entered from the bottom, 1 = about to leave the top) rather than a
 * pinned track — avoids the scroll-jank risk of tall pinned sections on phones while
 * keeping the same "full text visible, dim-to-bright sweep" feel.
 */
const MobileSection = ({ section }: { section: Section }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rawProgress = useMotionValue(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // 0 when the block's top is at the bottom of the viewport, 1 when its bottom
      // reaches the top of the viewport — i.e. progress across the block's full transit.
      const total = rect.height + viewportHeight;
      const traveled = viewportHeight - rect.top;
      const p = total > 0 ? traveled / total : 0;
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

  const chunkProgress = useTransform(rawProgress, [0.15, 0.85], [0, section.chunks.length - 1], { clamp: true });

  return (
    <div ref={ref} className="max-w-2xl">
      <span className="text-sm font-story-label font-semibold tracking-widest uppercase text-accent block mb-3">{section.label}</span>
      <h2 className="text-2xl sm:text-3xl font-story-text font-bold text-primary-foreground leading-tight mb-5">
        {section.title}
      </h2>
      {section.chunks.map((chunk, i) => (
        <HighlightChunk key={chunk.text.slice(0, 24)} text={chunk.text} index={i} progress={chunkProgress} />
      ))}
    </div>
  );
};

const BrandStoryMobile = () => (
  <div className="md:hidden container-wide mx-auto px-4 sm:px-6 space-y-16">
    {SECTIONS.map((section) => (
      <MobileSection key={section.label} section={section} />
    ))}
  </div>
);

const StaticFallback = () => (
  <section className="section-padding relative">
    <div className="container-wide mx-auto px-4 sm:px-6 space-y-14">
      {SECTIONS.map((section) => (
        <div key={section.label} className="max-w-2xl">
          <span className="text-sm font-story-label font-semibold tracking-widest uppercase text-accent block mb-3">{section.label}</span>
          <h2 className="text-2xl sm:text-3xl font-story-text font-bold text-primary-foreground leading-tight mb-5">
            {section.title}
          </h2>
          {section.chunks.map((chunk) => (
            <p key={chunk.text.slice(0, 24)} className="font-story-text text-primary-foreground/65 leading-relaxed mb-3 last:mb-0">
              {chunk.text}
            </p>
          ))}
        </div>
      ))}
    </div>
  </section>
);

const BrandStory = () => {
  const prefersReducedMotion = useReducedMotion();

  // Avoid hydration/SSR-less flash: this is a pure client SPA, but useReducedMotion()
  // resolves on mount, so default to the static fallback until it settles to avoid a
  // layout jump from "static" to "pinned" on first paint.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || prefersReducedMotion) {
    return <StaticFallback />;
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
