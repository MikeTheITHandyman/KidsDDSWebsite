'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { useTranslations, useLocale } from 'next-intl'

interface SanityParentQuestion {
  _id: string
  question_en: string
  question_es?: string
  category: string
  answer_en: unknown[]
  answer_es?: unknown[]
}

function localizedQuestion(q: SanityParentQuestion, locale: string): string {
  return locale === 'es' && q.question_es ? q.question_es : q.question_en
}

function localizedAnswer(q: SanityParentQuestion, locale: string): unknown[] {
  return locale === 'es' && q.answer_es && q.answer_es.length > 0 ? q.answer_es : q.answer_en
}

interface QAContentProps {
  questions: SanityParentQuestion[]
}

const CATEGORY_META = [
  {
    value: 'Parent Guilt',
    labelKey: 'category0',
    accent: '#6B4BC8',
    cardBg: 'linear-gradient(135deg, #EAE5F7, #DCD1F5)',
    tilt: -2.5,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.8z" />
      </svg>
    ),
  },
  {
    value: 'Fear of Being Judged',
    labelKey: 'category1',
    accent: '#3DBDBD',
    cardBg: 'linear-gradient(135deg, #E6F6F6, #C7ECEC)',
    tilt: 1.5,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    value: 'The 3 a.m. Questions',
    labelKey: 'category2',
    accent: '#4A90A4',
    cardBg: 'linear-gradient(135deg, #EAF7FE, #CBEBF9)',
    tilt: -1.5,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
  },
  {
    value: 'Money',
    labelKey: 'category3',
    accent: '#D97706',
    cardBg: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
    tilt: 2.5,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8.7c0-1.5-1.3-2.7-3-2.7s-3 1-3 2.3c0 3 6 1.4 6 4.4 0 1.4-1.3 2.3-3 2.3s-3-1-3-2.5" />
        <line x1="12" y1="4" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="20" />
      </svg>
    ),
  },
]

const qaPortableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="qa-pt-p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="qa-pt-ul">{children}</ul>,
    number: ({ children }) => <ol className="qa-pt-ul">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="qa-pt-li">{children}</li>,
    number: ({ children }) => <li className="qa-pt-li">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="qa-pt-strong">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="qa-pt-link">
        {children}
      </a>
    ),
  },
}

