import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getClient, getAllClientSlugs } from '@/lib/clients';
import { ISL_CONFIG } from '@/lib/clients/jamila-dugan/config';
import { VANESSA_CONFIG } from '@/lib/clients/vanessa-michele/config';
import { BarChart3, TrendingUp, CheckCircle2, Clock, Calendar } from 'lucide-react';
import SiteAuditContent from './SiteAuditContent';
import ModuleContent from './ModuleContent';
import EmailSequenceContent from './EmailSequenceContent';
import LinkedInContent from './LinkedInContent';
import EmailCaptureContent from './EmailCaptureContent';

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

// Vanessa Michele deliverable content renderer
const VanessaDeliverableContent = ({ slug }: { slug: string }) => {
  const V = VANESSA_CONFIG;
  const d = V.deliverables[slug as keyof typeof V.deliverables];

  const statusBadge = (status: string) => ({
    'completed': { bg: '#E6FAF8', color: '#2ECCC4', label: '✓ Completed' },
    'in-progress': { bg: '#FFF9E6', color: '#F0A500', label: '● In Progress' },
    'pending': { bg: '#F5F5F5', color: '#999', label: '○ Pending' },
  }[status] || { bg: '#F5F5F5', color: '#999', label: status });

  if (!d) return (
    <div style={{ textAlign: 'center', padding: '4rem', color: '#999' }}>
      <p style={{ fontSize: '1.1rem' }}>Deliverable content coming soon.</p>
    </div>
  );

  // Brand Story Framework
  if (slug === 'brand_story') {
    const dd = d as typeof V.deliverables.brand_story;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#E6FAF8', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#2D3436', marginBottom: 12 }}>🧭 North Star Statement</h3>
          <blockquote style={{ borderLeft: `4px solid ${V.colors.primary}`, paddingLeft: 20, margin: 0 }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#4A5568', lineHeight: 1.8, margin: 0 }}>{dd.northStar}</p>
          </blockquote>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#2D3436', marginBottom: 16 }}>🎤 Voice Guide</h3>
          <p style={{ fontWeight: 600, color: '#2D3436', marginBottom: 8 }}>Tone</p>
          <p style={{ color: '#4A5568', lineHeight: 1.7, marginBottom: 20 }}>{dd.voiceGuide.tone}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ background: '#FFF5F5', borderRadius: 8, padding: 16 }}>
              <p style={{ fontWeight: 700, color: '#E53E3E', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>❌ Avoid</p>
              {dd.voiceGuide.avoid.map((item, i) => <p key={i} style={{ color: '#4A5568', fontSize: '0.9rem', margin: '4px 0' }}>• {item}</p>)}
            </div>
            <div style={{ background: '#F0FDF4', borderRadius: 8, padding: 16 }}>
              <p style={{ fontWeight: 700, color: '#38A169', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>✅ Use</p>
              {dd.voiceGuide.use.map((item, i) => <p key={i} style={{ color: '#4A5568', fontSize: '0.9rem', margin: '4px 0' }}>• {item}</p>)}
            </div>
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#2D3436', marginBottom: 16 }}>🎯 Content Pillars</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {V.contentPillars.map((p) => (
              <div key={p.id} style={{ background: '#FAF8F5', borderRadius: 8, padding: 16, borderLeft: `4px solid ${V.colors.primary}` }}>
                <p style={{ fontWeight: 700, color: '#2D3436', marginBottom: 4 }}>{p.id}. {p.name}</p>
                <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Strategy Call (completed)
  if (slug === 'strategy_call') {
    const dd = d as typeof V.deliverables.strategy_call;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#E6FAF8', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#2D3436', marginBottom: 16 }}>📋 Key Decisions Made</h3>
          {dd.keyDecisions.map((decision, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid #F0EDE8' }}>
              <span style={{ color: V.colors.primary, fontWeight: 700, minWidth: 20 }}>✓</span>
              <p style={{ color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{decision}</p>
            </div>
          ))}
        </div>
        <div style={{ background: '#FFF9E6', borderRadius: 12, border: '1px solid #F0A500', padding: 20 }}>
          <p style={{ fontWeight: 700, color: '#F0A500', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>📹 Recording</p>
          <p style={{ color: '#4A5568', lineHeight: 1.7, margin: 0 }}>{dd.recordingNote}</p>
        </div>
      </div>
    );
  }

  // Social Setup
  if (slug === 'social_setup') {
    const dd = d as typeof V.deliverables.social_setup;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#E6FAF8', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        {dd.platforms.map((p, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2D3436', margin: 0 }}>{p.platform}</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '4px 12px', borderRadius: 999, background: p.status === 'active' ? '#E6FAF8' : '#F5F5F5', color: p.status === 'active' ? V.colors.primary : '#999', textTransform: 'uppercase' }}>
                {p.status === 'active' ? '✓ Active' : '○ Pending'}
              </span>
            </div>
            <p style={{ fontWeight: 600, color: '#2D3436', marginBottom: 4, fontSize: '0.9rem' }}>Handle</p>
            <p style={{ color: '#4A5568', marginBottom: 16 }}>{p.handle}</p>
            <p style={{ fontWeight: 600, color: '#2D3436', marginBottom: 4, fontSize: '0.9rem' }}>Bio Copy</p>
            <p style={{ color: '#4A5568', fontStyle: 'italic', background: '#FAF8F5', padding: '12px 16px', borderRadius: 8, margin: 0 }}>{p.bio}</p>
          </div>
        ))}
      </div>
    );
  }

  // 12-Week Launch Calendar
  if (slug === 'launch_calendar') {
    const dd = d as typeof V.deliverables.launch_calendar;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#FAF8F5', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', overflow: 'hidden' }}>
          {dd.weeks.map((w, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 2fr', gap: 16, padding: '14px 24px', borderBottom: '1px solid #F0EDE8', background: i % 2 === 0 ? 'white' : '#FAF8F5', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: V.colors.primary, fontSize: '0.9rem' }}>Week {w.week}</span>
              <span style={{ fontWeight: 600, color: '#2D3436', fontSize: '0.9rem' }}>{w.theme}</span>
              <span style={{ color: '#718096', fontSize: '0.9rem' }}>{w.focus}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Email Sequence
  if (slug === 'email_sequence') {
    const dd = d as typeof V.deliverables.email_sequence;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#FAF8F5', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        {dd.emails.map((email, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ background: V.colors.primary, color: 'white', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, fontSize: '0.9rem' }}>{email.number}</div>
              <div>
                <p style={{ fontWeight: 700, color: '#2D3436', marginBottom: 6, fontSize: '1rem' }}>📧 {email.subject}</p>
                <p style={{ color: '#718096', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}><strong>Goal:</strong> {email.goal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // SEO/AEO Audit
  if (slug === 'seo_audit') {
    const dd = d as typeof V.deliverables.seo_audit;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#FAF8F5', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2D3436', marginBottom: 16 }}>🎯 Primary Keyword Targets</h3>
          {dd.keyTargets.map((target, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: '1px solid #F0EDE8', alignItems: 'center' }}>
              <span style={{ color: V.colors.primary, fontWeight: 700 }}>→</span>
              <p style={{ color: '#4A5568', margin: 0, fontSize: '0.9rem' }}>{target}</p>
            </div>
          ))}
        </div>
        <div style={{ background: '#E6FAF8', borderRadius: 12, border: `1px solid ${V.colors.primary}`, padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2D3436', marginBottom: 12 }}>🤖 AEO / AI Search Strategy</h3>
          <p style={{ color: '#4A5568', lineHeight: 1.7, margin: 0 }}>{dd.aeoPlay}</p>
        </div>
      </div>
    );
  }

  // B2B One-Pager
  if (slug === 'b2b_one_pager') {
    const dd = d as typeof V.deliverables.b2b_one_pager;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#FAF8F5', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 32, textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: V.colors.primary, marginBottom: 12 }}>Headline</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#2D3436', marginBottom: 8, fontWeight: 400 }}>{dd.headline}</h2>
          <p style={{ color: '#718096', fontSize: '1rem', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 24px' }}>{dd.subhead}</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {dd.sections.map((s, i) => <span key={i} style={{ background: '#FAF8F5', border: `1px solid ${V.colors.primary}`, color: V.colors.primary, padding: '6px 14px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 600 }}>{s}</span>)}
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2D3436', marginBottom: 16 }}>🏢 Target Accounts</h3>
          {V.b2bTargets.map((t, i) => (
            <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid #F0EDE8' }}>
              <p style={{ fontWeight: 700, color: '#2D3436', marginBottom: 4 }}>{t.type}</p>
              <p style={{ color: '#718096', fontSize: '0.9rem', margin: 0 }}>{t.pitch}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Video Bank
  if (slug === 'video_bank') {
    const dd = d as typeof V.deliverables.video_bank;
    const badge = statusBadge(dd.status);
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        <div style={{ background: '#FAF8F5', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
          <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
          <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{dd.overview}</p>
        </div>
        <div style={{ background: '#FFF9E6', borderRadius: 12, border: '1px solid #F0A500', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#2D3436', marginBottom: 12 }}>🎬 Production Workflow</h3>
          <p style={{ color: '#4A5568', lineHeight: 1.7, margin: 0 }}>{dd.productionNote}</p>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 24 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2D3436', marginBottom: 16 }}>🎯 Content Pillars Covered</h3>
          <p style={{ color: '#718096', lineHeight: 1.7, marginBottom: 16 }}>30 videos will be distributed across all 7 content pillars (~4 per pillar). Scripts, hooks, and opening lines will be delivered as a Google Doc.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
            {V.contentPillars.map((p) => <div key={p.id} style={{ background: '#FAF8F5', borderRadius: 8, padding: '8px 14px', fontSize: '0.85rem', color: '#2D3436', borderLeft: `3px solid ${V.colors.primary}` }}>{p.id}. {p.name}</div>)}
          </div>
        </div>
      </div>
    );
  }

  // Default fallback for any other Vanessa slug
  const badge = statusBadge(d.status);
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <div style={{ background: '#FAF8F5', border: `2px solid ${V.colors.primary}`, borderRadius: 12, padding: '20px 24px' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: V.colors.primary }}>Status</span>
        <span style={{ marginLeft: 12, fontSize: '0.85rem', fontWeight: 600, color: badge.color, background: badge.bg, padding: '4px 12px', borderRadius: 999 }}>{badge.label}</span>
        <p style={{ margin: '12px 0 0', color: '#2D3436', lineHeight: 1.7 }}>{d.overview}</p>
      </div>
      <div style={{ background: 'white', borderRadius: 12, border: '1px solid #E8E4DE', padding: 32, textAlign: 'center', color: '#999' }}>
        <p>Full deliverable content coming soon.</p>
      </div>
    </div>
  );
};

const DeliverableContent = ({ type, slug, clientSlug }: { type: string; slug: string; clientSlug?: string }) => {
  // Route Vanessa slugs to her dedicated renderer
  if (clientSlug === 'vanessa-michele') {
    return <VanessaDeliverableContent slug={slug} />;
  }

  switch (type) {
    case 'email_sequence':
      return <EmailSequenceContent />;

    case 'linkedin_content':
      return <LinkedInContent />;

    case 'landing_page':
      return (
        <div style={{ display: 'grid', gap: 20 }}>

          {/* ── SECTION 1: Context Banner ── */}
          <div style={{ background: '#FFF9F5', border: `2px solid ${T.teal}`, borderRadius: 12, padding: '20px 24px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.teal, margin: '0 0 8px' }}>
              About This Page
            </p>
            <p style={{ fontSize: '1rem', color: T.slate, margin: 0, lineHeight: 1.7 }}>
              This is your <strong>deliverable review page</strong> — it is only visible to you. It explains how your landing page is structured, what your audience will see, and what feedback we addressed. When you are ready to preview the actual page your audience will visit, use the button at the bottom.
            </p>
          </div>

          {/* ── SECTION 2: Two Audiences ── */}
          <div style={{ background: T.bgSecondary, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}`, padding: '24px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.textSecondary, margin: '0 0 16px' }}>
              Two Views — Who Sees What
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {/* Client view */}
              <div style={{ background: '#F0F9F8', border: `1px solid ${T.teal}`, borderRadius: 10, padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: T.teal, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: T.teal, textTransform: 'uppercase', letterSpacing: '0.06em' }}>You (Dr. Dugan)</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 16, color: T.textPrimary, fontSize: '0.9rem', lineHeight: 2 }}>
                  <li>This review page with full context</li>
                  <li>Page structure breakdown</li>
                  <li>Feedback acknowledgment</li>
                  <li>Link to preview the live page</li>
                </ul>
              </div>
              {/* Audience view */}
              <div style={{ background: '#FFF9F5', border: `1px solid ${T.lightGray}`, borderRadius: 10, padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: T.coral, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: T.coral, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your Audience</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 16, color: T.textPrimary, fontSize: '0.9rem', lineHeight: 2 }}>
                  <li>The 7-Layer IP Architecture Audit opt-in only</li>
                  <li>Free download in exchange for email</li>
                  <li>No portal, no deliverables — just the offer</li>
                  <li>Leads into your welcome email sequence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── SECTION 3: We Heard You ── */}
          <div style={{ background: T.bgSecondary, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}`, padding: '24px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.textSecondary, margin: '0 0 6px' }}>
              We Heard You
            </p>
            <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0 0 18px', lineHeight: 1.6 }}>
              Here is what you shared with us and exactly what we addressed.
            </p>
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                {
                  heard: 'The framing needs to be clearer — this is not about hoarding knowledge, it is about stewardship paired with generosity and clarity.',
                  addressed: 'Hero copy reframed. The page now leads with stewardship as expansion, not protection. The word “extracted” is used deliberately to contrast with your philosophy.',
                },
                {
                  heard: 'The language should feel authentic to how I actually write and speak — not corporate.',
                  addressed: 'All copy reviewed against your writing samples and LinkedIn voice. Sentence rhythm and word choice match your style throughout.',
                },
                {
                  heard: 'Em dashes were flagged as not matching my voice.',
                  addressed: 'Em dashes removed from all content across the landing page and deliverables.',
                },
                {
                  heard: 'I want this course to feel different from “build a business” or “monetize your expertise” programs.',
                  addressed: 'Course positioning language avoids monetization framing entirely. The page speaks to practitioners who care about integrity, not income optimization.',
                },
                {
                  heard: 'I really liked the aesthetic of the PDF (the 7-Layer Audit).',
                  addressed: 'Warm cream palette, Georgia serif typography, and generous whitespace carried through from the PDF into the portal and landing page design.',
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 8, overflow: 'hidden', border: `1px solid ${T.lightGray}` }}>
                  <div style={{ padding: '14px 16px', background: '#FFFBF8', borderRight: `1px solid ${T.lightGray}` }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: T.textSecondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>What you said</div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: T.textPrimary, lineHeight: 1.6, fontStyle: 'italic' }}>&ldquo;{item.heard}&rdquo;</p>
                  </div>
                  <div style={{ padding: '14px 16px', background: '#F0F9F8' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: T.teal, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>✓ What we did</div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: T.textPrimary, lineHeight: 1.6 }}>{item.addressed}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 4: Page Structure ── */}
          <div style={{ background: T.bgSecondary, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}`, padding: '24px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.textSecondary, margin: '0 0 6px' }}>
              Page Structure
            </p>
            <p style={{ fontSize: '0.875rem', color: T.textSecondary, margin: '0 0 18px', lineHeight: 1.6 }}>
              What your audience moves through from top to bottom.
            </p>
            <div style={{ display: 'grid', gap: 0 }}>
              {[
                { num: '01', section: 'Hero', desc: 'Your positioning statement + credibility line (Berkeley Ed.D., co-author Street Data). Sets tone immediately.' },
                { num: '02', section: 'Free Audit Opt-in', desc: 'The 7-Layer IP Architecture Audit. Name + email in exchange for the 9-page diagnostic. This is the primary conversion action.' },
                { num: '03', section: 'Course Overview', desc: '5 modules, self-guided, lifetime access on Kajabi. Gives context for what comes after the free audit.' },
                { num: '04', section: 'Social Proof', desc: 'Testimonials from practitioners. Builds trust for those who scroll past the opt-in.' },
                { num: '05', section: 'Waitlist CTA', desc: 'Founding cohort enrollment for those ready to go deeper. Secondary conversion goal.' },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: i < arr.length - 1 ? `1px solid ${T.lightGray}` : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: T.teal, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: T.slate, fontSize: '0.95rem', marginBottom: 2 }}>{item.section}</div>
                    <div style={{ fontSize: '0.875rem', color: T.textPrimary, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 5: CTA ── */}
          <div style={{ background: T.bgSecondary, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}`, padding: '24px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.textSecondary, margin: '0 0 8px' }}>
              Ready to Preview?
            </p>
            <p style={{ fontSize: '0.95rem', color: T.textPrimary, margin: '0 0 20px', lineHeight: 1.7, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
              The button below opens the actual page your audience will see — the public-facing landing page with the free audit opt-in.
            </p>
            <a
              href="/landing/jamila-dugan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: T.teal, color: 'white', padding: '14px 32px', borderRadius: 8, fontSize: '1rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.02em' }}
            >
              View Your Landing Page →
            </a>
            <p style={{ fontSize: '0.8rem', color: T.textSecondary, margin: '12px 0 0' }}>
              Opens in a new tab · This is what your audience sees
            </p>
          </div>

        </div>
      );

    case 'email_capture':
      return <EmailCaptureContent />;

    case 'site_audit':
      return <SiteAuditContent />;

    case 'kpi_dashboard':
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <BarChart3 size={24} style={{ color: T.teal }} />
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: T.slate, margin: 0, fontFamily: 'Georgia, serif' }}>
              KPI Dashboard
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: T.textSecondary, margin: '0 0 28px', lineHeight: 1.6 }}>
            This dashboard will track live performance once the campaign launches. Right now it reflects project completion status and baseline measurements. No placeholder numbers — only what has actually been measured.
          </p>

          {/* Project Completion */}
          <div style={{ background: T.bgSecondary, padding: 24, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}`, marginBottom: 20 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: T.slate, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Project Completion</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'Milestones', value: '4 / 4', sub: 'All complete', color: T.green },
                { label: 'Deliverables', value: '8 / 8', sub: 'All complete', color: T.green },
                { label: 'Campaign Status', value: 'Pre-Launch', sub: 'Awaiting go-live', color: T.amber },
                { label: 'Live Metrics', value: 'Pending', sub: 'Available at launch', color: T.textSecondary },
              ].map((card, i) => (
                <div key={i} style={{ background: T.bgLight, padding: '16px', borderRadius: 10, border: `1px solid ${T.lightGray}`, textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: card.color, marginBottom: 4 }}>{card.value}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: T.slate, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{card.label}</div>
                  <div style={{ fontSize: '0.8rem', color: T.textSecondary }}>{card.sub}</div>
                </div>
              ))}
            </div>

            {/* Deliverables checklist */}
            <div style={{ display: 'grid', gap: 8 }}>
              {[
                { item: 'Website Visibility Report (SEO Audit)', note: 'jamiladugan.com + joysource.org' },
                { item: 'Product Landing Page', note: 'Live at /landing/jamila-dugan' },
                { item: 'KPI Dashboard', note: 'Framework built, awaiting live data' },
                { item: 'Email Capture System', note: 'Opt-in integrated with landing page' },
                { item: 'Module 1: Naming What You Carry', note: '5 lessons, Kajabi delivery' },
                { item: 'Email Nurture Sequence', note: '5-email welcome sequence' },
                { item: 'LinkedIn Content Strategy', note: '20 posts + content calendar' },
                { item: 'Social Media Clips', note: 'Scheduled for next phase' },
              ].map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: T.bgLight, borderRadius: 8, border: `1px solid ${T.lightGray}` }}>
                  <CheckCircle2 size={16} color={T.green} style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: T.slate }}>{d.item}</span>
                    <span style={{ fontSize: '0.8rem', color: T.textSecondary, marginLeft: 8 }}>{d.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone Timeline */}
          <div style={{ background: T.bgSecondary, padding: 24, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}`, marginBottom: 20 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: T.slate, marginBottom: 20, fontFamily: 'Georgia, serif' }}>Milestone Timeline</h3>
            <div style={{ display: 'grid', gap: 0 }}>
              {[
                { label: 'Project Kickoff', detail: 'Site audit delivered', payment: '$500', date: 'Feb 24, 2026' },
                { label: 'Milestone 1: Foundation', detail: 'Landing page, KPI dashboard, email capture', payment: '$500', date: 'Feb 28, 2026' },
                { label: 'Milestone 2: Content', detail: 'Module 1, email nurture sequence', payment: '$500', date: 'Mar 7, 2026' },
                { label: 'Milestone 3: Distribution', detail: 'LinkedIn content, social clips', payment: '$500', date: 'Mar 14, 2026' },
              ].map((m, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: i < arr.length - 1 ? 20 : 0, marginBottom: i < arr.length - 1 ? 20 : 0, borderBottom: i < arr.length - 1 ? `1px solid ${T.lightGray}` : 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: T.green, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={14} color="white" />
                    </div>
                    {i < arr.length - 1 && <div style={{ width: 2, flex: 1, background: T.lightGray, marginTop: 4 }} />}
                  </div>
                  <div style={{ flex: 1, paddingBottom: 4 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>
                      <span style={{ fontWeight: 700, color: T.slate, fontSize: '0.95rem' }}>{m.label}</span>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ background: T.green, color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>{m.payment}</span>
                        <span style={{ fontSize: '0.8rem', color: T.textSecondary }}>{m.date}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: T.textPrimary, marginTop: 4 }}>{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Baseline — real audit numbers */}
          <div style={{ background: T.bgSecondary, padding: 24, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}`, marginBottom: 20 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: T.slate, marginBottom: 6, fontFamily: 'Georgia, serif' }}>SEO Baseline — Audit Date: Feb 24, 2026</h3>
            <p style={{ fontSize: '0.85rem', color: T.textSecondary, margin: '0 0 16px' }}>These are measured starting-point values from the site audit. Improvement tracking begins once SEO work is complete.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: T.tableHeader }}>
                  {['Site', 'Domain Authority', 'Monthly Visitors', 'Keywords Ranking', 'Top 10', 'Schema'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { site: 'jamiladugan.com', da: '18', visitors: '~320/mo', keywords: '14', top10: '1', schema: 'None' },
                  { site: 'joysource.org', da: '12', visitors: '~140/mo', keywords: '7', top10: '0', schema: 'None' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${T.lightGray}`, background: i % 2 === 0 ? T.bgSecondary : T.bgLight }}>
                    <td style={{ padding: '10px 14px', fontWeight: 600, color: T.slate }}>{row.site}</td>
                    <td style={{ padding: '10px 14px', color: T.textPrimary }}>{row.da}</td>
                    <td style={{ padding: '10px 14px', color: T.textPrimary }}>{row.visitors}</td>
                    <td style={{ padding: '10px 14px', color: T.textPrimary }}>{row.keywords}</td>
                    <td style={{ padding: '10px 14px', color: T.textPrimary }}>{row.top10}</td>
                    <td style={{ padding: '10px 14px', color: T.coral, fontWeight: 500 }}>{row.schema}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Metrics to track post-launch */}
          <div style={{ background: T.bgSecondary, padding: 24, borderRadius: 12, border: `1px solid ${T.lightGray}`, boxShadow: `0 2px 8px ${T.shadow}` }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: T.slate, marginBottom: 6, fontFamily: 'Georgia, serif' }}>Metrics We Will Track Post-Launch</h3>
            <p style={{ fontSize: '0.85rem', color: T.textSecondary, margin: '0 0 16px' }}>These will populate with real numbers once the landing page goes live and the email sequence is active.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: T.tableHeader }}>
                  {['Metric', 'Target', 'Current', 'Cadence'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', borderBottom: `2px solid ${T.lightGray}`, color: T.slate, fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Audit Downloads', target: '200 by launch', current: 'Pre-Launch', cadence: 'Weekly' },
                  { metric: 'Email List Size', target: '500 by launch', current: 'Pre-Launch', cadence: 'Weekly' },
                  { metric: 'Email Open Rate', target: '35%+', current: 'Pre-Launch', cadence: 'Per send' },
                  { metric: 'LinkedIn Followers', target: 'Baseline TBD', current: 'Pre-Launch', cadence: 'Weekly' },
                  { metric: 'Organic Traffic', target: '2,000/mo', current: '~320/mo (baseline)', cadence: 'Monthly' },
                  { metric: 'Keyword Rankings', target: '150+ keywords', current: '14 (baseline)', cadence: 'Monthly' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${T.lightGray}`, background: i % 2 === 0 ? T.bgSecondary : T.bgLight }}>
                    <td style={{ padding: '10px 14px', fontWeight: 500, color: T.slate }}>{row.metric}</td>
                    <td style={{ padding: '10px 14px', color: T.textPrimary }}>{row.target}</td>
                    <td style={{ padding: '10px 14px', color: row.current.startsWith('Pre') ? T.amber : T.textPrimary, fontWeight: row.current.startsWith('Pre') ? 500 : 400 }}>{row.current}</td>
                    <td style={{ padding: '10px 14px', color: T.textSecondary }}>{row.cadence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'module':
      return <ModuleContent />;

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
    <div style={{ minHeight: '100vh', background: T.bgPrimary, fontFamily: 'Georgia, serif' }}>
      <div style={{ background: T.bgSecondary, borderBottom: `1px solid ${T.lightGray}`, padding: '20px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Link href={`/portal/${clientSlug}`} style={{ color: T.textSecondary, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            ← Back to Portal
          </Link>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: T.slate, margin: 0, fontFamily: 'Georgia, serif' }}>
            {deliverable.title}
          </h1>
          <p style={{ color: T.textSecondary, fontSize: '1rem', margin: '4px 0 0' }}>
            {client.name}
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
        <DeliverableContent type={deliverable.type} slug={slug} clientSlug={clientSlug} />
      </div>
    </div>
  );
};

export default DeliverablePage;