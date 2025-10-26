"use client"

import Link from "next/link"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "React Native", "Framer Motion"],
      icon: "🎨",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Hapi.js", "Python", "Django"],
      icon: "⚙️",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
      icon: "🗄️",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "REST APIs", "Webpack"],
      icon: "🛠️",
      gradient: "from-orange-500 to-red-400",
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
            My Skills
          </h1>
          <p className="text-xl text-muted-foreground/90 font-light">
            A comprehensive overview of my technical expertise and proficiencies across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="fade-in-up rounded-3xl bg-gradient-to-br from-card to-card/50 border border-accent/20 p-10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group hover:scale-105 transform"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className="px-5 py-3 rounded-xl bg-accent/15 text-accent border border-accent/40 hover:bg-accent/25 hover:border-accent/60 transition-all duration-300 text-sm font-semibold hover:scale-110 transform cursor-pointer"
                    style={{ animationDelay: `${0.3 + skillIdx * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 p-12 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Summary</h2>
          <p className="text-foreground/90 leading-relaxed text-lg">
            With 3 years of development experience, I have built a strong foundation in both frontend and backend
            technologies. I specialize in creating modern, responsive web applications using React and building scalable
            backend systems with Node.js. My expertise extends to mobile development with React Native and data
            management with MongoDB and MySQL.
          </p>
        </div>
      </div>
    </main>
  )
}
