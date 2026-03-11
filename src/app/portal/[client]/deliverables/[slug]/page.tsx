import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getClient, getAllClientSlugs } from '@/lib/clients';

type Props = { params: Promise<{ client: string; slug: string }> };

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

export default async function DeliverablePage({ params }: Props) {
  const { client: clientSlug, slug } = await params;
  const client = getClient(clientSlug);
  if (!client) notFound();

  const deliverable = client.deliverables.find(d => d.slug === slug);
  if (!deliverable) notFound();

  // For landing_page type, link to the public landing page
  const isLandingPage = deliverable.type === 'landing_page';

  return (
    <div style={{ minHeight: '100vh', background: client.colors.background, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <Link href={`/portal/${clientSlug}`} style={{ color: client.colors.primary, textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Portal
        </Link>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: client.colors.text, marginTop: '1rem' }}>
          {deliverable.title}
        </h1>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginTop: '1.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.6 }}>
            {deliverable.description}
          </p>

          {isLandingPage && (
            <Link href={`/landing/${clientSlug}`} style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              padding: '0.75rem 2rem',
              background: client.colors.primary,
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem'
            }}>
              Open
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}