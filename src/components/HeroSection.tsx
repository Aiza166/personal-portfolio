import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logoSrc from "@/assets/logo.png";
import ResumeDropdown from "./ResumeDropdown";

const proofPoints = [
  { tag: "Now", label: "AI Engineer Intern @ Agento" },
  { tag: "Shipped", label: "LLM analyst live in production at AlphaVenture" },
  { tag: "Won", label: "#1 of 30, Agento Gauntlet '26" },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col px-6 lg:px-16 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <motion.div style={{ y: nameY, opacity, scale }} className="flex-1 flex flex-col justify-center pt-24 pb-20 max-w-7xl">
        {/* Logo + Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-5 mb-14"
        >
          <img src={logoSrc} alt="AG" className="w-8 h-8 invert opacity-60" />
          <div className="h-px w-12 bg-primary/30" />
          <a href="#contact" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5 hover:bg-primary/10 transition-colors">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping motion-reduce:animate-none" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/80">
              Open to AI / SWE roles · 2027
            </span>
          </a>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden pb-3">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3.35rem,11.5vw,9.5rem)] leading-[0.98] tracking-tight text-foreground"
          >
            Aiza
          </motion.h1>
        </div>
        <div className="overflow-visible pb-6 relative z-10">
          <motion.h1
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-[clamp(3.35rem,11.5vw,9.5rem)] leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent"
          >
            Gazyani
          </motion.h1>
        </div>

        {/* Tagline with creative dash */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 flex flex-col md:flex-row md:items-start gap-8 md:gap-20"
        >
          <ul className="flex-shrink-0 space-y-3 md:w-72">
            {proofPoints.map((pt) => (
              <li key={pt.label} className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary/80 w-16 flex-shrink-0">{pt.tag}</span>
                <span className="text-sm text-foreground/90 leading-snug">{pt.label}</span>
              </li>
            ))}
          </ul>

          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent hidden md:block" />
            <p className="text-base text-muted-foreground leading-[1.9] max-w-md font-light">
              Final-year BSCS student at FAST and AI Engineer Intern at Agento.
              I build LLM-powered tools end to end, from database and backend
              through to the browser, with a background in systems programming
              and machine learning.
            </p>
          </div>
        </motion.div>

        {/* Resume download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10"
        >
          <ResumeDropdown />
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pb-8 flex items-center justify-between"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          Karachi, Pakistan
        </span>
        <motion.div
          className="flex items-center gap-3"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
