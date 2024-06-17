import { groupRoles } from '@/constants/roles'
import { PayloadJWTTypes, TokenTypes } from '@/types/auth'
import { decode } from '@/utils/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const userPrivatePaths = ['/me']
const publicPaths = ['/login', 'register']
const adminPaths = ['/admin/dashboard']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  // if (userPrivatePaths.includes(pathname) && !token) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // } else if (userPrivatePaths.includes(pathname) && token) {
  //   const tokenObj: TokenTypes = JSON.parse(token)
  //   // Decode access token
  //   const payloadJWT = decode<PayloadJWTTypes>(tokenObj.accessToken)
  //   // Get role
  //   const role = payloadJWT.group?.name
  //   const isAdmin = role === groupRoles.ADMIN
  //   const isCustomer = role === groupRoles.CUSTOMER

  //   // Check role
  //   if (isAdmin && userPrivatePaths.includes(pathname)) {
  //     console.log('🚀1---->', 1)
  //     return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  //   }
  //   // else if (isCustomer) {
  //   // return NextResponse.redirect(new URL('/me', request.url))
  //   // }
  // }

  // if (publicPahts.includes(pathname) && token) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  // return NextResponse.next()

  if (
    !token &&
    (userPrivatePaths.includes(pathname) || adminPaths.includes(pathname))
  ) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Get role from token
  const tokenObj: TokenTypes = token && JSON.parse(token)
  const payloadJWT = decode<PayloadJWTTypes>(tokenObj?.accessToken)
  const role = payloadJWT?.group?.name
  const isAdmin = role === groupRoles.ADMIN
  const isCustomer = role === groupRoles.CUSTOMER

  // Check role
  if (isCustomer && adminPaths.includes(pathname)) {
    return NextResponse.redirect(
      new URL('/login?error=User cannot access this page', request.url)
    )
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/me', '/login', '/register', '/admin/dashboard']
}
