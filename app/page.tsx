"use client";

import { useState } from "react";

interface ProjectModule {
  name: string;
  description: string;
}

interface StatItem {
  label: string;
  value: string;
}

interface Project {
  id: number;
  code: string;
  shortName: string;
  color: string;
  number: string;
  title: string;
  description: string[];
  stats: {
    col1: { header: string; items: StatItem[] };
    col2: { header: string; items: StatItem[] };
    col3: { header: string; items: StatItem[] };
  };
  modules: ProjectModule[];
}

const projects: Project[] = [
  {
    id: 1,
    code: "OL > 01",
    shortName: "PLAN B",
    color: "#D4620A",
    number: "Nr. 1 / 2025",
    title: "Focus. Plan B",
    description: [
      "Plan B is a financial application built on the Merge Stack — a proprietary infrastructure that bridges traditional finance and decentralized protocols. It enables users to manage, grow, and move value across currencies and blockchains with zero friction.",
      "From PIX to crypto, from BRL to Bitcoin, Plan B is the financial layer for people who refuse to be limited by borders or legacy systems.",
    ],
    stats: {
      col1: {
        header: "I — Identity",
        items: [
          { label: "Category", value: "Fintech / DeFi" },
          { label: "Platform", value: "iOS / Android" },
          { label: "Status", value: "Beta" },
          { label: "Launch", value: "2025" },
          { label: "Model", value: "B2C" },
        ],
      },
      col2: {
        header: "II — Finance",
        items: [
          { label: "Networks", value: "4 Chains" },
          { label: "On-ramp", value: "PIX / BRL" },
          { label: "Off-ramp", value: "USDC / BTC" },
          { label: "Swap Speed", value: "< 30 sec" },
          { label: "Custodial", value: "Non-custodial" },
        ],
      },
      col3: {
        header: "III — Stack",
        items: [
          { label: "Mobile", value: "React Native" },
          { label: "Auth", value: "Privy" },
          { label: "Wallets", value: "ZeroDev AA" },
          { label: "Payments", value: "Avenia" },
          { label: "Swaps", value: "Deframe" },
        ],
      },
    },
    modules: [
      { name: "Merge Stack", description: "Cross-Chain Infrastructure" },
      { name: "PIX Integration", description: "BRL On-ramp & Off-ramp / Instant" },
      { name: "Smart Wallets", description: "Account Abstraction / ERC-4337" },
      { name: "Deframe Swaps", description: "BRLA → USDC → cbBTC" },
    ],
  },
  {
    id: 2,
    code: "OL > 02",
    shortName: "POSTCARD",
    color: "#1E4A8A",
    number: "Nr. 2 / 2024",
    title: "Focus. Postcard",
    description: [
      "Postcard is a social experience built for people who want to stay genuinely connected. It cuts through the noise of traditional social media and brings back the joy of sharing real moments — curated, personal, and free from algorithmic distortion.",
      "Built mobile-first with a focus on simplicity, Postcard lets users share their world through clean, honest snapshots. No feeds engineered for addiction. Just people, moments, and meaning.",
    ],
    stats: {
      col1: {
        header: "I — Identity",
        items: [
          { label: "Category", value: "Social App" },
          { label: "Platform", value: "iOS / Android" },
          { label: "Status", value: "Live" },
          { label: "Launch", value: "2024" },
          { label: "Model", value: "Consumer" },
        ],
      },
      col2: {
        header: "II — Reach",
        items: [
          { label: "Downloads", value: "10K+" },
          { label: "Retention D30", value: "68%" },
          { label: "DAU / MAU", value: "42%" },
          { label: "Avg. Session", value: "8.2 min" },
          { label: "Rating", value: "4.8 / 5.0" },
        ],
      },
      col3: {
        header: "III — Stack",
        items: [
          { label: "Mobile", value: "React Native" },
          { label: "Backend", value: "Node.js" },
          { label: "Database", value: "PostgreSQL" },
          { label: "Storage", value: "AWS S3" },
          { label: "CDN", value: "CloudFront" },
        ],
      },
    },
    modules: [
      { name: "Photo Feed", description: "Curated Moments / Real-time" },
      { name: "Stories", description: "Ephemeral Content / 24h Lifecycle" },
      { name: "Direct Messages", description: "Private Conversations" },
      { name: "Explore", description: "Discovery & Recommendations" },
    ],
  },
  {
    id: 3,
    code: "OL > 03",
    shortName: "AXIOM",
    color: "#2D1B4E",
    number: "Nr. 3 / 2025",
    title: "Focus. Axiom",
    description: [
      "Axiom is an intelligent analytics platform that transforms raw operational data into actionable intelligence. Built for operators and decision-makers, it surfaces the insights that matter — before you even know to ask.",
      "With a clean interface and a powerful data engine underneath, Axiom brings enterprise-grade observability to teams that move fast and need answers faster.",
    ],
    stats: {
      col1: {
        header: "I — Identity",
        items: [
          { label: "Category", value: "Analytics" },
          { label: "Platform", value: "Web" },
          { label: "Status", value: "Live" },
          { label: "Launch", value: "2024" },
          { label: "Model", value: "B2B SaaS" },
        ],
      },
      col2: {
        header: "II — Performance",
        items: [
          { label: "Query Speed", value: "< 100 ms" },
          { label: "Data Sources", value: "12+" },
          { label: "Retention", value: "90 days" },
          { label: "Uptime", value: "99.9%" },
          { label: "Users", value: "500+" },
        ],
      },
      col3: {
        header: "III — Stack",
        items: [
          { label: "Frontend", value: "Next.js" },
          { label: "Backend", value: "Go" },
          { label: "Database", value: "ClickHouse" },
          { label: "Infra", value: "AWS / K8s" },
          { label: "Auth", value: "Clerk" },
        ],
      },
    },
    modules: [
      { name: "Dashboards", description: "Real-time Data Visualization" },
      { name: "Query Engine", description: "SQL & No-SQL Interface" },
      { name: "Alert System", description: "Threshold-based Notifications" },
      { name: "API Access", description: "Programmatic Ingestion Layer" },
    ],
  },
  {
    id: 4,
    code: "OL > 04",
    shortName: "ALPHA FINDER",
    color: "#1A3B2E",
    number: "Nr. 4 / 2025",
    title: "Focus. Alpha Finder",
    description: [
      "Alpha Finder is a signal intelligence platform for investors and traders who want an edge. It aggregates on-chain data, social sentiment, and market flows to surface early signals — before they become obvious.",
      "Built for the next generation of market participants, Alpha Finder combines AI-driven pattern recognition with real-time data feeds to identify opportunities at the edge of mainstream awareness.",
    ],
    stats: {
      col1: {
        header: "I — Identity",
        items: [
          { label: "Category", value: "Trading / AI" },
          { label: "Platform", value: "Web / API" },
          { label: "Status", value: "Development" },
          { label: "Launch", value: "2025" },
          { label: "Model", value: "Subscription" },
        ],
      },
      col2: {
        header: "II — Intelligence",
        items: [
          { label: "Data Sources", value: "20+" },
          { label: "Signal Types", value: "On-chain & Social" },
          { label: "Latency", value: "< 500 ms" },
          { label: "Signal Accuracy", value: "73%" },
          { label: "Coverage", value: "50+ Tokens" },
        ],
      },
      col3: {
        header: "III — Stack",
        items: [
          { label: "Frontend", value: "Next.js" },
          { label: "AI Layer", value: "Claude / GPT" },
          { label: "Data", value: "The Graph" },
          { label: "Infra", value: "Vercel / AWS" },
          { label: "Streaming", value: "WebSockets" },
        ],
      },
    },
    modules: [
      { name: "Signal Feed", description: "Real-time Alpha Detection" },
      { name: "On-chain Scanner", description: "Wallet & Contract Monitoring" },
      { name: "Sentiment Engine", description: "Social & News Analysis" },
      { name: "Portfolio Tracker", description: "Position Management Layer" },
    ],
  },
];

