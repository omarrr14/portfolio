export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 relative overflow-hidden">
      {/* Glow blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,179,0.15) 0%, transparent 70%)" }}
      />

      <div className="container px-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative">
        <p className="text-muted font-mono text-sm">
          &copy; {new Date().getFullYear()} &middot; Built by <span className="text-white">Omar Elfar</span>
        </p>
        <div className="flex gap-6 font-mono text-sm">
          <a href="/Omar_Elfar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            Resume
          </a>
          <a href="#" className="text-muted hover:text-primary transition-colors">
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
