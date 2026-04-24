'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 14 },
  },
} as const

const cards = [
  {
    key: 'same-day',
    cardClass: 'vp-card--blue',
    iconClass: 'vp-icon--blue',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="4"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <polyline points="9 16 11 18 15 14"/>
      </svg>
    ),
    title: 'Same-Day Appointments',
    body: "We hold urgent slots open every single day. Whether it's a toothache or a routine check-up, your child is seen promptly — no long waits.",
  },
  {
    key: 'comms',
    cardClass: 'vp-card--green',
    iconClass: 'vp-icon--green',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6BA899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/>
        <line x1="9" y1="14" x2="13" y2="14"/>
      </svg>
    ),
    title: 'Parent-Centric Communication',
    body: "Transparent treatment plans, plain-language explanations, and zero judgment. You'll always know exactly what's happening with your child's smile.",
  },
  {
    key: 'experts',
    cardClass: 'vp-card--mint',
    iconClass: 'vp-icon--mint',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8BA596" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Specialized Pediatric Experts',
    body: 'All four of our board-certified doctors focus exclusively on pediatric dentistry — care designed specifically for little mouths and big feelings.',
  },
]

export default function ValueProps() {
  return (
    <section className="vp-section" aria-labelledby="vp-heading">
      <div className="vp-container">

        <div className="vp-header">
          <span className="section-kicker">Why Families Choose Us</span>
          <h2 id="vp-heading">A Practice Built Around Your Child</h2>
          <p>
            We designed every part of our practice, from our schedule to our
            bedside manner with young patients and their parents in mind.
          </p>
        </div>

        <motion.div
          className="vp-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map(c => (
            <motion.article
              key={c.key}
              className={`vp-card ${c.cardClass}`}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 22px 52px rgba(74, 144, 164, 0.16)',
                transition: { type: 'spring', stiffness: 280, damping: 18 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`vp-icon-wrap ${c.iconClass}`}>
                {c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
