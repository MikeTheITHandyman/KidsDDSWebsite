import ReferralForm from './ReferralForm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doctor & School Referral Portal | Kids Dentist Grayslake, IL',
  description:
    'Secure, zero-friction pediatric dental referrals for Lake County healthcare providers, orthodontists, pediatricians, and educational partners. HIPAA-compliant transmission.',
  openGraph: {
    title: 'Doctor & School Referral Portal | Kids Dentist Grayslake, IL',
    description:
      'Submit a patient referral to Kids Dentist Grayslake. Fast-track scheduling, HIPAA-compliant intake, and same-day coordinator response.',
    url: 'https://kidsdds.com/referral-portal',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kidsdds.com/referral-portal',
  },
}

const NEXT_STEPS = [
  {
    n: '1',
    heading: 'Referral received within minutes',
    body: 'Your submission is transmitted securely and enters our scheduling queue immediately.',
  },
  {
    n: '2',
    heading: 'Family contacted within one business day',
    body: 'Our scheduling coordinator reaches out to confirm the appointment and gather insurance information.',
  },
  {
    n: '3',
    heading: 'Consultation summary available on request',
    body: 'We can send a post-visit summary back to your practice for continuity of care.',
  },
]

export default function ReferralPortalPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FAFAF8',
        paddingTop: '2.5rem',
        paddingBottom: '5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1060px',
          margin: '0 auto',
          padding: '0 1.25rem',
        }}
      >

        {/* ── Page header ───────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

          {/* Kicker badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(120,80,155,0.07)',
              border: '1.5px solid rgba(120,80,155,0.16)',
              borderRadius: '100px',
              padding: '0.38rem 1rem',
              marginBottom: '1.1rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#78509b',
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.70rem',
                letterSpacing: '0.11em',
                textTransform: 'uppercase',
                color: '#78509b',
              }}
            >
              For Healthcare Providers
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.8vw, 2.55rem)',
              color: '#3D3D3D',
              margin: '0 0 0.75rem',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
            }}
          >
            Doctor &amp; School Referral Portal
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              fontWeight: 500,
              margin: '0 auto',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Secure, zero-friction pediatric dental referrals for Lake County healthcare
            providers, orthodontists, and educational partners.
          </p>
        </div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 300px',
            gap: '1.75rem',
            alignItems: 'start',
          }}
          className="ref-portal-grid"
        >
          {/* ── Left: intake form ──────────────────────────────────────── */}
          <ReferralForm />

          {/* ── Right: sidebar ─────────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* What happens next */}
            <div
              style={{
                background: 'linear-gradient(145deg, #78509b, #4A90A4)',
                borderRadius: '1.75rem',
                padding: '2rem',
                color: '#fff',
                boxShadow: '0 8px 30px rgba(120,80,155,0.22)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '1rem',
                  margin: '0 0 0.3rem',
                  lineHeight: 1.3,
                }}
              >
                What happens next
              </h2>
              <p
                style={{
                  fontSize: '0.80rem',
                  opacity: 0.78,
                  margin: '0 0 1.5rem',
                  fontWeight: 500,
                  lineHeight: 1.55,
                }}
              >
                Our process from submission to scheduled visit.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {NEXT_STEPS.map((step) => (
                  <div
                    key={step.n}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.9rem',
                    }}
                  >
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.18)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 900,
                        fontSize: '0.78rem',
                        color: '#fff',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      {step.n}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                          fontWeight: 800,
                          fontSize: '0.875rem',
                          margin: '0 0 0.2rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {step.heading}
                      </p>
                      <p
                        style={{
                          fontSize: '0.78rem',
                          opacity: 0.80,
                          margin: 0,
                          fontWeight: 500,
                          lineHeight: 1.55,
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Provider coordination card */}
            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(120,80,155,0.12)',
                borderRadius: '1.5rem',
                padding: '1.5rem',
                boxShadow: '0 4px 16px rgba(74,144,164,0.06)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  color: '#78509b',
                  margin: '0 0 0.5rem',
                }}
              >
                Need to speak with us directly?
              </p>
              <p
                style={{
                  fontSize: '0.80rem',
                  color: '#9ca3af',
                  margin: '0 0 0.9rem',
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                Call our office and mention you are a referring provider. We will connect
                you with our scheduling coordinator.
              </p>
              <a
                href="tel:+18472231400"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  marginBottom: '0.3rem',
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (847) 223-1400
              </a>
              <p
                style={{
                  fontSize: '0.76rem',
                  color: '#9ca3af',
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Mon–Thu 9 am–5 pm · Fri 8 am–2 pm
              </p>
            </div>

            {/* Patient-facing link */}
            <div
              style={{
                background: 'rgba(74,144,164,0.05)',
                border: '1px solid rgba(74,144,164,0.12)',
                borderRadius: '1.25rem',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.80rem',
                  color: '#4A90A4',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Sending a family our way?
                <br />
                <span style={{ fontWeight: 500, color: '#9ca3af' }}>
                  Share our appointment page.
                </span>
              </p>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  border: '1.5px solid rgba(74,144,164,0.28)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '100px',
                }}
                aria-label="Go to patient appointment request page"
              >
                Book now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .ref-portal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
