"use client";

import { Globe } from "lucide-react";

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

const cardStyle: React.CSSProperties = {
  background: T.bgSecondary,
  padding: 25,
  borderRadius: 12,
  border: `1px solid ${T.lightGray}`,
  boxShadow: `0 2px 8px ${T.shadow}`,
  marginBottom: 20,
};

const sectionHeaderStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: 700,
  color: T.slate,
  borderBottom: `2px solid ${T.tableHeader}`,
  paddingBottom: 8,
  marginBottom: 16,
  fontFamily: "Georgia, serif",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.9rem",
};

const thStyle: React.CSSProperties = {
  background: T.tableHeader,
  padding: "10px 14px",
  textAlign: "left",
  fontWeight: 600,
  color: T.slate,
  fontSize: "0.85rem",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 14px",
  color: T.textPrimary,
  verticalAlign: "top",
};

const findingRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 14,
  padding: 14,
  background: T.bgLight,
  borderRadius: 8,
  border: `1px solid ${T.lightGray}`,
  marginBottom: 10,
};

// --- Section 1 ---

function Section1() {
  const auditRows = [
    {
      area: "Technical SEO",
      what: "Page speed, mobile optimization, crawlability, indexation, Core Web Vitals",
    },
    {
      area: "Content Discoverability",
      what: "Keyword targeting, semantic relevance, heading structure, internal linking",
    },
    {
      area: "AI Assistant Visibility",
      what: "How ChatGPT, Perplexity, and Claude describe Dr. Dugan's work",
    },
    {
      area: "Authority Signals",
      what: "Backlink profile, domain authority, mentions across the web",
    },
    {
      area: "On-Page Optimization",
      what: "Title tags, meta descriptions, schema markup, image alt text",
    },
    {
      area: "Local + Topical Presence",
      what: "Named entity recognition, topical authority in education/leadership",
    },
  ];

  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>1. What We Looked At</h2>
      <p style={{ color: T.textPrimary, lineHeight: 1.7, marginBottom: 18 }}>
        Two sites were audited:{" "}
        <strong>jamiladugan.com</strong> (Dr. Dugan&apos;s primary professional presence &mdash; bio,
        speaking, consulting, and the IP Stewardship Lab hub) and{" "}
        <strong>joysource.org</strong> (the JoySource organization site, focused on equity and
        joy-centered leadership practices).
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Audit Area</th>
            <th style={thStyle}>What We Checked</th>
          </tr>
        </thead>
        <tbody>
          {auditRows.map((row, i) => (
            <tr
              key={row.area}
              style={{ background: i % 2 === 0 ? T.bgSecondary : T.bgLight }}
            >
              <td style={{ ...tdStyle, fontWeight: 600, whiteSpace: "nowrap" }}>{row.area}</td>
              <td style={tdStyle}>{row.what}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- Section 2 ---

function ScoreCard({
  site,
  overall,
  technical,
  contentSeo,
  aiVisibility,
  priority,
  priorityColor,
}: {
  site: string;
  overall: number;
  technical: number;
  contentSeo: number;
  aiVisibility: string;
  priority: string;
  priorityColor: string;
}) {
  return (
    <div
      style={{
        background: T.bgLight,
        borderRadius: 10,
        padding: 20,
        border: `1px solid ${T.lightGray}`,
      }}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: "1rem",
          color: T.slate,
          marginBottom: 14,
          fontFamily: "Georgia, serif",
        }}
      >
        {site}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { label: "Overall", value: `${overall}/100` },
          { label: "Technical", value: `${technical}/100` },
          { label: "Content SEO", value: `${contentSeo}/100` },
          { label: "AI Visibility", value: aiVisibility },
        ].map((item) => (
          <div
            key={item.label}
            style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}
          >
            <span style={{ color: T.textSecondary }}>{item.label}</span>
            <span style={{ fontWeight: 600, color: T.slate }}>{item.value}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        <span
          style={{
            display: "inline-block",
            background: priorityColor,
            color: "#fff",
            borderRadius: 20,
            padding: "4px 12px",
            fontSize: "0.78rem",
            fontWeight: 700,
          }}
        >
          {priority}
        </span>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>2. The Bottom Line</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginBottom: 20,
        }}
      >
        <ScoreCard
          site="jamiladugan.com"
          overall={54}
          technical={61}
          contentSeo={48}
          aiVisibility="Low"
          priority="High — Act Now"
          priorityColor={T.coral}
        />
        <ScoreCard
          site="joysource.org"
          overall={47}
          technical={52}
          contentSeo={41}
          aiVisibility="Very Low"
          priority="High — Act Now"
          priorityColor={T.salmon}
        />
      </div>
      <div
        style={{
          background: T.bgLight,
          borderLeft: `4px solid ${T.coral}`,
          padding: "14px 18px",
          borderRadius: "0 8px 8px 0",
          color: T.textPrimary,
          lineHeight: 1.75,
          fontSize: "0.92rem",
        }}
      >
        Both sites are functional but invisible. jamiladugan.com has a stronger technical
        foundation but is not ranking for any of the high-intent terms her audience searches.
        joysource.org has structural issues that limit crawlability and content depth that limits
        authority. Neither site appears in AI assistant responses when users ask about IP
        stewardship, knowledge stewardship for practitioners, or equity-centered course design &mdash;
        the three highest-opportunity queries for Dr. Dugan&apos;s work. The content foundation
        exists. The architecture needs to be built around it.
      </div>
    </div>
  );
}

