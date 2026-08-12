// ─────────────────────────────────────────────────────────────────────────────
// Blog Article Content Data
// ─────────────────────────────────────────────────────────────────────────────
// Each `BlogArticle` maps 1-to-1 with a `BlogPost` in blogData.ts (same `id`).
//
// TO ADD A NEW ARTICLE:
//  1. Add a new post object to `blogPosts` in blogData.ts (id, title, excerpt,
//     date, readTime, category, imageUrl).
//  2. Add a new `BlogArticle` entry below with the SAME `id`.
//
// CONTENT BLOCK TYPES:
//  • paragraph  — body text (supports inline HTML via dangerouslySetInnerHTML)
//  • heading    — h2 section heading; must have a unique `id` for TOC anchoring
//  • list       — unordered bullet list
//  • blockquote — pull-quote / callout
//  • checklist  — checked list items
//  • roadmap    — horizontal step cards (e.g. a workflow diagram)
// ─────────────────────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "paragraph";  text: string }
  | { type: "heading";    id: string;  text: string }
  | { type: "list";       items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "checklist";  items: string[] }
  | { type: "roadmap";    title: string; steps: { step: string; title: string; desc: string }[] };

export interface TocItem {
  id: string;
  label: string;
}

export interface BlogArticle {
  /** Must match the `id` field of the corresponding BlogPost in blogData.ts */
  id: string;
  author: string;
  tocItems: TocItem[];
  content: ContentBlock[];
}

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLES
// ─────────────────────────────────────────────────────────────────────────────

