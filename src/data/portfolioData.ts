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

export const categoryMeta: Record<PortfolioCategory, { label: string; navLabel: string; description: string }> = {
  "web-development": {
    label: "Website Development",
    navLabel: "Website Development Portfolio",
    description: "Performance-engineered web platforms built for speed, scale, and conversion.",
  },
  "ui-ux-design": {
    label: "UI/UX Design",
    navLabel: "UI/UX Design Portfolio",
    description: "Research-driven product design — from problem framing to polished final screens.",
  },
  "graphic-brand-design": {
    label: "Graphic & Brand Design",
    navLabel: "Graphic & Brand Design Portfolio",
    description: "Identity systems built on real strategy — logo, color, type, and the story behind the mark.",
  },
  "social-media-management": {
    label: "Social Media Management",
    navLabel: "Social Media Management Portfolio",
    description: "Campaigns engineered for engagement, consistency, and brand authority.",
  },
  "videography-video-editing": {
    label: "Videography & Video Editing",
    navLabel: "Videography & Video Editing Portfolio",
    description: "Cinematic production and post — from raw footage to a finished story.",
  },
  "motion-graphics-design": {
    label: "Motion Graphics Design",
    navLabel: "Motion Graphics Design Portfolio",
    description: "Animated brand content, explainers, and kinetic visual storytelling.",
  },
};

