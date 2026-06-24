"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Company",
    period: "Present",
    description:
      "Working in a professional team environment and contributing to production-level projects. Ensuring code quality, performance, and responsive design across all devices.",
  },
  {
    title: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "Past",
    description:
      "Worked on multiple client projects, building responsive and modern user interfaces. Communicated directly with clients to understand requirements and deliver tailored solutions.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading subtitle="Work history">Experience.log()</SectionHeading>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, #00FFB350, #00FFB310, transparent)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-primary"
                  style={{
                    backgroundColor: "#050816",
                    boxShadow: "0 0 10px rgba(0,255,179,0.5)",
                  }}
                />

                <div className="glass rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:neon-box-primary">
                  <span className="inline-block py-1 px-3 rounded-full text-xs font-mono text-primary border border-primary/20 mb-3" style={{ backgroundColor: "rgba(0,255,179,0.08)" }}>
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-muted font-mono text-sm mb-3">@ {exp.company}</h4>
                  <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
