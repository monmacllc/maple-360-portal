"use client";

import { useParams } from 'next/navigation';
import VanessaLanding from './VanessaLanding';
import JamilaLanding from './JamilaLanding';

export default function LandingPage() {
  const params = useParams();
  const client = params?.client;

  if (client === 'vanessa-michele') {
    return <VanessaLanding />;
  }

  // Default: Jamila's landing page
  return <JamilaLanding />;
}
