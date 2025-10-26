"use client"

import { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Sphere } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.001
        meshRef.current.rotation.y += 0.002
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]}>
      <meshStandardMaterial
        color="#00d9ff"
        emissive="#00a8cc"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <Environment preset="night" />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-sm">
            <p className="text-sm font-medium text-accent">Welcome to my portfolio</p>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
          Creative Developer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-blue-500">
            & Designer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Crafting immersive digital experiences with 3D animations, modern design, and cutting-edge technology. 3 years
          of building beautiful, functional web applications.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
            View My Work
          </button>
          <button className="px-8 py-3 rounded-lg border border-accent/50 text-accent font-semibold hover:bg-accent/10 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
