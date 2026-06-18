import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Our Team | Kids Dentist Grayslake, IL',
  description:
    'Get to know the friendly faces behind Kids Dentist Grayslake. Our front office, hygiene, and dental assistant team make every visit warm, easy, and genuinely fun for kids.',
  openGraph: {
    title: 'Meet Our Team | Kids Dentist Grayslake, IL',
    description:
      'The people who make every visit warm, easy, and genuinely fun for kids and their families.',
    url: 'https://kidsdds.com/about/meet-the-team',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

const PLACEHOLDER_COUNT = 11

const SilhouetteIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(74,144,164,0.30)"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

export default function MeetTheTeamPage() {
  return (
    <SubPageLayout
      title="Meet Our Team"
      subtitle="Warm, skilled, and genuinely passionate about making dental visits great for kids."
      kicker="Our People"
    >
      <div className="max-w-5xl mx-auto px-4" style={{ marginBottom: '4rem' }}>

        {/* Coming-soon callout */}
        <AnimatedSection>
          <div
            style={{
              background: 'linear-gradient(135deg, #FDF9F4 0%, #FAF3E8 100%)',
              border: '1.5px solid rgba(74,144,164,0.14)',
              borderRadius: '1.5rem',
              padding: '1.25rem 2rem',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              textAlign: 'center',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--brand-600)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--brand-600)',
                margin: 0,
              }}
            >
              Fresh team headshots are on the way — check back next week!
            </p>
          </div>
        </AnimatedSection>

        {/* Placeholder grid */}
        <div className="team-placeholder-grid">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <div style={{ textAlign: 'center' }}>
                {/* Photo placeholder */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '1.5rem',
                    background: 'var(--bg)',
                    border: '1.5px dashed rgba(74,144,164,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.9rem',
                  }}
                >
                  <SilhouetteIcon />
                </div>

                {/* Skeleton name bar */}
                <div
                  style={{
                    height: '0.8rem',
                    background: 'rgba(74,144,164,0.10)',
                    borderRadius: '100px',
                    maxWidth: '90px',
                    margin: '0 auto 0.4rem',
                  }}
                />
                {/* Skeleton role bar */}
                <div
                  style={{
                    height: '0.6rem',
                    background: 'rgba(74,144,164,0.07)',
                    borderRadius: '100px',
                    maxWidth: '70px',
                    margin: '0 auto',
                  }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      <style>{`
        .team-placeholder-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 900px) {
          .team-placeholder-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 580px) {
          .team-placeholder-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </SubPageLayout>
  )
}
