'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BODY_TEXT =
  "Nous avons éliminé tout ce qui rend le web complexe : les systèmes instables, les abonnements contraignants et le jargon technique inutile. On conçoit votre site sur une architecture optimisée et durable. C'est une structure performante, avec un temps de chargement immédiat, répondant précisément aux exigences de Google pour votre visibilité. Pas de fausses promesses, pas de frais cachés : vous reprenez le contrôle avec une vitrine clé en main qui vous appartient à 100 %. On mise sur l'efficacité pure pour une présence en ligne qui valorise réellement votre entreprise."

export function ManifestSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const words = textRef.current?.querySelectorAll('span')
    if (!words || !sectionRef.current) return

    gsap.set(words, { color: '#1a1a1a' })

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      end: 'bottom 60%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const total = words.length

        words.forEach((word, i) => {
          const wordProgress = i / total
          if (progress > wordProgress + 0.1) {
            word.style.color = '#ffffff'
          } else if (progress > wordProgress) {
            word.style.color = '#d1ff00'
            word.style.textShadow = '0 0 20px rgba(209,255,0,0.5)'
          } else {
            word.style.color = '#1a1a1a'
            word.style.textShadow = 'none'
          }
        })
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  const words = BODY_TEXT.split(' ')

  return (
    <section
      id="manifeste"
      ref={sectionRef}
      className="noise relative flex flex-col items-center border-t border-white/5 px-6 py-32 md:py-48"
      style={{ background: 'var(--black)' }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Section Label */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className="text-sm font-black text-[var(--lime)]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}>02</span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Manifeste
          </span>
          <span className="h-px w-8 bg-white/20" />
        </div>

        {/* Section Title */}
        <h2
          className="mb-16 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Mécanique de précision<br />
          pour <span style={{ color: 'var(--lime)', textShadow: '0 0 30px rgba(209,255,0,0.2)' }}>votre visibilité.</span>
        </h2>

        {/* Animated Text */}
        <p
          ref={textRef}
          className="max-w-4xl text-2xl leading-[1.6] font-medium tracking-tight uppercase md:text-4xl lg:text-[40px]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
          aria-label={BODY_TEXT}
        >
          {words.map((word, i) => (
            <span key={i} style={{ color: '#1a1a1a', transition: 'color 0.2s ease, text-shadow 0.2s ease' }}>
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
