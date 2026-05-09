import type { Metadata } from 'next'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import MeetOurDoctors from '../components/MeetOurDoctors'
import ReviewBubbles from '../components/ReviewBubbles'
import ValueProps from '../components/ValueProps'
import InsuranceBanner from '../components/InsuranceBanner'
import { client } from '../sanity/lib/client'
import { featuredReviewsQuery } from '../sanity/lib/queries'
import type { SanityReview } from '../components/ReviewBubbles'

export const metadata: Metadata = {
  title: 'Pediatric Dentist Grayslake, IL | Kids Dentist',
  description: "Grayslake's trusted pediatric dentist serving families from Waukegan, Libertyville, Mundelein, Vernon Hills, and Lake Forest. 650+ five-star reviews. Emergency visits available. In-Network with Delta Dental. Call (847) 223-1400.",
  alternates: { canonical: 'https://www.kidsdds.com/' },
  openGraph: {
    title: 'Pediatric Dentist Grayslake, IL | Kids Dentist',
    description: "Grayslake's top-rated children's dentist. Expert pediatric care for every child from their first tooth through the teen years. Emergency visits available same day.",
    url: 'https://www.kidsdds.com',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function HomePage() {
  const reviews = await client.fetch<SanityReview[]>(
    featuredReviewsQuery,
    {},
    { next: { revalidate: 60 } },
  )

  return (
    <>
      <Hero />
      <ServicesGrid />
      <InsuranceBanner />
      <MeetOurDoctors />
      <ReviewBubbles sanityReviews={reviews} />
      <ValueProps />
    </>
  )
}
