"use client";

import { VANESSA_CONFIG as V } from '@/lib/clients/vanessa-michele/config';

export default function VanessaLanding() {
  const T = V.colors;

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.cream, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ background: `linear-gradient(160deg, #FAF8F5 0%, #E6FAF8 100%)`, padding: '72px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 12, letterSpacing: '3px', textTransform: 'uppercase', color: T.primary, margin: '0 0 24px', fontWeight: 700 }}>
            Maple 360 — Social Media Launch Proposal
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, color: '#2D3436', margin: '0 0 24px', lineHeight: 1.2, letterSpacing: '-0.5px', fontFamily: 'Georgia, serif' }}>
            You wrote a book.<br />Now let's make sure the world buys it.
          </h1>
          <div style={{ width: 56, height: 3, background: T.primary, margin: '0 auto 28px', borderRadius: 2 }} />
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#5A4A42', margin: '0 auto 40px', maxWidth: 640, lineHeight: 1.75 }}>
            A 12-week social media launch system designed for <em>ZL Buy a House</em> — built around your family's story, your authentic voice, and the B2B buyers who will move the most volume.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={V.client.stripeLink} style={{ background: T.primary, color: 'white', padding: '16px 36px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>
              Get Started — $2,500 Setup
            </a>
            <a href={`/portal/vanessa-michele`} style={{ background: 'white', color: T.primary, padding: '16px 36px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block', border: `2px solid ${T.primary}` }}>
              View Your Portal
            </a>
          </div>
          <p style={{ fontSize: 13, color: '#999', marginTop: 16 }}>
            {V.client.monthlyRetainer}/mo Done For You management after setup
          </p>
        </div>
      </section>

      {/* ── THE OPPORTUNITY ── */}
      <section style={{ padding: '72px 24px', maxWidth: 900, margin: '0 auto' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: T.primary, marginBottom: 24 }}>The Opportunity</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 40px)', color: '#2D3436', marginBottom: 24, fontWeight: 400, lineHeight: 1.3 }}>
          60,000 books. One story. A market that's already buying.
        </h2>
        <p style={{ fontSize: 18, color: '#5A4A42', lineHeight: 1.8, marginBottom: 32, maxWidth: 720 }}>
          Title companies, mortgage brokers, real estate agents, and insurance agents all need memorable closing gifts. <em>ZL Buy a House</em> is the first children's coloring book designed specifically for that buyer — and no one is competing for that position yet.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {[
            { metric: '$6,500/mo', label: 'Conservative target', note: '5 title cos \u00d7 200 books/qtr' },
            { metric: '$65,000/mo', label: 'Scale target', note: '10 title cos \u00d7 1,000 books/mo' },
            { metric: 'Dec 12', label: 'Sweepstakes draw', note: "Zou's birthday — built-in PR hook" },
            { metric: '60,000', label: 'Books arriving', note: '$0.56/unit COGS — strong margins' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', borderTop: `4px solid ${T.primary}` }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: 32, fontWeight: 700, color: T.primary, margin: '0 0 8px' }}>{s.metric}</p>
              <p style={{ fontWeight: 700, color: '#2D3436', marginBottom: 4, fontSize: 15 }}>{s.label}</p>
              <p style={{ fontSize: 13, color: '#999', margin: 0 }}>{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: T.primary, marginBottom: 16, textAlign: 'center' }}>What's Included</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 36px)', color: '#2D3436', marginBottom: 48, textAlign: 'center', fontWeight: 400 }}>
            8 deliverables. Zero fluff.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 20 }}>
            {[
              { emoji: '🧭', title: 'Brand Story Framework', desc: 'North Star statement, 7 content pillars, complete voice guide. Foundation for every piece of content.' },
              { emoji: '🎬', title: '30-Video Content Bank', desc: 'Scripted concepts with hooks and opening lines — scripted for you, filmed in your voice.' },
              { emoji: '📅', title: '12-Week Launch Calendar', desc: 'Week-by-week execution from setup through full Amazon launch. Nothing left to figure out.' },
              { emoji: '📧', title: '5-Email Welcome Sequence', desc: 'Auto-triggers when someone joins the waitlist. Tells the story. Drives pre-orders and B2B.' },
              { emoji: '🔍', title: 'Website SEO & AEO Audit', desc: 'Appear in Google AND in ChatGPT/Claude when RE professionals search for innovative client gifts.' },
              { emoji: '📄', title: 'B2B Sales One-Pager', desc: 'Designed to be forwarded. One page that gets a title company to ask "how do we order?"' },
              { emoji: '📱', title: 'Social Platform Setup', desc: 'TikTok, Instagram, and Facebook — fully optimized, bio-linked, and cross-connected.' },
              { emoji: '📞', title: 'Strategy Walkthrough Call', desc: '60-min recorded session covering the full roadmap — already completed March 11, 2026.' },
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: 20, background: '#FAF8F5', borderRadius: 12, borderLeft: `4px solid ${T.primary}` }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{d.emoji}</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#2D3436', marginBottom: 4, fontSize: 16 }}>{d.title}</p>
                  <p style={{ color: '#718096', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '72px 24px', maxWidth: 900, margin: '0 auto' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: T.primary, marginBottom: 16, textAlign: 'center' }}>Timeline</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 36px)', color: '#2D3436', marginBottom: 48, textAlign: 'center', fontWeight: 400 }}>
          12 weeks to full launch
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {V.milestones.map((m, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: `4px solid ${m.status === 'active' ? T.primary : '#E8E4DE'}` }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: m.status === 'active' ? T.primary : '#999', marginBottom: 8 }}>
                {m.status === 'active' ? '● Active' : '○ Upcoming'} · {m.weeks}
              </p>
              <p style={{ fontWeight: 700, color: '#2D3436', marginBottom: 8, fontSize: 17 }}>{m.title}</p>
              <p style={{ color: '#718096', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT PILLARS ── */}
      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: T.primary, marginBottom: 16, textAlign: 'center' }}>Content Strategy</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 36px)', color: '#2D3436', marginBottom: 16, textAlign: 'center', fontWeight: 400 }}>
            7 pillars. One authentic voice.
          </h2>
          <p style={{ color: '#718096', textAlign: 'center', maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Every post, reel, and TikTok connects back to one of these themes. Consistent. Human. Always Vanessa.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
            {V.contentPillars.map((p) => (
              <div key={p.id} style={{ background: '#FAF8F5', borderRadius: 12, padding: '20px 24px', borderLeft: `4px solid ${T.primary}` }}>
                <p style={{ fontWeight: 700, color: '#2D3436', marginBottom: 6 }}>{p.id}. {p.name}</p>
                <p style={{ color: '#718096', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT MONMAC ── */}
      <section style={{ background: `linear-gradient(135deg, ${T.primary}, ${T.secondary})`, padding: '64px 24px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.8, marginBottom: 16 }}>Your Partner</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: 24, fontWeight: 400 }}>Monmac Labs</h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, opacity: 0.9, marginBottom: 32 }}>
            We build AI-powered marketing systems for entrepreneurs who want results without adding hours to their week. <em>ZL Buy a House</em> gets a dedicated team, a proven system, and the full Done For You experience.
          </p>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section style={{ padding: '72px 24px', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: T.primary, marginBottom: 16 }}>Investment</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 4vw, 40px)', color: '#2D3436', marginBottom: 40, fontWeight: 400 }}>
          One setup. One monthly fee. Everything done for you.
        </h2>
        <div style={{ background: 'white', borderRadius: 16, padding: 40, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #F0EDE8' }}>
            <span style={{ color: '#4A5568', fontSize: 16 }}>Setup Package (one-time)</span>
            <span style={{ fontWeight: 700, color: '#2D3436', fontSize: 16 }}>$2,500</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #F0EDE8' }}>
            <span style={{ color: '#4A5568', fontSize: 16 }}>Done For You Management (monthly)</span>
            <span style={{ fontWeight: 700, color: '#2D3436', fontSize: 16 }}>$800/mo</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 0' }}>
            <span style={{ fontWeight: 700, color: '#2D3436', fontSize: 16 }}>First Month Total</span>
            <span style={{ fontWeight: 700, color: T.primary, fontSize: 20 }}>$3,300</span>
          </div>
        </div>
        <a href={V.client.stripeLink} style={{ background: T.primary, color: 'white', padding: '18px 48px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 18, display: 'inline-block', marginBottom: 16 }}>
          Pay Setup Fee — $2,500
        </a>
        <p style={{ fontSize: 13, color: '#999' }}>Stripe secure payment · Cancel monthly retainer anytime after Month 3</p>
      </section>

    </main>
  );
}
