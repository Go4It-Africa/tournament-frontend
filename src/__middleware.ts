// import { NextResponse, NextRequest } from 'next/server';
// import { token, tokenExpiry } from '@/components/data/Constants';

// const protectedRoutes = [
//   '/',
//   '/players/*',
//   '/category/create',
//   '/category/view',
//   '/profile',
//   '/update-profile',
//   '/change-password',
//   '/product-roadmap',
//   '/changelog',
//   '/settings',
// ];

// const authRouters = [
//   '/auth/sign-in',
//   '/auth/sign-up',
//   '/auth/forget-password',
//   '/auth/reset-password',
// ];

// const publicRouters = ['/privacy-policy', '/terms-and-conditions'];

// const checkTokenStatus = (request: NextRequest) => {
//   const tokenName = token;

//   const user_token = request.cookies.get(tokenName)?.value;

//   const dashboardUrl = new URL('/', request.url);
//   const loginUrl = new URL('/auth/sign-in', request.url);
//   const path = request.nextUrl.pathname;
//   const hasToken = request.cookies.has(tokenName);

//   //if no token and user tries to access protected routes, redirect to login
//   if (!hasToken) {
//     return NextResponse.redirect(loginUrl);
//   }

//   try {
//     //const decodedToken = JSON.parse(atob(token)); //Todo: Use JWT library for this
//     // const isTokenExpired = token * 1000 < Date.now();
//     // if (isTokenExpired) {
//     //   return NextResponse.redirect(loginUrl);
//     // }

//     //If user already logged in and no token found or token is expired, delete token & log them out
//     const user_token_expiry =
//       request.cookies.get(tokenExpiry)?.value.replace('time_', '') ?? '';
//     if (
//       protectedRoutes.includes(path) &&
//       hasToken &&
//       (!user_token || Date.now() > parseInt(user_token_expiry))
//     ) {
//       [token, tokenExpiry].forEach((cookie) => {
//         request.cookies.delete(cookie);
//       });

//       const response = NextResponse.redirect(loginUrl);

//       [token, tokenExpiry].forEach((cookie) => {
//         response.cookies.delete(cookie);
//       });

//       return response;
//     }

//     //If user is logged in, token is present, and tries to access protected or auth routes, redirect to dashboard
//     if (hasToken && !user_token) {
//       if (protectedRoutes.includes(path)) {
//         return NextResponse.redirect(dashboardUrl);
//       }
//     }
//   } catch (error) {
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// };

// const setCSPHeaders = (request: NextRequest) => {
//   const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
//   const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
//     style-src 'self' 'nonce-${nonce}';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `;

//   // Replace newline characters and spaces
//   const contentSecurityPolicyHeaderValue = cspHeader
//     .replace(/\s{2,}/g, ' ')
//     .trim();

//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-nonce', nonce);

//   requestHeaders.set(
//     'Content-Security-Policy',
//     contentSecurityPolicyHeaderValue
//   );

//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
//   response.headers.set(
//     'Content-Security-Policy',
//     contentSecurityPolicyHeaderValue
//   );
// };

// export function middleware(request: NextRequest) {
//   //setCSPHeaders(request);

//   return checkTokenStatus(request);
// }

// export const config = {
//   matcher: [
//     {
//       source:
//         '/((?!auth|api|_next/static|_next/image|static|favicon.ico|_components|_utils|images).*)',
//     },
//   ],
// };
