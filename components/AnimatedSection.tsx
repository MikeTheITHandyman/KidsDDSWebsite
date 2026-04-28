'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  direction?: 'up' | 'left' | 'right'
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = '',
  style,
  direction = 'up',
}: AnimatedSectionProps) {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -40, y: 0 }
      : direction === 'right'
      ? { opacity: 0, x: 40, y: 0 }
      : { opacity: 0, x: 0, y: 28 }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
