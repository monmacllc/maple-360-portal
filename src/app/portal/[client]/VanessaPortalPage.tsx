"use client";

import { useState } from 'react';
import Link from 'next/link';

const T = {
  primary: '#2ECCC4',
  coral: '#E8736A',
  cream: '#FAF8F5',
  white: '#FFFFFF',
  slate: '#2D3436',
  text: '#4A5568',
  muted: '#718096',
  border: '#E8E4DE',
  shadow: '0 2px 8px rgba(0,0,0,0.07)',
  tealLight: '#E6FAF8',
};

// ── STEPPER ──────────────────────────────────────────────────────────────────
const milestones = [
  { id: 'start', label: 'Getting Started', short: 'Start' },
  { id: 'setup', label: 'Setup', short: 'Setup' },
  { id: 'warmup', label: 'Warm-Up', short: 'Warm-Up' },
  { id: 'reveal', label: 'Book Launch', short: 'Book Launch' },
  { id: 'full', label: 'B2B Push', short: 'B2B Push' },
];

function Stepper({ activeId }: { activeId: string }) {
  const activeIdx = milestones.findIndex(m => m.id === activeId);
  return (
    <div style={{ background: T.white, borderBottom: `1px solid ${T.border}`, padding: '20px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        {milestones.map((m, i) => {
          const done = i < activeIdx;
          const active = i === activeIdx;
          const locked = i > activeIdx;
          return (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 80 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: done ? T.primary : active ? T.primary : T.cream,
                  border: `2px solid ${done || active ? T.primary : T.border}`,
                  color: done || active ? 'white' : T.muted,
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>
                  {done ? '✓' : locked ? '🔒' : i + 1}
                </div>
                <span style={{ fontSize: 11, fontWeight: active ? 700 : 500, color: active ? T.primary : locked ? T.muted : T.slate, whiteSpace: 'nowrap' }}>
                  {m.short}
                </span>
              </div>
              {i < milestones.length - 1 && (
                <div style={{ flex: 1, height: 2, background: done ? T.primary : T.border, borderRadius: 1, margin: '0 4px', marginBottom: 20 }} />
              )}
            </div>
          );
        })}
      </div>
      <div style={{ maxWidth: 900, margin: '12px auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: 11, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Currently in progress</span>
          <p style={{ fontWeight: 700, color: T.slate, margin: '2px 0 0', fontSize: 15 }}>Getting Started</p>
        </div>
        <div style={{ background: T.coral, color: 'white', borderRadius: 10, padding: '10px 18px', textAlign: 'right' }}>
          <p style={{ fontSize: 11, margin: 0, opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Next Payment</p>
          <p style={{ fontWeight: 800, fontSize: 18, margin: '2px 0 0' }}>$2,500</p>
          <p style={{ fontSize: 11, margin: '2px 0 0', opacity: 0.85 }}>Setup Fee</p>
        </div>
      </div>
    </div>
  );
}

// ── CHECKLIST STEP CARD ────────────────────────────────────────────────────
type StepStatus = 'complete' | 'active' | 'locked';

function StepCard({
  number, title, description, status, cta,
}: {
  number: number;
  title: string;
  description: string;
  status: StepStatus;
  cta: React.ReactNode;
}) {
  return (
    <div style={{
      background: T.white,
      borderRadius: 12,
      border: `1px solid ${status === 'active' ? T.primary : T.border}`,
      padding: '20px 24px',
      boxShadow: status === 'active' ? `0 0 0 2px ${T.primary}22` : T.shadow,
      opacity: status === 'locked' ? 0.55 : 1,
    }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        {/* Checkbox / lock */}
        <div style={{
          width: 28, height: 28, borderRadius: 6, border: `2px solid ${status === 'complete' ? T.primary : T.border}`,
          background: status === 'complete' ? T.primary : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginTop: 2,
        }}>
          {status === 'complete' && <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>✓</span>}
          {status === 'locked' && <span style={{ fontSize: 12 }}>🔒</span>}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: T.primary, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>
            Step {number}
          </p>
          <p style={{ fontWeight: 700, color: T.slate, fontSize: 16, margin: '0 0 6px' }}>{title}</p>
          <p style={{ color: T.text, fontSize: 14, lineHeight: 1.65, margin: '0 0 16px' }}>{description}</p>
          {status !== 'locked' && cta}
        </div>
      </div>
    </div>
  );
}

// ── WHAT TO EXPECT ────────────────────────────────────────────────────────
function WhatToExpect() {
  return (
    <div style={{ background: '#FBF7F3', border: `1px solid ${T.border}`, borderRadius: 14, padding: '28px 28px 24px', marginTop: 40 }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 18 }}>📋</span>
        <p style={{ fontWeight: 700, color: T.slate, fontSize: 17, margin: 0 }}>What to Expect</p>
      </div>
      <p style={{ color: T.muted, fontSize: 13, margin: '0 0 24px' }}>Everything you need to know before we start building.</p>

      {/* Project Overview */}
      <div style={{ background: T.white, borderRadius: 10, padding: '20px 24px', marginBottom: 16, border: `1px solid ${T.border}` }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.muted, margin: '0 0 16px' }}>Project Overview</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
          {[
            { label: 'Total Timeline', value: '12 weeks' },
            { label: 'Milestones', value: '4 phases' },
            { label: 'Project Start', value: 'March 11, 2026' },
            { label: 'Target Launch', value: 'June 3, 2026' },
          ].map((item, i) => (
            <div key={i}>
              <p style={{ fontSize: 12, color: T.muted, margin: '0 0 4px' }}>{item.label}</p>
              <p style={{ fontWeight: 700, color: T.slate, fontSize: 15, margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Your Commitment */}
      <div style={{ background: T.white, borderRadius: 10, padding: '20px 24px', marginBottom: 16, border: `1px solid ${T.border}` }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.muted, margin: '0 0 16px' }}>
          ⏱ Your Commitment Per Milestone
        </p>
        {[
          { phase: 'Setup (Weeks 1–2)', time: '~2 hrs total', note: 'Strategy call + brand preferences + Google Drive share' },
          { phase: 'Warm-Up (Weeks 3–4)', time: '~1 hr/week', note: 'Record 30–60 min of casual family video, upload to Drive' },
          { phase: 'Book Reveal (Weeks 5–8)', time: '~1 hr/week', note: 'Review and approve content before it goes live' },
          { phase: 'Full Launch (Weeks 9–12)', time: '~30 min/week', note: 'Approve, engage, celebrate — we handle the rest' },
        ].map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: i < 3 ? `1px solid ${T.border}` : 'none', gap: 12 }}>
            <div>
              <p style={{ fontWeight: 600, color: T.slate, margin: '0 0 2px', fontSize: 14 }}>{m.phase}</p>
              <p style={{ color: T.muted, fontSize: 13, margin: 0 }}>{m.note}</p>
            </div>
            <span style={{ background: T.tealLight, color: T.primary, padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}>
              {m.time}
            </span>
          </div>
        ))}
      </div>

      {/* How We Work Together */}
      <div style={{ background: T.white, borderRadius: 10, padding: '20px 24px', marginBottom: 16, border: `1px solid ${T.border}` }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.muted, margin: '0 0 14px' }}>
          🤝 How We Work Together
        </p>
        {[
          'Everything lives in your portal — no hunting through emails.',
          'We work async. You review on your schedule.',
          'At each milestone, we do a short Proof Gate call to confirm you\'re happy before we move on.',
          'Nothing goes live without your explicit approval.',
        ].map((bullet, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
            <span style={{ color: T.primary, fontWeight: 700, marginTop: 1, flexShrink: 0 }}>•</span>
            <p style={{ color: T.text, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{bullet}</p>
          </div>
        ))}
      </div>

      {/* What We Need From You First */}
      <div style={{ background: T.white, borderRadius: 10, padding: '20px 24px', border: `1px solid ${T.border}` }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T.muted, margin: '0 0 16px' }}>
          📁 What We Need From You First
        </p>
        {[
          { task: 'Share your Google Drive folder with hello@monmaclabs.com', time: '5 min' },
          { task: 'Record a 5–10 min "intro" video of you and the girls (casual, no script)', time: '15 min' },
          { task: 'Complete the onboarding questionnaire (Step 4 above)', time: '5 min' },
          { task: 'Share 3–5 existing social posts you like (for brand reference)', time: '5 min' },
          { task: 'Send NDA and Scope of Work back signed', time: '10 min' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < 4 ? `1px solid ${T.border}` : 'none', gap: 12 }}>
            <p style={{ color: T.text, fontSize: 14, margin: 0, lineHeight: 1.5 }}>{item.task}</p>
            <span style={{ color: T.muted, fontSize: 12, whiteSpace: 'nowrap', flexShrink: 0 }}>{item.time}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
          <span style={{ background: T.coral, color: 'white', padding: '5px 14px', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>
            Total: ~40 min
          </span>
        </div>
      </div>
    </div>
  );
}

// ── QUESTIONNAIRE ──────────────────────────────────────────────────────────
function QuestionnaireForm({ onComplete }: { onComplete: () => void }) {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const allFilled = Object.values(answers).every(v => v.trim().length > 0);

  return (
    <div style={{ display: 'grid', gap: 14, marginTop: 4 }}>
      {[
        { key: 'q1', q: 'What is the primary goal for the first 90 days? (e.g., waitlist signups, B2B meetings, book pre-orders)' },
        { key: 'q2', q: 'Describe your ideal B2B buyer in one sentence. Who are they and what problem does this book solve for them?' },
        { key: 'q3', q: 'What social platforms are you most comfortable using today?' },
        { key: 'q4', q: 'What does "success" look like for you by December 12 (Zou\'s birthday / draw date)?' },
        { key: 'q5', q: 'Any brands, creators, or content styles you love and want us to draw inspiration from?' },
      ].map(({ key, q }, i) => (
        <div key={key}>
          <p style={{ fontSize: 13, fontWeight: 600, color: T.slate, margin: '0 0 6px' }}>{i + 1}. {q}</p>
          <textarea
            rows={2}
            value={answers[key as keyof typeof answers]}
            onChange={e => setAnswers(a => ({ ...a, [key]: e.target.value }))}
            placeholder="Your answer..."
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: `1.5px solid ${T.border}`, fontSize: 14, color: T.slate, resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>
      ))}
      <button
        onClick={onComplete}
        disabled={!allFilled}
        style={{
          background: allFilled ? T.coral : '#ddd',
          color: 'white', border: 'none', borderRadius: 8, padding: '12px 24px', fontWeight: 700, fontSize: 15,
          cursor: allFilled ? 'pointer' : 'not-allowed', alignSelf: 'flex-start', marginTop: 4,
        }}
      >
        Submit Questionnaire →
      </button>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function VanessaPortalPage() {
  const [steps, setSteps] = useState({
    nda: false,
    sow: false,
    payment: false,
    questionnaire: false,
  });
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const completedCount = Object.values(steps).filter(Boolean).length;

  const markComplete = (key: keyof typeof steps) => setSteps(s => ({ ...s, [key]: true }));

  const getStatus = (index: number): StepStatus => {
    const keys = ['nda', 'sow', 'payment', 'questionnaire'] as const;
    const doneCount = Object.values(steps).filter(Boolean).length;
    if (index < doneCount) return 'complete';
    if (index === doneCount) return 'active';
    return 'locked';
  };

  const dashboardStatus: StepStatus = completedCount >= 4 ? 'active' : 'locked';

  return (
    <div style={{ minHeight: '100vh', background: T.cream, fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── TOP BAR ── */}
      <div style={{ background: `linear-gradient(135deg, #2ECCC4, #4ECDC4)`, padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.75)', margin: 0 }}>MAPLE 360 — Client Portal</p>
          <p style={{ fontWeight: 700, color: 'white', fontSize: 16, margin: '2px 0 0' }}>Welcome, Vanessa 👋</p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, margin: '1px 0 0' }}>ZL Buy a House — Social Media Launch</p>
        </div>
        <Link href="/landing/vanessa-michele" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: 8, padding: '8px 16px', textDecoration: 'none', fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap' }}>
          ↗ View Original Proposal
        </Link>
      </div>

      {/* ── STEPPER ── */}
      <Stepper activeId="start" />

      {/* ── GETTING STARTED CHECKLIST ── */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: T.primary, margin: '0 0 4px' }}>Getting Started ✓</p>
            <h2 style={{ fontWeight: 700, color: T.slate, fontSize: 22, margin: 0 }}>Getting Started Checklist</h2>
          </div>
          <span style={{ fontSize: 13, color: T.muted, fontWeight: 600 }}>{completedCount} of 5 complete</span>
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, background: T.border, borderRadius: 2, marginBottom: 24 }}>
          <div style={{ height: '100%', width: `${(completedCount / 5) * 100}%`, background: T.primary, borderRadius: 2, transition: 'width 0.4s' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Step 1: NDA */}
          <StepCard
            number={1}
            title="Non-Disclosure Agreement"
            description="Review and acknowledge our mutual NDA. This keeps both parties protected."
            status={getStatus(0)}
            cta={
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="#" style={{ background: T.coral, color: 'white', padding: '10px 20px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  ↗ Review &amp; Sign NDA
                </a>
                {!steps.nda && (
                  <button onClick={() => markComplete('nda')} style={{ background: 'none', border: `1.5px solid ${T.border}`, color: T.muted, padding: '10px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>
                    Mark as Signed
                  </button>
                )}
              </div>
            }
          />

          {/* Step 2: SOW */}
          <StepCard
            number={2}
            title="Scope of Work"
            description="Review the project deliverables, timeline, and payment schedule for your launch."
            status={getStatus(1)}
            cta={
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="#" style={{ background: T.coral, color: 'white', padding: '10px 20px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  ↗ Review &amp; Sign Scope of Work
                </a>
                {steps.nda && !steps.sow && (
                  <button onClick={() => markComplete('sow')} style={{ background: 'none', border: `1.5px solid ${T.border}`, color: T.muted, padding: '10px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>
                    Mark as Signed
                  </button>
                )}
              </div>
            }
          />

          {/* Step 3: Payment */}
          <StepCard
            number={3}
            title="Setup Payment — $2,500"
            description="Your setup fee kicks off the project. Secure payment via Stripe."
            status={getStatus(2)}
            cta={
              <div style={{ display: 'grid', gap: 12 }}>
                <a
                  href="https://buy.stripe.com/eVq14gfxfckX92t0s97bW00"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: T.coral, color: 'white', padding: '12px 24px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start' }}
                >
                  💳 Pay Now — $2,500
                </a>
                {steps.sow && !steps.payment && (
                  <button onClick={() => markComplete('payment')} style={{ background: 'none', border: `1.5px solid ${T.border}`, color: T.muted, padding: '10px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 13, alignSelf: 'flex-start' }}>
                    Mark as Paid
                  </button>
                )}
              </div>
            }
          />

          {/* Step 4: Questionnaire */}
          <StepCard
            number={4}
            title="Onboarding Questionnaire"
            description="5 quick questions so we can hit the ground running. Takes about 3 minutes."
            status={getStatus(3)}
            cta={
              <div>
                {!showQuestionnaire && !steps.questionnaire && (
                  <button onClick={() => setShowQuestionnaire(true)} style={{ background: T.coral, color: 'white', padding: '10px 20px', borderRadius: 8, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
                    Start Questionnaire →
                  </button>
                )}
                {showQuestionnaire && !steps.questionnaire && (
                  <QuestionnaireForm onComplete={() => { markComplete('questionnaire'); setShowQuestionnaire(false); }} />
                )}
              </div>
            }
          />

          {/* Step 5: Dashboard */}
          <StepCard
            number={5}
            title="Your Project Dashboard"
            description="Your deliverables and launch tracker are ready. Everything lives here — no hunting through emails."
            status={dashboardStatus}
            cta={
              <Link href="#deliverables" style={{ background: T.primary, color: 'white', padding: '10px 20px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                + View Deliverables
              </Link>
            }
          />
        </div>

        {/* What to Expect */}
        <WhatToExpect />

        {/* ── DELIVERABLES (anchor target) ── */}
        <div id="deliverables" style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem', fontWeight: 600 }}>YOUR DELIVERABLES</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { slug: 'brand_story', title: 'Brand Story Framework', description: 'North Star statement, content pillars, and voice guide', status: 'in-progress' },
              { slug: 'video_bank', title: '30-Video Content Bank', description: 'Scripted concepts with hooks and opening lines', status: 'pending' },
              { slug: 'launch_calendar', title: '12-Week Launch Calendar', description: 'Week-by-week plan from setup to full launch', status: 'pending' },
              { slug: 'email_sequence', title: '5-Email Welcome Sequence', description: 'Written and built — auto-triggers on waitlist join', status: 'pending' },
              { slug: 'seo_audit', title: 'Website SEO & AEO/GEO Audit', description: 'Keyword strategy and AI search optimization', status: 'pending' },
              { slug: 'b2b_one_pager', title: 'B2B Sales One-Pager', description: 'For title companies, mortgage brokers, and insurers', status: 'pending' },
              { slug: 'social_setup', title: 'Social Platform Setup', description: 'TikTok, Instagram, Facebook — optimized and cross-linked', status: 'in-progress' },
              { slug: 'strategy_call', title: 'Strategy Walkthrough Call', description: '60-minute recorded session and summary doc', status: 'completed' },
            ].map((d) => (
              <Link key={d.slug} href={`/portal/vanessa-michele/deliverables/${d.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', borderRadius: 12, padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <div>
                    <p style={{ fontWeight: 600, color: T.slate }}>{d.title}</p>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>{d.description}</p>
                  </div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px',
                    background: d.status === 'completed' ? `${T.primary}20` : d.status === 'in-progress' ? '#FFF9E6' : '#f0f0f0',
                    color: d.status === 'completed' ? T.primary : d.status === 'in-progress' ? '#F0A500' : '#999',
                    textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap',
                  }}>
                    {d.status === 'completed' ? '✓ Done' : d.status === 'in-progress' ? '● In Progress' : '○ Pending'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 48, paddingBottom: 40 }}>
          <p style={{ color: T.muted, fontSize: 14 }}>Have questions? We&apos;re here.</p>
          <a href="mailto:hello@monmaclabs.com" style={{ color: T.primary, fontWeight: 600, fontSize: 14 }}>hello@monmaclabs.com</a>
        </div>

      </div>
    </div>
  );
}
