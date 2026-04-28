'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  accentColor?: string
}

export default function FaqAccordion({
  items,
  accentColor = '#4A90A4',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            style={{
              background: '#fff',
              border: `1.5px solid ${isOpen ? accentColor : 'rgba(74,144,164,0.12)'}`,
              borderRadius: '1.25rem',
              overflow: 'hidden',
              transition: 'border-color 0.25s, box-shadow 0.25s',
              boxShadow: isOpen
                ? `0 8px 28px rgba(74,144,164,0.11)`
                : '0 2px 10px rgba(0,0,0,0.04)',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                background: isOpen ? `${accentColor}08` : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1rem',
                transition: 'background 0.2s',
              }}
            >
              <span
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: isOpen ? accentColor : '#3D3D3D',
                  lineHeight: 1.4,
                  transition: 'color 0.2s',
                }}
              >
                {item.question}
              </span>

              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                style={{ flexShrink: 0, color: accentColor, display: 'flex' }}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
                    opacity: { duration: 0.22 },
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      padding: '0.25rem 1.5rem 1.4rem',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: '#6b7280',
                      margin: 0,
                      fontWeight: 500,
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
