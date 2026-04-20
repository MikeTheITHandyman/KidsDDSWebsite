'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PlaceholderPage() {
  const displayTitle = "Under Construction"

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 pt-32 pb-20 px-6 flex flex-col items-center justify-center">
      <motion.div 
        className="max-w-3xl w-full bg-white rounded-[2rem] shadow-sm border border-slate-100 p-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Soft Organic Decorative Element */}
        <div className="w-24 h-24 mx-auto mb-8 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 capitalize">
          {displayTitle}
        </h1>
        
        <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
          We're currently designing this space using our new 2026 organic visual identity. 
          Check back soon for playful graphics and parent-centric content.
        </p>

        <motion.a 
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-yellow-950 font-semibold rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Return Home
        </motion.a>
      </motion.div>
    </div>
  )
}
