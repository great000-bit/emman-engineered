import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * "Our Story" / "About Creative Emman Limited" — a scroll-driven text-reveal section.
 *
 * Desktop/tablet: the section is tall enough to scroll through; as the user scrolls,
 * slide 1 fades + moves up and out while slide 2 fades + moves up into place — driven
 * directly by scroll progress (useScroll + useTransform), so it's tied to the scrollbar
 * rather than a timer. Only `opacity`/`transform` are animated (GPU-friendly, no layout
 * thrashing), and there is no JS scroll-event listener — Framer's useScroll uses a
 * passive, rAF-batched scroll observer internally.
 *
 * Mobile: a tall pinned scroll effect is exactly the kind of thing that feels janky on
 * mobile (per the brief), so below the `md` breakpoint this renders as two simple
 * stacked blocks that fade in once each on entering the viewport — cheap and reliable.
 *
 * No card, no logo — copy only, as specified.
 */

const SLIDES = [
  {
    label: "Our Story",
    title: "Built to Create. Engineered to Grow.",
    paragraphs: [
      "Creative Emman Limited was founded on the belief that exceptional talent deserves meaningful opportunities, and ambitious businesses deserve digital solutions built with intention. What started as a passion for design, technology, and problem-solving has grown into a creative and technology company committed to helping brands navigate the digital landscape with confidence.",
      "We recognized a gap in the industry. Many businesses struggle to find reliable creative partners who understand both aesthetics and business objectives, while talented professionals often lack access to projects that allow them to showcase their abilities and grow. Creative Emman Limited was established to bridge that gap.",
      "Today, we bring together designers, developers, strategists, writers, marketers, and innovators to create digital experiences that are thoughtful, scalable, and impactful. Every project we undertake contributes to a larger vision of building products, creating opportunities, and shaping a future where creativity and technology work hand in hand.",
    ],
  },
  {
    label: "About Creative Emman Limited",
    title: "Building Brands, Products, and Opportunities.",
    paragraphs: [
      "Creative Emman Limited is a creative and technology company dedicated to helping startups, businesses, and organizations build stronger brands, better products, and meaningful digital experiences.",
      "Our expertise spans branding, UI/UX design, web development, product strategy, content creation, and digital innovation. We partner with businesses to transform ideas into solutions that not only look exceptional but also drive measurable growth.",
      "Beyond client services, Creative Emman Limited is building an ecosystem that empowers talented creatives and technology professionals through collaboration, mentorship, and access to real-world opportunities. We believe that sustainable innovation happens when businesses succeed and people grow alongside them.",
      "As we continue to evolve, our mission remains clear: to engineer opportunities, inspire innovation, and build digital solutions that leave a lasting impact.",
    ],
  },
];

const SlideText = ({ slide }: { slide: typeof SLIDES[number] }) => (
  <>
    <span className="text-sm font-medium tracking-widest uppercase text-accent">{slide.label}</span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-3 mb-6 leading-tight">
      {slide.title}
    </h2>
    {slide.paragraphs.map((p, i) => (
      <p key={i} className="text-primary-foreground/60 leading-relaxed mb-4 last:mb-0">
        {p}
      </p>
    ))}
  </>
);

const BrandStoryDesktop = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Slide 1 holds, then fades out; slide 2 fades in before slide 1 fully disappears,
  // so there is always at least one slide visible — no empty gap at the midpoint.
  const slide1Opacity = useTransform(scrollYProgress, [0, 0.38, 0.52], [1, 1, 0]);
  const slide1Y = useTransform(scrollYProgress, [0, 0.52], [0, -40]);

  const slide2Opacity = useTransform(scrollYProgress, [0.42, 0.58, 1], [0, 1, 1]);
  const slide2Y = useTransform(scrollYProgress, [0.42, 0.62], [40, 0]);

  // The site's global `html, body { overflow-x: hidden }` rule (needed elsewhere to stop
  // horizontal bleed from decorative elements) interferes with `position: sticky` pinning
  // in some browser engines — the element never actually pins, it just scrolls normally.
  // Pinning via `position: fixed`, gated to only be fixed while the track is on-screen,
  // sidesteps that entirely and is just as cheap (transform/opacity-driven, no listeners
  // beyond Framer's own rAF-batched scroll observer).
  const pinnedOpacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <div ref={sectionRef} className="relative h-[200vh] hidden md:block">
      <motion.div
        style={{ opacity: pinnedOpacity }}
        className="fixed top-0 left-0 right-0 h-screen flex items-center overflow-hidden pointer-events-none"
      >
        <div className="container-wide mx-auto px-4 sm:px-6 relative w-full h-[60vh] max-h-[600px]">
          <div className="absolute inset-x-4 sm:inset-x-6 top-1/2 -translate-y-1/2 pointer-events-auto">
            <motion.div style={{ opacity: slide1Opacity, y: slide1Y }} className="max-w-2xl">
              <SlideText slide={SLIDES[0]} />
            </motion.div>
          </div>
          <div className="absolute inset-x-4 sm:inset-x-6 top-1/2 -translate-y-1/2 pointer-events-auto">
            <motion.div style={{ opacity: slide2Opacity, y: slide2Y }} className="max-w-2xl">
              <SlideText slide={SLIDES[1]} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const BrandStoryMobile = () => (
  <div className="md:hidden container-wide mx-auto px-4 sm:px-6 space-y-16">
    {SLIDES.map((slide, i) => (
      <motion.div
        key={slide.label}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
        className="max-w-2xl"
      >
        <SlideText slide={slide} />
      </motion.div>
    ))}
  </div>
);

const BrandStory = () => {
  const prefersReducedMotion = useReducedMotion();

  // With reduced motion requested, skip the pinned scroll-jacking effect entirely
  // (even on desktop) and use the simple stacked layout everywhere.
  if (prefersReducedMotion) {
    return (
      <section className="section-padding relative">
        <div className="container-wide mx-auto px-4 sm:px-6 space-y-16">
          {SLIDES.map((slide) => (
            <div key={slide.label} className="max-w-2xl">
              <SlideText slide={slide} />
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