const sans = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const serif = "var(--font-garamond), Georgia, serif";

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  const project = projects[selected];
  const hasPrev = selected > 0;
  const hasNext = selected < projects.length - 1;

  function prev() {
    if (hasPrev) setSelected((s) => s - 1);
  }
  function next() {
    if (hasNext) setSelected((s) => s + 1);
  }

  return (
    <main className="flex h-screen overflow-hidden" style={{ fontFamily: sans }}>
      {/* ─── LEFT PANEL ─── */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: "44%",
          backgroundColor: project.color,
          transition: "background-color 0.5s ease",
        }}
      >
        {/* Prev arrow — left edge */}
        <button
          onClick={prev}
          aria-label="Previous project"
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 72,
            background: "rgba(255,255,255,0.10)",
            border: "none",
            borderRadius: "0 6px 6px 0",
            color: hasPrev ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)",
            cursor: hasPrev ? "pointer" : "default",
            transition: "background 0.15s ease, color 0.15s ease",
          }}
          onMouseEnter={(e) => {
            if (hasPrev)
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.20)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.10)";
          }}
        >
          <ChevronLeft />
        </button>

        {/* Header */}
        <div className="flex justify-between items-start px-6 pt-6 pb-5" style={{ paddingLeft: 48 }}>
          <div className="leading-snug">
            <span style={{ fontWeight: 700, color: "white", fontSize: 17, letterSpacing: "-0.01em" }}>
              Original Labs
            </span>
            <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.55)", fontSize: 17, marginLeft: 8 }}>
              {project.code.replace("OL", "")} ({project.shortName})
            </span>
          </div>

          {/* Project tabs */}
          <div className="flex gap-4 items-center" style={{ paddingTop: 2 }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelected(i)}
                style={{
                  fontFamily: sans,
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  color: i === selected ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.38)",
                  fontWeight: i === selected ? 600 : 400,
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "color 0.15s ease",
                }}
              >
                0{p.id}
              </button>
            ))}
          </div>
        </div>

        {/* Stats grid — 3 columns with hoverable cells */}
        <div
          className="flex"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.18)",
            flex: "1 1 auto",
            overflow: "hidden",
          }}
        >
          {[project.stats.col1, project.stats.col2, project.stats.col3].map((col, ci) => (
            <div
              key={ci}
              className="flex flex-col"
              style={{
                flex: 1,
                borderRight: ci < 2 ? "1px solid rgba(255,255,255,0.18)" : "none",
              }}
            >
              {/* Column header */}
              <div
                style={{
                  padding: "12px 16px",
                  fontSize: 11,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.48)",
                  borderBottom: "1px solid rgba(255,255,255,0.18)",
                  userSelect: "none",
                }}
              >
                {col.header}
              </div>

              {/* Data cells */}
              {col.items.map((item, i) => {
                const cellKey = `${ci}-${i}`;
                const isHovered = hoveredCell === cellKey;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredCell(cellKey)}
                    onMouseLeave={() => setHoveredCell(null)}
                    style={{
                      padding: "13px 16px",
                      borderBottom: "1px solid rgba(255,255,255,0.18)",
                      backgroundColor: isHovered
                        ? "rgba(255,255,255,0.13)"
                        : "transparent",
                      transition: "background-color 0.12s ease",
                      cursor: "default",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: isHovered ? 600 : 500,
                        color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.92)",
                        lineHeight: 1.3,
                        transition: "font-weight 0.12s ease, color 0.12s ease",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: isHovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.50)",
                        marginTop: 3,
                        transition: "color 0.12s ease",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Decorative sphere */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%) translateY(55%)",
            background:
              "radial-gradient(circle at 44% 38%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.09) 42%, transparent 68%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        />

        {/* Bottom bar */}
        <div
          className="relative z-10 flex justify-between items-center py-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingLeft: 48,
            paddingRight: 24,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.60)", fontSize: 12 }}>
            Project Index
          </span>
          <svg width="15" height="15" fill="none" stroke="rgba(255,255,255,0.50)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* ─── RIGHT PANEL ─── */}
      <div
        className="relative flex flex-col overflow-y-auto"
        style={{ width: "56%", backgroundColor: "#F8F7F4", fontFamily: serif }}
      >
        {/* Next arrow — right edge */}
        <button
          onClick={next}
          aria-label="Next project"
          style={{
            position: "fixed",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 72,
            background: hasNext ? "rgba(0,0,0,0.07)" : "rgba(0,0,0,0.03)",
            border: "none",
            borderRadius: "6px 0 0 6px",
            color: hasNext ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.18)",
            cursor: hasNext ? "pointer" : "default",
            transition: "background 0.15s ease, color 0.15s ease",
          }}
          onMouseEnter={(e) => {
            if (hasNext)
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = hasNext
              ? "rgba(0,0,0,0.07)"
              : "rgba(0,0,0,0.03)";
          }}
        >
          <ChevronRight />
        </button>

        <div className="flex-1 px-12 py-8" style={{ paddingRight: 56 }}>
          {/* Nr. / Year */}
          <div
            style={{
              fontFamily: sans,
              fontSize: 11,
              color: "#9CA3AF",
              letterSpacing: "0.04em",
              marginBottom: 12,
            }}
          >
            {project.number}
          </div>
          <hr style={{ borderColor: "#D1D5DB", marginBottom: 32 }} />

          {/* Title */}
          <h2
            style={{
              fontFamily: serif,
              fontSize: 40,
              fontWeight: 400,
              color: "#111827",
              lineHeight: 1.15,
              marginBottom: 28,
            }}
          >
            {project.title}
          </h2>

          {/* Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {project.description.map((para, i) => (
              <p key={i} style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.75, color: "#4B5563", margin: 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Active Modules */}
          <div style={{ marginTop: 56 }}>
            <div
              style={{
                fontFamily: sans,
                fontSize: 10,
                letterSpacing: "0.22em",
                color: "#9CA3AF",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Active Modules
            </div>

            <div>
              {project.modules.map((mod, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-4"
                  style={{
                    borderBottom: "1px solid #E5E7EB",
                    padding: "16px 0",
                    cursor: "default",
                  }}
                  onMouseEnter={() => setHoveredModule(i)}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <span
                    style={{
                      fontFamily: sans,
                      fontSize: 13,
                      color: hoveredModule === i ? project.color : "#9CA3AF",
                      transition: "color 0.15s ease",
                      userSelect: "none",
                    }}
                  >
                    ↓
                  </span>
                  <span
                    style={{
                      fontFamily: sans,
                      fontSize: 14,
                      fontWeight: 600,
                      color: hoveredModule === i ? project.color : "#111827",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {mod.name}
                  </span>
                  <span style={{ fontFamily: serif, fontSize: 13, fontStyle: "italic", color: "#9CA3AF" }}>
                    {mod.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-12 py-5 flex justify-between items-center"
          style={{ borderTop: "1px solid #E5E7EB" }}
        >
          <span style={{ fontFamily: sans, fontSize: 11, color: "#9CA3AF" }}>
            Original Labs — A laboratory for products and applications
          </span>
          <span style={{ fontFamily: sans, fontSize: 11, color: "#9CA3AF" }}>
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
