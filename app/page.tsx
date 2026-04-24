import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import MeetOurDoctors from '../components/MeetOurDoctors'
import ReviewBubbles from '../components/ReviewBubbles'
import ValueProps from '../components/ValueProps'
import InstagramFeed from '../components/InstagramFeed'
import InsuranceBanner from '../components/InsuranceBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <MeetOurDoctors />
      <ReviewBubbles />
      <ValueProps />
      <InstagramFeed />
      <InsuranceBanner />
    </>
  )
}
