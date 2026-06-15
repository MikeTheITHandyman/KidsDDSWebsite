import type { MetadataRoute } from 'next'

const BASE = 'https://www.kidsdds.com'

const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ──────────────────────────────────────────────────────────
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // ── High-value conversion pages ───────────────────────────────────────
    { url: `${BASE}/request-appointment`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/for-patients/child-first-visit`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ── Services ──────────────────────────────────────────────────────────
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/preventive-dentistry`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/restorative`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/sedation-dentistry`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/special-needs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/emergency`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/checkups-and-cleanings`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services/orthodontics`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services/general-anesthesiology`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services/pulp-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services/tooth-extractions`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ── For Patients ──────────────────────────────────────────────────────
    { url: `${BASE}/for-patients`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/for-patients/insurance-info`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/for-patients/patient-forms`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/for-patients/patient-info`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/for-patients/dental-financing`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },

    // ── Who We Treat ──────────────────────────────────────────────────────
    { url: `${BASE}/who-we-treat`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/who-we-treat/childrens-dentistry`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/who-we-treat/dentistry-for-toddlers`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/who-we-treat/advanced-dental-technology`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },

    // ── About ─────────────────────────────────────────────────────────────
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about/meet-the-dentists`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about/meet-the-dentists/dr-sonia-gutierrez`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/about/meet-the-dentists/dr-dave-rutcosky`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/about/meet-the-dentists/dr-sahar-alrayyes`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/about/meet-the-dentists/dr-anne-ashley-compton`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/about/meet-the-team`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/about/tour-our-office`, lastModified: now, changeFrequency: 'yearly', priority: 0.55 },
    { url: `${BASE}/about/recent-events`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/about/community-involvement`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${BASE}/about/why-choose-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ── Reviews ───────────────────────────────────────────────────────────
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 },
    { url: `${BASE}/reviews/written-reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/reviews/video-testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.55 },

    // ── Blog & Content ────────────────────────────────────────────────────
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // ── Utility ───────────────────────────────────────────────────────────
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/ask-the-doctor`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact/office-info`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/pay`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
