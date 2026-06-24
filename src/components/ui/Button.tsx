"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        "disabled:opacity-50 disabled:pointer-events-none",
        // variants
        variant === "primary" &&
          "bg-primary text-black hover:brightness-110 neon-box-primary font-semibold",
        variant === "secondary" &&
          "bg-secondary text-black hover:brightness-110 neon-box-secondary font-semibold",
        variant === "outline" &&
          "border border-primary text-primary hover:bg-primary/10 hover:neon-box-primary",
        variant === "ghost" &&
          "text-muted hover:text-primary hover:bg-white/5",
        // sizes
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-6 text-sm",
        size === "lg" && "h-12 px-8 text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
