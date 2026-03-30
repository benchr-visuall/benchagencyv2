'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Pourquoi nous', href: '/#pourquoi-nous' },
  { label: 'Offres', href: '/#offres' },
  { label: 'Évolution', href: '/#evolution' },
  { label: 'Studio 360°', href: '/#studio-360' },
  { label: 'Nos créations', href: '/#nos-creations' },
  { label: 'Contact', href: '/#contact' },
] as const

interface NavigationProps {
  variant?: 'dark' | 'light'
}

function NavLink({ label, href, isLight }: { label: string; href: string; isLight: boolean }) {
  return (
    <a
      href={href}
      className="group relative block py-2"
    >
      <span 
        className={`relative z-10 block text-sm font-bold tracking-[0.2em] uppercase transition-all duration-301 ease-out group-hover:text-white group-hover:-translate-y-0.5 ${
          isLight ? 'text-gray-600' : 'text-gray-400'
        }`}
      >
        {label}
      </span>
      <span className="absolute bottom-1 left-0 h-[2px] w-full origin-center scale-x-0 bg-[var(--lime)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  )
}

export function Navigation({ variant = 'dark' }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const isLight = variant === 'light'

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-6 py-5 backdrop-blur-md md:px-10 transition-colors duration-300 ${
          isLight 
            ? 'border-black/5 bg-white/70 text-black' 
            : 'border-white/5 bg-black/50 text-white'
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          className={`flex items-center gap-2 transition-colors duration-300 ${isLight ? 'text-black' : 'text-white'}`}
          style={{ textDecoration: 'none' }}
        >
          <Image
            src="/bench-agency-logo.svg"
            alt="BenchAgency Logo"
            width={180}
            height={40}
            className={`h-8 w-auto md:h-10 transition-all duration-300 ${isLight ? 'invert' : ''}`}
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink {...link} isLight={isLight} />
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="/sprint"
          className="hidden items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-widest bg-[var(--lime)] text-black transition-all duration-300 md:flex hover:scale-105 hover:shadow-[0_0_30px_rgba(209,255,0,0.4)] uppercase"
        >
          Votre site gratuit
        </a>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${isLight ? 'bg-black' : 'bg-white'}`}
            style={{ transform: open ? 'rotate(45deg) translateY(5px)' : '' }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${isLight ? 'bg-black' : 'bg-white'}`}
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${isLight ? 'bg-black' : 'bg-white'}`}
            style={{ transform: open ? 'rotate(-45deg) translateY(-5px)' : '' }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden"
        style={{
          background: isLight ? 'var(--white)' : 'var(--black)',
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
            className={`text-4xl transition-colors ${isLight ? 'text-black hover:text-[var(--lime)]' : 'text-white hover:text-[var(--lime)]'}`}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/sprint"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full bg-[var(--lime)] px-8 py-3 text-sm font-medium tracking-widest text-black uppercase"
        >
          Votre site gratuit
        </a>
      </div>
    </>
  )
}

