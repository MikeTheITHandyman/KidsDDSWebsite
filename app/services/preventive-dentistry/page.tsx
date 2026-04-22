'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const sections = [
  {
    title: 'Cleanings & Exams',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt lorem at fermentum convallis. Libero nisi gravida sapien, ac tincidunt nisi turpis in odio. Donec quis arcu vel felis semper faucibus.',
    gradient: 'from-[#DBEAFE] to-[#BAE6FD]',
    flip: false,
  },
  {
    title: 'Fluoride Treatments',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada. Nulla facilisi. Aliquam erat volutpat. Quisque vehicula, nisl ac viverra semper, nisi velit condimentum nisl, vel placerat massa.',
    gradient: 'from-[#D1FAE5] to-[#A7F3D0]',
    flip: true,
  },
  {
    title: 'Dental Sealants',
    desc: 'Curabitur sit amet velit libero. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Integer venenatis velit at nulla gravida, at placerat metus congue. Pellentesque habitant morbi tristique senectus.',
    gradient: 'from-[#FEF3C7] to-[#FDE68A]',
    flip: false,
  },
]

export default function PreventiveDentistryPage() {
  return (
    <SubPageLayout
      title="Preventive Dentistry"
      subtitle="The best dental care is the care that prevents problems before they start."
      gradient="blue"
    >
      <div className="mx-auto max-w-5xl space-y-20 px-4">
        {sections.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-10 md:grid-cols-2 ${s.flip ? 'md:[direction:rtl]' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, x: s.flip ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`[direction:ltr] aspect-[4/3] rounded-3xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}
            >
              <span className="text-xs font-700 uppercase tracking-widest text-slate-400 opacity-70" style={{ fontWeight: 700 }}>
                Photo / Illustration
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: s.flip ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="[direction:ltr]"
            >
              <span className="mb-2 inline-block text-xs font-800 uppercase tracking-widest text-[#E8934F]" style={{ fontWeight: 800 }}>
                Step 0{i + 1}
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
    </SubPageLayout>
  )
}
