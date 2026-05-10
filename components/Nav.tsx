"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Used only in event handlers (never in SSR markup), so no hydration risk.
  const accent = theme === "light" ? "#0284c7" : "#38bdf8";

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid var(--border)`,
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--bg-base) 85%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 20,
            fontWeight: 500,
            color: "var(--text-primary)",
            textDecoration: "none",
            // letterSpacing: "-0.02em",
          }}
        >
          nikhil<span style={{ color: "var(--accent-interactive)" }}>solves</span>
        </a>

        {/* Links + Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["work", "stack", "build log", "let's talk"].map((link) => {
            const href =
              link === "work"
                ? "#work"
                : link === "stack"
                ? "#stack"
                : link === "build log"
                ? "#log"
                : "#contact";
            return (
              <a
                key={link}
                href={href}
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 14,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = accent)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    "var(--text-muted)")
                }
              >
                {link}
              </a>
            );
          })}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: 8,
                border: `1px solid var(--border)`,
                background: "var(--bg-card)",
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "border-color 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                btn.style.borderColor = "var(--border-hover)";
                btn.style.color = accent;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.style.borderColor = "var(--border)";
                btn.style.color = "var(--text-secondary)";
              }}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
