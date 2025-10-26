"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCV = () => {
    const cvContent = `
SRIRAM - FULL STACK DEVELOPER
=============================

Email: your.email@example.com
Phone: +1 (XXX) XXX-XXXX
Location: Your City

PROFESSIONAL SUMMARY
====================
I'm a seasoned full-stack developer with 3 years of expertise in HTML, CSS, JavaScript, React, Next.js, Node.js, and Express.js. Proficient in crafting dynamic web and mobile applications, I excel in delivering high-quality, scalable solutions that exceed client expectations.

TECHNICAL SKILLS
================
Frontend: HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, React Native, Framer Motion
Backend: Node.js, Express.js, Hapi.js, Python, Django
Databases: MongoDB, MySQL
Tools: Git, Docker, REST APIs, Webpack

EXPERIENCE
==========
Sept 2022 - Nov 2023
Frontend Developer
Starlly Solution

Dec 2023 - Present
Fullstack Developer
Synerixs

EDUCATION
=========
2014 - 2018
Bachelor Degree in IT
Kamaraj College of Engineering & Technology

2021 - 2022
All Tech Courses
Udemy - Acquired expertise in HTML, CSS, JavaScript, React.js, Next.js, Node.js, and Express.js

PROJECTS
========
- E-commerce Platform (React, Node.js, MongoDB)
- Chat Application (React, Socket.io, Express)
- Data Visualization Dashboard (React, D3.js)
- Mobile App (React Native)
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(cvContent)
    );
    element.setAttribute("download", "resume.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300"
        >
          VISHAL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/vishal-kolekar-cv.pdf"
            download="Vishal-Kolekar-CV.pdf"
            className="px-4 py-2 rounded-lg cursor-pointer border border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
          >
            ↓ Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in fade-in-up">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 rounded-lg border border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 flex items-center gap-2 justify-center text-sm font-medium w-full"
            >
              ↓ Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
