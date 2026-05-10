import ProjectCard from "./ProjectCard";

const projects = [
  {
    problem: "4 weekly reports built manually every Monday",
    name: "Automated Reporting Hub",
    description:
      "Built a Streamlit app inside Snowflake that generates weekly KPI reports, data checks, and monthly rollups — replacing 4 separate manual Excel workflows with one-click downloads.",
    metric: "12 hrs",
    metricLabel: "saved per week",
    tags: [
      { label: "Snowflake", color: "#38bdf8" },
      { label: "Python", color: "#a78bfa" },
      { label: "Streamlit", color: "#34d399" },
      { label: "lxml", color: "#94a3b8" },
    ],
  },
  {
    problem: "No visibility into team workload and capacity",
    name: "Workload Intelligence Dashboard",
    description:
      "Designed and built a capacity tracking system using Asana API data — weighted throughput scoring, load ratios, and overdue signals — deployed on Vercel with automated daily refresh.",
    metric: "8-week",
    metricLabel: "rolling analytics",
    tags: [
      { label: "Next.js", color: "#38bdf8" },
      { label: "TypeScript", color: "#a78bfa" },
      { label: "Asana API", color: "#fb923c" },
      { label: "Vercel", color: "#34d399" },
    ],
  },
  {
    problem: "No safe channel for anonymous team feedback",
    name: "Anonymous Feedback Slack Bot",
    description:
      "Shipped a Slack bot on Cloudflare Workers — zero cold start, modal-based input, threaded replies, three feedback categories. From idea to production in a weekend.",
    metric: "0 ms",
    metricLabel: "cold start",
    tags: [
      { label: "Cloudflare Workers", color: "#fb923c" },
      { label: "Slack API", color: "#34d399" },
      { label: "JavaScript", color: "#38bdf8" },
    ],
  },
  {
    problem: "Competitive intelligence was manual and inconsistent",
    name: "AI-Powered Daily Intel Monitor",
    description:
      "Automated a daily competitive intelligence system using Gemini API with Google Search grounding — auto-appends insights to a running document every morning at 8:30am.",
    metric: "Daily",
    metricLabel: "auto-generated",
    tags: [
      { label: "Gemini API", color: "#a78bfa" },
      { label: "Apps Script", color: "#34d399" },
      { label: "Google Docs", color: "#38bdf8" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 13,
              color: "var(--accent-interactive)",
              whiteSpace: "nowrap",
            }}
          >
            01 / Case files
          </span>
          <div className="section-line" />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
