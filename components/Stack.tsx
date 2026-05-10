"use client";

import { useState } from "react";

const categories = [
  {
    dot: "#38bdf8",
    name: "Analyze",
    items: ["SQL", "Snowflake", "Tableau", "ThoughtSpot", "Alteryx", "Excel"],
    itemColor: "#38bdf8",
  },
  {
    dot: "#a78bfa",
    name: "Build",
    items: ["Python", "Streamlit", "Next.js", "Apps Script", "LaTeX"],
    itemColor: "#a78bfa",
  },
  {
    dot: "#34d399",
    name: "Automate",
    items: ["Gemini API", "Slack Bots", "Cron Jobs", "Asana API", "Gmail SMTP"],
    itemColor: "#34d399",
  },
  {
    dot: "#fb923c",
    name: "Ship",
    items: ["Vercel", "GitHub", "Cloudflare", "Snowflake EAI"],
    itemColor: "#fb923c",
  },
];

function StackCard({
  dot,
  name,
  items,
  itemColor,
}: {
  dot: string;
  name: string;
  items: string[];
  itemColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: 12,
        padding: "24px 24px 20px",
        transition: "border-color 0.2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: dot,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {name}
        </span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map((item) => (
          <span
            key={item}
            className="accent-pill"
            style={{
              borderColor: `${itemColor}50`,
              color: "var(--text-secondary)",
              background: `${itemColor}0d`,
              transition: "color 0.15s ease, border-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.color = itemColor;
              el.style.borderColor = itemColor;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.color = "var(--text-secondary)";
              el.style.borderColor = `${itemColor}50`;
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            02 / The stack
          </span>
          <div className="section-line" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {categories.map((c) => (
            <StackCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
