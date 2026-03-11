"use client";

import { useState, useEffect, useRef } from "react";
import { ISL_CONFIG } from "@/lib/isl-pitch-config";
import {
  ChevronDown,
  CheckCircle2,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Star,
  ArrowRight,
  ArrowDown,
  BookOpen,
  Target,
  Sparkles,
  X,
  Zap,
  Play,
  Mail,
  Linkedin,
  Award,
  Layers,
  Lock,
  BarChart3,
  Calendar,
  FileText,
  Video,
  Mic,
  Image,
  Monitor,
  Check,
  Heart,
  GripVertical,
  Pencil,
  Plus,
  Wallet,
  Megaphone,
  AlertTriangle,
} from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const T = {
  bgPrimary: "#FAF8F5",
  bgSecondary: "#FFFFFF",
  bgTertiary: "#F7F5F0",
  glass: "rgba(255, 255, 255, 0.8)",
  glassBorder: "rgba(0, 0, 0, 0.1)",
  glassHover: "rgba(0, 0, 0, 0.05)",
  glassBright: "rgba(255, 255, 255, 0.9)",
  textPrimary: "#2D3748",
  textSecondary: "#4A5568",
  textTertiary: "#718096",
  pink: "#E8548C",
  pinkGlow: "rgba(232, 84, 140, 0.15)",
  pinkBorder: "rgba(232, 84, 140, 0.25)",
  cyan: "#4ECDC4",
  cyanGlow: "rgba(78, 205, 196, 0.15)",
  cyanBorder: "rgba(78, 205, 196, 0.25)",
  gold: "#FFD93D",
  goldGlow: "rgba(255, 217, 61, 0.12)",
  goldBorder: "rgba(255, 217, 61, 0.25)",
  gradientPink: "linear-gradient(135deg, #E8548C, #c44477)",
  gradientCyan: "linear-gradient(135deg, #4ECDC4, #3ba89f)",
  gradientGold: "linear-gradient(135deg, #FFD93D, #e6c235)",
  gradientText: "linear-gradient(135deg, #E8548C 0%, #4ECDC4 50%, #FFD93D 100%)",
  gradientBg: "linear-gradient(180deg, #FAF8F5 0%, #F7F5F0 50%, #FAF8F5 100%)",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function GlassCard({
  children,
  style,
  glow,
  onClick,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  glow?: "pink" | "cyan" | "gold";
  onClick?: () => void;
}) {
  const glowColor =
    glow === "pink" ? T.pinkGlow : glow === "cyan" ? T.cyanGlow : glow === "gold" ? T.goldGlow : "transparent";
  const borderColor =
    glow === "pink" ? T.pinkBorder : glow === "cyan" ? T.cyanBorder : glow === "gold" ? T.goldBorder : T.glassBorder;
  return (
    <div
      onClick={onClick}
      style={{
        background: T.glass,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${borderColor}`,
        borderRadius: 16,
        padding: "24px 28px",
        boxShadow: `0 0 40px ${glowColor}`,
        cursor: onClick ? "pointer" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function GlowOrb({
  color,
  size,
  top,
  left,
  right,
  bottom,
  opacity = 0.12,
}: {
  color: string;
  size: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  opacity?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        opacity,
        filter: `blur(${size * 0.6}px)`,
        top,
        left,
        right,
        bottom,
        pointerEvents: "none",
      }}
    />
  );
}

function SectionHeading({
  children,
  sub,
  accent,
  label,
}: {
  children: React.ReactNode;
  sub?: string;
  accent?: "pink" | "cyan" | "gold";
  label?: string;
}) {
  const accentColor = accent === "pink" ? T.pink : accent === "cyan" ? T.cyan : T.gold;
  return (
    <div style={{ marginBottom: 48, textAlign: "center" }}>
      {accent && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: accentColor,
            marginBottom: 14,
          }}
        >
          <div style={{ width: 24, height: 1, background: accentColor }} />
          {label || "SECTION"}
          <div style={{ width: 24, height: 1, background: accentColor }} />
        </div>
      )}
      <h2
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          fontWeight: 700,
          color: T.textPrimary,
          margin: 0,
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </h2>
      {sub && (
        <p
          style={{
            color: T.textSecondary,
            fontSize: "1.05rem",
            marginTop: 12,
            maxWidth: 620,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.65,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function AccentPill({ children, color }: { children: React.ReactNode; color: "pink" | "cyan" | "gold" }) {
  const c = color === "pink" ? T.pink : color === "cyan" ? T.cyan : T.gold;
  const bg = color === "pink" ? T.pinkGlow : color === "cyan" ? T.cyanGlow : T.goldGlow;
  const border = color === "pink" ? T.pinkBorder : color === "cyan" ? T.cyanBorder : T.goldBorder;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: c,
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 999,
        padding: "3px 10px",
      }}
    >
      {children}
    </span>
  );
}

// ─── Dot Navigation ───────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "what-is-isl", label: "ISL" },
  { id: "profile", label: "You" },
  { id: "transform", label: "Transform" },
  { id: "opportunity", label: "Opportunity" },
  { id: "offer", label: "Offer" },
  { id: "course", label: "Course" },
  { id: "plan", label: "Plan" },
  { id: "marketing", label: "Marketing" },
  { id: "investment", label: "Investment" },
];

function DotNav({ active }: { active: string }) {
  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 100,
      }}
    >
      {NAV_SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            title={s.label}
            style={{
              display: "block",
              width: isActive ? 10 : 6,
              height: isActive ? 10 : 6,
              borderRadius: "50%",
              background: isActive ? T.pink : T.glassBorder,
              boxShadow: isActive ? `0 0 8px ${T.pink}` : "none",
              transition: "all 0.2s ease",
              marginLeft: isActive ? -2 : 0,
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ISLPitchDeck() {
  const {
    hero,
    clientProfile,
    courseModules,
    milestones,
    offers,
    revenue,
    competitive,
    market,
    investment,
    emails,
    linkedinStrategy,
    roadmap,
    kpiDashboard,
  } = ISL_CONFIG;

  // ── State ────────────────────────────────────────────────────────────────────
  const [expandedMilestones, setExpandedMilestones] = useState<Set<number>>(new Set([0]));
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [expandedEmailCategory, setExpandedEmailCategory] = useState<string | null>("welcome");
  const [expandedOffers, setExpandedOffers] = useState<Set<number>>(new Set());
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set([0]));
  const [expandedLinkedinCategory, setExpandedLinkedinCategory] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  // ── Timeline Edit Mode State ─────────────────────────────────────────────────
  const [editMode, setEditMode] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [roadmapData, setRoadmapData] = useState<any[]>(() =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (roadmap.weeks as any[]).map((week: any) => ({
      ...week,
      days: week.days.map((day: any) => ({
        ...day,
        weDoItems: [...(day.weDoItems ?? [])],
        youDo: [...(day.youDo ?? [])],
      })),
    }))
  );
  const [dragSource, setDragSource] = useState<{
    weekIdx: number;
    dayIdx: number;
    itemIdx: number;
    column: "weDo" | "youDo";
  } | null>(null);
  const [dropTarget, setDropTarget] = useState<{
    weekIdx: number;
    dayIdx: number;
    column: "weDo" | "youDo";
  } | null>(null);
  const [editingItem, setEditingItem] = useState<{
    weekIdx: number;
    dayIdx: number;
    itemIdx: number;
    column: "weDo" | "youDo";
  } | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  // ── Timeline Edit Helpers ────────────────────────────────────────────────────
  // Deep clone roadmap state (prev is any[], explicit any needed on map params)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cloneRoadmapState = (prev: any[]) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prev.map((w: any) => ({ ...w, days: (w.days as any[]).map((d: any) => ({ ...d, weDoItems: [...d.weDoItems], youDo: [...d.youDo] })) }));

  const updateRoadmapItem = (weekIdx: number, dayIdx: number, column: "weDo" | "youDo", itemIdx: number, newValue: string) => {
    setRoadmapData((prev) => {
      const next = cloneRoadmapState(prev);
      if (column === "weDo") next[weekIdx].days[dayIdx].weDoItems[itemIdx] = newValue;
      else next[weekIdx].days[dayIdx].youDo[itemIdx] = newValue;
      return next;
    });
  };

  const removeRoadmapItem = (weekIdx: number, dayIdx: number, column: "weDo" | "youDo", itemIdx: number) => {
    setRoadmapData((prev) => {
      const next = cloneRoadmapState(prev);
      if (column === "weDo") next[weekIdx].days[dayIdx].weDoItems.splice(itemIdx, 1);
      else next[weekIdx].days[dayIdx].youDo.splice(itemIdx, 1);
      return next;
    });
  };

  const addRoadmapItem = (weekIdx: number, dayIdx: number, column: "weDo" | "youDo") => {
    setRoadmapData((prev) => {
      const next = cloneRoadmapState(prev);
      if (column === "weDo") {
        next[weekIdx].days[dayIdx].weDoItems.push("");
        setEditingItem({ weekIdx, dayIdx, itemIdx: next[weekIdx].days[dayIdx].weDoItems.length - 1, column });
      } else {
        next[weekIdx].days[dayIdx].youDo.push("");
        setEditingItem({ weekIdx, dayIdx, itemIdx: next[weekIdx].days[dayIdx].youDo.length - 1, column });
      }
      return next;
    });
  };

  const handleDrop = (toWeekIdx: number, toDayIdx: number, toColumn: "weDo" | "youDo") => {
    if (!dragSource) return;
    const { weekIdx: fromWeek, dayIdx: fromDay, itemIdx: fromItem, column: fromCol } = dragSource;
    setRoadmapData((prev) => {
      const next = cloneRoadmapState(prev);
      const srcArr = fromCol === "weDo" ? next[fromWeek].days[fromDay].weDoItems : next[fromWeek].days[fromDay].youDo;
      const [moved] = srcArr.splice(fromItem, 1);
      const dstArr = toColumn === "weDo" ? next[toWeekIdx].days[toDayIdx].weDoItems : next[toWeekIdx].days[toDayIdx].youDo;
      dstArr.push(moved);
      return next;
    });
    setDragSource(null);
    setDropTarget(null);
  };

  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<number>>>, idx: number) => {
    setter((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  // Intersection observer for dot nav
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Module accent colors ─────────────────────────────────────────────────────
  const moduleAccent = (i: number): "pink" | "cyan" | "gold" => {
    const map: ("pink" | "cyan" | "gold")[] = ["pink", "gold", "cyan", "pink", "gold"];
    return map[i] ?? "pink";
  };

  // ── Phase badge color ────────────────────────────────────────────────────────
  const phaseColor = (phase: string): string => {
    if (phase === "Kickoff") return T.textTertiary;
    if (phase === "M1") return T.pink;
    if (phase === "M2") return T.gold;
    if (phase === "M3") return T.cyan;
    return T.glassBorder;
  };

  const phaseBg = (phase: string): string => {
    if (phase === "M1") return T.pinkGlow;
    if (phase === "M2") return T.goldGlow;
    if (phase === "M3") return T.cyanGlow;
    return T.glass;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bgPrimary,
        color: T.textPrimary,
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <DotNav active={activeSection} />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "100px 24px 80px",
          overflow: "hidden",
        }}
      >
        <GlowOrb color={T.pink} size={700} top={-200} left={-200} opacity={0.10} />
        <GlowOrb color={T.cyan} size={600} top={-100} right={-200} opacity={0.09} />
        <GlowOrb color={T.gold} size={400} bottom={-50} left="35%" opacity={0.07} />

        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: T.pinkGlow,
              border: `1px solid ${T.pinkBorder}`,
              borderRadius: 999,
              padding: "7px 20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: T.pink,
              marginBottom: 32,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <Sparkles size={13} />
            COMPREHENSIVE LAUNCH PROPOSAL
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 800,
              color: T.textPrimary,
              margin: "0 0 20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              color: T.textSecondary,
              fontWeight: 500,
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
            }}
          >
            {hero.subtitle}
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: "1.15rem",
              color: T.textTertiary,
              maxWidth: 640,
              margin: "0 auto 56px",
              lineHeight: 1.7,
            }}
          >
            {hero.tagline}
          </p>

          {/* Stat Cards */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "21+", sub: "Competitors Analyzed", glow: T.pinkGlow, border: T.pinkBorder, accent: T.pink },
              { label: "0", sub: "Direct Competitors", glow: T.cyanGlow, border: T.cyanBorder, accent: T.cyan },
              { label: "Coming Soon", sub: "Year 1 Potential", glow: T.goldGlow, border: T.goldBorder, accent: T.gold },
              { label: "~15 hrs", sub: "Your Total Time", glow: T.pinkGlow, border: T.pinkBorder, accent: T.pink },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: T.glass,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1px solid ${stat.border}`,
                  borderRadius: 16,
                  padding: "20px 28px",
                  minWidth: 140,
                  boxShadow: `0 0 30px ${stat.glow}`,
                }}
              >
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    color: stat.accent,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.78rem", color: T.textTertiary, marginTop: 6, fontWeight: 500 }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              marginTop: 64,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: 0.4,
            }}
          >
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: T.textTertiary }}>
              Scroll to explore
            </div>
            <div
              style={{
                width: 1,
                height: 32,
                background: `linear-gradient(to bottom, ${T.textTertiary}, transparent)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1.5: WHAT IS ISL
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="what-is-isl"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <SectionHeading accent="cyan" label="IP Stewardship Lab" sub="Your intellectual property is sacred. Let's make sure it's protected.">
          What Is ISL?
        </SectionHeading>

        <GlassCard glow="cyan" style={{ textAlign: "center" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ fontSize: "1.35rem", lineHeight: 1.7, color: T.textSecondary, marginBottom: 32 }}>
              The IP Stewardship Lab is a comprehensive platform designed for justice-oriented practitioners who need to protect, 
              steward, and thoughtfully share their intellectual property. We offer education, frameworks, and community where 
              generosity is paired with clarity and stewardship.
            </p>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.6, color: T.textTertiary, marginBottom: 24 }}>
              Generosity should be paired with clarity and stewardship. We help you recognize the strength and value of what you carry,
              understand what you are stewarding, and share expansively and responsibly.
            </p>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: 20, 
              marginTop: 40 
            }}>
              <div style={{ padding: 20, textAlign: "center" }}>
                <Shield size={32} color={T.cyan} style={{ marginBottom: 12 }} />
                <h3 style={{ fontSize: "1rem", color: T.textPrimary, marginBottom: 8 }}>Protection</h3>
                <p style={{ fontSize: "0.95rem", color: T.textTertiary }}>Safeguard your intellectual wealth with intention</p>
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
                <Heart size={32} color={T.pink} style={{ marginBottom: 12 }} />
                <h3 style={{ fontSize: "1.1rem", color: T.textPrimary, marginBottom: 8 }}>Stewardship</h3>
                <p style={{ fontSize: "0.95rem", color: T.textTertiary }}>Share your knowledge with integrity and purpose</p>
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
                <Target size={32} color={T.gold} style={{ marginBottom: 12 }} />
                <h3 style={{ fontSize: "1.1rem", color: T.textPrimary, marginBottom: 8 }}>Discernment</h3>
                <p style={{ fontSize: "0.95rem", color: T.textTertiary }}>Make clear decisions about what to share and when</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: YOUR PROFILE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="profile"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <SectionHeading accent="pink" label="Your Foundation" sub="The foundation is already built. We're packaging and distributing what already exists.">
          Who You Are
        </SectionHeading>

        <GlassCard glow="pink" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {/* Left: Bio */}
            <div
              style={{
                flex: "1 1 340px",
                padding: "36px 40px",
                borderRight: `1px solid ${T.glassBorder}`,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: T.pinkGlow,
                  border: `1px solid ${T.pinkBorder}`,
                  borderRadius: 999,
                  padding: "4px 12px",
                  marginBottom: 20,
                }}
              >
                <Award size={12} color={T.pink} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: T.pink, letterSpacing: "0.08em" }}>
                  CLIENT PROFILE
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: T.textPrimary,
                  margin: "0 0 6px",
                  letterSpacing: "-0.01em",
                }}
              >
                {clientProfile.name}
              </h3>
              <p style={{ fontSize: "0.88rem", color: T.pink, fontWeight: 600, margin: "0 0 20px" }}>
                {clientProfile.credentials}
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: T.textSecondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {clientProfile.bio}
              </p>
            </div>

            {/* Right: Assets grid */}
            <div style={{ flex: "1 1 300px", padding: "36px 40px" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: T.textTertiary,
                  marginBottom: 20,
                }}
              >
                What You Already Have
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                {clientProfile.existingAssets.map((asset) => (
                  <li key={asset} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2
                      size={16}
                      color={T.cyan}
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <span style={{ fontSize: "0.9rem", color: T.textSecondary, lineHeight: 1.5 }}>
                      {asset}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gap callout */}
          <div
            style={{
              borderTop: `1px solid ${T.glassBorder}`,
              padding: "20px 40px",
              background: T.pinkGlow,
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <Zap size={18} color={T.pink} style={{ flexShrink: 0, marginTop: 1 }} />
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: T.pink,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginRight: 8,
                }}
              >
                THE GAP:
              </span>
              <span style={{ fontSize: "0.92rem", color: T.textSecondary, lineHeight: 1.6 }}>
                {clientProfile.gap}
              </span>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: TRANSFORMATION (BEFORE / AFTER)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="transform"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <GlowOrb color={T.gold} size={500} top={0} right={-150} opacity={0.07} />

        <SectionHeading accent="gold" label="The Transformation" sub={(ISL_CONFIG as any).transformation?.subtitle}>
          {(ISL_CONFIG as any).transformation?.headline ?? "From Invisible Expert to Recognized Authority"}
        </SectionHeading>

        {/* Timeframe badge */}
        {(ISL_CONFIG as any).transformation?.timeframe && (
          <div style={{ textAlign: "center", marginBottom: 36, marginTop: -24 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: T.goldGlow,
                border: `1px solid ${T.goldBorder}`,
                borderRadius: 999,
                padding: "6px 18px",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: T.gold,
                letterSpacing: "0.06em",
              }}
            >
              <Clock size={13} />
              {(ISL_CONFIG as any).transformation.timeframe}
            </span>
          </div>
        )}

        {/* Before / After two-column layout */}
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "stretch",
            flexWrap: "wrap",
          }}
        >
          {/* TODAY column */}
          <div
            style={{
              flex: "1 1 300px",
              background: "rgba(255,255,255,0.02)",
              border: `1px solid rgba(255,255,255,0.05)`,
              borderRadius: 16,
              padding: "28px 28px",
              opacity: 0.7,
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: T.textTertiary,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 18, height: 1, background: T.textTertiary }} />
              Today
              <div style={{ width: 18, height: 1, background: T.textTertiary }} />
            </div>
            <div style={{ display: "grid", gap: 16 }}>
              {((ISL_CONFIG as any).transformation?.before ?? []).map((item: { label: string; detail: string; icon: string }, i: number) => {
                const iconMap: Record<string, React.ReactNode> = {
                  "wallet": <Wallet size={16} />,
                  "book-open": <BookOpen size={16} />,
                  "mail": <Mail size={16} />,
                  "shield": <Shield size={16} />,
                  "megaphone": <Megaphone size={16} />,
                };
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid rgba(255,255,255,0.07)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: T.textTertiary,
                        marginTop: 1,
                      }}
                    >
                      {iconMap[item.icon] ?? <Target size={16} />}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: T.textTertiary, marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.83rem", color: T.textTertiary, lineHeight: 1.5, opacity: 0.75 }}>
                        {item.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow separator */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              flex: "0 0 auto",
              padding: "0 4px",
            }}
          >
            <ArrowRight size={28} color={T.gold} style={{ opacity: 0.5 }} />
          </div>

          {/* 90 DAYS column */}
          <div
            style={{
              flex: "1 1 300px",
              background: T.goldGlow,
              border: `1px solid ${T.goldBorder}`,
              borderRadius: 16,
              padding: "28px 28px",
              boxShadow: `0 0 40px ${T.goldGlow}`,
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: T.gold,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 18, height: 1, background: T.gold }} />
              60 Days From Now
              <div style={{ width: 18, height: 1, background: T.gold }} />
            </div>
            <div style={{ display: "grid", gap: 16 }}>
              {((ISL_CONFIG as any).transformation?.after ?? []).map((item: { label: string; detail: string; icon: string }, i: number) => {
                const iconMap: Record<string, React.ReactNode> = {
                  "wallet": <Wallet size={16} />,
                  "book-open": <BookOpen size={16} />,
                  "mail": <Mail size={16} />,
                  "shield": <Shield size={16} />,
                  "megaphone": <Megaphone size={16} />,
                };
                const accentColors = [T.gold, T.cyan, T.gold, T.cyan, T.gold];
                const c = accentColors[i % accentColors.length];
                const glowBg = c === T.gold ? T.goldGlow : T.cyanGlow;
                const glowBorder = c === T.gold ? T.goldBorder : T.cyanBorder;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: glowBg,
                        border: `1px solid ${glowBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: c,
                        marginTop: 1,
                        boxShadow: `0 0 12px ${glowBg}`,
                      }}
                    >
                      {iconMap[item.icon] ?? <Target size={16} />}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: T.textPrimary, marginBottom: 2 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.83rem", color: T.textSecondary, lineHeight: 1.5 }}>
                        {item.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Investment callout at bottom */}
        <div
          style={{
            marginTop: 28,
            background: T.glassBright,
            border: `1px solid ${T.goldBorder}`,
            borderRadius: 12,
            padding: "18px 28px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "0.95rem", color: T.textSecondary, lineHeight: 1.6 }}>
            Everything above becomes yours permanently. Built in 60 days. Proven at every step.
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: MARKET + COMPETITIVE OPPORTUNITY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="opportunity"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <GlowOrb color={T.cyan} size={500} top={0} right={-200} opacity={0.07} />

        <SectionHeading accent="cyan" label="Market + Competitive" sub="Zero direct competitors. Massive urgent market. The timing window is right now.">
          The Opportunity
        </SectionHeading>

        {/* Timing Factor Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {market.timing.map((t, i) => {
            const colors = [T.pink, T.gold, T.cyan, T.gold];
            const glows = [T.pinkGlow, T.goldGlow, T.cyanGlow, T.goldGlow];
            const borders = [T.pinkBorder, T.goldBorder, T.cyanBorder, T.goldBorder];
            const sources = [
              "Source: Candid/GuideStar, 2025",
              "Source: Goldman Sachs, 2024",
              "Source: Grand View Research, 2024",
              "Source: Monmac Labs market analysis",
            ];
            return (
              <GlassCard key={i} style={{ textAlign: "center", padding: "28px 24px" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: colors[i % colors.length],
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: 10,
                    textShadow: `0 0 20px ${glows[i % glows.length]}`,
                  }}
                >
                  {t.stat}
                </div>
                <div style={{ fontSize: "0.85rem", color: T.textSecondary, lineHeight: 1.5 }}>
                  {t.description}
                </div>
                <div style={{ fontSize: "0.7rem", fontStyle: "italic", color: T.textTertiary, marginTop: 4 }}>
                  {sources[i]}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* TAM Callout */}
        <div
          style={{
            background: T.goldGlow,
            border: `1px solid ${T.goldBorder}`,
            borderRadius: 16,
            padding: "28px 36px",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: T.gold,
              marginBottom: 10,
            }}
          >
            Total Addressable Market
          </div>
          <div
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: T.gold,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: 6,
            }}
          >
            {market.tam}
          </div>
          <div style={{ fontSize: "0.9rem", color: T.textSecondary }}>
            {market.addressable} individuals who need exactly this
          </div>
        </div>

        {/* Segment Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {market.segments.map((seg, i) => {
            const icons = [<Target size={22} key="t" />, <BookOpen size={22} key="b" />, <Users size={22} key="u" />];
            const colors: ("pink" | "cyan" | "gold")[] = ["pink", "cyan", "gold"];
            const accColor = colors[i % colors.length];
            const c = accColor === "pink" ? T.pink : accColor === "cyan" ? T.cyan : T.gold;
            return (
              <GlassCard key={seg.name} glow={accColor}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 14,
                    color: c,
                  }}
                >
                  {icons[i]}
                  <AccentPill color={accColor}>{seg.size}</AccentPill>
                </div>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: T.textPrimary,
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  {seg.name}
                </h4>
                <div style={{ borderTop: `1px solid ${T.glassBorder}`, paddingTop: 12, display: "grid", gap: 8 }}>
                  <div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: c, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Pain:{" "}
                    </span>
                    <span style={{ fontSize: "0.88rem", color: T.textSecondary }}>{seg.pain}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: T.textTertiary, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Trigger:{" "}
                    </span>
                    <span style={{ fontSize: "0.88rem", color: T.textSecondary }}>{seg.trigger}</span>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Competitive headline */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: T.textPrimary,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            {competitive.analyzed} Analyzed.{" "}
            <span style={{ color: T.cyan }}>{competitive.directCompetitors} Direct Competitors.</span>
          </div>
          <p style={{ color: T.textSecondary, fontSize: "0.95rem" }}>
            {competitive.positioning}
          </p>
        </div>

        {/* Competitor categories accordion */}
        <div style={{ display: "grid", gap: 12, marginBottom: 40 }}>
          {competitive.categories.map((cat, idx) => {
            const isOpen = expandedCategories.has(idx);
            return (
              <div
                key={cat.name}
                style={{
                  background: T.glass,
                  border: `1px solid ${isOpen ? T.cyanBorder : T.glassBorder}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => toggleSet(setExpandedCategories, idx)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Layers size={16} color={T.cyan} />
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: T.textPrimary, textAlign: "left" }}>
                      {cat.name}
                    </span>
                    <AccentPill color="cyan">{cat.competitors.length} programs</AccentPill>
                  </div>
                  <ChevronDown
                    size={18}
                    color={T.textTertiary}
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{ borderTop: `1px solid ${T.glassBorder}`, overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
                      <thead>
                        <tr style={{ background: T.glassBright }}>
                          {["Competitor", "Price", "What They Offer", "What's Missing"].map((h) => (
                            <th
                              key={h}
                              style={{
                                padding: "10px 16px",
                                textAlign: "left",
                                fontSize: "0.68rem",
                                fontWeight: 700,
                                color: T.textTertiary,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                borderBottom: `1px solid ${T.glassBorder}`,
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cat.competitors.map((comp, ci) => (
                          <tr
                            key={comp.name}
                            style={{
                              background: ci % 2 === 0 ? "transparent" : T.glassBright,
                              borderBottom: `1px solid ${T.glassBorder}`,
                            }}
                          >
                            <td style={{ padding: "10px 16px", fontSize: "0.85rem", color: T.textPrimary, fontWeight: 500 }}>
                              {comp.name}
                            </td>
                            <td style={{ padding: "10px 16px", fontSize: "0.85rem", color: T.gold }}>
                              {comp.price}
                            </td>
                            <td style={{ padding: "10px 16px", fontSize: "0.85rem", color: T.textSecondary }}>
                              {comp.offer}
                            </td>
                            <td style={{ padding: "10px 16px", fontSize: "0.82rem", color: T.pink }}>
                              {comp.missing}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Whitespace gaps */}
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: T.textPrimary,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Five Market Gaps ISL Fills
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
            marginBottom: 48,
          }}
        >
          {competitive.whitespace.map((w, i) => (
            <GlassCard key={i} style={{ padding: "20px 24px" }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: T.cyanGlow,
                  border: `1px solid ${T.cyanBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: T.cyan,
                }}
              >
                {i + 1}
              </div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: T.textPrimary, margin: "0 0 8px" }}>
                {w.title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: T.textSecondary, margin: 0, lineHeight: 1.55 }}>
                {w.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Pricing comparison table */}
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: T.textPrimary,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          ISL vs. The Competition
        </h3>
        <GlassCard style={{ padding: 0, overflow: "hidden", marginBottom: 40 }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
              <thead>
                <tr style={{ background: T.glassBright }}>
                  {["Program", "Price", "Format", "IP Protection", "Ethical Frame"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 18px",
                        textAlign: "left",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: T.textTertiary,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderBottom: `1px solid ${T.glassBorder}`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitive.pricingComparison.map((row, i) => {
                  const isISL = row.program.startsWith("ISL");
                  return (
                    <tr
                      key={row.program}
                      style={{
                        background: isISL ? T.cyanGlow : i % 2 === 0 ? "transparent" : T.glassBright,
                        borderBottom: `1px solid ${T.glassBorder}`,
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 18px",
                          fontSize: "0.9rem",
                          fontWeight: isISL ? 700 : 400,
                          color: isISL ? T.cyan : T.textPrimary,
                        }}
                      >
                        {row.program}
                      </td>
                      <td style={{ padding: "12px 18px", fontSize: "0.88rem", color: isISL ? T.gold : T.textSecondary }}>
                        {row.price}
                      </td>
                      <td style={{ padding: "12px 18px", fontSize: "0.85rem", color: T.textSecondary }}>
                        {row.format}
                      </td>
                      <td style={{ padding: "12px 18px" }}>
                        {row.ipProtection ? (
                          <Check size={18} color={T.cyan} />
                        ) : (
                          <X size={18} color={T.pink} />
                        )}
                      </td>
                      <td style={{ padding: "12px 18px" }}>
                        {row.ethicalFrame ? (
                          <Check size={18} color={T.cyan} />
                        ) : (
                          <X size={18} color={T.pink} />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Positioning advantages */}
        <GlassCard glow="cyan" style={{ padding: "28px 32px" }}>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: T.cyan,
              marginBottom: 18,
            }}
          >
            Why This Position Is Defensible
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {competitive.advantages.map((adv, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Shield size={15} color={T.cyan} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: "0.9rem", color: T.textSecondary, lineHeight: 1.55 }}>{adv}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Data Sources */}
        <GlassCard style={{ padding: "18px 24px", marginTop: 20 }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textTertiary, marginBottom: 10 }}>
            Data Sources
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 8 }}>
            {Object.entries(ISL_CONFIG.sources).map(([key, value]) => (
              <div key={key} style={{ fontSize: "0.83rem", color: T.textTertiary, lineHeight: 1.4 }}>
                {String(value)}
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: THE OFFER
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="offer"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <GlowOrb color={T.gold} size={500} top={0} left={-150} opacity={0.07} />

        <SectionHeading accent="gold" label="Offer Architecture" sub="A full value ladder: from free lead magnet to high-touch intensive.">
          The Offer
        </SectionHeading>

        {/* Offer Tiers */}
        <div style={{ display: "grid", gap: 16, marginBottom: 60 }}>
          {offers.map((offer, idx) => {
            const isOpen = expandedOffers.has(idx);
            const offerGlow: "pink" | "cyan" | "gold" | undefined =
              offer.tier === "Free" ? "pink" : offer.highlight ? "gold" : offer.tier === "Tier 2" ? "cyan" : undefined;
            const priceColor =
              offer.tier === "Free" ? T.pink : offer.highlight ? T.gold : offer.tier === "Tier 2" ? T.cyan : T.textSecondary;
            const detailColor =
              offer.tier === "Free" ? T.pink : offer.highlight ? T.gold : offer.tier === "Tier 2" ? T.cyan : T.cyan;

            return (
              <div
                key={offer.tier}
                style={{
                  background: offer.highlight ? T.goldGlow : T.glass,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `${offer.highlight ? "2px" : "1px"} solid ${
                    offer.highlight ? T.goldBorder : offer.tier === "Free" ? T.pinkBorder : offer.tier === "Tier 2" ? T.cyanBorder : T.glassBorder
                  }`,
                  borderRadius: 18,
                  overflow: "hidden",
                  boxShadow: isOpen ? `0 0 40px ${offer.highlight ? T.goldGlow : offer.tier === "Free" ? T.pinkGlow : T.cyanGlow}` : "none",
                  transition: "box-shadow 0.2s",
                }}
              >
                {offer.highlight && (
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: -1,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: T.gold,
                        color: "#FAF8F5",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        padding: "4px 16px",
                        borderRadius: "0 0 8px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      RECOMMENDED
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleSet(setExpandedOffers, idx)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: offer.highlight ? "32px 24px 20px" : "26px 22px 18px",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, color: T.textTertiary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                        {offer.tier}
                      </div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: T.textPrimary, margin: "0 0 12px", lineHeight: 1.35 }}>
                        {offer.name}
                      </h4>
                      <div style={{ fontSize: "2rem", fontWeight: 800, color: priceColor, marginBottom: 8, lineHeight: 1, letterSpacing: "-0.02em" }}>
                        {offer.price}
                      </div>
                      <div style={{ fontSize: "0.88rem", color: T.textSecondary, lineHeight: 1.55 }}>
                        {offer.format}
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      color={T.textTertiary}
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </div>
                </button>

                {isOpen && offer.details && (
                  <div style={{ borderTop: `1px solid ${T.glassBorder}`, padding: "20px 24px" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: detailColor, marginBottom: 14 }}>
                      What's Included
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                      {offer.details.map((d: string, di: number) => (
                        <li key={di} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                          <CheckCircle2 size={15} color={detailColor} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: "0.88rem", color: T.textSecondary, lineHeight: 1.5 }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Revenue table */}
        <SectionHeading sub="Conservative estimates at realistic student volumes." accent="gold" label="Revenue Projection">
          Year 1 Revenue Projection
        </SectionHeading>

        <GlassCard style={{ padding: 0, overflow: "hidden", marginBottom: 28 }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: T.glassBright }}>
                  {["Revenue Stream", "Price", "Volume", "Annual Revenue"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "14px 20px",
                        textAlign: "left",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: T.textTertiary,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderBottom: `1px solid ${T.glassBorder}`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {revenue.map((row, i) => {
                  const isTotal = row.stream.startsWith("Year 1");
                  return (
                    <tr
                      key={row.stream}
                      style={{
                        background: isTotal ? T.goldGlow : i % 2 === 0 ? "transparent" : T.glassBright,
                        borderTop: isTotal ? `2px solid ${T.goldBorder}` : undefined,
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 20px",
                          fontSize: isTotal ? "1rem" : "0.92rem",
                          fontWeight: isTotal ? 700 : 400,
                          color: isTotal ? T.gold : T.textPrimary,
                          borderBottom: `1px solid ${T.glassBorder}`,
                        }}
                      >
                        {row.stream}
                      </td>
                      <td
                        style={{
                          padding: "14px 20px",
                          fontSize: "0.9rem",
                          color: T.textSecondary,
                          borderBottom: `1px solid ${T.glassBorder}`,
                        }}
                      >
                        {row.price}
                      </td>
                      <td
                        style={{
                          padding: "14px 20px",
                          fontSize: "0.9rem",
                          color: T.textSecondary,
                          borderBottom: `1px solid ${T.glassBorder}`,
                        }}
                      >
                        {row.volume}
                      </td>
                      <td
                        style={{
                          padding: "14px 20px",
                          fontSize: isTotal ? "1.05rem" : "0.92rem",
                          fontWeight: isTotal ? 800 : 600,
                          color: isTotal ? T.gold : T.textSecondary,
                          borderBottom: `1px solid ${T.glassBorder}`,
                        }}
                      >
                        {row.annual}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Capacity note */}
        <div
          style={{
            background: T.glassBright,
            border: `1px solid ${T.glassBorder}`,
            borderRadius: 12,
            padding: "16px 22px",
            marginBottom: 14,
          }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              color: T.textSecondary,
              margin: 0,
              lineHeight: 1.65,
              fontStyle: "italic",
            }}
          >
            Based on your stated capacity: maximum 2 cohorts per year, maximum 5 intensive clients. These projections don&apos;t require you to be more available than you&apos;ve told us you want to be.
          </p>
        </div>

        {/* Passive engine callout */}
        <div
          style={{
            background: T.glassBright,
            border: `1px solid ${T.goldBorder}`,
            borderRadius: 12,
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <TrendingUp size={20} color={T.gold} style={{ flexShrink: 0 }} />
          <div>
            <span style={{ fontWeight: 700, color: T.gold, fontSize: "0.95rem" }}>
              Passive engine:{" "}
            </span>
            <span style={{ color: T.textSecondary, fontSize: "0.92rem" }}>
              Course enrollment targets align with stewardship values and sustainable growth.
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5: THE COURSE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="course"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <GlowOrb color={T.pink} size={500} bottom={0} right={-150} opacity={0.07} />

        <SectionHeading
          accent="pink"
          label="Lab Curriculum"
          sub="25 lessons across 5 modules. Approximately 85–100 minutes of foundational content. The first offering from IP Stewardship Lab."
        >
          Core Stewardship Training
        </SectionHeading>

        <div style={{ display: "grid", gap: 14 }}>
          {courseModules.map((mod, idx) => {
            const isOpen = expandedModules.has(idx);
            const accent = moduleAccent(idx);
            const c = accent === "pink" ? T.pink : accent === "cyan" ? T.cyan : T.gold;
            const glow = accent === "pink" ? T.pinkGlow : accent === "cyan" ? T.cyanGlow : T.goldGlow;
            const border = accent === "pink" ? T.pinkBorder : accent === "cyan" ? T.cyanBorder : T.goldBorder;

            return (
              <div
                key={mod.number}
                style={{
                  background: T.glass,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1px solid ${isOpen ? border : T.glassBorder}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: isOpen ? `0 0 40px ${glow}` : "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => toggleSet(setExpandedModules, idx)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    textAlign: "left",
                  }}
                >
                  {/* Module number badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: glow,
                      border: `1px solid ${border}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ fontSize: "0.58rem", fontWeight: 700, color: c, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      MOD
                    </div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: c, lineHeight: 1 }}>
                      {mod.number}
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: T.textPrimary,
                          margin: 0,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {mod.title}
                      </h3>
                      <AccentPill color={accent}>{mod.estimatedRuntime}</AccentPill>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: T.textTertiary, margin: 0 }}>
                      {mod.subtitle}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    <span style={{ fontSize: "0.8rem", color: T.textTertiary }}>{mod.lessons.length} lessons</span>
                    <ChevronDown
                      size={20}
                      color={T.textTertiary}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ borderTop: `1px solid ${T.glassBorder}` }}>
                    {/* Module theme */}
                    <div
                      style={{
                        padding: "16px 28px",
                        background: glow,
                        borderBottom: `1px solid ${T.glassBorder}`,
                      }}
                    >
                      <p style={{ fontSize: "0.88rem", color: T.textSecondary, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>
                        &ldquo;{mod.theme}&rdquo;
                      </p>
                    </div>

                    {/* Lessons */}
                    <div style={{ padding: "0 12px 12px" }}>
                      {mod.lessons.map((lesson, li) => (
                        <div
                          key={lesson.id}
                          style={{
                            borderBottom: li < mod.lessons.length - 1 ? `1px solid ${T.glassBorder}` : "none",
                            padding: "14px 16px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                            }}
                          >
                            <div
                              style={{
                                flexShrink: 0,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                color: c,
                                background: glow,
                                border: `1px solid ${border}`,
                                borderRadius: 6,
                                padding: "2px 8px",
                                marginTop: 1,
                              }}
                            >
                              {lesson.id}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                                <span style={{ fontSize: "0.92rem", fontWeight: 600, color: T.textPrimary }}>
                                  {lesson.title}
                                </span>
                                <span style={{ fontSize: "0.8rem", color: T.textTertiary }}>
                                  {lesson.duration}
                                </span>
                              </div>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 5 }}>
                                {lesson.objectives.map((obj, oi) => (
                                  <li
                                    key={oi}
                                    style={{ display: "flex", alignItems: "flex-start", gap: 7 }}
                                  >
                                    <div
                                      style={{
                                        flexShrink: 0,
                                        width: 4,
                                        height: 4,
                                        borderRadius: "50%",
                                        background: c,
                                        marginTop: 6,
                                        opacity: 0.7,
                                      }}
                                    />
                                    <span style={{ fontSize: "0.85rem", color: T.textTertiary, lineHeight: 1.5 }}>
                                      {obj}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6: THE PLAN
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="plan"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <SectionHeading
          accent="cyan"
          label="Milestone Plan"
          sub="Every milestone ends with a proof gate. Stop at any point, everything built is yours to keep."
        >
          The Plan: Milestone by Milestone
        </SectionHeading>

        {/* Milestones accordion */}
        <div style={{ display: "grid", gap: 14, marginBottom: 60 }}>
          {milestones.map((m, idx) => {
            const isOpen = expandedMilestones.has(idx);
            const mBorderColor =
              m.status === "in-progress" ? T.cyanBorder : isOpen ? T.pinkBorder : T.glassBorder;

            return (
              <div
                key={m.id}
                style={{
                  background: T.glass,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1px solid ${mBorderColor}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: m.status === "in-progress" ? `0 0 40px ${T.cyanGlow}` : isOpen ? `0 0 30px ${T.pinkGlow}` : "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => toggleSet(setExpandedMilestones, idx)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "22px 28px",
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    textAlign: "left",
                  }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background:
                        m.status === "in-progress" ? T.cyanGlow : T.glassBright,
                      border: `2px solid ${m.status === "in-progress" ? T.cyan : T.glassBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: m.status === "in-progress" ? T.cyan : T.textTertiary,
                    }}
                  >
                    {m.id}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 5 }}
                    >
                      <span
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: T.textPrimary,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {m.name}
                      </span>
                      {m.status === "in-progress" && (
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            background: T.cyanGlow,
                            color: T.cyan,
                            border: `1px solid ${T.cyanBorder}`,
                            borderRadius: 999,
                            padding: "2px 10px",
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                          }}
                        >
                          IN PROGRESS
                        </span>
                      )}
                      {m.status === "upcoming" && (
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            background: T.glassBright,
                            color: T.textTertiary,
                            borderRadius: 999,
                            padding: "2px 10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                          }}
                        >
                          COMING SOON
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.82rem", color: T.textTertiary, display: "flex", alignItems: "center", gap: 4 }}>
                        <Clock size={12} />
                        {m.duration}
                      </span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: T.gold }}>
                        {m.investment}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    color={T.textTertiary}
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      borderTop: `1px solid ${T.glassBorder}`,
                      padding: "24px 28px",
                    }}
                  >
                    <p
                      style={{
                        color: T.textSecondary,
                        fontSize: "0.95rem",
                        lineHeight: 1.65,
                        margin: "0 0 24px",
                      }}
                    >
                      {m.summary}
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 20,
                      }}
                    >
                      {/* Deliverables */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: T.textTertiary,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            marginBottom: 14,
                          }}
                        >
                          What You Get
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 9 }}>
                          {m.deliverables.map((d) => (
                            <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                              <CheckCircle2
                                size={15}
                                color={T.cyan}
                                style={{ flexShrink: 0, marginTop: 2 }}
                              />
                              <span style={{ fontSize: "0.88rem", color: T.textSecondary, lineHeight: 1.5 }}>
                                {d}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Time + Proof Gate */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {/* Time commitment */}
                        <div
                          style={{
                            background: T.glassBright,
                            borderRadius: 10,
                            padding: "14px 18px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                          }}
                        >
                          <Clock size={16} color={T.pink} style={{ flexShrink: 0, marginTop: 1 }} />
                          <div>
                            <div
                              style={{
                                fontSize: "0.68rem",
                                fontWeight: 700,
                                color: T.textTertiary,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                marginBottom: 4,
                              }}
                            >
                              Your Time Commitment
                            </div>
                            <div style={{ fontSize: "0.92rem", color: T.textSecondary, fontWeight: 600, marginBottom: typeof m.yourTime === 'object' && m.yourTime.breakdown ? 10 : 0 }}>
                              {typeof m.yourTime === 'object' ? m.yourTime.total : m.yourTime}
                            </div>
                            {typeof m.yourTime === 'object' && m.yourTime.breakdown && (
                              <div style={{ display: "grid", gap: 6 }}>
                                {m.yourTime.breakdown.map((b: { activity: string; duration: string }, bi: number) => (
                                  <div key={bi} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem" }}>
                                    <Clock size={11} color={T.textTertiary} />
                                    <span style={{ color: T.pink, fontWeight: 600, minWidth: 50 }}>{b.duration}</span>
                                    <span style={{ color: T.textTertiary }}>- {b.activity}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Proof gate */}
                        <div
                          style={{
                            background: T.cyanGlow,
                            border: `1px solid ${T.cyanBorder}`,
                            borderLeft: `4px solid ${T.cyan}`,
                            borderRadius: 10,
                            padding: "14px 18px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              color: T.cyan,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              marginBottom: 7,
                            }}
                          >
                            Proof Gate
                          </div>
                          <div
                            style={{
                              fontSize: "0.87rem",
                              color: T.textSecondary,
                              lineHeight: 1.55,
                            }}
                          >
                            {m.proofGate}
                          </div>
                        </div>

                        {/* Payment Schedule */}
                        {m.paymentSchedule && m.paymentSchedule.length > 0 && (
                          <div
                            style={{
                              background: T.goldGlow,
                              border: `1px solid ${T.goldBorder}`,
                              borderRadius: 10,
                              padding: "14px 18px",
                            }}
                          >
                            <div style={{ fontSize: "0.68rem", fontWeight: 700, color: T.gold, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                              Payment Schedule
                            </div>
                            <div style={{ display: "grid", gap: 8 }}>
                              {m.paymentSchedule.map((p: { amount: string; date: string; trigger: string }, pi: number) => (
                                <div key={pi} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.82rem" }}>
                                  <span style={{ color: T.gold, fontWeight: 700, minWidth: 55 }}>{p.amount}</span>
                                  <span style={{ color: T.textTertiary }}>- {p.date}</span>
                                  <span style={{ color: T.textTertiary, fontStyle: "italic", fontSize: "0.83rem" }}>({p.trigger})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ── VALUE ANCHORING ──────────────────────────────────── */}
                    {(m as any).valueAnchors && (m as any).valueAnchors.length > 0 && (
                      <div
                        style={{
                          marginTop: 20,
                          background: T.glassBright,
                          border: `1px solid ${T.glassBorder}`,
                          borderRadius: 10,
                          padding: "16px 20px",
                        }}
                      >
                        <div style={{ fontSize: "0.68rem", fontWeight: 700, color: T.textTertiary, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                          What This Would Cost Elsewhere
                        </div>
                        <div style={{ display: "grid", gap: 7, marginBottom: 10 }}>
                          {(m as any).valueAnchors.map((anchor: { service: string; marketRate: string }, ai: number) => (
                            <div key={ai} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                              <span style={{ fontSize: "0.82rem", color: T.textSecondary }}>{anchor.service}</span>
                              <span
                                style={{
                                  fontSize: "0.82rem",
                                  color: T.textTertiary,
                                  textDecoration: "line-through",
                                  fontWeight: 500,
                                }}
                              >
                                {anchor.marketRate}
                              </span>
                            </div>
                          ))}
                        </div>
                        {(m as any).totalMarketValue && (
                          <div
                            style={{
                              borderTop: `1px solid ${T.glassBorder}`,
                              paddingTop: 10,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 8,
                            }}
                          >
                            <span style={{ fontSize: "0.82rem", color: T.textTertiary }}>Market total</span>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                              <span
                                style={{
                                  fontSize: "0.88rem",
                                  color: T.textTertiary,
                                  textDecoration: "line-through",
                                }}
                              >
                                {(m as any).totalMarketValue}
                              </span>
                              <span style={{ fontSize: "0.88rem", color: T.gold, fontWeight: 700 }}>
                                Your price: {m.investment}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ── SCOPE BOUNDARIES ─────────────────────────────────── */}
                    {((m as any).scopeIncluded || (m as any).scopeNotIncluded) && (
                      <div
                        style={{
                          marginTop: 14,
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                          gap: 12,
                        }}
                      >
                        {(m as any).scopeIncluded && (m as any).scopeIncluded.length > 0 && (
                          <div
                            style={{
                              background: T.cyanGlow,
                              border: `1px solid ${T.cyanBorder}`,
                              borderRadius: 10,
                              padding: "14px 16px",
                            }}
                          >
                            <div style={{ fontSize: "0.65rem", fontWeight: 700, color: T.cyan, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                              Included
                            </div>
                            <div style={{ display: "grid", gap: 6 }}>
                              {(m as any).scopeIncluded.map((item: string, si: number) => (
                                <div key={si} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                                  <CheckCircle2 size={13} color={T.cyan} style={{ flexShrink: 0, marginTop: 1 }} />
                                  <span style={{ fontSize: "0.83rem", color: T.textSecondary, lineHeight: 1.4 }}>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {(m as any).scopeNotIncluded && (m as any).scopeNotIncluded.length > 0 && (
                          <div
                            style={{
                              background: T.glassBright,
                              border: `1px solid ${T.glassBorder}`,
                              borderRadius: 10,
                              padding: "14px 16px",
                            }}
                          >
                            <div style={{ fontSize: "0.65rem", fontWeight: 700, color: T.textTertiary, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                              Not Included
                            </div>
                            <div style={{ display: "grid", gap: 6 }}>
                              {(m as any).scopeNotIncluded.map((item: string, si: number) => (
                                <div key={si} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                                  <X size={13} color={T.textTertiary} style={{ flexShrink: 0, marginTop: 1 }} />
                                  <span style={{ fontSize: "0.83rem", color: T.textTertiary, lineHeight: 1.4 }}>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Week-by-Week Timeline */}
        <div style={{ position: "relative", marginBottom: 48 }}>
          {/* Section heading row with edit toggle */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 14, marginBottom: 4 }}>
            <SectionHeading sub="Your time commitment at each stage of the build." accent="cyan" label="Week-by-Week Timeline">
              Execution Timeline
            </SectionHeading>
          </div>
          {/* Edit mode toggle positioned top-right of the heading block */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: -32, marginBottom: 20 }}>
            <button
              onClick={() => {
                setEditMode((prev) => !prev);
                setEditingItem(null);
                setDragSource(null);
                setDropTarget(null);
              }}
              title={editMode ? "Exit edit mode" : "Edit timeline"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: editMode ? T.cyanGlow : T.glass,
                border: `1px solid ${editMode ? T.cyan : T.glassBorder}`,
                borderRadius: 999,
                padding: "6px 14px",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: editMode ? T.cyan : T.textTertiary,
                cursor: "pointer",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: editMode ? `0 0 16px ${T.cyanGlow}` : "none",
                transition: "all 0.2s ease",
              }}
            >
              {editMode ? <Check size={13} /> : <Pencil size={13} />}
              {editMode ? "Done Editing" : "Edit Timeline"}
            </button>
          </div>

          <div style={{ display: "grid", gap: 12, marginBottom: 28 }}>
            {roadmapData.map((week, widx) => {
              const isWeekOpen = expandedWeeks.has(widx);
              const pc = phaseColor(week.phase);
              const pb = phaseBg(week.phase);
              return (
                <div
                  key={widx}
                  style={{
                    background: T.glass,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: `1px solid ${editMode && isWeekOpen ? T.cyan + "55" : isWeekOpen ? pc + "44" : T.glassBorder}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                    boxShadow: editMode && isWeekOpen ? `0 0 20px ${T.cyanGlow}` : "none",
                  }}
                >
                  <button
                    onClick={() => toggleSet(setExpandedWeeks, widx)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "16px 22px",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      textAlign: "left",
                    }}
                  >
                    <div style={{ flexShrink: 0, fontSize: "0.78rem", fontWeight: 700, color: pc, background: pb, border: `1px solid ${pc}33`, borderRadius: 6, padding: "3px 10px", letterSpacing: "0.06em" }}>
                      {week.phase}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: "0.95rem", fontWeight: 700, color: T.textPrimary }}>
                          Week {week.week}: {week.title}
                        </span>
                        <span style={{ fontSize: "0.78rem", color: T.textTertiary }}>{week.dateRange}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                      {editMode && (
                        <span style={{ fontSize: "0.65rem", fontWeight: 700, color: T.cyan, background: T.cyanGlow, border: `1px solid ${T.cyanBorder}`, borderRadius: 999, padding: "2px 8px", letterSpacing: "0.06em" }}>
                          LIVE EDIT
                        </span>
                      )}
                      <Clock size={12} color={T.cyan} />
                      <span style={{ fontSize: "0.82rem", fontWeight: 600, color: T.cyan }}>{week.yourTime}</span>
                      <ChevronDown
                        size={18}
                        color={T.textTertiary}
                        style={{ transform: isWeekOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                      />
                    </div>
                  </button>

                  {isWeekOpen && week.days && week.days.length > 0 && (
                    <div style={{ borderTop: `1px solid ${T.glassBorder}`, padding: "16px 22px" }}>
                      <div style={{ display: "grid", gap: 12 }}>
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(week.days as any[]).map((d: any, di: number) => (
                          <div
                            key={di}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "80px 1fr 1fr",
                              gap: 16,
                              padding: "10px 0",
                              borderBottom: di < week.days.length - 1 ? `1px solid ${T.glassBorder}` : "none",
                            }}
                          >
                            {/* Day label */}
                            <div>
                              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: T.textPrimary }}>{d.day}</div>
                              <div style={{ fontSize: "0.72rem", color: T.textTertiary }}>{d.date}</div>
                            </div>

                            {/* MONMAC LABS column */}
                            <div
                              onDragOver={editMode ? (e) => { e.preventDefault(); setDropTarget({ weekIdx: widx, dayIdx: di, column: "weDo" }); } : undefined}
                              onDragLeave={editMode ? () => { if (dropTarget?.weekIdx === widx && dropTarget?.dayIdx === di && dropTarget?.column === "weDo") setDropTarget(null); } : undefined}
                              onDrop={editMode ? (e) => { e.preventDefault(); handleDrop(widx, di, "weDo"); } : undefined}
                              style={{
                                borderRadius: 8,
                                padding: editMode ? "6px 8px" : undefined,
                                border: editMode
                                  ? dropTarget?.weekIdx === widx && dropTarget?.dayIdx === di && dropTarget?.column === "weDo"
                                    ? `1px dashed ${T.cyan}`
                                    : `1px dashed ${T.cyan}22`
                                  : "1px solid transparent",
                                background: editMode
                                  ? dropTarget?.weekIdx === widx && dropTarget?.dayIdx === di && dropTarget?.column === "weDo"
                                    ? `${T.cyan}0a`
                                    : `${T.cyan}05`
                                  : "transparent",
                                transition: "border-color 0.15s, background 0.15s",
                              }}
                            >
                              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.cyan, marginBottom: 6 }}>MONMAC LABS</div>
                              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                              {(d.weDoItems as any[]).map((item: any, ii: number) => {
                                const isEditing = editingItem?.weekIdx === widx && editingItem?.dayIdx === di && editingItem?.itemIdx === ii && editingItem?.column === "weDo";
                                return (
                                  <div
                                    key={ii}
                                    draggable={editMode}
                                    onDragStart={editMode ? () => setDragSource({ weekIdx: widx, dayIdx: di, itemIdx: ii, column: "weDo" }) : undefined}
                                    onDragEnd={editMode ? () => { setDragSource(null); setDropTarget(null); } : undefined}
                                    style={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                      gap: 4,
                                      marginBottom: 4,
                                      cursor: editMode ? "grab" : "default",
                                      opacity: dragSource?.weekIdx === widx && dragSource?.dayIdx === di && dragSource?.itemIdx === ii && dragSource?.column === "weDo" ? 0.4 : 1,
                                      transition: "opacity 0.15s",
                                    }}
                                  >
                                    {editMode && (
                                      <GripVertical
                                        size={12}
                                        color={T.textTertiary}
                                        style={{ flexShrink: 0, marginTop: 3, opacity: 0.5 }}
                                      />
                                    )}
                                    {!editMode && <CheckCircle2 size={12} color={T.cyan} style={{ flexShrink: 0, marginTop: 2 }} />}
                                    {isEditing ? (
                                      <input
                                        ref={editInputRef}
                                        autoFocus
                                        defaultValue={item}
                                        onBlur={(e) => {
                                          updateRoadmapItem(widx, di, "weDo", ii, e.target.value);
                                          setEditingItem(null);
                                        }}
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                            updateRoadmapItem(widx, di, "weDo", ii, (e.target as HTMLInputElement).value);
                                            setEditingItem(null);
                                          } else if (e.key === "Escape") {
                                            setEditingItem(null);
                                          }
                                        }}
                                        style={{
                                          flex: 1,
                                          fontSize: "0.8rem",
                                          color: T.textPrimary,
                                          background: `${T.cyan}15`,
                                          border: `1px solid ${T.cyanBorder}`,
                                          borderRadius: 5,
                                          padding: "2px 6px",
                                          outline: "none",
                                          lineHeight: 1.4,
                                          fontFamily: "inherit",
                                        }}
                                      />
                                    ) : (
                                      <span
                                        onClick={editMode ? () => setEditingItem({ weekIdx: widx, dayIdx: di, itemIdx: ii, column: "weDo" }) : undefined}
                                        style={{
                                          flex: 1,
                                          fontSize: "0.8rem",
                                          color: T.textSecondary,
                                          lineHeight: 1.4,
                                          cursor: editMode ? "text" : "default",
                                          borderRadius: 4,
                                          padding: editMode ? "1px 3px" : undefined,
                                        }}
                                      >
                                        {item}
                                      </span>
                                    )}
                                    {editMode && !isEditing && (
                                      <button
                                        onClick={(e) => { e.stopPropagation(); removeRoadmapItem(widx, di, "weDo", ii); }}
                                        title="Remove item"
                                        style={{
                                          flexShrink: 0,
                                          background: "none",
                                          border: "none",
                                          cursor: "pointer",
                                          padding: "1px 2px",
                                          color: T.pink,
                                          opacity: 0.6,
                                          lineHeight: 1,
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <X size={11} />
                                      </button>
                                    )}
                                  </div>
                                );
                              })}
                              {editMode && (
                                <button
                                  onClick={() => addRoadmapItem(widx, di, "weDo")}
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    marginTop: 4,
                                    background: "none",
                                    border: `1px dashed ${T.cyan}44`,
                                    borderRadius: 5,
                                    padding: "2px 8px",
                                    fontSize: "0.72rem",
                                    color: T.cyan,
                                    cursor: "pointer",
                                    opacity: 0.7,
                                  }}
                                >
                                  <Plus size={10} /> Add
                                </button>
                              )}
                            </div>

                            {/* YOUR ROLE column */}
                            <div
                              onDragOver={editMode ? (e) => { e.preventDefault(); setDropTarget({ weekIdx: widx, dayIdx: di, column: "youDo" }); } : undefined}
                              onDragLeave={editMode ? () => { if (dropTarget?.weekIdx === widx && dropTarget?.dayIdx === di && dropTarget?.column === "youDo") setDropTarget(null); } : undefined}
                              onDrop={editMode ? (e) => { e.preventDefault(); handleDrop(widx, di, "youDo"); } : undefined}
                              style={{
                                borderRadius: 8,
                                padding: editMode ? "6px 8px" : undefined,
                                border: editMode
                                  ? dropTarget?.weekIdx === widx && dropTarget?.dayIdx === di && dropTarget?.column === "youDo"
                                    ? `1px dashed ${T.pink}`
                                    : `1px dashed ${T.pink}22`
                                  : "1px solid transparent",
                                background: editMode
                                  ? dropTarget?.weekIdx === widx && dropTarget?.dayIdx === di && dropTarget?.column === "youDo"
                                    ? `${T.pink}0a`
                                    : `${T.pink}05`
                                  : "transparent",
                                transition: "border-color 0.15s, background 0.15s",
                              }}
                            >
                              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.pink, marginBottom: 6 }}>YOU</div>
                              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                              {d.youDo.length > 0 ? (d.youDo as any[]).map((item: any, ii: number) => {
                                const isEditing = editingItem?.weekIdx === widx && editingItem?.dayIdx === di && editingItem?.itemIdx === ii && editingItem?.column === "youDo";
                                return (
                                  <div
                                    key={ii}
                                    draggable={editMode}
                                    onDragStart={editMode ? () => setDragSource({ weekIdx: widx, dayIdx: di, itemIdx: ii, column: "youDo" }) : undefined}
                                    onDragEnd={editMode ? () => { setDragSource(null); setDropTarget(null); } : undefined}
                                    style={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                      gap: 4,
                                      marginBottom: 4,
                                      cursor: editMode ? "grab" : "default",
                                      opacity: dragSource?.weekIdx === widx && dragSource?.dayIdx === di && dragSource?.itemIdx === ii && dragSource?.column === "youDo" ? 0.4 : 1,
                                      transition: "opacity 0.15s",
                                    }}
                                  >
                                    {editMode && (
                                      <GripVertical
                                        size={12}
                                        color={T.textTertiary}
                                        style={{ flexShrink: 0, marginTop: 3, opacity: 0.5 }}
                                      />
                                    )}
                                    {!editMode && <Clock size={12} color={T.pink} style={{ flexShrink: 0, marginTop: 2 }} />}
                                    {isEditing ? (
                                      <input
                                        ref={editInputRef}
                                        autoFocus
                                        defaultValue={item}
                                        onBlur={(e) => {
                                          updateRoadmapItem(widx, di, "youDo", ii, e.target.value);
                                          setEditingItem(null);
                                        }}
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                            updateRoadmapItem(widx, di, "youDo", ii, (e.target as HTMLInputElement).value);
                                            setEditingItem(null);
                                          } else if (e.key === "Escape") {
                                            setEditingItem(null);
                                          }
                                        }}
                                        style={{
                                          flex: 1,
                                          fontSize: "0.8rem",
                                          color: T.textPrimary,
                                          background: `${T.pink}15`,
                                          border: `1px solid ${T.pinkBorder}`,
                                          borderRadius: 5,
                                          padding: "2px 6px",
                                          outline: "none",
                                          lineHeight: 1.4,
                                          fontFamily: "inherit",
                                        }}
                                      />
                                    ) : (
                                      <span
                                        onClick={editMode ? () => setEditingItem({ weekIdx: widx, dayIdx: di, itemIdx: ii, column: "youDo" }) : undefined}
                                        style={{
                                          flex: 1,
                                          fontSize: "0.8rem",
                                          color: T.textSecondary,
                                          lineHeight: 1.4,
                                          cursor: editMode ? "text" : "default",
                                          borderRadius: 4,
                                          padding: editMode ? "1px 3px" : undefined,
                                        }}
                                      >
                                        {item}
                                      </span>
                                    )}
                                    {editMode && !isEditing && (
                                      <button
                                        onClick={(e) => { e.stopPropagation(); removeRoadmapItem(widx, di, "youDo", ii); }}
                                        title="Remove item"
                                        style={{
                                          flexShrink: 0,
                                          background: "none",
                                          border: "none",
                                          cursor: "pointer",
                                          padding: "1px 2px",
                                          color: T.pink,
                                          opacity: 0.6,
                                          lineHeight: 1,
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <X size={11} />
                                      </button>
                                    )}
                                  </div>
                                );
                              }) : (
                                editMode ? null : (
                                  <span style={{ fontSize: "0.8rem", color: T.textTertiary, fontStyle: "italic" }}>Nothing, we&apos;re building</span>
                                )
                              )}
                              {editMode && (
                                <button
                                  onClick={() => addRoadmapItem(widx, di, "youDo")}
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    marginTop: 4,
                                    background: "none",
                                    border: `1px dashed ${T.pink}44`,
                                    borderRadius: 5,
                                    padding: "2px 8px",
                                    fontSize: "0.72rem",
                                    color: T.pink,
                                    cursor: "pointer",
                                    opacity: 0.7,
                                  }}
                                >
                                  <Plus size={10} /> Add
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ padding: "14px 20px", background: T.cyanGlow, border: `1px solid ${T.cyanBorder}`, borderRadius: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <Clock size={14} color={T.cyan} />
              <span style={{ fontSize: "0.83rem", color: T.textSecondary }}>
                <strong style={{ color: T.cyan }}>Total: {roadmap.totalYourTime}</strong>, spread across short review sessions, never more than 90 minutes at a time.
              </span>
            </div>
          </div>
        </div>

        {/* Division of Labor */}
        <SectionHeading sub="You focus on teaching. We build everything else." accent="pink" label="Division of Labor">
          Your Role vs. Ours
        </SectionHeading>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
          <GlassCard glow="pink" style={{ padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Mic size={16} color={T.pink} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: T.pink, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Your Role
              </span>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                "Record narration (scripts provided, your own pace, no studio required)",
                "Review and approve content before anything publishes",
                "Walk through the course as a student at each Proof Gate",
                "Monthly strategy call (45 min/month in ongoing support)",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Check size={14} color={T.pink} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.87rem", color: T.textSecondary, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard glow="cyan" style={{ padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Sparkles size={16} color={T.cyan} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: T.cyan, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Monmac Labs Does
              </span>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                "All scripting, editing, and video production for every lesson",
                "Course platform setup, payment processing, and technical configuration",
                "All email copywriting and automation",
                "All social content creation and scheduling",
                "Analytics, optimization, and monthly reporting",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Check size={14} color={T.cyan} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.87rem", color: T.textSecondary, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6b: ROI WALKTHROUGH (after Plan, before Marketing)
      ═══════════════════════════════════════════════════════════════════════ */}
      {(ISL_CONFIG as any).roi?.walkthrough && (ISL_CONFIG as any).roi.walkthrough.length > 0 && (
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 24px 80px",
            position: "relative",
          }}
        >
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: T.textPrimary,
              margin: "0 0 6px",
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            How We Got These Numbers
          </h3>
          <p style={{ fontSize: "0.85rem", color: T.textTertiary, textAlign: "center", margin: "0 0 28px", lineHeight: 1.55 }}>
            A transparent, step-by-step revenue walkthrough
          </p>

          <div style={{ position: "relative" }}>
            {/* Vertical connector line */}
            <div
              style={{
                position: "absolute",
                left: 19,
                top: 0,
                bottom: 0,
                width: 1,
                background: `linear-gradient(to bottom, ${T.goldBorder}, transparent)`,
                pointerEvents: "none",
              }}
            />

            <div style={{ display: "grid", gap: 10 }}>
              {(ISL_CONFIG as any).roi.walkthrough.map((step: { label: string; value: string; explanation: string }, si: number) => {
                const isLast = si === (ISL_CONFIG as any).roi.walkthrough.length - 1;
                return (
                  <div
                    key={si}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                    }}
                  >
                    {/* Step number bubble */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: isLast ? T.gold : T.goldGlow,
                        border: `2px solid ${T.goldBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        color: isLast ? T.bgPrimary : T.gold,
                        zIndex: 1,
                        boxShadow: isLast ? `0 0 20px ${T.goldGlow}` : "none",
                      }}
                    >
                      {si + 1}
                    </div>

                    {/* Step content */}
                    <div
                      style={{
                        flex: 1,
                        background: isLast ? T.goldGlow : T.glass,
                        border: `1px solid ${isLast ? T.goldBorder : T.glassBorder}`,
                        borderRadius: 12,
                        padding: "14px 18px",
                        boxShadow: isLast ? `0 0 30px ${T.goldGlow}` : "none",
                        marginBottom: 2,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontSize: isLast ? "0.95rem" : "0.88rem",
                            fontWeight: 700,
                            color: isLast ? T.gold : T.textPrimary,
                          }}
                        >
                          {step.label}
                        </span>
                        <span
                          style={{
                            fontSize: isLast ? "1.4rem" : "1rem",
                            fontWeight: 800,
                            color: T.gold,
                            letterSpacing: "-0.02em",
                            textShadow: isLast ? `0 0 20px ${T.goldGlow}` : "none",
                          }}
                        >
                          {step.value}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.83rem", color: T.textTertiary, marginTop: 4, lineHeight: 1.5 }}>
                        {step.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Return callout */}
          <div
            style={{
              marginTop: 20,
              background: T.goldGlow,
              border: `1px solid ${T.goldBorder}`,
              borderRadius: 12,
              padding: "16px 22px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.95rem", color: T.textSecondary, margin: 0, lineHeight: 1.6 }}>
              For every{" "}
              <span style={{ color: T.gold, fontWeight: 700 }}>$1</span>{" "}
              you invest, you get back{" "}
              <span style={{ color: T.gold, fontWeight: 700 }}>
                {(ISL_CONFIG as any).roi?.returnMultiple ?? "$19–$28"}
              </span>{" "}
              in Year 1.
            </p>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8: MARKETING ENGINE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="marketing"
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
        }}
      >
        <GlowOrb color={T.pink} size={500} top={100} right={-150} opacity={0.07} />

        <SectionHeading
          accent="pink"
          label="Marketing Engine"
          sub="12-email full funnel. LinkedIn growth strategy. All copy drafted in your voice. Nothing publishes without your approval."
        >
          Marketing Engine
        </SectionHeading>

        {/* ── EMAIL FUNNEL STRATEGY ─────────────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <Mail size={18} color={T.pink} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: T.textPrimary, margin: 0 }}>
              Email Funnel Strategy: 12 Emails, 3 Sequences
            </h3>
          </div>

          {/* Visual funnel */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
            {[
              { label: "Lead Magnet Download", color: T.textTertiary, border: T.glassBorder, bg: T.glass },
              { label: "→", color: T.textTertiary, border: "transparent", bg: "transparent" },
              { label: "Welcome (4)", color: T.pink, border: T.pinkBorder, bg: T.pinkGlow },
              { label: "→", color: T.textTertiary, border: "transparent", bg: "transparent" },
              { label: "Nurture (6)", color: T.cyan, border: T.cyanBorder, bg: T.cyanGlow },
              { label: "→", color: T.textTertiary, border: "transparent", bg: "transparent" },
              { label: "Launch (2)", color: T.gold, border: T.goldBorder, bg: T.goldGlow },
            ].map((step, i) => (
              step.label === "→" ? (
                <span key={i} style={{ fontSize: "1rem", color: step.color, fontWeight: 700 }}>{step.label}</span>
              ) : (
                <div key={i} style={{ padding: "5px 14px", borderRadius: 999, border: `1px solid ${step.border}`, background: step.bg, fontSize: "0.78rem", fontWeight: 700, color: step.color }}>
                  {step.label}
                </div>
              )
            ))}
          </div>

          {/* Email category tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {[
              { key: "welcome", label: "Welcome (4)", color: "pink" as const },
              { key: "nurture", label: "Nurture (6)", color: "cyan" as const },
              { key: "launch", label: "Launch (2)", color: "gold" as const },
            ].map((tab) => {
              const isActive = expandedEmailCategory === tab.key;
              const c = tab.color === "pink" ? T.pink : tab.color === "gold" ? T.gold : T.cyan;
              const glow = tab.color === "pink" ? T.pinkGlow : tab.color === "gold" ? T.goldGlow : T.cyanGlow;
              const border = tab.color === "pink" ? T.pinkBorder : tab.color === "gold" ? T.goldBorder : T.cyanBorder;
              return (
                <button
                  key={tab.key}
                  onClick={() => setExpandedEmailCategory(isActive ? null : tab.key)}
                  style={{
                    background: isActive ? glow : T.glass,
                    border: `1px solid ${isActive ? border : T.glassBorder}`,
                    borderRadius: 999,
                    padding: "8px 18px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: isActive ? c : T.textTertiary,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {expandedEmailCategory && (
            <div style={{ display: "grid", gap: 10 }}>
              {emails
                .filter((e) => e.sequence === expandedEmailCategory)
                .map((email) => {
                  const seqColor = expandedEmailCategory === "welcome" ? T.pink : expandedEmailCategory === "launch" ? T.gold : T.cyan;
                  const seqGlow = expandedEmailCategory === "welcome" ? T.pinkGlow : expandedEmailCategory === "launch" ? T.goldGlow : T.cyanGlow;
                  const seqBorder = expandedEmailCategory === "welcome" ? T.pinkBorder : expandedEmailCategory === "launch" ? T.goldBorder : T.cyanBorder;
                  return (
                    <GlassCard
                      key={email.number}
                      style={{ padding: "20px 22px" }}
                      glow={expandedEmailCategory === "welcome" ? "pink" : expandedEmailCategory === "launch" ? "gold" : "cyan"}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                        <div
                          style={{
                            flexShrink: 0,
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: seqGlow,
                            border: `1px solid ${seqBorder}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: seqColor,
                          }}
                        >
                          {email.number}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                            <span style={{ fontSize: "0.92rem", fontWeight: 600, color: T.textPrimary }}>
                              {email.subject}
                            </span>
                            <span
                              style={{
                                fontSize: "0.7rem",
                                color: T.textTertiary,
                                background: T.glassBright,
                                borderRadius: 6,
                                padding: "2px 7px",
                              }}
                            >
                              {email.trigger}
                            </span>
                          </div>
                          {/* Purpose field - what this email does for the funnel */}
                          <div style={{ fontSize: "0.8rem", fontWeight: 600, color: seqColor, marginBottom: 6, lineHeight: 1.45 }}>
                            {email.purpose}
                          </div>
                          <p style={{ fontSize: "0.8rem", color: T.textTertiary, margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>
                            &ldquo;{email.preview}&rdquo;
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
            </div>
          )}
        </div>

        {/* ── LINKEDIN GROWTH STRATEGY ─────────────────────────────────────── */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Linkedin size={18} color={T.cyan} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: T.textPrimary, margin: 0 }}>
              LinkedIn Growth Strategy
            </h3>
          </div>

          {/* Current Audit */}
          <GlassCard style={{ padding: "20px 24px", marginBottom: 16 }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textTertiary, marginBottom: 12 }}>
              Current Audit: Starting Baseline
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "Followers", value: linkedinStrategy.currentAudit.followers },
                { label: "Avg. Post Engagement", value: linkedinStrategy.currentAudit.avgPostEngagement },
                { label: "Post Frequency", value: linkedinStrategy.currentAudit.postFrequency },
                { label: "Top Performing Content", value: linkedinStrategy.currentAudit.topPerformingContent },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: T.textTertiary, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: "0.85rem", color: T.textSecondary, lineHeight: 1.4 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Growth Targets */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
            {[
              { label: "Week 4", value: linkedinStrategy.growthTargets.week4 },
              { label: "Week 8", value: linkedinStrategy.growthTargets.week8 },
              { label: "Week 12", value: linkedinStrategy.growthTargets.week12 },
            ].map((g, i) => (
              <div key={g.label} style={{ padding: "16px 18px", background: T.cyanGlow, border: `1px solid ${T.cyanBorder}`, borderRadius: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <TrendingUp size={13} color={T.cyan} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: T.cyan, textTransform: "uppercase", letterSpacing: "0.06em" }}>{g.label}</span>
                </div>
                <div style={{ fontSize: "0.82rem", color: T.textSecondary, lineHeight: 1.4 }}>{g.value}</div>
              </div>
            ))}
          </div>

          {/* Weekly Content Plan */}
          <GlassCard glow="cyan" style={{ padding: "20px 24px", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: T.textPrimary }}>{linkedinStrategy.weeklyPlan.postsPerWeek}</div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: T.textPrimary }}>posts/week</div>
                <div style={{ fontSize: "0.72rem", color: T.textTertiary }}>Weekly Content Plan</div>
              </div>
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {linkedinStrategy.weeklyPlan.contentMix.map((mix, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderBottom: i < linkedinStrategy.weeklyPlan.contentMix.length - 1 ? `1px solid ${T.glassBorder}` : "none" }}>
                  <div style={{ flexShrink: 0, width: 6, height: 6, borderRadius: "50%", background: T.cyan, marginTop: 6 }} />
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: T.textPrimary }}>{mix.type}</div>
                    <div style={{ fontSize: "0.8rem", color: T.textTertiary }}>{mix.frequency}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Philosophy callout */}
          <GlassCard style={{ padding: "18px 22px", marginBottom: 20 }}>
            <p style={{ fontSize: "0.88rem", color: T.textSecondary, margin: 0, lineHeight: 1.7 }}>
              {linkedinStrategy.approach}
            </p>
          </GlassCard>

          {/* Sample posts */}
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: T.textTertiary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
            Sample Posts: Examples of the Content We Create
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
            {(["Thought Leadership", "Personal Story", "Educational", "Community & CTA"] as const).map((cat) => {
              const colorMap: Record<string, "pink" | "gold" | "cyan"> = {
                "Thought Leadership": "pink",
                "Personal Story": "gold",
                "Educational": "cyan",
                "Community & CTA": "pink",
              };
              const color = colorMap[cat] ?? "pink";
              const isActive = expandedLinkedinCategory === cat;
              const c = color === "pink" ? T.pink : color === "cyan" ? T.cyan : T.gold;
              const glow = color === "pink" ? T.pinkGlow : color === "cyan" ? T.cyanGlow : T.goldGlow;
              const border = color === "pink" ? T.pinkBorder : color === "cyan" ? T.cyanBorder : T.goldBorder;
              return (
                <button
                  key={cat}
                  onClick={() => setExpandedLinkedinCategory(isActive ? null : cat)}
                  style={{
                    background: isActive ? glow : T.glass,
                    border: `1px solid ${isActive ? border : T.glassBorder}`,
                    borderRadius: 999,
                    padding: "7px 16px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: isActive ? c : T.textTertiary,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {expandedLinkedinCategory && (
            <div style={{ display: "grid", gap: 10 }}>
              {linkedinStrategy.samplePosts
                .filter((p) => p.category === expandedLinkedinCategory)
                .map((post) => (
                  <GlassCard key={post.number} style={{ padding: "18px 22px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div
                        style={{
                          flexShrink: 0,
                          width: 28,
                          height: 28,
                          borderRadius: 7,
                          background: T.glassBright,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: T.textTertiary,
                        }}
                      >
                        {post.number}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                          <span style={{ fontSize: "0.88rem", fontWeight: 600, color: T.textPrimary }}>{post.title}</span>
                          <AccentPill color={post.category === "Thought Leadership" || post.category === "Community & CTA" ? "pink" : post.category === "Personal Story" ? "gold" : "cyan"}>
                            {post.category}
                          </AccentPill>
                        </div>
                        <p style={{ fontSize: "0.84rem", color: T.textSecondary, margin: "0 0 8px", fontStyle: "italic", lineHeight: 1.5 }}>
                          &ldquo;{post.hook}&rdquo;
                        </p>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: T.textTertiary, lineHeight: 1.4, padding: "6px 10px", background: T.glassBright, borderRadius: 8 }}>
                          Purpose: {post.purpose}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
            </div>
          )}

          {!expandedLinkedinCategory && (
            <p style={{ fontSize: "0.85rem", color: T.textTertiary, textAlign: "center" }}>
              Select a category above to see sample posts
            </p>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 9: INVESTMENT + CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="investment"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "80px 24px 100px",
          position: "relative",
        }}
      >
        <GlowOrb color={T.pink} size={600} top={-100} left="20%" opacity={0.08} />

        <SectionHeading
          accent="gold"
          label="Investment"
          sub="Milestone-gated: you decide to continue after seeing proof at each stage."
        >
          Investment Summary
        </SectionHeading>

        {/* ── COST OF WAITING ──────────────────────────────────────────────── */}
        {(ISL_CONFIG as any).costOfWaiting?.items && (ISL_CONFIG as any).costOfWaiting.items.length > 0 && (
          <div
            style={{
              background: T.pinkGlow,
              border: `1px solid ${T.pinkBorder}`,
              borderRadius: 16,
              padding: "28px 30px",
              marginBottom: 48,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
              <AlertTriangle size={20} color={T.pink} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: T.textPrimary,
                    margin: "0 0 4px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {(ISL_CONFIG as any).costOfWaiting?.headline ?? "The Cost of Waiting"}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: T.textTertiary,
                    margin: 0,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  {(ISL_CONFIG as any).costOfWaiting?.subtitle ?? "This isn't urgency. This is math."}
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
              {(ISL_CONFIG as any).costOfWaiting.items.map((item: { delay: string; lostRevenue: string; note: string }, ci: number) => {
                const isHeavy = ci >= 2;
                return (
                  <div
                    key={ci}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 16px",
                      background: isHeavy ? "rgba(232,84,140,0.08)" : T.glass,
                      border: `1px solid ${isHeavy ? T.pinkBorder : T.glassBorder}`,
                      borderRadius: 10,
                    }}
                  >
                    {/* Progress bar segment */}
                    <div style={{ flexShrink: 0, width: 60 }}>
                      <div
                        style={{
                          height: 4,
                          borderRadius: 2,
                          background: T.pinkBorder,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${(ci + 1) * 25}%`,
                            background: T.pink,
                            borderRadius: 2,
                          }}
                        />
                      </div>
                      <div style={{ fontSize: "0.68rem", color: T.textTertiary, marginTop: 4, fontWeight: 600 }}>
                        {item.delay}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: isHeavy ? "1.2rem" : "1rem",
                          fontWeight: 800,
                          color: T.pink,
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                          marginBottom: 2,
                        }}
                      >
                        {item.lostRevenue}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: T.textTertiary, lineHeight: 1.4 }}>
                        {item.note}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Investment: Payment Schedule by Phase */}
        <div style={{ display: "grid", gap: 14, marginBottom: 20 }}>
          {investment.phases.map((p, pidx) => {
            const isPhaseOpen = expandedMilestones.has(pidx);
            return (
              <div
                key={p.name}
                style={{
                  background: T.glass,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1px solid ${isPhaseOpen ? T.goldBorder : T.glassBorder}`,
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => toggleSet(setExpandedMilestones, pidx)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    textAlign: "left",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: T.textPrimary, marginBottom: 2 }}>{p.name}</div>
                    <div style={{ fontSize: "0.78rem", color: T.textTertiary }}>{p.dateRange}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: T.gold }}>{p.total}</span>
                    <ChevronDown
                      size={18}
                      color={T.textTertiary}
                      style={{ transform: isPhaseOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                    />
                  </div>
                </button>

                {isPhaseOpen && (
                  <div style={{ borderTop: `1px solid ${T.glassBorder}`, padding: "16px 22px" }}>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.textTertiary, marginBottom: 12 }}>
                      Payment Schedule
                    </div>
                    <div style={{ display: "grid", gap: 10 }}>
                      {p.payments.map((pmt, pi) => (
                        <div key={pi} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: T.glassBright, borderRadius: 10 }}>
                          <div style={{ flexShrink: 0, width: 64, fontSize: "0.95rem", fontWeight: 700, color: T.gold }}>{pmt.amount}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: "0.82rem", fontWeight: 600, color: T.textPrimary }}>{pmt.date}</div>
                            <div style={{ fontSize: "0.8rem", color: T.textTertiary }}>{pmt.trigger}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Total + Monthly summary */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ padding: "18px 20px", background: T.goldGlow, border: `1px solid ${T.goldBorder}`, borderRadius: 12 }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.gold, marginBottom: 6 }}>
                Project Total (M1–M3)
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: T.gold, letterSpacing: "-0.02em" }}>
                {investment.projectTotal}
              </div>
            </div>
            <div style={{ padding: "18px 20px", background: T.cyanGlow, border: `1px solid ${T.cyanBorder}`, borderRadius: 12 }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.cyan, marginBottom: 6 }}>
                Ongoing Support (after launch)
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: T.cyan }}>
                {investment.monthlyAfter}
              </div>
              <div style={{ fontSize: "0.8rem", color: T.textTertiary, marginTop: 4, lineHeight: 1.4 }}>
                {investment.monthlyScaling}
              </div>
            </div>
          </div>
        </div>

        {/* Stop at any milestone callout */}
        <GlassCard style={{ padding: "18px 24px", marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <Check size={18} color={T.cyan} style={{ flexShrink: 0, marginTop: 1 }} />
            <p style={{ fontSize: "0.9rem", color: T.textSecondary, margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: T.textPrimary }}>Stop at any milestone.</strong>{" "}
              Everything built is yours to keep, with no lock-in, no obligation to continue. Each milestone stands alone as a complete, useful deliverable.
            </p>
          </div>
        </GlassCard>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: T.textPrimary,
              margin: "0 0 16px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Begin?
          </h2>
          <p
            style={{
              color: T.textSecondary,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Milestone 1 is {investment.phases[0].total} and runs {investment.phases[0].dateRange}. At conservative course sales,
            that investment pays for itself within the first 1–2 months of launch.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:hello@monmaclabs.dev?subject=ISL%20Milestone%201%20%E2%80%94%20Let%27s%20Begin"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: T.gradientPink,
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "15px 34px",
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: `0 0 40px ${T.pinkGlow}`,
                letterSpacing: "-0.01em",
              }}
            >
              Start Milestone 1
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:hello@monmaclabs.dev?subject=ISL%20Questions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: T.glass,
                color: T.textSecondary,
                fontWeight: 600,
                fontSize: "1rem",
                padding: "15px 28px",
                borderRadius: 12,
                textDecoration: "none",
                border: `1px solid ${T.glassBorder}`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          textAlign: "center",
          padding: "28px 24px",
          borderTop: `1px solid ${T.glassBorder}`,
          fontSize: "0.82rem",
          color: T.textTertiary,
          background: T.bgSecondary,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Heart size={12} color={T.pink} />
          <span>Prepared by Monmac Labs | February 2026</span>
        </div>
      </footer>
    </div>
  );
}
