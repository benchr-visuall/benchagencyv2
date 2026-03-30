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
      id="studio-360"
      ref={sectionRef}
      className="relative flex flex-col items-center border-t border-white/5 px-6 py-32 md:py-48"
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
          <span className="h-px w-12 bg-white/20" />
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Studio 360°
          </span>
          <span className="h-px w-12 bg-white/20" />
        </div>

        {/* Title */}
        <h2
          className="animate-up mb-8 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-8xl"
          style={{ 
            fontFamily: "'Bebas Neue', sans-serif", 
            letterSpacing: 'calc(var(--tracking-readable) - 1px)' 
          }}
        >
          Nous sommes{' '}
          <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.2)' }}>
            360°
          </span>
        </h2>

        <p className="animate-up mx-auto mb-20 max-w-5xl text-base font-medium tracking-widest uppercase md:text-lg">
          <span className="text-[var(--lime)]">On ne fait pas que du web.</span>{' '}
          <span className="text-white">On crée des marques qui marquent.</span>
        </p>

        {/* Centered Bento Grid */}
        <div className="cards-grid grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* Block 01 */}
          <div className="animate-card group relative flex flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-left transition-colors duration-500 hover:border-[var(--lime)] hover:bg-white/[0.04]">
            <div>
              <h3
                className="mb-4 text-4xl font-black tracking-wider text-[var(--lime)] uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: 'var(--tracking-readable)',
                }}
              >
                Identité Visuelle
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-gray-400">
                Nous créons des marques qui imposent le respect. De la conception du logotype à
                la charte graphique complète, nous forgeons une image de marque cohérente et
                mémorable qui vous démarque radicalement de la concurrence.
              </p>
            </div>
          </div>

          {/* Block 02 */}
          <div className="animate-card group relative flex flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-left transition-colors duration-500 hover:border-[var(--lime)] hover:bg-white/[0.04]">
            <div>
              <h3
                className="mb-4 text-4xl font-black tracking-wider text-[var(--lime)] uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: 'var(--tracking-readable)',
                }}
              >
                Production Média
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Donnez du poids à vos idées. Que ce soit pour des campagnes Instagram, des films
                publicitaires nous produisons des contenus visuels percutants conçus pour
                capter l'attention en moins de 2 secondes
              </p>
            </div>
          </div>

          {/* Block 03 - Wide block */}
          <div className="animate-card group relative flex flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-left transition-colors duration-500 hover:border-[var(--lime)] hover:bg-white/[0.04]">
            <div>
              <h3
                className="mb-4 text-4xl font-black tracking-wider text-[var(--lime)] uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: 'var(--tracking-readable)',
                }}
              >
                Sound Design
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-gray-400">
                L'audio représente 50% de l'impact émotionnel. Nous créons des compositions
                sonores et des identités audio sur-mesure pour donner un son à votre marque et
                rendre vos contenus vidéos inoubliables.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-up mt-16 flex justify-center">
          <a
            href="#contact"
            onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: 'studio' }))}
            className="group relative flex h-16 w-auto min-w-[280px] items-center justify-center overflow-hidden rounded-full bg-[var(--lime)] px-10 text-base font-black tracking-widest text-black uppercase transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(209,255,0,0.4)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              On en discute ?
            </span>
            <div
              className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
