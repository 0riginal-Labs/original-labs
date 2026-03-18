"use client";

import { useState, useEffect } from "react";

interface StatItem {
  label: string;
  value: string;
}

interface ProjectModule {
  name: string;
  description: string;
  detail: string;
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
  website?: string;
  websiteLabel?: string;
}

const projects: Project[] = [
  {
    id: 1,
    code: "OL > 01",
    shortName: "PLAN B",
    color: "#D4620A",
    number: "Nr. 1 / 2025",
    title: "Plan B",
    description: [
      "A crypto wallet built for Brazilians who want to protect their purchasing power without understanding crypto. Plan B turns any PIX transfer into dollar savings — and lets you spend them anywhere with a Visa card.",
      "No seed phrases. No complexity. Just a simple way to hold USD and Bitcoin while the Real devalues.",
    ],
    stats: {
      col1: {
        header: "I — Product",
        items: [
          { label: "Category", value: "Crypto Wallet" },
          { label: "Platform", value: "iOS" },
          { label: "Stage", value: "Beta" },
          { label: "Card", value: "Visa via Gnosis Pay" },
        ],
      },
      col2: {
        header: "II — Finance",
        items: [
          { label: "On-ramp", value: "PIX → USDC" },
          { label: "Chains", value: "Polygon + Base" },
          { label: "Swap", value: "< 30 sec" },
          { label: "Custodial", value: "Non-custodial" },
          { label: "KYC", value: "Gnosis Pay PSE" },
        ],
      },
      col3: {
        header: "III — Stack",
        items: [
          { label: "Auth", value: "Privy" },
          { label: "AA", value: "ZeroDev ERC-4337" },
          { label: "DEX", value: "Velora / ParaSwap" },
          { label: "Backend", value: "Node.js + PostgreSQL" },
        ],
      },
    },
    modules: [
      {
        name: "PIX Integration",
        description: "BRL On-ramp / Avenia Rails",
        detail:
          "Deposit any amount via PIX and receive USDC on Polygon in seconds. Your BRL enters as stablecoin — no bank account, no exchange account, no friction. Send to any PIX key directly from your dollar balance.",
      },
      {
        name: "Virtual Visa Card",
        description: "Spend Crypto Anywhere / Gnosis Pay",
        detail:
          "A real Visa card linked directly to your on-chain wallet. Spend USDC anywhere Visa is accepted. Settlements happen on-chain via Gnosis Pay — no intermediary custodian holding your funds.",
      },
      {
        name: "Smart Wallets",
        description: "Embedded / No Seed Phrases / ZeroDev",
        detail:
          "Wallets created silently via Privy — email OTP or Google sign-in, no seed phrases, no complexity. ZeroDev powers gasless transactions on Polygon so users never touch gas tokens.",
      },
      {
        name: "Cross-chain Swaps",
        description: "BRLA → USDC → cbBTC / Velora",
        detail:
          "Swap between stablecoins and Bitcoin in under 30 seconds across Polygon, Base, and Gnosis Chain. Powered by Velora (ParaSwap) DEX aggregation — always best-price routing.",
      },
    ],
    website: "https://planb.army",
    websiteLabel: "planb.army",
  },
  {
    id: 2,
    code: "OL > 02",
    shortName: "POSTCARD",
    color: "#1E4A8A",
    number: "Nr. 2 / 2024",
    title: "Postcard",
    description: [
      "A travel social app for iOS where every check-in builds your personal atlas. Postcard is Google Maps with a soul — not Instagram. You review places, collect badges, and map the world you've actually seen.",
      "A 3D globe, 12 place categories, and an AI travel companion named Atlas. Built for people who travel to remember.",
    ],
    stats: {
      col1: {
        header: "I — Platform",
        items: [
          { label: "Category", value: "Travel Social" },
          { label: "Platform", value: "iOS 16+" },
          { label: "Engine", value: "SwiftUI" },
          { label: "Stage", value: "Phase 3" },
        ],
      },
      col2: {
        header: "II — Experience",
        items: [
          { label: "3D Globe", value: "SceneKit" },
          { label: "Categories", value: "12 Place Types" },
          { label: "AI", value: "Atlas (Grok)" },
          { label: "Auth", value: "Face ID / Touch ID" },
        ],
      },
      col3: {
        header: "III — Services",
        items: [
          { label: "Database", value: "Firebase Firestore" },
          { label: "Maps", value: "MapKit + CoreLocation" },
          { label: "Notifications", value: "FCM" },
          { label: "Crash", value: "Crashlytics" },
        ],
      },
    },
    modules: [
      {
        name: "3D Globe",
        description: "Personal Atlas / SceneKit",
        detail:
          "An interactive 3D globe built with SceneKit that lights up every country you've visited. Each check-in paints your atlas — track your global coverage percentage and unlock continent badges as you explore.",
      },
      {
        name: "Travel Reviews",
        description: "12 Categories / Geotagged",
        detail:
          "Write honest reviews of restaurants, hotels, beaches, museums, parks, and 7 more place categories. Reviews are geotagged, searchable by the community, and linked directly to MapKit coordinates.",
      },
      {
        name: "Atlas — AI Assistant",
        description: "Powered by Grok (xAI)",
        detail:
          "Your personal travel companion. Ask Atlas anything about destinations, get recommendations tailored to your taste profile and travel history. Full chat history with context retention across sessions.",
      },
      {
        name: "Destination Badges",
        description: "Gamification / Auto-generated",
        detail:
          "An achievement layer that auto-generates badges based on your visit diversity — from first restaurant review to full-continent explorer. Rankings, milestones, and social sharing built in.",
      },
    ],
    websiteLabel: "iOS App",
  },
  {
    id: 3,
    code: "OL > 03",
    shortName: "AXIOM",
    color: "#2D1B4E",
    number: "Nr. 3 / 2024",
    title: "Axiom",
    description: [
      "An AI investment analysis platform that covers 170+ assets across B3, NASDAQ, crypto, and precious metals. Axiom surfaces BUY, HOLD, or SELL signals — with a confidence thermometer and full reasoning.",
      "Not a screener. Not a news aggregator. An AI analyst that reads the data, forms an opinion, and tells you straight.",
    ],
    stats: {
      col1: {
        header: "I — Coverage",
        items: [
          { label: "B3 Stocks", value: "35 Equities" },
          { label: "US Stocks", value: "~80 (NDX + Dow)" },
          { label: "Crypto", value: "Top 50" },
          { label: "Metals", value: "Gold / Silver / Pt / Pd" },
        ],
      },
      col2: {
        header: "II — AI Layer",
        items: [
          { label: "Signal", value: "BUY / HOLD / SELL" },
          { label: "Total Assets", value: "170+" },
          { label: "Latency", value: "~5 sec" },
          { label: "Language", value: "PT-BR + EN" },
          { label: "Version", value: "v2.0 Live" },
        ],
      },
      col3: {
        header: "III — Stack",
        items: [
          { label: "Frontend", value: "Next.js 16" },
          { label: "Backend", value: "FastAPI + Python" },
          { label: "Deploy", value: "Vercel + Railway" },
          { label: "Auth", value: "Clerk" },
        ],
      },
    },
    modules: [
      {
        name: "AI Verdicts",
        description: "BUY / HOLD / SELL / Thermometer",
        detail:
          "AI-generated investment signals with a confidence thermometer for every asset in the universe. Anti-sycophancy rules ensure no soft verdicts — a 7/10 score means investable, not just interesting.",
      },
      {
        name: "Multi-asset Universe",
        description: "170+ Assets / 4 Markets",
        detail:
          "35 B3 equities, ~80 US stocks (NASDAQ-100 + Dow 30), top 50 cryptocurrencies by market cap, and 4 precious metals. Real-time data via Yahoo Finance and CoinGecko with in-memory TTL caching.",
      },
      {
        name: "Market Intelligence",
        description: "News / Charts / Fundamentals",
        detail:
          "Per-asset news feed, price history charts from 1D to 1Y (via Recharts), and fundamental data in a single clean view. Bilingual — English and Portuguese — with full data parity.",
      },
      {
        name: "Portfolio Tracker",
        description: "P&L / Rebalancing / v3.0",
        detail:
          "Track positions across all asset classes with AI-powered rebalancing suggestions. P&L attribution, performance analytics, and personalized morning briefings scheduled for the v3.0 roadmap.",
      },
    ],
    website: "https://axiom-originallabs.vercel.app",
    websiteLabel: "axiom-originallabs.vercel.app",
  },
  {
    id: 4,
    code: "OL > 04",
    shortName: "ALPHA",
    color: "#1A3B2E",
    number: "Nr. 4 / 2025",
    title: "Alpha",
    description: [
      "A startup intelligence tool. Give Alpha an idea — it scans Reddit, X, Hacker News, and the open web in real-time, then returns a comprehensive report: pain points, ICPs, competitive risks, unit economics, and a paste-ready PRD.",
      "7 kill criteria filters, anti-sycophancy rules, and a $0.99/month paywall after the first free analysis.",
    ],
    stats: {
      col1: {
        header: "I — Intelligence",
        items: [
          { label: "Sources", value: "Reddit, X, HN, Web" },
          { label: "Kill Criteria", value: "7 Filters" },
          { label: "Output", value: "PRD + Full Report" },
        ],
      },
      col2: {
        header: "II — Model",
        items: [
          { label: "AI", value: "Grok-4 (xAI)" },
          { label: "Search", value: "Agent Tools API" },
          { label: "Free Tier", value: "1 Analysis" },
          { label: "Paid", value: "$0.99 / month" },
        ],
      },
      col3: {
        header: "III — Stack",
        items: [
          { label: "Framework", value: "Next.js 16" },
          { label: "DB", value: "Supabase" },
          { label: "Auth", value: "Clerk" },
          { label: "Payments", value: "Stripe (pending)" },
        ],
      },
    },
    modules: [
      {
        name: "Pain Point Scanner",
        description: "Reddit, X, HN, Web / Real-time",
        detail:
          "Multi-source scraping via Grok's Agent Tools API. Finds genuine user complaints and unmet needs across Reddit threads, X posts, Hacker News discussions, and open web sources — in real-time, not cached.",
      },
      {
        name: "Alpha Report",
        description: "7-Section Deep Analysis",
        detail:
          "Comprehensive startup analysis: target ICPs, market sizing, competitive landscape, business model options, unit economics, growth strategy, and risk assessment. Calibrated to be honest — not hype.",
      },
      {
        name: "Kill Criteria Engine",
        description: "7 Filters / Anti-hype",
        detail:
          "Flags bad ideas before you waste time on them. Screens for: graveyard markets, FAANG-adjacent risk, no real demand, no willingness to pay, commodity dynamics, micro-niches, and 'Uber for X' syndrome.",
      },
      {
        name: "PRD Generator",
        description: "Paste-ready / Claude Code / Cursor",
        detail:
          "Generates a production-ready Product Requirements Document formatted for AI-assisted development — paste directly into Claude Code or Cursor. Includes tech stack, MVP scope, and go-to-market.",
      },
    ],
    website: "https://alphahunter-taupe.vercel.app",
    websiteLabel: "alphahunter.vercel.app",
  },
];

