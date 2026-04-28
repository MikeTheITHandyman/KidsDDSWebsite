'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const TRUST_SIGNALS = [
  { icon: '🏆', label: '30+ Years', detail: 'Serving Grayslake families since 1994' },
  { icon: '⭐', label: '4.9 Stars', detail: '500+ verified Google reviews' },
  { icon: '📅', label: 'Same-Day Available', detail: 'Call for urgent appointment needs' },
  { icon: '🚨', label: 'Emergency Visits', detail: 'Accepted for patients in pain' },
  { icon: '🦷', label: 'Board-Certified Only', detail: 'All four doctors are pediatric specialists' },
  { icon: '💜', label: 'Hablamos Español', detail: 'Spanish-speaking staff available' },
]

const VISIT_REASONS = [
  'First Visit (New Patient)',
  'Routine Cleaning & Exam',
  'Toothache or Pain',
  'Dental Injury or Emergency',
  'Follow-up / Ongoing Treatment',
  'Consultation (Sedation or Special Needs)',
  'Other',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 600,
  fontSize: '0.95rem',
  color: '#3D3D3D',
  background: '#fff',
  border: '1.5px solid rgba(74,144,164,0.20)',
  borderRadius: '0.875rem',
  padding: '0.875rem 1.1rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.18s, box-shadow 0.18s',
}

const focusedStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: '#4A90A4',
  boxShadow: '0 0 0 3px rgba(74,144,164,0.13)',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 700,
  fontSize: '0.82rem',
  color: '#6b7280',
  marginBottom: '0.4rem',
  letterSpacing: '0.02em',
}

