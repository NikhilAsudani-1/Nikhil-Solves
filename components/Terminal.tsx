export default function Terminal() {
  return (
    <div
      style={{
        background: "#0d1117",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "20px 24px",
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: 13,
        lineHeight: 1.8,
        maxWidth: 520,
        width: "100%",
      }}
    >
      {/* Window controls */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
      </div>

      <div>
        <span style={{ color: "#34d399" }}>❯ </span>
        <span style={{ color: "#f1f5f9" }}>nikhil --status</span>
      </div>
      <div style={{ color: "#94a3b8", paddingLeft: 16 }}>
        → Available for freelance &amp; remote roles
      </div>

      <div style={{ marginTop: 4 }}>
        <span style={{ color: "#34d399" }}>❯ </span>
        <span style={{ color: "#f1f5f9" }}>nikhil --stack</span>
      </div>
      <div style={{ color: "#94a3b8", paddingLeft: 16 }}>
        → SQL · Python · Next.js · Streamlit · Cloudflare
      </div>

      <div style={{ marginTop: 4 }}>
        <span style={{ color: "#34d399" }}>❯ </span>
        <span style={{ color: "#f1f5f9" }}>nikhil --superpower</span>
      </div>
      <div style={{ color: "#94a3b8", paddingLeft: 16 }}>
        → Turns messy data into working products
      </div>

      <div style={{ marginTop: 4 }}>
        <span style={{ color: "#34d399" }}>❯ </span>
        <span className="cursor-blink" />
      </div>
    </div>
  );
}
