import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "NeuroDetect",
    category: "AI / Machine Learning",
    description: "AI-powered Parkinson's Disease detection using biomedical and lifestyle data. Built with Python, TensorFlow, and Jupyter notebooks.",
    tags: ["Python", "TensorFlow", "ML", "Jupyter"],
    github: "https://github.com/Aiza166/NeuroDetect",
    featured: true,
  },
  {
    title: "Mental Health Tracker",
    category: "Full-Stack / AI",
    description: "Mood logging with AI insight generation. Next.js frontend, Supabase auth, MongoDB storage, n8n AI workflows.",
    tags: ["Next.js", "Supabase", "MongoDB", "n8n"],
    github: "https://github.com/Aiza166/Mental-Health-Tracker",
    featured: true,
  },
  {
    title: "Kernel Module",
    category: "Linux / Systems",
    description: "Priority-based producer-consumer system using kernel threads, semaphores, spinlocks, IRQ handling, and sysfs/debugfs.",
    tags: ["Linux", "C", "Kernel"],
  },
  {
    title: "Draftly",
    category: "React / Full-Stack",
    description: "Full-featured blog app with authentication and CRUD operations, built with React and Appwrite backend.",
    tags: ["React", "Appwrite", "JavaScript"],
    github: "https://github.com/Aiza166/Draftly-React-Blog-App",
  },
  {
    title: "Blog Summariser",
    category: "AI / Web App",
    description: "AI-powered tool that summarises blog posts into concise, readable formats using natural language processing.",
    tags: ["TypeScript", "AI", "Next.js"],
    github: "https://github.com/Aiza166/blog-summariser",
  },
  {
    title: "Quote Generator",
    category: "AI / Full-Stack",
    description: "AI-powered inspirational quote generator with curated categories and shareable outputs.",
    tags: ["Next.js", "AI", "Vercel"],
    github: "https://github.com/Aiza166",
  },
  {
    title: "Social Media Simulator",
    category: "OOP / C++",
    description: "Console social platform with auth, posts, stories, follows. Abstract classes, polymorphism, password encryption.",
    tags: ["C++", "OOP", "File I/O"],
    github: "https://github.com/Aiza166/Social-Networking-Platform-Simulator",
  },
  {
    title: "Carpooling System",
    category: "Systems / C",
    description: "Route matching engine for 45+ transport routes with file handling, data structures, and automated cleanup.",
    tags: ["C", "Algorithms", "Data Structures"],
  },
  {
    title: "Matrix Calculator",
    category: "Assembly / Low-Level",
    description: "Matrix calculator in x86 Assembly using Irvine32 with menu-driven operations like addition, multiplication, and determinant.",
    tags: ["x86 Assembly", "Irvine32", "Math"],
  },
  {
    title: "Regular Grammar Parser",
    category: "Theory / Python",
    description: "Formal language parser implementing regular grammar rules with Python. Open-source under MIT license.",
    tags: ["Python", "Automata", "Parser"],
    github: "https://github.com/Aiza166/regular-grammar-parser",
  },
];

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 lg:px-16 relative overflow-hidden">
      {/* Decorative corner lines */}
      <div className="absolute top-16 right-16 w-20 h-20 border-t border-r border-border/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-16 left-16 w-20 h-20 border-b border-l border-border/20 pointer-events-none hidden lg:block" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.02] blur-[120px] pointer-events-none" />

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
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/70">Projects</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05]"
          >
            Things I've <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">built</span> & shipped
          </motion.h2>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-8 md:p-10 hover:border-primary/20 transition-all duration-500 flex flex-col justify-between min-h-[340px] overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors" />
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-primary font-medium">
                    {p.category}
                  </span>
                  <div className="flex gap-2">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors duration-500 mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.8] max-w-sm">{p.description}</p>
              </div>
              <div className="relative flex flex-wrap gap-2 mt-6">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground border border-border/30">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group bg-card/20 backdrop-blur-sm p-6 rounded-xl border border-border/20 hover:border-primary/15 transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-primary/50 to-transparent group-hover:w-full transition-all duration-700" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
                  {p.category}
                </span>
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                )}
              </div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-secondary/20 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/Aiza166?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/40 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
          >
            <Github className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs tracking-widest uppercase text-foreground">View all on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