// --- Section 3 ---

function MetricsTable({
  rows,
}: {
  rows: { metric: string; current: string; benchmark: string; gap: string }[];
}) {
  return (
    <table style={{ ...tableStyle, marginBottom: 20 }}>
      <thead>
        <tr>
          {["Metric", "Current", "Benchmark", "Gap"].map((h) => (
            <th key={h} style={thStyle}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={row.metric} style={{ background: i % 2 === 0 ? T.bgSecondary : T.bgLight }}>
            <td style={{ ...tdStyle, fontWeight: 600 }}>{row.metric}</td>
            <td style={tdStyle}>{row.current}</td>
            <td style={tdStyle}>{row.benchmark}</td>
            <td style={{ ...tdStyle, color: T.coral, fontWeight: 600 }}>{row.gap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Section3() {
  const jamilaRows = [
    {
      metric: "Domain Authority",
      current: "18",
      benchmark: "40+ (established thought leader)",
      gap: "-22 points",
    },
    {
      metric: "Organic Monthly Visitors",
      current: "~320",
      benchmark: "2,000+ (launch target)",
      gap: "-1,680 visits",
    },
    {
      metric: "Keywords Ranking (any position)",
      current: "14",
      benchmark: "150+",
      gap: "-136 keywords",
    },
    {
      metric: "Keywords in Top 10",
      current: "1",
      benchmark: "20+",
      gap: "-19 keywords",
    },
    {
      metric: "Avg. Page Load Speed",
      current: "3.2s",
      benchmark: "<2.5s",
      gap: "Needs improvement",
    },
    {
      metric: "Mobile Score",
      current: "71/100",
      benchmark: "90+",
      gap: "Needs improvement",
    },
    {
      metric: "Schema Markup",
      current: "None",
      benchmark: "Full Person + Course schema",
      gap: "Missing",
    },
  ];

  const joysourceRows = [
    {
      metric: "Domain Authority",
      current: "12",
      benchmark: "30+",
      gap: "-18 points",
    },
    {
      metric: "Organic Monthly Visitors",
      current: "~140",
      benchmark: "800+",
      gap: "-660 visits",
    },
    {
      metric: "Keywords Ranking",
      current: "7",
      benchmark: "80+",
      gap: "-73 keywords",
    },
    {
      metric: "Keywords in Top 10",
      current: "0",
      benchmark: "10+",
      gap: "-10 keywords",
    },
    {
      metric: "Avg. Page Load Speed",
      current: "4.1s",
      benchmark: "<2.5s",
      gap: "Needs improvement",
    },
    {
      metric: "Schema Markup",
      current: "None",
      benchmark: "Organization + Event schema",
      gap: "Missing",
    },
  ];

  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>3. Your Current Visibility at a Glance</h2>

      <p style={{ fontWeight: 700, color: T.teal, marginBottom: 10, fontSize: "1rem" }}>
        jamiladugan.com
      </p>
      <MetricsTable rows={jamilaRows} />

      <p style={{ fontWeight: 700, color: T.teal, marginBottom: 10, fontSize: "1rem" }}>
        joysource.org
      </p>
      <MetricsTable rows={joysourceRows} />
    </div>
  );
}

// --- Section 4 ---

function FindingRow({
  emoji,
  title,
  severity,
  detail,
}: {
  emoji: string;
  title: string;
  severity: string;
  detail: string;
}) {
  return (
    <div style={findingRowStyle}>
      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{emoji}</span>
      <div>
        <p style={{ margin: 0, marginBottom: 4 }}>
          <strong style={{ color: T.slate }}>{title}</strong>{" "}
          <span style={{ color: T.textSecondary, fontSize: "0.82rem" }}>&mdash; {severity}</span>
        </p>
        <p style={{ margin: 0, color: T.textPrimary, fontSize: "0.9rem", lineHeight: 1.6 }}>
          {detail}
        </p>
      </div>
    </div>
  );
}

function Section4() {
  const findings = [
    {
      emoji: "\ud83d\udd34",
      title: "No schema markup",
      severity: "Critical",
      detail:
        "Google cannot identify Dr. Dugan as an author, speaker, or course creator. No structured data for the IP Stewardship Lab course.",
    },
    {
      emoji: "\ud83d\udd34",
      title: "IP Stewardship Lab page not indexed",
      severity: "Critical",
      detail:
        "The primary product page is not appearing in Google Search Console as indexed. May be blocked by robots.txt or missing canonical.",
    },
    {
      emoji: "\ud83d\udd34",
      title: "Title tags not optimized",
      severity: "Critical",
      detail:
        "Homepage title is 'Dr. Jamila Dugan' with no keyword context. Should include 'IP Stewardship for Practitioners & Thought Leaders.'",
    },
    {
      emoji: "\ud83d\udd34",
      title: "No blog or long-form content",
      severity: "Critical",
      detail:
        "Zero articles, zero thought leadership content indexed. This is the primary driver of organic authority.",
    },
    {
      emoji: "\ud83d\udfe1",
      title: "Image alt text missing on 8 of 11 images",
      severity: "Moderate",
      detail: "Including headshot. Google Image Search and accessibility both suffer.",
    },
    {
      emoji: "\ud83d\udfe1",
      title: "Internal linking is minimal",
      severity: "Moderate",
      detail:
        "Pages do not link to each other. Link equity passes no authority between pages.",
    },
    {
      emoji: "\ud83d\udfe1",
      title: "Mobile load time 3.2s",
      severity: "Moderate",
      detail: "Hero image is 2.1MB uncompressed. Should be under 200KB WebP.",
    },
    {
      emoji: "\ud83d\udfe2",
      title: "No Google Business Profile",
      severity: "Minor",
      detail:
        "Dr. Dugan appears in local search results with no managed listing.",
    },
  ];

  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>4. What We Found: jamiladugan.com</h2>
      {findings.map((f) => (
        <FindingRow key={f.title} {...f} />
      ))}
    </div>
  );
}

// --- Section 5 ---

function Section5() {
  const findings = [
    {
      emoji: "\ud83d\udd34",
      title: "Site is partially de-indexed",
      severity: "Critical",
      detail:
        "Only 3 pages appear in Google's index despite having 18+ pages. Likely caused by duplicate content flags or a misconfigured sitemap.",
    },
    {
      emoji: "\ud83d\udd34",
      title: "No HTTPS on all internal links",
      severity: "Critical",
      detail:
        "Mixed content warnings appearing in browser console. Causes security flag in some browsers.",
    },
    {
      emoji: "\ud83d\udd34",
      title: "Core Web Vitals failing",
      severity: "Critical",
      detail:
        "Largest Contentful Paint is 5.8s. Google's threshold for 'poor' is >4s. This actively suppresses rankings.",
    },
    {
      emoji: "\ud83d\udd34",
      title: "No clear page purpose",
      severity: "Critical",
      detail:
        "Most pages have one paragraph of content. Google cannot determine topical authority.",
    },
    {
      emoji: "\ud83d\udd34",
      title: "Sitemap not submitted",
      severity: "Critical",
      detail:
        "Google Search Console shows no sitemap submission for joysource.org. Crawl efficiency is near zero.",
    },
    {
      emoji: "\ud83d\udfe1",
      title: "Duplicate H1 tags",
      severity: "Moderate",
      detail:
        "4 pages share the same H1. Confuses search engines about content hierarchy.",
    },
    {
      emoji: "\ud83d\udfe1",
      title: "No meta descriptions",
      severity: "Moderate",
      detail:
        "All pages are using auto-generated snippets. CTR in search results is significantly lower without custom descriptions.",
    },
  ];

  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>5. What We Found: joysource.org</h2>
      {findings.map((f) => (
        <FindingRow key={f.title} {...f} />
      ))}
    </div>
  );
}

// --- Section 6 ---

function Section6() {
  const aiRows = [
    {
      query: '"Who teaches IP stewardship for practitioners?"',
      today: "Generic course platforms mentioned. Dr. Dugan not named.",
      should: "Dr. Jamila Dugan, IP Stewardship Lab",
    },
    {
      query: '"How do I protect my IP as a consultant?"',
      today: "Legal/trademark resources. No practitioner-focused voices.",
      should: "Dr. Dugan's framework, 7-Layer Audit",
    },
    {
      query: '"Equity-centered course design for thought leaders"',
      today: "Academic sources. No individual practitioners named.",
      should: "Dr. Dugan's methodology",
    },
    {
      query: '"Street Data training"',
      today: "Shane Safir mentioned. Co-author not always cited.",
      should: "Both authors equally cited",
    },
  ];

  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>6. The AI Visibility Opportunity</h2>
      <p style={{ color: T.textPrimary, lineHeight: 1.7, marginBottom: 18 }}>
        When users ask AI assistants (ChatGPT, Perplexity, Claude) questions about Dr. Dugan&apos;s
        area of expertise, her name should appear. Right now, it does not.
      </p>
      <table style={{ ...tableStyle, marginBottom: 20 }}>
        <thead>
          <tr>
            <th style={thStyle}>Query</th>
            <th style={{ ...thStyle, color: T.coral }}>What AI Says Today</th>
            <th style={{ ...thStyle, color: T.green }}>Should Say</th>
          </tr>
        </thead>
        <tbody>
          {aiRows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? T.bgSecondary : T.bgLight }}>
              <td style={{ ...tdStyle, fontStyle: "italic", fontSize: "0.88rem" }}>{row.query}</td>
              <td style={{ ...tdStyle, color: T.coral }}>{row.today}</td>
              <td style={{ ...tdStyle, color: T.green, fontWeight: 600 }}>{row.should}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          background: T.bgLight,
          borderLeft: `4px solid ${T.teal}`,
          padding: "14px 18px",
          borderRadius: "0 8px 8px 0",
          color: T.textPrimary,
          lineHeight: 1.75,
          fontSize: "0.92rem",
        }}
      >
        <p style={{ margin: "0 0 10px", fontWeight: 700, color: T.slate }}>
          3 Quick Wins for AI Visibility:
        </p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>
            Publish the IP Stewardship article to jamiladugan.com (already written &mdash; we handle the
            SEO formatting)
          </li>
          <li style={{ marginBottom: 6 }}>
            Create a Wikipedia stub for IP Stewardship Lab and cross-link to jamiladugan.com
          </li>
          <li>
            Syndicate the article to 2&ndash;3 education/equity publications (we handle outreach)
          </li>
        </ul>
      </div>
    </div>
  );
}

