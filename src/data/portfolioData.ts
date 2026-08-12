// Centralized portfolio content. Deliberately kept as one static data file (not scattered
// across components) so this can later be swapped for an API/CMS call with minimal refactor —
// any component consuming this data only needs `getProjectsByCategory` / `getProjectBySlug`.
//
// IMPORTANT — honesty requirement: every project below is a fictional "Concept Case Study" or
// "Internal Project" built to demonstrate presentation quality, NOT a real client engagement.
// Do not present these as real client work. Swap in real projects here once available, and
// remove the "Concept Case Study" badge only for genuine client/internal work.

import showcaseEnterprise from "@/assets/showcase-enterprise.jpg";
import showcaseBrand from "@/assets/showcase-brand.jpg";
import showcaseFilm from "@/assets/showcase-film.jpg";
import showcaseMobile from "@/assets/showcase-mobile.jpg";
import showcasePortrait from "@/assets/showcase-portrait.jpg";
import showcaseSaas from "@/assets/showcase-saas.jpg";
import showcaseSchool from "@/assets/BrightPathAcademy.png";
import showcaseAdeyemi from "@/assets/AdeyemiPartners.png";

export type PortfolioCategory =
  | "web-development"
  | "ui-ux-design"
  | "graphic-brand-design"
  | "social-media-management"
  | "videography-video-editing"
  | "motion-graphics-design";

export type ProjectStatus = "Concept Case Study" | "Internal Project" | "Client Project";

export interface BehanceSection {
  heading: string;
  description: string;
  images?: string[];
}

export interface PortfolioProject {
  id: string;
  slug: string;
  category: PortfolioCategory;
  title: string;
  clientName: string;
  projectType: string;
  status: ProjectStatus;
  shortDescription: string;
  story: string;
  coverImage: string;
  logoImage?: string;
  assets?: string[];
  liveUrl?: string;
  behanceStyleSections?: BehanceSection[];

  // Category-specific optional fields (all optional so the shared type stays simple).
  colorPalette?: { name: string; hex: string }[];
  typography?: { role: string; sample: string; fontStack: string }[];
  features?: string[];
  toolsUsed?: string[];
  videoType?: "Product video" | "Event video" | "Commercial" | "Documentary" | "Social video";
  motionUseCase?: "Logo animation" | "Explainer animation" | "Social media motion post" | "Promo animation";
  storyboard?: { step: string; description: string }[];
  campaignObjective?: string;
  contentDirection?: string;
  samplePosts?: { caption: string; image: string }[];
  sampleMetrics?: { label: string; value: string }[];
}

export const categoryMeta: Record<PortfolioCategory, { label: string; navLabel: string; description: string; seoDescription: string }> = {
  "web-development": {
    label: "Website Development",
    navLabel: "Website Development Portfolio",
    description: "Performance-engineered web platforms built for speed, scale, and conversion.",
    seoDescription:
      "Explore website development projects and case studies by Creative Emman Limited, including modern business websites, digital platforms, landing pages, and web applications.",
  },
  "ui-ux-design": {
    label: "UI/UX Design",
    navLabel: "UI/UX Design Portfolio",
    description: "Research-driven product design — from problem framing to polished final screens.",
    seoDescription:
      "Explore UI/UX design case studies by Creative Emman Limited, including product interfaces, mobile app screens, wireframes, user flows, and digital experience design.",
  },
  "graphic-brand-design": {
    label: "Graphic & Brand Design",
    navLabel: "Graphic & Brand Design Portfolio",
    description: "Identity systems built on real strategy — logo, color, type, and the story behind the mark.",
    seoDescription:
      "Explore brand identity, logo design, visual systems, creative direction, and graphic design case studies by Creative Emman Limited.",
  },
  "social-media-management": {
    label: "Social Media Management",
    navLabel: "Social Media Management Portfolio",
    description: "Campaigns engineered for engagement, consistency, and brand authority.",
    seoDescription:
      "Explore social media campaigns, content systems, visual direction, campaign strategy, and brand growth work by Creative Emman Limited.",
  },
  "videography-video-editing": {
    label: "Videography & Video Editing",
    navLabel: "Videography & Video Editing Portfolio",
    description: "Cinematic production and post — from raw footage to a finished story.",
    seoDescription:
      "Explore cinematic video projects, brand films, product videos, event visuals, social video edits, and storytelling work by Creative Emman Limited.",
  },
  "motion-graphics-design": {
    label: "Motion Graphics Design",
    navLabel: "Motion Graphics Design Portfolio",
    description: "Animated brand content, explainers, and kinetic visual storytelling.",
    seoDescription:
      "Explore motion graphics, logo animations, explainer visuals, animated brand assets, and digital motion projects by Creative Emman Limited.",
  },
};

