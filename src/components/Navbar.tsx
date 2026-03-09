import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@/assets/logo.png";
import ResumeDropdown from "./ResumeDropdown";

const links = [
  { label: "Work", href: "#work", num: "01" },
  { label: "Projects", href: "#projects", num: "02" },
  { label: "About", href: "#about", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/50" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-16 py-4">
          <a href="#" className="group">
            <img src={logoSrc} alt="AG Logo" className="w-10 h-10 invert opacity-90 group-hover:opacity-100 transition-opacity" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-[13px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
              >
                <span className="text-[9px] font-mono text-primary/50 group-hover:text-primary transition-colors">{l.num}</span>
                {l.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <ResumeDropdown variant="compact" />
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden relative w-8 h-8 flex flex-col items-end justify-center gap-1.5"
          >
            <div className="w-6 h-px bg-foreground" />
            <div className="w-4 h-px bg-foreground" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2rem) 2rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-card flex flex-col justify-center px-10"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
            >
              <span className="text-foreground text-2xl">×</span>
            </button>
            
            <div className="space-y-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-4 group"
                >
                  <span className="font-mono text-xs text-primary/40 group-hover:text-primary transition-colors">{l.num}</span>
                  <span className="font-serif text-5xl text-foreground group-hover:text-primary transition-colors">{l.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
