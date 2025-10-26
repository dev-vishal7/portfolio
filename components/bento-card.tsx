"use client"

import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"

interface BentoCardProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

export default function BentoCard({ children, className = "", ...props }: BentoCardProps) {
  return (
    <div
      className={`relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 overflow-hidden ${className}`}
      {...props}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>

      {/* Hover indicator */}
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <ChevronRight className="w-4 h-4 text-accent" />
      </div>
    </div>
  )
}
