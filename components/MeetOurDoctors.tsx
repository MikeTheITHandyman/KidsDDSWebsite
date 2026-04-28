'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const doctors = [
  {
    name: 'Dr. Sonia Gutierrez',
    firstName: 'Sonia',
    bioHref: '/about/meet-the-dentists/dr-sonia-gutierrez',
    role: 'Pediatric Dentist, DDS',
    blobRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
    photo: '/brand_assets/index-dr-sonia.jpg',
    delay: 0,
  },
  {
    name: 'Dr. Dave Rutcosky',
    firstName: 'Dave',
    bioHref: '/about/meet-the-dentists/dr-dave-rutcosky',
    role: 'Pediatric Dentist, DDS',
    blobRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
    photo: '/brand_assets/index-dr-dave.jpg',
    delay: 0.1,
  },
  {
    name: 'Dr. Sahar Alrayyes',
    firstName: 'Sahar',
    bioHref: '/about/meet-the-dentists/dr-sahar-alrayyes',
    role: 'Pediatric Dentist, DDS',
    blobRadius: '50% 50% 30% 70% / 60% 40% 70% 30%',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    photo: '/brand_assets/index-dr-alrayyes.jpg',
    delay: 0.2,
  },
  {
    name: 'Dr. Anne-Ashley Compton',
    firstName: 'Ashley',
    bioHref: '/about/meet-the-dentists/dr-anne-ashley-compton',
    role: 'Pediatric Dentist, DDS',
    blobRadius: '70% 30% 50% 50% / 40% 60% 40% 60%',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
    photo: '/brand_assets/index-dr-ashley.jpg',
    delay: 0.3,
  },
]

export default function MeetOurDoctors() {
  return (
    <section
      aria-labelledby="doctors-heading"
      style={{
        background: 'linear-gradient(180deg, #FDFCF8 0%, #EFF6FF 100%)',
        padding: '5rem 0 5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient blob decorations */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,144,164,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,199,127,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-kicker">Get to Know Us</span>
          <h2
            id="doctors-heading"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
              fontWeight: 900,
              color: 'var(--brand-600)',
              letterSpacing: '-0.02em',
              margin: '0.5rem 0 1rem',
              lineHeight: 1.18,
            }}
          >
            Meet Our Doctors
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1.05rem', fontWeight: 500, maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Four pediatric specialists who genuinely love what they do. Get to know the team your family will see at every visit.
          </p>
        </motion.div>

        {/* Doctor cards — 4-column horizontal row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.75rem',
          }}
          className="doctors-grid"
        >
          {doctors.map((doc) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: doc.delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              style={{
                background: 'white',
                borderRadius: '2rem',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(74,144,164,0.09)',
                border: '1.5px solid rgba(74,144,164,0.10)',
                cursor: 'default',
                transition: 'box-shadow 0.3s',
              }}
              onHoverStart={(e) => {
                ;(e.target as HTMLElement).closest?.('[data-doctor]')
              }}
            >
              {/* Blob photo container */}
              <div
                style={{
                  width: '256px',
                  height: '256px',
                  margin: '0 auto 1.4rem',
                  borderRadius: doc.blobRadius,
                  background: `linear-gradient(135deg, ${doc.gradientFrom}, ${doc.gradientTo})`,
                  position: 'relative',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <Image
                  src={doc.photo}
                  alt={`Headshot of ${doc.name}`}
                  fill
                  sizes="256px"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>

              {/* Name & role */}
              <h3
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--brand-600)',
                  margin: '0 0 0.35rem',
                  lineHeight: 1.3,
                }}
              >
                {doc.name}
              </h3>
              <p
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#9ca3af',
                  margin: 0,
                  letterSpacing: '0.03em',
                }}
              >
                {doc.role}
              </p>
              <a
                href={doc.bioHref}
                className="doctor-bio-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.15rem',
                  marginTop: '0.9rem',
                  color: 'var(--brand-600)',
                  fontSize: '0.85rem',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'color 0.2s, gap 0.2s',
                }}
              >
                Meet Dr. {doc.firstName} &rsaquo;
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2.75rem' }}
        >
          <motion.a
            href="/about/meet-the-dentists"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #E8934F, #E97D63)',
              color: 'white',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.85rem 2rem',
              borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 6px 22px rgba(232,147,79,0.38)',
            }}
          >
            Meet the Dentists
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>

          <motion.a
            href="/about/meet-the-team"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: 'var(--brand-600)',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.85rem 2rem',
              borderRadius: '100px',
              textDecoration: 'none',
              border: '2px solid rgba(74,144,164,0.35)',
            }}
          >
            Meet the Team
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Responsive grid override */}
      <style>{`
        .doctor-bio-link:hover {
          color: var(--accent-500) !important;
          gap: 0.35rem !important;
        }
        @media (max-width: 900px) {
          .doctors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .doctors-grid { grid-template-columns: 1fr !important; max-width: 320px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
