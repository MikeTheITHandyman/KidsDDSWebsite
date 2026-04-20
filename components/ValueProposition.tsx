'use client'

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
} as any

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 14 },
  },
} as any

const features = [
  {
    key: 'same-day',
    cardClass: 'card-orange',
    iconClass: 'icon-orange',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8934F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="4"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <polyline points="9 16 11 18 15 14"/>
      </svg>
    ),
    title: 'Same-Day Appointments',
    body: "We keep urgent slots open every single day. When your child needs care, we make sure they're seen — fast.",
  },
  {
    key: 'communication',
    cardClass: 'card-teal',
    iconClass: 'icon-teal',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/>
        <line x1="9" y1="14" x2="13" y2="14"/>
      </svg>
    ),
    title: 'Parent-Centric Communication',
    body: 'We speak your language — real updates, clear next steps, and zero confusing dental jargon after every visit.',
  },
  {
    key: 'experts',
    cardClass: 'card-sage',
    iconClass: 'icon-sage',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6BA899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Specialized Pediatric Experts',
    body: 'All four of our doctors specialize exclusively in pediatric dentistry. Kids are our only focus — every single day.',
  },
]

export default function ValueProposition() {
  return (
    <section className="value-section" aria-labelledby="value-heading">
      <div className="value-header">
        <span className="section-kicker">Why Families Choose Us</span>
        <h2 id="value-heading">A Practice Built Around Your Child</h2>
        <p>
          We designed every part of our practice — from our approach to our schedule —
          with young patients and their parents in mind.
        </p>
      </div>

      <motion.div
        className="value-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {features.map(f => (
          <motion.article
            key={f.key}
            className={`feature-card ${f.cardClass}`}
            variants={cardVariants}
            whileHover={{ y: -7, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`feature-icon-wrap ${f.iconClass}`}>
              {f.icon}
            </div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
