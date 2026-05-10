"use client";

import { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

type IconComponent = React.ElementType;

const links: { label: string; icon: IconComponent; href: string; color: string }[] = [
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/nikhil",
    color: "#38bdf8",
  },
  {
    label: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/nikhil",
    color: "#a78bfa",
  },
  {
    label: "Upwork",
    icon: ExternalLink,
    href: "https://upwork.com/freelancers/nikhil",
    color: "#34d399",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:hello@nikhilsolves.com",
    color: "#fb923c",
  },
];

function ContactLink({
  label,
  icon: Icon,
  href,
  color,
}: {
  label: string;
  icon: IconComponent;
  href: string;
  color: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 22px",
        borderRadius: 8,
        border: `1px solid ${hovered ? color : "var(--border)"}`,
        color: hovered ? color : "var(--text-secondary)",
        background: hovered ? `${color}10` : "transparent",
        textDecoration: "none",
        fontSize: 14,
        fontWeight: 500,
        transition: "all 0.15s ease",
      }}
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "96px 24px", textAlign: "center" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            margin: "0 0 12px",
          }}
        >
          Let&apos;s work together.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-secondary)",
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          Available for freelance projects, consulting, and full-time remote
          roles.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {links.map((l) => (
            <ContactLink key={l.label} {...l} />
          ))}
        </div>
      </div>
    </section>
  );
}
