export type FlowStep = { title: string; note?: string; highlight?: boolean };

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  period: string;
  role: string;
  summary: string;
  stack: string[];
  links: { label: string; href: string }[];
  image?: { src: string; alt: string; caption: string };
  metrics: { value: string; label: string }[];
  problem: string[];
  approach: { heading: string; body: string }[];
  diagram:
    | { kind: "flow"; caption: string; rows: FlowStep[][] }
    | { kind: "bars"; caption: string; bars: { label: string; value: number; note: string }[] };
  results: string[];
  lessons: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "alphaventure-ai-analyst",
    title: "An AI analyst for 5,998 YC startups",
    kicker: "AlphaVenture · Software Engineering Intern",
    period: "Jun – Jul 2026",
    role: "Built end to end: backend, MCP server, streaming UI, embeddable widget",
    summary:
      "A chat tool that answers plain-English questions about Y Combinator startups from a live MariaDB database, streaming back tables, charts and full reports as the model writes them. Now live in production.",
    stack: ["PHP 8.3", "JavaScript", "MariaDB", "Model Context Protocol", "Server-Sent Events", "Chart.js", "Apache"],
    links: [{ label: "Live in production", href: "https://hackerman.alphaventure.com" }],
    image: {
      src: "/work/hackerman.webp",
      alt: "Hackerman chat answering a question about hiring fintech startups in YC W24 and S24, with a table, a bar chart and a written analysis",
      caption: "Hackerman in production: one plain-English question returns a table, a chart and a written analysis.",
    },
    metrics: [
      { value: "61s → 24s", label: "first response time" },
      { value: "5,998", label: "startups queryable" },
      { value: "1", label: "shared codebase for app and widget" },
    ],
    problem: [
      "The team had a rich database of Y Combinator startups, but answering a question like \"which fintech startups in W24 and S24 are hiring with fewer than 50 people?\" meant writing SQL by hand.",
      "Letting a language model query the database directly is risky: a model-written query could modify data, or run something heavy enough to overload a shared production server.",
    ],
    approach: [
      {
        heading: "MCP server as the only door to the data",
        body: "I designed a Model Context Protocol server as the model's single path to the database. It permits read-only queries with result-size caps and runs on low-permission database accounts, so even a bad model-written query cannot alter or overload the data.",
      },
      {
        heading: "Streaming answers, not spinners",
        body: "Responses stream to the browser over Server-Sent Events as the model writes them, rendering markdown, tables and Chart.js charts progressively, so users see useful output within seconds.",
      },
      {
        heading: "Profiling the slow first message",
        body: "The first message took 61 seconds. Instead of blaming the model, I traced the delay to startup work that was deferred until the first request. Moving that work to server boot cut it to 24 seconds.",
      },
      {
        heading: "One codebase, two surfaces",
        body: "The same chat ships as an embeddable widget on the team's public site, served from one shared copy of the code so the widget and the standalone app can never drift out of sync.",
      },
    ],
    diagram: {
      kind: "flow",
      caption: "Request path: the model can only reach data through the read-only MCP server.",
      rows: [
        [
          { title: "Browser", note: "Standalone app or embedded widget" },
          { title: "PHP 8.3 app", note: "Streams via SSE" },
          { title: "LLM", note: "Plans the query" },
        ],
        [
          { title: "MCP server", note: "Read-only, size caps", highlight: true },
          { title: "Low-permission account", note: "Least privilege" },
          { title: "MariaDB", note: "5,998 startups" },
        ],
      ],
    },
    results: [
      "Live in production at hackerman.alphaventure.com and handed over to AlphaVenture's engineers.",
      "First response time cut from 61s to 24s.",
      "No model-written query can write to or overload the database, by design rather than by prompt.",
    ],
    lessons: [
      "Measure before optimising: the slow part was not the model at all.",
      "Put safety in the architecture (permissions, caps) rather than relying on the prompt.",
    ],
  },
  {
    slug: "baymax-ai-career-copilot",
    title: "Baymax: an AI career copilot",
    kicker: "AI Mustaqbil 2.0 Hackathon · Multi-agent AI",
    period: "Hackathon project",
    role: "Built the career-roadmap agent in a five-agent system",
    summary:
      "Baymax generates realistic 90-day learning plans. Instead of letting an LLM invent a schedule, a constraint solver validates prerequisites and timing first, and the LLM only turns the validated plan into readable guidance.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "Groq LLaMA 3.3-70B", "Whisper", "Mem0"],
    links: [],
    metrics: [
      { value: "5", label: "cooperating agents" },
      { value: "17", label: "API endpoints" },
      { value: "90-day", label: "validated roadmaps" },
    ],
    problem: [
      "LLMs happily produce learning plans that schedule advanced topics before their prerequisites, or cram unrealistic workloads into a week.",
      "A career tool that gives confident but impossible advice does more harm than good.",
    ],
    approach: [
      {
        heading: "Constraint satisfaction before generation",
        body: "The roadmap agent models topics, prerequisites and weekly capacity as a constraint problem, prunes it with AC-3 arc consistency, then uses backtracking search to find a valid schedule.",
      },
      {
        heading: "LLM as the writer, not the planner",
        body: "Only after the plan is proven valid does LLaMA 3.3-70B (via Groq) turn it into friendly, readable guidance.",
      },
      {
        heading: "Responsible-AI guardrails",
        body: "Per-IP rate limiting, PII-free logging, explainable scoring and output fallbacks so the system degrades gracefully instead of failing silently.",
      },
    ],
    diagram: {
      kind: "flow",
      caption: "My agent's pipeline: the solver guarantees the plan is valid before the LLM writes it up.",
      rows: [
        [
          { title: "User goals", note: "Voice (Whisper) or text" },
          { title: "Memory", note: "Mem0 profile" },
          { title: "Roadmap agent", note: "My part", highlight: true },
        ],
        [
          { title: "AC-3", note: "Prune impossible options" },
          { title: "Backtracking", note: "Find a valid schedule" },
          { title: "LLaMA 3.3-70B", note: "Write readable guidance" },
        ],
      ],
    },
    results: [
      "Deployed and live as part of a five-agent system with a 17-endpoint API.",
      "Every generated roadmap respects prerequisites and realistic weekly load.",
    ],
    lessons: [
      "Classic AI (search, constraint solving) and LLMs are strongest together.",
      "Guardrails are a product feature, not an afterthought.",
    ],
  },
  {
    slug: "neurodetect",
    title: "NeuroDetect: catching my own model cheating",
    kicker: "Machine Learning · Parkinson's disease detection",
    period: "Independent project",
    role: "Trained, audited and re-evaluated the model",
    summary:
      "A TensorFlow/Keras classifier hit 0.91 ROC-AUC. Instead of shipping the headline number, I audited it for target leakage, found it, and published the honest result.",
    stack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Jupyter"],
    links: [{ label: "Code on GitHub", href: "https://github.com/Aiza166/NeuroDetect" }],
    metrics: [
      { value: "0.91", label: "inflated ROC-AUC" },
      { value: "0.53", label: "honest ROC-AUC" },
      { value: "3 / 32", label: "leaking features found" },
    ],
    problem: [
      "The model scored 0.91 ROC-AUC on clinical data, which looked great but felt too easy.",
      "A model that only works because the answer is hidden in its inputs is useless in the real world.",
    ],
    approach: [
      {
        heading: "Auditing for target leakage",
        body: "I found that 3 of the 32 features were clinical assessments of Parkinson's itself, effectively giving the model the answer.",
      },
      {
        heading: "Retraining without the leaks",
        body: "Removing them dropped ROC-AUC to 0.74. Removing motor-symptom flags as well collapsed it to 0.53, no better than chance.",
      },
      {
        heading: "Questioning the data itself",
        body: "Uniform marginal distributions and a maximum inter-feature correlation of just 0.08 showed the dataset was synthetic, which explains why no real signal remained.",
      },
    ],
    diagram: {
      kind: "bars",
      caption: "ROC-AUC as leaking features are removed. 0.5 is a coin flip.",
      bars: [
        { label: "All 32 features", value: 0.91, note: "Includes diagnosis-like features" },
        { label: "Without 3 leaks", value: 0.74, note: "Clinical assessments removed" },
        { label: "Without motor flags", value: 0.53, note: "No better than chance" },
      ],
    },
    results: [
      "Published the honest metrics instead of the inflated headline number.",
      "Identified the dataset as synthetic, saving anyone from building on it.",
    ],
    lessons: [
      "If a result looks too good, it probably is: audit before you celebrate.",
      "Honest negative results are worth more than impressive wrong ones.",
    ],
  },
];

export const getCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
