"use client";

import { useState } from "react";
import type { Post } from "@/lib/posts";

const tagColors: Record<string, string> = {
  Snowflake: "#38bdf8",
  Python: "#a78bfa",
  Streamlit: "#34d399",
  Automation: "#fb923c",
  "Cloudflare Workers": "#fb923c",
  "Slack API": "#34d399",
  JavaScript: "#38bdf8",
  SQL: "#38bdf8",
  "Data Engineering": "#a78bfa",
  "Apps Script": "#34d399",
};

function BlogRow({ post }: { post: Post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/blog/${post.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        gap: 32,
        padding: "20px 0",
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
        paddingLeft: hovered ? 8 : 0,
        transition: "padding-left 0.15s ease",
        alignItems: "flex-start",
      }}
    >
      {/* Date */}
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 12,
          color: "var(--text-muted)",
          whiteSpace: "nowrap",
          paddingTop: 3,
          minWidth: 88,
        }}
      >
        {post.date}
      </span>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: hovered ? "#38bdf8" : "var(--text-primary)",
            transition: "color 0.15s ease",
            marginBottom: 6,
            fontFamily: "var(--font-space-grotesk), sans-serif",
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            marginBottom: 10,
            lineHeight: 1.5,
          }}
        >
          {post.excerpt}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="accent-pill"
              style={{
                borderColor: `${tagColors[tag] ?? "#94a3b8"}50`,
                color: tagColors[tag] ?? "#94a3b8",
                background: `${tagColors[tag] ?? "#94a3b8"}0d`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function BuildLog({ posts }: { posts: Post[] }) {
  return (
    <section id="log" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
              color: "#38bdf8",
              whiteSpace: "nowrap",
            }}
          >
            04 / Build log
          </span>
          <div className="section-line" />
        </div>

        <div>
          {posts.map((post) => (
            <BlogRow key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
