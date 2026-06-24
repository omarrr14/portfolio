"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading subtitle="Who am I?">About.init()</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative glass rounded-2xl overflow-hidden border border-primary/20 aspect-[3/4]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" style={{ zIndex: 2 }} />

              {/* Profile image */}
              <img
                src="/omar.jpg"
                alt="Omar Elfar"
                className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  // If image doesn't exist, hide the broken image and show initials
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Fallback initials */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
                <span className="text-8xl font-bold font-mono text-primary/20">OE</span>
              </div>

              {/* Status bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5" style={{ zIndex: 3 }}>
                <p className="font-mono text-sm text-primary neon-text-primary">&gt; Status: Online</p>
                <p className="font-mono text-xs text-muted mt-1">Location: Remote</p>
              </div>
            </div>
          </motion.div>

          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Omar Elfar</span>, a frontend
              developer passionate about transforming ideas into smooth, responsive, and
              visually engaging digital experiences. I focus on building interfaces that are
              not only beautiful but also fast, scalable, and user-centered.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              With experience in freelance projects and professional company environments,
              I&apos;ve learned how to solve real-world problems, communicate effectively, and
              deliver products that create impact.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              I value clean code, performance, and intuitive user experiences. My goal is to
              build products people genuinely enjoy using.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: "Role", value: "Frontend Dev" },
                { label: "Experience", value: "1+ Years" },
                { label: "Focus", value: "React / Next" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-lg p-4 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <p className="text-primary font-mono text-xs uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-white font-medium text-sm">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
