import React from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingWidget from '../../components/FloatingWidget'
import AnnouncementBanner from '../../components/AnnouncementBanner'
import BannerWrapper from '../../components/BannerWrapper'
import { locales } from '../../i18n.config'
import '../../styles/global.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kidsdds.com'),
  title: {
    default: 'Pediatric Dentist Grayslake, IL | Kids Dentist',
    template: '%s | Kids Dentist',
  },
  description:
    'Kids Dentist in Grayslake, IL provides gentle, expert pediatric dental care for infants through teens. Request an appointment today.',
  openGraph: {
    siteName: 'Kids Dentist',
    type: 'website',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Kids Dentist',
  url: 'https://kidsdds.com',
  telephone: '+1-847-223-1400',
  image: 'https://kidsdds.com/brand_assets/kids-dentist-logo.png',
  description:
    'Pediatric dental practice in Grayslake, IL providing gentle, expert care for children from infancy through adolescence.',
  medicalSpecialty: 'Pediatric Dentistry',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '160 Commerce Dr #100',
    addressLocality: 'Grayslake',
    addressRegion: 'IL',
    postalCode: '60030',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.3417,
    longitude: -88.0403,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  sameAs: ['https://www.google.com/maps/place/Kids+Dentist'],
  priceRange: '$$',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!(locales as readonly string[]).includes(locale)) notFound()

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
      </head>
      <body className="site-root">
        <NextIntlClientProvider messages={messages}>
          <BannerWrapper>
            <AnnouncementBanner />
          </BannerWrapper>
          <Header />
          <main className="container main-content">{children}</main>
          <Footer />
          <FloatingWidget />
        </NextIntlClientProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
