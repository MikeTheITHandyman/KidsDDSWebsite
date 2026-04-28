import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Anne-Ashley Compton, DDS | Kids Dentist Grayslake, IL',
  description:
    'Meet Dr. Anne-Ashley Compton — board-certified pediatric dentist specializing in restorative dentistry for children at Kids Dentist Grayslake, IL.',
  openGraph: {
    title: 'Dr. Anne-Ashley Compton, DDS | Kids Dentist Grayslake, IL',
    description: 'Restorative dentistry specialist with an exceptional bedside manner for children. Serving Grayslake, IL.',
    url: 'https://kidsdds.com/about/meet-the-dentists/dr-anne-ashley-compton',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'profile',
  },
}

const credentials = [
  'Doctor of Dental Surgery (DDS)',
  'Board-Certified Pediatric Dentist',
  'American Board of Pediatric Dentistry (ABPD)',
  'Advanced Restorative Dentistry Training',
  'Nitrous Oxide Sedation Certified',
  'Comprehensive Pediatric Treatment Planning',
  'Excellence in Patient Experience Award Recipient',
]

export default function DrAnneAshleyPage() {
  return (
    <SubPageLayout
      title="Dr. Anne-Ashley Compton, DDS"
      subtitle="Restorative Arts Expert · Child-First Communication · Award-Winning Patient Experience"
      gradient="blue"
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
                  background: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)',
                  boxShadow: '0 16px 48px rgba(124,58,237,0.15)',
                }}
              >
                <Image
                  src="/brand_assets/index-dr-ashley.jpg"
                  alt="Dr. Anne-Ashley Compton, pediatric dentist at Kids Dentist Grayslake IL"
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
                  href="/request-appointment?dentist=dr-anne-ashley-compton"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.9rem', padding: '0.8rem 1.5rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 4px 16px rgba(232,147,79,0.35)', marginBottom: '0.75rem' }}
                >
                  Book with Dr. Anne-Ashley
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
            <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7C3AED', marginBottom: '0.6rem' }}>
              Pediatric Dentist, DDS
            </span>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', color: '#4A90A4', lineHeight: 1.2, margin: '0 0 1.5rem' }}>
              Precision, Patience, and the Art of Making Kids Comfortable
            </h2>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.1rem' }}>
              Dr. Compton brings an exceptional combination of technical skill and emotional intelligence to every patient encounter. Her restorative work is meticulous — she takes great pride in outcomes that look natural, feel comfortable, and are delivered with zero trauma to the child.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.1rem' }}>
              Parents frequently comment that their children actually look forward to appointments with Dr. Anne-Ashley — which she considers the highest compliment she can receive. Her ability to communicate with children at exactly the right level, and to involve them as active participants in their own care, is what sets her apart.
            </p>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '2rem' }}>
              Dr. Compton has been recognized for excellence in patient experience and continues to invest in the latest advances in minimally invasive restorative techniques — always with the goal of preserving as much healthy tooth structure as possible.
            </p>

            {/* Philosophy quote */}
            <blockquote
              style={{ borderLeft: '4px solid #a78bfa', background: 'linear-gradient(135deg, rgba(167,139,250,0.07), rgba(74,144,164,0.06))', borderRadius: '0 1.25rem 1.25rem 0', padding: '1.25rem 1.5rem', margin: '0 0 2.25rem' }}
            >
              <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#4A90A4', fontStyle: 'italic', lineHeight: 1.65, margin: '0 0 0.6rem' }}>
                "When a child leaves my chair smiling — not just because we are done, but because it really was not bad at all — that is the moment I live for. That is what this career is about."
              </p>
              <cite style={{ fontSize: '0.82rem', fontWeight: 800, color: '#9ca3af', fontStyle: 'normal', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                — Dr. Anne-Ashley Compton, DDS
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
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
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
