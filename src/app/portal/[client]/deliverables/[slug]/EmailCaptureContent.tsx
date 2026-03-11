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

interface FeedbackRow {
  heard: string;
  addressed: string;
}

const feedbackRows: FeedbackRow[] = [
  {
    heard:
      "The opt-in should feel generous, not transactional. Value first.",
    addressed:
      "Form copy leads with the value of the audit itself. No urgency tactics, countdown timers, or \u2018limited spots\u2019 language. The exchange is straightforward: your email for a genuinely useful diagnostic.",
  },
  {
    heard:
      "I do not want people to feel like they are entering a sales funnel.",
    addressed:
      "After opting in, the confirmation message and emails are framed as \u2018thinking emails from a colleague\u2019 \u2014 not a drip campaign. Unsubscribe is always one click.",
  },
  {
    heard:
      "The design should match the warm, academic feel of the PDF.",
    addressed:
      "Form uses the same cream/teal palette as the audit PDF. Georgia serif font. Generous whitespace. Feels like an extension of your intellectual work, not a popup.",
  },
];

interface StructureStep {
  number: string;
  title: string;
  description: string;
}

const structureSteps: StructureStep[] = [
  {
    number: "01",
    title: "Opt-in Form",
    description:
      "Two fields (name, email) + one button (\u201cDownload the Free 7-Layer IP Architecture Audit\u201d). Placed at top and bottom of landing page. Clean, minimal design.",
  },
  {
    number: "02",
    title: "Confirmation",
    description:
      "After submission, user sees a thank-you message. PDF download link delivered instantly via email.",
  },
  {
    number: "03",
    title: "Email Delivery",
    description:
      "Resend handles transactional email delivery. The audit PDF is attached or linked in the first email. Delivery is immediate \u2014 no delays.",
  },
  {
    number: "04",
    title: "Sequence Trigger",
    description:
      "Opt-in automatically enrolls the subscriber into the 5-email welcome nurture sequence. First \u2018thinking email\u2019 arrives on Day 2.",
  },
  {
    number: "05",
    title: "Data Capture",
    description:
      "Subscriber data stored securely. Available for future segmentation and communication. No third-party sharing.",
  },
];

export default function EmailCaptureContent() {
  return (
    <div
      style={{
        backgroundColor: T.bgPrimary,
        minHeight: "100vh",
        padding: "40px 24px",
        fontFamily: "Georgia, serif",
        color: T.textPrimary,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        {/* Section 1 — About This Page */}
        <section style={{ marginBottom: 48 }}>
          <div
            style={{
              borderLeft: `4px solid ${T.teal}`,
              backgroundColor: T.bgSecondary,
              borderRadius: 8,
              padding: "20px 24px",
              boxShadow: `0 2px 8px ${T.shadow}`,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.7,
                color: T.textPrimary,
              }}
            >
              This is your deliverable review page \u2014 it is only visible to you.
              Below you will find how your email capture system works, what your
              audience experiences, and how it connects to the rest of your
              funnel. The opt-in form is live on your landing page.
            </p>
          </div>
        </section>

        {/* Section 2 — Two Views */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: T.slate,
              marginBottom: 20,
              letterSpacing: "-0.3px",
            }}
          >
            Two Views
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {/* Client view */}
            <div
              style={{
                backgroundColor: T.bgSecondary,
                borderRadius: 8,
                padding: "20px 22px",
                boxShadow: `0 2px 8px ${T.shadow}`,
                borderTop: `3px solid ${T.teal}`,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                  color: T.teal,
                  margin: "0 0 12px 0",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Your View \u2014 Dr. Dugan
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  listStyleType: "disc",
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: T.textPrimary,
                }}
              >
                <li>Integration overview and technical details</li>
                <li>Lead flow from opt-in to email sequence</li>
                <li>Form design and placement details</li>
                <li>Conversion tracking setup</li>
              </ul>
            </div>

            {/* Audience view */}
            <div
              style={{
                backgroundColor: T.bgSecondary,
                borderRadius: 8,
                padding: "20px 22px",
                boxShadow: `0 2px 8px ${T.shadow}`,
                borderTop: `3px solid ${T.salmon}`,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                  color: T.salmon,
                  margin: "0 0 12px 0",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Audience Experience
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  listStyleType: "disc",
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: T.textPrimary,
                }}
              >
                <li>Simple form: name + email</li>
                <li>
                  Receives the free 7-Layer IP Architecture Audit PDF
                  immediately
                </li>
                <li>Enters the 5-email welcome sequence automatically</li>
                <li>No friction \u2014 no credit card, no account creation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 — We Heard You */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: T.slate,
              marginBottom: 20,
              letterSpacing: "-0.3px",
            }}
          >
            We Heard You
          </h2>
          <div
            style={{
              backgroundColor: T.bgSecondary,
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: `0 2px 8px ${T.shadow}`,
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                backgroundColor: T.tableHeader,
                padding: "10px 20px",
                borderBottom: `1px solid ${T.lightGray}`,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                  color: T.textSecondary,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                What We Heard
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                  color: T.textSecondary,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                How We Addressed It
              </span>
            </div>

            {/* Rows */}
            {feedbackRows.map((row, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom:
                    index < feedbackRows.length - 1
                      ? `1px solid ${T.lightGray}`
                      : "none",
                }}
              >
                <div
                  style={{
                    padding: "16px 20px",
                    borderRight: `1px solid ${T.lightGray}`,
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: T.textSecondary,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{row.heard}&rdquo;
                </div>
                <div
                  style={{
                    padding: "16px 20px",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: T.textPrimary,
                  }}
                >
                  {row.addressed}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Structure */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: T.slate,
              marginBottom: 20,
              letterSpacing: "-0.3px",
            }}
          >
            Structure
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {structureSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  backgroundColor: T.bgSecondary,
                  borderRadius: 8,
                  padding: "18px 22px",
                  boxShadow: `0 2px 8px ${T.shadow}`,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: T.teal,
                    fontFamily: "system-ui, sans-serif",
                    minWidth: 28,
                    paddingTop: 2,
                    letterSpacing: "0.5px",
                  }}
                >
                  {step.number}
                </span>
                <div>
                  <p
                    style={{
                      margin: "0 0 4px 0",
                      fontSize: 15,
                      fontWeight: 700,
                      color: T.slate,
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: T.textSecondary,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — CTA */}
        <section>
          <div
            style={{
              backgroundColor: T.bgSecondary,
              borderRadius: 12,
              padding: "36px 32px",
              boxShadow: `0 2px 12px ${T.shadow}`,
              textAlign: "center" as const,
            }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: T.slate,
                margin: "0 0 12px 0",
                letterSpacing: "-0.3px",
              }}
            >
              See It Live
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: T.textSecondary,
                margin: "0 0 28px 0",
                maxWidth: 460,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              The opt-in form is already active on your landing page. Click
              below to see exactly what your audience experiences when they
              arrive.
            </p>
            <a
              href="/landing/jamila-dugan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: T.teal,
                color: T.bgSecondary,
                fontFamily: "system-ui, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                padding: "13px 30px",
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "0.2px",
                boxShadow: `0 4px 12px rgba(126, 203, 196, 0.35)`,
              }}
            >
              View Your Landing Page \u2192
            </a>
            <p
              style={{
                margin: "16px 0 0 0",
                fontSize: 12,
                color: T.textSecondary,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Opens in a new tab \u00b7 This is what your audience sees
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
