export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  features: Record<string, string | boolean>;
}

export interface PricingCategory {
  id: string;
  title: string;
  description: string;
  featuresList: string[]; // List of features (rows)
  tiers: PricingTier[]; // Column details
}

export const pricingCategories: PricingCategory[] = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "High-performance websites designed to convert visitors into loyal customers.",
    featuresList: [
      "Custom UI Pages",
      "Mobile Responsiveness",
      "SEO Setup",
      "Speed Optimization",
      "Domain & Hosting (1yr)",
      "Content Management (CMS)",
      "Contact Form & Map",
      "Post-launch Support"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦150,000",
        features: {
          "Custom UI Pages": "Up to 5 pages",
          "Mobile Responsiveness": true,
          "SEO Setup": "Basic",
          "Speed Optimization": "Standard",
          "Domain & Hosting (1yr)": true,
          "Content Management (CMS)": false,
          "Contact Form & Map": true,
          "Post-launch Support": "1 Month"
        }
      },
      {
        name: "Standard",
        price: "₦350,000",
        features: {
          "Custom UI Pages": "Up to 12 pages",
          "Mobile Responsiveness": true,
          "SEO Setup": "Advanced",
          "Speed Optimization": "Premium (90+ Score)",
          "Domain & Hosting (1yr)": true,
          "Content Management (CMS)": true,
          "Contact Form & Map": true,
          "Post-launch Support": "3 Months"
        }
      },
      {
        name: "Premium",
        price: "₦750,000",
        features: {
          "Custom UI Pages": "Unlimited pages",
          "Mobile Responsiveness": true,
          "SEO Setup": "Full SEO Strategy",
          "Speed Optimization": "Maximum Audit & Fixes",
          "Domain & Hosting (1yr)": true,
          "Content Management (CMS)": true,
          "Contact Form & Map": "Custom Integration",
          "Post-launch Support": "6 Months"
        }
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Fully featured online stores to sell products and manage inventory easily.",
    featuresList: [
      "Product Uploads",
      "Payment Gateway Integration",
      "Shopping Cart & Checkout",
      "Inventory Management",
      "Order Tracking",
      "Discount & Coupon System",
      "Security / SSL",
      "Support & Training"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦250,000",
        features: {
          "Product Uploads": "Up to 50 products",
          "Payment Gateway Integration": "Paystack / Flutterwave",
          "Shopping Cart & Checkout": true,
          "Inventory Management": "Basic",
          "Order Tracking": false,
          "Discount & Coupon System": false,
          "Security / SSL": true,
          "Support & Training": "1 Week"
        }
      },
      {
        name: "Standard",
        price: "₦500,000",
        features: {
          "Product Uploads": "Up to 250 products",
          "Payment Gateway Integration": "Multiple Gateways",
          "Shopping Cart & Checkout": true,
          "Inventory Management": "Automated",
          "Order Tracking": true,
          "Discount & Coupon System": true,
          "Security / SSL": true,
          "Support & Training": "1 Month"
        }
      },
      {
        name: "Premium",
        price: "₦1,200,000",
        features: {
          "Product Uploads": "Unlimited products",
          "Payment Gateway Integration": "International & Local",
          "Shopping Cart & Checkout": "High-Converting Custom Checkout",
          "Inventory Management": "Multi-warehouse & Sync",
          "Order Tracking": "Real-time updates",
          "Discount & Coupon System": "Dynamic Campaigns",
          "Security / SSL": "PCI-DSS Compliant",
          "Support & Training": "3 Months Dedicated"
        }
      }
    ]
  },
  {
    id: "apps",
    title: "App Development & Integration",
    description: "Custom web and mobile applications designed to optimize your operations.",
    featuresList: [
      "Platform Support",
      "UI Design & Wireframing",
      "Database Architecture",
      "API Integrations",
      "User Authentication",
      "Push Notifications",
      "App Store Deployment",
      "Post-launch Care"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦500,000",
        features: {
          "Platform Support": "Web App Only",
          "UI Design & Wireframing": "Standard Templates",
          "Database Architecture": "Basic CRUD",
          "API Integrations": "Up to 2 APIs",
          "User Authentication": "Email / Password",
          "Push Notifications": false,
          "App Store Deployment": false,
          "Post-launch Care": "1 Month"
        }
      },
      {
        name: "Standard",
        price: "₦1,200,000",
        features: {
          "Platform Support": "Android or iOS + Web",
          "UI Design & Wireframing": "Custom UI/UX Flow",
          "Database Architecture": "Complex Relations",
          "API Integrations": "Up to 5 APIs",
          "User Authentication": "Social Login + MFA",
          "Push Notifications": true,
          "App Store Deployment": "Single Store",
          "Post-launch Care": "3 Months"
        }
      },
      {
        name: "Premium",
        price: "₦2,500,000",
        features: {
          "Platform Support": "Cross-Platform (iOS & Android & Web)",
          "UI Design & Wireframing": "High-Fidelity Interaction Design",
          "Database Architecture": "High-scale / Real-time Database",
          "API Integrations": "Unlimited APIs",
          "User Authentication": "Biometric + Custom Auth Systems",
          "Push Notifications": "Smart / Segmented Alerts",
          "App Store Deployment": "Both App Stores",
          "Post-launch Care": "6 Months Dedicated"
        }
      }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Strategic marketing campaigns to grow your brand and generate qualified leads.",
    featuresList: [
      "Social Channels Managed",
      "Content Calendar & Posts",
      "Ad Budget Management",
      "SEO Audit & Updates",
      "Email Marketing Campaigns",
      "Analytics & Reporting",
      "Competitor Analysis",
      "Billing Cycle"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦80,000",
        period: "/mo",
        features: {
          "Social Channels Managed": "2 Platforms",
          "Content Calendar & Posts": "12 posts / month",
          "Ad Budget Management": "Up to ₦100k budget",
          "SEO Audit & Updates": "Monthly Review",
          "Email Marketing Campaigns": false,
          "Analytics & Reporting": "Standard PDF",
          "Competitor Analysis": "Initial Report",
          "Billing Cycle": "Monthly Retainer"
        }
      },
      {
        name: "Standard",
        price: "₦150,000",
        period: "/mo",
        features: {
          "Social Channels Managed": "4 Platforms",
          "Content Calendar & Posts": "24 posts / month",
          "Ad Budget Management": "Up to ₦500k budget",
          "SEO Audit & Updates": "Weekly Action Plan",
          "Email Marketing Campaigns": "2 Newsletters / mo",
          "Analytics & Reporting": "Live Dashboard",
          "Competitor Analysis": "Bi-weekly tracking",
          "Billing Cycle": "Monthly Retainer"
        }
      },
      {
        name: "Premium",
        price: "₦350,000",
        period: "/mo",
        features: {
          "Social Channels Managed": "All Major Platforms",
          "Content Calendar & Posts": "Daily Posts + Stories",
          "Ad Budget Management": "Unlimited budget setup",
          "SEO Audit & Updates": "Continuous optimization",
          "Email Marketing Campaigns": "Weekly automation setup",
          "Analytics & Reporting": "Bi-weekly strategy calls",
          "Competitor Analysis": "Real-time tracking",
          "Billing Cycle": "Monthly Retainer"
        }
      }
    ]
  },
  {
    id: "writing",
    title: "Content Writing",
    description: "SEO-optimized articles, blog posts, and copy to establish authority.",
    featuresList: [
      "Word Count",
      "SEO Keyword Optimization",
      "Tone & Voice Matching",
      "Revisions Allowed",
      "Plagiarism & AI Checks",
      "Competitor Research",
      "Publishing/CMS Upload",
      "Delivery Time"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦40,000",
        features: {
          "Word Count": "Up to 3,000 words total",
          "SEO Keyword Optimization": "Primary keywords",
          "Tone & Voice Matching": "Standard",
          "Revisions Allowed": "2 Revisions",
          "Plagiarism & AI Checks": true,
          "Competitor Research": false,
          "Publishing/CMS Upload": false,
          "Delivery Time": "5-7 Days"
        }
      },
      {
        name: "Standard",
        price: "₦100,000",
        features: {
          "Word Count": "Up to 10,000 words total",
          "SEO Keyword Optimization": "LSI & Semantic mapping",
          "Tone & Voice Matching": "Tailored brand guidelines",
          "Revisions Allowed": "Unlimited Revisions",
          "Plagiarism & AI Checks": true,
          "Competitor Research": true,
          "Publishing/CMS Upload": true,
          "Delivery Time": "3-5 Days"
        }
      },
      {
        name: "Premium",
        price: "₦250,000",
        features: {
          "Word Count": "Up to 30,000 words total",
          "SEO Keyword Optimization": "Deep topic authority mapping",
          "Tone & Voice Matching": "Fully integrated editorial style",
          "Revisions Allowed": "Priority revisions forever",
          "Plagiarism & AI Checks": true,
          "Competitor Research": true,
          "Publishing/CMS Upload": true,
          "Delivery Time": "Express (48hr turnaround available)"
        }
      }
    ]
  },
  {
    id: "audiovisual",
    title: "Audio Visual & Media",
    description: "Cinematic filming, editing, and animation to capture your audience.",
    featuresList: [
      "Footage Duration",
      "Resolution / Output",
      "Color Grading & Audio Fix",
      "Motion Graphics / VFX",
      "Storyboarding",
      "Voiceover / Music License",
      "Revisions",
      "Delivery"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦100,000",
        features: {
          "Footage Duration": "Up to 1 minute",
          "Resolution / Output": "1080p Full HD",
          "Color Grading & Audio Fix": "Standard",
          "Motion Graphics / VFX": "Basic titles",
          "Storyboarding": false,
          "Voiceover / Music License": "Royalty-free music",
          "Revisions": "1 Revision",
          "Delivery": "7 Days"
        }
      },
      {
        name: "Standard",
        price: "₦250,000",
        features: {
          "Footage Duration": "Up to 5 minutes",
          "Resolution / Output": "4K UHD",
          "Color Grading & Audio Fix": "Cinematic grade",
          "Motion Graphics / VFX": "Complex overlays & logo reveal",
          "Storyboarding": true,
          "Voiceover / Music License": "Pro voiceover + Licensed music",
          "Revisions": "3 Revisions",
          "Delivery": "5 Days"
        }
      },
      {
        name: "Premium",
        price: "₦600,000",
        features: {
          "Footage Duration": "Up to 15 minutes",
          "Resolution / Output": "4K High Bitrate / RAW",
          "Color Grading & Audio Fix": "Hollywood style + Professional mix",
          "Motion Graphics / VFX": "Custom 2D/3D elements",
          "Storyboarding": "Complete pre-production setup",
          "Voiceover / Music License": "Multiple voices + Full soundtrack sync",
          "Revisions": "Unlimited",
          "Delivery": "3 Days Express"
        }
      }
    ]
  },
  {
    id: "it-support",
    title: "IT Support & Consultancy",
    description: "Technical oversight to secure and scale your business systems.",
    featuresList: [
      "Monthly Response Time",
      "Server Management",
      "Security Auditing",
      "Data Backup Solutions",
      "User Accounts / Directory",
      "Hardware Setup Advice",
      "Consulting Hours",
      "Contract Type"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦50,000",
        period: "/mo",
        features: {
          "Monthly Response Time": "Within 24 Hours",
          "Server Management": "Basic cPanel/WP setups",
          "Security Auditing": "Quarterly checks",
          "Data Backup Solutions": "Weekly automated backup",
          "User Accounts / Directory": "Up to 5 users",
          "Hardware Setup Advice": false,
          "Consulting Hours": "2 hours / month",
          "Contract Type": "Monthly rolling"
        }
      },
      {
        name: "Standard",
        price: "₦150,000",
        period: "/mo",
        features: {
          "Monthly Response Time": "Within 4 Hours",
          "Server Management": "VPS & Cloud Server maintenance",
          "Security Auditing": "Monthly scans & fixes",
          "Data Backup Solutions": "Daily redundant cloud backup",
          "User Accounts / Directory": "Up to 30 users",
          "Hardware Setup Advice": true,
          "Consulting Hours": "8 hours / month",
          "Contract Type": "Monthly rolling"
        }
      },
      {
        name: "Premium",
        price: "₦400,000",
        period: "/mo",
        features: {
          "Monthly Response Time": "Within 1 Hour",
          "Server Management": "AWS/Azure/GCP Clusters",
          "Security Auditing": "Continuous monitoring & WAF setup",
          "Data Backup Solutions": "Real-time data replication",
          "User Accounts / Directory": "Unlimited users",
          "Hardware Setup Advice": "Full network architecture design",
          "Consulting Hours": "20 hours / month",
          "Contract Type": "Monthly rolling"
        }
      }
    ]
  },
  {
    id: "website-care",
    title: "Website Care & Growth",
    description: "Continuous optimization, upkeep, and maintenance for your websites.",
    featuresList: [
      "Plugin & Theme Updates",
      "Uptime Monitoring",
      "Daily Cloud Backups",
      "Security / Malware Scans",
      "Minor Text/Image Edits",
      "Performance Reports",
      "Support Channel",
      "Billing Cycle"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦30,000",
        period: "/mo",
        features: {
          "Plugin & Theme Updates": "Monthly",
          "Uptime Monitoring": "Every 15 mins",
          "Daily Cloud Backups": "Weekly backups",
          "Security / Malware Scans": "Monthly scan",
          "Minor Text/Image Edits": "1hr of edits / mo",
          "Performance Reports": "Monthly",
          "Support Channel": "Email Support",
          "Billing Cycle": "Monthly"
        }
      },
      {
        name: "Standard",
        price: "₦75,000",
        period: "/mo",
        features: {
          "Plugin & Theme Updates": "Weekly",
          "Uptime Monitoring": "Every 5 mins",
          "Daily Cloud Backups": "Daily backups",
          "Security / Malware Scans": "Weekly scan & cleanup",
          "Minor Text/Image Edits": "4hrs of edits / mo",
          "Performance Reports": "Weekly",
          "Support Channel": "Priority Support & Chat",
          "Billing Cycle": "Monthly"
        }
      },
      {
        name: "Premium",
        price: "₦150,000",
        period: "/mo",
        features: {
          "Plugin & Theme Updates": "Real-time / Instant",
          "Uptime Monitoring": "Every 1 min",
          "Daily Cloud Backups": "Real-time database backup",
          "Security / Malware Scans": "Continuous live firewall & cleanup",
          "Minor Text/Image Edits": "10hrs of edits & small features / mo",
          "Performance Reports": "Bi-weekly manual audits",
          "Support Channel": "Dedicated slack channel & call availability",
          "Billing Cycle": "Monthly"
        }
      }
    ]
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Cohesive visual guidelines and strategic assets to stand out.",
    featuresList: [
      "Logo Variations",
      "Color Palette & Typography",
      "Brand Guidelines PDF",
      "Business Cards & Stationary",
      "Social Media Assets",
      "Mockups & Presentations",
      "Primary Deliverables",
      "Revision Rounds"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦70,000",
        features: {
          "Logo Variations": "2 concepts",
          "Color Palette & Typography": "Primary colors",
          "Brand Guidelines PDF": "1-page cheatsheet",
          "Business Cards & Stationary": "Business card only",
          "Social Media Assets": false,
          "Mockups & Presentations": false,
          "Primary Deliverables": "Logo file formats only",
          "Revision Rounds": "2 Rounds"
        }
      },
      {
        name: "Standard",
        price: "₦150,000",
        features: {
          "Logo Variations": "4 concepts",
          "Color Palette & Typography": "Full typography scale & accent palette",
          "Brand Guidelines PDF": "15-page standard booklet",
          "Business Cards & Stationary": "Business card, letterhead & envelope",
          "Social Media Assets": "3 templates",
          "Mockups & Presentations": "Logo mockups",
          "Primary Deliverables": "Vector source files + brand guidelines",
          "Revision Rounds": "5 Rounds"
        }
      },
      {
        name: "Premium",
        price: "₦350,000",
        features: {
          "Logo Variations": "6 concepts + custom typography mark",
          "Color Palette & Typography": "Full corporate typography system",
          "Brand Guidelines PDF": "40-page complete brand manual",
          "Business Cards & Stationary": "Full corporate stationary pack",
          "Social Media Assets": "Complete social graphics kit (10+ items)",
          "Mockups & Presentations": "Realistic 3D packaging & apparel mockups",
          "Primary Deliverables": "Full source files + copyright transfer",
          "Revision Rounds": "Unlimited"
        }
      }
    ]
  },
  {
    id: "trainings",
    title: "Training & Empowerment",
    description: "Accelerate your capabilities through structured learning paths.",
    featuresList: [
      "Weekly Live Sessions",
      "Practical Projects",
      "Slack Community Access",
      "1-on-1 Mentorship",
      "Certificate of Completion",
      "Job Placement Assistance",
      "Resource Kit",
      "Course Duration"
    ],
    tiers: [
      {
        name: "Starter",
        price: "₦50,000",
        features: {
          "Weekly Live Sessions": "1 session",
          "Practical Projects": "2 mini projects",
          "Slack Community Access": true,
          "1-on-1 Mentorship": false,
          "Certificate of Completion": "Digital standard",
          "Job Placement Assistance": false,
          "Resource Kit": "Reference PDFs",
          "Course Duration": "4 Weeks"
        }
      },
      {
        name: "Standard",
        price: "₦120,000",
        features: {
          "Weekly Live Sessions": "3 sessions + Q&A",
          "Practical Projects": "5 portfolio-grade projects",
          "Slack Community Access": "Priority Channel",
          "1-on-1 Mentorship": "Bi-weekly review",
          "Certificate of Completion": "Verified digital badge",
          "Job Placement Assistance": "Resume review & portfolio audit",
          "Resource Kit": "Complete starter kits & asset packs",
          "Course Duration": "8 Weeks"
        }
      },
      {
        name: "Premium",
        price: "₦250,000",
        features: {
          "Weekly Live Sessions": "Daily standups + Unlimited Q&A",
          "Practical Projects": "Capstones with real clients",
          "Slack Community Access": "VIP VIP Channel & Networking",
          "1-on-1 Mentorship": "Weekly private coaching",
          "Certificate of Completion": "Physical & Digital Verified Certificates",
          "Job Placement Assistance": "Direct introductions to partner agencies",
          "Resource Kit": "Commercial licenses & software access codes",
          "Course Duration": "12 Weeks (Extended support)"
        }
      }
    ]
  }
];