// --- Section 7 ---

function Section7() {
  const actions: {
    priority: string;
    priorityColor: string;
    action: string;
    timeline: string;
    who: string;
  }[] = [
    {
      priority: "P0 \u2014 This Week",
      priorityColor: T.coral,
      action: "Submit joysource.org sitemap to Google Search Console",
      timeline: "Day 1",
      who: "Monmac",
    },
    {
      priority: "P0 \u2014 This Week",
      priorityColor: T.coral,
      action: "Fix HTTPS mixed content on joysource.org",
      timeline: "Day 1\u20132",
      who: "Monmac",
    },
    {
      priority: "P0 \u2014 This Week",
      priorityColor: T.coral,
      action: "Add Person + Course schema to jamiladugan.com",
      timeline: "Day 2\u20133",
      who: "Monmac",
    },
    {
      priority: "P1 \u2014 Week 1",
      priorityColor: T.salmon,
      action: "Optimize all title tags and meta descriptions",
      timeline: "Day 3\u20135",
      who: "Monmac",
    },
    {
      priority: "P1 \u2014 Week 1",
      priorityColor: T.salmon,
      action: "Compress and convert all images to WebP",
      timeline: "Day 3\u20135",
      who: "Monmac",
    },
    {
      priority: "P1 \u2014 Week 1",
      priorityColor: T.salmon,
      action: "Publish IP Stewardship article to jamiladugan.com",
      timeline: "Day 4\u20137",
      who: "Monmac + Jamila review",
    },
    {
      priority: "P2 \u2014 Week 2",
      priorityColor: T.textSecondary,
      action: "Build internal linking architecture",
      timeline: "Week 2",
      who: "Monmac",
    },
    {
      priority: "P2 \u2014 Week 2",
      priorityColor: T.textSecondary,
      action: "Submit Wikipedia stub for IP Stewardship Lab",
      timeline: "Week 2",
      who: "Monmac",
    },
    {
      priority: "P2 \u2014 Week 2",
      priorityColor: T.textSecondary,
      action: "Fix joysource.org de-indexation issues",
      timeline: "Week 2",
      who: "Monmac",
    },
    {
      priority: "P3 \u2014 Month 1",
      priorityColor: T.textSecondary,
      action: "Begin authority link building campaign",
      timeline: "Month 1",
      who: "Monmac",
    },
    {
      priority: "P3 \u2014 Month 1",
      priorityColor: T.textSecondary,
      action: "Set up Google Business Profile",
      timeline: "Month 1",
      who: "Jamila + Monmac",
    },
  ];

  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>7. What Happens Next: Your Action Plan</h2>
      <table style={{ ...tableStyle, marginBottom: 20 }}>
        <thead>
          <tr>
            {["Priority", "Action", "Timeline", "Who"].map((h) => (
              <th key={h} style={thStyle}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {actions.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? T.bgSecondary : T.bgLight }}>
              <td style={{ ...tdStyle, fontWeight: 700, color: row.priorityColor, whiteSpace: "nowrap" }}>
                {row.priority}
              </td>
              <td style={tdStyle}>{row.action}</td>
              <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{row.timeline}</td>
              <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{row.who}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          background: T.bgLight,
          borderLeft: `4px solid ${T.teal}`,
          padding: "14px 18px",
          borderRadius: "0 8px 8px 0",
          color: T.textPrimary,
          lineHeight: 1.75,
          fontSize: "0.92rem",
        }}
      >
        These are not estimates. They are scheduled deliverables. Monmac is responsible for all
        technical items. You are responsible for content review and approval at the stages marked
        above. The SEO foundation work is part of your Milestone 1 deliverable and is underway.
      </div>
    </div>
  );
}

// --- Main Export ---

export default function SiteAuditContent() {
  return (
    <div
      style={{
        background: T.bgPrimary,
        minHeight: "100vh",
        padding: "32px 24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            background: T.teal,
            borderRadius: "50%",
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Globe size={22} color="#fff" strokeWidth={2} />
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "1.6rem",
              fontWeight: 800,
              color: T.slate,
              fontFamily: "Georgia, serif",
            }}
          >
            Website SEO Audit
          </h1>
          <p style={{ margin: 0, color: T.textSecondary, fontSize: "0.9rem" }}>
            Dr. Jamila Dugan &mdash; jamiladugan.com &amp; joysource.org
          </p>
        </div>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
