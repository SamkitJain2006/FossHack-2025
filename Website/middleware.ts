import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getUser } from "./lib/auth"

export async function middleware(request: NextRequest) {
  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const user = await getUser(request)

    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/dashboard/:path*",
}

