import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Forms | Kids Dentist Grayslake, IL',
  description:
    'Complete your Kids Dentist Grayslake patient forms online or download PDFs before your appointment. New patient forms, medical history, and HIPAA consent available.',
  openGraph: {
    title: 'Patient Forms | Kids Dentist Grayslake, IL',
    description:
      'Fill out forms before your visit and skip the waiting room paperwork. Digital and PDF options available.',
    url: 'https://kidsdds.com/for-patients/patient-forms',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const PDF_FORMS = [
  {
    title: 'New Patient Information',
    description: 'Demographics, emergency contacts, and patient details.',
    icon: '📋',
    size: 'PDF — 2 pages',
  },
  {
    title: 'Medical & Dental History',
    description: "Your child's health conditions, medications, and dental history.",
    icon: '🏥',
    size: 'PDF — 3 pages',
  },
  {
    title: 'HIPAA Privacy Consent',
    description: 'Authorization for us to use and share health information.',
    icon: '🔒',
    size: 'PDF — 1 page',
  },
  {
    title: 'Financial Policy Agreement',
    description: 'Payment, insurance assignment, and billing authorization.',
    icon: '💳',
    size: 'PDF — 1 page',
  },
]

const TIPS = [
  'Complete forms at home so you can reference your child\'s medical records',
  'Bring your insurance card to every appointment',
  'Arrive 10 minutes early if you complete paper forms at the office',
  'Forms completed online are securely transmitted directly to our team',
]

export default function PatientFormsPage() {
  return (
    <SubPageLayout
      kicker="Save Time in the Waiting Room"
      title="Patient Forms"
      subtitle="Fill out forms at home and walk straight to your appointment."
      gradient="amber"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Intro */}
        <AnimatedSection>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.05rem',
              fontWeight: 500,
              color: '#6b7280',
              maxWidth: '560px',
              margin: '0 auto 4rem',
              lineHeight: 1.78,
            }}
          >
            We offer two ways to complete your paperwork — digital (fastest) or printable PDFs.
            Either way, completing forms before your visit means more time relaxing and less time
            at the front desk.
          </p>
        </AnimatedSection>

        {/* Split layout: Digital left / PDF right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Digital — Patient Manager */}
          <AnimatedSection direction="left">
            <div
              style={{
                background: 'linear-gradient(145deg, #4A90A4, #6BA899)',
                borderRadius: '2rem',
                padding: '2.5rem 2rem',
                color: '#fff',
                boxShadow: '0 12px 40px rgba(74,144,164,0.28)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative circle */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(255,255,255,0.18)',
                  borderRadius: '100px',
                  padding: '0.3rem 0.85rem',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'Nunito, sans-serif',
                  marginBottom: '1.25rem',
                }}
              >
                ✓ Recommended
              </div>
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)',
                  margin: '0 0 0.75rem',
                  lineHeight: 1.25,
                }}
              >
                Complete Forms Online
              </h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.72, opacity: 0.92, margin: '0 0 2rem', fontWeight: 500 }}>
                Our secure Patient Manager portal lets you fill out all required forms digitally —
                any time, any device. Information goes directly to our team and is ready before you
                arrive. Encrypted and HIPAA-compliant.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '1.75rem',
                }}
              >
                {['Secure, HIPAA-compliant encryption', 'Fills in on any device — phone, tablet, laptop', 'Saved automatically as you go', 'Received instantly by our team'].map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.85rem', fontWeight: 600, opacity: 0.92 }}>
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <a
                href="#patient-portal"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: '#fff',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.9rem 1.5rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Fill Out Forms Online
              </a>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  opacity: 0.7,
                  margin: '0.75rem 0 0',
                  fontWeight: 500,
                }}
              >
                Secure portal · Opens in new window
              </p>
            </div>
          </AnimatedSection>

          {/* Paper forms */}
          <AnimatedSection direction="right" delay={0.1}>
            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(74,144,164,0.12)',
                borderRadius: '2rem',
                padding: '2.5rem 2rem',
                boxShadow: '0 4px 24px rgba(74,144,164,0.07)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                  color: '#4A90A4',
                  margin: '0 0 0.5rem',
                }}
              >
                Download &amp; Print
              </h2>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  fontWeight: 500,
                  margin: '0 0 1.75rem',
                  lineHeight: 1.6,
                }}
              >
                Prefer paper? Print, complete, and bring completed forms to your appointment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {PDF_FORMS.map((form) => (
                  <a
                    key={form.title}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      background: 'rgba(74,144,164,0.04)',
                      border: '1.5px solid rgba(74,144,164,0.10)',
                      borderRadius: '1.1rem',
                      padding: '1rem 1.1rem',
                      textDecoration: 'none',
                      transition: 'background 0.18s, border-color 0.18s',
                    }}
                    className="pdf-row"
                  >
                    <span style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
                      {form.icon}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: 'Nunito, sans-serif',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          color: '#3D3D3D',
                          margin: '0 0 0.2rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {form.title}
                      </p>
                      <p style={{ fontSize: '0.78rem', color: '#9ca3af', margin: 0, fontWeight: 500 }}>
                        {form.description}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem', flexShrink: 0 }}>
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#4A90A4"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          color: '#9ca3af',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {form.size}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '0.8rem',
                  color: '#9ca3af',
                  marginTop: '1.25rem',
                  fontWeight: 500,
                }}
              >
                Adobe Reader required · Forms are for print only
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Tips */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(217,119,6,0.05), rgba(244,199,127,0.10))',
              border: '1.5px solid rgba(217,119,6,0.12)',
              borderRadius: '1.75rem',
              padding: '2rem 2.25rem',
              marginBottom: '4rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: '1rem',
                color: '#D97706',
                margin: '0 0 1.1rem',
              }}
            >
              Tips for a Smooth Check-In
            </h3>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '0.65rem',
              }}
            >
              {TIPS.map((tip) => (
                <li
                  key={tip}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.55rem',
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#D97706',
                      flexShrink: 0,
                      marginTop: '7px',
                    }}
                  />
                  <span style={{ lineHeight: 1.6 }}>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#4A90A4',
                marginBottom: '1.25rem',
              }}
            >
              Have questions about which forms to complete? We are happy to help.
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
                Request Appointment
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
                Call (847) 223-1400
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .pdf-row:hover {
          background: rgba(74,144,164,0.07);
          border-color: rgba(74,144,164,0.22);
        }
      `}</style>
    </SubPageLayout>
  )
}
