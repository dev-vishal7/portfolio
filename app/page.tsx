"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import BentoPortfolio from "@/components/bento-portfolio"
import CursorTracker from "@/components/cursor-tracker"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="cursor-glow bg-background text-foreground min-h-screen">
      <CursorTracker />
      <Navigation />
      <BentoPortfolio />
    </div>
  )
}
