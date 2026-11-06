import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudy, type CaseStudy as CS } from "@/data/caseStudies";
import NotFound from "./NotFound";

const FlowDiagram = ({ rows }: { rows: { title: string; note?: string; highlight?: boolean }[][] }) => (
  <div className="space-y-4">
    {rows.map((row, ri) => (
      <div key={ri}>
        <div className="flex flex-col md:flex-row md:items-stretch gap-3">
          {row.map((step, si) => (
            <div key={step.title} className="flex flex-col md:flex-row md:items-center gap-3 md:flex-1">
              <div
                className={`flex-1 rounded-xl border px-4 py-4 ${
                  step.highlight
                    ? "border-primary/60 bg-primary/10 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.6)]"
                    : "border-border/50 bg-card/50"
                }`}
              >
                <p className={`text-sm font-medium ${step.highlight ? "text-primary" : "text-foreground"}`}>{step.title}</p>
                {step.note && <p className="text-xs text-muted-foreground mt-1">{step.note}</p>}
              </div>
              {si < row.length - 1 && (
                <ArrowRight className="w-4 h-4 text-primary/60 flex-shrink-0 self-center rotate-90 md:rotate-0" aria-hidden />
              )}
            </div>
          ))}
        </div>
        {ri < rows.length - 1 && (
          <div className="flex justify-center md:justify-end md:pr-[16%] py-1" aria-hidden>
            <ArrowRight className="w-4 h-4 text-primary/60 rotate-90" />
          </div>
        )}
      </div>
    ))}
  </div>
);

const BarDiagram = ({ bars }: { bars: { label: string; value: number; note: string }[] }) => (
  <div className="space-y-5">
    {bars.map((b, i) => (
      <div key={b.label}>
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <p className="text-sm text-foreground">{b.label}</p>
          <p className="font-mono text-sm text-primary">{b.value.toFixed(2)}</p>
        </div>
        <div className="relative h-3 rounded-full bg-secondary/40 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${b.value * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-foreground/40" title="Chance (0.5)" />
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">{b.note}</p>
      </div>
    ))}
    <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">Vertical line = 0.5, chance level</p>
  </div>
);

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 border-t border-border/30">
    <h2 className="md:col-span-3 font-mono text-[10px] tracking-[0.3em] uppercase text-primary/80 pt-1">{label}</h2>
    <div className="md:col-span-9">{children}</div>
  </section>
);

const CaseStudyPage = () => {
  const { slug } = useParams();
  const cs: CS | undefined = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (cs) document.title = `${cs.title} | Aiza Gazyani`;
    return () => {
      document.title = "Aiza Gazyani | AI Engineer";
    };
  }, [cs]);

  if (!cs) return <NotFound />;

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-background noise-bg overflow-x-clip">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </Link>
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hidden sm:block">Case study</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="pt-16 pb-12">
          <p className="font-mono text-[11px] tracking-widest uppercase text-primary/80 mb-5">{cs.kicker}</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05] mb-6">{cs.title}</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-[1.8] max-w-3xl">{cs.summary}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
            <span>{cs.period}</span>
            <span className="text-foreground/80">{cs.role}</span>
          </div>
          {cs.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {cs.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {l.label} <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {cs.image && (
          <figure className="mb-10">
            <div className="rounded-2xl overflow-hidden border border-border/40 bg-white shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.35)]">
              <img src={cs.image.src} alt={cs.image.alt} className="w-full h-auto block" loading="eager" />
            </div>
            <figcaption className="text-xs text-muted-foreground mt-3">{cs.image.caption}</figcaption>
          </figure>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border/30 bg-border/30 mb-4">
          {cs.metrics.map((m) => (
            <div key={m.label} className="bg-background p-6">
              <p className="font-serif text-3xl text-foreground">{m.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        <Section label="The problem">
          <div className="space-y-4">
            {cs.problem.map((p) => (
              <p key={p} className="text-muted-foreground leading-[1.9]">{p}</p>
            ))}
          </div>
        </Section>

        <Section label={cs.diagram.kind === "flow" ? "Architecture" : "The evidence"}>
          <div className="rounded-2xl border border-border/40 bg-card/30 p-5 md:p-8">
            {cs.diagram.kind === "flow" ? <FlowDiagram rows={cs.diagram.rows} /> : <BarDiagram bars={cs.diagram.bars} />}
          </div>
          <p className="text-xs text-muted-foreground mt-3">{cs.diagram.caption}</p>
        </Section>

        <Section label="What I did">
          <div className="space-y-8">
            {cs.approach.map((a, i) => (
              <div key={a.heading} className="flex gap-5">
                <span className="font-mono text-xs text-primary/60 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{a.heading}</h3>
                  <p className="text-muted-foreground leading-[1.9]">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Results">
          <ul className="space-y-3">
            {cs.results.map((r) => (
              <li key={r} className="flex gap-3 text-foreground/90 leading-[1.8]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[0.7rem]" />
                {r}
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Lessons">
          <ul className="space-y-3">
            {cs.lessons.map((l) => (
              <li key={l} className="text-muted-foreground leading-[1.8] italic font-serif text-lg">"{l}"</li>
            ))}
          </ul>
        </Section>

        <Section label="Stack">
          <div className="flex flex-wrap gap-2">
            {cs.stack.map((s) => (
              <span key={s} className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-border/50 text-muted-foreground">{s}</span>
            ))}
          </div>
        </Section>

        <Link
          to={`/work/${next.slug}`}
          className="group mt-8 block rounded-2xl border border-border/40 hover:border-primary/40 bg-card/30 p-8 transition-colors"
        >
          <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">Next case study</p>
          <p className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
            {next.title} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </p>
        </Link>
      </main>
    </div>
  );
};

export default CaseStudyPage;
