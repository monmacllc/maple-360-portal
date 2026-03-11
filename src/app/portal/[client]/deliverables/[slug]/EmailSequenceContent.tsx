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
  amber: "#B7791F",
  shadow: "rgba(0, 0, 0, 0.08)",
};

export default function EmailSequenceContent() {
  return (
    <div style={{ background: T.bgPrimary, minHeight: "100vh", padding: "2rem 1rem", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>

        {/* Section 1 — About This Page */}
        <div style={{
          background: T.bgSecondary,
          border: `1.5px solid ${T.teal}`,
          borderRadius: 12,
          padding: "1.5rem 2rem",
          boxShadow: `0 2px 12px ${T.shadow}`,
        }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 0.5rem" }}>
            About This Page
          </p>
          <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: 0, lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            This is your deliverable review page. It is only visible to you. Below you will find the structure of your 5-email welcome and nurture sequence, a sample of Email 1 for tone review, and the subjects for the remaining four. When you approve the tone and direction, we finalize the full sequence.
          </p>
        </div>

        {/* Section 2 — Two Views */}
        <div style={{
          background: T.bgSecondary,
          borderRadius: 12,
          padding: "1.5rem 2rem",
          border: `1px solid ${T.lightGray}`,
          boxShadow: `0 2px 12px ${T.shadow}`,
        }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: T.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 1rem" }}>
            Two Views
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{
              background: T.bgLight,
              borderRadius: 10,
              padding: "1.25rem 1.5rem",
              border: `1px solid ${T.lightGray}`,
            }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 0.75rem" }}>
                What You See (Dr. Dugan)
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "Full email copy for review",
                  "Subject lines and send timing",
                  "Tone and voice check",
                  "Approval before finalizing",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.9rem", color: T.textPrimary, lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: T.bgLight,
              borderRadius: 10,
              padding: "1.25rem 1.5rem",
              border: `1px solid ${T.lightGray}`,
            }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: T.salmon, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 0.75rem" }}>
                What Your Audience Sees
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "Receives emails automatically after downloading the free audit",
                  "5 emails over 7 days",
                  "Each email builds on stewardship themes",
                  "No sales pressure. Value and thinking only.",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.9rem", color: T.textPrimary, lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3 — We Heard You */}
        <div style={{
          background: "#F0FAF9",
          borderRadius: 12,
          padding: "2rem 2rem",
          border: `1px solid ${T.teal}`,
          borderLeft: `4px solid ${T.teal}`,
          boxShadow: "0 2px 16px rgba(126, 203, 196, 0.18)",
        }}>
          <p style={{ fontSize: "1.2rem", fontWeight: 700, color: T.slate, margin: "0 0 1.25rem", letterSpacing: "0.01em" }}>
            We Heard You
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {[
              {
                heard: "The tone should feel like a letter from a colleague, not a marketing funnel.",
                addressed: "Email 1 written in first person, conversational academic tone. No bullet-point selling. Reads like a personal note.",
              },
              {
                heard: "Em dashes were flagged as not matching my voice.",
                addressed: "Em dashes removed from all email content. Sentence structure uses periods and natural breaks instead.",
              },
              {
                heard: "I do not want this to feel like a drip campaign or sales sequence.",
                addressed: "Sequence framed as thinking emails. Each one explores an idea, not a pitch. The word buy does not appear anywhere.",
              },
            ].map((row, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                border: `1px solid ${T.teal}`,
                borderRadius: 8,
                overflow: "hidden",
              }}>
                <div style={{ padding: "1.25rem 1.4rem", background: "#E6F6F5", borderRight: `1px solid ${T.teal}` }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color: T.textSecondary, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 0.45rem" }}>
                    What You Said
                  </p>
                  <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: 0, lineHeight: 1.7, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: "italic" }}>
                    &ldquo;{row.heard}&rdquo;
                  </p>
                </div>
                <div style={{ padding: "1.25rem 1.4rem", background: "#F0FAF9" }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 0.45rem" }}>
                    How We Addressed It
                  </p>
                  <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: 0, lineHeight: 1.7, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    {row.addressed}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 — Deliverable Content */}
        <div style={{
          background: T.bgSecondary,
          borderRadius: 12,
          padding: "1.5rem 2rem",
          border: `1px solid ${T.lightGray}`,
          boxShadow: `0 2px 12px ${T.shadow}`,
        }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, color: T.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 1.25rem" }}>
            Structure. Full Deliverable
          </p>

          {/* === Existing email_sequence content begins === */}
          <div style={{ background: T.bgSecondary, borderRadius: 12, padding: "2rem", maxWidth: 800, margin: "0 auto", border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04)` }}>
            <h1 style={{ fontSize: "1.65rem", fontWeight: 700, color: T.slate, margin: "0 0 0.5rem", lineHeight: 1.25, fontFamily: "system-ui, sans-serif" }}>
              Welcome Email Sequence. Sample for Review
            </h1>

            <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: T.slate, margin: "1.75rem 0 0.5rem", fontFamily: "system-ui, sans-serif", borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: "0.3rem" }}>
              IP Stewardship Lab. Dr. Jamila Dugan
            </h2>

            <div style={{ height: "0.4rem" }}></div>
            <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: "none", borderBottom: "none", borderLeft: "none", margin: "1.5rem 0" }} />
            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              &gt; This is Email 1 of your 5-email welcome sequence. We&apos;re sharing this first email as a sample so you can review the tone, structure, and messaging before we finalize the remaining four.
            </p>

            <div style={{ height: "0.4rem" }}></div>
            <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: "none", borderBottom: "none", borderLeft: "none", margin: "1.5rem 0" }} />
            <div style={{ height: "0.4rem" }}></div>

            <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: T.slate, margin: "1.75rem 0 0.5rem", fontFamily: "system-ui, sans-serif", borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: "0.3rem" }}>
              Email 1 of 5. Welcome + Audit Delivery
            </h2>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              <strong>Subject Line:</strong> Your 7-Layer IP Architecture Audit is here
            </p>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              <strong>From:</strong> Dr. Jamila Dugan &lt;hello@jamiladugan.com&gt;
            </p>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              <strong>Sent:</strong> Immediately when someone downloads the free audit
            </p>

            <div style={{ height: "0.4rem" }}></div>
            <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: "none", borderBottom: "none", borderLeft: "none", margin: "1.5rem 0" }} />
            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Hi [First Name],
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Thank you for downloading the 7-Layer IP Architecture Audit.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              This is not a checklist. It is a diagnostic, designed to help you see the full scope of what you carry as a practitioner, and to identify the layers of your intellectual property that may be unprotected, unstructured, or unnamed.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Most people who take this audit discover that they have significantly more intellectual property than they realized. The frameworks they have built, the facilitation moves they have refined, the relational knowledge they carry into every room. All of it is IP. And most of it has no infrastructure around it.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              That is not a failure. It is a starting point.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Here is your audit: [Download Link]
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Take your time with it. There are seven layers, and each one asks a different question about how your work lives in the world. When you are finished, you will have a clearer picture of what you have built, and where the gaps are.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Over the next week, I am going to send you a few short emails that go deeper into the ideas behind this audit. Not sales emails. Thinking emails. The kind of thing I would send to a colleague I respected.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              The first one will arrive in a couple of days. It is about the difference between stewarding your IP and extracting from it, and why that distinction matters more than most people realize.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Until then, take the audit. See what you find.
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              With intention,
            </p>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Dr. Jamila Dugan
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              P.S. If you score below 15 on the audit, at least one layer of your IP is significantly unprotected. That is worth knowing.
            </p>

            <div style={{ height: "0.4rem" }}></div>
            <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: "none", borderBottom: "none", borderLeft: "none", margin: "1.5rem 0" }} />
            <div style={{ height: "0.4rem" }}></div>

            <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: T.slate, margin: "1.75rem 0 0.5rem", fontFamily: "system-ui, sans-serif", borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: "0.3rem" }}>
              Remaining Emails (Pending Your Review)
            </h2>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Once you approve the tone and direction of Email 1, we will finalize:
            </p>

            <div style={{ height: "0.4rem" }}></div>

            <table style={{ width: "100%", borderCollapse: "collapse", margin: "1rem 0", fontSize: "0.875rem", fontFamily: "system-ui, sans-serif" }}>
              <thead>
                <tr>
                  <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: "0.5rem 0.75rem", textAlign: "left", border: `1px solid ${T.lightGray}`, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    Email
                  </th>
                  <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: "0.5rem 0.75rem", textAlign: "left", border: `1px solid ${T.lightGray}`, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    Subject
                  </th>
                  <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: "0.5rem 0.75rem", textAlign: "left", border: `1px solid ${T.lightGray}`, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    Sends
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: T.bgSecondary }}>
                    <strong>Email 2</strong>
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: T.bgSecondary }}>
                    &ldquo;Stewarding and extracting are not the same thing&rdquo;
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: T.bgSecondary }}>
                    Day 2
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: "#FDFDFD" }}>
                    <strong>Email 3</strong>
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: "#FDFDFD" }}>
                    &ldquo;One question I want you to sit with this week&rdquo;
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: "#FDFDFD" }}>
                    Day 3
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: T.bgSecondary }}>
                    <strong>Email 4</strong>
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: T.bgSecondary }}>
                    &ldquo;3 signs your framework is ready to steward&rdquo;
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: T.bgSecondary }}>
                    Day 5
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: "#FDFDFD" }}>
                    <strong>Email 5</strong>
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: "#FDFDFD" }}>
                    &ldquo;Your next step (if you scored below 15)&rdquo;
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem", border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: "top", background: "#FDFDFD" }}>
                    Day 7
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Each email builds on the previous one, moving from the core distinction (stewarding vs. extracting) through the signs of readiness, to the direct invitation to join the IP Stewardship Lab waitlist.
            </p>

            <div style={{ height: "0.4rem" }}></div>
            <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: "none", borderBottom: "none", borderLeft: "none", margin: "1.5rem 0" }} />
            <div style={{ height: "0.4rem" }}></div>

            <p style={{ fontSize: "0.875rem", color: T.textSecondary, margin: "0.35rem 0", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: "italic" }}>
              Please review and let us know: Does the tone feel right? Is this how you would write to your audience? Any adjustments to voice, length, or approach?
            </p>
          </div>
          {/* === Existing email_sequence content ends === */}
        </div>

        {/* Section 5 — CTA */}
        <div style={{
          background: T.bgSecondary,
          borderRadius: 12,
          padding: "1.75rem 2rem",
          border: `1px solid ${T.lightGray}`,
          boxShadow: `0 2px 12px ${T.shadow}`,
          textAlign: "center",
        }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: T.slate, margin: "0 0 0.75rem", fontFamily: "system-ui, sans-serif" }}>
            Ready to Review?
          </h2>
          <p style={{ fontSize: "0.95rem", color: T.textPrimary, margin: "0 auto 1.25rem", lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', maxWidth: 560 }}>
            Read through Email 1 above. If the tone, structure, and voice feel right, let us know and we will finalize Emails 2 through 5 using the same approach.
          </p>
          <div style={{
            display: "inline-block",
            background: T.bgLight,
            border: `1.5px solid ${T.teal}`,
            borderRadius: 8,
            padding: "0.85rem 1.5rem",
            fontSize: "0.9rem",
            color: T.textPrimary,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.6,
          }}>
            Reply to your Maple 360 contact or leave feedback directly in the portal.
          </div>
          <p style={{ fontSize: "0.8rem", color: T.textSecondary, margin: "1rem 0 0", fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: "italic" }}>
            Once approved, the full sequence will be loaded into your email platform.
          </p>
        </div>

      </div>
    </div>
  );
}
