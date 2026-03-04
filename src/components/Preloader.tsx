'use client'

import { useEffect, useRef, useState } from 'react'

const METRICS = [
  { label: 'PERFORMANCE', value: 99 },
  { label: 'SEO', value: 100 },
  { label: 'SPEED', value: 'A+' },
]

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Tick up counter
    let n = 0
    const interval = setInterval(() => {
      n += 2
      setCount(n)
      if (n >= 100) clearInterval(interval)
    }, 18)

    // After 2.2s open shutter
    const tOpen = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add('open')
      }
      setDone(true)
    }, 2200)

    // After shutter animation hide it completely
    const tHide = setTimeout(() => setHidden(true), 3200)

    return () => {
      clearInterval(interval)
      clearTimeout(tOpen)
      clearTimeout(tHide)
    }
  }, [])

  if (hidden) return null

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
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            BENCH<span style={{ color: 'var(--lime)' }}>AGENCY</span>
          </div>

          {/* Metrics */}
          <div className="flex gap-12">
            {METRICS.map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-1">
                <span
                  className="text-3xl font-bold"
                  style={{ color: 'var(--lime)', fontFamily: "'Bebas Neue', sans-serif" }}
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
