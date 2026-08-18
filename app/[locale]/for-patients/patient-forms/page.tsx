import SubPageLayout from '@/components/SubPageLayout'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import FormDownloadLink from './FormDownloadLink'

export const metadata: Metadata = {
  title: 'Patient Forms & Pre-Visit Portals | Kids Dentist Grayslake, IL',
  description:
    'Complete Kids Dentist patient forms online or download PDFs before your visit — new patient registration and dental history questionnaire.',
  openGraph: {
    title: 'Patient Forms & Pre-Visit Portals | Kids Dentist Grayslake, IL',
    description:
      'Skip the clipboard. Fill out all required forms online through our secure Patient Manager, or download and print PDFs at your convenience.',
    url: 'https://kidsdds.com/for-patients/patient-forms',
    siteName: 'Kids Dentist',
    locale: 'en_US',
    type: 'website',
  },
}

// ─── Form cards data ──────────────────────────────────────────────────────────

const DOWNLOAD_FORMS_META = [
  {
    id: 'new-patient',
    titleKey: 'form0Title',
    descKey: 'form0Desc',
    href: '/forms/new-patient-registration.pdf',
    fileLabelKey: 'form0FileLabel',
    ariaKey: 'form0Aria',
    accentColor: '#4A90A4',
    iconBg: 'rgba(74,144,164,0.10)',
    borderColor: 'rgba(74,144,164,0.16)',
  },
  {
    id: 'dental-history',
    titleKey: 'form2Title',
    descKey: 'form2Desc',
    href: '/forms/dental-history-questionnaire.pdf',
    fileLabelKey: 'form2FileLabel',
    ariaKey: 'form2Aria',
    accentColor: '#4A90A4',
    iconBg: 'rgba(74,144,164,0.10)',
    borderColor: 'rgba(74,144,164,0.16)',
  },
]