export const standardInclusions = [
  "Free Domain Name (1 Year)",
  "Premium SSL Certificate Setup",
  "Basic SEO & Sitemap Configuration",
  "Custom Admin Dashboard Setup",
  "24/7 Security Monitoring & Backups",
  "1-Month Post-Launch Technical Support"
];

export const pricingFaqs = [
  {
    question: "What is included in the post-launch support?",
    answer: "Our standard post-launch support includes fixing any unexpected software bugs, addressing server uptime issues, and making minor content updates. Depending on your tier, this care ranges from 1 month up to 6 months of dedicated support."
  },
  {
    question: "Can we upgrade or downgrade our pricing plan later?",
    answer: "Absolutely. We understand that business needs change. You can upgrade to a higher tier or transition to a retainer service at any point during or after implementation."
  },
  {
    question: "How do project payments work?",
    answer: "For standard projects, we follow a milestone-based payment structure (typically 50% upfront to initiate the project and 50% upon successful delivery and sign-off). Retainer services are billed upfront at the start of each monthly cycle."
  },
  {
    question: "Are there any recurring or hidden monthly fees?",
    answer: "No hidden fees. After the first year, your only recurring costs will be standard domain name and web hosting renewals, unless you opt for one of our Website Care & Growth retainer plans."
  }
];

