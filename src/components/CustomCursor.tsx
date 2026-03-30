'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [cursorClass, setCursorClass] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // For a pixelated cursor, instant tracking feels best (retro style)
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const onMouseEnter = () => {
      setIsVisible(true)
    }

    const tick = () => {
      // Instant movement for the retro feel
      current.current.x = pos.current.x
      current.current.y = pos.current.y

      if (cursorRef.current) {
        // Offset so the tip of the arrow (top left) is exactly at the mouse coordinates
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const onEnterBtn = () => setCursorClass('hovering')
    const onLeaveBtn = () => setCursorClass('')
    const onEnterPortfolio = () => setCursorClass('voir')
    const onLeavePortfolio = () => setCursorClass('')

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    rafRef.current = requestAnimationFrame(tick)

    const addListeners = () => {
      document.querySelectorAll('button, a, [data-cursor="hover"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterBtn)
        el.addEventListener('mouseleave', onLeaveBtn)
      })
      document.querySelectorAll('[data-cursor="voir"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterPortfolio)
        el.addEventListener('mouseleave', onLeavePortfolio)
      })
    }

    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out ${cursorClass}`}
      style={{
        transform: 'translate(-100px, -100px)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease, transform 0.075s ease-out'
      }}
    >
      {/* Standard Arrow Cursor in Lime Green */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="var(--lime)"
        className={cursorClass === 'voir' ? 'scale-125 transition-transform' : 'transition-transform'}
        style={{
          filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))',
        }}
      >
        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83 2.3 5.17c.14.33.52.48.84.34l2.21-.98c.32-.14.47-.52.33-.84l-2.3-5.17h6.81c.45 0 .67-.54.35-.85L6.35 2.86c-.31-.31-.85-.09-.85.35z" />
      </svg>

      {cursorClass === 'voir' && (
        <span
          ref={labelRef}
          className="absolute left-6 top-1/2 -translate-y-1/2 rounded bg-[var(--lime)] px-2 py-1 text-[10px] font-black tracking-widest text-black shadow-lg"
        >
          VOIR
        </span>
      )}
    </div>
  )
}
