import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Agento",
    period: "Aug '26 – Present · Remote",
    bullets: [
      "Won Champion, placing 1st of 30 in The Agento Gauntlet '26, a paid national testing cohort for Agento's AI agent platform, which led to a direct offer for this role.",
      "Test and improve the quality and reliability of Agento's AI agent platform as part of a team of about 8 engineers, ahead of the product's launch.",
    ],
    tags: ["AI Agents", "Evaluation", "Reliability", "#1 of 30"],
    num: "01",
  },
  {
    role: "Software Engineering Intern",
    company: "AlphaVenture",
    period: "Jun – Jul '26 · Onsite",
    link: "https://hackerman.alphaventure.com",
    bullets: [
      "Built the AI analyst for the company's Y Combinator startup product: a chat tool answering plain-English questions about 5,998 startups from a live MariaDB database, returning tables, charts, and full reports streamed to the browser as the model writes them. PHP 8.3 and plain JavaScript, no framework.",
      "Designed a Model Context Protocol server as the model's only path to the database, permitting read-only queries with size caps and backing it with low-permission accounts, so a model-written query could not alter or overload the data.",
      "Cut the wait on a user's first message from 61 to 24 seconds by tracing the delay to startup work deferred until the first request rather than the model itself, then moving that work to server boot.",
      "Shipped the same chat as an embeddable widget on the team's public site, serving one shared copy of the code so the widget and the standalone app could not drift out of sync.",
      "Handed the project to AlphaVenture's engineers; it is now live in production at hackerman.alphaventure.com.",
    ],
    tags: ["PHP 8.3", "JavaScript", "MCP", "MariaDB", "SSE", "Chart.js", "61s → 24s"],
    num: "02",
  },
  {
    role: "Technology Simulation",
    company: "Deloitte (Forage)",
    period: "Aug '25 · Virtual",
    bullets: [
      "Unified JSON datasets using Python.",
      "Authored a machine health monitoring dashboard proposal and presented structured solutions to simulated stakeholders.",
    ],
    tags: ["Python", "Data Analysis", "Dashboard"],
    num: "03",
  },
  {
    role: "AI & Web Development Intern",
    company: "Nexium",
    period: "Jul '25 · Remote",
    bullets: [
      "Built and deployed 3 full-stack AI-powered applications end to end (Mental Health Tracker, Quote Generator, Blog Summariser) using Next.js, Supabase, MongoDB, ShadCN UI, Vercel, and n8n for AI workflows.",
      "Improved deployment reliability by implementing CI/CD pipelines, secure authentication, and database integrations.",
    ],
    tags: ["Next.js", "Supabase", "MongoDB", "n8n", "Vercel", "CI/CD"],
    num: "04",
  },
  {
    role: "Software Development Fellow",
    company: "Dev Weekends",
    period: "Jun – Aug '25 · Remote",
    bullets: [
      "Completed a mentor-led fellowship spanning 30+ DSA sessions and 12 engineering sessions (JavaScript, React, Node.js, system design).",
      "Solved 300+ algorithm problems and contributed to open-source capstone development.",
    ],
    tags: ["DSA", "React", "Node.js", "System Design", "300+ problems"],
    num: "05",
  },
  {
    role: "Consultant",
    company: "Silverlight Research Expert Network",
    period: "Jan – Apr '24 · Remote (London, UK)",
    bullets: [
      "Consulted for a specialist knowledge research firm that connects private equity funds, hedge funds, consultancies, sovereign wealth funds, and corporates with industry experts to inform strategic and investment decisions.",
    ],
    tags: ["Research", "Consulting"],
    num: "06",
  },
  {
    role: "Marketing Intern",
    company: "The Dawood Foundation (TDF Magnifiscience Centre)",
    period: "Jun – Jul '23 · Onsite",
    bullets: [
      "Completed a 33-hour internship programme focused on inquiry-based learning in an informal science setting.",
      "Promoted the 'Children's Market' event using strategic marketing techniques.",
      "Contributed to a STEM project designing a smart stick for visually impaired people using Arduino.",
    ],
    tags: ["Marketing", "Arduino", "STEM"],
    num: "07",
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
                  <ul className="space-y-3 mb-5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-[1.8]">
                        <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0 mt-[0.7rem]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary hover:underline mb-5">
                      Live in production ↗
                    </a>
                  )}
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
