export function HeroSection() {
  return (
    <section
      id="hero"
      className="noise relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32"
      style={{ background: 'var(--black)' }}
    >
      {/* Background grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center">
        {/* Intro label */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-white/20" />
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            Creative Engineering — Annecy - Genève
          </span>
          <span className="h-px w-12 bg-white/20" />
        </div>

        {/* Main Title */}
        <h1
          className="mb-8 flex flex-col items-center text-[clamp(3.5rem,9vw,7rem)] leading-[0.9] font-black tracking-tight text-white uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 'var(--tracking-ultra)' }}
        >
          <span>
            Nous forgeons{' '}
            <span style={{ color: 'var(--lime)', textShadow: '0 0 40px rgba(209,255,0,0.3)' }}>
              votre image.
            </span>
          </span>
          <span>
            Nous simplifions <span style={{ color: 'var(--lime)' }}>votre site web.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-16 max-w-4xl text-xl leading-none font-bold tracking-tight text-white lowercase md:text-2xl"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: 'var(--tracking-readable)',
          }}
        >
          un brief ce matin. votre site{' '}
          <span style={{ color: 'var(--lime)' }}>en ligne demain.</span>
        </p>

        {/* Stats & CTA Row */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-24">
          <div className="flex gap-12 text-left">
            {[
              { value: '24H', label: 'Déploiement' },
              { value: '0€', label: 'Loyer mensuel' },
              { value: '100%', label: 'Propriété' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-4xl font-black text-white md:text-5xl"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: 'var(--tracking-tight)',
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-[0.1em] text-gray-500 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="hidden h-16 w-px bg-white/10 md:block" />

          <a
            href="#contact"
            className="group relative flex h-16 w-64 items-center justify-center overflow-hidden rounded-full bg-white text-sm font-bold tracking-wider text-black uppercase transition-all duration-500"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Un café et un site?
            </span>
            <div
              className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100"
              style={{ background: 'var(--lime)' }}
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <rect x="7" y="4" width="10" height="16" rx="5" ry="5"></rect>
          <path d="M12 8v4"></path>
        </svg>
      </div>
    </section>
  )
}
