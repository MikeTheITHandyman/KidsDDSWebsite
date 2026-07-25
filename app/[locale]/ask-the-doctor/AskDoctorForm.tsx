'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

type FormState = {
  parentName: string
  email: string
  phone: string
  childName: string
  childAge: string
  childDob: string
  preferredDentist: string
  question: string
}

const inputBase: React.CSSProperties = {
  width: '100%',
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 600,
  fontSize: '0.95rem',
  color: '#3D3D3D',
  background: 'rgba(255,255,255,0.85)',
  border: '1.5px solid rgba(74,144,164,0.20)',
  borderRadius: '0.875rem',
  padding: '0.85rem 1.1rem',
  outline: 'none',
  boxSizing: 'border-box' as const,
  transition: 'border-color 0.18s, box-shadow 0.18s',
}

const sectionKicker: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Nunito, sans-serif',
  fontSize: '0.68rem',
  fontWeight: 900,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: '#78509b',
  marginBottom: '0.75rem',
  marginTop: '1.75rem',
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

const EMPTY: FormState = {
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  childAge: '',
  childDob: '',
  preferredDentist: 'no-preference',
  question: '',
}

export default function AskDoctorForm() {
  const t = useTranslations('askDoctorForm')
  const [form, setForm] = useState<FormState>(EMPTY)
  const [focused, setFocused] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (fieldErrors[name as keyof FormState]) {
      setFieldErrors((fe) => ({ ...fe, [name]: undefined }))
    }
  }

  function validate(): boolean {
    const errs: Partial<Record<keyof FormState, string>> = {}
    if (!form.parentName.trim()) errs.parentName = t('errParentName')
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = t('errEmail')
    if (!form.childName.trim()) errs.childName = t('errChildName')
    if (!form.childAge.trim()) errs.childAge = t('errChildAge')
    if (!form.childDob.trim()) errs.childDob = t('errChildDob')
    if (!form.question.trim()) errs.question = t('errQuestion')
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/ask-doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function focusStyle(field: string): React.CSSProperties {
    const hasError = fieldErrors[field as keyof FormState]
    if (hasError) return { ...inputBase, borderColor: '#E97D63', boxShadow: '0 0 0 3px rgba(233,125,99,0.12)' }
    if (focused === field) return { ...inputBase, borderColor: '#78509b', boxShadow: '0 0 0 3px rgba(120,80,155,0.12)' }
    return inputBase
  }

  const req = <span style={{ color: '#E97D63' }}>*</span>

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
        >

          {/* ── Parent / Guardian ── */}
          <span style={sectionKicker}>{t('sectionParentGuardian')}</span>

          {/* Full Name */}
          <div>
            <label htmlFor="parentName" style={labelStyle}>
              {t('fullName')} {req}
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              placeholder={t('placeholderName')}
              value={form.parentName}
              onChange={handleChange}
              onFocus={() => setFocused('parentName')}
              onBlur={() => setFocused(null)}
              style={focusStyle('parentName')}
            />
            {fieldErrors.parentName && (
              <p style={{ fontSize: '0.78rem', color: '#E97D63', margin: '0.3rem 0 0', fontWeight: 600 }}>{fieldErrors.parentName}</p>
            )}
          </div>

          {/* Email + Phone row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }} className="ask-two-col">
            <div>
              <label htmlFor="email" style={labelStyle}>
                {t('emailLabel')} {req}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t('placeholderEmail')}
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                style={focusStyle('email')}
              />
              {fieldErrors.email && (
                <p style={{ fontSize: '0.78rem', color: '#E97D63', margin: '0.3rem 0 0', fontWeight: 600 }}>{fieldErrors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" style={labelStyle}>
                {t('phoneNumber')}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t('placeholderPhone')}
                value={form.phone}
                onChange={handleChange}
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused(null)}
                style={focusStyle('phone')}
              />
            </div>
          </div>

          {/* ── Child's Info ── */}
          <span style={{ ...sectionKicker, color: '#4A90A4' }}>{t('sectionChildInfo')}</span>

          {/* Child Name + Age row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }} className="ask-two-col">
            <div>
              <label htmlFor="childName" style={labelStyle}>
                {t('childName')} {req}
              </label>
              <input
                id="childName"
                name="childName"
                type="text"
                required
                placeholder={t('placeholderChildName')}
                value={form.childName}
                onChange={handleChange}
                onFocus={() => setFocused('childName')}
                onBlur={() => setFocused(null)}
                style={focusStyle('childName')}
              />
              {fieldErrors.childName && (
                <p style={{ fontSize: '0.78rem', color: '#E97D63', margin: '0.3rem 0 0', fontWeight: 600 }}>{fieldErrors.childName}</p>
              )}
            </div>
            <div>
              <label htmlFor="childAge" style={labelStyle}>
                {t('age')} {req}
              </label>
              <input
                id="childAge"
                name="childAge"
                type="text"
                required
                placeholder={t('placeholderChildAge')}
                value={form.childAge}
                onChange={handleChange}
                onFocus={() => setFocused('childAge')}
                onBlur={() => setFocused(null)}
                style={focusStyle('childAge')}
              />
              {fieldErrors.childAge && (
                <p style={{ fontSize: '0.78rem', color: '#E97D63', margin: '0.3rem 0 0', fontWeight: 600 }}>{fieldErrors.childAge}</p>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="childDob" style={labelStyle}>
              {t('dob')} {req}
            </label>
            <input
              id="childDob"
              name="childDob"
              type="date"
              required
              value={form.childDob}
              onChange={handleChange}
              onFocus={() => setFocused('childDob')}
              onBlur={() => setFocused(null)}
              style={focusStyle('childDob')}
            />
            {fieldErrors.childDob && (
              <p style={{ fontSize: '0.78rem', color: '#E97D63', margin: '0.3rem 0 0', fontWeight: 600 }}>{fieldErrors.childDob}</p>
            )}
          </div>

          {/* ── Routing ── */}
          <span style={{ ...sectionKicker, color: '#D97706' }}>{t('sectionRouting')}</span>

          {/* Preferred Dentist */}
          <div>
            <label htmlFor="preferredDentist" style={labelStyle}>
              {t('specificDentist')} <span style={{ color: '#9ca3af', fontWeight: 500 }}>{t('optional')}</span>
            </label>
            <select
              id="preferredDentist"
              name="preferredDentist"
              value={form.preferredDentist}
              onChange={handleChange}
              onFocus={() => setFocused('preferredDentist')}
              onBlur={() => setFocused(null)}
              style={{
                ...focusStyle('preferredDentist'),
                appearance: 'none' as const,
                WebkitAppearance: 'none' as const,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A90A4' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
                cursor: 'pointer',
              }}
            >
              <option value="no-preference">{t('noPreference')}</option>
              <option value="dr-gutierrez">{t('optSonia')}</option>
              <option value="dr-rutcosky">{t('optDave')}</option>
              <option value="dr-alrayyes">{t('optSahar')}</option>
              <option value="dr-compton">{t('optAnne')}</option>
            </select>
          </div>

          {/* ── Message ── */}
          <span style={{ ...sectionKicker, color: '#6BA899' }}>{t('sectionYourQuestion')}</span>

          <div>
            <label htmlFor="question" style={labelStyle}>
              {t('questionLabel')} {req}
            </label>
            <textarea
              id="question"
              name="question"
              required
              rows={5}
              placeholder={t('placeholderQuestion')}
              value={form.question}
              onChange={handleChange}
              onFocus={() => setFocused('question')}
              onBlur={() => setFocused(null)}
              style={{
                ...focusStyle('question'),
                resize: 'vertical',
                minHeight: '130px',
              }}
            />
            {fieldErrors.question && (
              <p style={{ fontSize: '0.78rem', color: '#E97D63', margin: '0.3rem 0 0', fontWeight: 600 }}>{fieldErrors.question}</p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            transition={{ type: 'spring', stiffness: 340, damping: 18 }}
            style={{
              background: 'linear-gradient(135deg, #78509b, #9b6dc5)',
              color: '#fff',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 800,
              fontSize: '0.975rem',
              padding: '0.95rem 2rem',
              borderRadius: '100px',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.72 : 1,
              boxShadow: '0 6px 22px rgba(120,80,155,0.32)',
              marginTop: '0.35rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {loading ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ animation: 'spin 0.8s linear infinite' }}>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.25"/>
                  <path d="M21 12a9 9 0 00-9-9"/>
                </svg>
                {t('sending')}
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                {t('sendQuestion')}
              </>
            )}
          </motion.button>

          {error && (
            <p style={{ fontSize: '0.85rem', color: '#E97D63', margin: '0.5rem 0 0', fontWeight: 600, textAlign: 'center' }}>
              {t('errorPrefix')}{' '}
              <a href="tel:+18472231400" style={{ color: '#E97D63' }}>{t('callUsAt')}</a>{' '}
              {t('orEmail')}{' '}
              <a href="mailto:info@kidsdds.com" style={{ color: '#E97D63' }}>info@kidsdds.com</a>.
            </p>
          )}

          <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', margin: '0.25rem 0 0', fontWeight: 500 }}>
            {t('requiredNotePrefix')} <span style={{ color: '#E97D63' }}>*</span>
            {' '}{t('requiredNoteSuffix')}
          </p>

          <style>{`@keyframes spin { to { transform: rotate(360deg); } } @media (max-width: 540px) { .ask-two-col { grid-template-columns: 1fr !important; } }`}</style>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'linear-gradient(135deg, rgba(120,80,155,0.07), rgba(74,144,164,0.07))',
            border: '2px solid rgba(120,80,155,0.2)',
            borderRadius: '2rem',
            padding: '3rem 2rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #78509b, #4A90A4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 6px 22px rgba(120,80,155,0.28)',
              fontSize: '1.85rem',
            }}
          >
            ✓
          </div>
          <h3
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 900,
              fontSize: '1.4rem',
              color: '#78509b',
              margin: '0 0 0.65rem',
            }}
          >
            {t('questionSent')}
          </h3>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#6b7280',
              lineHeight: 1.72,
              margin: '0 0 1.75rem',
              fontWeight: 500,
              maxWidth: '420px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {t('successBodyPrefix', { firstName: form.parentName.split(' ')[0] })}{' '}
            <a href="tel:+18472231400" style={{ color: '#4A90A4', fontWeight: 700 }}>
              {t('callPhone')}
            </a>
            .
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(EMPTY); setFieldErrors({}) }}
            style={{
              background: 'none',
              border: '1.5px solid rgba(120,80,155,0.28)',
              borderRadius: '100px',
              padding: '0.65rem 1.6rem',
              color: '#78509b',
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            {t('askAnother')}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
