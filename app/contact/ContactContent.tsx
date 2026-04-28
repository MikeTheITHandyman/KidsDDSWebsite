'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

const HOURS = [
  { day: 'Monday', time: '9:00 am – 5:00 pm', open: true },
  { day: 'Tuesday', time: '9:00 am – 5:00 pm', open: true },
  { day: 'Wednesday', time: '8:30 am – 5:00 pm', open: true },
  { day: 'Thursday', time: '9:00 am – 5:00 pm', open: true },
  { day: 'Friday', time: '8:00 am – 2:00 pm', open: true },
  { day: 'Saturday', time: 'Closed', open: false },
  { day: 'Sunday', time: 'Closed', open: false },
]

const inputBase: React.CSSProperties = {
  width: '100%',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 600,
  fontSize: '0.95rem',
  color: '#3D3D3D',
  background: '#fff',
  border: '1.5px solid rgba(74,144,164,0.20)',
  borderRadius: '0.875rem',
  padding: '0.85rem 1.1rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.18s, box-shadow 0.18s',
}

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const focusStyle = (field: string): React.CSSProperties =>
    focused === field
      ? { ...inputBase, borderColor: '#4A90A4', boxShadow: '0 0 0 3px rgba(74,144,164,0.14)' }
      : inputBase

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* ── LEFT: Contact form ── */}
        <AnimatedSection direction="left">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#78509b',
                    marginBottom: '0.5rem',
                  }}
                >
                  Send Us a Message
                </span>
                <h2
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
                    color: '#4A90A4',
                    margin: '0 0 0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  We Would Love to Hear From You
                </h2>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#9ca3af',
                    fontWeight: 500,
                    margin: '0 0 2rem',
                    lineHeight: 1.6,
                  }}
                >
                  Fill out the form below and our team will be in touch within one business day.
                  For urgent matters, please call us directly.
                </p>

                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#6b7280', marginBottom: '0.4rem', letterSpacing: '0.02em' }}
                    >
                      Your Name <span style={{ color: '#E97D63' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={focusStyle('name')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label
                        htmlFor="email"
                        style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#6b7280', marginBottom: '0.4rem' }}
                      >
                        Email <span style={{ color: '#E97D63' }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        style={focusStyle('email')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#6b7280', marginBottom: '0.4rem' }}
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(847) 555-0100"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        style={focusStyle('phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#6b7280', marginBottom: '0.4rem' }}
                    >
                      Message <span style={{ color: '#E97D63' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you today?"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...focusStyle('message'),
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 340, damping: 18 }}
                    style={{
                      background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                      color: '#fff',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.975rem',
                      padding: '0.95rem 2rem',
                      borderRadius: '100px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 6px 22px rgba(232,147,79,0.35)',
                      marginTop: '0.25rem',
                    }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                style={{
                  background: 'linear-gradient(135deg, rgba(107,168,153,0.10), rgba(74,144,164,0.08))',
                  border: '2px solid rgba(107,168,153,0.25)',
                  borderRadius: '2rem',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6BA899, #4A90A4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    boxShadow: '0 6px 20px rgba(107,168,153,0.30)',
                    fontSize: '1.75rem',
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.35rem',
                    color: '#4A90A4',
                    margin: '0 0 0.65rem',
                  }}
                >
                  Message Received!
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#6b7280',
                    lineHeight: 1.7,
                    margin: '0 0 1.5rem',
                    fontWeight: 500,
                  }}
                >
                  Thank you, {form.name.split(' ')[0]}. Our team will be in touch within one
                  business day. If you need to reach us sooner, please call{' '}
                  <a href="tel:+18472231400" style={{ color: '#4A90A4', fontWeight: 700 }}>
                    (847) 223-1400
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                  style={{
                    background: 'none',
                    border: '1.5px solid rgba(74,144,164,0.3)',
                    borderRadius: '100px',
                    padding: '0.65rem 1.5rem',
                    color: '#4A90A4',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>

        {/* ── RIGHT: Office info + map ── */}
        <AnimatedSection direction="right" delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Office info card */}
            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(74,144,164,0.12)',
                borderRadius: '1.75rem',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(74,144,164,0.07)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  color: '#4A90A4',
                  margin: '0 0 1.5rem',
                }}
              >
                Office Information
              </h2>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.7rem',
                    background: 'rgba(74,144,164,0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1rem',
                  }}
                  aria-hidden="true"
                >
                  📍
                </div>
                <div>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.82rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 0.2rem' }}>
                    Address
                  </p>
                  <a
                    href="https://maps.google.com/?q=160+Commerce+Dr+%23100+Grayslake+IL+60030"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#3D3D3D', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', lineHeight: 1.55 }}
                  >
                    160 Commerce Dr #100<br />Grayslake, IL 60030
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.7rem',
                    background: 'rgba(107,168,153,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1rem',
                  }}
                  aria-hidden="true"
                >
                  📞
                </div>
                <div>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.82rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 0.2rem' }}>
                    Phone
                  </p>
                  <a
                    href="tel:+18472231400"
                    style={{ color: '#4A90A4', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
                  >
                    (847) 223-1400
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.7rem',
                    background: 'rgba(217,119,6,0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1rem',
                  }}
                  aria-hidden="true"
                >
                  🕐
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '0.82rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 0.65rem' }}>
                    Office Hours
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {HOURS.map((h) => (
                      <div
                        key={h.day}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '0.875rem',
                          color: h.open ? '#3D3D3D' : '#9ca3af',
                        }}
                      >
                        <span style={{ fontWeight: h.open ? 600 : 400 }}>{h.day}</span>
                        <span style={{ fontWeight: h.open ? 700 : 400 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder — 16:9 */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '1.75rem',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #DBEAFE, #BAE6FD 50%, #D1FAE5)',
                boxShadow: '0 8px 28px rgba(74,144,164,0.12)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ fontSize: '2rem' }} aria-hidden="true">🗺️</span>
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 900,
                      fontSize: '0.9rem',
                      color: '#4A90A4',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    160 Commerce Dr #100, Grayslake, IL
                  </p>
                  <a
                    href="https://maps.google.com/?q=160+Commerce+Dr+%23100+Grayslake+IL+60030"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      color: '#6BA899',
                      textDecoration: 'none',
                    }}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <Link
              href="/request-appointment"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                color: '#fff',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.9rem 1.5rem',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 6px 22px rgba(232,147,79,0.32)',
              }}
            >
              Request an Appointment
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
