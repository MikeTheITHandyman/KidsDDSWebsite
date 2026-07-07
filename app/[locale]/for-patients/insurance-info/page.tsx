import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Insurance & Financing | Kids Dentist Grayslake, IL',
  description:
    'Kids Dentist Grayslake is in-network with Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, and United Healthcare. Out-of-network plans welcome. Learn about financing options.',
  openGraph: {
    title: 'Insurance & Financing | Kids Dentist Grayslake, IL',
    description:
      'We accept most major PPO plans. Our team handles the paperwork - you focus on your child.',
    url: 'https://kidsdds.com/for-patients/insurance-info',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const IN_NETWORK_PROVIDERS = [
  { name: 'Aetna Dental' },
  { name: 'Cigna Dental' },
  { name: 'Delta Dental Premier' },
  { name: 'Guardian Dental' },
  { name: 'Lincoln Financial' },
  { name: 'Principal Dental' },
  { name: 'United Healthcare Dental' },
]

export default async function InsuranceInfoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('insurancePage')

  const OUT_OF_NETWORK_POINTS = [
    t('outOfNetwork0'),
    t('outOfNetwork1'),
    t('outOfNetwork2'),
    t('outOfNetwork3'),
  ]

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="green"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* In-network provider cards */}
        <AnimatedSection>
          <h2
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              color: '#4A90A4',
              textAlign: 'center',
              margin: '0 0 1.75rem',
            }}
          >
            {t('inNetworkHeading')}
          </h2>
          <div
            className="insurance-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            {IN_NETWORK_PROVIDERS.map((provider) => (
              <div
                key={provider.name}
                className="insurance-card"
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(74,144,164,0.18)',
                  borderRadius: '1.75rem',
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 18px rgba(74,144,164,0.07)',
                  transition: 'box-shadow 0.22s ease, transform 0.22s ease',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '1rem',
                    background: 'linear-gradient(135deg, #dcf0ee, #b8e0da)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0"/>
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.95rem',
                    color: '#1f2937',
                    margin: '0 0 0.4rem',
                    lineHeight: 1.3,
                  }}
                >
                  {provider.name}
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(74,144,164,0.10)',
                    borderRadius: '100px',
                    padding: '0.15rem 0.7rem',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#4A90A4',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  {t('inNetworkBadge')}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: '#9ca3af',
              marginBottom: '4rem',
              fontWeight: 500,
            }}
          >
            {t('dontSeePrefix')}{' '}
            <Link
              href="tel:+18472231400"
              style={{ color: '#4A90A4', fontWeight: 700, textDecoration: 'none' }}
            >
              (847) 223-1400
            </Link>
          </p>
        </AnimatedSection>

        {/* Out-of-network */}
        <AnimatedSection>
          <div
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              marginBottom: '4rem',
            }}
          >
            {/* Out-of-network card */}
            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(74,144,164,0.12)',
                borderRadius: '1.75rem',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(74,144,164,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.5rem' }} aria-hidden="true">🤝</span>
                <h3
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    color: '#4A90A4',
                    margin: 0,
                  }}
                >
                  {t('outOfNetworkHeading')}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.72, color: '#6b7280', marginBottom: '1.25rem' }}>
                {t('outOfNetworkBody')}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                {OUT_OF_NETWORK_POINTS.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.87rem',
                      color: '#6b7280',
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#6BA899',
                        flexShrink: 0,
                        marginTop: '6px',
                      }}
                    />
                    <span style={{ lineHeight: 1.6, fontWeight: 500 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CareCredit card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                border: '1.5px solid rgba(217,119,6,0.15)',
                borderRadius: '1.75rem',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(217,119,6,0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.5rem' }} aria-hidden="true">💳</span>
                <h3
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    color: '#D97706',
                    margin: 0,
                  }}
                >
                  {t('financingHeading')}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.72, color: '#6b7280', marginBottom: '1.5rem' }}>
                {t('financingBody')}
              </p>
              <div
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ fontSize: '1.1rem' }} aria-hidden="true">✓</span>
                <div>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.875rem', color: '#D97706', margin: 0 }}>
                    {t('financingCardTitle')}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0, fontWeight: 500 }}>
                    {t('financingCardBody')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Uninsured section */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(120,80,155,0.06), rgba(74,144,164,0.06))',
              border: '1.5px solid rgba(120,80,155,0.14)',
              borderRadius: '1.75rem',
              padding: '2rem',
              marginBottom: '4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
            }}
          >
            <span style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">💜</span>
            <div>
              <h3
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  color: '#78509b',
                  margin: '0 0 0.5rem',
                }}
              >
                {t('uninsuredHeading')}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.72, color: '#6b7280', margin: 0, fontWeight: 500 }}>
                {t('uninsuredBody')}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#4A90A4',
                marginBottom: '1.25rem',
              }}
            >
              {t('ctaText')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 22px rgba(232,147,79,0.35)',
                }}
              >
                {t('ctaCall')}
              </Link>
              <Link
                href="/for-patients/patient-forms"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '2px solid rgba(74,144,164,0.3)',
                }}
              >
                {t('ctaForms')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .insurance-card:hover {
          box-shadow: 0 8px 28px rgba(74,144,164,0.16) !important;
          transform: translateY(-4px) !important;
        }
      `}</style>
    </SubPageLayout>
  )
}
