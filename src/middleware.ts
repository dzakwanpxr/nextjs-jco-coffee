import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Updated list of protected routes
const protectedRoutes = [
  /^\/products\/[^/]+$/, // Matches /products/{id} but not /products
  "/checkout",
  "/cart",
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;
  const path = request.nextUrl.pathname;

  const isProtected = protectedRoutes.some((route) => {
    if (typeof route === "string") {
      return path.startsWith(route);
    }
    return route.test(path);
  });

  if (!token && isProtected) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", path);
    return NextResponse.redirect(loginUrl);
  }

  if (token && path === "/login") {
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
