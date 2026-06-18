'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const SERVICE_CONFIG = [
  {
    key: 'preventive' as const,
    href: '/services/preventive-dentistry',
    iconBg: 'linear-gradient(135deg, #dcf0ee, #b8e0da)',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    key: 'restorative' as const,
    href: '/services/restorative',
    iconBg: 'linear-gradient(135deg, #fef0dc, #faddaa)',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B18" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    key: 'sedation' as const,
    href: '/services/sedation-dentistry',
    iconBg: 'linear-gradient(135deg, #dcf0ee, #b8e0da)',
    featured: false,
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
    key: 'specialNeeds' as const,
    href: '/services/special-needs',
    iconBg: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
    featured: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#78509b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    key: 'emergency' as const,
    href: '/services/emergency',
    iconBg: 'linear-gradient(135deg, #fde8e0, #f9c4b4)',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF4A2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  const t = useTranslations('services')

  return (
    <section className="services-section" aria-labelledby="services-heading" style={{ paddingTop: '3rem' }}>
      <div className="services-header">
        <h2 id="services-heading">{t('heading')}</h2>
        <p>{t('body')}</p>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div className="services-all-grid">
          {SERVICE_CONFIG.map((svc) => (
            <motion.div
              key={svc.key}
              className="service-card"
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 18 },
              }}
              whileTap={{ scale: 0.97 }}
              style={svc.featured ? {
                border: '2px solid rgba(120,80,155,0.32)',
                boxShadow: '0 0 0 4px rgba(120,80,155,0.07), 0 4px 18px rgba(120,80,155,0.12)',
              } : {}}
            >
              <div className="service-icon" style={{ background: svc.iconBg }}>
                {svc.icon}
              </div>
              <h3>{t(`${svc.key}.title`)}</h3>
              <p>{t(`${svc.key}.description`)}</p>
              <a href={svc.href} className="service-link">
                {t(`${svc.key}.button`)}
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-all-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.25rem; }
        @media (max-width: 1100px) { .services-all-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 700px) { .services-all-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 440px) { .services-all-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
