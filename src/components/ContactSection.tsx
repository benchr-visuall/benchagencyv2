'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitContact, type FormState } from '@/actions/contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { id: 'basic', label: 'Basic — 590€' },
  { id: 'multi', label: 'Multi — 990€' },
  { id: 'signature', label: 'Signature — 1490€' },
  { id: 'studio', label: 'Studio 360°' },
  { id: 'other', label: 'Autre chose' },
] as const

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [state, action, pending] = useActionState<FormState, FormData>(submitContact, null)

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

      gsap.from('.animate-form', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.form-container',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="noise relative flex flex-col items-center border-t border-white/5 px-6 py-32 md:py-48"
      style={{ background: 'var(--black)' }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Section Label */}
        <div className="animate-up mb-8 flex items-center justify-center gap-4">
          <span
            className="text-sm font-black text-[var(--lime)]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            07
          </span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Contact</span>
          <span className="h-px w-8 bg-white/20" />
        </div>

        {/* Title */}
        <h2
          className="animate-up mb-16 text-5xl leading-[0.9] font-black text-white uppercase md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 'calc(var(--tracking-readable) - 1px)' }}
        >
          Démarrez le{' '}
          <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.2)' }}>
            projet.
          </span>
        </h2>

        {/* Form Container */}
        <div className="animate-form form-container w-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-left md:p-16">
          {state?.success ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-[var(--lime)] shadow-[0_0_60px_rgba(209,255,0,0.3)]">
                <span className="text-6xl font-black text-black">✓</span>
              </div>
              <h3
                className="text-4xl font-black tracking-widest text-white uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Mission confirmée
              </h3>
              <p className="mt-4 text-sm leading-relaxed font-medium tracking-widest text-gray-400 uppercase">
                Nous analysons les paramètres. Retour sous 24h.
              </p>
            </div>
          ) : (
            <form action={action} className="flex flex-col gap-10">
              {/* Service selection */}
              <div>
                <label className="mb-6 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Quel module vous intéresse ?
                </label>
                <div className="flex flex-wrap gap-4">
                  {SERVICES.map((s) => (
                    <label
                      key={s.id}
                      className="group flex cursor-none items-center gap-3 rounded-full border border-white/20 bg-transparent px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-white/40 has-[:checked]:border-[var(--lime)] has-[:checked]:bg-[var(--lime)] has-[:checked]:text-black"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s.id}
                        className="sr-only"
                        required
                      />
                      {s.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Grid Fields */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jean Dupont"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all outline-none placeholder:text-gray-700 focus:border-[var(--lime)] focus:bg-white/[0.02]"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jean@exemple.fr"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all outline-none placeholder:text-gray-700 focus:border-[var(--lime)] focus:bg-white/[0.02]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Projet
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Expliquez-nous votre vision..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all outline-none placeholder:text-gray-700 focus:border-[var(--lime)] focus:bg-white/[0.02]"
                />
              </div>

              {state?.error && (
                <p className="text-center text-xs font-bold tracking-widest text-red-500 uppercase">
                  {state.error}
                </p>
              )}

              <div className="mt-4 flex w-full justify-center">
                <button
                  type="submit"
                  disabled={pending}
                  className="group relative flex h-16 w-auto min-w-[300px] items-center justify-center overflow-hidden rounded-full bg-[var(--lime)] px-12 text-black transition-all duration-500 disabled:opacity-50"
                >
                  <span className="relative z-10 mx-auto flex items-center justify-center font-bold tracking-wider uppercase">
                    {pending ? 'Envoi en cours...' : 'Challenge accepted :)'}
                  </span>
                  <div className="absolute inset-0 origin-right scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
