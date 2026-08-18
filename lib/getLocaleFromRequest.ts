import type { NextRequest } from 'next/server'

/**
 * Best-effort locale detection for API routes, which have no locale segment
 * of their own and receive no locale field from the form payload. Checks the
 * Referer path first (the exact page the form was submitted from — /es/...
 * vs no prefix, per routing.ts's localePrefix: 'as-needed'), then falls back
 * to the NEXT_LOCALE cookie next-intl's LanguageSwitcher keeps in sync.
 */
export function getLocaleFromRequest(req: NextRequest): 'en' | 'es' {
  const referer = req.headers.get('referer')
  if (referer) {
    try {
      const path = new URL(referer).pathname
      if (path === '/es' || path.startsWith('/es/')) return 'es'
    } catch {
      // malformed referer header — fall through to cookie check
    }
  }
  return req.cookies.get('NEXT_LOCALE')?.value === 'es' ? 'es' : 'en'
}
