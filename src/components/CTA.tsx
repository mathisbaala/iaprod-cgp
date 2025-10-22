'use client'

import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: boolean
}

export function CTA({ href, children, variant = 'primary', icon = true }: CTAProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2'
  
  const variantClasses = variant === 'primary'
    ? 'bg-gold text-navy hover:bg-gold/90 hover:scale-105'
    : 'bg-white text-navy hover:bg-white/90 border-2 border-navy'

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
      {icon && <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />}
    </a>
  )
}
