import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import MeetOurDoctors from '../components/MeetOurDoctors'
import ReviewBubbles from '../components/ReviewBubbles'
import ValueProps from '../components/ValueProps'
import InstagramFeed from '../components/InstagramFeed'
import InsuranceBanner from '../components/InsuranceBanner'
import { client } from '../sanity/lib/client'
import { featuredReviewsQuery, instagramPostsQuery } from '../sanity/lib/queries'
import type { SanityReview } from '../components/ReviewBubbles'
import type { SanityInstagramPost } from '../components/InstagramFeed'

export default async function HomePage() {
  const [reviews, instagramPosts] = await Promise.all([
    client.fetch<SanityReview[]>(featuredReviewsQuery, {}, { next: { revalidate: 60 } }),
    client.fetch<SanityInstagramPost[]>(instagramPostsQuery, {}, { next: { revalidate: 300 } }),
  ])

  return (
    <>
      <Hero />
      <ServicesGrid />
      <InsuranceBanner />
      <MeetOurDoctors />
      <ReviewBubbles sanityReviews={reviews} />
      <ValueProps />
      <InstagramFeed posts={instagramPosts} />
    </>
  )
}
