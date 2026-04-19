import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Kids Dentist</div>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/for-patients">For Patients</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary" href="/request-appointment">Request Appointment</a>
          <a className="btn btn-ghost" href="tel:+18472231400">(847) 223-1400</a>
        </div>
      </div>
    </header>
  )
}
