'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: '01',
    name: 'Igloo Inc',
    category: 'Web Experience',
    year: '2025',
    url: 'https://www.igloo.inc',
  },
  {
    id: '02',
    name: 'Lando Norris',
    category: 'Portfolio',
    year: '2024',
    url: 'https://landonorris.com',
  },
  {
    id: '03',
    name: 'KPR Verse',
    category: 'Web3 Experience',
    year: '2024',
    url: 'https://kprverse.com',
  },
] as const

export function CreationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-up', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.animate-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cards-list',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const onMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      id="creations"
      ref={sectionRef}
      className="noise relative flex flex-col items-center border-t border-white/5 py-32 md:py-48"
      style={{ background: 'var(--off-black)' }}
      onMouseMove={onMouseMove}
    >
      {/* Floating Image Preview */}
      {PROJECTS.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none fixed z-30 hidden h-[450px] w-[600px] overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-md md:block"
          style={{
            left: mousePos.x + 40,
            top: mousePos.y - 200,
            opacity: hoveredId === p.id ? 1 : 0,
            transform: `scale(${hoveredId === p.id ? 1 : 0.9}) rotate(${hoveredId === p.id ? '2deg' : '0deg'})`,
            transition:
              'opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        >
          {hoveredId === p.id && (
            <iframe
              src={p.url}
              className="pointer-events-none h-[400%] w-[400%] origin-top-left scale-[0.25] border-0 bg-white opacity-90"
              tabIndex={-1}
            />
          )}
        </div>
      ))}

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
        {/* Section Label */}
        <div className="animate-up mb-8 flex items-center justify-center gap-4">
          <span
            className="text-sm font-black text-[var(--lime)]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            06
          </span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Créations
          </span>
          <span className="h-px w-8 bg-white/20" />
        </div>

        {/* Title */}
        <h2
          className="animate-up mb-24 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-9xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 'calc(var(--tracking-readable) - 1px)' }}
        >
          Que c'est{' '}
          <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.2)' }}>
            beauuuu
          </span>
        </h2>
      </div>

      {/* Centered Portfolio List */}
      <div className="cards-list flex w-full max-w-6xl flex-col border-t border-white/10 px-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="animate-card group relative">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="voir"
              className="relative flex items-center justify-between border-b border-white/10 py-10 transition-all duration-500 hover:bg-white/[0.04] hover:px-8 md:py-16"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated Lime Indicator Box */}
              <div
                className="absolute top-0 left-0 h-full w-2 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100"
                style={{ background: 'var(--lime)' }}
              />

              <div className="relative z-10 flex w-full flex-col gap-6 pr-4 pl-8 md:flex-row md:items-center md:justify-between">
                {/* Number & Name */}
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-12">
                  <span
                    className="text-lg font-bold tracking-widest text-gray-600 transition-colors duration-300 group-hover:text-white"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: 'var(--tracking-tight)',
                    }}
                  >
                    {project.id}
                  </span>
                  <h3
                    className="text-left text-3xl font-black tracking-tight text-white uppercase transition-colors duration-300 group-hover:text-[var(--lime)] md:text-5xl lg:text-6xl"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: 'var(--tracking-ultra)',
                    }}
                  >
                    {project.name}
                  </h3>
                </div>

                {/* Sub info */}
                <div className="flex items-center gap-8 self-end tracking-widest uppercase md:self-auto">
                  <span className="hidden text-xs font-bold text-gray-500 transition-colors duration-300 group-hover:text-white md:block">
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-gray-500 transition-colors duration-300 group-hover:text-white">
                    {project.year}
                  </span>
                  <span className="text-2xl text-[var(--lime)] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
