'use client'

import { motion } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const rooms = [
  {
    name: 'The Welcome Lobby',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis velit in pharetra suscipit. Cras fringilla felis ac nisi convallis, eget bibendum nunc gravida.',
    gradient: 'from-[#DBEAFE] via-[#BAE6FD] to-[#7DD3FC]',
    icon: '🛋️',
    flip: false,
  },
  {
    name: 'Exam Suites',
    desc: 'Pellentesque habitant morbi tristique senectus. Nulla facilisi. Aliquam erat volutpat. Quisque vehicula, nisl ac viverra semper, nisi velit condimentum nisl.',
    gradient: 'from-[#D1FAE5] via-[#A7F3D0] to-[#6EE7B7]',
    icon: '🦷',
    flip: true,
  },
  {
    name: 'Kids Play Zone',
    desc: 'Curabitur sit amet velit libero. Sed commodo feugiat ipsum, nec sagittis nibh sagittis ac. Integer venenatis velit at nulla gravida, at placerat metus.',
    gradient: 'from-[#FEF3C7] via-[#FDE68A] to-[#FCD34D]',
    icon: '🎈',
    flip: false,
  },
  {
    name: 'Digital X-Ray Suite',
    desc: 'Vestibulum ante ipsum primis in faucibus orci luctus. Fusce sed lorem in urna convallis elementum. Integer venenatis velit at nulla gravida fames ac turpis.',
    gradient: 'from-[#EDE9FE] via-[#DDD6FE] to-[#C4B5FD]',
    icon: '📡',
    flip: true,
  },
]

export default function TourOurOfficePage() {
  return (
    <SubPageLayout
      title="Tour Our Office"
      subtitle="Designed from the ground up for curious kids and reassured parents."
      gradient="green"
    >
      <div className="mx-auto max-w-5xl space-y-20 px-4">
        {rooms.map((room, i) => (
          <div
            key={room.name}
            className={`grid items-center gap-10 md:grid-cols-2 ${room.flip ? 'md:[direction:rtl]' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`[direction:ltr] aspect-[4/3] rounded-3xl bg-gradient-to-br ${room.gradient} relative overflow-hidden flex items-center justify-center shadow-xl`}
            >
              {/* Grid texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-5xl">{room.icon}</span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-700 text-slate-500 backdrop-blur-sm" style={{ fontWeight: 700 }}>
                  Photo Coming Soon
                </span>
              </div>
              {/* Room number badge */}
              <div className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-sm font-900 text-[#4A90A4] shadow backdrop-blur-sm" style={{ fontWeight: 900 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="[direction:ltr]"
            >
              <span className="mb-2 inline-block text-xs font-800 uppercase tracking-widest text-[#6BA899]" style={{ fontWeight: 800 }}>
                Space {String(i + 1).padStart(2, '0')}
              </span>
              <h2
                className="mb-4 text-3xl font-black text-[#4A90A4]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {room.name}
              </h2>
              <p className="text-base leading-relaxed text-slate-500">{room.desc}</p>
              <ul className="mt-5 space-y-2">
                {['Child-scaled furnishings', 'Sensory-friendly lighting', 'Air purification system'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-500">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6BA899]" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </SubPageLayout>
  )
}
