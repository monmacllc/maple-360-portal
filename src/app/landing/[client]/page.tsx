"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  CheckCircle2,
  Users,
  Shield,
  Star,
  ArrowRight,
  BookOpen,
  Target,
  X,
  Mail,
  Linkedin,
  Award,
  Layers,
  Lock,
  Heart,
  Clock,
  Download,
  UserCheck,
  Globe,
} from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const T = {
  bgPrimary: "#FAF8F5", // warm cream
  bgSecondary: "#FFFFFF", // white cards
  bgTertiary: "#F5F3F0", // slightly darker cream
  textPrimary: "#2D2D2D", // dark charcoal
  textSecondary: "#4A4A4A", // lighter charcoal
  textTertiary: "#8B8B8B", // muted text
  accent: "#7ECBC4", // soft teal
  accentGlow: "rgba(126, 203, 196, 0.15)",
  accentBorder: "rgba(126, 203, 196, 0.25)",
  cardShadow: "rgba(0, 0, 0, 0.04)",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function Card({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        background: T.bgSecondary,
        borderRadius: 16,
        padding: "32px",
        boxShadow: `0 4px 20px ${T.cardShadow}`,
        border: "1px solid rgba(0, 0, 0, 0.02)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  children,
  subtitle,
  className = "",
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: T.textPrimary,
          margin: "0 0 16px",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "1.2rem",
            color: T.textSecondary,
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "founder", label: "Founder" },
  { id: "framework", label: "Framework" },
  { id: "course", label: "Course" },
  { id: "resource", label: "Resource" },
  { id: "contact", label: "Contact" },
];

function Navigation({ activeSection }: { activeSection: string }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "rgba(250, 248, 245, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        padding: "16px 24px",
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: T.textPrimary,
            letterSpacing: "-0.02em",
          }}
        >
          IP Stewardship Lab
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              style={{
                fontSize: "1rem",
                fontWeight: activeSection === section.id ? 600 : 400,
                color: activeSection === section.id ? T.accent : T.textSecondary,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function IPStewardshipLab() {
  const [activeSection, setActiveSection] = useState("hero");
  const [expandedFramework, setExpandedFramework] = useState<number | null>(null);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());

  // Intersection observer for navigation
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

  const frameworkPatterns = [
    {
      name: "Extraction",
      description: "Removing knowledge from its community of origin without permission, credit, or reciprocity.",
      examples: "Taking cultural practices, research methods, or pedagogical approaches without acknowledgment.",
    },
    {
      name: "Hoarding",
      description: "Withholding valuable knowledge that could benefit communities, keeping it locked within institutional or personal boundaries.",
      examples: "Refusing to share effective practices or maintaining artificial scarcity around transformative tools.",
    },
    {
      name: "Undiscerning Sharing",
      description: "Releasing intellectual property without consideration for how it might be misused or stripped of its original intent.",
      examples: "Publishing methodologies without guidelines for ethical implementation or cultural context.",
    },
    {
      name: "Stewardship",
      description: "Holding and sharing knowledge with intentional care for its origins, impact, and the communities it serves.",
      examples: "Creating clear attribution, building reciprocal relationships, and maintaining the integrity of knowledge systems.",
    },
  ];

  const courseModules = [
    {
      number: 1,
      title: "Three Postures of IP",
      duration: "4 lessons",
      description: "Understanding ownership, stewardship, and commons as different approaches to intellectual property.",
    },
    {
      number: 2,
      title: "7-Layer Architecture",
      duration: "5 lessons",
      description: "A comprehensive framework for mapping your intellectual property across seven distinct layers.",
    },
    {
      number: 3,
      title: "Knowledge Lineage",
      duration: "4 lessons",
      description: "Tracing the origins and influences of your work to honor intellectual ancestry.",
    },
    {
      number: 4,
      title: "Structuring for Movement",
      duration: "6 lessons",
      description: "Creating systems that allow your knowledge to travel while maintaining its integrity.",
    },
    {
      number: 5,
      title: "Stewardship Inventory",
      duration: "6 lessons",
      description: "Developing ongoing practices for the ethical management of your intellectual contributions.",
    },
  ];

  const toggleModule = (index: number) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedModules(newExpanded);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bgPrimary,
        color: T.textPrimary,
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <Navigation activeSection={activeSection} />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          paddingTop: 120,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 700,
              color: T.textPrimary,
              margin: "0 0 24px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            IP Stewardship Lab
          </h1>
          <p
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              color: T.textSecondary,
              marginBottom: 48,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            A sacred space for educators and practitioners to learn how to protect, structure, and steward their intellectual property with integrity and justice.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
              marginTop: 64,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Shield size={32} color={T.accent} style={{ marginBottom: 12 }} />
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px", fontWeight: 600, color: T.textPrimary }}>
                Protected
              </h3>
              <p style={{ fontSize: "1rem", color: T.textTertiary, margin: 0 }}>
                Knowledge held with care
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <Heart size={32} color={T.accent} style={{ marginBottom: 12 }} />
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px", fontWeight: 600, color: T.textPrimary }}>
                Sacred
              </h3>
              <p style={{ fontSize: "1rem", color: T.textTertiary, margin: 0 }}>
                Wisdom honored and shared
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <Users size={32} color={T.accent} style={{ marginBottom: 12 }} />
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px", fontWeight: 600, color: T.textPrimary }}>
                Community
              </h3>
              <p style={{ fontSize: "1rem", color: T.textTertiary, margin: 0 }}>
                Justice work in practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ABOUT THE LAB
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="about"
        style={{
          padding: "80px 24px",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <SectionHeading subtitle="A place where generosity is paired with clarity and discernment">
          What Is the IP Stewardship Lab?
        </SectionHeading>

        <Card style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: 1.7,
              color: T.textSecondary,
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            The IP Stewardship Lab is a learning environment for justice-oriented practitioners who understand that our knowledge carries responsibility. We provide frameworks, community, and practices for those who want to share their wisdom expansively while protecting its integrity and honoring its origins.
          </p>
        </Card>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
          }}
        >
          <Card>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <Target size={40} color={T.accent} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: T.textPrimary }}>
              For Educators & Practitioners
            </h3>
            <p style={{ fontSize: "1.1rem", color: T.textSecondary, lineHeight: 1.6 }}>
              Those who create knowledge, practices, and frameworks that serve communities and advance justice work.
            </p>
          </Card>

          <Card>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <Lock size={40} color={T.accent} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: T.textPrimary }}>
              Protection & Structure
            </h3>
            <p style={{ fontSize: "1.1rem", color: T.textSecondary, lineHeight: 1.6 }}>
              Learn to safeguard your intellectual contributions while maintaining openness and accessibility.
            </p>
          </Card>

          <Card>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <Globe size={40} color={T.accent} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 16, color: T.textPrimary }}>
              Integrity & Justice
            </h3>
            <p style={{ fontSize: "1.1rem", color: T.textSecondary, lineHeight: 1.6 }}>
              Share your work in ways that honor its origins and serve the communities it was meant to help.
            </p>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOUNDER SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="founder"
        style={{
          padding: "80px 24px",
          background: T.bgSecondary,
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionHeading>Dr. Jamila Dugan</SectionHeading>

          <Card>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 40,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: T.accentGlow,
                    color: T.accent,
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  Founder and Leadership Coach
                </div>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    margin: "0 0 20px",
                    color: T.textPrimary,
                    lineHeight: 1.3,
                  }}
                >
                  Bestselling Author and Thought Leader
                </h3>
                <p style={{ fontSize: "1.2rem", color: T.textSecondary, marginBottom: 24, lineHeight: 1.6 }}>
                  With over 15 years of experience working with educators and practitioners, Dr. Dugan brings deep expertise in organizational change, educational equity, and knowledge stewardship.
                </p>
                <p style={{ fontSize: "1.1rem", color: T.textTertiary, lineHeight: 1.6 }}>
                  Dr. Dugan is the author of <em>Street Data</em>, among other influential works, and has dedicated her career to helping leaders create more just and effective educational environments.
                </p>
              </div>
              <div>
                <Card style={{ background: T.bgTertiary, padding: "24px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16, color: T.textPrimary }}>
                    Areas of Expertise
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {[
                      "Educational equity and justice",
                      "Organizational leadership development",
                      "Knowledge creation and stewardship",
                      "Community-centered research",
                      "Ethical sharing practices",
                    ].map((item, index) => (
                      <li key={index} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                        <CheckCircle2 size={16} color={T.accent} />
                        <span style={{ fontSize: "1rem", color: T.textSecondary }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FRAMEWORK SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="framework"
        style={{
          padding: "80px 24px",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <SectionHeading
          subtitle="Understanding the four patterns of intellectual property relationships"
        >
          Equity Traps and Tropes Framework
        </SectionHeading>

        <div style={{ display: "grid", gap: 16 }}>
          {frameworkPatterns.map((pattern, index) => (
            <Card
              key={pattern.name}
              style={{
                cursor: "pointer",
                border: expandedFramework === index ? `2px solid ${T.accent}` : "1px solid rgba(0, 0, 0, 0.02)",
                background: pattern.name === "Stewardship" ? T.accentGlow : T.bgSecondary,
              }}
              onClick={() => setExpandedFramework(expandedFramework === index ? null : index)}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      margin: "0 0 8px",
                      color: pattern.name === "Stewardship" ? T.accent : T.textPrimary,
                    }}
                  >
                    {pattern.name}
                  </h3>
                  <p style={{ fontSize: "1.1rem", color: T.textSecondary, margin: 0, lineHeight: 1.5 }}>
                    {pattern.description}
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  color={T.textTertiary}
                  style={{
                    transform: expandedFramework === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </div>
              {expandedFramework === index && (
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 20,
                    borderTop: `1px solid rgba(0, 0, 0, 0.1)`,
                  }}
                >
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 8, color: T.textPrimary }}>
                    Examples:
                  </h4>
                  <p style={{ fontSize: "1rem", color: T.textTertiary, lineHeight: 1.6, margin: 0 }}>
                    {pattern.examples}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COURSE OVERVIEW
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="course"
        style={{
          padding: "80px 24px",
          background: T.bgSecondary,
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionHeading
            subtitle="A comprehensive learning experience designed for thoughtful practitioners"
          >
            Core Stewardship Training
          </SectionHeading>

          <Card style={{ marginBottom: 40, textAlign: "center", background: T.accentGlow }}>
            <div style={{ marginBottom: 20 }}>
              <BookOpen size={48} color={T.accent} />
            </div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 600, margin: "0 0 12px", color: T.textPrimary }}>
              25 Lessons Across 5 Modules
            </h3>
            <p style={{ fontSize: "1.2rem", color: T.textSecondary, margin: "0 0 20px" }}>
              Approximately 85-100 minutes of foundational content
            </p>
            <div
              style={{
                display: "inline-block",
                background: T.accent,
                color: "white",
                padding: "12px 24px",
                borderRadius: 8,
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Coming Soon - Pricing TBA
            </div>
          </Card>

          <div style={{ display: "grid", gap: 16 }}>
            {courseModules.map((module, index) => (
              <Card
                key={module.number}
                style={{
                  cursor: "pointer",
                  border: expandedModules.has(index) ? `2px solid ${T.accent}` : "1px solid rgba(0, 0, 0, 0.02)",
                }}
                onClick={() => toggleModule(index)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 12,
                      background: T.accentGlow,
                      border: `2px solid ${T.accent}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: T.accent,
                      flexShrink: 0,
                    }}
                  >
                    {module.number}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "0 0 8px", color: T.textPrimary }}>
                      {module.title}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          color: T.accent,
                          fontWeight: 600,
                          background: T.accentGlow,
                          padding: "4px 12px",
                          borderRadius: 20,
                        }}
                      >
                        {module.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: "1rem", color: T.textSecondary, margin: 0, lineHeight: 1.5 }}>
                      {module.description}
                    </p>
                  </div>
                  <ChevronDown
                    size={24}
                    color={T.textTertiary}
                    style={{
                      transform: expandedModules.has(index) ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                    }}
                  />
                </div>
                {expandedModules.has(index) && (
                  <div
                    style={{
                      marginTop: 24,
                      paddingTop: 24,
                      borderTop: `1px solid rgba(0, 0, 0, 0.1)`,
                    }}
                  >
                    <p style={{ fontSize: "1rem", color: T.textTertiary, lineHeight: 1.6, margin: 0 }}>
                      Detailed lesson plans and learning objectives for Module {module.number} will be available when the course launches. Each module includes practical exercises, reflection prompts, and community discussion opportunities.
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FREE RESOURCE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="resource"
        style={{
          padding: "80px 24px",
          background: T.accent,
          color: "white",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: 32 }}>
            <Download size={64} color="white" />
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              margin: "0 0 20px",
              lineHeight: 1.2,
            }}
          >
            Get Your Free 7-Layer IP Architecture Audit
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              margin: "0 0 40px",
              opacity: 0.9,
              lineHeight: 1.5,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A comprehensive 9-page guide to audit your intellectual property architecture and identify opportunities for better protection and stewardship.
          </p>

          <form
            style={{
              display: "flex",
              gap: 16,
              maxWidth: 500,
              margin: "0 auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              style={{
                flex: 1,
                minWidth: 280,
                padding: "16px 20px",
                borderRadius: 8,
                border: "none",
                fontSize: "1.1rem",
                outline: "none",
                background: "white",
                color: T.textPrimary,
              }}
            />
            <button
              type="submit"
              style={{
                background: "white",
                color: T.accent,
                border: "none",
                padding: "16px 32px",
                borderRadius: 8,
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Download size={18} />
              Get Free Audit
            </button>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        style={{
          padding: "80px 24px",
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <SectionHeading
          subtitle="Ready to begin your stewardship journey?"
        >
          Get in Touch
        </SectionHeading>

        <Card>
          <div style={{ marginBottom: 32 }}>
            <Mail size={48} color={T.accent} />
          </div>
          <p style={{ fontSize: "1.2rem", color: T.textSecondary, marginBottom: 32, lineHeight: 1.6 }}>
            For questions about the IP Stewardship Lab, course availability, or to discuss your specific stewardship needs, we'd love to hear from you.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:info@ipstewardshiplab.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: T.accent,
                color: "white",
                padding: "16px 32px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
            >
              <Mail size={20} />
              Contact Us
            </a>
            <a
              href="https://linkedin.com/in/jamiladugan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "transparent",
                color: T.accent,
                border: `2px solid ${T.accent}`,
                padding: "14px 28px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          background: T.bgSecondary,
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 600,
              marginBottom: 16,
              color: T.textPrimary,
            }}
          >
            IP Stewardship Lab
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: T.textSecondary,
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            Sacred knowledge. Protected wisdom. Justice work.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
            <Heart size={16} color={T.accent} />
            <span style={{ fontSize: "0.9rem", color: T.textTertiary }}>
              © 2026 Dr. Jamila Dugan. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}