export const portfolioProjects: PortfolioProject[] = [
  // ---------- Website Development ----------
  {
    id: "wd-1",
    slug: "brightpath-academy-website",
    category: "web-development",
    title: "BrightPath Academy — School Website",
    clientName: "BrightPath Academy",
    projectType: "School Website",
    status: "Concept Case Study",
    shortDescription:
      "An editorial, boutique-studio school website built around a mustard-and-cream palette, serif headlines, and a signature geometric pattern motif — warm and welcoming without slipping into the generic school-template look.",
    story:
      'BrightPath Academy needed a digital front door that felt as warm and welcoming as walking onto the actual campus without slipping into the generic "school template" look. We built an editorial, boutique-studio design system from scratch: a mustard-and-cream palette, serif headlines paired with clean sans-serif body text, and a signature geometric pattern motif that shows up as a recurring brand signature across every page. Twelve fully responsive pages later, admissions, academics, and campus life all read like a considered brand not a stock layout.',
    coverImage: showcaseSchool,
    liveUrl: "https://bright-pathacademy.vercel.app/",
    features: [
      "Full admissions flow — process, requirements, tuition, FAQ",
      "Filterable faculty directory with individual staff profiles",
      "Multi-category photo gallery of campus life",
      "News & events system with detail pages",
      "Fully responsive — mobile nav collapses cleanly to a matching brand experience",
    ],
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "React Router", "Framer Motion"],
  },
  {
    id: "wd-2",
    slug: "adeyemi-partners-law-firm-website",
    category: "web-development",
    title: "Adeyemi & Partners — Law Firm Website",
    clientName: "Adeyemi & Partners",
    projectType: "Corporate Law Firm Website",
    status: "Concept Case Study",
    shortDescription:
      "A twelve-page corporate law firm site built around charcoal, ivory, and a disciplined gold accent — deliberately restrained so every element signals serious authority before a single word is read.",
    story:
      'Adeyemi & Partners needed a site that earns trust in the first three seconds the kind of restraint that signals "serious firm" before a single word is read. We built the entire system around charcoal, ivory, and a disciplined gold accent, paired with a gravitas-forward serif for headlines and sharp, minimal-radius components throughout deliberately stripping out anything playful. The result is a twelve-page site where every practice area, attorney profile, and case result reinforces the same quiet authority.',
    coverImage: showcaseAdeyemi,
    liveUrl: "https://adeyemi-partners.vercel.app/",
    features: [
      "Practice area directory with individual deep-dive pages",
      "Filterable attorney directory with full profile pages",
      "Case results / track record section, filterable by practice area",
      "Legal insights blog with article detail pages",
      "Consultation request form with practice-area routing",
    ],
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "React Router", "Framer Motion"],
  },

  // ---------- UI/UX Design ----------
  {
    id: "uiux-1",
    slug: "luxebyte-mobile-banking",
    category: "ui-ux-design",
    title: "LuxeByte Digital — Mobile Banking App",
    clientName: "LuxeByte Digital",
    projectType: "Mobile App UI/UX",
    status: "Concept Case Study",
    shortDescription: "A research-led redesign concept for a fictional digital bank's mobile app, focused on reducing first-time-user drop-off.",
    story:
      "Early-stage users were abandoning onboarding before reaching their first transaction. We mapped the full flow, found where confidence dropped, and rebuilt the experience around small, confidence-building moments rather than one long form.",
    coverImage: showcaseMobile,
    behanceStyleSections: [
      { heading: "Project Overview", description: "A concept redesign of a digital banking app's onboarding and core transaction flow, aimed at reducing drop-off in the first session." },
      { heading: "Problem Statement", description: "New users frequently abandoned setup before completing their first transfer, often citing uncertainty about what step came next." },
      { heading: "Research Insight", description: "Usability sessions (simulated for this concept study) pointed to unclear progress indication and too many fields requested up front as the main friction points." },
      { heading: "User Flow", description: "We restructured onboarding into four short, clearly-labeled steps with visible progress, deferring optional details until after the first successful transaction." },
      { heading: "Wireframes", description: "Low-fidelity wireframes explored three onboarding structures before settling on a single-column, progressively-disclosed flow." },
      { heading: "Visual Design", description: "A calm, high-contrast palette with confident typography reduces the 'is this safe' hesitation common in financial apps." },
      { heading: "Design System", description: "A compact component library — inputs, cards, status pills, and confirmation states — built for reuse across the rest of the app." },
      { heading: "Final Screens", description: "The finished onboarding and transfer-confirmation screens, balancing security cues with a fast, low-friction path to the first transaction." },
    ],
  },


  // ---------- Graphic & Brand Design ----------
  {
    id: "gbd-2",
    slug: "pulse-social-lab-identity",
    category: "graphic-brand-design",
    title: "Pulse Social Lab — Brand Identity",
    clientName: "Pulse Social Lab",
    projectType: "Brand Identity & Collateral",
    status: "Concept Case Study",
    shortDescription: "A bold identity concept for a fictional social media consultancy — built to feel energetic without feeling noisy.",
    story:
      "Pulse Social Lab's concept identity centers on a simple pulse-line mark — a nod to engagement metrics and heartbeat energy alike. The system stays restrained in color so the mark can carry the energy on its own.",
    coverImage: showcaseEnterprise,
    logoImage: showcaseEnterprise,
    colorPalette: [
      { name: "Pulse Blue", hex: "#0EA5E9" },
      { name: "Ink Black", hex: "#0B0C10" },
      { name: "Signal White", hex: "#F8FAFC" },
    ],
    typography: [
      { role: "Display", sample: "Pulse Social Lab", fontStack: "Space Grotesk, sans-serif" },
      { role: "Body", sample: "Engagement, engineered.", fontStack: "Inter, sans-serif" },
    ],
    assets: [showcaseEnterprise, showcaseSaas, showcaseMobile, showcaseBrand],
  },
  {
    id: "uiux-2",
    slug: "greennest-organics-storefront-ux",
    category: "graphic-brand-design",
    title: "GreenNest Organics — E-commerce UX",
    clientName: "GreenNest Organics",
    projectType: "E-commerce UI/UX",
    status: "Concept Case Study",
    shortDescription: "A storefront UX concept for a fictional organics brand, designed to make subscription checkout feel effortless.",
    story:
      "Subscription checkout is where good organic-food storefronts usually lose people — too many choices, too much friction. We simplified the decision tree and surfaced trust signals exactly where hesitation tends to spike.",
    coverImage: showcaseBrand,
    behanceStyleSections: [
      { heading: "Project Overview", description: "A concept e-commerce experience for a subscription-based organic goods brand." },
      { heading: "Problem Statement", description: "Subscription flexibility (pause, swap, skip) was buried in account settings, causing avoidable churn." },
      { heading: "Research Insight", description: "Customers wanted control over their subscription to feel visible before they committed, not after." },
      { heading: "User Flow", description: "We moved subscription controls into the checkout step itself, so flexibility is a selling point, not a hidden feature." },
      { heading: "Visual Design", description: "Warm, natural tones and generous whitespace reinforce the 'organic' positioning without leaning on clichés." },
      { heading: "Final Screens", description: "Checkout, subscription management, and confirmation screens designed to reduce post-purchase anxiety." },
    ],
  },

  // ---------- Social Media Management ----------
  // {
  //   id: "smm-2",
  //   slug: "urbanframe-media-campaign",
  //   category: "social-media-management",
  //   title: "UrbanFrame Media — Brand Awareness Sprint",
  //   clientName: "UrbanFrame Media",
  //   projectType: "Social Media Campaign",
  //   status: "Concept Case Study",
  //   shortDescription: "A concept awareness sprint for a fictional media production house, built around short-form behind-the-camera content.",
  //   story:
  //     "UrbanFrame's concept sprint focused on showing process, not just polished output — raw clips from set, quick lighting breakdowns, and short founder commentary to build familiarity fast.",
  //   coverImage: showcaseFilm,
  //   campaignObjective: "Build brand familiarity ahead of a studio relaunch.",
  //   contentDirection: "Short-form behind-the-scenes clips, lighting/setup breakdowns, and founder-voice commentary.",
  //   samplePosts: [
  //     { caption: "60 seconds of what actually happens before 'action.'", image: showcaseFilm },
  //     { caption: "One light, three setups. Here's how we shaped this scene.", image: showcaseEnterprise },
  //   ],
  //   sampleMetrics: [
  //     { label: "Sample Reach Lift", value: "+48%" },
  //     { label: "Sample Profile Visits", value: "+910" },
  //   ],
  // },

  // ---------- Videography & Video Editing ----------


  // ---------- Motion Graphics Design ----------
];

export const getProjectsByCategory = (category: PortfolioCategory): PortfolioProject[] =>
  portfolioProjects.filter((p) => p.category === category);

export const getProjectBySlug = (slug: string): PortfolioProject | undefined =>
  portfolioProjects.find((p) => p.slug === slug);

export const portfolioCategoryOrder: PortfolioCategory[] = [
  "web-development",
  "ui-ux-design",
  "graphic-brand-design",
  "social-media-management",
  "videography-video-editing",
  "motion-graphics-design",
];
