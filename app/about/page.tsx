"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-12 fade-in-up text-lg font-medium"
        >
          ← Back to Home
        </Link>

        <div className="mb-16 fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
            VISHAL KOLEKAR
          </h1>
          <p className="text-2xl text-muted-foreground font-light">Software Engineer | Full Stack Developer</p>
        </div>

        <div className="space-y-12">
          {/* Self Summary */}
          <section
            className="bg-gradient-to-br from-card to-card/50 border border-accent/20 rounded-3xl p-10 md:p-12 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl font-bold mb-8 text-accent">Self Summary</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Full-stack developer with 3+ years of experience building scalable and real-time web and mobile
                applications using React, Node.js, MongoDB, and React Native. Skilled in building secure, performant
                systems with clean architecture and user-friendly interfaces.
              </p>
              <p className="text-foreground/90">
                Currently based in Pune, Maharashtra, I specialize in creating end-to-end solutions that combine
                beautiful UI with robust backend systems. Passionate about clean code, performance optimization, and
                delivering exceptional user experiences.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-4xl font-bold mb-10 text-accent">Experience</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Full Stack Developer",
                  company: "Starlly Solutions Pvt Ltd",
                  location: "Bengaluru, Karnataka",
                  period: "Sept 2022 - Present",
                  achievements: [
                    "Built a checklist system similar to Google Forms for easy form creation and data reporting",
                    "Developed a technician tracking feature showing real-time location and status updates",
                    "Created a dashboard system with resizable widgets, filters, and custom navigation using MongoDB aggregation",
                    "Implemented Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC)",
                    "Developed a modular IoT backend system with data collector and analyzer for scheduled data processing",
                    "Implemented multi-channel alert system (SMS, email, WhatsApp) with user preferences",
                    "Built audit logs for tracking user actions and system events",
                    "Updated mobile app UI using React Native with improved layouts and navigation",
                    "Replaced Redux with React Query for better API handling and caching",
                  ],
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-card/50 to-card border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:translate-x-2 transform"
                  style={{ animationDelay: `${0.35 + idx * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <span className="text-accent/80 text-sm font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-lg text-accent font-semibold mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-foreground/80 leading-relaxed flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-4xl font-bold mb-10 text-accent">Education</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Bachelor of Computer Applications",
                  school: "Solapur University",
                  period: "2019 - 2022",
                },
                {
                  title: "HSC",
                  school: "English School Jr College, Mangalwedha",
                  period: "2017 - 2019",
                },
              ].map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-card/50 to-card border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:translate-x-2 transform"
                  style={{ animationDelay: `${0.55 + idx * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{edu.title}</h3>
                    <span className="text-accent/80 text-sm font-medium mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-lg text-accent font-semibold">{edu.school}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="fade-in-up" style={{ animationDelay: "0.7s" }}>
            <h2 className="text-4xl font-bold mb-10 text-accent">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "React Native", "HTML", "CSS", "Tailwind", "Bootstrap"],
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
                },
                {
                  category: "Databases",
                  skills: ["MongoDB", "MySQL"],
                },
                {
                  category: "Tools & Others",
                  skills: ["Firebase", "Git", "GitHub", "React Query", "Vercel"],
                },
              ].map((stack, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-card/50 to-card border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                  style={{ animationDelay: `${0.75 + idx * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-accent mb-4">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-sm text-foreground hover:bg-accent/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
