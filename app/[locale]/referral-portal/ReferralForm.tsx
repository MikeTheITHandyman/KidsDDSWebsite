'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'
import Link from 'next/link'

// ─── Field definitions ────────────────────────────────────────────────────────

const REFERRAL_REASONS = [
  'Orthodontic Clearance',
  'Caries / Restorative',
  'Special Needs Environment',
  'Sedation / General Anesthesia',
  'Dental Emergency',
  'Other / General Evaluation',
]

// ─── Shared style factories ───────────────────────────────────────────────────

const BASE_INPUT: React.CSSProperties = {
  width: '100%',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 600,
  fontSize: '0.95rem',
  color: '#3D3D3D',
  background: '#fff',
  border: '1.5px solid rgba(74,144,164,0.22)',
  borderRadius: '0.875rem',
  padding: '0.875rem 1.1rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.18s, box-shadow 0.18s',
}

const SELECT_ARROW = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A90A4' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`

function fieldStyle(
  name: string,
  focused: string | null,
  errors: Record<string, string>,
  touched: Record<string, boolean>,
): React.CSSProperties {
  const hasError = !!(touched[name] && errors[name])
  const isFocused = focused === name
  return {
    ...BASE_INPUT,
    borderColor: hasError ? '#E97D63' : isFocused ? '#4A90A4' : 'rgba(74,144,164,0.22)',
    boxShadow: hasError
      ? '0 0 0 3px rgba(233,125,99,0.12)'
      : isFocused
      ? '0 0 0 3px rgba(74,144,164,0.13)'
      : 'none',
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 700,
  fontSize: '0.80rem',
  color: '#6b7280',
  marginBottom: '0.38rem',
  letterSpacing: '0.02em',
}

function SectionTag({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        background: `${color}0D`,
        border: `1px solid ${color}22`,
        borderRadius: '100px',
        padding: '0.22rem 0.7rem',
        marginBottom: '1.25rem',
      }}
    >
      <span
        style={{
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 800,
          fontSize: '0.66rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color,
        }}
      >
        {children}
      </span>
    </div>
  )
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return (
    <p
      style={{
        fontFamily: 'Nunito, sans-serif',
        fontWeight: 700,
        fontSize: '0.75rem',
        color: '#E97D63',
        margin: '0.3rem 0 0',
      }}
      role="alert"
    >
      {msg}
    </p>
  )
}

const divider = (
  <div
    style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(74,144,164,0.14), transparent)',
      margin: '1.75rem 0',
    }}
  />
)

// ─── Main component ───────────────────────────────────────────────────────────

type FormState = {
  providerName: string
  contactEmail: string
  contactPhone: string
  guardianName: string
  patientDob: string
  reason: string
  clinicalNotes: string
}

const EMPTY_FORM: FormState = {
  providerName: '',
  contactEmail: '',
  contactPhone: '',
  guardianName: '',
  patientDob: '',
  reason: '',
  clinicalNotes: '',
}

function validate(form: FormState): Record<string, string> {
  const e: Record<string, string> = {}
  if (!form.providerName.trim()) e.providerName = 'Practice or provider name is required'
  if (!form.contactEmail.trim() || !form.contactEmail.includes('@'))
    e.contactEmail = 'A valid email address is required'
  if (!form.guardianName.trim()) e.guardianName = 'Guardian name is required'
  if (!form.patientDob) e.patientDob = 'Patient date of birth is required'
  if (!form.reason) e.reason = 'Please select a reason for referral'
  return e
}

