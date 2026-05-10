"use client";

import { useState } from "react";

type Project = {
  problem: string;
  name: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: { label: string; color: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: 12,
        padding: "28px 28px 24px",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Top accent line on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(to right, #38bdf8, transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Problem label */}
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: 10,
        }}
      >
        Problem: {project.problem}
      </div>

      {/* Project name */}
      <h3
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: 20,
          fontWeight: 600,
          color: "var(--text-primary)",
          margin: "0 0 10px",
          letterSpacing: "-0.02em",
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.65,
          color: "var(--text-secondary)",
          margin: "0 0 20px",
        }}
      >
        {project.description}
      </p>

      {/* Impact metric */}
      <div style={{ marginBottom: 20 }}>
        <span
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 28,
            fontWeight: 700,
            color: "#38bdf8",
            letterSpacing: "-0.03em",
          }}
        >
          {project.metric}
        </span>
        <span
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            marginLeft: 8,
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          {project.metricLabel}
        </span>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className="accent-pill"
            style={{
              borderColor: tag.color,
              color: tag.color,
              background: `${tag.color}14`,
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
