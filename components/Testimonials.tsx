const testimonials = [
  {
    quote:
      "Nikhil built something in two days that we'd been trying to scope out for two months. Absolute unit.",
    name: "Jordan M.",
    role: "Director of Operations",
    initials: "JM",
    color: "#38bdf8",
  },
  {
    quote:
      "The Slack bot completely changed how our team gives feedback. People actually use it now.",
    name: "Priya S.",
    role: "Head of People",
    initials: "PS",
    color: "#a78bfa",
  },
  {
    quote:
      "I didn't know a data analyst could also ship production-grade tooling. Nikhil rewired my expectations.",
    name: "Alex T.",
    role: "VP of Engineering",
    initials: "AT",
    color: "#34d399",
  },
  {
    quote:
      "He automated the one report I dreaded every Monday morning. I nearly cried. In a good way.",
    name: "Sam K.",
    role: "Senior Analyst",
    initials: "SK",
    color: "#fb923c",
  },
  {
    quote:
      "Nikhil doesn't just solve the problem you described — he solves the problem you forgot to mention.",
    name: "Taylor R.",
    role: "Product Manager",
    initials: "TR",
    color: "#38bdf8",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
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
            03 / Wall of fame
          </span>
          <div className="section-line" />
        </div>
      </div>

      {/* Scrolling track — full width */}
      <div
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          paddingInline: 24,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingBottom: 8,
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              flexShrink: 0,
              scrollSnapAlign: "start",
              width: 320,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "28px 24px 24px",
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 64,
                lineHeight: 0.6,
                color: t.color,
                opacity: 0.25,
                marginBottom: 16,
                userSelect: "none",
              }}
            >
              &ldquo;
            </div>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                fontStyle: "italic",
                margin: "0 0 20px",
              }}
            >
              {t.quote}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: `${t.color}25`,
                  border: `1px solid ${t.color}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  fontWeight: 500,
                  color: t.color,
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