const CHECKIN_FEATURES_META = [
  {
    labelKey: 'checkin0Label',
    subKey: 'checkin0Sub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
  {
    labelKey: 'checkin1Label',
    subKey: 'checkin1Sub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    labelKey: 'checkin2Label',
    subKey: 'checkin2Sub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

const TIP_KEYS = ['tip0', 'tip1', 'tip2', 'tip3']

// ─── Per-form SVG icons ────────────────────────────────────────────────────────

function FormIcon({ id, color }: { id: string; color: string }) {
  if (id === 'new-patient') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <line x1="9" y1="12" x2="15" y2="12"/>
      <line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  )
  // dental-history
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PatientFormsPage() {
  const t = await getTranslations('patientFormsPage')

  const DOWNLOAD_FORMS = DOWNLOAD_FORMS_META.map((meta) => ({
    ...meta,
    title: t(meta.titleKey),
    description: t(meta.descKey),
    fileLabel: meta.fileLabelKey ? t(meta.fileLabelKey) : null,
    ariaLabel: t(meta.ariaKey),
  }))

  const CHECKIN_FEATURES = CHECKIN_FEATURES_META.map((meta) => ({
    ...meta,
    label: t(meta.labelKey),
    sub: t(meta.subKey),
  }))

  const TIPS = TIP_KEYS.map((k) => t(k))

  return (
    <SubPageLayout
      kicker={t('kicker')}
      title={t('title')}
      subtitle={t('subtitle')}
      gradient="blue"
    >
      <div className="mx-auto max-w-5xl px-4">

        {/* ── Express Check-In callout ─────────────────────────────────────── */}
        <AnimatedSection>
          <div
            className="express-checkin-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '2rem',
              background: 'linear-gradient(145deg, #FF6B18 0%, #FF9200 55%, #FFBC41 100%)',
              boxShadow: '0 18px 52px rgba(255,107,24,0.30), 0 4px 16px rgba(255,107,24,0.18)',
              padding: '2.75rem 2.5rem 2.5rem',
              marginBottom: '3.5rem',
              color: '#fff',
            }}
          >
            {/* Decorative watermark circle */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-48px',
                right: '-48px',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                pointerEvents: 'none',
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-60px',
                right: '15%',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                pointerEvents: 'none',
              }}
            />

            {/* Top badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(255,255,255,0.20)',
                borderRadius: '100px',
                padding: '0.3rem 0.9rem',
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                fontFamily: 'Nunito, sans-serif',
                marginBottom: '1.25rem',
                backdropFilter: 'blur(6px)',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              {t('badgeFastest')}
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                lineHeight: 1.15,
                margin: '0 0 0.6rem',
                letterSpacing: '-0.02em',
              }}
            >
              {t('expressCheckin')}
            </h2>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                lineHeight: 1.68,
                opacity: 0.92,
                margin: '0 0 2rem',
                maxWidth: '560px',
              }}
            >
              {t('expressBody')}
            </p>

            {/* 3-feature horizontal strip */}
            <div
              className="checkin-features"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem 2rem',
                marginBottom: '2.25rem',
              }}
            >
              {CHECKIN_FEATURES.map((feat) => (
                <div
                  key={feat.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                  }}
                >
                  <span
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {feat.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 800,
                        fontSize: '0.88rem',
                        lineHeight: 1.2,
                      }}
                    >
                      {feat.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Nunito, sans-serif',
                        fontSize: '0.75rem',
                        opacity: 0.78,
                        fontWeight: 500,
                      }}
                    >
                      {feat.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
              <a
                href="https://csintake.patientengagepro.com/new/e6gqsw/clqaik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('openPortalAria')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#fff',
                  color: '#FF6B18',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.14)',
                  letterSpacing: '0.01em',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                {t('openPortal')}
              </a>
              <span
                style={{
                  fontSize: '0.78rem',
                  opacity: 0.70,
                  fontWeight: 500,
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                {t('securePortalNote')}
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* ── PDF Downloads ────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4A90A4',
                marginBottom: '0.6rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '28px',
                  height: '1.5px',
                  background: 'rgba(74,144,164,0.35)',
                  borderRadius: '2px',
                }}
              />
              {t('preferPaper')}
              <span
                style={{
                  display: 'inline-block',
                  width: '28px',
                  height: '1.5px',
                  background: 'rgba(74,144,164,0.35)',
                  borderRadius: '2px',
                }}
              />
            </p>
            <h2
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)',
                color: '#3D3D3D',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {t('downloadPdfForms')}
            </h2>
          </div>
        </AnimatedSection>

        {/* ── Form cards grid ──────────────────────────────────────────────── */}
        <div
          className="forms-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {DOWNLOAD_FORMS.map((form, i) => (
            <AnimatedSection key={form.id} delay={0.07 + i * 0.06}>
              <article
                className="form-card"
                style={{
                  background: '#fff',
                  border: `1.5px solid ${form.borderColor}`,
                  borderRadius: '1.5rem',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  height: '100%',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                }}
                aria-label={`${form.title} — ${form.fileLabel}`}
              >
                {/* Icon + file-type badge row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.1rem',
                  }}
                >
                  <span
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '0.875rem',
                      background: form.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <FormIcon id={form.id} color={form.accentColor} />
                  </span>

                  {/* File-type micro-label */}
                  <span
                    style={{
                      background: form.iconBg,
                      color: form.accentColor,
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 800,
                      fontSize: '0.7rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      borderRadius: '100px',
                      padding: '0.28rem 0.7rem',
                      border: `1px solid ${form.borderColor}`,
                    }}
                  >
                    {form.fileLabel}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: form.accentColor,
                    margin: '0 0 0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  {form.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#6b7280',
                    fontWeight: 500,
                    lineHeight: 1.65,
                    margin: '0 0 1.5rem',
                    flex: 1,
                  }}
                >
                  {form.description}
                </p>

                {/* Action button */}
                <FormDownloadLink
                  href={form.href}
                  fileName={form.href.split('/').pop() ?? form.id}
                  ariaLabel={form.ariaLabel}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    background: form.iconBg,
                    color: form.accentColor,
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    padding: '0.7rem 1.25rem',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    border: `1.5px solid ${form.borderColor}`,
                    transition: 'background 0.18s, border-color 0.18s',
                  }}
                  className="form-dl-btn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t('downloadForm')}
                </FormDownloadLink>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Tips ─────────────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.1}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(217,119,6,0.05), rgba(244,199,127,0.10))',
              border: '1.5px solid rgba(217,119,6,0.12)',
              borderRadius: '1.75rem',
              padding: '2rem 2.25rem',
              marginBottom: '3.5rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 900,
                fontSize: '0.95rem',
                color: '#D97706',
                margin: '0 0 1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {t('tipsHeading')}
            </h3>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '0.65rem',
              }}
            >
              {TIPS.map((tip) => (
                <li
                  key={tip}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.55rem',
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#D97706',
                      flexShrink: 0,
                      marginTop: '7px',
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ lineHeight: 1.6 }}>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.12}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#4A90A4',
                marginBottom: '1.25rem',
              }}
            >
              {t('bottomCtaText')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-appointment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'linear-gradient(135deg, #E8934F, #E97D63)',
                  color: '#fff',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 22px rgba(232,147,79,0.35)',
                }}
              >
                {t('requestAppointment')}
              </Link>
              <Link
                href="tel:+18472231400"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#4A90A4',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  border: '2px solid rgba(74,144,164,0.3)',
                }}
              >
                {t('callUs')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

      <style>{`
        .form-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(74,144,164,0.13);
          border-color: rgba(74,144,164,0.28) !important;
        }
        .form-dl-btn:hover {
          background: rgba(74,144,164,0.14) !important;
          border-color: rgba(74,144,164,0.32) !important;
        }
        @media (max-width: 640px) {
          .forms-grid { grid-template-columns: 1fr !important; }
          .checkin-features { gap: 1rem !important; }
          .express-checkin-card { padding: 2rem 1.5rem 1.75rem !important; }
        }
      `}</style>
    </SubPageLayout>
  )
}
