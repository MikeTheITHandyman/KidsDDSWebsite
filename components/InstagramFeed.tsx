'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

export type SanityInstagramPost = {
  _id: string
  image: SanityImageSource
  altText: string
  postUrl?: string
}

const INSTAGRAM_URL = 'https://www.instagram.com/kidsddsgrayslake/'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function InstagramFeed({ posts }: { posts: SanityInstagramPost[] }) {
  const hasPosts = posts && posts.length > 0

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
          transition={{ duration: 0.55, ease: EASE }}
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

          {/* Social links + Follow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.facebook.com/kidsddsgrayslake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kids Dentist on Facebook"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(24,119,242,0.10)', color: '#1877f2',
                border: '1.5px solid rgba(24,119,242,0.20)', transition: 'all 0.2s', textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kids Dentist on Instagram"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(220,39,67,0.08)', color: '#dc2743',
                border: '1.5px solid rgba(220,39,67,0.18)', transition: 'all 0.2s', textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'linear-gradient(135deg, var(--brand-purple), #a06fc8)',
                color: 'white', borderRadius: '100px', padding: '0.6rem 1.4rem',
                fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.88rem',
                textDecoration: 'none', boxShadow: '0 4px 16px rgba(120,80,155,0.30)',
              }}
            >
              Follow Us
            </motion.a>
          </div>
        </motion.div>

        {/* Photo grid — real images or fallback */}
        {hasPosts ? (
          <div
            className="ig-photo-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
            }}
          >
            {posts.map((post, i) => (
              <motion.a
                key={post._id}
                href={post.postUrl || INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                whileHover={{ scale: 1.04, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
                style={{
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
                  textDecoration: 'none',
                }}
                aria-label={`View Instagram post: ${post.altText}`}
              >
                <Image
                  src={urlFor(post.image).width(600).height(600).fit('crop').url()}
                  alt={post.altText}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </motion.a>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4rem 2rem',
              background: 'rgba(120,80,155,0.05)',
              borderRadius: '2rem',
              border: '1.5px dashed rgba(120,80,155,0.20)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #f09433 0%, #dc2743 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: 'var(--brand-purple)', margin: '0 0 0.4rem' }}>
              Follow us on Instagram
            </p>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#9ca3af', margin: 0 }}>
              @kidsddsgrayslake
            </p>
          </div>
        )}

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

      <style>{`
        @media (max-width: 640px) {
          .ig-photo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
