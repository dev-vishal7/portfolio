"use client";

import Link from "next/link";
import Image from "next/image";

export default function BentoPortfolio() {
  return (
    <main className="pb-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto pt-28">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
          {/* Profile Card - Large - CLICKABLE - Made larger with image space and cool animation */}
          <Link
            href="/about"
            className="relative group rounded-2xl bg-card border border-border p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-2 md:row-span-2 cursor-pointer fade-in-up"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              {/* <div className="mb-8 w-48 h-48 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-accent/30">
                <Image
                  src="https://i.pinimg.com/736x/c5/aa/f6/c5aaf63e3a6917d2c3334b49e66961a0.jpg"
                  alt="Vishal Kolekar"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div> */}
              <div className="mb-8 w-48 h-48 rounded-2xl bg-gradient-to-br from-accent via-purple-400 to-blue-500 flex items-center justify-center text-white text-6xl font-bold group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-accent/30">
                VK
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-semibold">
                  FULL STACK DEVELOPER
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-accent transition-colors">
                  VISHAL
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Building scalable web and mobile applications with modern
                  technologies. Passionate about clean code and user-centric
                  design.
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-border">
                <svg
                  className="w-20 h-16 text-muted-foreground group-hover:text-accent transition-colors"
                  viewBox="0 0 100 80"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 40 Q 30 20, 50 40 T 90 40" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-lg">→</span>
            </div>
          </Link>

          {/* Tech Stack Card */}
          <Link
            href="/skills"
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-2 cursor-pointer fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                REACT | NODE.JS | JAVASCRIPT | MONGODB | REACT NATIVE | TAILWIND
                CSS
              </p>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    TECH STACK
                  </p>
                  <p className="text-3xl font-bold group-hover:text-accent transition-colors">
                    6 Familiar
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </Link>

          {/* Credentials Card */}
          <Link
            href="/experience"
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-1 cursor-pointer fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                MORE ABOUT ME
              </p>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    📋
                  </p>
                  <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                    Credentials
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </Link>

          {/* Projects Card */}
          <Link
            href="/projects"
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-1 cursor-pointer fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                SHOWCASE
              </p>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    🎨
                  </p>
                  <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                    Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </Link>

          {/* Skills Card */}
          <Link
            href="/skills"
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-1 cursor-pointer fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                COMPETENCIES
              </p>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    💻
                  </p>
                  <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                    Skills
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </Link>

          {/* Proficiencies Card */}
          <Link
            href="/specialization"
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-2 cursor-pointer fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wider">
                SPECIALIZATION
              </p>
              <div className="grid grid-cols-4 gap-4 flex-1">
                {[
                  { icon: "⚙️", label: "UNIX" },
                  { icon: "🌐", label: "WEB" },
                  { icon: "📱", label: "MOBILE" },
                  { icon: "📊", label: "CHARTING" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center group/item hover:scale-110 transition-transform duration-300"
                  >
                    <p className="text-3xl mb-2 group-hover/item:scale-125 transition-transform duration-300">
                      {item.icon}
                    </p>
                    <p className="text-xs text-center text-muted-foreground group-hover/item:text-accent transition-colors">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </Link>

          {/* Profiles Card - CLICKABLE TO CONTACT */}
          <div
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-1 cursor-pointer fade-in-up"
            onClick={() => (window.location.href = "/contact")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                STAY WITH ME
              </p>
              <div className="flex-1 flex items-center justify-center gap-6">
                <a
                  href="https://github.com/dev-vishal7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-accent hover:scale-125 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  🐙
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-kolekar-1bab35210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-accent hover:scale-125 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  💼
                </a>
                <a
                  href="https://x.com/vishal_k2510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-accent hover:scale-125 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  𝕏
                </a>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-1 fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <p className="text-5xl font-bold mb-2 group-hover:text-accent transition-colors">
                03
              </p>
              <p className="text-xs text-muted-foreground text-center uppercase tracking-wider">
                YEARS
                <br />
                EXPERIENCE
              </p>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </div>

          <div
            className="relative group rounded-2xl bg-card border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-1 fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <p className="text-5xl font-bold mb-2 group-hover:text-accent transition-colors">
                06
              </p>
              <p className="text-xs text-muted-foreground text-center uppercase tracking-wider">
                TOTAL
                <br />
                PROJECTS
              </p>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </div>

          {/* CTA Card - CLICKABLE TO CONTACT */}
          <Link
            href="/contact"
            className="relative group rounded-2xl bg-card border border-border p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden md:col-span-2 cursor-pointer fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Let's
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 group-hover:from-purple-400 group-hover:to-accent transition-all duration-300">
                    work together.
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-accent text-sm">→</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
