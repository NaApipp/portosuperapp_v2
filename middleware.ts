import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Jika user sudah berada di halaman maintenance, jangan di-redirect lagi
  if (request.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.next();
  }

  // Redirect semua rute lain ke halaman /maintenance
  return NextResponse.redirect(new URL('/maintenance', request.url));
}

// Menentukan rute mana saja yang akan terkena efek middleware
export const config = {
  matcher: [
    /*  
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - asset (public assets like images, fonts)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|asset).*)',
  ],
};
