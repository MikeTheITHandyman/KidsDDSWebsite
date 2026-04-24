'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const steps = [
  {
    number: '01',
    title: 'Before You Arrive',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt lorem at fermentum convallis. Libero nisi gravida sapien, ac tincidunt nisi turpis in odio.',
    gradient: 'from-[#DBEAFE] to-[#BAE6FD]',
    flip: false,
  },
  {
    number: '02',
    title: 'Meeting Our Team',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nulla facilisi. Aliquam erat volutpat. Quisque vehicula, nisl ac viverra semper.',
    gradient: 'from-[#D1FAE5] to-[#A7F3D0]',
    flip: true,
  },
  {
    number: '03',
    title: 'The Exam & X-Rays',
    desc: 'Curabitur sit amet velit libero. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Integer venenatis velit at nulla gravida, at placerat metus congue.',
    gradient: 'from-[#FEF3C7] to-[#FDE68A]',
    flip: false,
  },
  {
    number: '04',
    title: 'Your Treatment Plan',
    desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce sed lorem in urna convallis elementum nulla gravida fames ac turpis.',
    gradient: 'from-[#EDE9FE] to-[#DDD6FE]',
    flip: true,
  },
]

export default function ChildFirstVisitPage() {
  return (
    <SubPageLayout
      title="Your Child's First Visit"
      subtitle="We've designed every moment to make first-timers feel like lifelong friends."
      gradient="blue"
    >
      <div className="mx-auto max-w-5xl space-y-20 px-4">
        {steps.map((s) => (
          <div
            key={s.number}
            className={`grid items-center gap-10 md:grid-cols-2 ${s.flip ? 'md:[direction:rtl]' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, x: s.flip ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`[direction:ltr] relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg overflow-hidden`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <span
                className="relative z-10 text-8xl font-black text-white/30"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {s.number}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: s.flip ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="[direction:ltr]"
            >
              <span className="mb-2 inline-block rounded-full bg-[#4A90A4]/10 px-3 py-1 text-xs font-800 text-[#4A90A4]" style={{ fontWeight: 800 }}>
                Step {s.number}
              </span>
              <h2 className="mb-4 text-3xl font-black text-[#4A90A4]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {s.title}
              </h2>
              <p className="text-base leading-relaxed text-slate-500">{s.desc}</p>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#4A90A4] to-[#6BA899]" />
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-20 max-w-2xl rounded-[2rem] bg-gradient-to-br from-[#6BA899] to-[#4A90A4] px-8 py-10 text-center text-white shadow-xl"
      >
        <h3 className="text-3xl font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Ready to book the first visit?
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-base opacity-90">
          It takes less than 2 minutes to request an appointment online.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F4C77F] px-8 py-3.5 text-sm font-black text-[#92400E] shadow-lg transition-all hover:scale-105 hover:bg-[#FDE68A]"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          Request an Appointment →
        </a>
      </motion.div>
    </SubPageLayout>
  )
}
