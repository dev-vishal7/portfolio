"use client"

import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "React Native Background Location",
      description:
        "Published NPM package for background location updates on Android using foreground service. Supports permission management, custom timeouts, and periodic updates.",
      technologies: ["React Native", "Android", "NPM"],
      icon: "📦",
      featured: true,
      link: "https://www.npmjs.com/package/react-native-geo-locator",
    },
    {
      title: "Nadakacheri",
      description:
        "React.js payroll application with UI development, logic implementation, and API integration for seamless worker pay calculation, allocation, and automated report generation.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      icon: "💰",
      featured: true,
    },
    {
      title: "Servy CRM",
      description:
        "Comprehensive CRM React.js application facilitating seamless interaction between users and technicians with real-time updates, order placements, expense tracking, and live technician tracking.",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
      icon: "🔧",
      featured: true,
    },
    {
      title: "Energeek",
      description:
        "Dynamic React.js app for personalized home setups with seamless API integrations. Backend development with Node.js and Express.js. Admin panel for quotation tracking.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      icon: "🏠",
    },
    {
      title: "Spectra",
      description:
        "IoT product with frontend and backend development. Data collection, processing, and real-time monitoring capabilities.",
      technologies: ["React", "Node.js", "IoT", "MongoDB"],
      icon: "📡",
    },
    {
      title: "Whiteboard App",
      description:
        "Real-time collaborative whiteboard tool with integrated video/audio calls and AI-powered drawing suggestions. Built with WebRTC and Canvas API.",
      technologies: ["React", "WebRTC", "Canvas API", "WebSockets"],
      icon: "🎨",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-12 fade-in-up text-lg font-medium"
        >
          ← Back to Home
        </Link>

        <div className="mb-16 fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-purple-400 to-accent bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground/90 font-light">
            A showcase of my recent work and projects that demonstrate my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`fade-in-up rounded-3xl bg-gradient-to-br from-card to-card/50 border border-accent/20 p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group cursor-pointer hover:scale-105 transform hover:-translate-y-2 ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
            >
              <div
                className={`${project.featured ? "text-8xl" : "text-6xl"} mb-6 group-hover:scale-125 transition-transform duration-300 inline-block`}
              >
                {project.icon}
              </div>
              <h3
                className={`${project.featured ? "text-3xl" : "text-2xl"} font-bold mb-3 text-foreground group-hover:text-accent transition-colors`}
              >
                {project.title}
              </h3>
              <p className={`${project.featured ? "text-base" : "text-sm"} text-foreground/80 mb-6 leading-relaxed`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs bg-accent/25 text-accent border border-accent/60 hover:bg-accent/40 transition-all font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
