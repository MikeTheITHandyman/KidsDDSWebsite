'use client'

import { motion } from 'framer-motion'

const POSTS = [
  {
    id: 1,
    gradient: 'linear-gradient(135deg, #80d2f5 0%, #4A90A4 100%)',
    emoji: '😁',
    caption: 'Another smile for the day!',
    likes: 47,
    delay: 0,
  },
  {
    id: 2,
    gradient: 'linear-gradient(135deg, #fde68a 0%, #E8934F 100%)',
    emoji: '🦷',
    caption: 'Keeping those teeth sparkling clean.',
    likes: 62,
    delay: 0.05,
  },
  {
    id: 3,
    gradient: 'linear-gradient(135deg, #c4b5fd 0%, #78509b 100%)',
    emoji: '⭐',
    caption: 'Gold-star patients this week!',
    likes: 88,
    delay: 0.10,
  },
  {
    id: 4,
    gradient: 'linear-gradient(135deg, #6BA899 0%, #4A90A4 100%)',
    emoji: '🎉',
    caption: 'Celebrating a cavity-free year!',
    likes: 54,
    delay: 0.15,
  },
  {
    id: 5,
    gradient: 'linear-gradient(135deg, #fda4af 0%, #E97D63 100%)',
    emoji: '🪥',
    caption: 'Two minutes, twice a day — you got this!',
    likes: 39,
    delay: 0.20,
  },
  {
    id: 6,
    gradient: 'linear-gradient(135deg, #80d2f5 0%, #78509b 100%)',
    emoji: '💜',
    caption: 'Our team loves what they do.',
    likes: 73,
    delay: 0.25,
  },
]

export default function InstagramFeed() {
  return (
    <section
      aria-label="Kids Dentist on Instagram"
      style={{
        background: 'linear-gradient(180deg, #FDFCF8 0%, #f4f0f9 100%)',
        padding: '5rem 0 5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient decorations */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-60px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(128,210,245,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-80px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,80,155,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.25rem',
          }}
        >
          {/* Brand handle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Instagram gradient icon */}
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(220,39,67,0.28)',
              }}
              aria-hidden="true"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.15rem',
                  color: 'var(--brand-purple)',
                  letterSpacing: '-0.01em',
                }}
              >
                @kidsddsgrayslake
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#9ca3af' }}>
                Kids Dentist · Grayslake, IL
              </div>
            </div>
          </div>

          {/* Follow + social links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Facebook link */}
            <a
              href="https://www.facebook.com/kidsddsgrayslake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kids Dentist on Facebook"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(24,119,242,0.10)',
                color: '#1877f2',
                border: '1.5px solid rgba(24,119,242,0.20)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/kidsddsgrayslake/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kids Dentist on Instagram"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(220,39,67,0.08)',
                color: '#dc2743',
                border: '1.5px solid rgba(220,39,67,0.18)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* Follow button */}
            <motion.a
              href="https://www.instagram.com/kidsddsgrayslake/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'linear-gradient(135deg, var(--brand-purple), #a06fc8)',
                color: 'white',
                borderRadius: '100px',
                padding: '0.6rem 1.4rem',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.88rem',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(120,80,155,0.30)',
              }}
            >
              Follow Us
            </motion.a>
          </div>
        </motion.div>

        {/* 3×2 photo grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.875rem',
          }}
          className="ig-grid"
        >
          {POSTS.map((post) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/kidsddsgrayslake/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: post.delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
              style={{
                display: 'block',
                borderRadius: '18px',
                overflow: 'hidden',
                aspectRatio: '1 / 1',
                background: post.gradient,
                textDecoration: 'none',
                position: 'relative',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
              }}
              aria-label={post.caption}
            >
              {/* Emoji center */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '2.2rem', lineHeight: 1 }} aria-hidden="true">{post.emoji}</span>
              </div>

              {/* Hover overlay */}
              <div
                className="ig-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.42)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  padding: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'white' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'white' }}>
                    {post.likes}
                  </span>
                </div>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.88)',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    textAlign: 'center',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.35 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <p style={{ color: '#9ca3af', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.88rem', margin: '0 0 0.1rem' }}>
            Share your Kids Dentist visit!
          </p>
          <p style={{ color: '#9ca3af', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.82rem', margin: 0 }}>
            Tag us <strong style={{ color: 'var(--brand-purple)' }}>@kidsddsgrayslake</strong> — we love seeing your smiles.
          </p>
        </motion.div>
      </div>

      {/* Hover overlay CSS */}
      <style>{`
        .ig-overlay { opacity: 0 !important; }
        a:hover .ig-overlay { opacity: 1 !important; }
        @media (max-width: 640px) {
          .ig-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
