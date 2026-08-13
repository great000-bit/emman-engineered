import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold font-display tracking-wide ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-accent hover:text-white",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-foreground/25 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-foreground hover:text-background",
        link: "text-primary underline-offset-4 hover:underline !overflow-visible before:!hidden",
        accent: "bg-accent text-white hover:bg-foreground hover:text-background",
        hero: "bg-accent text-white hover:bg-foreground hover:text-background text-base px-8 py-3",
        "hero-outline": "border border-current/30 bg-transparent text-current hover:bg-white hover:text-black text-base px-8 py-3",
        "hero-pill": "border border-current/20 bg-current/5 text-current hover:bg-white hover:text-black text-base px-10 py-3 backdrop-blur-sm",
        "accent-pill": "bg-accent text-white hover:bg-foreground hover:text-background text-base px-8 py-3.5",
        "light-fill": "border border-white bg-white text-black text-sm px-5 py-2.5 hover:bg-transparent hover:text-white",
        "dark-outline": "border border-white/40 text-white text-sm px-5 py-2.5 hover:bg-white hover:text-black",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
