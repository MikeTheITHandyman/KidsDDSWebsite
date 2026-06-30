'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Selection = null | 'yes' | 'no'

const OFFICE_HOURS = [
  { day: 'Monday', hours: '9:00 am – 5:00 pm' },
  { day: 'Tuesday', hours: '9:00 am – 5:00 pm' },
  { day: 'Wednesday', hours: '8:30 am – 5:00 pm' },
  { day: 'Thursday', hours: '9:00 am – 5:00 pm' },
  { day: 'Friday', hours: '8:00 am – 2:00 pm' },
]

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function EmergencyTriage() {
  const [selection, setSelection] = useState<Selection>(null)

  return (
    <div style={{ marginBottom: '4rem' }}>
      <AnimatePresence mode="wait">

        {selection === null && (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            style={{
              background: 'linear-gradient(135deg, rgba(107,75,200,0.05), rgba(74,144,164,0.05))',
              border: '1.5px solid rgba(107,75,200,0.14)',
              borderRadius: '1.75rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}
          >
            <p style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '0.7rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--cta-yellow)', margin: '0 0 0.65rem',
              textShadow: '0 1px 3px rgba(0,0,0,0.14)',
            }}>
              After-Hours Emergency
            </p>
            <h2 style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 900,
              fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
              color: 'var(--brand-purple)', margin: '0 0 1.75rem', lineHeight: 1.3,
            }}>
              Are you currently a patient of Kids Dentist?
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                onClick={() => setSelection('yes')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'linear-gradient(135deg, var(--brand-purple), #a06fc8)',
                  color: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                  fontSize: '0.975rem', padding: '0.85rem 2rem',
                  borderRadius: '100px', border: 'none', cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(107,75,200,0.28)',
                }}
              >
                Yes, I&apos;m a patient
              </motion.button>
              <motion.button
                onClick={() => setSelection('no')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: '#fff', color: 'var(--brand-purple)',
                  fontFamily: 'Nunito, sans-serif', fontWeight: 700,
                  fontSize: '0.975rem', padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  border: '1.5px solid rgba(107,75,200,0.22)', cursor: 'pointer',
                }}
              >
                I&apos;m not yet a patient
              </motion.button>
            </div>
          </motion.div>
        )}

        {selection === 'yes' && (
          <motion.div
            key="yes"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            style={{
              background: 'linear-gradient(135deg, rgba(61,189,189,0.09), rgba(107,168,153,0.12))',
              border: '1.5px solid rgba(74,144,164,0.28)',
              borderRadius: '1.75rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }} aria-hidden="true">📞</div>
            <p style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 600,
              fontSize: '1rem', color: '#4b5563', margin: '0 0 0.65rem', lineHeight: 1.6,
            }}>
              Please call our emergency line:
            </p>
            <a
              href="tel:+18472418886"
              style={{
                display: 'inline-block',
                fontFamily: 'Nunito, sans-serif', fontWeight: 900,
                fontSize: 'clamp(1.75rem, 4vw, 2.4rem)',
                color: 'var(--brand-teal)', textDecoration: 'none',
                letterSpacing: '-0.01em', lineHeight: 1,
              }}
            >
              (847) 241-8886
            </a>
            <div style={{ marginTop: '2rem' }}>
              <button
                onClick={() => setSelection(null)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif', fontWeight: 700,
                  fontSize: '0.85rem', color: '#9ca3af', padding: '0.3rem 0',
                }}
              >
                ← Back
              </button>
            </div>
          </motion.div>
        )}

        {selection === 'no' && (
          <motion.div
            key="no"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            style={{
              background: 'linear-gradient(135deg, rgba(253,242,220,0.7), rgba(254,249,235,0.85))',
              border: '1.5px solid rgba(217,119,6,0.18)',
              borderRadius: '1.75rem',
              padding: '2.25rem 2rem',
            }}
          >
            <p style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 600,
              fontSize: '0.975rem', color: '#4b5563', lineHeight: 1.78,
              margin: '0 0 1.5rem',
            }}>
              We apologize, but we are currently only able to provide after-hours emergency care to
              existing patients. Please call us during our normal office hours to schedule an
              appointment at{' '}
              <a
                href="tel:+18472231400"
                style={{ color: 'var(--brand-purple)', fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                (847) 223-1400
              </a>.
            </p>

            <div style={{
              background: '#fff', borderRadius: '1rem', padding: '1.25rem 1.5rem',
              border: '1px solid rgba(217,119,6,0.12)',
            }}>
              <p style={{
                fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '0.7rem',
                textTransform: 'uppercase', letterSpacing: '0.10em',
                color: 'var(--brand-purple)', margin: '0 0 0.85rem',
              }}>
                Office Hours
              </p>
              <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {OFFICE_HOURS.map(({ day, hours }) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <dt style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#6b7280' }}>{day}</dt>
                    <dd style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.88rem', color: '#374151', margin: 0 }}>{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <button
                onClick={() => setSelection(null)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif', fontWeight: 700,
                  fontSize: '0.85rem', color: '#9ca3af', padding: '0.3rem 0',
                }}
              >
                ← Back
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
