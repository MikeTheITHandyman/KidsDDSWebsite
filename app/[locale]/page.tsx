import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import MeetOurDoctors from '@/components/MeetOurDoctors'
import ReviewBubbles from '@/components/ReviewBubbles'
import ValueProps from '@/components/ValueProps'
import InsuranceBanner from '@/components/InsuranceBanner'
import QuickActionsBar from '@/components/QuickActionsBar'
import { client } from '@/sanity/lib/client'
import { featuredReviewsQuery } from '@/sanity/lib/queries'
import type { SanityReview } from '@/components/ReviewBubbles'
import { getTranslations } from 'next-intl/server'
import { ogLocale, localizedUrl, localeAlternates } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'homePage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: localizedUrl('/', locale), languages: localeAlternates('/') },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: localizedUrl('/', locale),
      siteName: 'Kids Dentist',
      locale: ogLocale(locale),
      type: 'website',
    },
  }
}

export default async function HomePage() {
  const reviews = await client.fetch<SanityReview[]>(
    featuredReviewsQuery,
    {},
    { next: { revalidate: 60 } },
  )

  // Individual Review schema only, sourced from real published reviews —
  // deliberately no aggregateRating here, since that figure isn't derived
  // from this dataset and shouldn't be asserted as schema-verified fact.
  const reviewSchemas = reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    author: { '@type': 'Person', name: r.parentName },
    reviewBody: r.reviewText,
    ...(r.date ? { datePublished: r.date } : {}),
    itemReviewed: { '@type': 'Dentist', name: 'Kids Dentist' },
  }))

  return (
    <>
      {reviewSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      ))}
      <QuickActionsBar />
      <Hero />
      <ServicesGrid />
      <InsuranceBanner />
      <MeetOurDoctors />
      <ReviewBubbles sanityReviews={reviews} />
      <ValueProps />
    </>
  )
}
