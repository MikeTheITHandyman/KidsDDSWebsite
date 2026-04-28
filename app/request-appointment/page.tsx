import { Suspense } from 'react'
import AppointmentForm from './AppointmentForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request an Appointment | Kids Dentist Grayslake, IL',
  description:
    'Request a pediatric dental appointment at Kids Dentist Grayslake. New patients welcome. Same-day appointments available. Call (847) 223-1400 for urgent needs.',
  openGraph: {
    title: 'Request an Appointment | Kids Dentist Grayslake, IL',
    description:
      'Book your child\'s next appointment at Kids Dentist Grayslake. We confirm within one business day.',
    url: 'https://kidsdds.com/request-appointment',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RequestAppointmentPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#FAFAF8' }} />}>
      <AppointmentForm />
    </Suspense>
  )
}
