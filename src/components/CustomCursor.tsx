'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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
        // Offset so the pointer tip (top left of the hand) is exactly at the mouse coordinates
        cursorRef.current.style.transform = `translate(${current.current.x - 2}px, ${current.current.y - 2}px)`
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
      {/* Pixel Hand PNG provided by the user */}
      <Image
        src="/pixcursor.png"
        alt="Custom Cursor"
        width={38}
        height={44}
        className={cursorClass === 'voir' ? 'scale-125 transition-transform' : 'transition-transform'}
        style={{
          filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.4)) drop-shadow(0px 0px 1px white)'
        }}
        priority
      />

      {cursorClass === 'voir' && (
        <span
          ref={labelRef}
          className="absolute -right-8 top-1/2 -translate-y-1/2 rounded bg-[var(--lime)] px-2 py-1 text-[10px] font-black tracking-widest text-black shadow-lg"
        >
          VOIR
        </span>
      )}
    </div>
  )
}
