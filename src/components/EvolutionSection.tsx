'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function EvolutionSection() {
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
  const guarantees = [
    {
      icon: 'Ø',
      label: 'Loyer mensuel',
      desc: "Une prestation claire. Vous payez une fois, c'est réglé.",
    },
    {
      icon: 'Ø',
      label: 'Maintenance forcée',
      desc: 'Interventions à la demande. Aucun abonnement.',
    },
    {
      icon: '100%',
      label: 'Liberté totale',
      desc: 'Le code, le design, le domaine. Tout vous appartient.',
    },
  ]

  return (
    <section
      id="evolution"
      ref={sectionRef}
      className="relative flex flex-col items-center px-6 pt-20 pb-16 md:pt-32 md:pb-16"
      style={{ background: 'var(--lime)', color: 'var(--black)' }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        {/* Section Label */}
        <div className="animate-up mb-8 flex items-center justify-center gap-4">
          <span
            className="text-sm font-black text-black"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            05
          </span>
          <span className="h-px w-12 bg-black/20" />
          <span className="text-xs font-bold tracking-[0.3em] text-black uppercase">
            Évolution
          </span>
          <span className="h-px w-12 bg-black/20" />
        </div>

        {/* Title */}
        <h2
          className="animate-up mb-4 text-5xl leading-[0.9] font-black uppercase md:text-7xl lg:text-8xl"
          style={{ 
            fontFamily: "'Bebas Neue', sans-serif", 
            letterSpacing: 'calc(var(--tracking-readable) - 1px)' 
          }}
        >
          Votre site <span className="text-black">évolue</span> <br />
          avec vous.
        </h2>

        <p className="animate-up mb-12 text-sm font-black tracking-[0.05em] uppercase md:text-base">
          <span className="inline-block -rotate-1 transform bg-black px-6 py-3 text-white shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-transform hover:rotate-0">
            Pas de contrat inutile — La liberté, tout simplement.
          </span>
        </p>

        <div className="animate-up mx-auto mb-16 flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center">
          <p className="max-w-3xl text-lg leading-relaxed font-medium tracking-tight text-black md:text-xl">
            Besoin de changer un texte, une photo ou autre chose ? Nous intervenons à la demande.
            Vous payez à la modification.
          </p>
        </div>

        {/* 3 guarantees horizontally grouped */}
        <div className="cards-grid grid w-full grid-cols-1 gap-12 md:grid-cols-3">
          {guarantees.map((item) => (
            <div key={item.label} className="animate-card h-full">
              <div className="group flex h-full flex-col items-center gap-4 text-center transition-transform duration-300 hover:-translate-y-2">
                <span
                  className="text-6xl leading-none font-black text-black/90 md:text-7xl lg:text-8xl"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: 'var(--tracking-tight)',
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold tracking-widest uppercase">{item.label}</h3>
                  <p className="mx-auto max-w-[200px] text-sm font-medium text-black/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