export default function ReferralForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [focused, setFocused] = useState<string | null>(null)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const errors = validate(form)
  const isFormValid = Object.keys(errors).length === 0

  function change(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function blur(name: string) {
    setFocused(null)
    setTouched((t) => ({ ...t, [name]: true }))
  }

  function gs(name: string) {
    return fieldStyle(name, focused, errors, touched)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Mark all required fields as touched to show any remaining errors
    setTouched({ providerName: true, contactEmail: true, guardianName: true, patientDob: true, reason: true })
    if (!isFormValid) return

    setStatus('loading')
    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      sendGAEvent('event', 'partner_referral_submitted', { referral_reason: form.reason })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setForm(EMPTY_FORM)
    setTouched({})
    setStatus('idle')
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: '#fff',
              border: '1.5px solid rgba(107,168,153,0.24)',
              borderRadius: '2rem',
              padding: '4rem 2.5rem',
              textAlign: 'center',
              boxShadow: '0 6px 32px rgba(74,144,164,0.09)',
            }}
          >
            <div
              style={{
                width: '78px',
                height: '78px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4A90A4, #6BA899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.75rem',
                boxShadow: '0 8px 24px rgba(74,144,164,0.30)',
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
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
              Referral Received
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: 1.78,
                margin: '0 0 2.25rem',
                fontWeight: 500,
                maxWidth: '420px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              We have received your referral from{' '}
              <strong style={{ color: '#4A90A4' }}>{form.providerName}</strong>. Our scheduling
              team will contact {form.guardianName} within one business day to confirm the
              appointment.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(232,147,79,0.32)',
                }}
              >
                Send Another Referral
              </button>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(74,144,164,0.28)',
                }}
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(74,144,164,0.12)',
                borderRadius: '2rem',
                padding: '2.5rem',
                boxShadow: '0 6px 32px rgba(74,144,164,0.08)',
              }}
            >
              {/* ── Signature: live transmission indicator ─────────────────── */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem 0',
                  background: 'rgba(74,144,164,0.035)',
                  border: '1px solid rgba(74,144,164,0.11)',
                  borderRadius: '0.875rem',
                  padding: '0.7rem 1.25rem',
                  marginBottom: '2.25rem',
                }}
                aria-label="Form security status: HIPAA-compliant secure channel active"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0 0.85rem 0 0',
                  }}
                >
                  <span
                    className="ref-pulse-dot"
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#22c55e',
                      flexShrink: 0,
                      display: 'block',
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.73rem',
                      color: '#4A90A4',
                      letterSpacing: '0.03em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Secure channel active
                  </span>
                </div>

                <span
                  className="ref-divider"
                  style={{
                    width: '1px',
                    height: '14px',
                    background: 'rgba(74,144,164,0.22)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0 0.85rem',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A90A4"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.73rem',
                      color: '#4A90A4',
                      letterSpacing: '0.03em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    HIPAA Compliant Transmission
                  </span>
                </div>

                <span
                  className="ref-divider"
                  style={{
                    width: '1px',
                    height: '14px',
                    background: 'rgba(74,144,164,0.22)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0 0 0 0.85rem',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF6B18"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.73rem',
                      color: '#FF6B18',
                      letterSpacing: '0.03em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Fast Track Scheduling
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* ── Section 1: Referring Provider ──────────────────────── */}
                <SectionTag color="#78509b">Referring Provider</SectionTag>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  <div>
                    <label htmlFor="providerName" style={labelStyle}>
                      Practice / Provider Name <span style={{ color: '#E97D63' }}>*</span>
                    </label>
                    <input
                      id="providerName"
                      name="providerName"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Lakeview Pediatrics, Dr. Kim"
                      value={form.providerName}
                      onChange={change}
                      onFocus={() => setFocused('providerName')}
                      onBlur={() => blur('providerName')}
                      style={gs('providerName')}
                    />
                    <FieldError msg={touched.providerName ? errors.providerName : undefined} />
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1rem',
                    }}
                    className="ref-two-col"
                  >
                    <div>
                      <label htmlFor="contactEmail" style={labelStyle}>
                        Contact Email <span style={{ color: '#E97D63' }}>*</span>
                      </label>
                      <input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="referrals@practice.com"
                        value={form.contactEmail}
                        onChange={change}
                        onFocus={() => setFocused('contactEmail')}
                        onBlur={() => blur('contactEmail')}
                        style={gs('contactEmail')}
                      />
                      <FieldError msg={touched.contactEmail ? errors.contactEmail : undefined} />
                    </div>

                    <div>
                      <label htmlFor="contactPhone" style={labelStyle}>
                        Contact Phone
                      </label>
                      <input
                        id="contactPhone"
                        name="contactPhone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(847) 555-0100"
                        value={form.contactPhone}
                        onChange={change}
                        onFocus={() => setFocused('contactPhone')}
                        onBlur={() => blur('contactPhone')}
                        style={gs('contactPhone')}
                      />
                    </div>
                  </div>
                </div>

                {divider}

                {/* ── Section 2: Patient Information ──────────────────────── */}
                <SectionTag color="#4A90A4">Patient Information</SectionTag>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '0.25rem',
                  }}
                  className="ref-two-col"
                >
                  <div>
                    <label htmlFor="guardianName" style={labelStyle}>
                      Patient Guardian Name <span style={{ color: '#E97D63' }}>*</span>
                    </label>
                    <input
                      id="guardianName"
                      name="guardianName"
                      type="text"
                      required
                      autoComplete="off"
                      placeholder="Parent or legal guardian"
                      value={form.guardianName}
                      onChange={change}
                      onFocus={() => setFocused('guardianName')}
                      onBlur={() => blur('guardianName')}
                      style={gs('guardianName')}
                    />
                    <FieldError msg={touched.guardianName ? errors.guardianName : undefined} />
                  </div>

                  <div>
                    <label htmlFor="patientDob" style={labelStyle}>
                      Patient Date of Birth <span style={{ color: '#E97D63' }}>*</span>
                    </label>
                    <input
                      id="patientDob"
                      name="patientDob"
                      type="date"
                      required
                      max={new Date().toISOString().split('T')[0]}
                      value={form.patientDob}
                      onChange={change}
                      onFocus={() => setFocused('patientDob')}
                      onBlur={() => blur('patientDob')}
                      style={{
                        ...gs('patientDob'),
                        colorScheme: 'light',
                      }}
                    />
                    <FieldError msg={touched.patientDob ? errors.patientDob : undefined} />
                  </div>
                </div>

                {divider}

                {/* ── Section 3: Referral Details ─────────────────────────── */}
                <SectionTag color="#6BA899">Referral Details</SectionTag>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="reason" style={labelStyle}>
                    Reason for Referral <span style={{ color: '#E97D63' }}>*</span>
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    value={form.reason}
                    onChange={change}
                    onFocus={() => setFocused('reason')}
                    onBlur={() => blur('reason')}
                    style={{
                      ...gs('reason'),
                      appearance: 'none',
                      backgroundImage: SELECT_ARROW,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem',
                      color: form.reason ? '#3D3D3D' : '#9ca3af',
                    }}
                  >
                    <option value="" disabled>
                      Select a clinical reason…
                    </option>
                    {REFERRAL_REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <FieldError msg={touched.reason ? errors.reason : undefined} />
                </div>

                <div>
                  <label htmlFor="clinicalNotes" style={labelStyle}>
                    Supporting Clinical Notes{' '}
                    <span style={{ color: '#9ca3af', fontWeight: 600 }}>(optional)</span>
                  </label>
                  <textarea
                    id="clinicalNotes"
                    name="clinicalNotes"
                    rows={4}
                    placeholder="Relevant findings, treatment history, or anything that will help our team prepare for this patient…"
                    value={form.clinicalNotes}
                    onChange={change}
                    onFocus={() => setFocused('clinicalNotes')}
                    onBlur={() => blur('clinicalNotes')}
                    style={{
                      ...gs('clinicalNotes'),
                      resize: 'vertical',
                      minHeight: '100px',
                      lineHeight: 1.65,
                    }}
                  />
                </div>

                {/* ── Submit ──────────────────────────────────────────────── */}
                <div style={{ marginTop: '2rem' }}>
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: status === 'loading' ? 0 : -2 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                    transition={{ type: 'spring', stiffness: 360, damping: 18 }}
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
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      opacity: status === 'loading' ? 0.72 : 1,
                      boxShadow: '0 8px 28px rgba(232,147,79,0.36)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                    }}
                  >
                    {status === 'loading' ? (
                      'Sending…'
                    ) : (
                      <>
                        Send Referral
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  {status === 'error' && (
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        color: '#E97D63',
                        margin: '0.75rem 0 0',
                        fontWeight: 600,
                      }}
                      role="alert"
                    >
                      Submission failed — please call us directly at{' '}
                      <a href="tel:+18472231400" style={{ color: '#E97D63' }}>
                        (847) 223-1400
                      </a>
                    </p>
                  )}

                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '0.76rem',
                      color: '#9ca3af',
                      margin: '0.85rem 0 0',
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    Referral is transmitted securely. We respond within one business day.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes ref-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.38; transform: scale(0.78); }
        }
        .ref-pulse-dot {
          animation: ref-pulse 1.9s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ref-pulse-dot { animation: none; }
        }
        @media (max-width: 520px) {
          .ref-two-col { grid-template-columns: 1fr !important; }
          .ref-divider { display: none !important; }
        }
      `}</style>
    </>
  )
}
