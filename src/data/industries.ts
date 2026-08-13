export interface IndustrySolution {
  title: string;
  description: string;
  serviceSlug: string;
}

export interface Industry {
  slug: string;
  name: string;
  eyebrow: string;
  heroTitle: string;
  summary: string;
  whyItMatters: string;
  challenges: string[];
  outcomes: string[];
  solutions: IndustrySolution[];
  featuredProjectSlugs: string[];
  considerations: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const industries: Industry[] = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    eyebrow: "Credibility for technical and energy businesses",
    heroTitle: "Digital systems that present oil and gas capability with clarity",
    summary: "Creative Emman Limited helps operators, service companies and technical vendors in Port Harcourt, Rivers State and across Nigeria communicate capability, experience and operational discipline online.",
    whyItMatters: "A prospective partner or procurement team often reviews a company online before a meeting. A clear website, current company information and professionally presented capability material can make technical competence easier to assess.",
    challenges: ["Outdated corporate websites that weaken first impressions", "Dense capability information that is difficult to navigate", "Disconnected company profiles, service pages and tender materials", "Limited visual documentation of teams, facilities and project environments"],
    outcomes: ["Clear technical service architecture", "More credible vendor presentation", "Consistent corporate communication", "A practical foundation for digital transformation"],
    solutions: [
      { title: "Corporate website and capability architecture", description: "Structure services, sectors, HSE information and enquiry routes so decision-makers can find essential information quickly.", serviceSlug: "custom-website-development" },
      { title: "Company profile and brand system", description: "Align company profiles, presentations and digital assets around one professional identity.", serviceSlug: "brand-identity-design" },
      { title: "Operational dashboards and tools", description: "Create focused internal systems for approved workflows, reporting and visibility where the business case is clear.", serviceSlug: "custom-dashboards" },
      { title: "Corporate media production", description: "Produce credible photography and video for facilities, teams, equipment and corporate communication.", serviceSlug: "corporate-photography" },
    ],
    featuredProjectSlugs: ["adeyemi-partners-law-firm-website"],
    considerations: ["Present claims and credentials accurately", "Design for low-friction access to technical information", "Plan content ownership so information stays current"],
    faqs: [
      { question: "Can you organise an existing company profile into a website?", answer: "Yes. We can audit the current material, identify missing information and translate the useful content into a clear digital structure." },
      { question: "Do you claim oil and gas regulatory expertise?", answer: "No. We provide design, technology and communication services. Regulatory, certification and technical claims remain the client’s responsibility." },
    ],
    seoTitle: "Digital Agency for Oil & Gas Companies Nigeria | Creative Emman Limited",
    seoDescription: "Web development, capability presentation, digital systems and corporate media for oil and gas service companies in Port Harcourt and Nigeria.",
  },
  {
    slug: "education",
    name: "Education",
    eyebrow: "Clearer learning and admissions journeys",
    heroTitle: "Digital experiences that help education organisations inform, enrol and support learners",
    summary: "We design school websites, portals, learning experiences, application journeys and media systems for education and training organisations in Nigeria.",
    whyItMatters: "Students and parents expect accurate programme information, simple application steps and a digital experience that reflects the quality of the institution. Staff also need systems they can operate without constant technical support.",
    challenges: ["Programme and admissions information spread across disconnected channels", "Manual application and payment processes", "School websites that are difficult to update", "Weak presentation of campus life, outcomes and learning culture"],
    outcomes: ["Clear programme and admissions architecture", "Simpler application journeys", "Maintainable content systems", "A stronger education brand"],
    solutions: [
      { title: "School and university websites", description: "Responsive websites for programmes, admissions, news, staff, campus life and essential enquiries.", serviceSlug: "website-development" },
      { title: "Portals and learning platforms", description: "Student portals, LMS experiences, application systems and results workflows scoped to operational needs.", serviceSlug: "web-application-development" },
      { title: "Payments and application automation", description: "Connect practical application, notification and payment processes where appropriate.", serviceSlug: "business-automation" },
      { title: "Education media and campaigns", description: "Photography, video and campaign assets that present programmes and learning environments honestly.", serviceSlug: "creative-content-production" },
    ],
    featuredProjectSlugs: ["brightpath-academy-website"],
    considerations: ["Prioritise mobile access for applicants and parents", "Keep staff publishing workflows simple", "Design forms around the minimum information required"],
    faqs: [
      { question: "Can you build an online application system?", answer: "Yes. We scope the form, review workflow, notifications, document handling and integrations before recommending the right implementation." },
      { question: "Can school staff update the website?", answer: "Yes. Content-management training and clear publishing roles can be included in the project." },
    ],
    seoTitle: "Education Website Development Nigeria | Creative Emman Limited",
    seoDescription: "School websites, education portals, learning platforms, applications, payments and digital campaigns for education organisations in Nigeria.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    eyebrow: "Property discovery built around action",
    heroTitle: "Property experiences that turn listings into qualified enquiries",
    summary: "We help developers, agencies and property teams present listings, locations and value clearly through websites, search experiences, campaigns and connected lead workflows.",
    whyItMatters: "Property decisions depend on trust, context and fast access to details. Buyers need useful imagery, clear location information and an obvious path to speak with the right agent.",
    challenges: ["Listings that are difficult to search or compare", "Low-quality property media", "Leads scattered across forms, calls and messaging platforms", "Campaign traffic sent to generic pages"],
    outcomes: ["Searchable property presentation", "Better-qualified enquiries", "Consistent agent follow-up", "Stronger visual credibility"],
    solutions: [
      { title: "Property websites and listing systems", description: "Listings, detail pages, filters, maps and agent contact experiences designed around the buyer journey.", serviceSlug: "custom-website-development" },
      { title: "Lead and CRM integration", description: "Connect forms and WhatsApp enquiry routes to practical follow-up systems.", serviceSlug: "crm-automation" },
      { title: "Property photography and video", description: "Purposeful property media for listings, campaigns and development presentations.", serviceSlug: "videography" },
      { title: "Search and paid campaigns", description: "SEO and campaign landing pages that connect relevant traffic with specific properties or developments.", serviceSlug: "digital-marketing" },
    ],
    featuredProjectSlugs: [],
    considerations: ["Keep availability and pricing easy to maintain", "Use location context without overloading the interface", "Connect each property to a clear human response path"],
    faqs: [
      { question: "Can property listings be managed by our team?", answer: "Yes. We can provide a suitable content-management workflow for adding, updating and archiving listings." },
      { question: "Can enquiries go directly to WhatsApp?", answer: "Yes. WhatsApp can be included alongside forms and agent contact, with the property context carried into the conversation where practical." },
    ],
    seoTitle: "Real Estate Website Development Nigeria | Creative Emman Limited",
    seoDescription: "Property websites, searchable listings, CRM integrations, real estate media and digital campaigns for Nigerian property businesses.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    eyebrow: "Clarity and confidence for patient journeys",
    heroTitle: "Healthcare websites and communication systems designed around clear access",
    summary: "We help hospitals, clinics and health-focused organisations present services, specialists, locations and enquiry pathways clearly—without making unsupported compliance claims.",
    whyItMatters: "People often search for care while anxious or pressed for time. They need legible information, direct contact options and confidence that the organisation is current and reachable.",
    challenges: ["Service information that is difficult to understand", "Unclear appointment and enquiry paths", "Outdated doctor profiles and location details", "Weak local-search visibility"],
    outcomes: ["Clearer service and specialty pages", "Simpler appointment enquiries", "Professional team presentation", "A stronger local digital presence"],
    solutions: [
      { title: "Hospital and clinic websites", description: "Accessible websites for services, specialties, doctors, locations and patient enquiries.", serviceSlug: "website-development" },
      { title: "Appointment and enquiry workflows", description: "Thoughtful booking or enquiry flows scoped around the organisation’s actual process.", serviceSlug: "web-application-development" },
      { title: "Local search and campaigns", description: "Search foundations and targeted campaigns that help nearby patients discover relevant services.", serviceSlug: "seo" },
      { title: "Healthcare brand and media", description: "Professional identity, photography and video that communicate care environments accurately.", serviceSlug: "corporate-photography" },
    ],
    featuredProjectSlugs: [],
    considerations: ["Use plain language and accessible typography", "Minimise sensitive information collected through general enquiry forms", "Confirm privacy and clinical requirements with qualified advisers"],
    faqs: [
      { question: "Can you build appointment booking?", answer: "Yes, after mapping the current scheduling process and deciding what information is appropriate to collect online." },
      { question: "Do you guarantee healthcare compliance?", answer: "No. We build the digital experience and can implement agreed safeguards, but legal and clinical compliance must be confirmed by qualified advisers." },
    ],
    seoTitle: "Healthcare Website Design Nigeria | Creative Emman Limited",
    seoDescription: "Accessible hospital and clinic websites, appointment journeys, healthcare branding and local digital visibility in Nigeria.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    eyebrow: "Turn attention into reservations",
    heroTitle: "Hospitality experiences that make choosing and booking feel effortless",
    summary: "We create hotel and restaurant websites, reservation journeys, menus, campaigns and visual content that help guests understand the experience before they arrive.",
    whyItMatters: "Guests judge atmosphere, trust and convenience online. Strong imagery matters, but so do current menus, clear room information, direct booking options and fast mobile performance.",
    challenges: ["Dependence on third-party platforms for every booking", "Outdated room, menu or event information", "Inconsistent photography across channels", "Guest enquiries managed without a clear system"],
    outcomes: ["Stronger direct-booking journeys", "Current menus and room information", "Consistent visual presentation", "More organised guest communication"],
    solutions: [
      { title: "Hotel and restaurant websites", description: "Mobile-first websites for rooms, menus, events, amenities, location and direct enquiries.", serviceSlug: "website-development" },
      { title: "Booking and reservation integration", description: "Connect suitable booking tools or build focused reservation workflows based on scope.", serviceSlug: "api-integration" },
      { title: "Hospitality photography and video", description: "Atmosphere, rooms, food and experience media created for web and social use.", serviceSlug: "photography" },
      { title: "Campaigns and guest communication", description: "Social, search and email activity connected to offers, events and repeat visits.", serviceSlug: "email-marketing" },
    ],
    featuredProjectSlugs: [],
    considerations: ["Prioritise fast mobile performance", "Make rates and availability ownership explicit", "Keep menus and offer content maintainable"],
    faqs: [
      { question: "Can you integrate an existing booking platform?", answer: "Yes, where the platform provides a suitable integration or booking link. We confirm the technical route during discovery." },
      { question: "Can you produce the photography too?", answer: "Yes. Photography and video can be coordinated with the website and campaign plan." },
    ],
    seoTitle: "Hotel Website Development Nigeria | Creative Emman Limited",
    seoDescription: "Hotel and restaurant websites, booking integrations, hospitality photography, video and digital campaigns in Nigeria.",
  },
  {
    slug: "smes-startups",
    name: "SMEs & Startups",
    eyebrow: "An end-to-end partner for practical growth",
    heroTitle: "The right digital foundation for the stage your business is actually in",
    summary: "Creative Emman Limited helps SMEs and startups combine brand, website, product, marketing and automation without forcing every business into an expensive software project.",
    whyItMatters: "Early and growing businesses need credibility quickly, but resources must be focused. The best route may be a strong landing page and brand system—not a complex application—until customer evidence justifies more technology.",
    challenges: ["Unclear positioning and inconsistent branding", "Limited budgets spread across too many disconnected activities", "Manual workflows that slow response", "Products built before the market need is understood"],
    outcomes: ["A sensible phased roadmap", "A credible launch presence", "Focused acquisition channels", "Technology investment tied to real operational need"],
    solutions: [
      { title: "Launch foundation", description: "Brand identity, focused messaging and a landing page or corporate website sized to the current stage.", serviceSlug: "landing-page-development" },
      { title: "MVP and product design", description: "Validate the essential journey before committing to a larger product build.", serviceSlug: "mvp-development" },
      { title: "Growth system", description: "Prioritise search, social, content or campaigns based on where customers actually decide.", serviceSlug: "marketing-strategy" },
      { title: "Operations and advisory", description: "Introduce automation, dashboards or technical consulting only when the workflow and value are clear.", serviceSlug: "technical-consulting" },
    ],
    featuredProjectSlugs: ["luxebyte-mobile-banking", "greennest-organics-storefront-ux", "pulse-social-lab-identity"],
    considerations: ["Start with evidence, not feature volume", "Phase investment around the most important customer journey", "Choose maintainable tools the team can operate"],
    faqs: [
      { question: "Do we need a custom application immediately?", answer: "Usually not. We first identify the smallest useful experience that can validate demand or improve an important workflow." },
      { question: "Can you work in phases?", answer: "Yes. A phased scope can begin with positioning and launch presence, then add growth or product capability when the evidence supports it." },
    ],
    seoTitle: "Digital Agency for Startups & SMEs Nigeria | Creative Emman Limited",
    seoDescription: "Branding, websites, MVPs, marketing, automation and technical consulting for Nigerian SMEs and startups at practical starting points.",
  },
];

export const legacyIndustryRedirects: Record<string, string> = {
  "startups-saas": "smes-startups",
  "small-medium-businesses": "smes-startups",
  "professional-services": "smes-startups",
  "ecommerce-retail": "smes-startups",
  "education-training": "education",
  "media-entertainment": "hospitality",
};

export const getIndustry = (slug: string) => industries.find((industry) => industry.slug === slug);
