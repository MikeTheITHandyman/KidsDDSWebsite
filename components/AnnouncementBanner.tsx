import { client } from '@/sanity/lib/client'

interface PracticeEvent {
  name: string
  dateTime: string
  location?: string
  description?: string
  registrationUrl?: string
}

const QUERY = `*[_type == "event" && isPublished == true] | order(dateTime desc)[0] {
  name,
  dateTime,
  location,
  description,
  registrationUrl
}`

export default async function AnnouncementBanner() {
  const event = await client.fetch<PracticeEvent | null>(
    QUERY,
    {},
    { next: { revalidate: 300 } }
  )

  if (!event) return null

  const date = new Date(event.dateTime)
  const formatted = date.toLocaleDateString('en-US', {
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
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <span aria-hidden="true">📅</span>
        <span>
          <strong>{event.name}</strong>
          {' · '}
          {formatted}
          {event.location && ` · ${event.location}`}
        </span>
        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontWeight: 900,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(255,255,255,0.55)',
              textUnderlineOffset: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            Learn More →
          </a>
        )}
      </span>
    </div>
  )
}
