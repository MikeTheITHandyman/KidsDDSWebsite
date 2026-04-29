import type { Metadata } from 'next'
import SubPageLayout from '@/components/SubPageLayout'
import { client } from '../../../sanity/lib/client'
import { allEventsQuery } from '../../../sanity/lib/queries'
import EventsGrid, { type SanityEvent } from './EventsGrid'

export const metadata: Metadata = {
  title: 'Recent Events | Kids Dentist Grayslake, IL',
  description:
    'Stay up to date with community events, practice news, and special programs at Kids Dentist in Grayslake, IL.',
  openGraph: {
    title: 'Recent Events | Kids Dentist Grayslake, IL',
    description: 'Community events and practice updates from Kids Dentist, Grayslake IL.',
    url: 'https://kidsdds.com/about/recent-events',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function RecentEventsPage() {
  const events = await client.fetch<SanityEvent[]>(
    allEventsQuery,
    {},
    { next: { revalidate: 60 } },
  )

  return (
    <SubPageLayout
      kicker="Community & Updates"
      title="Recent Events"
      subtitle="Practice news, community programs, and everything happening at Kids Dentist."
      gradient="blue"
    >
      <EventsGrid events={events} />
    </SubPageLayout>
  )
}
