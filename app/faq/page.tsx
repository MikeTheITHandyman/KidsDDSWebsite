'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SubPageLayout from '@/components/SubPageLayout'

const faqs = [
  {
    q: 'At what age should my child first see a dentist?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt lorem at fermentum convallis. Libero nisi gravida sapien, ac tincidunt nisi turpis in odio. The American Academy of Pediatric Dentistry recommends a first visit by age one.',
  },
  {
    q: 'How often should my child have a dental check-up?',
    a: 'Pellentesque habitant morbi tristique senectus et netus et malesuada. Nulla facilisi. Aliquam erat volutpat. Quisque vehicula, nisl ac viverra semper, nisi velit condimentum nisl, vel placerat massa.',
  },
  {
    q: 'What should I expect during the first visit?',
    a: 'Curabitur sit amet velit libero. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Integer venenatis velit at nulla gravida, at placerat metus congue. Pellentesque habitant morbi tristique senectus.',
  },
  {
    q: 'Do you accept my insurance plan?',
    a: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce sed lorem in urna convallis elementum. Integer venenatis velit at nulla gravida fames turpis.',
  },
  {
    q: 'Is sedation dentistry safe for children?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our board-certified anesthesiologists and pediatric dentists work as a team. Quisque tincidunt lorem at fermentum convallis libero nisi gravida sapien.',
  },
  {
    q: 'How do I handle a dental emergency?',
    a: 'Pellentesque habitant morbi tristique. Nulla facilisi. Aliquam erat volutpat. Call us immediately at (847) 223-1400. Quisque vehicula, nisl ac viverra semper, nisi velit condimentum nisl.',
  },
  {
    q: 'What payment options do you offer?',
    a: 'Curabitur sit amet velit libero. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Integer venenatis velit at nulla gravida, at placerat metus congue. Pellentesque habitant morbi tristique.',
  },
  {
    q: 'Do you treat children with special needs?',
    a: 'Vestibulum ante ipsum primis in faucibus orci luctus. Fusce sed lorem in urna convallis elementum. Absolutely — Dr. Rutcosky specializes in providing exceptional care for children with diverse needs and abilities.',
  },
]

function FaqCard({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl border border-[#4A90A4]/10 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className="text-base font-800 text-[#4A90A4]"
          style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#4A90A4]/10 text-[#4A90A4]"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="border-t border-[#4A90A4]/08 px-6 pb-5 pt-4">
          <p className="text-sm leading-relaxed text-slate-500">{faq.a}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FaqPage() {
  return (
    <SubPageLayout
      title="Frequently Asked Questions"
      subtitle="Everything parents ask — answered clearly and honestly."
      gradient="blue"
    >
      <div className="mx-auto max-w-3xl space-y-3 px-4">
        {faqs.map((faq, i) => (
          <FaqCard key={faq.q} faq={faq} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-16 max-w-xl rounded-[2rem] border border-[#4A90A4]/15 bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] p-8 text-center shadow-sm"
      >
        <p className="text-lg font-black text-[#4A90A4]" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Still have questions?
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Our friendly team is happy to chat. Give us a call or send a message.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+18472231400"
            className="inline-flex items-center gap-2 rounded-full bg-[#4A90A4] px-6 py-2.5 text-sm font-800 text-white shadow transition-all hover:scale-105"
            style={{ fontWeight: 800 }}
          >
            Call (847) 223-1400
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#4A90A4]/30 bg-white px-6 py-2.5 text-sm font-800 text-[#4A90A4] shadow transition-all hover:scale-105"
            style={{ fontWeight: 800 }}
          >
            Send a Message →
          </a>
        </div>
      </motion.div>
    </SubPageLayout>
  )
}
