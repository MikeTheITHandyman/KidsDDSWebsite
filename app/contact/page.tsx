'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const hours = [
  { day: 'Monday', time: '8:00 AM – 5:00 PM' },
  { day: 'Tuesday', time: '8:00 AM – 5:00 PM' },
  { day: 'Wednesday', time: '8:00 AM – 5:00 PM' },
  { day: 'Thursday', time: '8:00 AM – 5:00 PM' },
  { day: 'Friday', time: '8:00 AM – 12:00 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function ContactPage() {
  return (
    <SubPageLayout
      title="Say Hello"
      subtitle="We'd love to meet your family. Reach out any way that's easiest."
      gradient="amber"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">

        {/* ── LEFT: Contact Form ──────────────────────────────────────── */}
        <motion.div {...fadeUp(0)}>
          <div className="relative rounded-[2rem] border border-[#4A90A4]/10 bg-white/80 p-8 shadow-[0_8px_40px_rgba(74,144,164,0.12)] backdrop-blur-sm md:p-10">
            {/* Soft inner glow */}
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-100/60 blur-3xl" />

            <h2
              className="mb-2 text-2xl font-black text-[#4A90A4]"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Send Us a Message
            </h2>
            <p className="mb-8 text-sm text-slate-400">
              We respond to all inquiries within one business day.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Name row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatingInput id="firstName" label="First Name" type="text" />
                <FloatingInput id="lastName" label="Last Name" type="text" />
              </div>

              <FloatingInput id="email" label="Email Address" type="email" />
              <FloatingInput id="phone" label="Phone Number" type="tel" />

              {/* Child Age */}
              <div className="relative">
                <select
                  id="childAge"
                  defaultValue=""
                  className="peer w-full appearance-none rounded-2xl border border-slate-200 bg-[#FDFCF8] px-4 pb-3 pt-6 text-sm text-slate-700 outline-none transition focus:border-[#4A90A4] focus:ring-2 focus:ring-[#4A90A4]/20"
                >
                  <option value="" disabled />
                  {['Infant (0–1)', 'Toddler (2–3)', '4–6 years', '7–12 years', '13+ years'].map(
                    (a) => (
                      <option key={a}>{a}</option>
                    )
                  )}
                </select>
                <label
                  htmlFor="childAge"
                  className="pointer-events-none absolute left-4 top-2 text-xs font-600 text-[#4A90A4]"
                  style={{ fontWeight: 600 }}
                >
                  Child&apos;s Age
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full resize-none rounded-2xl border border-slate-200 bg-[#FDFCF8] px-4 pb-3 pt-6 text-sm text-slate-700 outline-none transition focus:border-[#4A90A4] focus:ring-2 focus:ring-[#4A90A4]/20"
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-4 top-2 text-xs font-600 text-[#4A90A4] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#4A90A4]"
                  style={{ fontWeight: 600 }}
                >
                  How can we help?
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl bg-gradient-to-r from-[#E8934F] to-[#E97D63] py-4 text-base font-black text-white shadow-[0_6px_20px_rgba(232,147,79,0.40)] transition hover:shadow-[0_10px_28px_rgba(232,147,79,0.55)]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Send Message →
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* ── RIGHT: Info Blocks ─────────────────────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Map placeholder */}
          <motion.div {...fadeUp(0.1)}>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#DBEAFE] to-[#BAE6FD] shadow-[0_4px_20px_rgba(74,144,164,0.14)]">
              <div className="flex h-52 items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#4A90A4" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-700 text-[#4A90A4]" style={{ fontWeight: 700 }}>
                    160 Commerce Dr #100
                  </p>
                  <p className="text-sm text-[#4A90A4]/70">Grayslake, IL 60030</p>
                </div>
              </div>
              {/* Decorative grid lines suggesting a map */}
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(#4A90A4 1px, transparent 1px), linear-gradient(90deg, #4A90A4 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="border-t border-[#4A90A4]/10 px-5 py-3">
                <a
                  href="https://maps.google.com"
                  className="flex items-center gap-1.5 text-xs font-700 text-[#4A90A4] hover:underline"
                  style={{ fontWeight: 700 }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Phone block */}
          <motion.div {...fadeUp(0.18)}>
            <div className="flex items-center gap-5 rounded-[2rem] bg-gradient-to-br from-[#4A90A4] to-[#6BA899] p-6 text-white shadow-lg">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-700 uppercase tracking-widest opacity-75" style={{ fontWeight: 700 }}>
                  Call us anytime
                </p>
                <a
                  href="tel:+18472231400"
                  className="text-2xl font-black leading-tight tracking-tight hover:opacity-80"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  (847) 223-1400
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours block */}
          <motion.div {...fadeUp(0.26)}>
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_4px_20px_rgba(74,144,164,0.10)] ring-1 ring-[#4A90A4]/10">
              <h3
                className="mb-4 flex items-center gap-2 text-base font-black text-[#4A90A4]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#4A90A4" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                </span>
                Office Hours
              </h3>
              <ul className="space-y-2">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex items-center justify-between text-sm">
                    <span className="font-600 text-slate-600" style={{ fontWeight: 600 }}>{day}</span>
                    <span
                      className={`rounded-full px-3 py-0.5 text-xs font-700 ${
                        time === 'Closed'
                          ? 'bg-slate-100 text-slate-400'
                          : 'bg-[#4A90A4]/10 text-[#4A90A4]'
                      }`}
                      style={{ fontWeight: 700 }}
                    >
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Emergency strip */}
          <motion.div {...fadeUp(0.34)}>
            <div className="flex items-start gap-4 rounded-[1.5rem] border border-orange-200 bg-orange-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-800 text-orange-700" style={{ fontWeight: 800 }}>Dental Emergency?</p>
                <p className="mt-0.5 text-xs text-orange-500">
                  Call us immediately at{' '}
                  <a href="tel:+18472231400" className="font-700 underline" style={{ fontWeight: 700 }}>
                    (847) 223-1400
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SubPageLayout>
  )
}

function FloatingInput({
  id,
  label,
  type,
}: {
  id: string
  label: string
  type: string
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        className="peer w-full rounded-2xl border border-slate-200 bg-[#FDFCF8] px-4 pb-3 pt-6 text-sm text-slate-700 outline-none transition focus:border-[#4A90A4] focus:ring-2 focus:ring-[#4A90A4]/20"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs font-600 text-[#4A90A4] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#4A90A4]"
        style={{ fontWeight: 600 }}
      >
        {label}
      </label>
    </div>
  )
}
