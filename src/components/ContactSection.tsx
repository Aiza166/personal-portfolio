// Contact section
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import ResumeDropdown from "./ResumeDropdown";
import logoSrc from "@/assets/logo.png";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aiza-gazyani" },
  { label: "GitHub", href: "https://github.com/Aiza166" },
  { label: "LeetCode", href: "https://leetcode.com/u/aizagazyani16/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-16 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-serif text-[25vw] leading-none text-foreground/[0.02] block whitespace-nowrap">
          SAY HELLO
        </span>
      </div>

      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-primary/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/70">Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl text-foreground leading-[1.05]"
          >
            Got a project?<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Let's talk.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Contact info */}
          <div className="space-y-6">
            <a
              href="mailto:aizagazyani16@gmail.com"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs tracking-wide text-foreground">aizagazyani16@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-sm">Karachi, Pakistan</span>
            </div>
            <p className="text-sm text-muted-foreground">+92 335 3639141</p>
            <div className="mt-3">
              <ResumeDropdown />
            </div>
          </div>

          {/* Social links */}
          <div>
            {socials.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="group flex items-center justify-between py-5 border-b border-border/20 hover:border-primary/20 transition-all"
              >
                <span className="text-lg text-foreground/80 group-hover:text-foreground transition-colors font-light">
                  {l.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="AG" className="w-6 h-6 invert opacity-50" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
              Aiza Gazyani
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            Designed with intention · © 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
