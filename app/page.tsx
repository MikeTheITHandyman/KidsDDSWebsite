import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import ValueProps from '../components/ValueProps'
import InsuranceBanner from '../components/InsuranceBanner'
import ReviewBubbles from '../components/ReviewBubbles'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ValueProps />
      <InsuranceBanner />
      <ReviewBubbles />
    </>
  )
}
