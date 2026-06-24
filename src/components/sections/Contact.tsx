"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "omarelfar892@gmail.com",
    href: "mailto:omarelfar892@gmail.com",
    color: "#00FFB3",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/omar-elfar",
    href: "https://www.linkedin.com/in/omar-elfar-a91844223?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    color: "#00E5FF",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/omarrr14",
    href: "https://github.com/omarrr14",
    color: "#ffffff",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading subtitle="Initialize connection">Contact.init()</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-xl p-6 border border-primary/15">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <Terminal size={14} className="text-primary" />
                  <span className="font-mono text-xs text-muted">send_message.sh</span>
                </div>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg px-4 py-3 text-sm text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    style={{ backgroundColor: "rgba(5,8,22,0.6)" }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg px-4 py-3 text-sm text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    style={{ backgroundColor: "rgba(5,8,22,0.6)" }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Let's build something amazing together..."
                    className="w-full rounded-lg px-4 py-3 text-sm text-white border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    style={{ backgroundColor: "rgba(5,8,22,0.6)" }}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <span className="font-mono mr-2">&gt;</span> Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s connect</h3>
              <p className="text-muted leading-relaxed">
                I&apos;m currently open for new opportunities. Whether you have a question, a
                project idea, or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div
                    className="p-3 rounded-full group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${s.color}12`, color: s.color }}
                  >
                    <s.icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{s.label}</p>
                    <p className="text-xs font-mono text-muted">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
