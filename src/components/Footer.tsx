const MARQUEE_TEXT =
  'Ø LOYER · Ø MAINTENANCE · Ø STRESS · Ø LOYER · Ø MAINTENANCE · Ø STRESS · Ø LOYER · Ø MAINTENANCE · Ø STRESS · '

export function Footer() {
  return (
    <footer
      className="relative flex flex-col items-center overflow-hidden"
      style={{ background: 'var(--off-black)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Marquee Banner */}
      <div
        className="w-full overflow-hidden py-8 md:py-12"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="marquee-track flex w-max">
          <span
            className="text-6xl leading-none font-black text-[var(--lime)] uppercase md:text-8xl"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-readable)',
            }}
          >
            {MARQUEE_TEXT}
          </span>
          <span
            className="text-6xl leading-none font-black text-[var(--lime)] uppercase md:text-8xl"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 'var(--tracking-readable)',
            }}
          >
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-24 md:py-32">
        <div className="flex flex-col items-center gap-16 md:flex-row md:items-start md:justify-between">
          {/* Logo & Mission (Centered on mobile, Left on Desktop) */}
          <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
            <span
              className="text-6xl leading-none font-black text-white md:text-8xl"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: 'var(--tracking-ultra)',
              }}
            >
              BENCH
              <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.2)' }}>
                AGENCY
              </span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed font-medium tracking-widest text-gray-400 uppercase">
              Ingénierie créative d&apos;élite.
              <br />
              Précision chirurgicale.
              <br />
              Zéro friction.
            </p>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-center md:text-left">
            {['Manifeste', 'Offres', 'Studio', 'Créations', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace('é', 'e')}`}
                className="group flex items-center justify-center text-xs font-bold tracking-[0.2em] text-gray-500 uppercase transition-colors hover:text-white md:justify-start"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Global bottom bar */}
        <div className="mt-24 flex flex-col items-center gap-8 border-t border-white/5 pt-12 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--lime)]" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
              Système opérationnel — Annecy - Genève 2025
            </span>
          </div>
          <div className="flex gap-8">
            {['Mentions légales', 'Politique de confidentialité'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">
            © 2025 BenchAgency
          </p>
        </div>
      </div>
    </footer>
  )
}
