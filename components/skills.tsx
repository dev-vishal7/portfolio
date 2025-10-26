"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      category: "3D & Animation",
      skills: ["Three.js", "React Three Fiber", "WebGL", "GSAP", "Canvas API", "Blender"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "Vercel", "AWS", "GitHub Actions", "Webpack"],
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-accent">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/30 hover:bg-accent/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
