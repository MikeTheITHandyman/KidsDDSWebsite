'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const INTERVAL_MS = 4000

const services = [
  {
    title: 'Preventive Dentistry',
    description: "Regular check-ups, cleanings, and fluoride treatments to keep your child's smile healthy and stop problems before they start.",
    buttonText: 'Preventative Care',
    href: '/services/preventive-dentistry',
    cardClass: 'card-teal',
    iconColor: '#4A90A4',
    iconBg: 'linear-gradient(135deg, #dcf0ee, #b8e0da)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    title: 'Restorative Dentistry',
    description: 'Expert, gentle treatment for cavities and broken teeth to restore healthy smiles using child-friendly techniques.',
    buttonText: 'Restorative Care',
    href: '/services/restorative-dentistry',
    cardClass: 'card-orange',
    iconColor: '#E8934F',
    iconBg: 'linear-gradient(135deg, #fef0dc, #faddaa)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8934F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    title: 'Special Needs Dentistry',
    description: 'Compassionate, specialized care for children with diverse needs.',
    buttonText: 'Special Needs Care',
    href: '/services',
    cardClass: 'card-sage',
    iconColor: '#6BA899',
    iconBg: 'linear-gradient(135deg, #d2ebe5, #aed8cf)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6BA899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Sedation Dentistry',
    description: 'Gentle sedation options for nervous kids and more complex procedures, including nitrous oxide and general anesthesia.',
    buttonText: 'Sedation Options',
    href: '/services/sedation-dentistry',
    cardClass: 'card-teal',
    iconColor: '#4A90A4',
    iconBg: 'linear-gradient(135deg, #dcf0ee, #b8e0da)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    title: 'Emergency Pediatric Dentist',
    description: "When your child has a toothache, knocked-out tooth, or dental injury, we'll get them in as soon as possible.",
    buttonText: 'Emergency Dental Care',
    href: '/services',
    cardClass: 'card-orange',
    iconColor: '#E97D63',
    iconBg: 'linear-gradient(135deg, #fde8e0, #f9c4b4)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E97D63" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1)
      else if (window.innerWidth < 1024) setVisibleCount(2)
      else setVisibleCount(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = services.length - visibleCount

  // Clamp index when visibleCount changes (e.g. rotating device)
  useEffect(() => {
    if (index > maxIndex) setIndex(Math.max(0, maxIndex))
  }, [maxIndex, index])

  const advance = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }, [maxIndex])

  const retreat = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1))

  useEffect(() => {
    if (paused) return
    const id = setInterval(advance, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, advance])

  const trackWidthPct = (services.length / visibleCount) * 100
  const xPercent = -(index * (100 / services.length))

  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-header">
        <h2 id="services-heading">Our Services</h2>
        <p>
          From routine check-ups to specialized treatments, we provide comprehensive, compassionate dental care designed specifically for children.
        </p>
      </div>

      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Track wrapper — clips overflow */}
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            style={{
              display: 'flex',
              width: `${trackWidthPct}%`,
            }}
            animate={{ x: `${xPercent}%` }}
            transition={{ type: 'spring', stiffness: 280, damping: 32, mass: 0.9 }}
          >
            {services.map((svc) => (
              <div
                key={svc.title}
                style={{
                  width: `${100 / services.length}%`,
                  flexShrink: 0,
                  padding: '0 0.625rem',
                }}
              >
                <motion.div
                  className="service-card"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 18 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{ height: '100%' }}
                >
                  <div className="service-icon" style={{ background: '#a6a8d2' }}>
                    {svc.icon}
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                  <a href={svc.href} className="service-link">
                    {svc.buttonText}
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls: prev · dots · next */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <button
            onClick={retreat}
            aria-label="Previous services"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1.5px solid rgba(74,144,164,0.3)',
              background: 'white', color: 'var(--brand-600)',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--brand-600)'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = 'var(--brand-600)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = 'var(--brand-600)'
              e.currentTarget.style.borderColor = 'rgba(74,144,164,0.3)'
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to position ${i + 1}`}
                style={{
                  width: i === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  border: 'none',
                  background: i === index ? 'var(--brand-600)' : 'rgba(74,144,164,0.25)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={advance}
            aria-label="Next services"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1.5px solid rgba(74,144,164,0.3)',
              background: 'white', color: 'var(--brand-600)',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--brand-600)'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = 'var(--brand-600)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = 'var(--brand-600)'
              e.currentTarget.style.borderColor = 'rgba(74,144,164,0.3)'
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
