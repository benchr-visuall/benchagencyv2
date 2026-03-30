'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const METRICS = [
  { label: 'PERFORMANCE', value: 99 },
  { label: 'SEO', value: 100 },
  { label: 'SPEED', value: 'A+' },
]

export function Preloader() {
  const pathname = usePathname()
  const preloaderRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(true) // Default to hidden for SSR and safety
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const hasLoaded = sessionStorage.getItem('bench_agency_loaded')
      
      if (hasLoaded || pathname === '/sprint') {
        setHidden(true)
      } else {
        setHidden(false)
        sessionStorage.setItem('bench_agency_loaded', 'true')

        let n = 0
        const interval = setInterval(() => {
          n += 2
          setCount(n)
          if (n >= 100) clearInterval(interval)
        }, 20)

        const tOpen = setTimeout(() => {
          if (preloaderRef.current) {
            preloaderRef.current.classList.add('open')
          }
          setDone(true)
        }, 2200)

        const tHide = setTimeout(() => setHidden(true), 3200)

        return () => {
          clearInterval(interval)
          clearTimeout(tOpen)
          clearTimeout(tHide)
        }
      }
    } catch (e) {
      setHidden(true) // Fail safe: hide if storage errors
    }
  }, [pathname])

  if (!mounted || hidden) return null

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Shutter panels */}
      <div className="preloader__panel preloader__panel--left" />
      <div className="preloader__panel preloader__panel--right" />

      {/* Content */}
      {!done && (
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Logo */}
          <div
            className="text-5xl font-bold tracking-wider text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-ultra)',
            }}
          >
            BENCH<span style={{ color: 'var(--lime)' }}>AGENCY</span>
          </div>

          {/* Metrics */}
          <div className="flex gap-12">
            {METRICS.map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-1">
                <span
                  className="text-3xl font-bold"
                  style={{
                    color: 'var(--lime)',
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: 'var(--tracking-tight)',
                  }}
                >
                  {m.label === 'PERFORMANCE' ? count : m.value}
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gray-500">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="h-px w-48 overflow-hidden bg-gray-800">
            <div
              className="h-full transition-all duration-75"
              style={{ width: `${count}%`, background: 'var(--lime)' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
