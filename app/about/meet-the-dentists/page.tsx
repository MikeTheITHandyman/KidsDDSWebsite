'use client'

import { motion, type Variants } from 'framer-motion'
import SubPageLayout from '@/components/SubPageLayout'

const doctors = [
  {
    name: 'Dr. Sonia Gutierrez',
    credentials: 'DDS',
    tagline: 'Gentle Care Specialist',
    highlights: [
      'Board-Certified Pediatric Dentist',
      'Fluent in Spanish & English',
      'Sedation Dentistry Expert',
      '15+ years with young patients',
    ],
    blobRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    gradientFrom: '#DBEAFE',
    gradientTo: '#BAE6FD',
    accentColor: '#4A90A4',
    avatarBg: 'from-[#4A90A4] to-[#6BA899]',
    initial: 'SG',
  },
  {
    name: 'Dr. Dave Rutcosky',
    credentials: 'DDS',
    tagline: 'Special Needs Champion',
    highlights: [
      'Special Needs Dentistry Focus',
      'General Anesthesiology Certified',
      'Child Anxiety Reduction Expert',
      '20+ years of pediatric practice',
    ],
    blobRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
    gradientFrom: '#D1FAE5',
    gradientTo: '#A7F3D0',
    accentColor: '#6BA899',
    avatarBg: 'from-[#6BA899] to-[#8BA596]',
    initial: 'DR',
  },
  {
    name: 'Dr. Sahar Alrayyes',
    credentials: 'DDS',
    tagline: 'Preventive Care Leader',
    highlights: [
      'Preventive Dentistry Advocate',
      'Orthodontic Screening Specialist',
      'Infant Oral Health Expert',
      'Research & Education Background',
    ],
    blobRadius: '50% 50% 30% 70% / 60% 40% 70% 30%',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FDE68A',
    accentColor: '#D97706',
    avatarBg: 'from-[#E8934F] to-[#E97D63]',
    initial: 'SA',
  },
  {
    name: 'Dr. Anne-Ashley Compton',
    credentials: 'DDS',
    tagline: 'Restorative Arts Expert',
    highlights: [
      'Restorative Dentistry Specialist',
      'Child-First Communication Style',
      'Nitrous Oxide Sedation Certified',
      'Award-Winning Patient Experience',
    ],
    blobRadius: '70% 30% 50% 50% / 40% 60% 40% 60%',
    gradientFrom: '#EDE9FE',
    gradientTo: '#DDD6FE',
    accentColor: '#7C3AED',
    avatarBg: 'from-[#7C3AED] to-[#4A90A4]',
    initial: 'AC',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function MeetTheDentistsPage() {
  return (
    <SubPageLayout
      title="Meet Our Dentists"
      subtitle="Four passionate specialists united by one mission — giving every child a smile they love."
    >
      <motion.div
        className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {doctors.map((doc) => (
          <motion.div
            key={doc.name}
            variants={cardVariants}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: 'spring', stiffness: 340, damping: 22 }}
            className="group flex flex-col rounded-[2rem] bg-white p-6 shadow-[0_4px_24px_rgba(74,144,164,0.10)] ring-1 ring-[#4A90A4]/10 hover:shadow-[0_16px_48px_rgba(74,144,164,0.18)]"
          >
            {/* Blob Photo Container */}
            <div className="mx-auto mb-6 flex items-center justify-center">
              <div
                className="relative flex h-40 w-40 items-center justify-center overflow-hidden"
                style={{
                  borderRadius: doc.blobRadius,
                  background: `linear-gradient(135deg, ${doc.gradientFrom}, ${doc.gradientTo})`,
                }}
              >
                {/* Animated inner blob shimmer */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, white 0%, transparent 60%)`,
                  }}
                />
                {/* Avatar initials */}
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${doc.avatarBg} text-xl font-black text-white shadow-lg`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {doc.initial}
                </div>
                {/* Decorative dot */}
                <div
                  className="absolute bottom-4 right-4 h-4 w-4 rounded-full bg-white/60 shadow"
                />
              </div>
            </div>

            {/* Name & Title */}
            <div className="mb-4 text-center">
              <h2
                className="text-lg font-black leading-tight text-[#4A90A4]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {doc.name}, {doc.credentials}
              </h2>
              <span
                className="mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-700 uppercase tracking-wide"
                style={{
                  background: `${doc.gradientFrom}`,
                  color: doc.accentColor,
                  fontWeight: 700,
                }}
              >
                {doc.tagline}
              </span>
            </div>

            {/* Highlights */}
            <ul className="mt-auto space-y-2">
              {doc.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: doc.accentColor }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Hover CTA */}
            <motion.div
              className="mt-5 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              whileHover={{ height: 'auto', opacity: 1 }}
            >
              <button
                className="w-full rounded-2xl bg-[#E8934F] py-2.5 text-sm font-800 text-white shadow-sm transition-colors hover:bg-[#E97D63]"
                style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}
              >
                Meet the Doctor →
              </button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA band */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-16 max-w-2xl rounded-[2rem] bg-gradient-to-br from-[#4A90A4] to-[#6BA899] px-8 py-10 text-center text-white shadow-xl"
      >
        <p className="text-sm font-700 uppercase tracking-widest opacity-80" style={{ fontWeight: 700 }}>
          Ready to visit us?
        </p>
        <h3
          className="mt-2 text-3xl font-black"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          Your child deserves the best.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-base opacity-90">
          Our team of four specialists is here to make every visit a positive experience.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E8934F] px-8 py-3.5 text-sm font-800 text-white shadow-lg transition-all hover:scale-105 hover:bg-[#E97D63]"
          style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}
        >
          Request an Appointment →
        </a>
      </motion.div>
    </SubPageLayout>
  )
}
