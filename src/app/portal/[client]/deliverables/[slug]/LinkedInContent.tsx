// LinkedInContent.tsx
// 5-section UX framework wrapper for the LinkedIn deliverable review page.
// Inline styles only — no Tailwind, no CSS modules.

import React from "react";

const T = {
  bgPrimary: "#FAF8F5",
  bgSecondary: "#FFFFFF",
  bgLight: "#F8F6F3",
  teal: "#7ECBC4",
  tealLight: "#4ECDC4",
  coral: "#FF6B6B",
  salmon: "#E8736A",
  slate: "#2D3436",
  textPrimary: "#4A5568",
  textSecondary: "#718096",
  lightGray: "#E8E4DE",
  tableHeader: "#F0EDE8",
  green: "#48BB78",
  amber: "#FFD93D",
  shadow: "rgba(0, 0, 0, 0.08)",
};

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

function SectionCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: T.bgSecondary,
        borderRadius: 12,
        border: `1px solid ${T.lightGray}`,
        boxShadow: `0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)`,
        padding: "1.75rem 2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: T.teal,
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          flexShrink: 0,
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
          color: T.teal,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {title}
      </span>
    </div>
  );
}

function Divider() {
  return <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: "1.5rem 0" }} />;
}

function PostBody({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "0.95rem",
        color: T.textPrimary,
        margin: "0.35rem 0",
        lineHeight: 1.75,
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      {children}
    </p>
  );
}

function Gap() {
  return <div style={{ height: "0.4rem" }} />;
}

// ---------------------------------------------------------------------------
// Section 1 — About This Page
// ---------------------------------------------------------------------------

