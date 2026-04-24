'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

const INTERVAL_MS = 5000
const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/Kids+Dentist/@42.3467,-88.0041,17z'

const reviews = [
  {
    stars: 5,
    text: "My daughter used to cry at every dentist visit. Now she actually asks to go back! The whole team here is truly incredible with kids.",
    author: 'Sarah M.',
    role: 'Mom of 3',
    initial: 'S',
    avatarBg: 'linear-gradient(135deg, #E8934F, #E97D63)',
    date: 'Nov 2024',
  },
  {
    stars: 5,
    text: 'Same-day appointment when my son chipped his tooth at recess. In and out in 45 minutes, calm the whole time. Absolute lifesavers.',
    author: 'James T.',
    role: 'Father',
    initial: 'J',
    avatarBg: 'linear-gradient(135deg, #4A90A4, #6BA899)',
    date: 'Oct 2024',
  },
  {
    stars: 5,
    text: "Finally a dentist who explains everything to ME, not just nods at my kid. Parent-first communication is real here — I always leave knowing the full picture.",
    author: 'Michelle K.',
    role: 'Mom',
    initial: 'M',
    avatarBg: 'linear-gradient(135deg, #6BA899, #8BA596)',
    date: 'Sep 2024',
  },
  {
    stars: 5,
    text: "Dr. Rutcosky is a miracle worker with our son who has sensory sensitivities. We tried three other practices before finding Kids Dentist. We're never leaving.",
    author: 'David & Laura P.',
    role: 'Parents',
    initial: 'D',
    avatarBg: 'linear-gradient(135deg, #4A90A4, #4A90A4)',
    date: 'Aug 2024',
  },
  {
    stars: 5,
    text: "Hablamos Español con el equipo sin ningún problema. El ambiente es tan acogedor y los médicos son extremadamente cuidadosos. ¡Altamente recomendado!",
    author: 'Maria G.',
    role: 'Mamá',
    initial: 'M',
    avatarBg: 'linear-gradient(135deg, #E8934F, #F4C77F)',
    date: 'Jul 2024',
  },
  {
    stars: 5,
    text: "My 4-year-old calls it 'the fun tooth place.' That honestly says it all. Front desk is warm, wait times are short, and the doctors are genuinely gifted.",
    author: 'Tanya R.',
    role: 'Mom',
    initial: 'T',
    avatarBg: 'linear-gradient(135deg, #7C3AED, #4A90A4)',
    date: 'Jun 2024',
  },
]

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

function Stars({ count }: { count: number }) {
  return (
    <div aria-label={`${count} out of 5 stars`} style={{ display: 'flex', gap: '2px', marginBottom: '1.25rem' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="20" height="20" viewBox="0 0 24 24"
          fill={i < count ? '#F4C77F' : 'none'}
          stroke={i < count ? '#E8934F' : '#e5e7eb'}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewBubbles() {
  const [[index, direction], setPage] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const paginate = (newDir: number) => {
    setPage(([prev]) => [
      (prev + newDir + reviews.length) % reviews.length,
      newDir,
    ])
  }

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => paginate(1), INTERVAL_MS)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, index])

  const review = reviews[index]

  return (
    <section
      aria-labelledby="reviews-heading"
      style={{
        background: 'linear-gradient(145deg, #2D6A7F 0%, #4A90A4 45%, #6BA899 100%)',
        padding: '5.5rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background rings */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '480px', height: '480px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '360px', height: '360px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
        }} />
        {/* Dot grid texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Header + rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '2.75rem' }}
        >
          {/* Review counter badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '100px',
              padding: '0.45rem 1.1rem',
              color: 'white',
              fontSize: '0.88rem',
              fontWeight: 800,
              fontFamily: 'Nunito, sans-serif',
            }}>
              {/* Stars inline */}
              <span style={{ display: 'flex', gap: '1px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F4C77F" stroke="none" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </span>
              <span>4.9 Rating</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>500+ Reviews</span>
            </div>
          </div>

          <span style={{
            display: 'block',
            fontSize: '0.78rem', fontWeight: 900,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '0.6rem',
            fontFamily: 'Nunito, sans-serif',
          }}>
            Happy Parents
          </span>
          <h2
            id="reviews-heading"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.18,
            }}
          >
            See Why Families Love Us
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative' }}
        >
          {/* Card area — fixed height to prevent layout shift */}
          <div style={{ position: 'relative', minHeight: '260px', overflow: 'hidden' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <article
                  style={{
                    background: 'white',
                    borderRadius: '2rem',
                    padding: '2.5rem 2.75rem',
                    width: '100%',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                  }}
                >
                  <Stars count={review.stars} />
                  <blockquote
                    style={{
                      margin: '0 0 1.75rem',
                      fontSize: '1.08rem',
                      fontWeight: 500,
                      color: '#374151',
                      lineHeight: 1.75,
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: review.avatarBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Nunito, sans-serif', fontWeight: 900,
                      fontSize: '1rem', color: 'white', flexShrink: 0,
                    }}>
                      {review.initial}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.92rem', color: 'var(--brand-600)' }}>
                        {review.author}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 500 }}>
                        {review.role} · {review.date}
                      </div>
                    </div>
                    {/* Google G mark */}
                    <div style={{ marginLeft: 'auto', opacity: 0.18 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                </article>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.75rem' }}>
            {/* Prev */}
            <NavButton onClick={() => paginate(-1)} label="Previous review" direction="left" />

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage([i, i > index ? 1 : -1])}
                  aria-label={`Go to review ${i + 1}`}
                  style={{
                    width: i === index ? '22px' : '7px',
                    height: '7px',
                    borderRadius: '100px',
                    border: 'none',
                    background: i === index ? 'white' : 'rgba(255,255,255,0.35)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <NavButton onClick={() => paginate(1)} label="Next review" direction="right" />
          </div>
        </div>

        {/* Share Your Experience CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <motion.a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.12)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              color: 'white',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              fontSize: '0.95rem',
              padding: '0.75rem 1.75rem',
              borderRadius: '100px',
              textDecoration: 'none',
              backdropFilter: 'blur(6px)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Share Your Experience With Us!
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

function NavButton({ onClick, label, direction }: { onClick: () => void; label: string; direction: 'left' | 'right' }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '40px', height: '40px', borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.35)',
        background: 'rgba(255,255,255,0.10)',
        color: 'white', cursor: 'pointer',
        flexShrink: 0, backdropFilter: 'blur(4px)',
        transition: 'background 0.2s, border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
      }}
    >
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )
}
