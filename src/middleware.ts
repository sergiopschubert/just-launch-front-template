import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["pt"],
  defaultLocale: "pt",
  localePrefix: "always",
  pathnames: {
    "/": "/",
  },
});

export const config = {
  matcher: ["/", "/(pt)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
