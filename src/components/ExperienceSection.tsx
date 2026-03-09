import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Dev Fellow",
    company: "Dev Weekends",
    period: "Jun – Aug '25",
    description: "Completed 300+ LeetCode problems. Joined 30+ DSA sessions and 12 engineering workshops covering React, Node.js, and system design. Contributed to open-source projects.",
    tags: ["DSA", "React", "Node.js", "Open Source"],
    num: "01",
  },
  {
    role: "AI & Web Dev Intern",
    company: "Nexium",
    period: "Jul '25",
    description: "Shipped 3 AI-powered apps end-to-end. Set up CI/CD, auth, and database integrations across Next.js, Supabase, and MongoDB.",
    tags: ["Next.js", "AI", "Supabase", "CI/CD"],
    num: "02",
  },
  {
    role: "Technology Simulation",
    company: "Deloitte (Forage)",
    period: "Aug '25",
    description: "Unified JSON datasets using Python. Authored a machine health monitoring dashboard proposal. Presented structured solutions to simulated stakeholders.",
    tags: ["Python", "Data Analysis", "Dashboard"],
    num: "03",
  },
];

const ExperienceSection = () => {
  return (
    <section id="work" className="py-32 px-6 lg:px-16 relative">
      {/* Decorative corner */}
      <div className="absolute top-16 left-16 w-20 h-20 border-t border-l border-border/10 pointer-events-none hidden lg:block" />

      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-primary/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/70">
              Experience
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05]"
          >
            Where I've been<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">sharpening</span> my craft
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 md:p-10 hover:border-primary/15 transition-all duration-500 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-serif text-8xl md:text-9xl text-foreground/[0.02] leading-none select-none">
                {exp.num}
              </span>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-primary/40 to-accent/20 group-hover:w-full transition-all duration-700" />

              <div className="relative grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] tracking-widest text-primary/50 mb-2">{exp.period}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-500">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent/80 mt-2 font-medium">{exp.company}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-muted-foreground leading-[1.9] mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-border/30 text-muted-foreground group-hover:border-primary/15 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
