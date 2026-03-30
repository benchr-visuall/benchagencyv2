'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

// DATA
const CONTENT = {
  hero: {
    title: 'Votre site remboursé à 100% !',
    hook: 'Recommandez. Nous signons. Vous économisez.',
  },
  steps: [
    { id: 'h1', title: 'Mise en ligne', description: 'de votre site' },
    { id: 'h2', title: 'Vous recommandez', description: 'un contact' },
    { id: 'h3', title: 'Le devis est signé', description: '+ acompte encaissé' },
    { id: 'h4', title: 'Remise appliquée', description: 'automatiquement' },
  ],
  sprint: {
    title: 'OFFRE DE LANCEMENT',
    subtitle: '14 PREMIERS JOURS',
    deals: [
      { id: 's1', clients: '1 RECOMMANDATION', reward: '-50%', detail: 'ACOMPTE REMBOURSÉ', subtext: 'Vous récupérez immédiatement votre acompte', icon: '⚡' },
      { id: 's2', clients: '2 RECOMMANDATIONS', reward: '100% OFFERT', detail: 'SITE GRATUIT', subtext: 'Aucun coût final', icon: '🏆' },
    ],
  },
  classic: {
    title: 'APRÈS 14 JOURS',
    subtitle: 'JUSQU’AU 30IEME JOUR',
    deals: [
      { id: 'c1', clients: '1 RECOMMANDATION', reward: '-25%', detail: 'sur le solde restant', subtext: '', icon: '🤝' },
      { id: 'c2', clients: '2 RECOMMANDATIONS', reward: '-50%', detail: 'sur le solde restant', subtext: '', icon: '✨' },
    ],
  },
  info: [
    { 
      title: 'Pourquoi 14 jours', 
      text: 'Le site est mis en ligne rapidement (48–72h). Cette période permet de maximiser les recommandations à chaud. Plus l’action est rapide, plus le gain est important.' 
    },
    { 
      title: 'Conditions', 
      text: 'Une recommandation est validée après signature du devis et encaissement de l’acompte. Les remises s’appliquent uniquement sur le site concerné.\nOffre valable jusqu’à 30 jours après la mise en ligne.' 
    },
  ],
} as const

