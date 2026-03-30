import Image from 'next/image'

const MARQUEE_TEXT =
  'Ø LOYER · Ø MAINTENANCE · Ø STRESS · Ø LOYER · Ø MAINTENANCE · Ø STRESS · Ø LOYER · Ø MAINTENANCE · Ø STRESS · '

interface FooterProps {
  variant?: 'default' | 'minimal'
}

export function Footer({ variant = 'default' }: FooterProps) {
  const isMinimal = variant === 'minimal'

  return (
    <footer
      className="relative flex flex-col items-center overflow-hidden"
      style={{ background: 'var(--off-black)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >


      <div className={`mx-auto flex w-full max-w-7xl flex-col px-6 ${isMinimal ? 'py-8' : 'py-12 md:py-16'}`}>
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Logo & Mission (Centered on mobile, Left on Desktop) */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <Image
              src="/bench-agency-logo.svg"
              alt="BenchAgency Logo"
              width={320}
              height={80}
              className="h-16 w-auto md:h-20"
            />
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
            {['Pourquoi nous', 'Offres', 'Évolution', 'Studio 360°', 'Nos créations', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace('é', 'e')
                  .replace('°', '')}`}
                className="group flex items-center justify-center text-xs font-bold tracking-[0.2em] text-gray-500 uppercase transition-colors hover:text-white md:justify-start"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Global bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-8 border-t border-white/5 pt-8 text-center md:flex-row md:justify-between md:text-left">
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
