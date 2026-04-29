import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import MeetOurDoctors from '../components/MeetOurDoctors'
import ReviewBubbles from '../components/ReviewBubbles'
import ValueProps from '../components/ValueProps'
import InstagramFeed from '../components/InstagramFeed'
import InsuranceBanner from '../components/InsuranceBanner'
import { client } from '../sanity/lib/client'
import { featuredReviewsQuery } from '../sanity/lib/queries'
import type { SanityReview } from '../components/ReviewBubbles'

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
      <InstagramFeed />
    </>
  )
}
