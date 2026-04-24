'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const sections = [
  {
    title: 'Our Story',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, lorem at fermentum convallis, libero nisi gravida sapien, ac tincidunt nisi turpis in odio. Donec quis arcu vel felis semper faucibus. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Praesent ornare diam vel sapien maximus euismod.',
    gradient: 'from-[#DBEAFE] to-[#BAE6FD]',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#4A90A4" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    flip: false,
  },
  {
    title: 'Our Philosophy',
    body: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Fusce sed lorem in urna convallis elementum. Integer venenatis velit at nulla gravida, at placerat metus congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    gradient: 'from-[#D1FAE5] to-[#A7F3D0]',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#6BA899" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    flip: true,
  },
  {
    title: 'Our Community',
    body: 'Curabitur hendrerit, odio in aliquet posuere, lorem risus commodo enim, vel aliquet nisi sapien ut urna. Maecenas sodales odio sed enim tristique, et semper risus vulputate. Sed vel magna vel neque fringilla luctus. Aenean dictum, lectus vitae tristique fermentum, sem nisi varius nulla.',
    gradient: 'from-[#FEF3C7] to-[#FDE68A]',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    flip: false,
  },
]

export default function AboutPage() {
  return (
    <SubPageLayout
      title="About Kids Dentist"
      subtitle="Grayslake's most trusted pediatric dental practice — where little smiles are our big mission."
      gradient="blue"
    >
      <div className="mx-auto max-w-5xl space-y-20 px-4">
        {sections.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-10 md:grid-cols-2 ${s.flip ? 'md:[direction:rtl]' : ''}`}
          >
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: s.flip ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`[direction:ltr] aspect-[4/3] rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}
            >
              <div className="flex flex-col items-center gap-3 opacity-60">
                {s.icon}
                <span className="text-xs font-700 uppercase tracking-widest text-slate-500" style={{ fontWeight: 700 }}>
                  Photo Coming Soon
                </span>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: s.flip ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="[direction:ltr]"
            >
              <span className="mb-2 inline-block text-xs font-800 uppercase tracking-widest text-[#E8934F]" style={{ fontWeight: 800 }}>
                Chapter {String(i + 1).padStart(2, '0')}
              </span>
              <h2
                className="mb-4 text-3xl font-black leading-tight text-[#4A90A4]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {s.title}
              </h2>
              <p className="text-base leading-relaxed text-slate-500">{s.body}</p>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#E8934F] to-[#F4C77F]" />
            </motion.div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
}