function AboutSection() {
  return (
    <SectionCard style={{ borderLeft: `4px solid ${T.teal}` }}>
      <SectionLabel number="1" title="About This Page" />
      <p
        style={{
          fontSize: "0.95rem",
          color: T.textPrimary,
          lineHeight: 1.8,
          margin: 0,
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        This is your deliverable review page — it is only visible to you. Below you will find
        your 20 LinkedIn posts organized by category, with posting notes for each. These are
        ready for your review. Once approved, they can be scheduled or posted directly from
        your LinkedIn account.
      </p>
    </SectionCard>
  );
}

// ---------------------------------------------------------------------------
// Section 2 — Two Views
// ---------------------------------------------------------------------------

function TwoViewsSection() {
  const cardStyle: React.CSSProperties = {
    flex: "1 1 0",
    minWidth: 260,
    background: T.bgLight,
    borderRadius: 10,
    border: `1px solid ${T.lightGray}`,
    padding: "1.25rem 1.5rem",
  };
  const listStyle: React.CSSProperties = {
    margin: "0.5rem 0 0",
    paddingLeft: "1.25rem",
    fontSize: "0.9rem",
    color: T.textPrimary,
    lineHeight: 1.85,
    fontFamily: 'Georgia, "Times New Roman", serif',
  };
  const labelStyle: React.CSSProperties = {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.09em",
    textTransform: "uppercase" as const,
    color: T.textSecondary,
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0.4rem",
  };
  const headingStyle: React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: 700,
    color: T.slate,
    margin: "0 0 0.75rem",
    fontFamily: "system-ui, sans-serif",
  };

  return (
    <SectionCard>
      <SectionLabel number="2" title="Two Views" />
      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" as const }}>
        <div style={cardStyle}>
          <p style={labelStyle}>What you see</p>
          <h3 style={headingStyle}>Dr. Dugan — Client View</h3>
          <ul style={listStyle}>
            <li>All 20 posts with full copy</li>
            <li>Posting notes and timing recommendations</li>
            <li>
              Category breakdown (Thought Leadership, Framework, Personal Narrative, Engagement)
            </li>
            <li>Review and approval before publishing</li>
          </ul>
        </div>
        <div style={cardStyle}>
          <p style={labelStyle}>What your audience sees</p>
          <h3 style={headingStyle}>LinkedIn Audience View</h3>
          <ul style={listStyle}>
            <li>Sees individual posts in their LinkedIn feed</li>
            <li>Each post stands alone as a complete thought</li>
            <li>No &ldquo;funnel&rdquo; language — pure thought leadership</li>
            <li>Engagement prompts invite genuine dialogue</li>
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}

// ---------------------------------------------------------------------------
// Section 3 — We Heard You
// ---------------------------------------------------------------------------

interface FeedbackRow {
  heard: string;
  addressed: string;
}

const feedbackRows: FeedbackRow[] = [
  {
    heard:
      "The writing should sound like me — not like AI-generated LinkedIn content.",
    addressed:
      "All 20 posts written to match your published voice: long-form, reflective, no listicles or hack-style formatting. Reviewed against your actual LinkedIn posts and writing samples.",
  },
  {
    heard:
      "I want to challenge the \u2018monetize your expertise\u2019 narrative, not participate in it.",
    addressed:
      "Every post centers stewardship over extraction. The word \u2018monetize\u2019 does not appear. Posts challenge industry norms rather than reinforcing them.",
  },
  {
    heard: "Hashtags should be minimal and intentional.",
    addressed:
      "Each post uses 3-5 relevant hashtags. No trending-chasing or spam tags. All hashtags relate to IP stewardship, knowledge work, or equity-centered practice.",
  },
];

function WeHeardYouSection() {
  return (
    <SectionCard>
      <SectionLabel number="3" title="We Heard You" />
      <div style={{ display: "flex", flexDirection: "column" as const }}>
        {feedbackRows.map((row, i) => (
          <div key={i}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                padding: "1rem 0",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase" as const,
                    color: T.salmon,
                    fontFamily: "system-ui, sans-serif",
                    margin: "0 0 0.35rem",
                  }}
                >
                  You said
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: T.textPrimary,
                    lineHeight: 1.75,
                    margin: 0,
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{row.heard}&rdquo;
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase" as const,
                    color: T.green,
                    fontFamily: "system-ui, sans-serif",
                    margin: "0 0 0.35rem",
                  }}
                >
                  How we addressed it
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: T.textPrimary,
                    lineHeight: 1.75,
                    margin: 0,
                    fontFamily: 'Georgia, "Times New Roman", serif',
                  }}
                >
                  {row.addressed}
                </p>
              </div>
            </div>
            {i < feedbackRows.length - 1 && (
              <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: 0 }} />
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

// ---------------------------------------------------------------------------
// Section 4 — Structure + existing post content
// ---------------------------------------------------------------------------

const structureItems = [
  {
    num: "01",
    label: "Thought Leadership",
    range: "Posts 1\u20136",
    desc: "Core philosophy posts. The stewardship vs. extraction reframe. These establish intellectual positioning.",
  },
  {
    num: "02",
    label: "Framework Posts",
    range: "Posts 7\u201312",
    desc: "The 7-Layer IP Architecture explained. Each post unpacks one layer or concept from the audit.",
  },
  {
    num: "03",
    label: "Personal Narrative",
    range: "Posts 13\u201316",
    desc: "Your story, your journey, your why. These build trust through vulnerability and lived experience.",
  },
  {
    num: "04",
    label: "Engagement Posts",
    range: "Posts 17\u201320",
    desc: "Questions, invitations, community dialogue. These are designed to spark conversation, not broadcast.",
  },
];

function StructureSection() {
  const tableRows = [
    {
      cat: "Thought Leadership",
      posts: "Posts 4\u20136",
      topics: "Naming your IP, the infrastructure argument, an open letter to practitioners",
      alt: false,
    },
    {
      cat: "Framework Teasers",
      posts: "Posts 7\u201310",
      topics:
        "Street Data connection, 7-Layer audit preview, extraction vs stewardship, knowledge lineage",
      alt: true,
    },
    {
      cat: "Community & Story",
      posts: "Posts 11\u201314",
      topics:
        "Client transformations, audience questions, practitioner spotlight, behind the scenes",
      alt: false,
    },
    {
      cat: "Course Promotion",
      posts: "Posts 15\u201318",
      topics: "Waitlist opening, what the course covers, founding cohort benefits, countdown",
      alt: true,
    },
    {
      cat: "Engagement Drivers",
      posts: "Posts 19\u201320",
      topics: "Polls, conversation starters",
      alt: false,
    },
  ];

  return (
    <SectionCard>
      <SectionLabel number="4" title="Structure" />

      {/* Numbered breakdown */}
      <div
        style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem", marginBottom: "2rem" }}
      >
        {structureItems.map((item) => (
          <div
            key={item.num}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              padding: "0.85rem 1rem",
              background: T.bgLight,
              borderRadius: 8,
              border: `1px solid ${T.lightGray}`,
            }}
          >
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: T.teal,
                fontFamily: "system-ui, sans-serif",
                minWidth: 30,
                lineHeight: 1.4,
              }}
            >
              {item.num}
            </span>
            <div>
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: T.slate,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: T.textSecondary,
                  fontFamily: "system-ui, sans-serif",
                  marginLeft: "0.5rem",
                }}
              >
                ({item.range})
              </span>
              <p
                style={{
                  margin: "0.2rem 0 0",
                  fontSize: "0.875rem",
                  color: T.textPrimary,
                  lineHeight: 1.7,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* ── Existing LinkedIn post content (from page.tsx case 'linkedin_content') ── */}

      <div style={{ marginBottom: "1rem" }}>
        <h1
          style={{
            fontSize: "1.65rem",
            fontWeight: 700,
            color: T.slate,
            margin: "0 0 0.5rem",
            lineHeight: 1.25,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          LinkedIn Post Templates &mdash; Dr. Jamila Dugan / IP Stewardship Lab
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: T.textSecondary,
            margin: "0.35rem 0",
            lineHeight: 1.75,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontStyle: "italic",
          }}
        >
          *Prepared by Maple 360 | February 2026*
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: T.textPrimary,
            margin: "0.35rem 0",
            lineHeight: 1.75,
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          <strong>Tone reference:</strong> Writing Style Guide &mdash; Dr. Jamila Dugan
        </p>
        <p
          style={{
            fontSize: "0.875rem",
            color: T.textSecondary,
            margin: "0.35rem 0",
            lineHeight: 1.75,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontStyle: "italic",
          }}
        >
          *Total posts: 20 | Posting notes included with each*
        </p>
        <Gap />
        <Divider />
        <Gap />
        <h2
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: T.slate,
            margin: "1.75rem 0 0.5rem",
            fontFamily: "system-ui, sans-serif",
            borderBottom: `2px solid ${T.tableHeader}`,
            paddingBottom: "0.3rem",
          }}
        >
          Thought Leadership (Posts 1&ndash;6)
        </h2>
        <Gap />
        <Divider />
      </div>

      {/* Post 1 */}
      <div
        style={{
          background: T.bgSecondary,
          borderRadius: 12,
          border: `1px solid ${T.lightGray}`,
          boxShadow: `0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)`,
          padding: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              color: T.textPrimary,
              margin: "1.25rem 0 0.3rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Post 1: The Reframe
          </h3>
          <PostBody>
            <strong>Theme:</strong> Rejecting &ldquo;extraction&rdquo; as the frame for sharing
            expertise
          </PostBody>
          <PostBody>
            <strong>Best time to post:</strong> Tuesday or Wednesday, 8&ndash;10am
          </PostBody>
          <Gap />
          <Divider />
          <Gap />
          <PostBody>
            I refuse to accept the framing that our intellectual property needs to be
            &ldquo;extracted from.&rdquo;
          </PostBody>
          <Gap />
          <PostBody>Not because income doesn&rsquo;t matter. It does.</PostBody>
          <Gap />
          <PostBody>
            But because the word &ldquo;extraction&rdquo; carries a logic inside it &mdash; a
            logic that says your knowledge is a raw material waiting to be processed into product.
            That the move from practitioner to course creator is primarily a transaction. That what
            you know is most valuable as a revenue stream.
          </PostBody>
          <Gap />
          <PostBody>
            I&rsquo;ve spent fifteen years watching what happens to practitioners who accept that
            framing. Their frameworks get simplified to fit a template. Their relational knowledge
            gets flattened into bullets. The context that makes their methods work in rooms gets
            stripped out to improve completion rates.
          </PostBody>
          <Gap />
          <PostBody>What&rsquo;s left may still sell. But it is not what they built.</PostBody>
          <Gap />
          <PostBody>
            Stewardship is a different posture. It asks: what conditions would allow your IP to
            move in the world without losing what makes it alive? What infrastructure does it need
            &mdash; not just to generate revenue, but to remain faithful to the communities it was
            built with?
          </PostBody>
          <Gap />
          <PostBody>
            Those are not the same questions. They do not produce the same outcomes.
          </PostBody>
          <Gap />
          <PostBody>
            I am not anti-income. I am anti-extraction. There is a way to build a sustainable,
            values-aligned knowledge practice that generates real revenue while protecting what
            matters. That is what I&rsquo;m building infrastructure for.
          </PostBody>
          <Gap />
          <PostBody>
            What word do you use &mdash; or wish you could use &mdash; instead of
            &ldquo;extract&rdquo;?
          </PostBody>
          <Gap />
          <PostBody>
            #IPStewardship #IntellectualProperty #KnowledgeWork #EquityCentered #ConsultantLife
          </PostBody>
        </div>
      </div>

      {/* Remaining Posts table */}
      <div
        style={{
          background: T.bgSecondary,
          borderRadius: 12,
          border: `1px solid ${T.lightGray}`,
          boxShadow: `0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)`,
          padding: "1.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: T.slate,
            margin: "1.75rem 0 0.5rem",
            fontFamily: "system-ui, sans-serif",
            borderBottom: `2px solid ${T.tableHeader}`,
            paddingBottom: "0.3rem",
          }}
        >
          Remaining Posts (Pending Your Review)
        </h2>
        <Gap />
        <PostBody>
          Once you approve the tone and direction of these three samples, we will finalize the
          remaining 17 posts:
        </PostBody>
        <Gap />
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse" as const,
            margin: "1rem 0",
            fontSize: "0.875rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <thead>
            <tr>
              {["Category", "Posts", "Topics"].map((h) => (
                <th
                  key={h}
                  style={{
                    background: T.bgLight,
                    color: T.textPrimary,
                    fontWeight: 700,
                    padding: "0.5rem 0.75rem",
                    textAlign: "left" as const,
                    border: `1px solid ${T.lightGray}`,
                    fontSize: "0.78rem",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.03em",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => {
              const bg = row.alt ? "#FDFDFD" : T.bgSecondary;
              const cellStyle: React.CSSProperties = {
                padding: "0.5rem 0.75rem",
                border: `1px solid ${T.lightGray}`,
                color: T.textPrimary,
                verticalAlign: "top",
                background: bg,
              };
              return (
                <tr key={row.cat}>
                  <td style={cellStyle}>
                    <strong>{row.cat}</strong>
                  </td>
                  <td style={cellStyle}>{row.posts}</td>
                  <td style={cellStyle}>{row.topics}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p
          style={{
            fontSize: "0.875rem",
            color: T.textSecondary,
            margin: "0.35rem 0",
            lineHeight: 1.75,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontStyle: "italic",
          }}
        >
          Please review these three samples and let us know: Does the voice feel authentic? Would
          you post this? Any adjustments to tone, length, or messaging?
        </p>
      </div>
    </SectionCard>
  );
}

// ---------------------------------------------------------------------------
// Section 5 — CTA
// ---------------------------------------------------------------------------

function CTASection() {
  return (
    <SectionCard
      style={{
        background: T.bgLight,
        borderTop: `4px solid ${T.teal}`,
        textAlign: "center" as const,
      }}
    >
      <SectionLabel number="5" title="Next Step" />
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: T.slate,
          margin: "0 0 0.75rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Ready to Review?
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: T.textPrimary,
          lineHeight: 1.8,
          margin: "0 auto 1rem",
          maxWidth: 640,
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        Read through the posts below. If the voice, framing, and content feel right, let us know
        and we will finalize the content calendar with specific posting dates and times.
      </p>
      <div
        style={{
          display: "inline-block",
          padding: "0.6rem 1.4rem",
          borderRadius: 8,
          background: T.teal,
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.9rem",
          fontFamily: "system-ui, sans-serif",
          marginBottom: "1rem",
        }}
      >
        Reply to your Maple 360 contact or leave feedback directly in the portal.
      </div>
      <p
        style={{
          fontSize: "0.85rem",
          color: T.textSecondary,
          margin: "0.5rem 0 0",
          lineHeight: 1.7,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontStyle: "italic",
        }}
      >
        Once approved, we will prepare a posting schedule optimized for your audience&rsquo;s
        engagement patterns.
      </p>
    </SectionCard>
  );
}

// ---------------------------------------------------------------------------
// Root export
// ---------------------------------------------------------------------------

export default function LinkedInContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column" as const,
        gap: "1.25rem",
        maxWidth: 900,
        margin: "0 auto",
        padding: "0.5rem 0 2rem",
      }}
    >
      <AboutSection />
      <TwoViewsSection />
      <WeHeardYouSection />
      <StructureSection />
      <CTASection />
    </div>
  );
}
