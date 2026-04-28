import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour Our Office | Kids Dentist Grayslake, IL',
  description:
    'Take a virtual tour of Kids Dentist Grayslake. See our welcoming lobby, child-friendly treatment rooms, play area, and advanced digital technology suite.',
  openGraph: {
    title: 'Tour Our Office | Kids Dentist Grayslake, IL',
    description: 'See inside the Kids Dentist office in Grayslake, IL — designed from the ground up to make children and parents feel at home.',
    url: 'https://kidsdds.com/about/tour-our-office',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const COMFORT_FEATURES = [
  { icon: '📺', label: 'TVs in every treatment room — kids choose what they watch' },
  { icon: '🌿', label: 'HEPA air purification throughout all clinical spaces' },
  { icon: '💡', label: 'Sensory-friendly, adjustable lighting in treatment areas' },
  { icon: '🧸', label: 'Child-scaled furnishings — nothing feels too big or scary' },
  { icon: '🎮', label: 'Dedicated kids play zone in the waiting area' },
  { icon: '🔬', label: 'Sterilization standards exceeding ADA guidelines' },
]

const SPACES = [
  {
    number: '01',
    name: 'The Welcome Lobby',
    description:
      'The first thing you will notice is that it does not feel like a dentist\'s office at all. Our lobby is designed to be warm, bright, and immediately reassuring — a space where kids want to explore and parents can finally exhale. Colorful artwork, comfortable seating, and a dedicated children\'s play area make every wait feel short.',
    features: ['Children\'s play zone with age-appropriate activities', 'Comfortable seating for parents and guardians', 'Bright, warm color palette — no cold clinical whites'],
    imagePath: '/brand_assets/office-tour-lobby.jpg',
    imageAlt: 'Welcoming lobby of Kids Dentist Grayslake — bright, colorful, and child-friendly',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
    accentColor: '#4A90A4',
    icon: '🛋️',
    flip: false,
  },
  {
    number: '02',
    name: 'Treatment Rooms',
    description:
      'Each treatment room is child-sized, child-scaled, and child-tested. Chairs that feel comfortable to a 4-year-old. Overhead TVs so they can watch their favorite show during cleanings. No intimidating equipment in plain sight — we have been intentional about every detail so the environment itself helps children relax before we even begin.',
    features: ['Overhead TVs with patient-controlled viewing', 'Child-sized, contoured dental chairs', 'Equipment stored out of sight until needed'],
    imagePath: '/brand_assets/office-tour-treatment.jpg',
    imageAlt: 'Child-friendly treatment room at Kids Dentist Grayslake with overhead TV and comfortable chair',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
    accentColor: '#6BA899',
    icon: '🦷',
    flip: true,
  },
  {
    number: '03',
    name: 'Kids Play & Waiting Area',
    description:
      'For patients still waiting for their appointment — and their siblings who came along — we have a dedicated play zone stocked with age-appropriate entertainment. We believe the time before the appointment matters just as much as the appointment itself. A child who arrives relaxed and happy is a child who leaves the same way.',
    features: ['Age-segmented play areas for toddlers and older kids', 'Seating for parents with a clear sightline to children', 'Entertainment options for siblings during appointments'],
    imagePath: '/brand_assets/office-tour-play.jpg',
    imageAlt: 'Kids play and waiting area at Kids Dentist Grayslake — designed to make waiting fun',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    accentColor: '#D97706',
    icon: '🎈',
    flip: false,
  },
  {
    number: '04',
    name: 'Digital Technology Suite',
    description:
      'We invest in the latest digital X-ray and imaging technology because it directly benefits your child — faster diagnosis, significantly lower radiation exposure than traditional X-rays, and less time sitting still in the chair. Our digital workflow also means your records are always current and easily shared with your pediatrician when needed.',
    features: ['Digital X-rays with up to 90% less radiation', 'Instant imaging — results available during your visit', 'Secure digital record-keeping and easy specialist referrals'],
    imagePath: '/brand_assets/office-tour-tech.jpg',
    imageAlt: 'Digital X-ray and imaging technology suite at Kids Dentist Grayslake pediatric dental office',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
    accentColor: '#7C3AED',
    icon: '📡',
    flip: true,
  },
]

export default function TourOurOfficePage() {
  return (
    <SubPageLayout
      title="Tour Our Office"
      subtitle="Designed from the ground up for curious kids and reassured parents."
      gradient="green"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* Intro */}
        <AnimatedSection>
          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: 500, color: '#6b7280', maxWidth: '620px', margin: '0 auto 4rem', lineHeight: 1.75 }}>
            We believe the environment is part of the treatment. Every room, every corner, and every detail of our Grayslake office was chosen with one question in mind: <em style={{ color: '#4A90A4', fontStyle: 'normal', fontWeight: 700 }}>will this make a child feel safe?</em>
          </p>
        </AnimatedSection>

        {/* Room sections — alternating layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginBottom: '5rem' }}>
          {SPACES.map((space) => (
            <div
              key={space.number}
              className={`grid items-center gap-12 md:grid-cols-2 ${space.flip ? 'office-flip' : ''}`}
            >
              {/* 16:9 Strict Box image placeholder */}
              <AnimatedSection direction={space.flip ? 'right' : 'left'}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: '1.75rem',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${space.gradientFrom}, ${space.gradientTo})`,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                  }}
                >
                  <Image
                    src={space.imagePath}
                    alt={space.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Fallback overlay — shows when image is missing */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      opacity: 0.55,
                      pointerEvents: 'none',
                    }}
                  >
                    <span style={{ fontSize: '2.75rem', lineHeight: 1 }} aria-hidden="true">{space.icon}</span>
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280' }}>
                      Photo Coming Soon
                    </span>
                  </div>
                  {/* Room number badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.88)',
                      backdropFilter: 'blur(6px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '0.8rem',
                      color: space.accentColor,
                    }}
                  >
                    {space.number}
                  </div>
                </div>
              </AnimatedSection>

              {/* Text content */}
              <AnimatedSection direction={space.flip ? 'left' : 'right'} delay={0.14}>
                <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: space.accentColor, marginBottom: '0.6rem' }}>
                  Space {space.number}
                </span>
                <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', color: '#4A90A4', lineHeight: 1.25, margin: '0 0 1rem' }}>
                  {space.name}
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.78, color: '#6b7280', marginBottom: '1.25rem' }}>
                  {space.description}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {space.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#6b7280' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: space.accentColor, flexShrink: 0, marginTop: '6px' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* Comfort features grid */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(74,144,164,0.05), rgba(107,168,153,0.07))',
              border: '1.5px solid rgba(74,144,164,0.10)',
              borderRadius: '2rem',
              padding: '3rem 2.5rem',
              marginBottom: '3.5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
              <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#78509b', marginBottom: '0.5rem' }}>
                Built for Comfort
              </span>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#4A90A4', margin: '0', lineHeight: 1.2 }}>
                Every Detail, Thoughtfully Chosen
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
              {COMFORT_FEATURES.map(f => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: '#fff',
                    borderRadius: '1.25rem',
                    padding: '1rem 1.1rem',
                    boxShadow: '0 2px 12px rgba(74,144,164,0.07)',
                  }}
                >
                  <span style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{f.icon}</span>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6b7280', margin: 0, lineHeight: 1.55 }}>{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#4A90A4', marginBottom: '1.25rem' }}>
              See it for yourself — schedule your first visit today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, #E8934F, #E97D63)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 6px 22px rgba(232,147,79,0.35)' }}
              >
                Schedule Your Visit
              </Link>
              <Link
                href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#4A90A4', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '0.85rem 2rem', borderRadius: '100px', textDecoration: 'none', border: '2px solid rgba(74,144,164,0.3)' }}
              >
                Get Directions
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .office-flip { direction: rtl; }
          .office-flip > * { direction: ltr; }
        }
      `}</style>
    </SubPageLayout>
  )
}
