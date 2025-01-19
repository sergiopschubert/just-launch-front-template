import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localePrefix: 'always',
  pathnames: {
    '/articles': '/articles',
  },
});

export const config = {
  matcher: ['/((?!articles|api|_next|_vercel|.*\\..*).*)', '/(pt|en)/:path*'],
};
