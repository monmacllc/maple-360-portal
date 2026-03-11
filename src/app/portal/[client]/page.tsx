import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getClient, getAllClientSlugs } from '@/lib/clients';
import type { Metadata } from 'next';

type Props = { params: Promise<{ client: string }> };

export async function generateStaticParams() {
  return getAllClientSlugs().map((client) => ({ client }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { client: slug } = await params;
  const client = getClient(slug);
  if (!client) return { title: 'Not Found' };
  return { title: `${client.name} — ${client.tagline}` };
}

export default async function PortalPage({ params }: Props) {
  const { client: slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  const completedCount = client.deliverables.filter(d => d.status === 'completed').length;
  const totalCount = client.deliverables.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <div style={{ minHeight: '100vh', background: client.colors.background, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${client.colors.primary}, ${client.colors.secondary})`,
        padding: '3rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>
          MAPLE 360 — CLIENT PORTAL
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.25rem' }}>{client.name}</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{client.tagline}</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        {/* Progress */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 600, color: client.colors.text }}>Overall Progress</span>
            <span style={{ fontWeight: 700, color: client.colors.primary }}>{progress}%</span>
          </div>
          <div style={{ height: '8px', background: '#e9ecef', borderRadius: '4px' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg, ${client.colors.primary}, ${client.colors.secondary})`, borderRadius: '4px', transition: 'width 0.5s' }} />
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>{completedCount} of {totalCount} deliverables completed</p>
        </div>

        {/* Milestones */}
        <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem', fontWeight: 600 }}>MILESTONES</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {client.milestones.map((m) => (
            <div key={m.id} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '1.25rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              borderLeft: `4px solid ${m.status === 'completed' ? client.colors.primary : '#e9ecef'}`
            }}>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', color: client.colors.text }}>{m.title}</p>
              <p style={{ fontSize: '0.8rem', color: m.status === 'completed' ? client.colors.primary : '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                {m.status === 'completed' ? '✓ Completed' : m.status === 'active' ? '● In Progress' : '○ Pending'}
              </p>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem', fontWeight: 600 }}>DELIVERABLES</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {client.deliverables.map((d) => (
            <Link key={d.slug} href={`/portal/${slug}/deliverables/${d.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.25rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
              }}>
                <div>
                  <p style={{ fontWeight: 600, color: client.colors.text }}>{d.title}</p>
                  <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>{d.description}</p>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  background: d.status === 'completed' ? `${client.colors.primary}15` : '#f0f0f0',
                  color: d.status === 'completed' ? client.colors.primary : '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap'
                }}>
                  {d.status === 'completed' ? '✓ Done' : d.status}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Payment Schedule */}
        <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginTop: '2rem', marginBottom: '1rem', fontWeight: 600 }}>PAYMENT SCHEDULE</h2>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.25rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}>
          {client.milestones.map((m) => (
            <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>
              <span style={{ color: client.colors.text }}>{m.title}</span>
              <span style={{ fontWeight: 600, color: m.status === 'completed' ? client.colors.primary : '#999' }}>
                ${m.payment.toLocaleString()} {m.status === 'completed' ? '✓' : ''}
              </span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0 0', fontWeight: 700 }}>
            <span>Total</span>
            <span style={{ color: client.colors.primary }}>${client.milestones.reduce((s, m) => s + m.payment, 0).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}