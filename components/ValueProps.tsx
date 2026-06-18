'use client'

import { motion, type Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 14 },
  },
}

const CARD_CONFIG = [
  {
    key: 'experts' as const,
    cardClass: 'vp-card--blue',
    iconClass: 'vp-icon--blue',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    key: 'environment' as const,
    cardClass: 'vp-card--green',
    iconClass: 'vp-icon--green',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6BA899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
  {
    key: 'comms' as const,
    cardClass: 'vp-card--mint',
    iconClass: 'vp-icon--mint',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8BA596" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/>
        <line x1="9" y1="14" x2="13" y2="14"/>
      </svg>
    ),
  },
]

export default function ValueProps() {
  const t = useTranslations('valueProps')

  return (
    <section className="vp-section" aria-labelledby="vp-heading">
      <div className="vp-container">
        <div className="vp-header">
          <span className="section-kicker">{t('kicker')}</span>
          <h2 id="vp-heading">{t('heading')}</h2>
          <p>{t('body')}</p>
        </div>

        <motion.div
          className="vp-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CARD_CONFIG.map(c => (
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
              <h3>{t(`${c.key}.title`)}</h3>
              <p>{t(`${c.key}.body`)}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
