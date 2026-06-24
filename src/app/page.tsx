import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      {/* scanline overlay covering entire page */}
      <div className="fixed inset-0 scanlines" style={{ zIndex: 1 }} />

      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
