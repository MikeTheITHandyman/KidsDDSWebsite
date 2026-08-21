import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'For Patients | Kids Dentist Grayslake, IL',
  description:
    'Resources for Kids Dentist patients and families in Grayslake, IL: first visit prep, patient forms, and insurance & financing information.',
  alternates: { canonical: 'https://www.kidsdds.com/for-patients' },
  openGraph: {
    title: 'For Patients | Kids Dentist Grayslake, IL',
    description:
      'Everything your family needs before, during, and after every visit: first visit prep, patient forms, and insurance information.',
    url: 'https://www.kidsdds.com/for-patients',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const CARD_META = [
  { href: '/for-patients/child-first-visit', gradient: 'linear-gradient(135deg, #DBEAFE, #BAE6FD)', accentColor: '#4A90A4', icon: '👶' },
  { href: '/for-patients/patient-forms', gradient: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)', accentColor: '#6BA899', icon: '📋' },
  { href: '/for-patients/insurance-info', gradient: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', accentColor: '#D97706', icon: '💳' },
]

export default async function ForPatientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('forPatientsPage')

  const CARDS = CARD_META.map((meta, i) => ({
    ...meta,
    title: t(`card${i}Title`),
    tagline: t(`card${i}Tagline`),
    description: t(`card${i}Desc`),
  }))

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <div className="mx-auto max-w-6xl px-4">

        {/* Resource cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}
        >
          {CARDS.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.07}>
              <Link href={card.href} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                <div
                  className="patient-card"
                  style={{
                    background: card.gradient,
                    borderRadius: '1.75rem',
                    padding: '2rem 1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '2.25rem', lineHeight: 1 }} aria-hidden="true">
                    {card.icon}
                  </span>
                  <div>
                    <h2
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 900,
                        fontSize: '1.2rem',
                        color: card.accentColor,
                        margin: '0 0 0.35rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {card.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        color: card.accentColor,
                        margin: 0,
                        opacity: 0.8,
                      }}
                    >
                      {card.tagline}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.68,
                      color: '#6b7280',
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {card.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: card.accentColor,
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    {t('learnMore')}
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#4A90A4',
                marginBottom: '1.25rem',
              }}
            >
              {t('bottomCtaText')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
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
                {t('ctaAppointment')}
              </Link>
              <Link
                href="tel:+18472231400"
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
                {t('ctaCall')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .patient-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .patient-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.10);
        }
      `}</style>
    </SubPageLayout>
  )
}
