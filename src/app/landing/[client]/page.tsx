import VanessaLanding from './VanessaLanding';
import JamilaLanding from './JamilaLanding';

// Static params for build time pre-generation
export async function generateStaticParams() {
  return [
    { client: 'jamila-dugan' },
    { client: 'vanessa-michele' },
  ];
}

interface LandingPageProps {
  params: Promise<{ client: string }>;
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { client } = await params;

  if (client === 'vanessa-michele') {
    return <VanessaLanding />;
  }

  // Default: Jamila's landing page
  return <JamilaLanding />;
}
