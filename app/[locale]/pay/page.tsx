import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import PayNowForm from './PayNowForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pay Online | Kids Dentist Grayslake, IL',
  description:
    'Securely pay your Kids Dentist Grayslake balance online. Encrypted payment processing — fast, private, and HIPAA-compliant.',
  openGraph: {
    title: 'Pay Online | Kids Dentist Grayslake, IL',
    description:
      'Pay your balance securely at Kids Dentist Grayslake. Encrypted online payments via HostedPayNow.',
    url: 'https://kidsdds.com/pay',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const TRUST_BADGES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    label: 'Secure & Encrypted',
    detail: 'All payments use 256-bit SSL encryption',
    color: '#4A90A4',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'HIPAA Compliant',
    detail: 'Your health and billing data is always protected',
    color: '#6BA899',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    label: 'Receipt Emailed',
    detail: 'A confirmation is sent to your email on file',
    color: '#78509b',
  },
]

export default function PayPage() {
  return (
    <SubPageLayout
      kicker="Secure Payment"
      title="Pay Your Bill Online"
      subtitle="Fast, secure, and private — just like the care we provide."
      gradient="blue"
    >
      <div className="mx-auto max-w-2xl px-4">

        {/* Main payment card */}
        <AnimatedSection>
          <div
            style={{
              background: '#fff',
              border: '1.5px solid rgba(74,144,164,0.14)',
              borderRadius: '2rem',
              padding: '3rem 2.5rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 40px rgba(74,144,164,0.10)',
              textAlign: 'center',
            }}
          >
            {/* Lock icon */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '1.4rem',
                background: 'linear-gradient(135deg, rgba(74,144,164,0.10), rgba(107,168,153,0.14))',
                border: '1.5px solid rgba(74,144,164,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.75rem',
                color: '#4A90A4',
              }}
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>

            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.25rem, 3vw, 1.65rem)',
                color: '#4A90A4',
                margin: '0 0 0.75rem',
                lineHeight: 1.25,
              }}
            >
              Secure Online Payment
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: '#6b7280',
                fontWeight: 500,
                maxWidth: '420px',
                margin: '0 auto 2.25rem',
              }}
            >
              Click below to be directed to our secure payment processor. You&apos;ll be able
              to enter your payment amount and billing information on the next screen.
            </p>

            <PayNowForm />

            <p
              style={{
                fontSize: '0.78rem',
                color: '#9ca3af',
                margin: '1.25rem 0 0',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              Powered by HostedPayNow · 256-bit SSL encryption
            </p>
          </div>
        </AnimatedSection>

        {/* Trust badges */}
        <AnimatedSection delay={0.08}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.875rem',
              marginBottom: '2rem',
            }}
            className="pay-badges-grid"
          >
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                style={{
                  background: `linear-gradient(135deg, ${badge.color}0D, ${badge.color}0A)`,
                  border: `1.5px solid ${badge.color}22`,
                  borderRadius: '1.25rem',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{ color: badge.color, display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}
                >
                  {badge.icon}
                </span>
                <p
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.82rem',
                    color: badge.color,
                    margin: '0 0 0.25rem',
                  }}
                >
                  {badge.label}
                </p>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    margin: 0,
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}
                >
                  {badge.detail}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Or call divider */}
        <AnimatedSection delay={0.12}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 1.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(74,144,164,0.12)' }} />
            <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600, whiteSpace: 'nowrap' }}>
              or pay by phone
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(74,144,164,0.12)' }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a
              href="tel:+18472231400"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.55rem',
                background: 'rgba(128,210,245,0.10)',
                border: '1.5px solid rgba(120,80,155,0.25)',
                color: '#78509b',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.85rem 2rem',
                borderRadius: '100px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Office · (847) 223-1400
            </a>
            <p style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 500, margin: '0.6rem 0 0' }}>
              Mon–Thu 9 am–5 pm · Fri 8 am–2 pm
            </p>
          </div>
        </AnimatedSection>

        {/* Questions callout */}
        <AnimatedSection delay={0.16}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(120,80,155,0.06), rgba(74,144,164,0.05))',
              border: '1.5px solid rgba(120,80,155,0.12)',
              borderRadius: '1.5rem',
              padding: '1.5rem 1.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <span style={{ color: '#78509b', flexShrink: 0, marginTop: '1px' }} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </span>
            <div>
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: '#78509b',
                  margin: '0 0 0.3rem',
                }}
              >
                Questions about your bill?
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, fontWeight: 500, lineHeight: 1.6 }}>
                Our team is happy to explain any charges, walk through your EOB, or set up a
                payment plan.{' '}
                <a href="/contact" style={{ color: '#4A90A4', fontWeight: 700, textDecoration: 'none' }}>
                  Send us a message →
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (max-width: 540px) {
          .pay-badges-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SubPageLayout>
  )
}