export default function QAContent({ questions }: QAContentProps) {
  const t = useTranslations('qaPage')
  const locale = useLocale()
  const [activeCategory, setActiveCategory] = useState(CATEGORY_META[0].value)
  const [openId, setOpenId] = useState<string | null>(null)

  const activeMeta = CATEGORY_META.find((c) => c.value === activeCategory)!
  const filteredQuestions = questions.filter((q) => q.category === activeCategory)

  function selectCategory(value: string) {
    setActiveCategory(value)
    setOpenId(null)
  }

  return (
    <div className="mx-auto max-w-3xl px-4">

      {/* ── Category tabs (tilted note cards) ── */}
      <div className="qa-tabs" role="tablist" aria-label={t('tabsAriaLabel')}>
        {CATEGORY_META.map((cat) => {
          const isActive = cat.value === activeCategory
          return (
            <motion.button
              key={cat.value}
              role="tab"
              aria-selected={isActive}
              onClick={() => selectCategory(cat.value)}
              className="qa-tab rounded-3xl"
              initial={false}
              animate={{
                rotate: isActive ? 0 : cat.tilt,
                y: isActive ? -4 : 0,
                scale: isActive ? 1.03 : 1,
              }}
              whileHover={{ rotate: 0, y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 340, damping: 22 }}
              style={{
                background: isActive ? cat.accent : '#fff',
                color: isActive ? '#fff' : cat.accent,
                boxShadow: isActive
                  ? `0 10px 26px ${cat.accent}40`
                  : '0 3px 12px rgba(0,0,0,0.06)',
              }}
            >
              <span className="qa-tab-icon">{cat.icon}</span>
              {t(cat.labelKey)}
            </motion.button>
          )
        })}
      </div>

      {/* ── Question list for the active category ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="qa-list"
        >
          {filteredQuestions.length === 0 ? (
            <div
              className="qa-empty rounded-3xl"
              style={{ background: activeMeta.cardBg, borderColor: `${activeMeta.accent}33` }}
            >
              <span className="qa-empty-icon" style={{ color: activeMeta.accent }}>{activeMeta.icon}</span>
              <p style={{ color: '#4b5563' }}>{t('emptyState')}</p>
              <Link
                href="/ask-us-a-question"
                className="qa-empty-cta"
                style={{ background: activeMeta.accent }}
              >
                {t('emptyStateCta')}
              </Link>
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const isOpen = openId === q._id
              return (
                <div
                  key={q._id}
                  className="qa-card rounded-3xl"
                  style={{
                    background: activeMeta.cardBg,
                    borderColor: isOpen ? activeMeta.accent : 'transparent',
                    boxShadow: isOpen
                      ? `0 14px 34px ${activeMeta.accent}26`
                      : '0 3px 14px rgba(0,0,0,0.05)',
                  }}
                >
                  <button
                    className="qa-card-question"
                    onClick={() => setOpenId(isOpen ? null : q._id)}
                    aria-expanded={isOpen}
                  >
                    <span style={{ color: isOpen ? activeMeta.accent : '#2D3748' }}>{localizedQuestion(q, locale)}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="qa-card-toggle"
                      style={{ color: activeMeta.accent, background: '#fff' }}
                    >
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.span>
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
                        <div className="qa-card-answer">
                          <PortableText value={localizedAnswer(q, locale) as any} components={qaPortableTextComponents} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })
          )}
        </motion.div>
      </AnimatePresence>

      <style>{`
        .qa-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.1rem 0.9rem;
          margin-bottom: 3rem;
        }
        .qa-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          padding: 0.85rem 1.4rem;
          font-family: Nunito, sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
          white-space: nowrap;
        }
        .qa-tab-icon { display: flex; flex-shrink: 0; }

        .qa-list { display: flex; flex-direction: column; gap: 1rem; }

        .qa-card {
          border: 1.5px solid transparent;
          overflow: hidden;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
        }
        .qa-card:hover { transform: translateY(-3px); }

        .qa-card-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 1.4rem 1.6rem;
          font-family: Nunito, sans-serif;
          font-weight: 800;
          font-size: 1.02rem;
          line-height: 1.4;
        }
        .qa-card-toggle {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qa-card-answer { padding: 0 1.6rem 1.6rem; }
        .qa-pt-p { margin: 0 0 0.9rem; font-size: 0.95rem; font-weight: 500; line-height: 1.75; color: #4b5563; }
        .qa-pt-p:last-child { margin-bottom: 0; }
        .qa-pt-ul { margin: 0 0 0.9rem; padding-left: 1.4rem; font-size: 0.95rem; font-weight: 500; line-height: 1.7; color: #4b5563; }
        .qa-pt-li { margin-bottom: 0.35rem; }
        .qa-pt-strong { color: #2D3748; font-weight: 800; }
        .qa-pt-link { color: var(--brand-600); font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }

        .qa-empty {
          text-align: center;
          padding: 3rem 2rem;
          border: 1.5px solid transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.9rem;
        }
        .qa-empty-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qa-empty p { max-width: 30rem; font-size: 0.95rem; font-weight: 600; line-height: 1.7; margin: 0; }
        .qa-empty-cta {
          display: inline-flex;
          align-items: center;
          color: #fff;
          font-family: Nunito, sans-serif;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 0.7rem 1.5rem;
          border-radius: 100px;
          text-decoration: none;
          margin-top: 0.4rem;
          transition: opacity 0.2s;
        }
        .qa-empty-cta:hover { opacity: 0.88; }

        @media (max-width: 560px) {
          .qa-tab { padding: 0.7rem 1.1rem; font-size: 0.82rem; }
          .qa-card-question { padding: 1.2rem 1.3rem; font-size: 0.95rem; }
          .qa-card-answer { padding: 0 1.3rem 1.3rem; }
        }
      `}</style>
    </div>
  )
}
