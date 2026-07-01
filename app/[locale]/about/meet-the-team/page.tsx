import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import TeamCard from '@/components/TeamCard'
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

// Accent colors cycle across the nametags — reuses existing brand tokens only
const ACCENTS = [
  'var(--brand-teal)',
  'var(--serene-mint)',
  'var(--accent-pink)',
  'var(--cta-yellow)',
  'var(--brand-purple)',
]

// Alphabetical by first name. Roles/titles to be added once confirmed.
const TEAM_MEMBERS = [
  { firstName: 'Cassie', photoSrc: '/brand_assets/team/headshot-cassie.jpeg' },
  { firstName: 'Don', photoSrc: '/brand_assets/team/headshot-don.jpg' },
  { firstName: 'Eva', photoSrc: '/brand_assets/team/headshot-eva.jpg' },
  { firstName: 'Gabbie', photoSrc: '/brand_assets/team/headshot-gabbie.jpeg' },
  { firstName: 'Jannet', photoSrc: '/brand_assets/team/headshot-jannet.jpg' },
  { firstName: 'Maggie', photoSrc: '/brand_assets/team/headshot-maggie.jpeg' },
  { firstName: 'Maria', photoSrc: '/brand_assets/team/headshot-maria.jpeg' },
  { firstName: 'Michelle', photoSrc: '/brand_assets/team/headshot-michelle.jpeg' },
  { firstName: 'Noemi', photoSrc: '/brand_assets/team/headshot-noemi.jpeg' },
  { firstName: 'Olga', photoSrc: '/brand_assets/team/headshot-olga.jpeg' },
  { firstName: 'Sema', photoSrc: '/brand_assets/team/headshot-sema.jpeg' },
  { firstName: 'Stephenie', photoSrc: '/brand_assets/team/headshot-stephenie.jpeg' },
]

export default function MeetTheTeamPage() {
  return (
    <SubPageLayout
      title="Meet Our Team"
      subtitle="Warm, skilled, and genuinely passionate about making dental visits great for kids."
      kicker="Our People"
    >
      <div className="max-w-5xl mx-auto px-4" style={{ marginBottom: '4rem' }}>

        {/* Team grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, i) => (
            <AnimatedSection key={member.firstName} delay={i * 0.04}>
              <TeamCard
                photoSrc={member.photoSrc}
                firstName={member.firstName}
                alt={`Headshot of ${member.firstName}, a member of the Kids Dentist team in Grayslake, IL`}
                accent={ACCENTS[i % ACCENTS.length]}
              />
            </AnimatedSection>
          ))}
        </div>

      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 580px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </SubPageLayout>
  )
}
