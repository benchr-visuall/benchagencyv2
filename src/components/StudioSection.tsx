'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StudioSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
          trigger: '.cards-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="noise relative flex flex-col items-center border-t border-white/5 px-6 py-32 md:py-48"
      style={{ background: 'var(--black)' }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        {/* Section Label */}
        <div className="animate-up mb-8 flex items-center justify-center gap-4">
          <span
            className="text-sm font-black text-[var(--lime)]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            04
          </span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Le Studio 360°
          </span>
          <span className="h-px w-8 bg-white/20" />
        </div>

        {/* Title */}
        <h2
          className="animate-up mb-24 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 'var(--tracking-ultra)' }}
        >
          Nous sommes{' '}
          <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.2)' }}>
            360°
          </span>
        </h2>

        {/* Centered Bento Grid */}
        <div className="cards-grid grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* Block 01 */}
          <div className="animate-card group relative flex flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-left transition-colors duration-500 hover:border-[var(--lime)] hover:bg-white/[0.04]">
            <div className="mb-12 flex w-full items-center justify-between">
              <span className="rounded-full border border-white/10 px-4 py-1 text-xs font-bold tracking-widest text-gray-400 uppercase">
                01
              </span>
              <span className="text-2xl text-[var(--lime)] opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </div>
            <div>
              <h3
                className="mb-4 text-4xl font-black tracking-wider text-white uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: 'var(--tracking-readable)',
                }}
              >
                Identité Graphique
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-gray-400">
                Vous forgez une image qui impose le respect. Direction artistique complète,
                branding, logotype et guidelines.
              </p>
            </div>
          </div>

          {/* Block 02 */}
          <div className="animate-card group relative flex flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-left transition-colors duration-500 hover:border-[var(--lime)] hover:bg-white/[0.04]">
            <div className="mb-12 flex w-full items-center justify-between">
              <span className="rounded-full border border-white/10 px-4 py-1 text-xs font-bold tracking-widest text-gray-400 uppercase">
                02
              </span>
              <span className="text-2xl text-[var(--lime)] opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </div>
            <div>
              <h3
                className="mb-4 text-4xl font-black tracking-wider text-white uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: 'var(--tracking-readable)',
                }}
              >
                Production Média
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Valorisez vos projets par la photo, vidéo, conception 3D et réalisation par drone.
              </p>
            </div>
          </div>

          {/* Block 03 - Wide block */}
          <div className="animate-card group relative flex flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-left transition-colors duration-500 hover:border-[var(--lime)] hover:bg-white/[0.04]">
            <div className="mb-12 flex w-full items-center justify-between">
              <span className="rounded-full border border-white/10 px-4 py-1 text-xs font-bold tracking-widest text-gray-400 uppercase">
                03
              </span>
              <span className="text-2xl text-[var(--lime)] opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </div>
            <div>
              <h3
                className="mb-4 text-4xl font-black tracking-wider text-white uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: 'var(--tracking-readable)',
                }}
              >
                Sound Design
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-gray-400">
                Signez vos contenus avec une composition sur-mesure et une conception sonore
                immersive. L'audio fait 50% de l'impact visuel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
