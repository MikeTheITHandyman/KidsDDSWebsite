'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface SubPageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  gradient?: 'blue' | 'green' | 'amber'
}

const gradients = {
  blue: 'from-[#FDFCF8] via-[#EFF6FF] to-[#BFDBFE]',
  green: 'from-[#FDFCF8] via-[#F0FDF4] to-[#BBF7D0]',
  amber: 'from-[#FDFCF8] via-[#FFFBEB] to-[#FDE68A]',
}

const blobColors = {
  blue: ['bg-blue-200/40', 'bg-amber-100/50', 'bg-sky-300/30'],
  green: ['bg-green-200/40', 'bg-amber-100/50', 'bg-teal-200/30'],
  amber: ['bg-amber-200/40', 'bg-orange-100/50', 'bg-yellow-200/30'],
}

export default function SubPageLayout({
  title,
  subtitle,
  children,
  gradient = 'blue',
}: SubPageLayoutProps) {
  const blobs = blobColors[gradient]

  return (
    <>
      {/* Full-bleed hero — breaks out of the container's 1rem padding */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${gradients[gradient]} rounded-b-[3rem]`}
        style={{
          width: 'calc(100% + 2rem)',
          marginLeft: '-1rem',
          marginRight: '-1rem',
        }}
      >
        {/* Decorative ambient blobs */}
        <div
          className={`pointer-events-none absolute -top-16 -right-16 h-80 w-80 rounded-full blur-3xl ${blobs[0]}`}
        />
        <div
          className={`pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl ${blobs[1]}`}
        />
        <div
          className={`pointer-events-none absolute top-1/2 left-1/3 h-48 w-48 -translate-y-1/2 rounded-full blur-2xl ${blobs[2]}`}
        />

        {/* Subtle dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #4A90A4 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4A90A4]/20 bg-white/60 px-4 py-1.5 text-xs font-800 uppercase tracking-widest text-[#4A90A4] backdrop-blur-sm"
            style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8934F]" />
            Kids Dentist · Grayslake, IL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mb-4 text-5xl font-black leading-tight tracking-tight text-[#4A90A4] md:text-6xl"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-slate-500"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Page content */}
      <div className="py-12">{children}</div>
    </>
  )
}
