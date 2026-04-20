'use client'

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as any

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 14 },
  },
} as any

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <motion.div
      className="service-card"
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href} className="service-link">
        Learn More
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  )
}

const services = [
  {
    title: 'Preventive Dentistry',
    description: "Regular check-ups, cleanings, and fluoride treatments to keep your child's smile healthy and prevent dental problems before they start.",
    icon: '🦷',
    href: '/services/checkups-and-cleanings',
  },
  {
    title: 'Restorative Dentistry',
    description: 'Expert treatment for cavities, broken teeth, and other dental issues using gentle, child-friendly techniques.',
    icon: '🔧',
    href: '/services/restorative-dentistry',
  },
  {
    title: 'Sedation Dentistry',
    description: 'Safe, comfortable sedation options for anxious children or complex procedures, ensuring a stress-free experience.',
    icon: '😴',
    href: '/services/sedation-dentistry',
  },
  {
    title: 'Special Needs Dentistry',
    description: 'Compassionate, specialized care for children with special needs, creating a comfortable environment for all patients.',
    icon: '🤝',
    href: '/services/special-needs-dentistry',
  },
]

export default function ServicesGrid() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Pediatric Dental Services</h2>
        <p>
          Comprehensive, compassionate dental care designed specifically for children,
          from routine check-ups to specialized treatments in a welcoming environment.
        </p>
      </div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>
    </section>
  )
}
