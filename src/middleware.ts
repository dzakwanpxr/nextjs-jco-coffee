import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Daftar rute yang memerlukan autentikasi
const protectedRoutes = ["/products", "/checkout", "/cart"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  if (!token && protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (token && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
