'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
  keywords: string
}

const SEARCH_INDEX: SearchItem[] = [
  // Services
  { title: 'Preventive Dentistry', description: 'Cleanings, fluoride, sealants, and digital X-rays every six months.', href: '/services/preventive-dentistry', category: 'Services', keywords: 'cleaning checkup xray fluoride sealant cavity prevention routine exam' },
  { title: 'Restorative Dentistry', description: 'Tooth-colored fillings, crowns, pulp therapy, and extractions.', href: '/services/restorative', category: 'Services', keywords: 'filling crown cavity extraction pulp therapy repair broken tooth restoration' },
  { title: 'Sedation Dentistry', description: 'Nitrous oxide and general anesthesia for anxious or complex cases.', href: '/services/sedation-dentistry', category: 'Services', keywords: 'nitrous oxide laughing gas anesthesia sedation anxious fear calm comfortable' },
  { title: 'Special Needs Dentistry', description: 'Expert care for autism, Down syndrome, cerebral palsy, sensory differences.', href: '/services/special-needs', category: 'Services', keywords: 'autism down syndrome cerebral palsy sensory special needs disability accommodations' },
  { title: 'Emergency Dentistry', description: 'Same-day appointments for knocked-out teeth, sudden pain, or trauma.', href: '/services/emergency', category: 'Services', keywords: 'emergency urgent knocked out tooth pain trauma toothache swelling broken cracked' },
  { title: 'Orthodontics', description: 'Early orthodontic evaluation to guide proper tooth development.', href: '/services/orthodontics', category: 'Services', keywords: 'braces orthodontics alignment crooked teeth bite malocclusion' },
  { title: 'Pulp Therapy', description: "Treatment to save a tooth's infected or injured pulp tissue.", href: '/services/pulp-therapy', category: 'Services', keywords: 'pulp therapy root canal baby tooth nerve infection pulpotomy' },
  { title: 'Tooth Extractions', description: 'Gentle, compassionate removal when a tooth cannot be saved.', href: '/services/tooth-extractions', category: 'Services', keywords: 'extraction remove tooth pull pulled loose baby tooth' },
  { title: 'General Anesthesia', description: 'In-office general anesthesia for comprehensive treatment cases.', href: '/services/general-anesthesiology', category: 'Services', keywords: 'general anesthesia sleep dentistry comprehensive treatment IV sedation' },
  { title: 'Nitrous Oxide Sedation', description: 'Safe, mild laughing gas for a relaxed, comfortable experience.', href: '/nitrous-oxide-sedation', category: 'Services', keywords: 'nitrous oxide laughing gas happy gas sedation mild calm comfortable' },
  // For Patients
  { title: 'My First Visit', description: "What to expect at your child's first appointment — no surprises.", href: '/for-patients/child-first-visit', category: 'For Patients', keywords: 'first visit new patient what to expect baby first appointment infant toddler preparation' },
  { title: 'Insurance Information', description: 'In-network with Aetna, Cigna, Delta Dental Premier, Guardian, Lincoln Financial, Principal, and United Healthcare.', href: '/for-patients/insurance-info', category: 'For Patients', keywords: 'insurance delta dental aetna cigna guardian lincoln financial principal united healthcare billing coverage ppo accepted plans in-network' },
  { title: 'Patient Forms', description: 'Download registration forms to complete before your appointment.', href: '/for-patients/patient-forms', category: 'For Patients', keywords: 'forms paperwork registration new patient download fill out medical history' },
  { title: 'Dental Financing', description: 'Flexible payment options to make pediatric dental care accessible.', href: '/for-patients/dental-financing', category: 'For Patients', keywords: 'financing payment plan options cost affordable monthly' },
  { title: 'Pay Your Bill Online', description: 'Securely pay your balance through our patient billing portal.', href: '/pay', category: 'For Patients', keywords: 'pay bill payment online billing balance account invoice statement' },
  { title: 'Patient Information', description: 'Everything new and returning patients need before their visit.', href: '/for-patients/patient-info', category: 'For Patients', keywords: 'patient info information what to bring policies procedures' },
  // About
  { title: 'About Our Practice', description: "Why Grayslake families choose Kids Dentist for pediatric care.", href: '/about', category: 'About', keywords: 'about practice why choose us grayslake pediatric dental history' },
  { title: 'Meet the Dentists', description: 'Drs. Gutierrez, Rutcosky, Alrayyes, and Compton — our specialists.', href: '/about/meet-the-dentists', category: 'About', keywords: 'doctors dentists gutierrez rutcosky alrayyes compton sonia dave sahar anne-ashley specialists' },
  { title: 'Meet the Team', description: 'The friendly faces who make every visit warm and welcoming.', href: '/about/meet-the-team', category: 'About', keywords: 'team staff hygienists assistants front desk employees' },
  { title: 'Tour Our Office', description: 'Take a virtual tour of our child-friendly Grayslake office.', href: '/about/tour-our-office', category: 'About', keywords: 'office tour virtual photos space environment waiting room' },
  { title: 'Why Choose Us', description: 'What makes Kids Dentist the right choice for your family.', href: '/about/why-choose-us', category: 'About', keywords: 'why choose us difference benefits exclusive pediatric specialists awards' },
  // FAQ
  { title: "FAQ: When should my child's first visit be?", description: 'AAPD recommends a first dental visit by age 1 or within 6 months of the first tooth.', href: '/faq', category: 'FAQ', keywords: 'first visit age one tooth eruption baby when start how old faq' },
  { title: 'FAQ: Are dental X-rays safe?', description: 'Digital X-rays reduce radiation by up to 90% vs traditional film — safe for children.', href: '/faq', category: 'FAQ', keywords: 'xray xrays safe radiation digital dental safety children safe faq' },
  { title: 'FAQ: Knocked-out tooth emergency?', description: 'Rinse, reinsert or store in cold milk, and call us immediately. Time is critical.', href: '/faq', category: 'FAQ', keywords: 'knocked out tooth avulsed emergency permanent adult tooth what to do faq' },
  { title: 'Frequently Asked Questions', description: 'Every question parents ask about pediatric dental care — answered honestly.', href: '/faq', category: 'FAQ', keywords: 'questions answers faq frequently asked parents common' },
  // General
  { title: 'Request an Appointment', description: 'Schedule your appointment online — new and returning patients welcome.', href: '/request-appointment', category: 'Appointments', keywords: 'appointment schedule book new patient request online' },
  { title: 'Contact Us', description: 'Reach our front desk by phone, text, or message. Grayslake, IL.', href: '/contact', category: 'Contact', keywords: 'contact phone call text message office hours location address directions' },
  { title: 'Blog & Dental Tips', description: 'Expert pediatric dental tips, news, and parent guides from our doctors.', href: '/blog', category: 'Blog', keywords: 'blog articles tips news dental advice parents guide health' },
  { title: 'Ask the Doctor', description: 'Send dental questions directly to our doctors — answered within one business day.', href: '/ask-the-doctor', category: 'Contact', keywords: 'ask question doctor dentist answer advice concern inquiry message' },
  { title: 'Patient Reviews', description: "Read what Grayslake families say about Kids Dentist's care.", href: '/reviews', category: 'About', keywords: 'reviews testimonials google patients experience rating 5 star feedback' },
  { title: 'Same-Day Emergency Care', description: 'Dental emergencies seen same day. Call (847) 223-1400 immediately.', href: '/emergency-dentistry', category: 'Services', keywords: 'emergency dental urgent toothache trauma knocked tooth 847 call same day' },
]

