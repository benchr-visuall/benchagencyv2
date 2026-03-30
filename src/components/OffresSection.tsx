'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OFFRES = [
  {
    id: 'basic',
    tier: 'Basic',
    tagline: "L'essentiel en une page.",
    description: 'Pour être en ligne hier.',
    price: '690',
    features: [
      'Landing page (page unique)',
      'Design 100% Responsive',
      'Livraison en 48h',
      'Nom de domaine + Hébergement (1 an)',
      'Conforme RGPD',
      'Formulaire de contact',
    ],
    featured: false,
  },
  {
    id: 'multi',
    tier: 'Multi',
    tagline: 'La vitrine complète.',
    description: 'Pour asseoir votre autorité sur tous vos métiers.',
    price: '1190',
    features: [
      'Intégralité du pack BASIC inclut +',
      "Site multi page (jusqu'à 5 pages)",
      'Livraison en 72h',
      'Maillage interne (SEO optimisé par page)',
      'Architecture de navigation fluide',
      '1 Module au choix (WhatsApp / Réservation / Chat box...)',
    ],
    featured: true,
  },
  {
    id: 'signature',
    tier: 'Signature',
    tagline: "L'exception visuelle.",
    description: 'Un design artisanal pour marquer les esprits.',
    price: '1890',
    features: [
      'Intégralité du pack MULTI inclut +',
      'Design "Haute Couture" (100% sur-mesure)',
      'Copywriting (Aide à la rédaction stratégique)',
      'Livraison en 1 semaine',
      'Modules supplémentaire illimités',
      "Modifications illimitées jusqu'à satisfaction",
    ],
    featured: false,
  },
] as const

export function OffresSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const sprintRef = useRef<HTMLDivElement>(null)

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = cardRefs.current[idx]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (-y / rect.height) * 22
    const rotateY = (x / rect.width) * 22
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const handleMouseLeave = (idx: number) => {
    const card = cardRefs.current[idx]
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }

  const handleMouseMoveSprint = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = sprintRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (-y / rect.height) * 15
    const rotateY = (x / rect.width) * 15
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeaveSprint = () => {
    const card = sprintRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }

  return (
    <section
      id="offres"
      ref={sectionRef}
      className="relative flex flex-col items-center border-t border-white/5 px-6 py-32 md:py-48"
      style={{ background: 'var(--off-black)' }}
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
            03
          </span>
          <span className="h-px w-12 bg-white/20" />
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Nos Offres
          </span>
          <span className="h-px w-12 bg-white/20" />
        </div>

        {/* Title */}
        <h2
          className="animate-up mb-24 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-8xl"
          style={{ 
            fontFamily: "'Bebas Neue', sans-serif", 
            letterSpacing: 'calc(var(--tracking-readable) - 1px)'
          }}
        >
          On adapte la{' '}
          <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.2)' }}>
            puissance
          </span>{' '}
          <br />à votre ambition.
        </h2>

        {/* Cards Grid */}
        <div className="cards-grid grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {OFFRES.map((offre, idx) => (
            <div key={offre.id} className="animate-card h-full">
              <div
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="card-3d group relative flex h-full flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.01] px-8 py-12 text-left backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.03] hover:border-white/20"
                style={{
                  boxShadow: offre.featured ? '0 0 40px rgba(209,255,0,0.05)' : 'none',
                  cursor: 'none',
                }}
              >
                {/* Continuous 3D Spinning Neon Border */}
                <div 
                  className="pointer-events-none absolute inset-0 z-[-1] rounded-3xl p-[1px] opacity-70"
                  style={{
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(var(--lime)_0deg,transparent_90deg,transparent_180deg,var(--lime)_360deg)]" />
                </div>
                {offre.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--lime)] px-4 py-1 text-[10px] font-bold tracking-wider text-black uppercase shadow-[0_0_20px_rgba(209,255,0,0.5)]">
                    Le plus demandé
                  </div>
                )}

                {/* Tier */}
                <div>
                  <h3
                    className="text-4xl font-black text-white uppercase transition-colors duration-300 group-hover:text-[var(--lime)]"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: 'var(--tracking-readable)',
                    }}
                  >
                    {offre.tier}
                  </h3>
                  <p className="mt-4 text-sm font-medium text-white">{offre.tagline}</p>
                  <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-gray-400">
                    {offre.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-normal text-white/50">
                    À partir de :
                  </span>
                  <div className="flex items-end gap-2">
                  <span
                    className="text-[clamp(3.5rem,5vw,4.5rem)] leading-none font-black text-white transition-colors duration-300 group-hover:text-[var(--lime)]"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: 'var(--tracking-tight)',
                    }}
                  >
                    {offre.price}
                  </span>
                  <span className="mb-2 text-xl font-bold text-[var(--lime)]">€</span>
                </div>
              </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/5 transition-colors group-hover:bg-white/10" />

                {/* Features */}
                <ul className="flex flex-col gap-4">
                  {offre.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-xs font-medium tracking-wider text-gray-300 uppercase"
                    >
                      <span className="mt-0.5 text-[var(--lime)]" style={{ fontSize: '10px' }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: offre.id }))}
                  className="mt-auto block w-full rounded-full border border-white/20 bg-white/5 py-4 text-center text-xs font-bold tracking-wider text-white uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--lime)] group-hover:text-black group-active:scale-95"
                >
                  Sélectionner
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sprint Offer */}
        <div className="animate-up relative mx-auto mt-24 w-full max-w-4xl">
          {/* Outer Glow for Sprint */}
          <div className="pointer-events-none absolute inset-0 animate-pulse rounded-[40px] bg-[var(--lime)] opacity-5 blur-xl" />
          
          <div
            ref={sprintRef}
            onMouseMove={handleMouseMoveSprint}
            onMouseLeave={handleMouseLeaveSprint}
            className="card-3d relative flex w-full flex-col items-center overflow-hidden rounded-3xl border border-[var(--lime)]/30 bg-black/80 p-12 text-center backdrop-blur-2xl transition-colors hover:border-[var(--lime)]/60 md:p-16"
            style={{ cursor: 'none' }}
          >
            {/* Inner Rotating Border for Sprint */}
            <div 
              className="pointer-events-none absolute inset-0 z-[-1] rounded-3xl p-[1.5px] opacity-100"
              style={{
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            >
              <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(var(--lime)_0deg,transparent_90deg,transparent_180deg,var(--lime)_360deg)]" />
            </div>

            <div className="mb-6 rounded-full border border-[var(--lime)] bg-[var(--lime)]/10 px-6 py-2 text-sm font-bold tracking-widest text-[var(--lime)] uppercase shadow-[0_0_15px_rgba(209,255,0,0.3)]">
              Offre de lancement
            </div>
            <h3
              className="mb-4 text-4xl font-black text-white uppercase md:text-6xl"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: 'calc(var(--tracking-readable) - 1px)',
              }}
            >
              Et si votre site ne vous coûtait rien ?
            </h3>
            <p className="mb-10 text-base leading-relaxed text-gray-300 md:text-xl md:max-w-2xl">
              Nous ne dépensons pas d'argent en publicité. Nous préférons vous le donner.
            </p>
            <a
              href="/sprint"
              className="group relative flex h-20 w-auto min-w-[320px] items-center justify-center overflow-hidden rounded-full bg-[var(--lime)] px-10 text-lg font-black tracking-widest text-black uppercase transition-transform hover:scale-105 hover:shadow-[0_0_60px_rgba(209,255,0,0.6)]"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Votre site gratuit ?
              </span>
              <div
                className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
