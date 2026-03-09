import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

const resumes = [
  { label: "Software Engineering", file: "/Aiza_Gazyani_Resume_SWE.pdf" },
  { label: "IT Support", file: "/Aiza_Gazyani_Resume_IT.pdf" },
];

interface ResumeDropdownProps {
  variant?: "pill" | "compact";
}

const ResumeDropdown = ({ variant = "pill" }: ResumeDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={
          variant === "compact"
            ? "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 text-[12px] font-mono tracking-wide"
            : "group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
        }
      >
        <Download className={variant === "compact" ? "w-3.5 h-3.5" : "w-4 h-4 text-primary"} />
        <span className={variant === "compact" ? "" : "font-mono text-xs tracking-widest uppercase text-foreground"}>
          Resume
        </span>
        <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 min-w-[200px] bg-card border border-border/50 rounded-xl p-2 shadow-lg shadow-background/50 backdrop-blur-xl z-50"
          >
            {resumes.map((r) => (
              <a
                key={r.label}
                href={r.file}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all group"
              >
                <Download className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors" />
                {r.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeDropdown;
