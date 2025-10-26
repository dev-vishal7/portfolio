"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import emailjs from "@emailjs/browser"

emailjs.init("HlJbNhHsrCgKI9bxd")

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_uom2w3s", // Replace with your EmailJS Service ID
        "template_coswqci", // Replace with your EmailJS Template ID
        {
          to_email: "krl.vish7@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
      )

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error("Email send error:", err)
      setError("Failed to send message. Please try again or contact directly via email.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-12 fade-in-up text-lg font-medium"
        >
          ← Back to Home
        </Link>

        <div className="mb-16 fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Let's
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent">
              work together.
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground/90 font-light">
            Get in touch and let's create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <section className="bg-gradient-to-br from-card to-card/50 border border-accent/20 rounded-3xl p-10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <h2 className="text-3xl font-bold mb-8 text-accent">Contact Information</h2>
              <div className="space-y-8">
                <div className="hover:translate-x-2 transition-transform">
                  <p className="text-sm text-muted-foreground/80 mb-3 font-semibold">Email</p>
                  <a
                    href="mailto:krl.vish7@gmail.com"
                    className="text-xl text-foreground hover:text-accent transition-colors font-medium"
                  >
                    krl.vish7@gmail.com
                  </a>
                </div>
                <div className="hover:translate-x-2 transition-transform">
                  <p className="text-sm text-muted-foreground/80 mb-3 font-semibold">Phone</p>
                  <a
                    href="tel:+918308108548"
                    className="text-xl text-foreground hover:text-accent transition-colors font-medium"
                  >
                    +91 8308108548
                  </a>
                </div>
                <div className="hover:translate-x-2 transition-transform">
                  <p className="text-sm text-muted-foreground/80 mb-3 font-semibold">Location</p>
                  <p className="text-xl text-foreground font-medium">Pune, Maharashtra</p>
                </div>
                <div className="hover:translate-x-2 transition-transform">
                  <p className="text-sm text-muted-foreground/80 mb-3 font-semibold">Download CV</p>
                  <a
                    href="/vishal-kolekar-cv.pdf"
                    download="Vishal-Kolekar-CV.pdf"
                    className="inline-flex items-center gap-2 text-xl text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    ↓ Download CV
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-card to-card/50 border border-accent/20 rounded-3xl p-10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <h2 className="text-3xl font-bold mb-8 text-accent">Follow Me</h2>
              <div className="flex gap-6">
                <a
                  href="https://github.com/dev-vishal7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl hover:text-accent transition-colors hover:scale-125 transform duration-300"
                >
                  🐙
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-kolekar-1bab35210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl hover:text-accent transition-colors hover:scale-125 transform duration-300"
                >
                  💼
                </a>
                <a
                  href="https://x.com/vishal_k2510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl hover:text-accent transition-colors hover:scale-125 transform duration-300"
                >
                  𝕏
                </a>
              </div>
            </section>
          </div>

          <div
            className="bg-gradient-to-br from-card to-card/50 border border-accent/20 rounded-3xl p-10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-3xl font-bold mb-8 text-accent">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-background border border-accent/30 rounded-xl px-5 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-base disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-background border border-accent/30 rounded-xl px-5 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-base disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full bg-background border border-accent/30 rounded-xl px-5 py-3 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none text-base disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-accent to-cyan-400 text-background font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:scale-105 transform text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {submitted && (
                <p className="text-center text-accent text-base font-semibold animate-pulse">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {error && <p className="text-center text-red-400 text-base font-semibold">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
