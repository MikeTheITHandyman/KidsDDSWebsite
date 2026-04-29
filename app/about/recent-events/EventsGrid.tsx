'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { urlFor } from '../../../sanity/lib/image'

export interface SanityEvent {
  _id: string
  title: string
  slug: string
  mainImage?: { asset: { _ref: string }; alt?: string }
  excerpt?: string
  eventDate?: string
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 55, damping: 14 } },
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short', month: 'long', day: 'numeric', year: 'numeric',
  })
}

function EmptyState() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <div style={{
        width: '72px', height: '72px', borderRadius: '50%',
        background: 'rgba(120,80,155,0.08)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem',
      }} aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#78509b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      </div>
      <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.25rem', color: '#78509b', margin: '0 0 0.5rem' }}>
        No events yet
      </h2>
      <p style={{ color: '#9ca3af', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.9rem', maxWidth: '380px', margin: '0 auto 1.5rem' }}>
        Check back soon — or add your first event in the{' '}
        <a href="/studio" style={{ color: '#4A90A4', textDecoration: 'underline' }}>Studio</a>.
      </p>
    </div>
  )
}

export default function EventsGrid({ events }: { events: SanityEvent[] }) {
  if (events.length === 0) return <EmptyState />

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.75rem',
        }}
        className="events-grid"
      >
        {events.map((event) => (
          <motion.article key={event._id} variants={cardVariants}>
            <Link
              href={`/about/recent-events/${event.slug}`}
              className="event-card"
              style={{
                display: 'block',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                background: '#fff',
                border: '1.5px solid rgba(120,80,155,0.10)',
                boxShadow: '0 2px 16px rgba(120,80,155,0.06)',
                textDecoration: 'none',
                transition: 'box-shadow 0.22s ease, transform 0.22s ease',
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: 'relative', aspectRatio: '16/9', background: 'rgba(120,80,155,0.06)' }}>
                {event.mainImage ? (
                  <Image
                    src={urlFor(event.mainImage).width(640).height(360).url()}
                    alt={event.mainImage.alt ?? event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }} aria-hidden="true">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(120,80,155,0.25)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                {event.eventDate && (
                  <p style={{
                    fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                    fontSize: '0.72rem', letterSpacing: '0.07em',
                    textTransform: 'uppercase', color: '#78509b',
                    margin: '0 0 0.5rem',
                  }}>
                    {formatDate(event.eventDate)}
                  </p>
                )}
                <h2 style={{
                  fontFamily: 'Nunito, sans-serif', fontWeight: 900,
                  fontSize: '1.05rem', color: '#1f2937',
                  margin: '0 0 0.5rem', lineHeight: 1.35,
                }}>
                  {event.title}
                </h2>
                {event.excerpt && (
                  <p style={{
                    fontSize: '0.875rem', color: '#6b7280',
                    lineHeight: 1.65, margin: '0 0 1rem',
                    display: '-webkit-box', WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {event.excerpt}
                  </p>
                )}
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                  fontSize: '0.82rem', color: '#78509b',
                }}>
                  View Details
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <style>{`
        .event-card:hover {
          box-shadow: 0 8px 32px rgba(120,80,155,0.14) !important;
          transform: translateY(-4px) !important;
        }
        @media (max-width: 640px) {
          .events-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
