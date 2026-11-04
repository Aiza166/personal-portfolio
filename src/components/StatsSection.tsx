import { motion } from "framer-motion";

const stats = [
  { value: "61s → 24s", label: "First LLM response time cut at AlphaVenture", href: "#work" },
  { value: "5,998", label: "YC startups queryable in plain English", href: "#work" },
  { value: "#1 / 30", label: "Champion, Agento Gauntlet '26", href: "#work" },
  { value: "0.91 → 0.53", label: "Honest AUC after catching target leakage", href: "#projects" },
];

const StatsSection = () => (
  <section aria-label="Highlights" className="px-6 lg:px-16 -mt-8 mb-8 relative z-10">
    <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border/30 bg-border/30">
      {stats.map((s, i) => (
        <motion.a
          key={s.value}
          href={s.href}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className="group bg-background p-6 md:p-8 hover:bg-primary/[0.04] transition-colors"
        >
          <p className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
            {s.value}
          </p>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.label}</p>
        </motion.a>
      ))}
    </div>
  </section>
);

export default StatsSection;
