"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Prayer Times App",
    description:
      "A modern application for displaying prayer times with clean UI and responsive design. Features accurate calculation methods and localization.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "#",
    demo: "https://masjiidtime.netlify.app/?fbclid=IwY2xjawSoVDxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR5dBU5iDc7G6wg3xMIN6NAd-adXyrFseVUjF_yNmdruHnJNjmXwKr59jAizIQ_aem_FEvoI3xfqUc-Cq5w1BWevA",
    accent: "#00FFB3",
  },
  {
    title: "Palestine Extension",
    description:
      "A browser extension created to support and spread awareness through accessible frontend experiences. Provides daily facts and historical context.",
    tech: ["JavaScript", "React", "Browser API"],
    github: "#",
    demo: "https://kofya.netlify.app/",
    accent: "#00E5FF",
  },
  {
    title: "USMLE Platform",
    description:
      "A modern educational platform designed with responsive frontend architecture and user-friendly experience for medical students.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "#",
    demo: "https://usmlegenuis-qb.runasp.net/",
    accent: "#00FFB3",
  },
  {
    title: "Saleh Org",
    description:
      "A fast and responsive organizational platform built with modern web technologies, providing a seamless user experience.",
    tech: ["React", "Tailwind CSS"],
    github: "#",
    demo: "https://saleh-org.vercel.app/",
    accent: "#00E5FF",
  },
  {
    title: "Secure Attendance",
    description:
      "An advanced attendance tracking application featuring secure user authentication and a clean, user-friendly interface.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "#",
    demo: "https://secure-attendance.vercel.app/login",
    accent: "#00FFB3",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading subtitle="Featured builds">Projects.execute()</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div
                className="glass rounded-xl p-6 h-full flex flex-col group border border-white/5 hover:border-white/15 transition-all duration-300"
                style={{
                  boxShadow: `0 0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${project.accent}20, inset 0 0 20px ${project.accent}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 transparent`;
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                  >
                    <FolderGit2 size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted hover:text-white transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-muted hover:text-primary transition-colors"
                      aria-label={`${project.title} demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed flex-grow mb-5">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md text-muted border border-white/10"
                      style={{ backgroundColor: "#050816" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button variant="outline" className="gap-2">
            <FaGithub size={16} />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
