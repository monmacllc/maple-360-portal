import { NextRequest, NextResponse } from 'next/server';

const DOCUSEAL_URL = process.env.DOCUSEAL_BASE_URL || 'http://localhost:3002';
const DOCUSEAL_TOKEN = process.env.DOCUSEAL_API_TOKEN || '2uf62Xxm3jXdDnJ2tjf5UBRiPfcxw7r4reVeZZThXA4';
const NDA_TEMPLATE_ID = parseInt(process.env.DOCUSEAL_NDA_TEMPLATE_ID || '1');

// POST /api/docuseal/nda
// Creates a DocuSeal submission for the Vanessa Michele NDA.
// Returns { signingUrl } — the client's signing link.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const clientName = body.name || 'Vanessa Michele';
    const clientEmail = body.email || 'venetabg829@gmail.com';

    const res = await fetch(`${DOCUSEAL_URL}/api/templates/${NDA_TEMPLATE_ID}/submissions`, {
      method: 'POST',
      headers: {
        'X-Auth-Token': DOCUSEAL_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submitters: [
          { role: 'Client', email: clientEmail, name: clientName },
          { role: 'Monmac', email: 'quan@monmaclabs.com', name: 'Quan Zou' },
        ],
        send_email: false, // we redirect client directly; Quan gets a portal notification
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[docuseal/nda] submission create failed:', err);
      return NextResponse.json({ error: 'Failed to create signing session' }, { status: 500 });
    }

    const submitters: Array<{
      role: string;
      embed_src: string;
      slug: string;
      submission_id: number;
    }> = await res.json();

    const client = submitters.find((s) => s.role === 'Client');
    if (!client) {
      return NextResponse.json({ error: 'Client submitter not found' }, { status: 500 });
    }

    return NextResponse.json({
      signingUrl: client.embed_src,
      submissionId: client.submission_id,
      slug: client.slug,
    });
  } catch (err) {
    console.error('[docuseal/nda] unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET /api/docuseal/nda?submission_id=X — check completion status
export async function GET(req: NextRequest) {
  const submissionId = req.nextUrl.searchParams.get('submission_id');
  if (!submissionId) {
    return NextResponse.json({ error: 'submission_id required' }, { status: 400 });
  }

  try {
    const res = await fetch(`${DOCUSEAL_URL}/api/submissions/${submissionId}`, {
      headers: { 'X-Auth-Token': DOCUSEAL_TOKEN },
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }
    const data = await res.json();
    return NextResponse.json({
      status: data.status,
      completedAt: data.completed_at,
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
