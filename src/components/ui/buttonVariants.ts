import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "btn-liquid inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-display tracking-wide ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "btn-liquid-ghost hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline !overflow-visible before:!hidden",
        accent: "bg-accent text-accent-foreground btn-liquid-accent btn-glow",
        hero: "bg-accent text-accent-foreground btn-liquid-accent btn-glow text-base px-8 py-3",
        "hero-outline": "border-2 border-primary-foreground/30 text-primary-foreground btn-liquid-ghost text-base px-8 py-3",
        "hero-pill": "rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground btn-liquid-ghost text-base px-10 py-3 backdrop-blur-sm",
        "accent-pill": "rounded-full bg-accent text-accent-foreground btn-glow text-base px-8 py-3.5 font-medium",
        "light-fill": "rounded-md bg-primary-foreground text-primary border border-accent/40 text-sm px-5 py-2.5 font-medium hover:bg-primary-foreground/90",
        "dark-outline": "rounded-md border border-primary-foreground/25 text-primary-foreground text-sm px-5 py-2.5 font-medium hover:bg-primary-foreground/5",
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
