import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en','es'],
  defaultLocale: 'pt',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(pt|en|es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