export default function AppointmentForm() {
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    reason: '',
    preferredDay: '',
    preferredTime: '',
    notes: '',
  })

  function change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function getStyle(field: string) {
    return focused === field ? focusedStyle : inputStyle
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const sectionHead = (num: string, title: string, subtitle: string) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4A90A4, #6BA899)',
          color: '#fff',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 900,
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(74,144,164,0.28)',
        }}
      >
        {num}
      </div>
      <div>
        <h2
          style={{
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 900,
            fontSize: '1.05rem',
            color: '#4A90A4',
            margin: '0 0 0.15rem',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <p style={{ fontSize: '0.82rem', color: '#9ca3af', margin: 0, fontWeight: 500 }}>{subtitle}</p>
      </div>
    </div>
  )

  const divider = (
    <div
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(74,144,164,0.14), transparent)',
        margin: '2rem 0',
      }}
    />
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FAFAF8',
        paddingTop: '2rem',
        paddingBottom: '4rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {/* Page header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(74,144,164,0.08)',
              border: '1.5px solid rgba(74,144,164,0.16)',
              borderRadius: '100px',
              padding: '0.4rem 1.1rem',
              marginBottom: '1rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8934F', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 800,
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#4A90A4',
              }}
            >
              Schedule Your Visit
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#4A90A4',
              margin: '0 0 0.6rem',
              lineHeight: 1.15,
            }}
          >
            Request an Appointment
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#9ca3af',
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Complete the form below and our team will call to confirm within one business day.
          </p>
        </div>

        {/* Main grid: form + sidebar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 320px',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="appt-grid"
        >
          {/* ── FORM ── */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                <div
                  style={{
                    background: '#fff',
                    border: '1.5px solid rgba(74,144,164,0.11)',
                    borderRadius: '2rem',
                    padding: '2.5rem',
                    boxShadow: '0 6px 28px rgba(74,144,164,0.08)',
                  }}
                >
                  <form onSubmit={handleSubmit} noValidate>

                    {/* Section 1 — Parent info */}
                    {sectionHead('1', 'Parent / Guardian Info', 'We use this to confirm your appointment')}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label htmlFor="parentName" style={labelStyle}>
                          Full Name <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.parentName}
                          onChange={change}
                          onFocus={() => setFocused('parentName')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('parentName')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          Email Address <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@email.com"
                          value={form.email}
                          onChange={change}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('email')}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" style={labelStyle}>
                          Phone Number <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(847) 555-0100"
                          value={form.phone}
                          onChange={change}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('phone')}
                        />
                      </div>
                    </div>

                    {divider}

                    {/* Section 2 — Child info */}
                    {sectionHead('2', "Your Child's Information", "Tell us a little about who we'll be seeing")}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label htmlFor="childName" style={labelStyle}>
                          Child's Name <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="childName"
                          name="childName"
                          type="text"
                          required
                          placeholder="Emma Smith"
                          value={form.childName}
                          onChange={change}
                          onFocus={() => setFocused('childName')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('childName')}
                        />
                      </div>
                      <div>
                        <label htmlFor="childAge" style={labelStyle}>
                          Child's Age <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="childAge"
                          name="childAge"
                          type="number"
                          required
                          min="0"
                          max="18"
                          placeholder="e.g. 6"
                          value={form.childAge}
                          onChange={change}
                          onFocus={() => setFocused('childAge')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('childAge')}
                        />
                      </div>
                    </div>

                    {divider}

                    {/* Section 3 — Reason for visit */}
                    {sectionHead('3', 'Reason for Visit', 'Helps us prepare the right care for your child')}
                    <div style={{ marginBottom: '1rem' }}>
                      <label htmlFor="reason" style={labelStyle}>
                        What brings you in? <span style={{ color: '#E97D63' }}>*</span>
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        required
                        value={form.reason}
                        onChange={change}
                        onFocus={() => setFocused('reason')}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...getStyle('reason'),
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A90A4' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          paddingRight: '2.5rem',
                          color: form.reason ? '#3D3D3D' : '#9ca3af',
                        }}
                      >
                        <option value="" disabled>Select a reason…</option>
                        {VISIT_REASONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="notes" style={labelStyle}>
                        Additional Notes (optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Any details that would help us prepare for your visit…"
                        value={form.notes}
                        onChange={change}
                        onFocus={() => setFocused('notes')}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...getStyle('notes'),
                          resize: 'vertical',
                          minHeight: '80px',
                        }}
                      />
                    </div>

                    {divider}

                    {/* Section 4 — Preferred timing */}
                    {sectionHead('4', 'Preferred Timing', "We'll do our best to accommodate you")}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label htmlFor="preferredDay" style={labelStyle}>
                          Preferred Day
                        </label>
                        <select
                          id="preferredDay"
                          name="preferredDay"
                          value={form.preferredDay}
                          onChange={change}
                          onFocus={() => setFocused('preferredDay')}
                          onBlur={() => setFocused(null)}
                          style={{
                            ...getStyle('preferredDay'),
                            appearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A90A4' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            paddingRight: '2.5rem',
                            color: form.preferredDay ? '#3D3D3D' : '#9ca3af',
                          }}
                        >
                          <option value="">No preference</option>
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="preferredTime" style={labelStyle}>
                          Preferred Time
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={form.preferredTime}
                          onChange={change}
                          onFocus={() => setFocused('preferredTime')}
                          onBlur={() => setFocused(null)}
                          style={{
                            ...getStyle('preferredTime'),
                            appearance: 'none',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A90A4' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            paddingRight: '2.5rem',
                            color: form.preferredTime ? '#3D3D3D' : '#9ca3af',
                          }}
                        >
                          <option value="">No preference</option>
                          <option value="Morning (8am – 12pm)">Morning (8am – 12pm)</option>
                          <option value="Afternoon (12pm – 5pm)">Afternoon (12pm – 5pm)</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <div style={{ marginTop: '2rem' }}>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 18 }}
                        style={{
                          width: '100%',
                          background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                          color: '#fff',
                          fontFamily: 'Nunito, sans-serif',
                          fontWeight: 800,
                          fontSize: '1rem',
                          padding: '1rem 2rem',
                          borderRadius: '100px',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 8px 26px rgba(232,147,79,0.38)',
                        }}
                      >
                        Submit Appointment Request
                      </motion.button>
                      <p
                        style={{
                          textAlign: 'center',
                          fontSize: '0.78rem',
                          color: '#9ca3af',
                          margin: '0.85rem 0 0',
                          fontWeight: 500,
                        }}
                      >
                        We will call you within one business day to confirm.
                        For same-day needs, call{' '}
                        <a href="tel:+18472231400" style={{ color: '#4A90A4', fontWeight: 700 }}>
                          (847) 223-1400
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(107,168,153,0.22)',
                  borderRadius: '2rem',
                  padding: '4rem 2.5rem',
                  boxShadow: '0 6px 28px rgba(74,144,164,0.08)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6BA899, #4A90A4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 8px 24px rgba(107,168,153,0.32)',
                    fontSize: '2rem',
                    color: '#fff',
                  }}
                >
                  🎉
                </div>
                <h2
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.65rem',
                    color: '#4A90A4',
                    margin: '0 0 0.75rem',
                  }}
                >
                  Request Received!
                </h2>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#6b7280',
                    lineHeight: 1.75,
                    margin: '0 0 2rem',
                    fontWeight: 500,
                    maxWidth: '440px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  Thank you, {form.parentName.split(' ')[0]}! We have received your appointment
                  request for {form.childName} and our team will call you at{' '}
                  <strong style={{ color: '#4A90A4' }}>{form.phone}</strong> within one business
                  day to confirm your appointment.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href="/"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                      color: '#fff',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      padding: '0.8rem 1.75rem',
                      borderRadius: '100px',
                      textDecoration: 'none',
                      boxShadow: '0 6px 20px rgba(232,147,79,0.32)',
                    }}
                  >
                    Back to Home
                  </Link>
                  <Link
                    href="/for-patients/child-first-visit"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#4A90A4',
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      padding: '0.8rem 1.75rem',
                      borderRadius: '100px',
                      textDecoration: 'none',
                      border: '1.5px solid rgba(74,144,164,0.28)',
                    }}
                  >
                    What to Expect →
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── SIDEBAR ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Why choose us */}
            <div
              style={{
                background: 'linear-gradient(145deg, #4A90A4, #6BA899)',
                borderRadius: '1.75rem',
                padding: '2rem',
                color: '#fff',
                boxShadow: '0 8px 28px rgba(74,144,164,0.24)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  margin: '0 0 0.3rem',
                  lineHeight: 1.3,
                }}
              >
                Why Families Choose Us
              </h2>
              <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: '0 0 1.5rem', fontWeight: 500, lineHeight: 1.55 }}>
                You are in good hands — here is why.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {TRUST_SIGNALS.map((signal) => (
                  <div
                    key={signal.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      background: 'rgba(255,255,255,0.12)',
                      borderRadius: '1rem',
                      padding: '0.85rem 1rem',
                    }}
                  >
                    <span style={{ fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
                      {signal.icon}
                    </span>
                    <div>
                      <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '0.88rem', margin: '0 0 0.15rem', lineHeight: 1.2 }}>
                        {signal.label}
                      </p>
                      <p style={{ fontSize: '0.78rem', opacity: 0.82, margin: 0, fontWeight: 500, lineHeight: 1.4 }}>
                        {signal.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick call card */}
            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(74,144,164,0.12)',
                borderRadius: '1.5rem',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(74,144,164,0.06)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: '#9ca3af',
                  margin: '0 0 0.4rem',
                }}
              >
                Prefer to call?
              </p>
              <a
                href="tel:+18472231400"
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  color: '#4A90A4',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                (847) 223-1400
              </a>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: '#9ca3af',
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Mon–Fri · 8:00 am – 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .appt-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
