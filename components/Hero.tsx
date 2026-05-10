"use client";

import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section
      style={{ position: "relative", padding: "96px 24px 80px", overflow: "hidden" }}
    >
      {/* Gradient orb */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,var(--orb-opacity)) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 40,
              height: 2,
              background: "linear-gradient(to right, #38bdf8, transparent)",
              boxShadow: "0 0 8px rgba(56,189,248,0.6)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 12,
              color: "#38bdf8",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Part Analyst, Part Builder
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          I analyze data.
          <br />
          <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
            Then I build what&apos;s missing.
          </span>
        </h1>

        {/* Description */}
        <p
          style={{
            marginTop: 24,
            maxWidth: 560,
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
        >
          Senior Data Analyst who writes production SQL, builds Streamlit apps,
          ships Slack bots, and automates everything that shouldn&apos;t be done
          by hand.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              borderRadius: 8,
              background: "#38bdf8",
              color: "#0a0f1a",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
            }
          >
            See my work ↓
          </a>
          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              borderRadius: 8,
              border: "1px solid var(--border-hover)",
              color: "#38bdf8",
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
              background: "transparent",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "var(--accent-dim)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "transparent")
            }
          >
            Download resume
          </a>
        </div>

        {/* Terminal */}
        <div style={{ marginTop: 56 }}>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
