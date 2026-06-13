import { Code2, Palette, PenTool, Video, Film, Camera, Share2, Brain, Target, Eye, CheckCircle } from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "High-performance web applications built with modern frameworks, optimized for speed and scalability.",
    includes: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development", "Performance Optimization"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media growth that builds brand authority, drives engagement, and delivers measurable results across platforms.",
    includes: [
      "Content Strategy & Calendar Planning",
      "Daily Posting & Community Management",
      "Graphic Design & Visual Content Creation",
      "Audience Growth & Engagement",
      "Performance Analytics & Reporting",
      "Paid Social Advertising (optional)",
    ],
    longDescription:
      "Our Social Media Management service is designed to turn your profiles into powerful marketing assets. We handle everything from crafting scroll-stopping content to engaging with your audience and analyzing performance. Whether you're looking to build awareness, generate leads, or strengthen customer loyalty, we create a consistent, professional presence that grows with your business. Every campaign is data-driven and aligned with your overall brand goals.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Research-driven interface design that balances aesthetic precision with intuitive user experience.",
    includes: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems", "Interaction Design", "Accessibility Audits"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Strategic visual communication that reinforces brand identity across every touchpoint.",
    includes: ["Brand Identity", "Marketing Collateral", "Social Media Assets", "Presentation Design", "Print Design"],
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic production that captures your brand narrative with technical excellence.",
    includes: ["Corporate Videos", "Product Showcases", "Event Coverage", "Documentary Style", "Aerial Footage"],
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Post-production mastery that transforms raw footage into compelling visual stories.",
    includes: ["Color Grading", "Motion Graphics", "Sound Design", "Multi-format Export", "Subtitling"],
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional imagery that elevates your brand with precision composition and lighting.",
    includes: ["Product Photography", "Corporate Portraits", "Event Photography", "Architectural Shots", "Lifestyle Sessions"],
  },
];

export const pillars = [
  {
    icon: Brain,
    title: "Strategic Thinking",
    description: "Every project begins with deep analysis. We engineer solutions, not assumptions.",
  },
  {
    icon: Target,
    title: "Technical Precision",
    description: "Code quality and structural integrity are non-negotiable in our delivery process.",
  },
  {
    icon: Eye,
    title: "Visual Excellence",
    description: "Design is a system. We craft interfaces that communicate authority and clarity.",
  },
  {
    icon: CheckCircle,
    title: "Structured Delivery",
    description: "Milestone-driven execution ensures transparency and predictable outcomes.",
  },
];

export const teamMembers = [
  {
    id: "emmanuel-okoro",
    name: "Emmanuel Okoro",
    role: "Founder & Lead Engineer",
    bio: "Full-stack engineer with 8+ years building scalable digital systems. Specializes in architecture design and technical leadership.",
    stack: ["React", "Node.js", "TypeScript", "AWS"],
    image: "",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "sarah-adeyemi",
    name: "Sarah Adeyemi",
    role: "Creative Director",
    bio: "Award-winning designer shaping brand identities for premium clients across Africa and Europe.",
    stack: ["Figma", "After Effects", "Illustrator", "Blender"],
    image: "",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "david-nnamdi",
    name: "David Nnamdi",
    role: "Senior Developer",
    bio: "Backend specialist focused on API architecture, database optimization, and system reliability.",
    stack: ["Python", "PostgreSQL", "Docker", "Go"],
    image: "",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "amara-eze",
    name: "Amara Eze",
    role: "UI/UX Lead",
    bio: "Human-centered design advocate with expertise in research-driven interface systems.",
    stack: ["Figma", "Prototyping", "User Research", "Design Systems"],
    image: "",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "tunde-bakare",
    name: "Tunde Bakare",
    role: "Motion Designer",
    bio: "Cinematic storyteller blending videography and motion design into compelling brand narratives.",
    stack: ["Premiere Pro", "After Effects", "DaVinci", "Cinema 4D"],
    image: "",
    linkedin: "#",
    portfolio: "#",
  },
  {
    id: "grace-obi",
    name: "Grace Obi",
    role: "Project Manager",
    bio: "Operational strategist ensuring every project is delivered on time, on scope, and on brand.",
    stack: ["Agile", "Jira", "Notion", "Stakeholder Mgmt"],
    image: "",
    linkedin: "#",
    portfolio: "#",
  },
];

export const trainings = [
  {
    title: "Frontend Engineering Bootcamp",
    focus: "React, TypeScript, Modern CSS",
    duration: "12 Weeks",
    description: "Intensive program covering component architecture, state management, and production-grade frontend development.",
  },
  {
    title: "UI/UX Design Masterclass",
    focus: "Research, Prototyping, Design Systems",
    duration: "8 Weeks",
    description: "From wireframes to high-fidelity prototypes — learn to design interfaces that convert.",
  },
  {
    title: "Video Production Essentials",
    focus: "Shooting, Editing, Color Grading",
    duration: "6 Weeks",
    description: "End-to-end video production workflow for corporate and creative content.",
  },
  {
    title: "Brand Identity Workshop",
    focus: "Strategy, Visual Systems, Guidelines",
    duration: "4 Weeks",
    description: "Build cohesive brand identities from strategy through to complete visual systems.",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Trainings", path: "/trainings" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];
