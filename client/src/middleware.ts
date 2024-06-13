import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = ['/me']
const publicPahts = ['/login', 'register']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  if (privatePaths.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (publicPahts.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/me', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/me', '/login', '/register']
}
