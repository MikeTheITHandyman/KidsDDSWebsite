import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

const LEGACY_REDIRECTS = [
  { source: '/services.html',            destination: '/services' },
  { source: '/pediatric-dentistry.html', destination: '/services/preventive-dentistry' },
  { source: '/restorative-care.html',    destination: '/services/restorative' },
  { source: '/emergency-dental.html',    destination: '/services/emergency' },
  { source: '/sedation.html',            destination: '/services/sedation-dentistry' },
  { source: '/meet-the-doctors.html',    destination: '/about/meet-the-dentists' },
  { source: '/contact-us.html',          destination: '/contact' },
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }))
  },
}

export default withNextIntl(nextConfig)
