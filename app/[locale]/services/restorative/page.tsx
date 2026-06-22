import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restorative Dentistry for Kids',
  description: 'Gentle restorative dental care for children including tooth-colored fillings, pediatric crowns, pulp therapy, and tooth extractions in Grayslake, IL.',
  provider: {
    '@type': 'Dentist',
    name: 'Kids Dentist',
    url: 'https://kidsdds.com',
    telephone: '+1-847-223-1400',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '160 Commerce Dr #100',
      addressLocality: 'Grayslake',
      addressRegion: 'IL',
      postalCode: '60030',
      addressCountry: 'US',
    },
  },
  serviceType: 'Restorative Pediatric Dentistry',
  areaServed: { '@type': 'City', name: 'Grayslake', containedInPlace: { '@type': 'State', name: 'Illinois' } },
  url: 'https://kidsdds.com/services/restorative',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Restorative Treatments',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tooth-Colored Fillings' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pediatric Crowns' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pulp Therapy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tooth Extractions' } },
    ],
  },
}

export const metadata: Metadata = {
  title: "Restorative Dentistry for Kids | Children's Dentist Grayslake, IL",
  description:
    'Gentle restorative dental care for children near Libertyville, Mundelein, Waukegan, and Lake Forest — tooth-colored fillings, pediatric crowns, pulp therapy, and extractions. Early treatment at Kids Dentist Grayslake, IL.',
  alternates: { canonical: 'https://www.kidsdds.com/services/restorative' },
  openGraph: {
    title: "Restorative Dentistry for Kids | Children's Dentist Grayslake, IL",
    description:
      'A small cavity treated today is a filling. Left untreated, it becomes a crown or worse. Serving Lake County families at Kids Dentist Grayslake, IL.',
    url: 'https://www.kidsdds.com/services/restorative',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const TREATMENT_META = [
  { icon: '🦷', gradientFrom: '#DBEAFE', gradientTo: '#BAE6FD', accentColor: '#4A90A4' },
  { icon: '👑', gradientFrom: '#D1FAE5', gradientTo: '#A7F3D0', accentColor: '#6BA899' },
  { icon: '🩺', gradientFrom: '#FEF3C7', gradientTo: '#FDE68A', accentColor: '#D97706' },
  { icon: '✂️', gradientFrom: '#EDE9FE', gradientTo: '#DDD6FE', accentColor: '#7C3AED' },
]

export default async function RestorativeDentistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('restorativePage')

  const TREATMENTS = TREATMENT_META.map((meta, i) => ({
    ...meta,
    title: t(`treatment${i}Title`),
    body: t(`treatment${i}Desc`),
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SubPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      kicker={t('kicker')}
      gradient="amber"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/services"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2.5rem' }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToServices')}
          </Link>
        </AnimatedSection>

        {/* Treatment options */}
        <AnimatedSection delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-kicker">{t('treatmentsKicker')}</span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 0', lineHeight: 1.2 }}>
              {t('treatmentsHeading')}
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '5rem' }}>
          {TREATMENTS.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.06}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1.5rem',
                  background: `linear-gradient(135deg, ${t.gradientFrom}55, ${t.gradientTo}33)`,
                  border: `1.5px solid ${t.accentColor}22`,
                  borderRadius: '1.5rem',
                  padding: '1.75rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '1rem',
                    background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${t.accentColor}22`,
                  }}
                  aria-hidden="true"
                >
                  {t.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: t.accentColor, margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {t.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.72, color: '#6b7280', margin: 0 }}>
                    {t.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              background: 'linear-gradient(135deg, #E8934F, #E97D63)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              textAlign: 'center',
              marginBottom: '2rem',
              boxShadow: '0 12px 40px rgba(232,147,79,0.3)',
            }}
          >
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)', marginBottom: '0.6rem' }}>
              {t('ctaKicker')}
            </p>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 0.85rem' }}>
              {t('ctaHeading')}
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.88)', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              {t('ctaBody')}
            </p>
            <Link
              href="/request-appointment"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                background: '#fff', color: '#E8934F', fontFamily: 'Nunito, sans-serif',
                fontWeight: 800, fontSize: '0.95rem', padding: '0.9rem 2.25rem',
                borderRadius: '100px', textDecoration: 'none',
                boxShadow: '0 6px 22px rgba(0,0,0,0.12)',
              }}
            >
              {t('ctaButton')}
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </SubPageLayout>
    </>
  )
}
