import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Our Dentists | Kids Dentist Grayslake, IL',
  description:
    'Meet Dr. Sonia Gutierrez, Dr. Dave Rutcosky, Dr. Sahar Alrayyes, and Dr. Anne-Ashley Compton — four board-certified pediatric dentists serving Grayslake, IL.',
  openGraph: {
    title: 'Meet Our Dentists | Kids Dentist Grayslake, IL',
    description:
      'Four board-certified pediatric specialists dedicated exclusively to children\'s dental health in Grayslake, IL.',
    url: 'https://kidsdds.com/about/meet-the-dentists',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const doctors = [
  {
    name: 'Dr. Sonia Gutierrez',
    firstName: 'Sonia',
    credentials: 'DDS',
    tagline: 'Gentle Care Specialist',
    photo: '/brand_assets/index-dr-sonia.jpg',
    href: '/about/meet-the-dentists/dr-sonia-gutierrez',
    accentFrom: '#DBEAFE',
    accentTo: '#BAE6FD',
    accentText: '#4A90A4',
    bio: 'With a gift for making anxious children feel instantly at ease, Dr. Sonia brings warmth, expertise, and fluent Spanish to every appointment. She specializes in sedation dentistry and has dedicated 15+ years to treating little smiles in Grayslake.',
    highlights: ['Board-Certified Pediatric Dentist', 'Fluent in English & Spanish', 'Sedation Dentistry Expert'],
    delay: 0,
  },
  {
    name: 'Dr. Dave Rutcosky',
    firstName: 'Dave',
    credentials: 'DDS',
    tagline: 'Special Needs Champion',
    photo: '/brand_assets/index-dr-dave.jpg',
    href: '/about/meet-the-dentists/dr-dave-rutcosky',
    accentFrom: '#D1FAE5',
    accentTo: '#A7F3D0',
    accentText: '#6BA899',
    bio: "Dr. Dave is the practice's specialist in treating children with diverse needs — including those with physical, developmental, and sensory challenges. A certified general anesthesiologist with 20+ years of experience.",
    highlights: ['Special Needs Dentistry Focus', 'General Anesthesiology Certified', '20+ Years Pediatric Experience'],
    delay: 0.1,
  },
  {
    name: 'Dr. Sahar Alrayyes',
    firstName: 'Sahar',
    credentials: 'DDS',
    tagline: 'Preventive Care Leader',
    photo: '/brand_assets/index-dr-alrayyes.jpg',
    href: '/about/meet-the-dentists/dr-sahar-alrayyes',
    accentFrom: '#FEF3C7',
    accentTo: '#FDE68A',
    accentText: '#D97706',
    bio: 'Dr. Sahar is passionate about prevention — the idea that the right habits early can mean a lifetime of healthy smiles. She brings a research-informed approach to infant oral health, orthodontic screening, and family education.',
    highlights: ['Preventive Dentistry Advocate', 'Infant Oral Health Expert', 'Orthodontic Screening Specialist'],
    delay: 0.2,
  },
  {
    name: 'Dr. Anne-Ashley Compton',
    firstName: 'Anne-Ashley',
    credentials: 'DDS',
    tagline: 'Restorative Arts Expert',
    photo: '/brand_assets/index-dr-ashley.jpg',
    href: '/about/meet-the-dentists/dr-anne-ashley-compton',
    accentFrom: '#EDE9FE',
    accentTo: '#DDD6FE',
    accentText: '#7C3AED',
    bio: 'Dr. Anne-Ashley blends technical precision with an exceptional bedside manner, helping even the most hesitant children feel heard and cared for. Her expertise spans restorative dentistry and comprehensive pediatric treatment planning.',
    highlights: ['Restorative Dentistry Specialist', 'Child-First Communication Style', 'Nitrous Oxide Sedation Certified'],
    delay: 0.3,
  },
]

export default function MeetTheDentistsPage() {
  return (
    <SubPageLayout
      title="Meet Our Dentists"
      subtitle="Four passionate specialists united by one mission — giving every child a smile they love."
    >
      <div className="mx-auto max-w-6xl px-4">

        {/* Doctor grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.75rem',
            marginBottom: '4rem',
          }}
          className="dentist-grid"
        >
          {doctors.map((doc) => (
            <AnimatedSection key={doc.name} delay={doc.delay}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(74,144,164,0.09)',
                  border: '1.5px solid rgba(74,144,164,0.10)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="dentist-card"
              >
                {/* Strict 1:1 headshot box */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${doc.accentFrom}, ${doc.accentTo})`,
                  }}
                >
                  <Image
                    src={doc.photo}
                    alt={`Headshot of ${doc.name}, pediatric dentist at Kids Dentist Grayslake IL`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                  {/* Credential badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      background: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(6px)',
                      borderRadius: '100px',
                      padding: '0.3rem 0.85rem',
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: doc.accentText,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {doc.tagline}
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h2
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      color: '#4A90A4',
                      margin: '0 0 0.25rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {doc.name}, {doc.credentials}
                  </h2>

                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.65, margin: '0 0 1.1rem', flex: 1 }}>
                    {doc.bio}
                  </p>

                  <ul style={{ listStyle: 'none', margin: '0 0 1.25rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {doc.highlights.map(h => (
                      <li key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6b7280' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: doc.accentText, flexShrink: 0 }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={doc.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      color: '#E8934F',
                      textDecoration: 'none',
                    }}
                    className="doctor-link"
                  >
                    Meet Dr. {doc.firstName}
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.15}>
          <div
            style={{
              background: 'linear-gradient(135deg, #4A90A4 0%, #6BA899 100%)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(74,144,164,0.22)',
              marginBottom: '2rem',
            }}
          >
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '0.75rem' }}>
              Ready to Visit?
            </p>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 0.85rem' }}>
              Your child deserves the best.
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.88)', maxWidth: '460px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              Our team of four specialists is here to make every visit a positive experience. New patients always welcome.
            </p>
            <Link
              href="/request-appointment"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#E8934F',
                color: '#fff',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 6px 22px rgba(232,147,79,0.45)',
              }}
            >
              Request an Appointment
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .dentist-card:hover { box-shadow: 0 20px 52px rgba(74,144,164,0.17) !important; transform: translateY(-6px); }
        .doctor-link:hover { color: #E97D63 !important; }
        @media (max-width: 900px) { .dentist-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .dentist-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </SubPageLayout>
  )
}