function scoreItem(item: SearchItem, terms: string[]): number {
  let score = 0
  const titleLc = item.title.toLowerCase()
  const categoryLc = item.category.toLowerCase()
  const keywordsLc = item.keywords.toLowerCase()
  const descLc = item.description.toLowerCase()
  for (const term of terms) {
    if (titleLc.includes(term)) score += 4
    else if (categoryLc.includes(term)) score += 2
    else if (keywordsLc.includes(term)) score += 1
    else if (descLc.includes(term)) score += 0.5
  }
  return score
}

function search(query: string): SearchItem[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  const terms = q.split(/\s+/).filter(Boolean)
  return SEARCH_INDEX
    .map((item) => ({ item, score: scoreItem(item, terms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(({ item }) => item)
}

const ICONS: Record<string, React.ReactNode> = {
  Services: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  'For Patients': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6BA899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  About: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#78509b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  FAQ: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  Appointments: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E97D63" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Contact: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  Blog: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6BA899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
}

const FALLBACK_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
)

interface SiteSearchProps {
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export default function SiteSearch({ variant = 'desktop', onNavigate }: SiteSearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const results = search(query)
  const isMobile = variant === 'mobile'

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(() => { setFocusedIndex(-1) }, [results.length])

  const handleNavigate = useCallback((href: string) => {
    router.push(href)
    setIsOpen(false)
    setQuery('')
    onNavigate?.()
  }, [router, onNavigate])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      inputRef.current?.blur()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((i) => Math.max(i - 1, -1))
    } else if (e.key === 'Enter' && focusedIndex >= 0 && results[focusedIndex]) {
      e.preventDefault()
      handleNavigate(results[focusedIndex].href)
    }
  }, [results, focusedIndex, handleNavigate])

  const showNoResults = isOpen && query.trim().length > 1 && results.length === 0

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: isMobile ? '100%' : undefined }}
    >
      {/* Input pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          background: '#FAFAF8',
          border: `1.5px solid ${isOpen ? 'rgba(74,144,164,0.45)' : 'rgba(74,144,164,0.22)'}`,
          borderRadius: '100px',
          padding: '0 0.9rem',
          height: isMobile ? '44px' : '38px',
          width: isMobile ? '100%' : undefined,
          minWidth: isMobile ? undefined : '175px',
          maxWidth: isMobile ? undefined : '215px',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          boxShadow: isOpen ? '0 0 0 3px rgba(74,144,164,0.09)' : 'none',
        }}
      >
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="#4A90A4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true" style={{ flexShrink: 0 }}
        >
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true) }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={isMobile ? 'Search services, FAQs, pages…' : 'Search…'}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 600,
            fontSize: isMobile ? '0.95rem' : '0.85rem',
            color: '#3D3D3D',
            width: '100%',
          }}
          aria-label="Search site content"
          aria-expanded={isOpen && results.length > 0}
          aria-autocomplete="list"
          role="combobox"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setIsOpen(false); inputRef.current?.focus() }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '2px', color: '#9ca3af', display: 'flex', flexShrink: 0,
              borderRadius: '50%',
            }}
            aria-label="Clear search"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      {/* Results panel */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: isMobile ? 0 : undefined,
              right: isMobile ? 0 : 0,
              width: isMobile ? '100%' : '345px',
              background: 'rgba(253,248,242,0.98)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(74,144,164,0.16)',
              borderRadius: '1.25rem',
              boxShadow: '0 14px 44px rgba(74,144,164,0.16), 0 2px 8px rgba(0,0,0,0.07)',
              zIndex: 1300,
              overflow: 'hidden',
            }}
            role="listbox"
            aria-label="Search results"
          >
            {results.map((result, i) => (
              <a
                key={`${result.href}-${i}`}
                href={result.href}
                role="option"
                aria-selected={i === focusedIndex}
                onClick={() => { setIsOpen(false); setQuery(''); onNavigate?.() }}
                onMouseEnter={() => setFocusedIndex(i)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.7rem',
                  padding: '0.85rem 1.1rem',
                  textDecoration: 'none',
                  background: i === focusedIndex ? 'rgba(74,144,164,0.07)' : 'transparent',
                  borderBottom: i < results.length - 1 ? '1px solid rgba(74,144,164,0.07)' : 'none',
                  transition: 'background 0.12s',
                }}
              >
                <span
                  style={{
                    width: '27px', height: '27px',
                    borderRadius: '7px',
                    background: 'rgba(74,144,164,0.09)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '1px',
                  }}
                  aria-hidden="true"
                >
                  {ICONS[result.category] || FALLBACK_ICON}
                </span>
                <div style={{ overflow: 'hidden', flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                    fontSize: '0.875rem', color: '#2D3748',
                    marginBottom: '0.15rem', lineHeight: 1.3,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {result.title}
                  </div>
                  <div style={{
                    fontSize: '0.77rem', color: '#6b7280',
                    fontWeight: 500, lineHeight: 1.4,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {result.description}
                  </div>
                </div>
                <span style={{
                  fontSize: '0.67rem', fontWeight: 800, color: '#4A90A4',
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                  flexShrink: 0, paddingTop: '2px', opacity: 0.72,
                  whiteSpace: 'nowrap',
                }}>
                  {result.category}
                </span>
              </a>
            ))}

            <div style={{
              padding: '0.5rem 1.1rem',
              background: 'rgba(74,144,164,0.04)',
              borderTop: '1px solid rgba(74,144,164,0.07)',
              display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap',
            }}>
              {([['↑↓', 'navigate'], ['↵', 'go'], ['Esc', 'close']] as const).map(([key, label]) => (
                <React.Fragment key={key}>
                  <kbd style={{
                    fontSize: '0.62rem', color: '#9ca3af',
                    background: 'rgba(0,0,0,0.06)', borderRadius: '4px',
                    padding: '1px 5px', fontFamily: 'monospace', fontWeight: 600,
                  }}>{key}</kbd>
                  <span style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 500, marginRight: '0.3rem' }}>{label}</span>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}

        {showNoResults && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: isMobile ? 0 : undefined,
              right: isMobile ? 0 : 0,
              width: isMobile ? '100%' : '300px',
              background: 'rgba(253,248,242,0.98)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(74,144,164,0.16)',
              borderRadius: '1.25rem',
              boxShadow: '0 12px 40px rgba(74,144,164,0.12)',
              zIndex: 1300,
              padding: '1.4rem',
              textAlign: 'center',
            }}
          >
            <p style={{
              fontFamily: 'Nunito, sans-serif', fontWeight: 700,
              fontSize: '0.875rem', color: '#6b7280', margin: '0 0 0.6rem',
            }}>
              No results for &ldquo;{query}&rdquo;
            </p>
            <a
              href="/contact"
              onClick={() => { setIsOpen(false); setQuery(''); onNavigate?.() }}
              style={{ fontSize: '0.82rem', color: '#4A90A4', fontWeight: 700, textDecoration: 'none' }}
            >
              Contact us for help →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
