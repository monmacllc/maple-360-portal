import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getClient, getAllClientSlugs } from '@/lib/clients';

type Props = { params: Promise<{ client: string; slug: string }> };

// Enhanced color palette matching live Render site
const T = {
  bgPrimary: "#FAF8F5", // warm cream background
  bgSecondary: "#FFFFFF", // white cards
  bgLight: "#F8F6F3", // lighter cream
  teal: "#7ECBC4", // primary teal
  tealLight: "#4ECDC4", // accent teal
  coral: "#FF6B6B", // status indicators, important metrics
  salmon: "#E8736A", // alternate coral
  slate: "#2D3436", // headings
  textPrimary: "#4A5568", // body text (muted gray)
  textSecondary: "#718096", // secondary text
  lightGray: "#E8E4DE", // borders
  tableHeader: "#F0EDE8", // table headers
  green: "#48BB78", // success/completed states
  amber: "#FFD93D", // warning states
  shadow: "rgba(0, 0, 0, 0.08)", // enhanced shadows
};

export async function generateStaticParams() {
  const params: { client: string; slug: string }[] = [];
  for (const clientSlug of getAllClientSlugs()) {
    const client = getClient(clientSlug);
    if (client) {
      for (const d of client.deliverables) {
        params.push({ client: clientSlug, slug: d.slug });
      }
    }
  }
  return params;
}

