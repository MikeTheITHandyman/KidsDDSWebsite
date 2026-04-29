import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { featuredEventQuery } from '@/sanity/lib/queries'

interface FeaturedEvent {
  title: string
  slug: string
  eventDate: string
  location?: string
  excerpt?: string
}

export default async function AnnouncementBanner() {
  const event = await client.fetch<FeaturedEvent | null>(
    featuredEventQuery,
    {},
    { next: { revalidate: 300 } }
  )

  if (!event) return null

  const formatted = new Date(event.eventDate).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #78509b 0%, #5b3a7e 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '0.5rem 1rem',
        fontSize: '0.8rem',
        fontFamily: 'Nunito, sans-serif',
        fontWeight: 700,
        letterSpacing: '0.015em',
        position: 'relative',
        zIndex: 1200,
      }}
    >
      <Link
        href={`/about/recent-events/${event.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: 'white',
          textDecoration: 'none',
        }}
        className="banner-link"
      >
        <span aria-hidden="true">📅</span>
        <span>
          <strong>{event.title}</strong>
          {' · '}
          {formatted}
          {event.location && ` · ${event.location}`}
        </span>
        <span style={{ opacity: 0.85 }}>View Details →</span>
      </Link>

      <style>{`
        .banner-link:hover { opacity: 0.88; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(255,255,255,0.6); }
      `}</style>
    </div>
  )
}