export interface ServicePrice {
  amount: string;
  usdAmount: string;
  timeline: string;
  note: string;
}

const categoryDefaults: Record<ServicePillarSlug, ServicePrice> = {
  build: { amount: "From ₦500,000", usdAmount: "From $315", timeline: "From 3 weeks", note: "Final cost depends on page depth, functionality and integrations." },
  grow: { amount: "From ₦200,000 / month", usdAmount: "From $125 / month", timeline: "Monthly engagement", note: "Media and advertising spend are scoped separately where required." },
  scale: { amount: "From ₦400,000", usdAmount: "From $250", timeline: "From 3 weeks", note: "Complexity depends on workflows, data sources and connected systems." },
  train: { amount: "From ₦50,000 / participant", usdAmount: "From $35 / participant", timeline: "Programme dependent", note: "Group and custom programme pricing is confirmed after a learning-needs review." },
};

const priceOverrides: Record<string, Partial<ServicePrice>> = {
  "web-design-development": { amount: "From ₦500,000", timeline: "3–6 weeks" },
  "website-development": { amount: "From ₦500,000", timeline: "3–6 weeks" },
  "custom-website-development": { amount: "From ₦500,000", timeline: "4–8 weeks" },
  "frontend-development": { amount: "From ₦500,000", timeline: "3–8 weeks" },
  "full-stack-development": { amount: "From ₦1,500,000", timeline: "8+ weeks" },
  "wordpress-development": { amount: "From ₦400,000", timeline: "3–6 weeks" },
  "website-redesign": { amount: "From ₦450,000", timeline: "3–6 weeks" },
  "landing-page-development": { amount: "From ₦250,000", timeline: "1–3 weeks" },
  "ecommerce-development": { amount: "From ₦550,000", timeline: "5–8 weeks" },
  "custom-web-applications": { amount: "From ₦1,500,000", timeline: "8+ weeks" },
  "web-application-development": { amount: "From ₦1,500,000", timeline: "8+ weeks" },
  "saas-development": { amount: "From ₦2,000,000", timeline: "10+ weeks" },
  "mobile-app-development": { amount: "From ₦1,500,000", timeline: "8+ weeks" },
  "ui-ux-design": { amount: "From ₦350,000", timeline: "3–6 weeks" },
  "product-design": { amount: "From ₦600,000", timeline: "4–8 weeks" },
  "brand-identity-design": { amount: "From ₦150,000", timeline: "2–4 weeks" },
  "graphic-design": { amount: "From ₦10,000", timeline: "1–3 weeks" },
  "hosting-infrastructure": { amount: "Custom Quote", timeline: "Scope dependent" },
  "website-maintenance": { amount: "From ₦100,000 / month", timeline: "Monthly engagement" },
  "website-care-plans": { amount: "From ₦100,000 / month", timeline: "Monthly engagement" },
  "corporate-photography": { amount: "From ₦40,000", timeline: "Per project" },
  "api-development": { amount: "From ₦400,000", timeline: "3–8 weeks" },
  dashboards: { amount: "From ₦800,000", timeline: "5–10 weeks" },
  seo: { amount: "From ₦200,000 / month", timeline: "Monthly engagement" },
  "google-ads-management": { amount: "From ₦150,000 / month", timeline: "Monthly engagement" },
  "social-media-management": { amount: "From ₦250,000 / month", timeline: "Monthly engagement" },
  "social-media-marketing": { amount: "From ₦250,000 / month", timeline: "Monthly engagement" },
  "paid-social-advertising": { amount: "From ₦150,000 / campaign", timeline: "Campaign dependent" },
  "content-marketing": { amount: "From ₦200,000 / month", timeline: "Monthly engagement" },
  "content-strategy": { amount: "From ₦200,000", timeline: "2–4 weeks" },
  "email-marketing": { amount: "From ₦150,000 / month", timeline: "Monthly engagement" },
  "email-automation": { amount: "From ₦250,000", timeline: "2–5 weeks" },
  "digital-marketing": { amount: "From ₦250,000 / month", timeline: "Monthly engagement" },
  "campaign-strategy": { amount: "From ₦200,000", timeline: "2–4 weeks" },
  "event-marketing": { amount: "Custom Quote", timeline: "Event dependent" },
  "creative-content-production": { amount: "From ₦150,000", timeline: "Per production cycle" },
  "photography-content": { amount: "From ₦50,000", timeline: "Per project" },
  "videography-content": { amount: "From ₦150,000", timeline: "Per project" },
  "marketing-strategy": { amount: "From ₦250,000", timeline: "2–5 weeks" },
  "ai-business-automation": { amount: "From ₦500,000", timeline: "4–10 weeks" },
  "business-automation": { amount: "From ₦400,000", timeline: "3–8 weeks" },
  "analytics-data": { amount: "From ₦350,000", timeline: "3–6 weeks" },
  "analytics-dashboards": { amount: "From ₦800,000", timeline: "5–10 weeks" },
  "crm-automation": { amount: "From ₦400,000", timeline: "3–8 weeks" },
  "digital-strategy-consulting": { amount: "From ₦120,000 / session", timeline: "Per session or sprint" },
  "growth-retainers": { amount: "From ₦400,000 / month", timeline: "Monthly engagement" },
  "api-integration": { amount: "From ₦250,000", timeline: "2–6 weeks" },
  "internal-business-tools": { amount: "From ₦800,000", timeline: "6+ weeks" },
  "business-management-systems": { amount: "From ₦1,500,000", timeline: "8+ weeks" },
  "custom-dashboards": { amount: "From ₦800,000", timeline: "5–10 weeks" },
  "saas-products": { amount: "From ₦2,000,000", timeline: "10+ weeks" },
  "technical-consulting": { amount: "From ₦120,000 / session", timeline: "Per session" },
  "digital-transformation": { amount: "Custom Quote", timeline: "Phased engagement" },
  "mvp-development": { amount: "From ₦1,500,000", timeline: "8+ weeks" },
  "corporate-digital-training": { amount: "From ₦300,000 / workshop", timeline: "Custom programme" },
  "ui-ux-training": { amount: "From ₦200,000 / participant", timeline: "4–8 weeks" },
  "web-development-training": { amount: "From ₦400,000 / participant", timeline: "6–12 weeks" },
  "frontend-development-training": { amount: "From ₦100,000 / participant", timeline: "6–12 weeks" },
  "graphic-design-training": { amount: "From ₦100,000 / participant", timeline: "4–8 weeks" },
  "brand-design-training": { amount: "From ₦75,000 / participant", timeline: "4–8 weeks" },
  "social-media-training": { amount: "From ₦60,000 / participant", timeline: "3–6 weeks" },
  "digital-marketing-training": { amount: "From ₦150,000 / participant", timeline: "4–8 weeks" },
  "video-editing-training": { amount: "From ₦80,000 / participant", timeline: "4–8 weeks" },
  "photography-training": { amount: "From ₦80,000 / participant", timeline: "4–8 weeks" },
  "online-courses": { amount: "From ₦50,000 / course", timeline: "Self-paced or cohort" },
  mentorship: { amount: "From ₦50,000 / month", timeline: "Monthly" },
  internships: { amount: "Application required", timeline: "Cohort dependent", note: "Internship places are selective and do not guarantee employment." },
  "custom-training-programmes": { amount: "Custom Quote", timeline: "Programme dependent" },
  videography: { amount: "From ₦100,000", timeline: "Per project" },
  "video-editing": { amount: "From ₦30,000 / project", timeline: "From 5 working days" },
  "motion-graphics-design": { amount: "From ₦150,000", timeline: "From 1 week" },
  photography: { amount: "From ₦15,000", timeline: "Per project" },
};