export const portfolioProjects: PortfolioProject[] = [
  // ---------- Website Development ----------
  {
    id: "wd-1",
    slug: "novapay-studio-platform",
    category: "web-development",
    title: "NovaPay Studio — SaaS Platform",
    clientName: "NovaPay Studio",
    projectType: "SaaS Web Application",
    status: "Concept Case Study",
    shortDescription: "A performance-first dashboard for a fictional fintech SaaS, built to handle real-time data without feeling heavy.",
    story:
      "NovaPay Studio needed a dashboard that financial teams could trust at a glance — fast, legible, and calm under pressure. We engineered the front end around real-time data streams while keeping interaction latency near-zero, then layered in a design system that reads as premium without sacrificing density.",
    coverImage: showcaseSaas,
    liveUrl: "",
    features: ["Real-time transaction feed", "Role-based dashboards", "Exportable financial reports", "Dark/light theming"],
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "WebSockets"],
  },
  {
    id: "wd-2",
    slug: "radiance-logistics-platform",
    category: "web-development",
    title: "Radiance Logistics — Fleet Management Portal",
    clientName: "Radiance Logistics",
    projectType: "Enterprise Web Application",
    status: "Concept Case Study",
    shortDescription: "An internal fleet-tracking portal concept for a fictional logistics company, built for dispatchers managing dozens of routes at once.",
    story:
      "Dispatchers needed to see fleet status without digging through menus. We designed an at-a-glance command view — live vehicle states, route deviations flagged automatically, and a permissions layer so drivers, dispatchers, and admins each see only what they need.",
    coverImage: showcaseEnterprise,
    liveUrl: "",
    features: ["Live fleet map", "Automated route-deviation alerts", "Driver/dispatcher/admin roles", "Exportable trip logs"],
    toolsUsed: ["React", "Node.js", "PostgreSQL", "Mapbox", "Docker"],
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
  {
    id: "uiux-2",
    slug: "greennest-organics-storefront-ux",
    category: "ui-ux-design",
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

  // ---------- Graphic & Brand Design ----------
  {
    id: "gbd-1",
    slug: "frame-craft-studios-identity",
    category: "graphic-brand-design",
    title: "FrameCraft Studios — Brand Identity",
    clientName: "FrameCraft Studios",
    projectType: "Full Brand Identity System",
    status: "Concept Case Study",
    shortDescription: "A complete identity concept for a fictional photography/framing studio — built around the idea of a single frame holding a story.",
    story:
      "FrameCraft needed a mark that worked as small as a favicon and as large as a shopfront sign. The concept logo is built from a single continuous frame shape — a nod to both photo framing and 'framing a moment' — rendered in a warm, confident palette that feels handcrafted rather than corporate.",
    coverImage: showcaseBrand,
    logoImage: showcaseBrand,
    colorPalette: [
      { name: "Charcoal Ink", hex: "#1C1B19" },
      { name: "Warm Brass", hex: "#C9A24B" },
      { name: "Soft Linen", hex: "#F4EFE6" },
      { name: "Deep Clay", hex: "#7A4B32" },
    ],
    typography: [
      { role: "Display", sample: "FrameCraft Studios", fontStack: "Playfair Display, serif" },
      { role: "Body", sample: "Every frame tells a story.", fontStack: "Inter, sans-serif" },
    ],
    assets: [showcaseBrand, showcaseEnterprise, showcaseSaas, showcaseMobile, showcasePortrait, showcaseFilm],
  },
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

  // ---------- Social Media Management ----------
  {
    id: "smm-1",
    slug: "greennest-organics-campaign",
    category: "social-media-management",
    title: "GreenNest Organics — Launch Campaign",
    clientName: "GreenNest Organics",
    projectType: "Social Media Campaign",
    status: "Concept Case Study",
    shortDescription: "A sample campaign concept built around a fictional organics brand's seasonal product launch.",
    story:
      "The goal of this concept campaign was simple: make a seasonal product launch feel like an event, not an announcement. Content leaned on behind-the-harvest storytelling rather than straight product shots.",
    coverImage: showcaseBrand,
    campaignObjective: "Drive awareness and pre-orders for a seasonal product launch.",
    contentDirection: "Behind-the-scenes harvest content, founder-voice captions, and a consistent warm visual palette across the grid.",
    samplePosts: [
      { caption: "From soil to shelf — here's what 'organic' actually looks like behind the scenes. 🌱", image: showcaseBrand },
      { caption: "Pre-orders open Friday. First 100 get our founder's handwritten note in the box.", image: showcaseSaas },
      { caption: "Why we never rush a harvest — even when demand says otherwise.", image: showcasePortrait },
    ],
    sampleMetrics: [
      { label: "Sample Reach Lift", value: "+62%" },
      { label: "Sample Engagement Rate", value: "5.8%" },
      { label: "Sample Saves", value: "+340" },
    ],
  },
  {
    id: "smm-2",
    slug: "urbanframe-media-campaign",
    category: "social-media-management",
    title: "UrbanFrame Media — Brand Awareness Sprint",
    clientName: "UrbanFrame Media",
    projectType: "Social Media Campaign",
    status: "Concept Case Study",
    shortDescription: "A concept awareness sprint for a fictional media production house, built around short-form behind-the-camera content.",
    story:
      "UrbanFrame's concept sprint focused on showing process, not just polished output — raw clips from set, quick lighting breakdowns, and short founder commentary to build familiarity fast.",
    coverImage: showcaseFilm,
    campaignObjective: "Build brand familiarity ahead of a studio relaunch.",
    contentDirection: "Short-form behind-the-scenes clips, lighting/setup breakdowns, and founder-voice commentary.",
    samplePosts: [
      { caption: "60 seconds of what actually happens before 'action.'", image: showcaseFilm },
      { caption: "One light, three setups. Here's how we shaped this scene.", image: showcaseEnterprise },
    ],
    sampleMetrics: [
      { label: "Sample Reach Lift", value: "+48%" },
      { label: "Sample Profile Visits", value: "+910" },
    ],
  },

  // ---------- Videography & Video Editing ----------
  {
    id: "video-1",
    slug: "urbanframe-media-commercial",
    category: "videography-video-editing",
    title: "UrbanFrame Media — Brand Commercial",
    clientName: "UrbanFrame Media",
    projectType: "Commercial Video Production",
    status: "Concept Case Study",
    shortDescription: "A concept 60-second brand commercial built around UrbanFrame's relaunch story.",
    story:
      "The brief for this concept piece: make a 60-second commercial feel like a short film, not an ad. We leaned on natural light, long static shots, and a restrained voiceover to let the visuals carry the weight.",
    coverImage: showcaseFilm,
    videoType: "Commercial",
    toolsUsed: ["DaVinci Resolve", "Premiere Pro", "Cinema 4D (titles)"],
  },
  {
    id: "video-2",
    slug: "novapay-studio-product-video",
    category: "videography-video-editing",
    title: "NovaPay Studio — Product Walkthrough",
    clientName: "NovaPay Studio",
    projectType: "Product Video",
    status: "Concept Case Study",
    shortDescription: "A concept product walkthrough video explaining NovaPay's dashboard in under 90 seconds.",
    story:
      "Fintech product videos tend to over-explain. This concept piece strips the walkthrough to three core moments — see your money move, understand it instantly, act on it in one tap.",
    coverImage: showcaseSaas,
    videoType: "Product video",
    toolsUsed: ["After Effects", "Premiere Pro", "Screen capture compositing"],
  },

  // ---------- Motion Graphics Design ----------
  {
    id: "motion-1",
    slug: "novapay-studio-logo-animation",
    category: "motion-graphics-design",
    title: "NovaPay Studio — Logo Animation",
    clientName: "NovaPay Studio",
    projectType: "Logo Animation",
    status: "Concept Case Study",
    shortDescription: "A concept kinetic logo reveal for NovaPay Studio, designed for use as an app splash and video intro.",
    story:
      "The animation concept builds the NovaPay mark from individual transaction-line strokes that snap into the final logotype — a small visual metaphor for 'many transactions, one clear picture.'",
    coverImage: showcaseSaas,
    motionUseCase: "Logo animation",
    storyboard: [
      { step: "01", description: "Thin animated lines enter from the edges, representing scattered transaction data." },
      { step: "02", description: "Lines converge and snap into the NovaPay wordmark with a soft elastic ease." },
      { step: "03", description: "A brief glow pulse settles the mark into its resting state for the outro hold." },
    ],
  },
  {
    id: "motion-2",
    slug: "greennest-organics-explainer",
    category: "motion-graphics-design",
    title: "GreenNest Organics — Explainer Animation",
    clientName: "GreenNest Organics",
    projectType: "Explainer Animation",
    status: "Concept Case Study",
    shortDescription: "A concept 45-second explainer walking through GreenNest's farm-to-box process.",
    story:
      "This concept explainer uses simple flat-illustration motion to walk through harvest → pack → ship in three scenes, designed to be understandable with sound off.",
    coverImage: showcaseBrand,
    motionUseCase: "Explainer animation",
    storyboard: [
      { step: "01", description: "Illustrated harvest scene — produce moves from field to crate with a gentle bounce." },
      { step: "02", description: "Packing scene — crates animate into branded boxes with a satisfying snap-seal motion." },
      { step: "03", description: "Delivery scene — a box travels along a simplified route line to a doorstep icon." },
    ],
  },
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
