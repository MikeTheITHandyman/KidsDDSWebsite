'use client'

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
} as any

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 12 },
  },
} as any

const reviews = [
  {
    stars: 5,
    text: "My daughter used to cry at every dentist visit. Now she actually asks to go back! The whole team here is truly incredible with kids.",
    author: 'Sarah M.',
    role: 'Mom of 3',
    initial: 'S',
    color: '#E8934F',
  },
  {
    stars: 5,
    text: 'Same-day appointment when my son chipped his tooth at recess. In and out in 45 minutes, calm the whole time. Absolute lifesavers.',
    author: 'James T.',
    role: 'Father',
    initial: 'J',
    color: '#4A90A4',
  },
  {
    stars: 5,
    text: "Finally a dentist who explains everything to ME, not just nods at my kid. Parent-first communication is real here — I always leave knowing the full picture.",
    author: 'Michelle K.',
    role: 'Mom',
    initial: 'M',
    color: '#6BA899',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function ReviewBubbles() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="reviews-header">
        <span className="section-kicker">Happy Parents</span>
        <h2 id="reviews-heading">Families Love Us</h2>
        <p>Don&apos;t just take our word for it — here&apos;s what Grayslake parents say.</p>
      </div>

      <motion.div
        className="reviews-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {reviews.map((r) => (
          <motion.article
            key={r.author}
            className="review-card"
            variants={bubbleVariants}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300, damping: 18 },
            }}
          >
            <Stars count={r.stars} />
            <p className="review-text">&ldquo;{r.text}&rdquo;</p>
            <div className="review-author-row">
              <div className="review-avatar" style={{ background: r.color }}>
                {r.initial}
              </div>
              <div>
                <div className="review-author-name">{r.author}</div>
                <div className="review-author-role">{r.role}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
