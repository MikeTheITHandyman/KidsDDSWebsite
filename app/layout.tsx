import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/global.css'

export const metadata = {
  title: 'Kids Dentist - Grayslake, IL',
  description: 'Pediatric dentistry focused on gentle, expert care for children.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="site-root">
        <Header />
        <main className="container main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