const sans = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const serif = "var(--font-garamond), Georgia, serif";

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const project = projects[selected];
  const hasPrev = selected > 0;
  const hasNext = selected < projects.length - 1;

  useEffect(() => {
    setExpandedModules([]);
  }, [selected]);

  function prev() {
    if (hasPrev) setSelected((s) => s - 1);
  }
  function next() {
    if (hasNext) setSelected((s) => s + 1);
  }

  function toggleModule(i: number) {
    setExpandedModules((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
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
        {/* Prev arrow */}
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
            width: 32,
            height: 64,
            background: "rgba(255,255,255,0.10)",
            border: "none",
            borderRadius: "0 6px 6px 0",
            color: hasPrev ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.18)",
            cursor: hasPrev ? "pointer" : "default",
            transition: "background 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => {
            if (hasPrev) (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.20)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.10)";
          }}
        >
          <ChevronLeft />
        </button>

        {/* Header */}
        <div className="flex justify-between items-start py-6" style={{ paddingLeft: 44, paddingRight: 24 }}>
          <div className="leading-snug">
            <span style={{ fontWeight: 700, color: "white", fontSize: 17, letterSpacing: "-0.01em" }}>
              Original Labs
            </span>
            <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.52)", fontSize: 17, marginLeft: 8 }}>
              {project.code.replace("OL", "")} ({project.shortName})
            </span>
          </div>
          <div className="flex gap-4 items-center" style={{ paddingTop: 2 }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelected(i)}
                style={{
                  fontFamily: sans,
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  color: i === selected ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.36)",
                  fontWeight: i === selected ? 600 : 400,
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "color 0.15s",
                }}
              >
                0{p.id}
              </button>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div
          className="flex"
          style={{ borderTop: "1px solid rgba(255,255,255,0.18)", flex: "1 1 auto", overflow: "hidden" }}
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
              <div
                style={{
                  padding: "11px 16px",
                  fontSize: 11,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.45)",
                  borderBottom: "1px solid rgba(255,255,255,0.18)",
                  userSelect: "none",
                }}
              >
                {col.header}
              </div>
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
                      backgroundColor: isHovered ? "rgba(255,255,255,0.13)" : "transparent",
                      transition: "background-color 0.12s",
                      cursor: "default",
                    }}
                  >
                    <div style={{ fontSize: 13, fontWeight: isHovered ? 600 : 500, color: "rgba(255,255,255,0.94)", lineHeight: 1.3, transition: "font-weight 0.12s" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 11, color: isHovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.48)", marginTop: 3, transition: "color 0.12s" }}>
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
            background: "radial-gradient(circle at 44% 38%, rgba(255,255,255,0.27) 0%, rgba(255,255,255,0.08) 42%, transparent 68%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        />

        {/* Bottom bar */}
        <div
          className="relative z-10 flex justify-between items-center py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.18)", paddingLeft: 44, paddingRight: 24 }}
        >
          <span style={{ color: "rgba(255,255,255,0.58)", fontSize: 12 }}>Project Index</span>
          <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,0.48)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* ─── RIGHT PANEL ─── */}
      <div
        className="relative flex flex-col overflow-y-auto"
        style={{ width: "56%", backgroundColor: "#F8F7F4", fontFamily: serif }}
      >
        {/* Next arrow */}
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
            width: 32,
            height: 64,
            background: hasNext ? "rgba(0,0,0,0.07)" : "rgba(0,0,0,0.03)",
            border: "none",
            borderRadius: "6px 0 0 6px",
            color: hasNext ? "rgba(0,0,0,0.50)" : "rgba(0,0,0,0.15)",
            cursor: hasNext ? "pointer" : "default",
            transition: "background 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => {
            if (hasNext) (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.13)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = hasNext ? "rgba(0,0,0,0.07)" : "rgba(0,0,0,0.03)";
          }}
        >
          <ChevronRight />
        </button>

        <div className="flex-1" style={{ padding: "32px 52px 32px 48px" }}>
          {/* Nr. / Year */}
          <div style={{ fontFamily: sans, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.04em", marginBottom: 12 }}>
            {project.number}
          </div>
          <hr style={{ borderColor: "#D1D5DB", marginBottom: 32 }} />

          {/* Title — just the name, no "Focus." */}
          <h2 style={{ fontFamily: serif, fontSize: 42, fontWeight: 400, color: "#111827", lineHeight: 1.1, marginBottom: 28 }}>
            {project.title}
          </h2>

          {/* Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {project.description.map((para, i) => (
              <p key={i} style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.78, color: "#4B5563", margin: 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Active Modules with toggle */}
          <div style={{ marginTop: 52 }}>
            <div style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.22em", color: "#9CA3AF", textTransform: "uppercase", marginBottom: 4 }}>
              Active Modules
            </div>
            <div style={{ fontFamily: sans, fontSize: 11, color: "#C4C4C4", marginBottom: 20 }}>
              Click to expand
            </div>

            <div>
              {project.modules.map((mod, i) => {
                const isExpanded = expandedModules.includes(i);
                const isHovered = hoveredModule === i;
                const isActive = isExpanded || isHovered;

                return (
                  <div
                    key={i}
                    style={{ borderBottom: "1px solid #E5E7EB" }}
                  >
                    {/* Module header row — clickable */}
                    <div
                      className="flex items-baseline gap-4"
                      onClick={() => toggleModule(i)}
                      onMouseEnter={() => setHoveredModule(i)}
                      onMouseLeave={() => setHoveredModule(null)}
                      style={{
                        padding: `15px 0 15px ${isExpanded ? 12 : 0}px`,
                        cursor: "pointer",
                        backgroundColor: isExpanded ? `${project.color}08` : "transparent",
                        borderLeft: isExpanded ? `3px solid ${project.color}` : "3px solid transparent",
                        transition: "all 0.15s",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: sans,
                          fontSize: 13,
                          color: isActive ? project.color : "#9CA3AF",
                          transition: "color 0.15s, transform 0.2s",
                          display: "inline-block",
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          userSelect: "none",
                          lineHeight: 1,
                        }}
                      >
                        ↓
                      </span>
                      <span
                        style={{
                          fontFamily: sans,
                          fontSize: 14,
                          fontWeight: 600,
                          color: isActive ? project.color : "#111827",
                          transition: "color 0.15s",
                        }}
                      >
                        {mod.name}
                      </span>
                      <span style={{ fontFamily: serif, fontSize: 13, fontStyle: "italic", color: "#9CA3AF" }}>
                        {mod.description}
                      </span>
                    </div>

                    {/* Expanded content */}
                    <div
                      style={{
                        maxHeight: isExpanded ? 200 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.35s ease",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: 15,
                          paddingRight: 0,
                          paddingBottom: 18,
                          borderLeft: `3px solid ${project.color}`,
                        }}
                      >
                        <p
                          style={{
                            fontFamily: serif,
                            fontSize: 14,
                            lineHeight: 1.72,
                            color: "#6B7280",
                            margin: 0,
                          }}
                        >
                          {mod.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer with website link */}
        <div
          className="flex justify-between items-center"
          style={{ borderTop: "1px solid #E5E7EB", padding: "16px 52px 16px 48px" }}
        >
          <span style={{ fontFamily: sans, fontSize: 11, color: "#9CA3AF" }}>
            Original Labs — A laboratory for products and applications
          </span>
          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: sans,
                fontSize: 11,
                color: project.color,
                textDecoration: "none",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: 5,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              {project.websiteLabel}
              <span style={{ fontSize: 10 }}>↗</span>
            </a>
          ) : (
            <span style={{ fontFamily: sans, fontSize: 11, color: "#C4C4C4" }}>
              {project.websiteLabel}
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
