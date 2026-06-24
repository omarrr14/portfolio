"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Terminal, ChevronRight } from "lucide-react";

const roles = ["Frontend Developer", "React Specialist", "UI Engineer"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-4xl space-y-8">
          {/* Terminal tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 glass text-primary font-mono text-xs sm:text-sm"
          >
            <Terminal size={14} className="animate-pulse" />
            <span>System.out.println(&quot;Hello, World!&quot;);</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05]">
              <span className="block text-white">Omar Elfar</span>
              <span className="block mt-2 text-primary neon-text-primary">
                {displayed}
                <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 animate-pulse align-middle" />
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl font-mono text-muted max-w-2xl leading-relaxed"
          >
            Crafting Fast, Interactive, and Visually Powerful Web Experiences.
          </motion.p>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-muted/70 max-w-xl leading-relaxed"
          >
            I help startups, businesses, and creators build modern digital experiences
            using cutting-edge frontend technologies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a href="#projects">
              <Button size="lg" className="group">
                View Projects
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
