'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { sendGAEvent } from '@/lib/gtag'
import SaveContactQR from '@/components/SaveContactQR'

const TRUST_SIGNALS = [
  { icon: '🏆', labelKey: 'trust0Label', detailKey: 'trust0Detail' },
  { icon: '⭐', labelKey: 'trust1Label', detailKey: 'trust1Detail' },
  { icon: '🚨', labelKey: 'trust3Label', detailKey: 'trust3Detail' },
  { icon: '🦷', labelKey: 'trust4Label', detailKey: 'trust4Detail' },
  { icon: '💜', labelKey: 'trust5Label', detailKey: 'trust5Detail' },
]

const DENTIST_OPTIONS = [
  { value: '', nameKey: null },
  { value: 'dr-sonia-gutierrez', nameKey: 'soniaName' },
  { value: 'dr-dave-rutcosky', nameKey: 'daveName' },
  { value: 'dr-sahar-alrayyes', nameKey: 'saharName' },
  { value: 'dr-anne-ashley-compton', nameKey: 'anneAshleyName' },
] as const

const VISIT_REASONS = [
  { value: 'First Visit (New Patient)', key: 'reason0' },
  { value: 'Routine Cleaning & Exam', key: 'reason1' },
  { value: 'Toothache or Pain', key: 'reason2' },
  { value: 'Dental Injury or Emergency', key: 'reason3' },
  { value: 'Follow-up / Ongoing Treatment', key: 'reason4' },
  { value: 'Consultation (Sedation or Special Needs)', key: 'reason5' },
  { value: 'Other', key: 'reason6' },
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

function calculateAge(dob: string): string {
  if (!dob) return ''
  const birthDate = new Date(dob)
  if (Number.isNaN(birthDate.getTime())) return ''
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age >= 0 ? String(age) : ''
}

export default function AppointmentForm() {
  const t = useTranslations('appointmentForm')
  const tAbout = useTranslations('about')
  const searchParams = useSearchParams()
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    childDob: '',
    reason: '',
    preferredDentist: searchParams.get('dentist') ?? '',
    preferredDay: '',
    preferredTime: '',
    notes: '',
  })

  function change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    if (name === 'childDob') {
      setForm((f) => ({ ...f, childDob: value, childAge: calculateAge(value) }))
      return
    }
    setForm((f) => ({ ...f, [name]: value }))
  }

  function getStyle(field: string) {
    return focused === field ? focusedStyle : inputStyle
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      sendGAEvent('appointment_submitted', { reason: form.reason, preferred_dentist: form.preferredDentist })
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
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
              {t('kicker')}
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
            {t('title')}
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
            {t('subtitle')}
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

                    {/* Section 1 - Parent info */}
                    {sectionHead('1', t('section1Title'), t('section1Sub'))}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label htmlFor="parentName" style={labelStyle}>
                          {t('fullName')} <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          required
                          placeholder={t('placeholderName')}
                          value={form.parentName}
                          onChange={change}
                          onFocus={() => setFocused('parentName')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('parentName')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          {t('emailAddress')} <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder={t('placeholderEmail')}
                          value={form.email}
                          onChange={change}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('email')}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" style={labelStyle}>
                          {t('phoneNumber')} <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder={t('placeholderPhone')}
                          value={form.phone}
                          onChange={change}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('phone')}
                        />
                      </div>
                    </div>

                    {divider}

                    {/* Section 2 - Child info */}
                    {sectionHead('2', t('section2Title'), t('section2Sub'))}
                    <div style={{ marginBottom: '1rem' }}>
                      <label htmlFor="childName" style={labelStyle}>
                        {t('childName')} <span style={{ color: '#E97D63' }}>*</span>
                      </label>
                      <input
                        id="childName"
                        name="childName"
                        type="text"
                        required
                        placeholder={t('placeholderChildName')}
                        value={form.childName}
                        onChange={change}
                        onFocus={() => setFocused('childName')}
                        onBlur={() => setFocused(null)}
                        style={getStyle('childName')}
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label htmlFor="childDob" style={labelStyle}>
                          {t('dob')} <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="childDob"
                          name="childDob"
                          type="date"
                          required
                          value={form.childDob}
                          onChange={change}
                          onFocus={() => setFocused('childDob')}
                          onBlur={() => setFocused(null)}
                          style={getStyle('childDob')}
                        />
                      </div>
                      <div>
                        <label htmlFor="childAge" style={labelStyle}>
                          {t('childAge')} <span style={{ color: '#E97D63' }}>*</span>
                        </label>
                        <input
                          id="childAge"
                          name="childAge"
                          type="text"
                          required
                          readOnly
                          placeholder={t('placeholderChildAge')}
                          value={form.childAge}
                          onChange={change}
                          style={{ ...getStyle('childAge'), background: 'rgba(107,168,153,0.08)', cursor: 'not-allowed' }}
                        />
                      </div>
                    </div>

                    {divider}

                    {/* Section 3 - Reason for visit */}
                    {sectionHead('3', t('section3Title'), t('section3Sub'))}
                    <div style={{ marginBottom: '1rem' }}>
                      <label htmlFor="reason" style={labelStyle}>
                        {t('reasonQuestion')} <span style={{ color: '#E97D63' }}>*</span>
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
                        <option value="" disabled>{t('selectReason')}</option>
                        {VISIT_REASONS.map((r) => (
                          <option key={r.value} value={r.value}>{t(r.key)}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label htmlFor="preferredDentist" style={labelStyle}>
                        {t('preferredDentist')}
                      </label>
                      <select
                        id="preferredDentist"
                        name="preferredDentist"
                        value={form.preferredDentist}
                        onChange={change}
                        onFocus={() => setFocused('preferredDentist')}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...getStyle('preferredDentist'),
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A90A4' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          paddingRight: '2.5rem',
                          color: form.preferredDentist ? '#3D3D3D' : '#9ca3af',
                        }}
                      >
                        {DENTIST_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.nameKey ? tAbout(opt.nameKey) : t('noPreferenceDentist')}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="notes" style={labelStyle}>
                        {t('additionalNotes')}
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder={t('notesPlaceholder')}
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

                    {/* Section 4 - Preferred timing */}
                    {sectionHead('4', t('section4Title'), t('section4Sub'))}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label htmlFor="preferredDay" style={labelStyle}>
                          {t('preferredDay')}
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
                          <option value="">{t('noPreference')}</option>
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((d, i) => (
                            <option key={d} value={d}>{t(`day${i}`)}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="preferredTime" style={labelStyle}>
                          {t('preferredTime')}
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
                          <option value="">{t('noPreference')}</option>
                          <option value="Morning (8am – 12pm)">{t('morningOption')}</option>
                          <option value="Afternoon (12pm – 5pm)">{t('afternoonOption')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <div style={{ marginTop: '2rem' }}>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.97 }}
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
                          cursor: loading ? 'not-allowed' : 'pointer',
                          opacity: loading ? 0.75 : 1,
                          boxShadow: '0 8px 26px rgba(232,147,79,0.38)',
                        }}
                      >
                        {loading ? t('submitting') : t('submitButton')}
                      </motion.button>
                      {error && (
                        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#E97D63', margin: '0.75rem 0 0', fontWeight: 600 }}>
                          {t('errorPrefix')}{' '}
                          <a href="tel:+18472231400" style={{ color: '#E97D63' }}>(847) 223-1400</a>.
                        </p>
                      )}
                      <p
                        style={{
                          textAlign: 'center',
                          fontSize: '0.78rem',
                          color: '#9ca3af',
                          margin: '0.85rem 0 0',
                          fontWeight: 500,
                        }}
                      >
                        {t('confirmNote')}{' '}
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
                  {t('successHeading')}
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
                  {t('successBodyPrefix', { firstName: form.parentName.split(' ')[0], childName: form.childName })}{' '}
                  <strong style={{ color: '#4A90A4' }}>{form.phone}</strong> {t('successBodySuffix')}
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
                    {t('backToHome')}
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
                    {t('whatToExpect')}
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
                {t('whyChooseHeading')}
              </h2>
              <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: '0 0 1.5rem', fontWeight: 500, lineHeight: 1.55 }}>
                {t('whyChooseSub')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {TRUST_SIGNALS.map((signal) => (
                  <div
                    key={signal.labelKey}
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
                        {t(signal.labelKey)}
                      </p>
                      <p style={{ fontSize: '0.78rem', opacity: 0.82, margin: 0, fontWeight: 500, lineHeight: 1.4 }}>
                        {t(signal.detailKey)}
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
                {t('preferCall')}
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
                {t('officeHoursShort')}
              </p>
              <div
                style={{
                  marginTop: '1.25rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(74,144,164,0.12)',
                }}
              >
                <SaveContactQR size={92} />
              </div>
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
