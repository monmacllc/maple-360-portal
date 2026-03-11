import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Portal and landing pages are public — no auth required
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};