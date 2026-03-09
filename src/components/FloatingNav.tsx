import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const sections = [
  { id: "hero", label: "Top" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentIdx = sections.findIndex((s) => s.id === active);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-6 bottom-8 z-40 flex flex-col items-center gap-3 hidden md:flex"
        >
          {/* Scroll to top */}
          <button
            onClick={() => scrollTo("hero")}
            className="w-9 h-9 rounded-full border border-border/40 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

          {/* Section dots */}
          <div className="flex flex-col gap-2 py-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="group relative flex items-center justify-center"
                title={s.label}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    active === s.id
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                />
                {/* Tooltip */}
                <span className="absolute right-5 px-2 py-1 rounded bg-card border border-border/30 text-[10px] font-mono tracking-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* Scroll to bottom */}
          <button
            onClick={() => scrollTo(currentIdx < sections.length - 1 ? sections[currentIdx + 1].id : "contact")}
            className="w-9 h-9 rounded-full border border-border/40 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
