import { Brain, Target, Eye, CheckCircle } from "lucide-react";

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

export interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  {
    label: "Portfolio",
    path: "/portfolio",
    children: [
      { label: "Website Development Portfolio", path: "/portfolio/web-development" },
      { label: "UI/UX Design Portfolio", path: "/portfolio/ui-ux-design" },
      { label: "Graphic & Brand Design Portfolio", path: "/portfolio/graphic-brand-design" },
      { label: "Social Media Management Portfolio", path: "/portfolio/social-media-management" },
      { label: "Videography & Video Editing Portfolio", path: "/portfolio/videography-video-editing" },
      { label: "Motion Graphics Design Portfolio", path: "/portfolio/motion-graphics-design" },
    ],
  },
  { label: "Team", path: "/team" },
  { label: "Trainings", path: "/trainings" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Applications", path: "/applications" },
  { label: "Contact", path: "/contact" },
];
