'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'Manifeste', href: '#manifeste' },
  { label: 'Offres', href: '#offres' },
  { label: 'Studio', href: '#studio' },
  { label: 'Créations', href: '#creations' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5 md:px-10"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-white"
          style={{ textDecoration: 'none' }}
        >
          <span
            className="text-2xl font-bold tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.12em' }}
          >
            BENCH<span style={{ color: 'var(--lime)' }}>AGENCY</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm tracking-widest text-gray-400 transition-colors duration-200 hover:text-white"
                style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:border-[var(--lime)] hover:text-[var(--lime)] md:flex"
        >
          Un café et un site ?
        </a>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{ transform: open ? 'rotate(45deg) translateY(5px)' : '' }}
          />
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{ transform: open ? 'rotate(-45deg) translateY(-5px)' : '' }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden"
        style={{
          background: 'var(--black)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-4xl text-white transition-colors hover:text-[var(--lime)]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full border border-[var(--lime)] px-8 py-3 text-sm tracking-widest text-[var(--lime)]"
        >
          UN CAFÉ ET UN SITE ?
        </a>
      </div>
    </>
  )
}
