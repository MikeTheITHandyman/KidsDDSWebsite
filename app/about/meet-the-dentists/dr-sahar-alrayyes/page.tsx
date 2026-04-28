import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Sahar Alrayyes, DDS | Kids Dentist Grayslake, IL',
  description:
    'Meet Dr. Sahar Alrayyes — board-certified pediatric dentist specializing in preventive care and infant oral health at Kids Dentist Grayslake, IL.',
  openGraph: {
    title: 'Dr. Sahar Alrayyes, DDS | Kids Dentist Grayslake, IL',
    description: 'Preventive care leader and infant oral health specialist at Kids Dentist Grayslake, IL.',
    url: 'https://kidsdds.com/about/meet-the-dentists/dr-sahar-alrayyes',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'profile',
  },
}

const credentials = [
  'Doctor of Dental Surgery (DDS)',
  'Board-Certified Pediatric Dentist',
  'American Board of Pediatric Dentistry (ABPD)',
  'Advanced Training in Infant Oral Health',
  'Orthodontic Screening Specialist',
  'Research Background in Pediatric Dentistry',
  'Early Childhood Caries Prevention Expert',
]

export default function DrSaharPage() {
  return (
    <SubPageLayout
      title="Dr. Sahar Alrayyes, DDS"
      subtitle="Preventive Care Leader · Infant Oral Health Expert · Research-Informed Practice"
      gradient="amber"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/about/meet-the-dentists"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2.5rem' }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Dentists
          </Link>
        </AnimatedSection>

        {/* Main bio layout */}
        <div className="mb-16 grid items-start gap-12 md:grid-cols-[1fr_1.6fr]">

          {/* Photo column */}
          <AnimatedSection direction="left">
            <div style={{ position: 'sticky', top: '6rem', maxWidth: '380px', margin: '0 auto' }}>
              {/* Strict 1:1 portrait box */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                  boxShadow: '0 16px 48px rgba(217,119,6,0.18)',
                }}
              >
                <Image
                  src="/brand_assets/index-dr-alrayyes.jpg"
                  alt="Dr. Sahar Alrayyes, pediatric dentist at Kids Dentist Grayslake IL"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>

              <div
                style={{ marginTop: '1.25rem', background: '#fff', border: '1.5px solid rgba(74,144,164,0.12)', borderRadius: '1.5rem', padding: '1.25rem 1.5rem', boxShadow: '0 2px 16px rgba(74,144,164,0.07)' }}
              >
                <Link
                  href="/request-appointment?dentist=dr-sahar-alrayyes"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.9rem', padding: '0.8rem 1.5rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(232,147,79,0.35)', marginBottom: '0.75rem' }}
                >
                  Book with Dr. Sahar
                </Link>
                <Link
                  href="tel:+18472231400"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', padding: '0.65rem', borderRadius: '100px', border: '1.5px solid rgba(74,144,164,0.25)' }}
                >
                  (847) 223-1400
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio column */}
          <AnimatedSection direction="right" delay={0.12}>
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', marginBottom: '0.6rem' }}>
              Pediatric Dentist, DDS
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: '#4A90A4', lineHeight: 1.2, margin: '0 0 1.5rem' }}>
              Prevention First — A Lifetime of Healthy Smiles Starts Early
            </h2>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.1rem' }}>
              Dr. Alrayyes joined the Kids Dentist family bringing a deeply research-informed perspective to pediatric oral health. Her passion is prevention — the belief that the right habits and the right guidance in the first years of a child's life lay the foundation for a lifetime of healthy smiles.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.1rem' }}>
              She has a particular interest in infant oral health, advising parents from their child's very first tooth on how to establish healthy routines and avoid early childhood caries. Her orthodontic screening expertise means that alignment issues are caught at the earliest possible stage — when intervention is simplest.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '2rem' }}>
              Dr. Sahar is an active speaker at pediatric dental conferences and contributes to ongoing research in early childhood oral health education, bringing the latest evidence-based practices directly to her patients in Grayslake.
            </p>

            {/* Philosophy quote */}
            <blockquote
              style={{ borderLeft: '4px solid #F59E0B', background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(232,147,79,0.06))', borderRadius: '0 1.25rem 1.25rem 0', padding: '1.25rem 1.5rem', margin: '0 0 2.25rem' }}
            >
              <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#4A90A4', fontStyle: 'italic', lineHeight: 1.65, margin: '0 0 0.6rem' }}>
                "Healthy teeth start before the first tooth. I love helping parents understand what to do — and what to look for — from day one. That early guidance changes everything."
              </p>
              <cite style={{ fontSize: '0.82rem', fontWeight: 800, color: '#9ca3af', fontStyle: 'normal', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                — Dr. Sahar Alrayyes, DDS
              </cite>
            </blockquote>

            {/* Credentials */}
            <div>
              <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: '#4A90A4', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.78rem' }}>
                Credentials & Training
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {credentials.map(c => (
                  <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: '#6b7280' }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#F59E0B" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </SubPageLayout>
  )
}
