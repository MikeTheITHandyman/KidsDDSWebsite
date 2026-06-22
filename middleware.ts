import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n.config'

export default createMiddleware({
  locales,
  defaultLocale,
  // Default locale (English) has no URL prefix: /about, /services, etc.
  // Spanish uses /es prefix: /es/about, /es/services, etc.
  localePrefix: 'as-needed',
})

export const config = {
  matcher: [
    // Run middleware on all paths except:
    // - Next.js internals and static files (_next, _vercel, files with extensions)
    // - API routes
    // - Sanity Studio
    '/((?!api|_next|_vercel|studio|.*\\..*).*)',
  ],
}
