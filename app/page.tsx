import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import ValueProposition from '../components/ValueProposition'
import InsuranceBanner from '../components/InsuranceBanner'
import ServicesGrid from '../components/ServicesGrid'
import ReviewBubbles from '../components/ReviewBubbles'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ValueProposition />
      <InsuranceBanner />
      <ServicesGrid />
      <ReviewBubbles />
    </>
  )
}