export const blogArticles: BlogArticle[] = [
  // ── 1 ────────────────────────────────────────────────────────────────────
  {
    id: "free-website-nigeria",
    author: "Great Emman",
    tocItems: [
      { id: "what-is-free",   label: "1. What counts as a 'free' website?" },
      { id: "platforms",      label: "2. Best free platforms in Nigeria" },
      { id: "limitations",    label: "3. Limitations to know about" },
      { id: "upgrade-path",   label: "4. When to upgrade to paid" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Getting a website for your business doesn't have to cost a fortune — especially when you're just starting out. Several platforms offer genuinely free tiers that are more than adequate for a basic online presence.",
      },
      {
        type: "heading",
        id: "what-is-free",
        text: "1. What counts as a 'free' website?",
      },
      {
        type: "paragraph",
        text: "A free website typically means: no monthly hosting fee, no domain registration fee (you get a subdomain instead), and access to a basic set of templates. You trade cost for flexibility — free plans usually come with platform branding and limited custom features.",
      },
      {
        type: "heading",
        id: "platforms",
        text: "2. Best free platforms in Nigeria",
      },
      {
        type: "list",
        items: [
          "<strong>WordPress.com (Free)</strong> — Solid blogging engine; free subdomain (yoursite.wordpress.com).",
          "<strong>Google Sites</strong> — Dead simple; integrates with Google Workspace; great for portfolios.",
          "<strong>Wix Free Plan</strong> — Drag-and-drop builder; free with Wix branding.",
          "<strong>Blogger</strong> — Google-hosted blog; free custom domain support via CNAME.",
          "<strong>Netlify (static)</strong> — Deploy a static HTML site for free via GitHub; perfect for developers.",
        ],
      },
      {
        type: "heading",
        id: "limitations",
        text: "3. Limitations to know about",
      },
      {
        type: "blockquote",
        text: "\"Free websites are a great starting point, but for any serious business generating revenue, you'll want your own domain and hosting within 6 months.\" — Great Emman",
      },
      {
        type: "checklist",
        items: [
          "No custom domain (you'll have .wordpress.com or .wixsite.com in your URL).",
          "Platform ads may appear on your site.",
          "Limited storage for images and files.",
          "No e-commerce or payment gateway on free tiers.",
          "SEO capabilities are restricted.",
        ],
      },
      {
        type: "heading",
        id: "upgrade-path",
        text: "4. When to upgrade to paid",
      },
      {
        type: "paragraph",
        text: "Once you start receiving consistent traffic, want to sell products, or need a professional email address, it's time to invest in a paid plan. Creative Emman Limited offers affordable website packages tailored specifically for Nigerian businesses.",
      },
      {
        type: "roadmap",
        title: "Website Growth Journey",
        steps: [
          { step: "01", title: "Free Plan",     desc: "Build & validate your idea" },
          { step: "02", title: "Custom Domain", desc: "Look professional, build trust" },
          { step: "03", title: "Paid Hosting",  desc: "Speed, security & e-commerce" },
          { step: "04", title: "Growth Stack",  desc: "SEO, CRM & analytics" },
        ],
      },
    ],
  },

  // ── 2 ────────────────────────────────────────────────────────────────────
  {
    id: "business-ideas-nigeria",
    author: "Great Emman",
    tocItems: [
      { id: "why-now",         label: "1. Why 2023 is a great time to start" },
      { id: "top-ideas",       label: "2. Top 10 business ideas" },
      { id: "getting-started", label: "3. Getting started checklist" },
      { id: "final-thoughts",  label: "4. Final thoughts" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Nigeria's digital economy is growing rapidly. With mobile penetration rising and more consumers shopping and transacting online, the opportunities for entrepreneurs have never been richer.",
      },
      { type: "heading", id: "why-now", text: "1. Why 2023 is a great time to start" },
      {
        type: "paragraph",
        text: "Post-COVID consumer behaviour has permanently shifted. Nigerians are more comfortable ordering food, booking services, and making financial transactions digitally. Founders who build for this shift now will capture significant market share.",
      },
      { type: "heading", id: "top-ideas", text: "2. Top 10 business ideas" },
      {
        type: "list",
        items: [
          "Logistics & last-mile delivery aggregation.",
          "AgriTech — connecting smallholder farmers to buyers.",
          "EdTech — vocational skills and professional certification.",
          "HealthTech — telemedicine and pharmacy delivery.",
          "Digital marketing agency for SMEs.",
          "Food delivery from home kitchens.",
          "Cleaning & home services marketplace.",
          "Secondhand fashion e-commerce.",
          "Solar energy sales and installation.",
          "Virtual assistant services for diaspora businesses.",
        ],
      },
      { type: "heading", id: "getting-started", text: "3. Getting started checklist" },
      {
        type: "checklist",
        items: [
          "Validate your idea with 10 potential customers before building.",
          "Register your business with the CAC.",
          "Build a simple landing page to capture leads.",
          "Set up a business bank account.",
          "Define your minimum viable product (MVP).",
        ],
      },
      { type: "heading", id: "final-thoughts", text: "4. Final thoughts" },
      {
        type: "paragraph",
        text: "Every successful Nigerian business started with one decision — to start. Pick the idea that solves a real problem you understand, and build from there.",
      },
    ],
  },

  // ── 3 ────────────────────────────────────────────────────────────────────
  {
    id: "smes-compete-online",
    author: "Great Emman",
    tocItems: [
      { id: "the-challenge",  label: "1. The SME challenge online" },
      { id: "key-strategies", label: "2. Key competitive strategies" },
      { id: "tools",          label: "3. Affordable tools to use" },
      { id: "action-plan",    label: "4. Your 30-day action plan" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Nigerian SMEs often feel outgunned online by large corporations with massive marketing budgets. But the digital playing field is more level than it appears — if you know where to invest your energy.",
      },
      { type: "heading", id: "the-challenge", text: "1. The SME challenge online" },
      {
        type: "paragraph",
        text: "The biggest barriers for SMEs are inconsistent digital presence, low website authority, and no documented content strategy. Large brands win through volume; you win through precision.",
      },
      { type: "heading", id: "key-strategies", text: "2. Key competitive strategies" },
      {
        type: "list",
        items: [
          "<strong>Niche down</strong>: Own a specific local or vertical niche instead of competing broadly.",
          "<strong>Content marketing</strong>: Publish practical guides your audience actually searches for.",
          "<strong>Local SEO</strong>: Optimise your Google Business Profile and local citations.",
          "<strong>Social proof</strong>: Actively collect and display customer testimonials and case studies.",
          "<strong>Community building</strong>: WhatsApp groups and Facebook communities drive organic loyalty.",
        ],
      },
      { type: "heading", id: "tools", text: "3. Affordable tools to use" },
      {
        type: "checklist",
        items: [
          "Google Business Profile (free) — local search visibility.",
          "Canva (free/pro) — professional graphics on a budget.",
          "Mailchimp (free tier) — email marketing for up to 500 contacts.",
          "Google Analytics 4 (free) — track website performance.",
          "Hootsuite or Buffer (free tiers) — schedule social media content.",
        ],
      },
      { type: "heading", id: "action-plan", text: "4. Your 30-day action plan" },
      {
        type: "roadmap",
        title: "30-Day Competitive Sprint",
        steps: [
          { step: "Wk 1", title: "Audit",   desc: "Review your current digital presence" },
          { step: "Wk 2", title: "Fix",     desc: "Update website & Google profile" },
          { step: "Wk 3", title: "Create",  desc: "Publish 2 pieces of targeted content" },
          { step: "Wk 4", title: "Measure", desc: "Review traffic & leads generated" },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // ADD MORE ARTICLES BELOW — copy the block above and change id + content
  // ────────────────────────────────────────────────────────────────────────
];

/** Convenience lookup by post id */
export const getArticleById = (id: string): BlogArticle | undefined =>
  blogArticles.find((a) => a.id === id);
