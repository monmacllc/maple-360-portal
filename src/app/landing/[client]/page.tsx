import { notFound } from 'next/navigation';
import { getAllClientSlugs } from '@/lib/clients';
import VanessaLanding from './VanessaLanding';
import JamilaLanding from './JamilaLanding';

export async function generateStaticParams() {
  return getAllClientSlugs().map((client) => ({ client }));
}

interface LandingPageProps {
  params: Promise<{ client: string }>;
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { client } = await params;

  // Verify the client exists in our registry
  const validClients = getAllClientSlugs();
  if (!validClients.includes(client)) {
    notFound();
  }

  if (client === 'vanessa-michele') {
    return <VanessaLanding />;
  }

  // Default: Jamila's landing page
  if (client === 'jamila-dugan') {
    return <JamilaLanding />;
  }

  // Fallback for other valid clients
  return <JamilaLanding />;
}
