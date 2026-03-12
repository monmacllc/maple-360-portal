"use client";

import { useParams } from 'next/navigation';
import VanessaLanding from './VanessaLanding';
import JamilaLanding from './JamilaLanding';

// Static params for build time pre-generation
export async function generateStaticParams() {
  return [
    { client: 'jamila-dugan' },
    { client: 'vanessa-michele' },
  ];
}

export default function LandingPage() {
  const params = useParams();
  const client = params?.client;

  if (client === 'vanessa-michele') {
    return <VanessaLanding />;
  }

  // Default: Jamila's landing page
  return <JamilaLanding />;
}
