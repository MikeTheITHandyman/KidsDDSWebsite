'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { urlFor } from '../../sanity/lib/image'

interface SanityPost {
  _id: string
  title: string
  slug: string
  author: string
  category?: string
  mainImage?: { asset: { _ref: string }; alt?: string }
  publishedAt?: string
  excerpt?: string
}

const CATEGORY_COLORS: Record<string, string> = {
  'Dental Tips':       '#4A90A4',
  'Practice News':     '#E8934F',
  'Child Health':      '#6BA899',
  'Parent Guide':      '#8BA596',
  'Behind the Scenes': '#E97D63',
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
}
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 55, damping: 14 } },
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function CategoryChip({ label }: { label?: string }) {
  if (!label) return null
  const color = CATEGORY_COLORS[label] ?? '#6BA899'
  return (
    <span className="blog-category-chip" style={{ background: `${color}18`, color }}>
      {label}
    </span>
  )
}

interface BlogGridProps {
  posts: SanityPost[]
}

function EmptyState() {
  return (
    <section className="blog-empty">
      <div className="blog-empty-inner">
        <div className="blog-empty-icon" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="rgba(107,168,153,0.10)"/>
            <path d="M20 22h24M20 30h16M20 38h20" stroke="#6BA899" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="46" cy="38" r="7" fill="rgba(232,147,79,0.15)" stroke="#E8934F" strokeWidth="2"/>
            <path d="M44 38h4M46 36v4" stroke="#E8934F" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="blog-empty-title">First post coming soon!</h2>
        <p className="blog-empty-sub">
          Our doctors are writing expert tips and guides for Grayslake families.
          Check back soon — or visit the Studio at{' '}
          <a href="/studio" className="blog-empty-link">/studio</a> to publish the first post.
        </p>
        <Link href="/request-appointment" className="btn-hero-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          Schedule an Appointment Instead
        </Link>
      </div>
    </section>
  )
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) return <EmptyState />

  const [featured, ...rest] = posts

  return (
    <section className="blog-section">
      <div className="blog-content">

        {/* ── Featured Post (first/latest) ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 55, damping: 14 }}
        >
          <Link href={`/blog/${featured.slug}`} className="blog-featured-card">
            <div className="blog-featured-image-wrap">
              {featured.mainImage ? (
                <Image
                  src={urlFor(featured.mainImage).width(1200).height(560).url()}
                  alt={featured.mainImage.alt ?? featured.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="blog-featured-img"
                  priority
                />
              ) : (
                <div className="blog-image-placeholder blog-featured-placeholder" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(107,168,153,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
              )}
              <div className="blog-featured-overlay" aria-hidden="true"/>
              <div className="blog-featured-meta">
                <CategoryChip label={featured.category} />
                <h2 className="blog-featured-title">{featured.title}</h2>
                {featured.excerpt && (
                  <p className="blog-featured-excerpt">{featured.excerpt}</p>
                )}
                <div className="blog-card-author-row">
                  <span className="blog-card-author">{featured.author}</span>
                  {featured.publishedAt && (
                    <span className="blog-card-date">{formatDate(featured.publishedAt)}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ── Card Grid ── */}
        {rest.length > 0 && (
          <motion.div
            className="blog-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {rest.map((post) => (
              <motion.article key={post._id} className="blog-card" variants={cardVariants}>
                <Link href={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image-wrap">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(340).url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="blog-card-img"
                      />
                    ) : (
                      <div className="blog-image-placeholder" aria-hidden="true">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(107,168,153,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                      </div>
                    )}
                    <div className="blog-card-chip-wrap">
                      <CategoryChip label={post.category} />
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{post.title}</h3>
                    {post.excerpt && (
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                    )}
                    <div className="blog-card-author-row">
                      <span className="blog-card-author">{post.author}</span>
                      {post.publishedAt && (
                        <span className="blog-card-date">{formatDate(post.publishedAt)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}
