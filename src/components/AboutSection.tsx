import { motion } from "framer-motion";

const skills = {
  "Languages": ["C/C++", "Python", "PHP", "SQL", "JavaScript", "TypeScript", "Bash", "Assembly", "HTML/CSS"],
  "AI & LLM": ["Model Context Protocol (MCP)", "LLM Agents", "Groq / LLaMA", "Whisper", "Mem0", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  "Web & Backend": ["React", "Next.js", "FastAPI", "Node.js", "Server-Sent Events", "Chart.js", "ShadCN UI"],
  "Data": ["MariaDB/MySQL", "MongoDB", "Supabase"],
  "Systems & Tools": ["Linux", "Apache", "Git/GitHub", "Claude Code", "n8n", "Vercel", "Jupyter", "Appwrite"],
};

const certifications = [
  { name: "Aspire Institute", detail: "Aspire Leaders Program (ALP) 2025, Harvard-designed curriculum" },
  { name: "Google IT Support", detail: "Professional Certificate, In Progress" },
  { name: "Google Prompt Engineering", detail: "Specialization" },
  { name: "Google AI Essentials", detail: "" },
  { name: "AI Seekho", detail: "Google Cloud, AI & ML" },
  { name: "Deloitte Tech Simulation", detail: "" },
  { name: "C Programming", detail: "UC Santa Cruz" },
  { name: "Intro to Psychology", detail: "Yale University" },
  { name: "Entrepreneurship 1", detail: "UPenn" },
  { name: "Git & GitHub", detail: "IBM" },
];

const leadership = [
  { role: "Head, Marketing", org: "Robotics & Automation Society" },
  { role: "Co-Head, Graphic Design", org: "Robotics & Automation Society" },
  { role: "Co-Head, Content", org: "Developer Student Club" },
  { role: "Co-Head, Marketing", org: "FAST Entrepreneurship Society" },
  { role: "Executive, Marketing", org: "ACM" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-16 relative">
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-primary/40" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/70">About</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05] mb-6">
              The person behind<br />the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">pixels</span>
            </h2>
            <p className="text-base text-muted-foreground leading-[1.9] font-light max-w-xl">
              I like understanding a system all the way down, from kernel threads
              and interrupt handlers to the LLM agents I build today, and I care
              about honest results over impressive-looking ones. Outside code, I
              lead marketing and design for campus societies, play chess, and cycle
              through Karachi's streets.
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-l-2 border-primary/30 pl-6"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Education</p>
          <p className="font-serif text-2xl text-foreground">National University of Computer and Emerging Sciences (FAST NUCES)</p>
          <p className="text-sm text-muted-foreground mt-1">Bachelor of Science in Computer Science · Karachi · 2023 – 2027</p>
        </motion.div>

        {/* Skills */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-8 bg-border" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Technical Stack</span>
          </motion.div>
          
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.06 }}
              >
                <p className="text-xs font-medium text-foreground/60 mb-3 font-mono tracking-wide">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-[13px] px-4 py-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications + Leadership side by side */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-8 bg-border" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Certifications</span>
            </motion.div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group flex items-start gap-3 py-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary flex-shrink-0 mt-1.5 transition-colors" />
                  <div>
                    <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{c.name}</p>
                    {c.detail && <p className="text-xs text-muted-foreground">{c.detail}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-8 bg-border" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Leadership</span>
            </motion.div>
            <div className="space-y-4">
              {leadership.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group border-l-2 border-border/50 hover:border-primary/40 pl-4 py-1 transition-all duration-300"
                >
                  <p className="text-sm text-foreground/80 group-hover:text-foreground font-medium transition-colors">{l.role}</p>
                  <p className="text-xs text-muted-foreground">{l.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
