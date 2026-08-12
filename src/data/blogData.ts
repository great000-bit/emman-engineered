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
  // {
  //   id: "free-website-nigeria",
  //   title: "How to Get Free Website for Your Business in Nigeria",
  //   excerpt: "Learn how to get a high-quality free website for your business in Nigeria with simple online platforms and hosts.",
  //   date: "Aug 05, 2026",
  //   readTime: "5 min read",
  //   category: "Web Design",
  //   imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  // },
  // {
  //   id: "business-ideas-nigeria",
  //   title: "Top 10 Business Ideas for 2023 in Nigeria",
  //   excerpt: "Discover the most profitable business opportunities and ideas to start in Nigeria this year with low capital investment.",
  //   date: "Jul 28, 2026",
  //   readTime: "8 min read",
  //   category: "Business",
  //   imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  // },
  // {
  //   id: "smes-compete-online",
  //   title: "How Nigerian SMEs Can Compete Online",
  //   excerpt: "Proven strategies for small and medium enterprises in Nigeria to compete with major established brands on a budget.",
  //   date: "Jun 11, 2026",
  //   readTime: "6 min read",
  //   category: "Marketing",
  //   imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  // },
];
