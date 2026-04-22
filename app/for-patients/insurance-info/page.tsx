'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const insurers = [
  { name: 'BlueCross BlueShield', color: '#1D4ED8' },
  { name: 'Cigna', color: '#0E7490' },
  { name: 'Aetna', color: '#7E22CE' },
  { name: 'UnitedHealthcare', color: '#065F46' },
  { name: 'Delta Dental', color: '#B91C1C' },
  { name: 'Humana', color: '#047857' },
  { name: 'MetLife', color: '#1E3A8A' },
  { name: 'Guardian', color: '#6D28D9' },
  { name: 'Medicaid / CHIP', color: '#0369A1' },
  { name: 'And Many More…', color: '#9CA3AF' },
]

const sections = [
  {
    title: 'Understanding Your Benefits',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt lorem at fermentum convallis. Libero nisi gravida sapien, ac tincidunt nisi turpis in odio. Donec quis arcu vel felis semper faucibus et odio.',
    gradient: 'from-[#DBEAFE] to-[#BAE6FD]',
    flip: false,
  },
  {
    title: 'Flexible Payment Options',
    desc: 'Pellentesque habitant morbi tristique senectus et netus. Nulla facilisi. Aliquam erat volutpat. Quisque vehicula, nisl ac viverra semper, nisi velit condimentum nisl, vel placerat massa.',
    gradient: 'from-[#D1FAE5] to-[#A7F3D0]',
    flip: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
}

export default function InsuranceInfoPage() {
  return (
    <SubPageLayout
      title="Insurance & Financing"
      subtitle="We work with most major insurers so your child's smile is always within reach."
      gradient="green"
    >
      {/* Insurance grid */}
      <motion.div
        className="mx-auto mb-20 max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2
          className="mb-8 text-center text-2xl font-black text-[#4A90A4]"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          Accepted Insurance Plans
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {insurers.map((ins) => (
            <motion.div
              key={ins.name}
              variants={chipVariants}
              whileHover={{ scale: 1.06, y: -3 }}
              className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-sm"
            >
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: ins.color }}
              />
              <span className="text-sm font-700 text-slate-700" style={{ fontWeight: 700 }}>
                {ins.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Alternating sections */}
      <div className="mx-auto max-w-5xl space-y-20 px-4">
        {sections.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-10 md:grid-cols-2 ${s.flip ? 'md:[direction:rtl]' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`[direction:ltr] aspect-[4/3] rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}
            >
              <span className="text-xs font-700 uppercase tracking-widest text-slate-400 opacity-60" style={{ fontWeight: 700 }}>
                Photo / Illustration
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="[direction:ltr]"
            >
              <span className="mb-2 inline-block text-xs font-800 uppercase tracking-widest text-[#6BA899]" style={{ fontWeight: 800 }}>
                Section 0{i + 1}
              </span>
              <h2 className="mb-4 text-3xl font-black text-[#4A90A4]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {s.title}
              </h2>
              <p className="text-base leading-relaxed text-slate-500">{s.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
}
