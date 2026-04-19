import React from 'react'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>Gentle Pediatric Dental Care in Grayslake</h1>
          <p>Compassionate, expert dentistry tailored for kids and their families.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/request-appointment">Request Appointment</a>
            <a className="btn btn-ghost" href="tel:+18472231400">Call (847) 223-1400</a>
          </div>
        </div>
      </section>

      <section className="intro container">
        <h2>Welcome</h2>
        <p>We provide friendly, family-centered pediatric dental care using modern techniques and a gentle approach.</p>
      </section>
    </>
  )
}
