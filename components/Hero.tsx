"use client";

import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section
      style={{ position: "relative", padding: "clamp(48px, 8vw, 96px) 24px 80px", overflow: "hidden" }}
    >
      {/* Gradient orb */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(300px, 90vw, 700px)",
          height: "clamp(250px, 60vw, 500px)",
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
        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          Part Analyst, Part Builder.
        </h1>

        {/* Description */}
        <p
          style={{
            marginTop: 20,
            maxWidth: 800,
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
        >
          Hi, I&apos;m Nikhil - Analyst by Day, Builder by Night.
        </p>

        {/* Terminal */}
        <div style={{ marginTop: 36 }}>
          <Terminal />
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              borderRadius: 8,
              background: "var(--accent-interactive)",
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
            href="/Nikhil Asudani Resume.pdf"
            download="Nikhil Asudani Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              borderRadius: 8,
              border: "1px solid var(--border-hover)",
              color: "var(--accent-interactive)",
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
      </div>
    </section>
  );
}
