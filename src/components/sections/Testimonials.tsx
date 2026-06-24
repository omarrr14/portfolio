"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mostafa Elsawaf",
    role: "CEO",
    content:
      "Omar is an exceptional frontend developer. He transformed our vision into a stunning, high-performance web application. His attention to detail and ability to deliver on time is unmatched.",
  },
  {
    name: "Ammar Yasser",
    role: "Back-end Developer",
    content:
      "Working with Omar has been a great experience. He writes clean, scalable code and always brings creative solutions to complex UI challenges. A true asset to any development team.",
  },
  {
    name: "Eng Mohamed Hassan",
    role: "Founder",
    content:
      "The attention to detail and the sleek animations Omar implemented took our product to the next level. The feedback from our users has been overwhelmingly positive since the redesign.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container px-6">
        <SectionHeading subtitle="What others say">Testimonials.fetch()</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="glass rounded-xl p-6 h-full flex flex-col relative border border-white/5 hover:border-secondary/30 transition-all duration-300">
                <Quote
                  className="absolute top-5 right-5 w-10 h-10"
                  style={{ color: "rgba(0,229,255,0.15)" }}
                />

                <p className="text-muted italic mb-8 relative leading-relaxed flex-grow text-sm">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="mt-auto">
                  <div
                    className="h-px w-full mb-4"
                    style={{ background: "linear-gradient(90deg, #00E5FF50, transparent)" }}
                  />
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs font-mono text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
