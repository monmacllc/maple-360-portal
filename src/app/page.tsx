import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Maple 360 Portal</h1>
        <p className="text-gray-600 mb-6">Client portal and landing pages</p>
        <div className="space-y-3">
          <Link 
            href="/portal/jamila-dugan" 
            className="block w-full py-2 px-4 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
          >
            Jamila Dugan Portal
          </Link>
          <Link 
            href="/landing/jamila-dugan" 
            className="block w-full py-2 px-4 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors"
          >
            Jamila Dugan Landing
          </Link>
        </div>
      </div>
    </div>
  );
}