import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import logoSrc from "@/assets/logo.png";
import ResumeDropdown from "./ResumeDropdown";

const roles = ["Full-Stack Developer", "AI/ML Enthusiast", "Systems Programmer", "Software Engineer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[15%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-xl border border-primary/10 rotate-12 backdrop-blur-sm" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 right-[25%] hidden lg:block"
      >
        <div className="w-3 h-3 rounded-full bg-primary/20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-60 left-[60%] hidden lg:block"
      >
        <div className="w-2 h-2 rounded-full bg-accent/30" />
      </motion.div>

      {/* Open to work badge */}
      <a href="#contact" className="absolute top-32 right-8 lg:right-24 hidden lg:block cursor-pointer">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative w-28 h-28 rounded-full border border-primary/20 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 rounded-full border border-dashed border-primary/35"
            />
            <div className="absolute inset-3 rounded-full border border-border/60 bg-background/35 backdrop-blur-sm" />
            <span className="relative font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground text-center leading-[1.5] pl-[0.22em]">
              Open To
              <br />
              Work
            </span>
          </div>
        </motion.div>
      </a>

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
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/70">
            Portfolio 2026
          </span>
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
          <div className="flex-shrink-0">
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Currently</p>
            <div className="h-7 overflow-hidden relative">
              <motion.p
                key={roleIndex}
                initial={{ y: 28, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -28, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className="text-lg font-medium text-foreground"
              >
                {roles[roleIndex]}
              </motion.p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent hidden md:block" />
            <p className="text-base text-muted-foreground leading-[1.9] max-w-md font-light">
              Third-year CS student at FAST NUCES building at the intersection of
              AI, systems, and meaningful user experiences. I don't just write code, 
              I craft solutions.
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
