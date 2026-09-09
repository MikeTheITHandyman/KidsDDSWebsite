const BASE = 'https://www.kidsdds.com'

/** OpenGraph locale string for the given app locale. */
export function ogLocale(locale: string): string {
  return locale === 'es' ? 'es_ES' : 'en_US'
}

/** Absolute URL for a path in the given locale, respecting localePrefix: 'as-needed'. */
export function localizedUrl(path: string, locale: string): string {
  const suffix = path === '/' ? '' : path
  return locale === 'es' ? `${BASE}/es${suffix}` : `${BASE}${suffix || '/'}`
}

/** en/es alternates map for a given path, for metadata.alternates.languages. */
export function localeAlternates(path: string): Record<string, string> {
  return { en: localizedUrl(path, 'en'), es: localizedUrl(path, 'es') }
}
