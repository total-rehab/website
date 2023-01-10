import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/healthcheck')) {
    return NextResponse.rewrite(new URL('/api/healthcheck', request.url));
  }
}

export const config = {
  matcher: '/healthcheck',
};
