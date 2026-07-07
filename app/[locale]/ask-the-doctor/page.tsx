import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import AskDoctorForm from './AskDoctorForm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ask the Doctor | Kids Dentist Grayslake, IL',
  description:
    'Send a direct question to our pediatric dentists at Kids Dentist Grayslake. General dental health questions answered by Dr. Gutierrez, Dr. Rutcosky, Dr. Alrayyes, and Dr. Compton.',
  alternates: { canonical: 'https://www.kidsdds.com/ask-the-doctor' },
  openGraph: {
    title: 'Ask the Doctor | Kids Dentist Grayslake, IL',
    description:
      'Have a question about your child\'s dental health? Send it directly to our team of pediatric specialists in Grayslake, IL.',
    url: 'https://www.kidsdds.com/ask-the-doctor',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AskTheDoctorPage() {
  return (
    <SubPageLayout
      title="Ask the Doctor"
      subtitle="Have a specific question about your child's dental health? Send our pediatric dentists a direct message."
      kicker="Direct Doctor Access"
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
              Medical Disclaimer
            </p>
            <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
              This form is for general dental inquiries only and is not monitored in real time.{' '}
              <strong style={{ color: 'rgba(185,28,28,0.85)' }}>
                If your child is experiencing a life-threatening medical emergency, please call 911 immediately.
              </strong>{' '}
              For urgent dental concerns, call us directly at{' '}
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
            Back to FAQ
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
                  How it works
                </p>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6b7280', lineHeight: 1.68, margin: 0 }}>
                  Fill out the secure form below. Your question goes directly to our clinical specialists, and we aim to respond within one business day. For appointment scheduling or insurance questions, please use the{' '}
                  <Link href="/request-appointment" style={{ color: '#4A90A4', fontWeight: 700 }}>
                    appointment request form
                  </Link>
                  {' '}or contact the front desk directly.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.08}>
          <div
            style={{
              background: 'rgba(253,252,248,0.85)',
              border: '1.5px solid rgba(74,144,164,0.12)',
              borderRadius: '2rem',
              padding: '2.5rem 2rem',
              boxShadow: '0 6px 28px rgba(74,144,164,0.08)',
              marginBottom: '2rem',
            }}
          >
            <AskDoctorForm />
          </div>
        </AnimatedSection>

      </div>
    </SubPageLayout>
  )
}
