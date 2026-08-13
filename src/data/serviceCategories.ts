export type ServicePillarSlug = "build" | "grow" | "scale" | "train";

export interface ServiceNavItem {
  slug: string;
  name: string;
  summary: string;
}

export interface ServiceCategory {
  slug: ServicePillarSlug;
  name: string;
  shortDescription: string;
  description: string;
  outcome: string;
  featuredService: string;
  services: ServiceNavItem[];
}

const service = (slug: string, name: string, summary: string): ServiceNavItem => ({ slug, name, summary });

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "build",
    name: "Build",
    shortDescription: "Brand, websites, applications and digital products.",
    description: "Create the identity, experience and technical foundation your organisation needs to operate credibly and convert attention into action.",
    outcome: "A clear brand and dependable digital foundation, ready to launch and evolve.",
    featuredService: "custom-website-development",
    services: [
      service("web-design-development", "Web Design & Development", "Strategy, interface design and engineering delivered as one connected website engagement."),
      service("website-development", "Website Development", "Responsive, maintainable websites engineered around performance and clear customer journeys."),
      service("custom-website-development", "Custom Website Development", "Bespoke websites shaped around distinct workflows, content models and integrations."),
      service("frontend-development", "Frontend Development", "Accessible, responsive interfaces implemented with modern component-based technology."),
      service("full-stack-development", "Full Stack Development", "Complete web platforms spanning interface, server logic, database and deployment."),
      service("wordpress-development", "WordPress Development", "Flexible editorial websites with a practical content-management experience."),
      service("website-redesign", "Website Redesign", "A structured rethink of outdated websites without discarding what still works."),
      service("landing-page-development", "Landing Page Development", "Focused campaign and launch pages designed to explain value and prompt action."),
      service("ecommerce-development", "E-commerce Development", "Product-led storefronts with payments, catalogue management and clear checkout flows."),
      service("custom-web-applications", "Custom Web Applications", "Purpose-built portals, tools and platforms for specialised business workflows."),
      service("web-application-development", "Web Application Development", "Interactive browser-based applications designed for real operational use."),
      service("saas-development", "SaaS Development", "Subscription product architecture for teams launching or improving software services."),
      service("mobile-app-development", "Mobile App Development", "Mobile product design and development for focused customer or workforce experiences."),
      service("ui-ux-design", "UI/UX Design", "Research-led flows and interfaces that make complex products easier to use."),
      service("product-design", "Product Design", "Product strategy, prototyping and interface systems for digital products."),
      service("brand-identity-design", "Brand Identity Design", "A coherent visual identity system built for consistent application."),
      service("graphic-design", "Graphic Design", "Campaign, presentation, social and print design within a disciplined visual system."),
      service("hosting-infrastructure", "Hosting & Infrastructure", "Deployment planning, hosting configuration and dependable production foundations."),
      service("website-maintenance", "Website Maintenance", "Ongoing technical upkeep, updates, fixes and performance attention."),
      service("website-care-plans", "Website Care Plans", "Structured monthly support for security, content changes and continuous improvement."),
      service("corporate-photography", "Corporate Photography", "Professional team, workplace and brand imagery for credible communication."),
      service("photography", "Photography", "Product, event, portrait and brand photography planned for purposeful use."),
      service("videography", "Videography", "Corporate, campaign and event video production shaped around a clear story."),
      service("video-editing", "Video Editing", "Post-production, colour, sound and delivery that turn footage into a finished narrative."),
      service("motion-graphics-design", "Motion Graphics Design", "Animated brand assets, explainers and kinetic visual communication."),
      service("api-development", "API Development", "Secure service interfaces that connect products and business systems."),
      service("dashboards", "Dashboards", "Clear operational interfaces for monitoring workflows, performance and decisions."),
    ],
  },
  {
    slug: "grow",
    name: "Grow",
    shortDescription: "Traffic, visibility, content and customer acquisition.",
    description: "Connect your brand with the right audience through coordinated search, social, content, campaign and communication systems.",
    outcome: "A repeatable growth system where channels reinforce one strategy instead of competing for attention.",
    featuredService: "social-media-management",
    services: [
      service("seo", "SEO", "Technical, content and local-search improvements that help qualified customers find you."),
      service("google-ads-management", "Google Ads Management", "Search and display campaigns planned around intent, landing pages and accountable reporting."),
      service("social-media-management", "Social Media Management", "Strategy, publishing, community care and measurement across priority platforms."),
      service("social-media-marketing", "Social Media Marketing", "Campaign-led organic and paid social activity connected to business goals."),
      service("paid-social-advertising", "Paid Social Advertising", "Targeted social campaigns with audience, creative and conversion optimisation."),
      service("content-marketing", "Content Marketing", "Useful editorial content that builds authority and supports search and sales."),
      service("content-strategy", "Content Strategy", "A practical plan for messages, formats, channels and publishing cadence."),
      service("email-marketing", "Email Marketing", "Campaigns and newsletters that deepen customer relationships and prompt action."),
      service("email-automation", "Email Automation", "Triggered customer communication for enquiries, onboarding and retention."),
      service("digital-marketing", "Digital Marketing", "An integrated channel plan covering acquisition, content and measurement."),
      service("campaign-strategy", "Campaign Strategy", "A focused campaign idea translated into audiences, channels, assets and milestones."),
      service("event-marketing", "Event Marketing", "Pre-event promotion, live coverage and post-event content amplification."),
      service("creative-content-production", "Creative Content Production", "Coordinated design, motion, photography and video for ongoing campaigns."),
      service("photography-content", "Photography Content", "Platform-ready photography planned around a campaign or publishing calendar."),
      service("videography-content", "Videography Content", "Short and long-form video assets designed for multi-channel use."),
      service("marketing-strategy", "Marketing Strategy", "Market, audience and channel decisions organised into a usable growth roadmap."),
    ],
  },
  {
    slug: "scale",
    name: "Scale",
    shortDescription: "Automation, data, internal systems and technical advisory.",
    description: "Remove operational friction and create stronger digital systems so the business can handle more work with greater clarity and control.",
    outcome: "Connected workflows, visible performance and technology decisions that support sustainable growth.",
    featuredService: "business-automation",
    services: [
      service("ai-business-automation", "AI & Business Automation", "Carefully scoped AI and automation workflows for repetitive operational tasks."),
      service("business-automation", "Business Automation", "Workflow automation that reduces manual hand-offs and repeated data entry."),
      service("analytics-data", "Analytics & Data", "Measurement foundations and reporting that make performance easier to understand."),
      service("analytics-dashboards", "Analytics Dashboards", "Decision-ready dashboards that bring important metrics into one view."),
      service("crm-automation", "CRM Automation", "Lead, customer and follow-up workflows connected inside a practical CRM system."),
      service("digital-strategy-consulting", "Digital Strategy & Consulting", "Independent guidance for digital priorities, platforms and implementation sequencing."),
      service("growth-retainers", "Growth Retainers", "Ongoing access to a multidisciplinary team for measured monthly improvement."),
      service("api-integration", "API Integration", "Reliable connections between platforms, payment tools and operational systems."),
      service("internal-business-tools", "Internal Business Tools", "Focused tools that simplify approvals, records, reporting and team workflows."),
      service("business-management-systems", "Business Management Systems", "Custom operational systems for connected business processes and records."),
      service("custom-dashboards", "Custom Dashboards", "Tailored dashboards for role-specific monitoring and action."),
      service("saas-products", "SaaS Products", "Strategy and engineering support for subscription software products."),
      service("technical-consulting", "Technical Consulting", "Expert review of architecture, delivery risk and implementation choices."),
      service("digital-transformation", "Digital Transformation", "A phased roadmap for improving customer and internal digital operations."),
      service("mvp-development", "MVP Development", "A focused first product release designed to test the strongest assumptions."),
    ],
  },
  {
    slug: "train",
    name: "Train",
    shortDescription: "Practical skills, mentorship and internal capability.",
    description: "Equip teams and emerging professionals with applied creative and technology skills through structured, project-led learning.",
    outcome: "Stronger internal capability and practical evidence of learning, without promises of employment.",
    featuredService: "corporate-digital-training",
    services: [
      service("corporate-digital-training", "Corporate Digital Training", "Custom workshops that build practical digital confidence inside teams."),
      service("ui-ux-training", "UI/UX Training", "Research, flows, wireframes and interface design taught through practical exercises."),
      service("web-development-training", "Web Development Training", "Foundational web engineering through guided projects and review."),
      service("frontend-development-training", "Frontend Development Training", "Modern interface development with responsive and accessible implementation."),
      service("graphic-design-training", "Graphic Design Training", "Visual communication, layout and production fundamentals for digital work."),
      service("brand-design-training", "Brand Design Training", "Identity thinking and system-building beyond isolated logo creation."),
      service("social-media-training", "Social Media Training", "Planning, publishing and community practices for stronger brand channels."),
      service("digital-marketing-training", "Digital Marketing Training", "Channel strategy, campaigns and measurement for practical business growth."),
      service("video-editing-training", "Video Editing Training", "Editing, pacing, sound and delivery techniques for modern media."),
      service("photography-training", "Photography Training", "Composition, lighting and production workflows for purposeful brand imagery."),
      service("online-courses", "Online Courses", "Structured remote learning options published as programmes become available."),
      service("mentorship", "Mentorship", "Guided feedback and development for emerging creative and technical practitioners."),
      service("internships", "Internships", "Applied learning tracks connected to the Creative Emman application process."),
      service("custom-training-programmes", "Custom Training Programmes", "Learning programmes designed around an organisation's capability gaps."),
    ],
  },
];

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((item) => ({ ...item, category: category.slug, categoryName: category.name }))
);

export const getService = (slug: string) => allServices.find((item) => item.slug === slug);
export const getServiceCategory = (slug: string) => serviceCategories.find((item) => item.slug === slug);
