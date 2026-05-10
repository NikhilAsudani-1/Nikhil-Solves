export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "24px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          Built by Nikhil · 2026
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span className="pulse-dot" />
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 12,
              color: "var(--text-muted)",
            }}
          >
            Available for work
          </span>
        </div>
      </div>
    </footer>
  );
}
