'use client'

import { useState } from 'react'

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
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const onMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      id="creations"
      className="noise relative flex flex-col items-center border-t border-white/5 py-32 md:py-48"
      style={{ background: 'var(--off-black)' }}
      onMouseMove={onMouseMove}
    >
      {/* Floating Image Preview */}
      {PROJECTS.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none fixed z-30 hidden h-[450px] w-[600px] overflow-hidden bg-black/80 backdrop-blur-md md:block rounded-2xl border border-white/10 shadow-2xl"
          style={{
            left: mousePos.x + 40,
            top: mousePos.y - 200,
            opacity: hoveredId === p.id ? 1 : 0,
            transform: `scale(${hoveredId === p.id ? 1 : 0.9}) rotate(${hoveredId === p.id ? '2deg' : '0deg'})`,
            transition: 'opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        >
          {hoveredId === p.id && (
            <iframe
              src={p.url}
              className="h-[400%] w-[400%] origin-top-left scale-[0.25] border-0 pointer-events-none bg-white opacity-90"
              tabIndex={-1}
            />
          )}
        </div>
      ))}

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center px-6">
        {/* Section Label */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="text-sm font-black text-[var(--lime)]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>06</span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Créations</span>
          <span className="h-px w-8 bg-white/20" />
        </div>

        {/* Title */}
        <h2
          className="mb-24 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-9xl tracking-tighter"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Que c'est <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.2)' }}>beauuuu</span>
        </h2>
      </div>

      {/* Centered Portfolio List */}
      <div className="w-full max-w-6xl flex flex-col border-t border-white/10 px-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="voir"
              className="relative flex items-center justify-between border-b border-white/10 py-10 transition-all duration-500 hover:bg-white/[0.04] md:py-16 hover:px-8"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated Lime Indicator Box */}
              <div
                className="absolute left-0 top-0 h-full w-2 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100"
                style={{ background: 'var(--lime)' }}
              />

              <div className="relative z-10 flex w-full flex-col gap-6 pl-8 pr-4 md:flex-row md:items-center md:justify-between">

                {/* Number & Name */}
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-12">
                  <span
                    className="text-lg font-bold tracking-widest text-gray-600 transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.id}
                  </span>
                  <h3
                    className="text-3xl font-black text-white transition-colors duration-300 group-hover:text-[var(--lime)] uppercase tracking-tight md:text-5xl lg:text-6xl text-left"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.name}
                  </h3>
                </div>

                {/* Sub info */}
                <div className="flex items-center gap-8 self-end md:self-auto uppercase tracking-widest">
                  <span className="text-xs font-bold text-gray-500 transition-colors duration-300 group-hover:text-white hidden md:block">
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