const toUsd = (amount: string, fallback: string) => {
  if (/custom quote|application required/i.test(amount)) return "On request";
  const digits = amount.replace(/,/g, "").match(/₦(\d+)/);
  if (!digits) return fallback;
  const rounded = Math.ceil(Number(digits[1]) / 1600 / 5) * 5;
  const suffix = [" / month", " / participant", " / session", " / project", " / workshop", " / campaign", " / course"].find((item) => amount.includes(item)) ?? "";
  return `From $${rounded.toLocaleString("en-US")}${suffix}`;
};

export const servicePricing: Record<string, ServicePrice> = Object.fromEntries(
  allServices.map((item) => {
    const merged = { ...categoryDefaults[item.category], ...priceOverrides[item.slug] };
    return [item.slug, { ...merged, usdAmount: toUsd(merged.amount, merged.usdAmount) }];
  })
);

export const getServicePrice = (slug: string) => servicePricing[slug];

export interface PricingTableSection { id: string; shortLabel: string; title: string; description: string; serviceSlugs: string[]; }

export const pricingTableSections: PricingTableSection[] = [
  { id: "websites", shortLabel: "Websites", title: "Website design and development", description: "Conversion-focused websites built for clarity, performance and confident growth.", serviceSlugs: ["web-design-development", "landing-page-development", "wordpress-development", "website-redesign", "ecommerce-development"] },
  { id: "ui-ux", shortLabel: "UI UX", title: "UI UX and product design", description: "Research, flows and interface systems that make digital products easier to use.", serviceSlugs: ["ui-ux-design", "product-design"] },
  { id: "branding", shortLabel: "Branding", title: "Brand identity and graphic design", description: "Connected visual systems for organisations that need to look consistent and credible.", serviceSlugs: ["brand-identity-design", "graphic-design"] },
  { id: "software", shortLabel: "Software", title: "Web applications and software", description: "Purpose-built software products, operational tools and connected digital platforms.", serviceSlugs: ["custom-web-applications", "saas-development", "mobile-app-development", "mvp-development", "api-development", "dashboards"] },
  { id: "maintenance", shortLabel: "Maintenance", title: "Hosting maintenance and support", description: "Reliable foundations and ongoing care after a website or product goes live.", serviceSlugs: ["hosting-infrastructure", "website-maintenance", "website-care-plans"] },
  { id: "growth", shortLabel: "Growth", title: "Digital marketing and growth", description: "Channel strategy and accountable campaigns designed around business goals.", serviceSlugs: ["seo", "google-ads-management", "digital-marketing", "content-marketing", "email-marketing", "growth-retainers"] },
  { id: "social", shortLabel: "Social", title: "Social media management and content", description: "Consistent publishing, community care and campaign-ready creative production.", serviceSlugs: ["social-media-management", "social-media-marketing", "paid-social-advertising", "creative-content-production"] },
  { id: "automation", shortLabel: "Automation", title: "AI automation and strategy", description: "Practical systems that reduce repeated work and improve operational visibility.", serviceSlugs: ["ai-business-automation", "business-automation", "crm-automation", "analytics-dashboards", "digital-strategy-consulting"] },
  { id: "photography", shortLabel: "Photography", title: "Photography", description: "Purposeful brand, corporate, product and event imagery.", serviceSlugs: ["photography", "corporate-photography", "photography-content"] },
  { id: "video", shortLabel: "Video", title: "Videography and video editing", description: "Production and post-production for campaigns, corporate stories and events.", serviceSlugs: ["videography", "video-editing", "videography-content"] },
  { id: "motion", shortLabel: "Motion", title: "Motion graphics", description: "Animated communication that makes brand stories and complex ideas easier to understand.", serviceSlugs: ["motion-graphics-design"] },
  { id: "training", shortLabel: "Training", title: "Training and capacity building", description: "Practical programmes for individuals, teams and organisations building digital capability.", serviceSlugs: ["corporate-digital-training", "ui-ux-training", "web-development-training", "graphic-design-training", "digital-marketing-training", "video-editing-training", "photography-training"] },
];
import { allServices, type ServicePillarSlug } from "@/data/serviceCategories";
