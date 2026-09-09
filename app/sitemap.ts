import type { MetadataRoute } from 'next'
import { locales, defaultLocale } from '@/i18n.config'

const BASE = 'https://www.kidsdds.com'

const now = new Date()

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

interface RouteMeta {
  path: string
  changeFrequency: ChangeFreq
  priority: number
}

const ROUTES: RouteMeta[] = [
  // ── Homepage ──────────────────────────────────────────────────────────
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },

  // ── High-value conversion pages ───────────────────────────────────────
  { path: '/request-appointment', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/for-patients/child-first-visit', changeFrequency: 'monthly', priority: 0.9 },

  // ── Services ──────────────────────────────────────────────────────────
  { path: '/services', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/preventive-dentistry', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/restorative', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/sedation-dentistry', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/special-needs', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/emergency', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/checkups-and-cleanings', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/orthodontics', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/general-anesthesiology', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/pulp-therapy', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/tooth-extractions', changeFrequency: 'monthly', priority: 0.7 },

  // ── For Patients ──────────────────────────────────────────────────────
  { path: '/for-patients', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/for-patients/insurance-info', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/for-patients/patient-forms', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-patients/patient-info', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/for-patients/dental-financing', changeFrequency: 'monthly', priority: 0.65 },

  // ── Who We Treat ──────────────────────────────────────────────────────
  { path: '/who-we-treat', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/who-we-treat/childrens-dentistry', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/who-we-treat/dentistry-for-toddlers', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/who-we-treat/advanced-dental-technology', changeFrequency: 'monthly', priority: 0.65 },

  // ── About ─────────────────────────────────────────────────────────────
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/meet-the-dentists', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/meet-the-dentists/dr-sonia-gutierrez', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/about/meet-the-dentists/dr-dave-rutcosky', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/about/meet-the-dentists/dr-sahar-alrayyes', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/about/meet-the-dentists/dr-anne-ashley-compton', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/about/meet-the-team', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/about/tour-our-office', changeFrequency: 'yearly', priority: 0.55 },
  { path: '/about/recent-events', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/about/community-involvement', changeFrequency: 'monthly', priority: 0.55 },
  { path: '/about/why-choose-us', changeFrequency: 'monthly', priority: 0.6 },

  // ── Reviews ───────────────────────────────────────────────────────────
  { path: '/reviews', changeFrequency: 'weekly', priority: 0.65 },
  { path: '/reviews/written-reviews', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/reviews/video-testimonials', changeFrequency: 'monthly', priority: 0.55 },

  // ── Q&A / Blog ────────────────────────────────────────────────────────
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/qa/parents-afraid-to-ask', changeFrequency: 'monthly', priority: 0.65 },

  // ── Utility ───────────────────────────────────────────────────────────
  { path: '/ask-us-a-question', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact/office-info', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/pay', changeFrequency: 'yearly', priority: 0.4 },
]

function urlFor(path: string, locale: string): string {
  const suffix = path === '/' ? '' : path
  return locale === defaultLocale ? `${BASE}${suffix || '/'}` : `${BASE}/${locale}${suffix}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) =>
    locales.map((locale) => ({
      url: urlFor(route.path, locale),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, urlFor(route.path, l)])),
      },
    }))
  )
}
