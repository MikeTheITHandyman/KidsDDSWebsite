import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency Pediatric Dentistry',
  description: 'Same-day emergency dental care for children in Grayslake, IL. Knocked-out teeth, severe toothaches, broken teeth, dental injuries, and abscesses treated urgently.',
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
  serviceType: 'Emergency Pediatric Dentistry',
  areaServed: { '@type': 'City', name: 'Grayslake', containedInPlace: { '@type': 'State', name: 'Illinois' } },
  url: 'https://kidsdds.com/services/emergency',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Emergency Treatments',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Knocked-Out Tooth Treatment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Severe Toothache Relief' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chipped or Broken Tooth Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Abscess Treatment' } },
    ],
  },
}

export const metadata: Metadata = {
  title: 'Emergency Pediatric Dentist Grayslake, IL | Same-Day Kids Dentist',
  description:
    'Same-day emergency dental care for children near Waukegan, Libertyville, Vernon Hills, Mundelein, and Lake Forest. Knocked-out teeth, toothaches, broken teeth — call (847) 223-1400 now. Kids Dentist Grayslake, IL.',
  alternates: { canonical: 'https://www.kidsdds.com/services/emergency' },
  openGraph: {
    title: 'Emergency Pediatric Dentist Grayslake, IL | Same-Day Kids Dentist',
    description:
      "Dental emergencies don't wait. Kids Dentist Grayslake holds urgent slots every day for Lake County children in pain or after dental trauma.",
    url: 'https://www.kidsdds.com/services/emergency',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const EMERGENCIES = [
  { icon: '🦷', label: 'Knocked-Out Tooth', urgent: true },
  { icon: '😣', label: 'Severe Toothache', urgent: true },
  { icon: '💥', label: 'Chipped or Broken Tooth', urgent: false },
  { icon: '🩸', label: 'Dental Injury or Trauma', urgent: true },
  { icon: '🦠', label: 'Swelling or Abscess', urgent: true },
  { icon: '🧵', label: 'Lost Filling or Crown', urgent: false },
  { icon: '😬', label: 'Broken Braces Wire', urgent: false },
  { icon: '🤕', label: 'Jaw Pain or Injury', urgent: true },
]

const STEPS = [
  {
    step: '1',
    title: 'Call Us First',
    body: 'Text or call (847) 223-1400 immediately. Our team will assess the situation over the phone, give you first-aid guidance, and get your child into the next available same-day slot. Do not wait to see if it gets better.',
    gradientFrom: '#FFE4E6',
    gradientTo: '#FECDD3',
    accentColor: '#E97D63',
  },
  {
    step: '2',
    title: 'Get First-Aid Guidance',
    body: 'Depending on the injury, our team will walk you through what to do before you arrive - whether that means rinsing a knocked-out tooth in milk, applying cold pressure to reduce swelling, or simply keeping your child calm. We prepare you before you walk in the door.',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    accentColor: '#D97706',
  },
  {
    step: '3',
    title: 'Come Straight In',
    body: 'We hold urgent slots every single day. When you arrive, you will not wait behind routine appointments. Your child will be seen, assessed, and treated as quickly and comfortably as possible. We handle the paperwork - you focus on your child.',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
    accentColor: '#6BA899',
  },
]

export default function EmergencyDentalCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SubPageLayout
      title="Emergency Dental Care"
      subtitle="When your child is in pain or has had a dental injury, we will get them in the same day. Call us now."
      kicker="Same-Day Available"
      gradient="blue"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* 911 medical emergency caveat */}
        <div
          role="alert"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            background: 'linear-gradient(135deg, rgba(239,68,68,0.07), rgba(252,165,165,0.09))',
            border: '1.5px solid rgba(239,68,68,0.28)',
            borderRadius: '1.25rem',
            padding: '1rem 1.4rem',
            marginBottom: '1.75rem',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(239,68,68,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1rem',
              marginTop: '1px',
            }}
            aria-hidden="true"
          >
            🚨
          </div>
          <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: 'rgba(185,28,28,0.88)', fontFamily: 'Nunito, sans-serif' }}>
              Life-threatening emergency?
            </strong>{' '}
            If your child is experiencing a life-threatening medical emergency, please{' '}
            <strong style={{ color: 'rgba(185,28,28,0.88)' }}>call 911 immediately.</strong>{' '}
            This page covers dental emergencies — we hold same-day dental slots, but we are not a substitute for emergency medical services.
          </p>
        </div>

        {/* Urgent CTA at top */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #E97D63, #E8934F)',
              borderRadius: '1.5rem',
              padding: '1.75rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '4rem',
              boxShadow: '0 8px 32px rgba(233,125,99,0.35)',
            }}
          >
            <div>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.05rem', color: '#fff', margin: '0 0 0.2rem' }}>
                Dental emergency? Don&apos;t wait.
              </p>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.88)', margin: 0 }}>
                We hold same-day urgent slots every single day.
              </p>
            </div>
            <a
              href="tel:+18472231400"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#fff', color: '#E97D63', fontFamily: 'Nunito, sans-serif',
                fontWeight: 900, fontSize: '1.05rem', padding: '0.85rem 2rem',
                borderRadius: '100px', textDecoration: 'none', flexShrink: 0,
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 9.8 19.79 19.79 0 0 1 1 1.18 2 2 0 0 1 2.82 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
              </svg>
              Text/Call us: (847) 223-1400
            </a>
          </div>
        </AnimatedSection>

        {/* What counts as an emergency */}
        <AnimatedSection delay={0.05}>
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-kicker">Is This an Emergency?</span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 0.5rem', lineHeight: 1.2 }}>
                When in Doubt, Call Us
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.7, fontWeight: 500, maxWidth: '520px', margin: '0 auto' }}>
                If your child is in pain or something looks wrong, that is reason enough to call. We would rather hear from you and help over the phone than have you wait it out.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.85rem',
              }}
              className="emergency-chips-grid"
            >
              {EMERGENCIES.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: item.urgent
                      ? 'linear-gradient(135deg, rgba(233,125,99,0.08), rgba(232,147,79,0.08))'
                      : 'linear-gradient(135deg, rgba(74,144,164,0.06), rgba(107,168,153,0.06))',
                    border: `1.5px solid ${item.urgent ? 'rgba(233,125,99,0.2)' : 'rgba(74,144,164,0.15)'}`,
                    borderRadius: '1rem',
                    padding: '1.1rem 1rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }} aria-hidden="true">{item.icon}</div>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#4b5563', lineHeight: 1.35 }}>{item.label}</span>
                  {item.urgent && (
                    <div style={{ marginTop: '0.4rem' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 900, color: '#E97D63', fontFamily: 'Nunito, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Urgent</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* What to do - 3 steps alternating */}
        <AnimatedSection delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-kicker">What Happens Next</span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 0', lineHeight: 1.2 }}>
              From First Call to Treated
            </h2>
          </div>
        </AnimatedSection>

        {STEPS.map((step, i) => (
          <AnimatedSection key={step.step} delay={i * 0.07}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: '3.5rem',
              }}
              className="service-detail-grid"
            >
              {i % 2 !== 0 && (
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    borderRadius: '1.5rem',
                    background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
              )}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1rem',
                    color: step.accentColor, flexShrink: 0,
                  }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: 'var(--brand-600)', margin: 0 }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.975rem', lineHeight: 1.78, fontWeight: 500, margin: 0 }}>
                  {step.body}
                </p>
              </div>
              {i % 2 === 0 && (
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    borderRadius: '1.5rem',
                    background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          </AnimatedSection>
        ))}

        {/* Knocked-out tooth tip */}
        <AnimatedSection delay={0.08}>
          <div
            style={{
              background: '#fff',
              border: '2px solid rgba(233,125,99,0.25)',
              borderRadius: '1.5rem',
              padding: '2rem 2.25rem',
              marginBottom: '4rem',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '1.5rem',
              alignItems: 'start',
            }}
            className="tip-grid"
          >
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFE4E6, #FECDD3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', flexShrink: 0,
            }}>
              🦷
            </div>
            <div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#E97D63', margin: '0 0 0.6rem' }}>
                Knocked-Out Tooth: Act Within 30 Minutes
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.925rem', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                Find the tooth and hold it by the crown - the top part, not the root. Gently rinse it with cold water. If possible, carefully reinsert it into the socket and have your child hold it gently in place. If you cannot reinsert it, place the tooth in a cup of cold milk and call us immediately. Time is critical - the sooner we see your child, the better the chance of saving the tooth.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              background: 'linear-gradient(135deg, #4A90A4, #6BA899)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              textAlign: 'center',
              marginBottom: '2rem',
              boxShadow: '0 12px 40px rgba(74,144,164,0.22)',
            }}
          >
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 0.85rem' }}>
              New patients welcome for emergencies.
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.88)', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              You do not need to be an existing patient. If your child is in pain, call us and we will help.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  background: '#E8934F', color: '#fff', fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800, fontSize: '0.95rem', padding: '0.9rem 2rem',
                  borderRadius: '100px', textDecoration: 'none',
                  boxShadow: '0 6px 22px rgba(232,147,79,0.45)',
                }}
              >
                Call Now: (847) 223-1400
              </a>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  background: 'rgba(255,255,255,0.15)', color: '#fff',
                  fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem',
                  padding: '0.9rem 2rem', borderRadius: '100px', textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                }}
              >
                Request an Appointment
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
          .emergency-chips-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tip-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .emergency-chips-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </SubPageLayout>
    </>
  )
}
