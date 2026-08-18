import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import AskQuestionForm from './AskQuestionForm'
import SaveContactQR from '@/components/SaveContactQR'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Ask Us a Question | Kids Dentist Grayslake, IL',
  description:
    'Send a direct question to our pediatric dentists at Kids Dentist Grayslake. General dental health questions answered by Dr. Gutierrez, Dr. Rutcosky, Dr. Alrayyes, and Dr. Compton.',
  alternates: { canonical: 'https://www.kidsdds.com/ask-us-a-question' },
  openGraph: {
    title: 'Ask Us a Question | Kids Dentist Grayslake, IL',
    description:
      'Have a question about your child\'s dental health? Send it directly to our team of pediatric specialists in Grayslake, IL.',
    url: 'https://www.kidsdds.com/ask-us-a-question',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function AskQuestionPage() {
  const t = await getTranslations('askDoctorPage')
  return (
    <SubPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      kicker={t('kicker')}
      gradient="blue"
    >
      <div className="mx-auto max-w-2xl px-4">

        {/* Medical emergency disclaimer */}
        <div
          role="alert"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            background: 'linear-gradient(135deg, rgba(239,68,68,0.07), rgba(252,165,165,0.09))',
            border: '1.5px solid rgba(239,68,68,0.28)',
            borderRadius: '1.25rem',
            padding: '1.1rem 1.4rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(239,68,68,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.1rem',
              marginTop: '1px',
            }}
            aria-hidden="true"
          >
            🚨
          </div>
          <div>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: '0.82rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(185,28,28,0.9)',
                margin: '0 0 0.3rem',
              }}
            >
              {t('disclaimerHeading')}
            </p>
            <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
              {t('disclaimerBody1')}{' '}
              <strong style={{ color: 'rgba(185,28,28,0.85)' }}>
                {t('disclaimerBold')}
              </strong>{' '}
              {t('disclaimerBody2')}{' '}
              <a href="tel:+18472231400" style={{ color: '#4A90A4', fontWeight: 800 }}>
                (847) 223-1400
              </a>
              .
            </p>
          </div>
        </div>

        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/faq"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#4A90A4',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToFaq')}
          </Link>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(120,80,155,0.06), rgba(74,144,164,0.06))',
              border: '1.5px solid rgba(120,80,155,0.15)',
              borderRadius: '1.5rem',
              padding: '1.75rem 2rem',
              marginBottom: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.5rem',
                }}
                aria-hidden="true"
              >
                💬
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <p
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: '#78509b',
                    margin: '0 0 0.4rem',
                  }}
                >
                  {t('howItWorksHeading')}
                </p>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6b7280', lineHeight: 1.68, margin: 0 }}>
                  {t('howItWorksPrefix')}{' '}
                  <Link href="/request-appointment" style={{ color: '#4A90A4', fontWeight: 700 }}>
                    {t('appointmentRequestFormLink')}
                  </Link>
                  {' '}{t('howItWorksSuffix')}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.08}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 260px',
              gap: '2rem',
              alignItems: 'start',
              marginBottom: '2rem',
            }}
            className="ask-form-grid"
          >
            <div
              style={{
                background: 'rgba(253,252,248,0.85)',
                border: '1.5px solid rgba(74,144,164,0.12)',
                borderRadius: '2rem',
                padding: '2.5rem 2rem',
                boxShadow: '0 6px 28px rgba(74,144,164,0.08)',
              }}
            >
              <AskQuestionForm />
            </div>

            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(120,80,155,0.15)',
                borderRadius: '1.5rem',
                padding: '1.75rem',
                boxShadow: '0 4px 16px rgba(74,144,164,0.06)',
              }}
            >
              <SaveContactQR size={120} />
            </div>
          </div>
          <style>{`
            @media (max-width: 780px) {
              .ask-form-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </AnimatedSection>

      </div>
    </SubPageLayout>
  )
}
