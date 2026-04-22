'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const services = [
  {
    title: 'Preventive Dentistry',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis velit in pharetra suscipit. Cras fringilla felis ac nisi convallis, eget bibendum nunc gravida volutpat.',
    gradient: 'from-[#DBEAFE] to-[#BAE6FD]',
    href: '/services/preventive-dentistry',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#4A90A4" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    flip: false,
  },
  {
    title: 'Restorative Dentistry',
    desc: 'Pellentesque habitant morbi tristique senectus et netus. Nulla facilisi. Aliquam erat volutpat. Quisque vehicula, nisl ac viverra semper, nisi velit condimentum nisl.',
    gradient: 'from-[#D1FAE5] to-[#A7F3D0]',
    href: '/services/restorative-dentistry',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#6BA899" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
    flip: true,
  },
  {
    title: 'Sedation Dentistry',
    desc: 'Curabitur sit amet velit libero. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Integer venenatis velit at nulla gravida, at placerat metus congue.',
    gradient: 'from-[#FEF3C7] to-[#FDE68A]',
    href: '/services/sedation-dentistry',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    flip: false,
  },
  {
    title: 'Special Needs Dentistry',
    desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce sed lorem in urna convallis elementum. Integer venenatis velit at nulla.',
    gradient: 'from-[#EDE9FE] to-[#DDD6FE]',
    href: '/services',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    flip: true,
  },
]

export default function ServicesPage() {
  return (
    <SubPageLayout
      title="Our Services"
      subtitle="Comprehensive pediatric dental care — from first tooth to teen years and beyond."
      gradient="green"
    >
      <div className="mx-auto max-w-5xl space-y-20 px-4">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-10 md:grid-cols-2 ${s.flip ? 'md:[direction:rtl]' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`[direction:ltr] aspect-[4/3] rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}
            >
              <div className="flex flex-col items-center gap-3 opacity-70">
                {s.icon}
                <span className="text-xs font-700 uppercase tracking-widest text-slate-400" style={{ fontWeight: 700 }}>
                  Illustration Placeholder
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="[direction:ltr]"
            >
              <span className="mb-2 inline-block text-xs font-800 uppercase tracking-widest text-[#E8934F]" style={{ fontWeight: 800 }}>
                Service 0{i + 1}
              </span>
              <h2
                className="mb-4 text-3xl font-black text-[#4A90A4]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {s.title}
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-500">{s.desc}</p>
              <a
                href={s.href}
                className="inline-flex items-center gap-2 rounded-full bg-[#4A90A4] px-6 py-2.5 text-sm font-800 text-white shadow-md transition-all hover:scale-105 hover:bg-[#6BA899]"
                style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}
              >
                Learn More →
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
}
