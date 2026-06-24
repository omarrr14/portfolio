"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionHeading({ children, className, subtitle }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-foreground flex items-center gap-4">
          <span className="text-primary neon-text-primary">_</span>
          {children}
        </h2>
        {subtitle && (
          <p className="mt-4 text-muted text-lg md:text-xl font-mono">
            {`// ${subtitle}`}
          </p>
        )}
      </motion.div>
    </div>
  );
}
