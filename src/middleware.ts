import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths except /demo/**, static files, and Next.js internals
    '/((?!demo|_next|_vercel|.*\\..*).*)',
    // Always run for API routes
    '/(nb|en)/:path*',
  ],
};