export default function SprintPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-in', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[var(--lime)] selection:text-black overflow-x-hidden">
      {/* Background System — Merged from HeroSection */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/okokok.webp"
          alt="Dark Background"
          fill
          className="object-cover object-center opacity-40 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      <Navigation variant="dark" />
      
      <main ref={containerRef} className="relative z-10 flex flex-col items-center">
        
        {/* HERO + STEPS SECTION (Visible on load) */}
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 pt-20">
          <div className="max-w-5xl w-full flex flex-col items-center gap-12 text-center">
            
            {/* Hero Selection */}
            <div className="flex flex-col items-center gap-8 animate-in w-full text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-white/20" />
                <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase">OFFRE EXCLUSIVE</span>
                <span className="h-px w-12 bg-white/20" />
              </div>
              <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] font-black tracking-tight text-white uppercase xl:text-[5.3rem] text-center" style={{ fontFamily: 'var(--font-display)', lineHeight: 'calc(0.9em + 3px)' }}>
                Votre site <br />
                <span className="text-[var(--lime)]" style={{ textShadow: '0 0 50px rgba(209,255,0,0.3)' }}>remboursé à 100% !</span>
              </h1>
              <p className="max-w-4xl text-2xl font-normal text-white/90 md:text-3xl leading-tight" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>
                 Recommandez. Nous signons. <span className="text-[var(--lime)]">Vous économisez.</span>
              </p>
            </div>

            {/* Steps Section — Minimal & High Visibility */}
            <div className="animate-in w-full max-w-6xl mt-12 mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                 {CONTENT.steps.map((step, idx) => (
                   <div key={step.id} className="relative flex flex-col items-center md:items-start text-center md:text-left group">
                      <span 
                        className="text-6xl md:text-7xl font-black text-[var(--lime)] mb-4 block" 
                        style={{ 
                          fontFamily: 'var(--font-display)', 
                          textShadow: '0 0 30px rgba(209,255,0,0.4)',
                          lineHeight: 1
                        }}
                      >
                         {idx + 1}.
                      </span>
                      
                      <div className="flex flex-col gap-1">
                         <h3 
                           className="text-2xl md:text-3xl font-black text-white uppercase leading-none" 
                           style={{ 
                             fontFamily: 'var(--font-display)',
                             letterSpacing: '2px'
                           }}
                         >
                           {step.title}
                         </h3>
                         <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest">
                           {step.description}
                         </p>
                      </div>
                      <div className="mt-4 h-1 w-0 bg-[var(--lime)] transition-all duration-500 group-hover:w-full opacity-50" />
                   </div>
                 ))}
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
            <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[var(--lime)] to-transparent" />
          </div>
        </section>

        {/* OFFRE DE LANCEMENT — BELOW THE FOLD */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-24 py-10 px-6">
          
          {/* Launch Section: Centered Editorial blocks */}
          <section id="offre-lancement" className="flex flex-col items-center gap-16 w-full animate-in">
             <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase" style={{ fontFamily: 'var(--font-display)' }}>{CONTENT.sprint.title}</h2>
                <span className="text-xs font-black tracking-[0.4em] text-[var(--lime)] uppercase">{CONTENT.sprint.subtitle}</span>
             </div>

             <div className="flex flex-col gap-6 w-full max-w-6xl">
                {CONTENT.sprint.deals.map((deal) => (
                  <div key={deal.id} className="relative group flex flex-col md:flex-row items-center md:items-center p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:border-[var(--lime)] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden text-center md:text-left gap-8 md:gap-16">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--lime)] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                    <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">{deal.icon}</span>
                    <div className="flex flex-col md:flex-row flex-grow items-center md:items-center justify-between gap-6">
                      <div className="flex flex-col items-center md:items-start gap-1 flex-shrink-0">
                         <span className="text-sm font-black tracking-[0.2em] text-[var(--lime)] uppercase mb-2">{deal.clients}</span>
                         <h3 className="text-4xl md:text-5xl font-black text-white leading-none transition-all group-hover:text-[var(--lime)]" style={{ fontFamily: 'var(--font-display)' }}>
                           {deal.reward}
                         </h3>
                      </div>
                      <div className="flex flex-col items-center md:items-end gap-2 md:text-right">
                        <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                          {deal.detail}
                        </p>
                        {deal.subtext && (
                          <p className="text-sm md:text-base font-normal text-gray-500 leading-tight">{deal.subtext}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Classic Section: Horizontal Rows */}
          <section className="flex flex-col items-center gap-12 w-full animate-in pt-16 border-t border-white/5">
             <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl md:text-5xl font-black text-[var(--lime)] uppercase" style={{ fontFamily: 'var(--font-display)' }}>{CONTENT.classic.title}</h2>
                <span className="text-xs font-black tracking-[0.4em] text-white uppercase">{CONTENT.classic.subtitle}</span>
             </div>

             <div className="flex flex-col gap-4 w-full max-w-6xl">
                {CONTENT.classic.deals.map((deal) => (
                  <div key={deal.id} className="relative group flex flex-col md:flex-row items-center p-6 md:p-8 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white hover:bg-white/[0.02] transition-all duration-300 text-center md:text-left gap-8">
                    <span className="text-4xl opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0">{deal.icon}</span>
                    <div className="flex flex-col md:flex-row flex-grow items-center md:items-center justify-between gap-4">
                      <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="text-sm font-black tracking-[0.2em] text-[var(--lime)] uppercase mb-1">{deal.clients}</span>
                        <h3 className="text-4xl md:text-5xl font-black text-white transition-colors group-hover:text-[var(--lime)] leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                          {deal.reward}
                        </h3>
                      </div>
                      <p className="text-xl md:text-2xl font-black text-white uppercase tracking-widest md:text-right" style={{ fontFamily: 'var(--font-display)' }}>
                        {deal.detail}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Info Section: Wide Vertical Banners */}
          <section className="animate-in w-full items-center flex flex-col pt-16 border-t border-white/5">
             <div className="max-w-6xl w-full flex flex-col gap-8">
                {CONTENT.info.map((item) => (
                   <div key={item.title} className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-10 transition-all duration-500 hover:border-[var(--lime)] hover:bg-white/[0.03] min-h-[140px] text-center">
                     <h3 className="text-2xl md:text-4xl font-black text-[var(--lime)] uppercase mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>
                        {item.title}
                     </h3>
                     <p className="text-lg md:text-xl font-normal leading-relaxed text-white max-w-3xl tracking-tight whitespace-pre-line" style={{ letterSpacing: '-0.015em' }}>
                        {item.text}
                     </p>
                   </div>
                ))}
             </div>
          </section>
        </div>
      </main>

      <Footer variant="minimal" />

    </div>
  )
}
