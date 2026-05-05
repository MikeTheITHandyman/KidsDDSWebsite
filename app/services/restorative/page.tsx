import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restorative Dentistry for Kids | Kids Dentist Grayslake, IL',
  description:
    'Gentle restorative dental care for children in Grayslake, IL - tooth-colored fillings, pediatric crowns, pulp therapy, and extractions. Early treatment protects your child\'s smile.',
  openGraph: {
    title: 'Restorative Dentistry for Kids | Kids Dentist Grayslake, IL',
    description:
      'A small cavity treated today is a filling. Left untreated, it becomes a crown or worse. Kids Dentist Grayslake treats problems at the earliest possible stage.',
    url: 'https://kidsdds.com/services/restorative',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const TREATMENTS = [
  {
    icon: '🦷',
    title: 'Tooth-Colored Fillings',
    body: 'When a cavity is caught early, a tooth-colored composite filling is all that\'s needed. We use composite resin that matches your child\'s natural tooth shade - no silver amalgam, no visible metal. The procedure is quick, gentle, and often surprises both kids and parents with how manageable it is.',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
    accentColor: '#4A90A4',
  },
  {
    icon: '👑',
    title: 'Pediatric Crowns',
    body: 'When decay is more advanced or a tooth is significantly weakened, a crown provides full coverage protection. We use tooth-colored zirconia crowns for front teeth and durable stainless steel crowns for back molars - both designed to last until the baby tooth naturally falls out.',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
    accentColor: '#6BA899',
  },
  {
    icon: '🩺',
    title: 'Pulp Therapy',
    body: 'When decay reaches the nerve of a baby tooth, pulp therapy removes the infected tissue to save the tooth. Preserving baby teeth is important: they hold space for permanent teeth and are essential for proper speech and chewing development. The procedure is gentler than it sounds.',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    accentColor: '#D97706',
  },
  {
    icon: '✂️',
    title: 'Tooth Extractions',
    body: 'Sometimes a tooth is too damaged to save, or a baby tooth needs to come out to make room for an erupting permanent tooth. When an extraction is necessary, we perform it with care, precision, and appropriate anesthesia - ensuring your child feels nothing beyond a light pressure sensation.',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
    accentColor: '#7C3AED',
  },
]

export default function RestorativeDentistryPage() {
  return (
    <SubPageLayout
      title="Restorative Dentistry"
      subtitle="Gentle, precise treatment that repairs damage, relieves pain, and protects your child's smile for years to come."
      kicker="Fix It Early"
      gradient="amber"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/services"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2.5rem' }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Services
          </Link>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="section-kicker">Why Early Treatment Matters</span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 1.1rem', lineHeight: 1.2 }}>
              A Small Cavity Is a Filling. Not for Long.
            </h2>
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: 500, color: '#6b7280', maxWidth: '640px', margin: '0 auto 1rem', lineHeight: 1.78 }}>
            Untreated cavities in baby teeth can cause severe pain, lead to dangerous infections, and directly affect the development and spacing of the permanent teeth growing underneath. Baby teeth are not just placeholders - they support speech, nutrition, and jaw development.
          </p>
          <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 500, color: '#6b7280', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.78 }}>
            We will always be honest about where your child stands - and we treat problems at the earliest possible stage. Our goal is to keep treatment as simple and conservative as possible.
          </p>
        </AnimatedSection>

        {/* Treatment options */}
        <AnimatedSection delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-kicker">Treatment Options</span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: 'var(--brand-600)', margin: '0.5rem 0 0', lineHeight: 1.2 }}>
              The Right Treatment for Every Situation
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
              Don&apos;t Wait
            </p>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 0.85rem' }}>
              Cavities don&apos;t get smaller on their own.
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.88)', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              The sooner we see your child, the simpler the treatment. Book an appointment today and let us take a look.
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
              Request an Appointment
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </SubPageLayout>
  )
}
