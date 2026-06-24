import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { glow?: boolean }
>(({ className, glow = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "glass rounded-xl p-6 transition-all duration-300",
      glow && "hover:neon-box-primary hover:border-primary/50",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