const DeliverableContent = ({ type, slug }: { type: string; slug: string }) => {

  switch (type) {
    case 'email_sequence':
      return (
        <div style={{ background: T.bgSecondary, borderRadius: 12, padding: '2rem', maxWidth: 800, margin: '0 auto', border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04)` }}>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 700, color: T.slate, margin: '0 0 0.5rem', lineHeight: 1.25, fontFamily: 'system-ui, sans-serif' }}>
            Welcome Email Sequence — Sample for Review
          </h1>
          
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
            IP Stewardship Lab — Dr. Jamila Dugan
          </h2>
          
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: 'none', borderBottom: 'none', borderLeft: 'none', margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            &gt; This is Email 1 of your 5-email welcome sequence. We're sharing this first email as a sample so you can review the tone, structure, and messaging before we finalize the remaining four.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: 'none', borderBottom: 'none', borderLeft: 'none', margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
            Email 1 of 5 — Welcome + Audit Delivery
          </h2>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Subject Line:</strong> Your 7-Layer IP Architecture Audit is here
          </p>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>From:</strong> Dr. Jamila Dugan &lt;hello@jamiladugan.com&gt;
          </p>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Sent:</strong> Immediately when someone downloads the free audit
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: 'none', borderBottom: 'none', borderLeft: 'none', margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Hi [First Name],
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Thank you for downloading the 7-Layer IP Architecture Audit.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            This is not a checklist. It is a diagnostic — designed to help you see the full scope of what you carry as a practitioner, and to identify the layers of your intellectual property that may be unprotected, unstructured, or unnamed.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Most people who take this audit discover that they have significantly more intellectual property than they realized. The frameworks they have built, the facilitation moves they have refined, the relational knowledge they carry into every room — all of it is IP. And most of it has no infrastructure around it.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            That is not a failure. It is a starting point.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Here is your audit: [Download Link]
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Take your time with it. There are seven layers, and each one asks a different question about how your work lives in the world. When you are finished, you will have a clearer picture of what you have built — and where the gaps are.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Over the next week, I am going to send you a few short emails that go deeper into the ideas behind this audit. Not sales emails — thinking emails. The kind of thing I would send to a colleague I respected.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            The first one will arrive in a couple of days. It is about the difference between stewarding your IP and extracting from it — and why that distinction matters more than most people realize.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Until then, take the audit. See what you find.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            With intention,
          </p>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Dr. Jamila Dugan
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            P.S. — If you score below 15 on the audit, at least one layer of your IP is significantly unprotected. That is worth knowing.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: 'none', borderBottom: 'none', borderLeft: 'none', margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
            Remaining Emails (Pending Your Review)
          </h2>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Once you approve the tone and direction of Email 1, we will finalize:
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', fontSize: '0.875rem', fontFamily: 'system-ui, sans-serif' }}>
            <thead>
              <tr>
                <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Email
                </th>
                <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Subject
                </th>
                <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Sends
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  <strong>Email 2</strong>
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  "Stewarding and extracting are not the same thing"
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  Day 2
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  <strong>Email 3</strong>
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  "One question I want you to sit with this week"
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  Day 3
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  <strong>Email 4</strong>
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  "3 signs your framework is ready to steward"
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  Day 5
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  <strong>Email 5</strong>
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  "Your next step (if you scored below 15)"
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  Day 7
                </td>
              </tr>
            </tbody>
          </table>
          
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Each email builds on the previous one, moving from the core distinction (stewarding vs. extracting) through the signs of readiness, to the direct invitation to join the IP Stewardship Lab waitlist.
          </p>
          
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, borderRight: 'none', borderBottom: 'none', borderLeft: 'none', margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          
          <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
            Please review and let us know: Does the tone feel right? Is this how you would write to your audience? Any adjustments to voice, length, or approach?
          </p>
        </div>
      );

    case 'linkedin_content':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: T.bgSecondary, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04)`, padding: '1.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h1 style={{ fontSize: '1.65rem', fontWeight: 700, color: T.slate, margin: '0 0 0.5rem', lineHeight: 1.25, fontFamily: 'system-ui, sans-serif' }}>
                LinkedIn Post Templates — Dr. Jamila Dugan / IP Stewardship Lab
              </h1>
              <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
                *Prepared by Maple 360 | February 2026*
              </p>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                <strong>Tone reference:</strong> Writing Style Guide — Dr. Jamila Dugan
              </p>
              <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
                *Total posts: 20 | Posting notes included with each*
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
              <div style={{ height: '0.4rem' }}></div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
                Thought Leadership (Posts 1–6)
              </h2>
              <div style={{ height: '0.4rem' }}></div>
              <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
            </div>
          </div>

          <div style={{ background: T.bgSecondary, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04)`, padding: '1.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: T.textPrimary, margin: '1.25rem 0 0.3rem', fontFamily: 'system-ui, sans-serif' }}>
                Post 1: The Reframe
              </h3>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                <strong>Theme:</strong> Rejecting "extraction" as the frame for sharing expertise
              </p>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                <strong>Best time to post:</strong> Tuesday or Wednesday, 8–10am
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                I refuse to accept the framing that our intellectual property needs to be "extracted from."
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Not because income doesn't matter. It does.
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                But because the word "extraction" carries a logic inside it — a logic that says your knowledge is a raw material waiting to be processed into product. That the move from practitioner to course creator is primarily a transaction. That what you know is most valuable as a revenue stream.
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                I've spent fifteen years watching what happens to practitioners who accept that framing. Their frameworks get simplified to fit a template. Their relational knowledge gets flattened into bullets. The context that makes their methods work in rooms gets stripped out to improve completion rates.
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                What's left may still sell. But it is not what they built.
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Stewardship is a different posture. It asks: what conditions would allow your IP to move in the world without losing what makes it alive? What infrastructure does it need — not just to generate revenue, but to remain faithful to the communities it was built with?
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Those are not the same questions. They do not produce the same outcomes.
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                I am not anti-income. I am anti-extraction. There is a way to build a sustainable, values-aligned knowledge practice that generates real revenue while protecting what matters. That is what I'm building infrastructure for.
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                What word do you use — or wish you could use — instead of "extract"?
              </p>
              <div style={{ height: '0.4rem' }}></div>
              <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                #IPStewardship #IntellectualProperty #KnowledgeWork #EquityCentered #ConsultantLife
              </p>
            </div>
          </div>

          <div style={{ background: T.bgSecondary, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04)`, padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
              Remaining Posts (Pending Your Review)
            </h2>
            <div style={{ height: '0.4rem' }}></div>
            <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Once you approve the tone and direction of these three samples, we will finalize the remaining 17 posts:
            </p>
            <div style={{ height: '0.4rem' }}></div>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', fontSize: '0.875rem', fontFamily: 'system-ui, sans-serif' }}>
              <thead>
                <tr>
                  <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Category
                  </th>
                  <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Posts
                  </th>
                  <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    Topics
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    <strong>Thought Leadership</strong>
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    Posts 4-6
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    Naming your IP, the infrastructure argument, an open letter to practitioners
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                    <strong>Framework Teasers</strong>
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                    Posts 7-10
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                    Street Data connection, 7-Layer audit preview, extraction vs stewardship, knowledge lineage
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    <strong>Community &amp; Story</strong>
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    Posts 11-14
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    Client transformations, audience questions, practitioner spotlight, behind the scenes
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                    <strong>Course Promotion</strong>
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                    Posts 15-18
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                    Waitlist opening, what the course covers, founding cohort benefits, countdown
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    <strong>Engagement Drivers</strong>
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    Posts 19-20
                  </td>
                  <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                    Polls, conversation starters
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
              Please review these three samples and let us know: Does the voice feel authentic? Would you post this? Any adjustments to tone, length, or messaging?
            </p>
          </div>
        </div>
      );

    case 'site_audit':
      return (
        <div style={{ background: T.bgSecondary, borderRadius: 12, padding: '2rem', maxWidth: 800, margin: '0 auto', border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04)` }}>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 700, color: T.slate, margin: '0 0 0.5rem', lineHeight: 1.25, fontFamily: 'system-ui, sans-serif' }}>
            Website Visibility Report
          </h1>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
            Dr. Jamila Dugan — jamiladugan.com &amp; joysource.org
          </h2>
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Prepared by:</strong> Monmac Labs
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Date:</strong> February 24, 2026
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Classification:</strong> Confidential — Client Deliverable
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Report Reference:</strong> M1-SEO-GEO-AUDIT-2026
          </p>
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            &gt; *Milestone 1 deliverable for your IP Stewardship Lab engagement. Two websites audited through the eyes of Google and AI assistants. What we found, what it means, and what we are doing about it.*
          </p>
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
            Table of Contents
          </h2>
          <div style={{ height: '0.4rem' }}></div>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            1. What We Looked At
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            2. The Bottom Line
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            3. Your Current Visibility at a Glance
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            4. What We Found: jamiladugan.com
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            5. What We Found: joysource.org
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            6. The AI Visibility Opportunity
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            7. What Happens Next: Your Action Plan
          </p>
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
            This is a comprehensive audit covering technical SEO, content discoverability, and AI assistant visibility. The full report contains detailed findings, recommendations, and a prioritized action plan.
          </p>
        </div>
      );

    case 'kpi_dashboard':
      return (
        <div style={{ background: T.bgSecondary, borderRadius: 12, padding: '2rem', maxWidth: 800, margin: '0 auto', border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 16px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.04)` }}>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 700, color: T.slate, margin: '0 0 0.5rem', lineHeight: 1.25, fontFamily: 'system-ui, sans-serif' }}>
            KPI Dashboard — IP Stewardship Lab
          </h1>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
            Dr. Jamila Dugan — Launch Metrics &amp; Goals
          </h2>
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Purpose:</strong> Track progress toward course launch and IP stewardship framework goals
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Reporting Period:</strong> February 2026 - Course Launch
          </p>
          <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <strong>Update Frequency:</strong> Weekly
          </p>
          <div style={{ height: '0.4rem' }}></div>
          <hr style={{ borderTop: `1px solid ${T.lightGray}`, margin: '1.5rem 0' }} />
          <div style={{ height: '0.4rem' }}></div>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: T.slate, margin: '1.75rem 0 0.5rem', fontFamily: 'system-ui, sans-serif', borderBottom: `2px solid ${T.tableHeader}`, paddingBottom: '0.3rem' }}>
            Key Performance Indicators
          </h2>
          <div style={{ height: '0.4rem' }}></div>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', fontSize: '0.875rem', fontFamily: 'system-ui, sans-serif' }}>
            <thead>
              <tr>
                <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Metric
                </th>
                <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Target
                </th>
                <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Current
                </th>
                <th style={{ background: T.bgLight, color: T.textPrimary, fontWeight: 700, padding: '0.5rem 0.75rem', textAlign: 'left', border: `1px solid ${T.lightGray}`, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  <strong>Waitlist Signups</strong>
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  500 by launch
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  127
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.green, verticalAlign: 'top', background: T.bgSecondary }}>
                  On Track
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  <strong>Content Engagement</strong>
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  5% weekly growth
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: '#FDFDFD' }}>
                  7.2% growth
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.green, verticalAlign: 'top', background: '#FDFDFD' }}>
                  Exceeding
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  <strong>Framework Development</strong>
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  7 modules complete
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.textPrimary, verticalAlign: 'top', background: T.bgSecondary }}>
                  5 of 7 complete
                </td>
                <td style={{ padding: '0.5rem 0.75rem', border: `1px solid ${T.lightGray}`, color: T.green, verticalAlign: 'top', background: T.bgSecondary }}>
                  On Schedule
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ height: '0.4rem' }}></div>
          <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0.35rem 0', lineHeight: 1.75, fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
            This dashboard provides a comprehensive view of launch readiness across all key metrics. Updated weekly with detailed analysis and recommendations.
          </p>
        </div>
      );

    default:
      return (
        <div style={{ textAlign: 'center', color: T.textSecondary, padding: '2rem' }}>
          Deliverable content not found
        </div>
      );
  }
};

const DeliverablePage = async ({ params }: Props) => {
  const { client: clientSlug, slug } = await params;
  const client = getClient(clientSlug);
  
  if (!client) {
    return notFound();
  }

  const deliverable = client.deliverables.find(d => d.slug === slug);
  
  if (!deliverable) {
    return notFound();
  }

  return (
    <div style={{ minHeight: '100vh', background: T.bgPrimary, padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Link href={`/portal/${clientSlug}`} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.875rem',
          color: T.textSecondary,
          textDecoration: 'none',
          marginBottom: '1.5rem'
        }}>
          ← Back to Portal
        </Link>
        
        <h1 style={{ 
          margin: '0 0 0.5rem', 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          color: T.slate, 
          lineHeight: 1.25 
        }}>
          {deliverable.title}
        </h1>
        
        <DeliverableContent type={deliverable.type} slug={slug} />
      </div>
    </div>
  );
};

export default DeliverablePage;