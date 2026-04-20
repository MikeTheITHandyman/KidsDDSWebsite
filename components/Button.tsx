'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg hover:shadow-orange-200/50',
    secondary: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const hoverEffect = variant === 'primary' ? 'hover:scale-105 transform' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${hoverEffect} ${className}`}
    >
      {children}
    </button>
  )
}