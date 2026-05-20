'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const doctors = [
  {
    name: 'Dr. Sonia Gutierrez',
    credentials: 'DDS, MS',
    tagline: 'Gentle Care Specialist',
    photo: '/brand_assets/index-dr-sonia.jpg',
    accentFrom: '#DBEAFE',
    accentTo: '#BAE6FD',
    accentText: '#4A90A4',
    bio: 'With a gift for making anxious children feel instantly at ease, Dr. Sonia brings warmth, expertise, and fluent Spanish to every appointment. She specializes in sedation dentistry and has dedicated 15+ years to treating little smiles in Grayslake.',
    highlights: [
      'Board-Certified Pediatric Dentist',
      'Fluent in English & Spanish',
      'Sedation Dentistry Expert',
    ],
    delay: 0,
  },
  {
    name: 'Dr. Dave Rutcosky',
    credentials: 'DDS, MS',
    tagline: 'Special Needs Champion',
    photo: '/brand_assets/index-dr-dave.jpg',
    accentFrom: '#D1FAE5',
    accentTo: '#A7F3D0',
    accentText: '#6BA899',
    bio: "Dr. Dave is the practice's specialist in treating children with diverse needs — including those with physical, developmental, and sensory challenges. A certified general anesthesiologist with 20+ years of experience.",
    highlights: [
      'Special Needs Dentistry Focus',
      'General Anesthesiology Certified',
      '20+ Years Pediatric Experience',
    ],
    delay: 0.08,
  },
  {
    name: 'Dr. Sahar Alrayyes',
    credentials: 'DDS, MS',
    tagline: 'Preventive Care Leader',
    photo: '/brand_assets/index-dr-alrayyes.jpg',
    accentFrom: '#FEF3C7',
    accentTo: '#FDE68A',
    accentText: '#D97706',
    bio: 'Dr. Sahar is passionate about prevention — the idea that the right habits early can mean a lifetime of healthy smiles. She brings a research-informed approach to infant oral health, orthodontic screening, and family education.',
    highlights: [
      'Preventive Dentistry Advocate',
      'Infant Oral Health Expert',
      'Orthodontic Screening Specialist',
    ],
    delay: 0.16,
  },
  {
    name: 'Dr. Anne-Ashley Compton',
    credentials: 'DDS, MS',
    tagline: 'Restorative Arts Expert',
    photo: '/brand_assets/index-dr-ashley.jpg',
    accentFrom: '#EDE9FE',
    accentTo: '#DDD6FE',
    accentText: '#7C3AED',
    bio: 'Dr. Anne-Ashley blends technical precision with an exceptional bedside manner, helping even the most hesitant children feel heard and cared for. Her expertise spans restorative dentistry and comprehensive pediatric treatment planning.',
    highlights: [
      'Restorative Dentistry Specialist',
      'Child-First Communication Style',
      'Nitrous Oxide Sedation Certified',
    ],
    delay: 0.24,
  },
]

export default function DoctorGrid() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (name: string) =>
    setExpanded((prev) => (prev === name ? null : name))

  return (
    <>
      <div
        className="dentist-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem',
          marginBottom: '4rem',
          alignItems: 'start',
        }}
      >
        {doctors.map((doc) => {
          const isOpen = expanded === doc.name

          return (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: doc.delay, ease }}
              style={{
                background: '#fff',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: isOpen
                  ? `0 20px 52px ${doc.accentText}28`
                  : '0 4px 24px rgba(74,144,164,0.09)',
                border: isOpen
                  ? `1.5px solid ${doc.accentText}50`
                  : '1.5px solid rgba(74,144,164,0.10)',
                transition: 'box-shadow 0.3s, border-color 0.3s',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* ── Square headshot ────────────────────────────────── */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: `linear-gradient(135deg, ${doc.accentFrom}, ${doc.accentTo})`,
                }}
              >
                <Image
                  src={doc.photo}
                  alt={`Headshot of ${doc.name}, pediatric dentist at Kids Dentist Grayslake IL`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
              </div>

              {/* ── Card body ─────────────────────────────────────── */}
              <div
                style={{
                  padding: '1.4rem 1.5rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                {/* Name + credentials — single line, ellipsis fallback */}
                <h2
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.95rem',
                    color: '#4A90A4',
                    margin: '0 0 0.2rem',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  title={`${doc.name}, ${doc.credentials}`}
                >
                  {doc.name},{' '}
                  <span style={{ fontWeight: 700 }}>{doc.credentials}</span>
                </h2>

                {/* Role tagline */}
                <p
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#9ca3af',
                    margin: '0 0 1.1rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {doc.tagline}
                </p>

                {/* ── Expandable bio ──────────────────────────────── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="bio"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#4b5563',
                          lineHeight: 1.75,
                          margin: '0 0 1rem',
                        }}
                      >
                        {doc.bio}
                      </p>

                      <ul
                        style={{
                          listStyle: 'none',
                          margin: '0 0 1.25rem',
                          padding: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.45rem',
                        }}
                      >
                        {doc.highlights.map((h) => (
                          <li
                            key={h}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: '0.8rem',
                              color: '#6b7280',
                            }}
                          >
                            <span
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: doc.accentText,
                                flexShrink: 0,
                              }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/request-appointment"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                          color: '#fff',
                          fontFamily: 'Nunito, sans-serif',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          padding: '0.55rem 1.2rem',
                          borderRadius: '100px',
                          textDecoration: 'none',
                          marginBottom: '1.1rem',
                          boxShadow: '0 4px 14px rgba(232,147,79,0.32)',
                        }}
                      >
                        Request Appointment
                      </Link>

                      {/* Divider before toggle */}
                      <div
                        style={{
                          height: '1px',
                          background: 'rgba(74,144,164,0.10)',
                          margin: '0 0 0.75rem',
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Toggle button ───────────────────────────────── */}
                <button
                  type="button"
                  onClick={() => toggle(doc.name)}
                  aria-expanded={isOpen}
                  aria-controls={`bio-${doc.name.replace(/\s+/g, '-')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    color: isOpen ? '#6b7280' : '#E8934F',
                    transition: 'color 0.2s',
                    marginTop: 'auto',
                  }}
                >
                  {isOpen ? 'Close' : 'Read Bio'}
                  <motion.svg
                    width="13"
                    height="13"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
              </div>
            </motion.article>
          )
        })}
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15 }}
        style={{
          background: 'linear-gradient(135deg, #4A90A4 0%, #6BA899 100%)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          textAlign: 'center',
          boxShadow: '0 12px 40px rgba(74,144,164,0.22)',
          marginBottom: '2rem',
        }}
      >
        <p
          style={{
            fontFamily: 'Nunito, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 900,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '0.75rem',
          }}
        >
          Ready to Visit?
        </p>
        <h3
          style={{
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#fff',
            lineHeight: 1.2,
            margin: '0 0 0.85rem',
          }}
        >
          Your child deserves the best.
        </h3>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: '460px',
            margin: '0 auto 1.75rem',
            lineHeight: 1.7,
          }}
        >
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
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .dentist-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .dentist-grid { grid-template-columns: 1fr !important; max-width: 340px; margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </>
  )
}
