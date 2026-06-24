"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy to highlight active link
      let current = "";
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el && window.scrollY >= (el as HTMLElement).offsetTop - 200) {
          current = link.href;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none">
      {/* Desktop Floating Pill Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "hidden md:flex items-center gap-2 p-2 rounded-full border transition-all duration-500 pointer-events-auto",
          scrolled
            ? "glass border-primary/20 shadow-[0_0_20px_rgba(0,255,179,0.1)]"
            : "bg-background/40 backdrop-blur-sm border-white/5"
        )}
      >
        <a href="#" className="px-4 font-bold font-mono tracking-tight text-white flex items-center h-full mr-2">
          O<span className="text-primary">E</span>
        </a>

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
              active === link.href ? "text-background" : "text-muted hover:text-white"
            )}
          >
            {active === link.href && (
              <motion.div
                layoutId="activeNavBackground"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {link.label}
          </a>
        ))}
      </motion.nav>

      {/* Mobile Navbar Container */}
      <div className="w-full md:hidden flex justify-between items-center pointer-events-auto">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#"
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 font-bold font-mono text-white",
            scrolled && "border-primary/20 shadow-[0_0_15px_rgba(0,255,179,0.15)]"
          )}
        >
          O<span className="text-primary">E</span>
        </motion.a>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-white",
            scrolled && "border-primary/20 shadow-[0_0_15px_rgba(0,255,179,0.15)]"
          )}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass border border-primary/20 rounded-2xl p-4 flex flex-col gap-2 md:hidden pointer-events-auto shadow-[0_0_30px_rgba(0,255,179,0.1)]"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setMobileOpen(false);
                }}
                className={cn(
                  "p-4 rounded-xl text-center font-medium transition-colors",
                  active === link.href
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
