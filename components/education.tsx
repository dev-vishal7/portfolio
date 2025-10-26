"use client"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2021",
      description: "Graduated with honors. Focused on web development and computer graphics.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      year: "2020",
      description: "Intensive 12-week program covering modern web technologies and best practices.",
    },
  ]

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      year: "2023 - Present",
      description: "Leading frontend development for high-performance web applications with 3D visualizations.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      year: "2021 - 2023",
      description: "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      year: "2020 - 2021",
      description: "Built responsive web interfaces and contributed to backend API development.",
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-accent">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <span className="text-sm text-accent font-medium">{edu.year}</span>
                  </div>
                  <p className="text-accent/80 font-medium mb-2">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-accent">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <span className="text-sm text-accent font-medium">{exp.year}</span>
                  </div>
                  <p className="text-accent/80 font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
