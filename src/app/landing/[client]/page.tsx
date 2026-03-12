// Simplified test version to debug Render static generation issue
export async function generateStaticParams() {
  return [
    { client: 'jamila-dugan' },
    { client: 'vanessa-michele' }
  ];
}

interface LandingPageProps {
  params: Promise<{ client: string }>;
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { client } = await params;

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>TEST: Landing Page for {client}</h1>
      <p>If you see this, the route is working!</p>
      <p>This is a simplified version to debug the Render static generation issue.</p>
    </div>
  );
}
