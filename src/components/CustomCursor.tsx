'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [cursorClass, setCursorClass] = useState('')
  const pos = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12)
      current.current.y = lerp(current.current.y, pos.current.y, 0.12)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x - cursorRef.current.offsetWidth / 2}px, ${current.current.y - cursorRef.current.offsetHeight / 2}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const onEnterBtn = () => setCursorClass('hovering')
    const onLeaveBtn = () => setCursorClass('')
    const onEnterPortfolio = () => setCursorClass('voir')
    const onLeavePortfolio = () => setCursorClass('')

    window.addEventListener('mousemove', onMove)
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

    // Re-scan on DOM mutations
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${cursorClass}`}
      style={{ transform: 'translate(-100px, -100px)' }}
    >
      {cursorClass === 'voir' && (
        <span
          ref={labelRef}
          className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tracking-widest text-black"
        >
          VOIR
        </span>
      )}
    </div>
  )
}
