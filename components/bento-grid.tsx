"use client"

import { useEffect, useRef } from "react"
import BentoCard from "./bento-card"
import { Github, Globe, Code2, Zap } from "lucide-react"

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-animate]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative w-full py-20 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Profile Card - Large */}
          <BentoCard className="md:col-span-1 md:row-span-2" data-animate>
            <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center text-4xl font-bold">
                YN
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Full Stack Developer</p>
                <h3 className="text-2xl font-bold mb-2">Your Name</h3>
                <p className="text-sm text-muted-foreground">
                  Web & App Developer crafting beautiful digital experiences
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack */}
          <BentoCard className="md:col-span-2" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</p>
                <h3 className="text-xl font-bold mb-6">Languages & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "React", "React Native", "Node.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/30"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </BentoCard>

          {/* Credentials */}
          <BentoCard className="md:col-span-1" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">More About Me</p>
                <h3 className="text-xl font-bold">Credentials</h3>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">3+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </BentoCard>

          {/* Projects */}
          <BentoCard className="md:col-span-1" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Showcase</p>
                <h3 className="text-xl font-bold">Projects</h3>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">6+</p>
                <p className="text-xs text-muted-foreground">Completed Projects</p>
              </div>
            </div>
          </BentoCard>

          {/* Skills */}
          <BentoCard className="md:col-span-1" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Competencies</p>
                <h3 className="text-xl font-bold">Skills</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-accent" />
                  <span className="text-sm">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm">Performance Optimization</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Specialization */}
          <BentoCard className="md:col-span-2" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Specialization</p>
                <h3 className="text-xl font-bold mb-6">Proficiencies</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs text-center text-muted-foreground">Web Dev</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs text-center text-muted-foreground">Mobile Dev</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs text-center text-muted-foreground">Backend</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs text-center text-muted-foreground">DevOps</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard className="md:col-span-1" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Experience</p>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">03</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-1" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Stack</p>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">06</p>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>
            </div>
          </BentoCard>

          {/* CTA */}
          <BentoCard className="md:col-span-1 md:row-span-1" data-animate>
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Get Started</p>
                <h3 className="text-2xl font-bold">
                  Let's work <span className="text-accent">together.</span>
                </h3>
              </div>
              <button className="w-full px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
