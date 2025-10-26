"use client"

import Link from "next/link"

export default function ExperiencePage() {
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Starlly Solutions Pvt Ltd",
      location: "Bengaluru, Karnataka",
      duration: "2022 – Present",
      description:
        "Building scalable and real-time web and mobile applications using React, Node.js, MongoDB, and React Native. Skilled in building secure, performant systems with clean architecture and user-friendly interfaces.",
      achievements: [
        "Built a checklist system similar to Google Forms for easy form creation and data reporting",
        "Developed a technician tracking feature showing real-time location and status updates",
        "Created a dashboard system with resizable widgets, filters, and custom navigation",
        "Added Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC)",
        "Developed a modular IoT backend system with data collector and analyzer",
        "Implemented a multi-channel alert system (SMS, email, WhatsApp)",
        "Worked on audit logs for tracking user actions and system events",
        "Updated mobile app UI using React Native for better UX",
        "Replaced Redux with React Query for better API handling and caching",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Solapur University",
      year: "2019 – 2022",
      details: "Completed comprehensive coursework in computer science and applications",
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "English School Jr College, Mangalwedha",
      year: "2017 – 2019",
      details: "Completed higher secondary education with focus on science stream",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Experience & Education</h1>
          <p className="text-lg text-muted-foreground">My professional journey and educational background.</p>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card border border-border p-8 hover:border-accent/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 fade-in-up" style={{ animationDelay: "0.5s" }}>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card border border-border p-8 hover:border-accent/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-accent">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                </div>
                <p className="text-muted-foreground">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
