import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n.config'

export const routing = {
  locales,
  defaultLocale,
}

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
})

export const config = {
  // Match all paths except: API routes, Next.js internals, studio, static files
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)'],
}
