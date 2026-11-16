import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ease-serene focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Serena Estética variants
        serene:
          "rounded-full bg-primary text-primary-foreground shadow-soft hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 active:shadow-soft",
        "serene-outline":
          "rounded-full border border-foreground/25 bg-transparent text-foreground hover:border-primary hover:bg-sage-soft hover:text-sage-deep active:bg-sage-soft/70",
        ivory:
          "rounded-full bg-ivory text-sage-deep shadow-soft hover:bg-sand hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
        "ivory-outline":
          "rounded-full border border-sage-deep-foreground/40 bg-transparent text-sage-deep-foreground hover:border-gold hover:bg-sage-deep-foreground/10 active:bg-sage-deep-foreground/15",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        pill: "h-12 px-7 text-[0.9rem] tracking-wide",
        "pill-sm": "h-10 px-5 text-[0.82rem] tracking-wide",
        "pill-lg": "h-14 px-9 text-base tracking-wide",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
