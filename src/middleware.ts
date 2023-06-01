import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { PAGE_NAMES } from 'utils/constants'

// const unprotectedRoutes = [PAGE_NAMES.login, PAGE_NAMES.register]

export default async function middleware(request: NextRequest) {
  // // Get the pathname of the request (e.g. /, /analysis)
  // const path = req.nextUrl.pathname
  // const session = await getToken({
  //   req,
  //   secret: process.env.NEXTAUTH_SECRET,
  // })

  // const routeIsProtected = !unprotectedRoutes.includes(path)

  // if (!session) {
  //   return NextResponse.redirect(new URL('/login', req.nextUrl))
  // } else if (session && (path === '/login' || path === '/register')) {
  //   return NextResponse.redirect(new URL(PAGE_NAMES.root, req.nextUrl))
  // }
  return NextResponse.next()
}

// Fix for https://stackoverflow.com/questions/73229148/uncaught-syntaxerror-expected-expression-got-while-using-next-js-middlewar
// export const config = {
//   matcher:
//     '/((?!api|_next/static|_next/image|favicon.ico|response|login|register).*)',
// }
