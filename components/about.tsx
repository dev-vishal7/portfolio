"use client"

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "API Design"] },
    { category: "3D & Animation", items: ["Three.js", "React Three Fiber", "Framer Motion", "WebGL"] },
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate developer with 3 years of experience building modern web applications. I specialize in
              creating immersive digital experiences that combine beautiful design with robust functionality.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My expertise spans full-stack development, 3D web technologies, and interactive animations. I love pushing
              the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, experimenting with creative technologies,
              or contributing to open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
