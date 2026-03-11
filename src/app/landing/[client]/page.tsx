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
  bgSecondary: "#ffffff",
  bgTertiary: "#f8f6f3",
  glass: "rgba(255, 255, 255, 0.8)",
  glassBorder: "rgba(0, 0, 0, 0.08)",
  glassHover: "rgba(0, 0, 0, 0.03)",
  glassBright: "rgba(255, 255, 255, 0.9)",
  textPrimary: "#2D3748",
  textSecondary: "#4A5568",
  textTertiary: "#718096",
  pink: "#E8548C",
  pinkGlow: "rgba(232, 84, 140, 0.08)",
  pinkBorder: "rgba(232, 84, 140, 0.15)",
  cyan: "#7ECBC4",
  cyanGlow: "rgba(126, 203, 196, 0.08)",
  cyanBorder: "rgba(126, 203, 196, 0.15)",
  gold: "#FFD93D",
  goldGlow: "rgba(255, 217, 61, 0.08)",
  goldBorder: "rgba(255, 217, 61, 0.15)",
  gradientPink: "linear-gradient(135deg, #E8548C, #c44477)",
  gradientCyan: "linear-gradient(135deg, #7ECBC4, #4ECDC4)",
  gradientGold: "linear-gradient(135deg, #FFD93D, #e6c235)",
  gradientText: "linear-gradient(135deg, #E8548C 0%, #7ECBC4 50%, #FFD93D 100%)",
  gradientBg: "linear-gradient(180deg, #FAF8F5 0%, #ffffff 50%, #FAF8F5 100%)",
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
        background: "white",
        border: `1px solid ${borderColor}`,
        borderRadius: 16,
        padding: "24px 28px",
        boxShadow: glow ? `0 4px 12px ${glowColor}, 0 2px 4px rgba(0, 0, 0, 0.05)` : "0 2px 4px rgba(0, 0, 0, 0.05)",
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
  // ── State ────────────────────────────────────────────────────────────────────
  const [activeSection, setActiveSection] = useState("hero");

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
            IP STEWARDSHIP LAB
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
            A space for educators and practitioners to protect and steward intellectual property
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
            Learn to share expansively while protecting the integrity of your work
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
            For justice-oriented practitioners who understand that knowledge carries responsibility
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
              { label: "Equity Traps", sub: "Framework Focus", glow: T.pinkGlow, border: T.pinkBorder, accent: T.pink },
              { label: "Undiscerning", sub: "Sharing Patterns", glow: T.cyanGlow, border: T.cyanBorder, accent: T.cyan },
              { label: "Coming Soon", sub: "Course Pricing", glow: T.goldGlow, border: T.goldBorder, accent: T.gold },
              { label: "Stewardship", sub: "Practice Focus", glow: T.pinkGlow, border: T.pinkBorder, accent: T.pink },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "white",
                  border: `1px solid ${stat.border}`,
                  borderRadius: 16,
                  padding: "20px 28px",
                  minWidth: 140,
                  boxShadow: `0 4px 12px ${stat.glow}, 0 2px 4px rgba(0, 0, 0, 0.05)`,
                }}
              >
                <div
                  style={{
                    fontSize: "1.6rem",
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
            <p style={{ fontSize: "1.25rem", lineHeight: 1.7, color: T.textSecondary, marginBottom: 32 }}>
              The IP Stewardship Lab is a comprehensive platform designed for justice-oriented practitioners who need to protect, 
              steward, and thoughtfully share their intellectual property. We offer education, frameworks, and community for those 
              who refuse to see their expertise as something to be extracted without integrity.
            </p>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6, color: T.textTertiary, marginBottom: 24 }}>
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
                <p style={{ fontSize: "0.9rem", color: T.textTertiary }}>Safeguard your intellectual wealth from extraction</p>
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
                <Heart size={32} color={T.pink} style={{ marginBottom: 12 }} />
                <h3 style={{ fontSize: "1rem", color: T.textPrimary, marginBottom: 8 }}>Stewardship</h3>
                <p style={{ fontSize: "0.9rem", color: T.textTertiary }}>Share your knowledge with integrity and purpose</p>
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
                <Target size={32} color={T.gold} style={{ marginBottom: 12 }} />
                <h3 style={{ fontSize: "1rem", color: T.textPrimary, marginBottom: 8 }}>Discernment</h3>
                <p style={{ fontSize: "0.9rem", color: T.textTertiary }}>Make clear decisions about what to share and when</p>
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
                  FOUNDER PROFILE
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
                Dr. Jamila Dugan
              </h3>
              <p style={{ fontSize: "0.88rem", color: T.pink, fontWeight: 600, margin: "0 0 20px" }}>
                Founder and Leadership Coach
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: T.textSecondary,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                With over 15 years of experience working with educators and practitioners, Dr. Dugan brings deep expertise in organizational change, educational equity, and knowledge stewardship. She is the author of <em>Street Data</em> and has dedicated her career to helping leaders create more just and effective educational environments.
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
                {[
                  "Equity Traps and Tropes framework",
                  "15+ years leadership coaching experience",
                  "Published author and thought leader",
                  "Educational equity and justice expertise",
                  "Community-centered research background",
                  "Street Data methodology"
                ].map((asset) => (
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
                THE NEED:
              </span>
              <span style={{ fontSize: "0.92rem", color: T.textSecondary, lineHeight: 1.6 }}>
                A structured platform to protect and share this valuable intellectual property while maintaining its integrity and justice orientation.
              </span>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: FRAMEWORK
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

        <SectionHeading accent="gold" label="Core Framework" sub="The Equity Traps and Tropes framework identifies four patterns of intellectual property relationships.">
          Equity Traps and Tropes Framework
        </SectionHeading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {[
            {
              name: "Extraction",
              description: "Removing knowledge from its community of origin without permission, credit, or reciprocity.",
              color: T.pink,
              glow: T.pinkGlow,
              border: T.pinkBorder,
            },
            {
              name: "Hoarding",
              description: "Withholding valuable knowledge that could benefit communities, keeping it locked within institutional boundaries.",
              color: T.gold,
              glow: T.goldGlow,
              border: T.goldBorder,
            },
            {
              name: "Undiscerning Sharing",
              description: "Releasing intellectual property without consideration for how it might be misused or stripped of its original intent.",
              color: T.cyan,
              glow: T.cyanGlow,
              border: T.cyanBorder,
            },
            {
              name: "Stewardship",
              description: "Holding and sharing knowledge with intentional care for its origins, impact, and the communities it serves.",
              color: T.cyan,
              glow: T.cyanGlow,
              border: T.cyanBorder,
            },
          ].map((pattern, i) => (
            <GlassCard
              key={pattern.name}
              style={{
                background: pattern.glow,
                border: `1px solid ${pattern.border}`,
                boxShadow: `0 0 40px ${pattern.glow}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: pattern.color,
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {pattern.name}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: T.textSecondary,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {pattern.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Stewardship callout */}
        <div
          style={{
            background: T.glassBright,
            border: `1px solid ${T.goldBorder}`,
            borderRadius: 12,
            padding: "18px 28px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "0.95rem", color: T.textSecondary, lineHeight: 1.6 }}>
            The IP Stewardship Lab focuses on developing sustainable stewardship practices that honor the origins and integrity of knowledge while enabling generous sharing.
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: OPPORTUNITY (shortened for IP Stewardship context)
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

        <SectionHeading accent="cyan" label="The Need" sub="Justice-oriented practitioners need better frameworks for protecting and sharing their intellectual contributions.">
          Why IP Stewardship Matters Now
        </SectionHeading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {[
            {
              name: "Educator and Practitioner Needs",
              size: "Growing Awareness",
              pain: "Valuable knowledge being extracted without permission or credit",
              trigger: "Seeking frameworks for ethical knowledge sharing",
              icon: <Target size={22} key="t" />,
              color: "pink" as const,
            },
            {
              name: "Justice-Oriented Workers",
              size: "Increasing Demand",
              pain: "Need for integrity in intellectual property relationships",
              trigger: "Looking for alternatives to extraction-based models",
              icon: <BookOpen size={22} key="b" />,
              color: "cyan" as const,
            },
            {
              name: "Community Leaders",
              size: "Rising Interest",
              pain: "Protecting community knowledge while enabling beneficial sharing",
              trigger: "Developing stewardship practices",
              icon: <Users size={22} key="u" />,
              color: "gold" as const,
            },
          ].map((seg, i) => {
            const accColor = seg.color;
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
                  {seg.icon}
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
                      Challenge:{" "}
                    </span>
                    <span style={{ fontSize: "0.88rem", color: T.textSecondary }}>{seg.pain}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: T.textTertiary, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Seeking:{" "}
                    </span>
                    <span style={{ fontSize: "0.88rem", color: T.textSecondary }}>{seg.trigger}</span>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Market gap */}
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
            A Clear Need for{" "}
            <span style={{ color: T.cyan }}>Stewardship-Centered Education</span>
          </div>
          <p style={{ color: T.textSecondary, fontSize: "0.95rem" }}>
            Most existing frameworks focus on ownership or open sharing. Few address the nuanced practice of ethical stewardship.
          </p>
        </div>

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
            Why This Approach Matters
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              "Combines justice orientation with practical stewardship tools",
              "Honors knowledge origins while enabling generous sharing",
              "Provides frameworks for both protection and accessibility",
              "Created by and for practitioners doing this work daily"
            ].map((adv, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <Shield size={15} color={T.cyan} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: "0.9rem", color: T.textSecondary, lineHeight: 1.55 }}>{adv}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: THE OFFER (simplified for IP Stewardship Lab)
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

        <SectionHeading accent="gold" label="Learning Offerings" sub="A welcome sequence to introduce stewardship principles and practices.">
          How We Support Your Stewardship Journey
        </SectionHeading>

        {/* Offer Tiers */}
        <div style={{ display: "grid", gap: 16, marginBottom: 60 }}>
          {[
            {
              tier: "Free",
              name: "7-Layer IP Architecture Audit",
              price: "Free",
              format: "9-page downloadable guide with practical assessment tools",
              highlight: false,
              details: [
                "Comprehensive framework for mapping your intellectual property",
                "Assessment tools for protection and sharing decisions",
                "Introduction to stewardship principles",
                "Practical exercises for immediate application"
              ]
            },
            {
              tier: "Core",
              name: "IP Stewardship Lab Course",
              price: "Coming Soon",
              format: "25 lessons across 5 modules, approximately 85-100 minutes of content",
              highlight: true,
              details: [
                "Three Postures of IP: ownership, stewardship, and commons",
                "7-Layer Architecture for mapping intellectual property",
                "Knowledge lineage and attribution practices",
                "Structuring knowledge for ethical movement",
                "Developing ongoing stewardship inventory practices"
              ]
            },
            {
              tier: "Community",
              name: "Stewardship Practice Community",
              price: "Coming Soon",
              format: "Monthly gatherings and ongoing peer support",
              highlight: false,
              details: [
                "Monthly virtual gatherings for ongoing practice",
                "Peer consultation on stewardship challenges",
                "Case study discussions and shared learning",
                "Resource sharing and collaborative development"
              ]
            }
          ].map((offer, idx) => {
            const offerGlow: "pink" | "cyan" | "gold" | undefined =
              offer.tier === "Free" ? "pink" : offer.highlight ? "gold" : offer.tier === "Core" ? "gold" : "cyan";
            const priceColor =
              offer.tier === "Free" ? T.pink : offer.highlight ? T.gold : offer.tier === "Core" ? T.gold : T.cyan;
            const detailColor =
              offer.tier === "Free" ? T.pink : offer.highlight ? T.gold : offer.tier === "Core" ? T.gold : T.cyan;

            return (
              <div
                key={offer.tier}
                style={{
                  background: offer.highlight ? `linear-gradient(135deg, rgba(255, 217, 61, 0.03), white)` : "white",
                  border: `${offer.highlight ? "2px" : "1px"} solid ${
                    offer.highlight ? T.goldBorder : offer.tier === "Free" ? T.pinkBorder : offer.tier === "Core" ? T.goldBorder : T.cyanBorder
                  }`,
                  borderRadius: 18,
                  overflow: "hidden",
                  boxShadow: offer.highlight 
                    ? `0 8px 20px ${T.goldGlow}, 0 2px 4px rgba(0, 0, 0, 0.05)` 
                    : `0 4px 12px ${offer.tier === "Free" ? T.pinkGlow : T.cyanGlow}, 0 2px 4px rgba(0, 0, 0, 0.05)`,
                  padding: offer.highlight ? "32px 24px 20px" : "26px 22px 18px",
                }}
              >
                {offer.highlight && (
                  <div style={{ position: "relative", marginTop: -16, marginBottom: 16 }}>
                    <div
                      style={{
                        position: "absolute",
                        top: -32,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: T.gold,
                        color: T.textPrimary,
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        padding: "4px 16px",
                        borderRadius: "0 0 8px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      CORE OFFERING
                    </div>
                  </div>
                )}

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
                  <div style={{ fontSize: "0.88rem", color: T.textSecondary, lineHeight: 1.55, marginBottom: 20 }}>
                    {offer.format}
                  </div>

                  {offer.details && (
                    <div>
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
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5: THE COURSE (updated module structure)
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
          label="Course Architecture"
          sub="25 lessons across 5 modules. Approximately 85–100 minutes of foundational content."
        >
          The Course
        </SectionHeading>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            {
              number: 1,
              title: "Three Postures of IP",
              subtitle: "Understanding ownership, stewardship, and commons approaches",
              estimatedRuntime: "4 lessons",
              theme: "Foundation: How do we relate to intellectual property?",
              lessons: [
                {
                  id: "1.1",
                  title: "IP as Ownership",
                  duration: "3 min",
                  objectives: ["Define traditional ownership models", "Understand property-based thinking"]
                },
                {
                  id: "1.2",
                  title: "IP as Commons",
                  duration: "4 min",
                  objectives: ["Explore open sharing approaches", "Understand commons-based models"]
                },
                {
                  id: "1.3",
                  title: "IP as Stewardship",
                  duration: "5 min",
                  objectives: ["Define stewardship principles", "Understand care-based relationships"]
                },
                {
                  id: "1.4",
                  title: "Choosing Your Posture",
                  duration: "4 min",
                  objectives: ["Assess context-specific decisions", "Practice posture selection"]
                }
              ]
            },
            {
              number: 2,
              title: "7-Layer Architecture",
              subtitle: "A comprehensive framework for mapping intellectual property",
              estimatedRuntime: "5 lessons",
              theme: "Structure: What are you actually stewarding?",
              lessons: [
                {
                  id: "2.1",
                  title: "Foundational Concepts",
                  duration: "4 min",
                  objectives: ["Map core ideas and principles", "Identify conceptual foundations"]
                },
                {
                  id: "2.2",
                  title: "Methods and Practices",
                  duration: "4 min",
                  objectives: ["Document methodological approaches", "Catalog practice frameworks"]
                },
                {
                  id: "2.3",
                  title: "Stories and Examples",
                  duration: "3 min",
                  objectives: ["Inventory narrative assets", "Understand story-based IP"]
                },
                {
                  id: "2.4",
                  title: "Language and Voice",
                  duration: "4 min",
                  objectives: ["Recognize linguistic contributions", "Protect voice and tone"]
                },
                {
                  id: "2.5",
                  title: "Complete Architecture Map",
                  duration: "5 min",
                  objectives: ["Integrate all layers", "Create comprehensive IP map"]
                }
              ]
            },
            {
              number: 3,
              title: "Knowledge Lineage",
              subtitle: "Tracing origins and influences to honor intellectual ancestry",
              estimatedRuntime: "4 lessons",
              theme: "Origin: Where does your knowledge come from?",
              lessons: [
                {
                  id: "3.1",
                  title: "Tracing Influences",
                  duration: "4 min",
                  objectives: ["Identify knowledge sources", "Map intellectual influences"]
                },
                {
                  id: "3.2",
                  title: "Attribution Practices",
                  duration: "4 min",
                  objectives: ["Develop citation frameworks", "Practice ethical attribution"]
                },
                {
                  id: "3.3",
                  title: "Community Acknowledgment",
                  duration: "3 min",
                  objectives: ["Honor community contributions", "Navigate cultural considerations"]
                },
                {
                  id: "3.4",
                  title: "Ongoing Lineage Work",
                  duration: "4 min",
                  objectives: ["Create lineage maintenance systems", "Develop update practices"]
                }
              ]
            },
            {
              number: 4,
              title: "Structuring for Movement",
              subtitle: "Creating systems for knowledge to travel while maintaining integrity",
              estimatedRuntime: "6 lessons",
              theme: "Movement: How does your knowledge travel safely?",
              lessons: [
                {
                  id: "4.1",
                  title: "Protection Mechanisms",
                  duration: "4 min",
                  objectives: ["Design safeguards for sharing", "Create protection protocols"]
                },
                {
                  id: "4.2",
                  title: "Access Frameworks",
                  duration: "3 min",
                  objectives: ["Structure accessibility approaches", "Balance openness with protection"]
                },
                {
                  id: "4.3",
                  title: "Community Guidelines",
                  duration: "4 min",
                  objectives: ["Develop use guidelines", "Create community agreements"]
                },
                {
                  id: "4.4",
                  title: "Adaptation Boundaries",
                  duration: "3 min",
                  objectives: ["Set adaptation limits", "Maintain core integrity"]
                },
                {
                  id: "4.5",
                  title: "Distribution Strategies",
                  duration: "4 min",
                  objectives: ["Plan strategic sharing", "Choose distribution channels"]
                },
                {
                  id: "4.6",
                  title: "Monitoring and Maintenance",
                  duration: "4 min",
                  objectives: ["Track knowledge use", "Maintain stewardship relationships"]
                }
              ]
            },
            {
              number: 5,
              title: "Stewardship Inventory",
              subtitle: "Developing ongoing practices for ethical management",
              estimatedRuntime: "6 lessons",
              theme: "Practice: How do you maintain stewardship over time?",
              lessons: [
                {
                  id: "5.1",
                  title: "Regular Assessment",
                  duration: "4 min",
                  objectives: ["Create assessment rhythms", "Develop evaluation criteria"]
                },
                {
                  id: "5.2",
                  title: "Stakeholder Check-ins",
                  duration: "3 min",
                  objectives: ["Maintain community connections", "Practice ongoing consultation"]
                },
                {
                  id: "5.3",
                  title: "Evolution Protocols",
                  duration: "4 min",
                  objectives: ["Plan for knowledge evolution", "Maintain stewardship through change"]
                },
                {
                  id: "5.4",
                  title: "Conflict Resolution",
                  duration: "4 min",
                  objectives: ["Address stewardship conflicts", "Navigate misuse situations"]
                },
                {
                  id: "5.5",
                  title: "Succession Planning",
                  duration: "4 min",
                  objectives: ["Plan stewardship transitions", "Prepare knowledge succession"]
                },
                {
                  id: "5.6",
                  title: "Your Stewardship Practice",
                  duration: "5 min",
                  objectives: ["Integrate all practices", "Commit to ongoing stewardship"]
                }
              ]
            }
          ].map((mod, idx) => {
            const accent = idx % 3 === 0 ? "pink" : idx % 3 === 1 ? "gold" : "cyan";
            const c = accent === "pink" ? T.pink : accent === "cyan" ? T.cyan : T.gold;
            const glow = accent === "pink" ? T.pinkGlow : accent === "cyan" ? T.cyanGlow : T.goldGlow;
            const border = accent === "pink" ? T.pinkBorder : accent === "cyan" ? T.cyanBorder : T.goldBorder;

            return (
              <div
                key={mod.number}
                style={{
                  background: "white",
                  border: `1px solid ${border}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: `0 4px 12px ${glow}, 0 2px 4px rgba(0, 0, 0, 0.05)`,
                }}
              >
                <div
                  style={{
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
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
                  </div>
                </div>

                {/* Module theme */}
                <div
                  style={{
                    padding: "16px 28px",
                    background: glow,
                    borderTop: `1px solid ${T.glassBorder}`,
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
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SIMPLIFIED SECTIONS FOR IP STEWARDSHIP CONTEXT
      ═══════════════════════════════════════════════════════════════════════ */}
      
      {/* PLAN Section - simplified */}
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
          label="Development Plan"
          sub="The IP Stewardship Lab is currently in development. Here's what's coming."
        >
          What's Next
        </SectionHeading>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            {
              name: "Course Development",
              duration: "In Progress",
              summary: "Creating the core 25-lesson curriculum with video content, exercises, and community discussion prompts.",
              deliverables: [
                "Video lessons for all 5 modules",
                "Downloadable worksheets and exercises",
                "Discussion prompts for community engagement",
                "Assessment tools for each module"
              ],
              status: "in-progress"
            },
            {
              name: "Platform Setup",
              duration: "Coming Soon",
              summary: "Building the learning platform with user accounts, progress tracking, and community features.",
              deliverables: [
                "User-friendly course platform",
                "Progress tracking and completion certificates",
                "Community discussion spaces",
                "Resource library access"
              ],
              status: "upcoming"
            },
            {
              name: "Community Launch",
              duration: "2026",
              summary: "Opening the course to the first cohort of learners with full community support.",
              deliverables: [
                "First course cohort",
                "Monthly community gatherings",
                "Ongoing support and resources",
                "Continuous course improvement"
              ],
              status: "upcoming"
            }
          ].map((m, idx) => (
            <div
              key={m.name}
              style={{
                background: "white",
                border: `1px solid ${m.status === "in-progress" ? T.cyanBorder : T.glassBorder}`,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: m.status === "in-progress" ? `0 4px 12px ${T.cyanGlow}, 0 2px 4px rgba(0, 0, 0, 0.05)` : "0 2px 4px rgba(0, 0, 0, 0.05)",
                padding: "22px 28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                {/* Status indicator */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: m.status === "in-progress" ? T.cyanGlow : T.glassBright,
                    border: `2px solid ${m.status === "in-progress" ? T.cyan : T.glassBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: m.status === "in-progress" ? T.cyan : T.textTertiary,
                  }}
                >
                  {idx + 1}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 5 }}>
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: T.textPrimary, letterSpacing: "-0.01em" }}>
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
                  </div>
                  <span style={{ fontSize: "0.82rem", color: T.textTertiary, display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={12} />
                    {m.duration}
                  </span>
                </div>
              </div>

              <p style={{ color: T.textSecondary, fontSize: "0.95rem", lineHeight: 1.65, margin: "20px 0 24px" }}>
                {m.summary}
              </p>

              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: T.textTertiary, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
                  Planned Deliverables
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 9 }}>
                  {m.deliverables.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <CheckCircle2 size={15} color={T.cyan} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "0.88rem", color: T.textSecondary, lineHeight: 1.5 }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETING Section - simplified to welcome sequence */}
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
          label="Welcome Sequence"
          sub="A thoughtful introduction to stewardship principles and our learning community."
        >
          How We Welcome You
        </SectionHeading>

        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <Mail size={18} color={T.pink} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: T.textPrimary, margin: 0 }}>
              Email Welcome Sequence: 4 Messages
            </h3>
          </div>

          {/* Email sequence */}
          <div style={{ display: "grid", gap: 10 }}>
            {[
              {
                number: "1",
                subject: "Welcome to the IP Stewardship Lab",
                trigger: "Immediate",
                purpose: "Introduce the community and stewardship principles",
                preview: "You've taken an important step in protecting and stewarding your intellectual contributions..."
              },
              {
                number: "2",
                subject: "Your Free 7-Layer IP Architecture Audit",
                trigger: "+1 day",
                purpose: "Deliver the free resource and guide first steps",
                preview: "Here's your comprehensive guide to mapping and assessing your intellectual property..."
              },
              {
                number: "3",
                subject: "The Four Patterns of IP Relationships",
                trigger: "+3 days",
                purpose: "Introduce the Equity Traps and Tropes framework",
                preview: "Extraction, hoarding, undiscerning sharing, and stewardship - which pattern describes your current approach?"
              },
              {
                number: "4",
                subject: "Building Your Stewardship Practice",
                trigger: "+7 days",
                purpose: "Guide toward course enrollment and community participation",
                preview: "Stewardship isn't a one-time decision - it's an ongoing practice that grows stronger with community..."
              }
            ].map((email) => (
              <GlassCard key={email.number} style={{ padding: "20px 22px" }} glow="pink">
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: T.pinkGlow,
                      border: `1px solid ${T.pinkBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: T.pink,
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
                    <div style={{ fontSize: "0.8rem", fontWeight: 600, color: T.pink, marginBottom: 6, lineHeight: 1.45 }}>
                      {email.purpose}
                    </div>
                    <p style={{ fontSize: "0.8rem", color: T.textTertiary, margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>
                      &ldquo;{email.preview}&rdquo;
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT Section - simplified */}
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
          label="Get Started"
          sub="Begin your stewardship journey with our free resource."
        >
          Ready to Begin?
        </SectionHeading>

        {/* Free resource CTA */}
        <GlassCard 
          glow="cyan" 
          style={{ 
            padding: "40px", 
            textAlign: "center",
            background: T.cyanGlow,
            border: `2px solid ${T.cyanBorder}`,
            boxShadow: `0 0 60px ${T.cyanGlow}`
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <BookOpen size={48} color={T.cyan} />
          </div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: T.textPrimary, margin: "0 0 16px" }}>
            Start with the Free 7-Layer IP Architecture Audit
          </h3>
          <p style={{ fontSize: "1.1rem", color: T.textSecondary, margin: "0 0 32px", lineHeight: 1.6 }}>
            A 9-page comprehensive guide to mapping and assessing your intellectual property. Download immediately and begin your stewardship practice.
          </p>
          <button
            style={{
              background: T.cyan,
              color: "white",
              border: "none",
              padding: "16px 32px",
              borderRadius: 8,
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s ease",
            }}
          >
            <BookOpen size={18} />
            Get Your Free Audit
          </button>
        </GlassCard>

        {/* Course information */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <GlassCard style={{ padding: "24px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: 600, color: T.textPrimary, margin: "0 0 12px" }}>
              Full Course Coming Soon
            </h4>
            <p style={{ fontSize: "1rem", color: T.textSecondary, lineHeight: 1.6, margin: "0 0 20px" }}>
              The complete IP Stewardship Lab course with 25 lessons across 5 modules is currently in development. Pricing will be announced when the course is ready to launch.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:info@ipstewardshiplab.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: T.cyan,
                  border: `2px solid ${T.cyan}`,
                  padding: "12px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                }}
              >
                <Mail size={16} />
                Stay Updated
              </a>
              <a
                href="https://linkedin.com/in/jamiladugan"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: T.textTertiary,
                  border: `1px solid ${T.glassBorder}`,
                  padding: "12px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                }}
              >
                <Linkedin size={16} />
                Connect
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          background: T.bgTertiary,
          borderTop: `1px solid ${T.glassBorder}`,
          padding: "60px 24px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              marginBottom: 20,
              color: T.textPrimary,
              letterSpacing: "-0.02em",
            }}
          >
            IP Stewardship Lab
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              color: T.textSecondary,
              marginBottom: 32,
              lineHeight: 1.6,
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A sacred space for educators and practitioners to protect and steward intellectual property with integrity and justice.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center", marginBottom: 24 }}>
            <Heart size={18} color={T.pink} />
            <span style={{ fontSize: "1rem", color: T.textTertiary }}>
              Sacred knowledge. Protected wisdom. Justice work.
            </span>
          </div>
          <div style={{ fontSize: "0.9rem", color: T.textTertiary, opacity: 0.7 }}>
            © 2026 Dr. Jamila Dugan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}