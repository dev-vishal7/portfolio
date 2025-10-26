"use client"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/ecommerce-dashboard.png",
    },
    {
      title: "3D Data Visualization",
      description: "Interactive 3D data visualization tool using Three.js for complex analytics.",
      tags: ["Three.js", "React", "WebGL", "D3.js"],
      image: "/3d-data-visualization.jpg",
    },
    {
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with real-time notifications and user presence.",
      tags: ["Next.js", "WebSocket", "Redis", "TypeScript"],
      image: "/chat-application-interface.png",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool with advanced customization options.",
      tags: ["Next.js", "OpenAI", "Tailwind CSS", "Vercel"],
      image: "/ai-content-generator.png",
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-cyan-400/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium bg-accent/10 text-accent border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-accent font-semibold hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                  View Project
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
