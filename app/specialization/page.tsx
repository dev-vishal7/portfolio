"use client"

import Link from "next/link"

export default function SpecializationPage() {
  const specializations = [
    {
      title: "Web Development",
      icon: "🌐",
      description: "Full-stack web development with modern frameworks and technologies.",
      details: [
        "Frontend: React, Next.js, Tailwind CSS",
        "Backend: Node.js, Express.js, Hapi.js",
        "Databases: MongoDB, MySQL",
        "APIs: REST, GraphQL",
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      description: "Cross-platform mobile app development for iOS and Android.",
      details: [
        "React Native development",
        "Native iOS/Android integration",
        "Firebase integration",
        "App store deployment",
      ],
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Creating beautiful and responsive user interfaces.",
      details: [
        "Responsive design",
        "Framer Motion animations",
        "Tailwind CSS styling",
        "User experience optimization",
      ],
    },
    {
      title: "Data Visualization",
      icon: "📊",
      description: "Building interactive dashboards and data visualization tools.",
      details: ["D3.js and Recharts", "Real-time data updates", "Interactive charts", "Data analysis tools"],
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-12 fade-in-up text-lg font-medium"
        >
          ← Back to Home
        </Link>

        <div className="mb-16 fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
            My Specializations
          </h1>
          <p className="text-xl text-muted-foreground/90 font-light">
            Areas where I excel and provide the most value to my clients and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializations.map((spec, idx) => (
            <div
              key={spec.title}
              className="fade-in-up rounded-3xl bg-gradient-to-br from-card to-card/50 border border-accent/20 p-10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group hover:scale-105 transform hover:-translate-y-2"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">
                {spec.icon}
              </div>
              <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                {spec.title}
              </h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">{spec.description}</p>
              <ul className="space-y-4">
                {spec.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm hover:text-accent transition-colors group/item"
                  >
                    <span className="text-accent mt-1 text-lg group-hover/item:scale-125 transition-transform">→</span>
                    <span className="text-foreground/90">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
