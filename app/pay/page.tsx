import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pay Online | Kids Dentist Grayslake, IL',
  description:
    'Pay your Kids Dentist Grayslake bill securely. Our online portal is being upgraded — call (847) 223-1400 to pay by phone in the meantime.',
  openGraph: {
    title: 'Pay Online | Kids Dentist Grayslake, IL',
    description:
      'Securely pay your balance at Kids Dentist Grayslake. Call (847) 223-1400 for phone payments.',
    url: 'https://kidsdds.com/pay',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const TRUST_BADGES = [
  { icon: '🔒', label: 'Secure Transaction', detail: 'All payments processed over encrypted connections' },
  { icon: '🏥', label: 'HIPAA Compliant', detail: 'Your health and billing data is always protected' },
  { icon: '🧾', label: 'Receipt Provided', detail: 'A confirmation is sent to your email on file' },
]

export default function PayPage() {
  return (
    <SubPageLayout
      kicker="Secure Payment"
      title="Pay Your Bill Online"
      subtitle="Fast, secure, and private — just like the care we provide."
      gradient="blue"
    >
      <div className="mx-auto max-w-3xl px-4">

        {/* Main card */}
        <AnimatedSection>
          <div
            style={{
              background: '#fff',
              border: '1.5px solid rgba(74,144,164,0.14)',
              borderRadius: '2rem',
              padding: '3rem 2.5rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 32px rgba(74,144,164,0.09)',
              textAlign: 'center',
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '1.4rem',
                background: 'linear-gradient(135deg, rgba(74,144,164,0.10), rgba(107,168,153,0.14))',
                border: '1.5px solid rgba(74,144,164,0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.75rem',
              }}
              aria-hidden="true"
            >
              🔧
            </div>

            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.25rem, 3vw, 1.65rem)',
                color: '#4A90A4',
                margin: '0 0 1rem',
                lineHeight: 1.25,
              }}
            >
              Portal Upgrade in Progress
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.78,
                color: '#6b7280',
                fontWeight: 500,
                maxWidth: '480px',
                margin: '0 auto 2.25rem',
              }}
            >
              We are currently upgrading our online payment portal to serve you better.
              In the meantime, please call our front desk at{' '}
              <strong style={{ color: '#4A90A4' }}>(847) 223-1400</strong> to securely
              pay your balance over the phone. Our team is available Monday through
              Friday, 8:00 am – 5:00 pm.
            </p>

            {/* CTA button */}
            <a
              href="tel:+18472231400"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                color: '#fff',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '0.95rem 2.25rem',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(232,147,79,0.36)',
                marginBottom: '1.25rem',
              }}
            >
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Office to Pay — (847) 223-1400
            </a>

            <p
              style={{
                fontSize: '0.8rem',
                color: '#9ca3af',
                margin: 0,
                fontWeight: 500,
              }}
            >
              Mon – Fri · 8:00 am – 5:00 pm
            </p>
          </div>
        </AnimatedSection>

        {/* Trust badges */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                style={{
                  background: 'linear-gradient(135deg, rgba(74,144,164,0.05), rgba(107,168,153,0.06))',
                  border: '1.5px solid rgba(74,144,164,0.10)',
                  borderRadius: '1.25rem',
                  padding: '1.25rem 1.1rem',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '0.5rem' }} aria-hidden="true">
                  {badge.icon}
                </span>
                <p
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.875rem',
                    color: '#4A90A4',
                    margin: '0 0 0.25rem',
                  }}
                >
                  {badge.label}
                </p>
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: '#9ca3af',
                    margin: 0,
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  {badge.detail}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Questions callout */}
        <AnimatedSection delay={0.15}>
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
            <span style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">💬</span>
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
                Our front desk team is happy to walk through any charges, explain your insurance
                explanation of benefits, or set up a payment plan. Just give us a call or{' '}
                <a
                  href="/contact"
                  style={{ color: '#4A90A4', fontWeight: 700, textDecoration: 'none' }}
                >
                  send us a message →
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </SubPageLayout>
  )
}
