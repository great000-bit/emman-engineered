import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
    }
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(props as any)}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
