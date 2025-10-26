"use client"

import { useEffect, useRef } from "react"

export default function CursorTracker() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 10 + "px"
        cursorRef.current.style.top = e.clientY - 10 + "px"
      }

      // Create trail effect
      const trail = document.createElement("div")
      trail.className = "glow-trail"
      trail.style.left = e.clientX - 4 + "px"
      trail.style.top = e.clientY - 4 + "px"
      document.body.appendChild(trail)

      setTimeout(() => {
        trail.style.opacity = "0"
        trail.style.transition = "opacity 0.5s ease-out"
      }, 10)

      setTimeout(() => trail.remove(), 500)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="glow-point"
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  )
}
