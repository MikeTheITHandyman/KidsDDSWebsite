import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { client } from '../../../../sanity/lib/client'
import { eventBySlugQuery } from '../../../../sanity/lib/queries'
import { urlFor } from '../../../../sanity/lib/image'

interface SanityEvent {
  _id: string
  title: string
  slug: string
  mainImage?: { asset: { _ref: string }; alt?: string }
  excerpt?: string
  body?: unknown[]
  eventDate?: string
  location?: string
  registrationUrl?: string
}

export const dynamicParams = true
export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const events = await client.fetch<{ slug: string }[]>(
    `*[_type == "event"]{ "slug": slug.current }`
  )
  return events
    .filter((e) => Boolean(e.slug))
    .map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event: SanityEvent | null = await client.fetch(eventBySlugQuery, { slug })
  if (!event) return { title: 'Event Not Found' }

  const ogImage = event.mainImage
    ? urlFor(event.mainImage).width(1200).height(630).url()
    : undefined

  return {
    title: `${event.title} | Kids Dentist Events`,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      url: `https://kidsdds.com/about/recent-events/${slug}`,
      siteName: 'Kids Dentist',
      locale: 'en_US',
      type: 'article',
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.excerpt,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal:     ({ children }) => <p className="blog-pt-p">{children}</p>,
    h2:         ({ children }) => <h2 className="blog-pt-h2">{children}</h2>,
    h3:         ({ children }) => <h3 className="blog-pt-h3">{children}</h3>,
    h4:         ({ children }) => <h4 className="blog-pt-h4">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="blog-pt-blockquote">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-pt-ul">{children}</ul>,
    number: ({ children }) => <ol className="blog-pt-ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-pt-li">{children}</li>,
    number: ({ children }) => <li className="blog-pt-li">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="blog-pt-strong">{children}</strong>,
    em:     ({ children }) => <em>{children}</em>,
    code:   ({ children }) => <code className="blog-pt-code">{children}</code>,
    link:   ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="blog-pt-link">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="blog-pt-figure">
          <div className="blog-pt-image-wrap">
            <Image
              src={urlFor(value).width(900).url()}
              alt={value.alt ?? ''}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {value.caption && (
            <figcaption className="blog-pt-caption">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  })
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event: SanityEvent | null = await client.fetch(
    eventBySlugQuery,
    { slug },
    { next: { revalidate: 60 } },
  )

  if (!event) notFound()

  return (
    <article className="blog-post-article">

      {/* Back link */}
      <div className="blog-post-back-wrap">
        <Link href="/about/recent-events" className="blog-post-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Events
        </Link>
      </div>

      {/* Header */}
      <header className="blog-post-header">
        <span
          className="blog-post-category"
          style={{ background: 'rgba(120,80,155,0.10)', color: '#78509b' }}
        >
          Practice Event
        </span>
        <h1 className="blog-post-title">{event.title}</h1>
        <div className="blog-post-meta">
          {event.eventDate && (
            <span className="blog-card-date">{formatDate(event.eventDate)}</span>
          )}
          {event.location && (
            <span className="blog-card-author" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {event.location}
            </span>
          )}
        </div>
      </header>

      {/* Cover image */}
      {event.mainImage && (
        <div className="blog-post-image-wrap">
          <Image
            src={urlFor(event.mainImage).width(1200).height(560).url()}
            alt={event.mainImage.alt ?? event.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      {/* Body */}
      <div className="blog-post-body">
        {event.excerpt && (
          <p className="blog-post-excerpt">{event.excerpt}</p>
        )}
        {event.body && event.body.length > 0 ? (
          <PortableText value={event.body as any} components={portableTextComponents} />
        ) : (
          <p className="blog-post-coming-soon">
            Details coming soon —{' '}
            <a href="/studio" className="blog-empty-link">add content in the Studio</a>.
          </p>
        )}

        {/* External registration link */}
        {event.registrationUrl && (
          <div style={{ marginTop: '2rem' }}>
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                background: 'linear-gradient(135deg, #78509b, #a06fc8)',
                color: '#fff', fontFamily: 'Nunito, sans-serif',
                fontWeight: 800, fontSize: '0.95rem',
                padding: '0.85rem 2rem', borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 6px 22px rgba(120,80,155,0.30)',
              }}
            >
              Register / Learn More →
            </a>
          </div>
        )}
      </div>

    </article>
  )
}
