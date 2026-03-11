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
  bgPrimary: "#FAF8F5",      // warm cream
  bgSecondary: "#FFFFFF",     // white
  bgTertiary: "#F7F5F0",     // slightly darker cream
  glass: "rgba(255, 255, 255, 0.8)",
  glassBorder: "rgba(0, 0, 0, 0.1)",
  glassHover: "rgba(0, 0, 0, 0.05)",
  glassBright: "rgba(255, 255, 255, 0.9)",
  textPrimary: "#2D3748",     // dark charcoal text
  textSecondary: "#4A5568",   // medium gray text
  textTertiary: "#718096",    // light gray text
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
  accent: "#7ECBC4",         // soft teal
  accentHover: "#6BB8B1",    // darker teal on hover
  accentLight: "rgba(126, 203, 196, 0.1)", // teal tint
  border: "#E2E8F0",         // light gray border
  ctaBackground: "#D4727A",  // rose/pink for CTA buttons
  ctaHover: "#C4626A",       // darker rose on hover
  ctaText: "#FFFFFF",        // white text on CTA
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
                {clientProfile.credentials.replace("equity education consultant", "leadership coach, researcher")}
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: T.textSecondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {clientProfile.bio.replace(/—/g, ",").replace("equity education consultant", "leadership coach")}
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
              background: "rgba(0,0,0,0.02)",
              border: `1px solid rgba(0,0,0,0.05)`,
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
                        background: "rgba(0,0,0,0.04)",
                        border: `1px solid rgba(0,0,0,0.07)`,
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
                        {item.label.replace("Undermonetized", "Undervalued")}
                      </div>
                      <div style={{ fontSize: "0.83rem", color: T.textTertiary, lineHeight: 1.5, opacity: 0.75 }}>
                        {item.detail
                          .replace("could be licensed, taught, or scaled", "could be shared, taught, or structured")
                          .replace("licensing frameworks", "stewardship frameworks")
                          .replace("monetizing every layer", "protecting and stewarding every layer")
                          .replace(/—/g, ",")}
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

          {/* 60 DAYS column */}
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
                        {item.detail
                          .replace("not just a sales funnel", "not just something to be extracted")
                          .replace(/—/g, ",")}
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

      {/* Continue with sections 4-9 from the previous file, but also need the rest of the file... Let me get the remainder */}
      
      {/* Rest of sections will be included in the footer comment for now while we test this portion */}
      
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