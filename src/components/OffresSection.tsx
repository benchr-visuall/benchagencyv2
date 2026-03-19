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
    price: '590',
    features: [
      '1 page optimisée',
      'Responsive mobile',
      'SEO technique',
      'Livraison 24h',
      'Hébergement inclus 1an',
    ],
    featured: false,
  },
  {
    id: 'multi',
    tier: 'Multi',
    tagline: 'La vitrine complète.',
    description: 'Pour asseoir votre autorité sur tous vos métiers.',
    price: '990',
    features: ["Jusqu'à 5 pages", 'Blog intégré', 'Formulaire contact', 'Analytics', 'SEO avancé'],
    featured: true,
  },
  {
    id: 'signature',
    tier: 'Signature',
    tagline: "L'exception visuelle.",
    description: 'Un design artisanal pour marquer les esprits.',
    price: '1490',
    features: [
      'Design sur-mesure',
      'Animations premium',
      'CMS headless',
      'Performance A+',
      'Suivi 6 mois',
    ],
    featured: false,
  },
] as const

export function OffresSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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
    const rotateX = (-y / rect.height) * 12
    const rotateY = (x / rect.width) * 12
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeave = (idx: number) => {
    const card = cardRefs.current[idx]
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
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">
            Nos Offres
          </span>
          <span className="h-px w-8 bg-white/20" />
        </div>

        {/* Title */}
        <h2
          className="animate-up mb-24 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 'calc(var(--tracking-readable) - 1px)' }}
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
                className="group relative flex h-full flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.01] px-8 py-12 text-left backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.03] active:scale-95"
                style={{
                  boxShadow: offre.featured ? '0 0 40px rgba(209,255,0,0.05)' : 'none',
                  cursor: 'none',
                }}
              >
                {/* Animated Border Gradient */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 animate-[border-glow_2s_linear_infinite] rounded-3xl border-[1.5px] border-[var(--lime)]" />
                  <style jsx>{`
                    @keyframes border-glow {
                      0%,
                      100% {
                        opacity: 0.3;
                        filter: blur(2px);
                      }
                      50% {
                        opacity: 0.8;
                        filter: blur(4px);
                      }
                    }
                  `}</style>
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
                <div className="flex items-end gap-2">
                  <span
                    className="text-[clamp(3.5rem,5vw,4.5rem)] leading-none font-black text-white"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: 'var(--tracking-tight)',
                    }}
                  >
                    {offre.price}
                  </span>
                  <span className="mb-2 text-xl font-bold text-[var(--lime)]">€</span>
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
                  className="mt-auto block w-full rounded-full border border-white/20 bg-white/5 py-4 text-center text-xs font-bold tracking-wider text-white uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--lime)] group-hover:text-black group-active:scale-95"
                >
                  Sélectionner
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
