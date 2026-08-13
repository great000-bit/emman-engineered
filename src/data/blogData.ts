import firstCustomersImage from "@/assets/first-100-customers-nigeria.webp";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Web Design" | "Business" | "Marketing" | "Tech" | "Finance";
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "first-100-customers-online-nigeria",
    title: "How to Get Your First 100 Customers Online in Nigeria",
    excerpt: "A practical, step-by-step customer acquisition playbook for Nigerian founders and small businesses—from defining the right offer to building a repeatable sales system.",
    date: "Aug 13, 2026",
    readTime: "12 min read",
    category: "Marketing",
    imageUrl: firstCustomersImage,
  },
];
