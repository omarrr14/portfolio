"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const technicalSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 88 },
  { name: "Next.js", level: 80 },
  { name: "WordPress", level: 75 },
  { name: "Shopify", level: 80 },
];

const softSkills = [
  "Communication",
  "Leadership",
  "Problem Solving",
  "Team Collaboration",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading subtitle="Tech stack & abilities">Skills.load()</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-mono text-secondary neon-text-secondary mb-6 flex items-center gap-2">
              <span className="text-muted text-sm">&lt;</span>
              Technical_Skills
              <span className="text-muted text-sm">/&gt;</span>
            </h3>

            <div className="glass rounded-xl p-6 space-y-5 border border-white/5">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#0B1120" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #00FFB3, #00E5FF)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-mono text-secondary neon-text-secondary mb-6 flex items-center gap-2">
              <span className="text-muted text-sm">&lt;</span>
              Soft_Skills
              <span className="text-muted text-sm">/&gt;</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass rounded-xl p-6 text-center border border-white/5 hover:border-secondary/40 hover:neon-box-secondary transition-all duration-300 group cursor-default"
                >
                  <span className="font-mono text-white group-hover:text-secondary transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Terminal decoration */}
            <div className="mt-8 glass rounded-lg p-4 border border-white/5 font-mono text-sm text-muted">
              <p className="text-secondary">$ systemctl status soft_skills</p>
              <p className="mt-2 text-primary">● soft_skills.service &mdash; Omar&apos;s interpersonal skills</p>
              <p>&nbsp;&nbsp; Loaded: loaded (/etc/systemd/system/soft_skills.service)</p>
              <p>&nbsp;&nbsp; Active: <span className="text-primary">active (running)</span> since {new Date().getFullYear()}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
