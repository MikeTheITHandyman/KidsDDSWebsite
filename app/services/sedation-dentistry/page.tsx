'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const sections = [
  {
    title: 'Nitrous Oxide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis velit in pharetra suscipit. Cras fringilla felis ac nisi convallis, eget bibendum nunc gravida volutpat et nisl.',
    gradient: 'from-[#EDE9FE] to-[#DDD6FE]',
    flip: false,
  },
  {
    title: 'Oral Conscious Sedation',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada. Nulla facilisi. Aliquam erat volutpat. Quisque vehicula, nisl ac viverra semper, nisi velit condimentum nisl.',
    gradient: 'from-[#DBEAFE] to-[#BAE6FD]',
    flip: true,
  },
  {
    title: 'General Anesthesiology',
    desc: 'Curabitur sit amet velit libero. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Integer venenatis velit at nulla gravida, at placerat metus congue. Aenean dictum lectus.',
    gradient: 'from-[#D1FAE5] to-[#A7F3D0]',
    flip: false,
  },
]

export default function SedationDentistryPage() {
  return (
    <SubPageLayout
      title="Sedation Dentistry"
      subtitle="Calm, comfortable care for anxious children and complex procedures."
      gradient="amber"
    >
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
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`[direction:ltr] aspect-[4/3] rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}
            >
              <span className="text-xs font-700 uppercase tracking-widest text-slate-400 opacity-70" style={{ fontWeight: 700 }}>
                Photo / Illustration
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="[direction:ltr]"
            >
              <span className="mb-2 inline-block text-xs font-800 uppercase tracking-widest text-[#E8934F]" style={{ fontWeight: 800 }}>
                Option 0{i + 1}
              </span>
              <h2 className="mb-4 text-3xl font-black text-[#4A90A4]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {s.title}
              </h2>
              <p className="text-base leading-relaxed text-slate-500">{s.desc}</p>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#E8934F] to-[#F4C77F]" />
            </motion.div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
}
