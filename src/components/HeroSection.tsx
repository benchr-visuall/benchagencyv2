import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32"
      style={{ background: 'var(--black)' }}
    >
      {/* Abstract Background Image with Gradient Fade */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/okokok.webp"
          alt="Abstract Dark Background"
          fill
          className="object-cover object-center opacity-60 mix-blend-screen"
          priority
        />
        {/* Gradient overlay: starts black at top, fades to transparent, then black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Background grid lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />



      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center">
        {/* Top Logo (Adjusted size) */}
        <div className="relative z-[1000] mb-8 flex w-full max-w-[140px] justify-center">
          <Image
            src="/picto-vert.svg"
            alt="BenchAgency Logo Picto"
            width={400}
            height={400}
            className="h-auto w-full animate-pulse object-contain opacity-80 mix-blend-screen"
            priority
          />
        </div>

        {/* Intro label */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-white/20" />
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
            Creative Engineering — Annecy - Genève
          </span>
          <span className="h-px w-12 bg-white/20" />
        </div>

        {/* Main Title */}
        <h1
          className="mb-8 flex flex-col items-center text-[clamp(1.75rem,5vw,4.5rem)] leading-[0.85] font-black tracking-tight text-white uppercase xl:text-[5.3rem]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 'calc(var(--tracking-readable) - 1px)' }}
        >
          <span>
            Nous forgeons{' '}
            <span style={{ color: 'var(--lime)', textShadow: '0 0 50px rgba(209,255,0,0.3)' }}>
              votre image.
            </span>
          </span>
          <span>
            Nous simplifions{' '}
            <span style={{ color: 'var(--lime)', textShadow: '0 0 50px rgba(209,255,0,0.3)' }}>
              votre site web.
            </span>
          </span>
        </h1>

        {/* Subtitle (Adjusted size) */}
        <p
          className="mx-auto mb-20 max-w-5xl text-2xl leading-none font-bold tracking-tight text-white uppercase md:text-3xl"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '0.04em',
          }}
        >
          un brief ce matin. votre site{' '}
          <span style={{ color: 'var(--lime)' }}>en ligne demain.</span>
        </p>

        {/* Stats & CTA Row */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
          <div className="flex gap-12">
            {[
              { value: '24H', label: 'Déploiement' },
              { value: '0€', label: 'Loyer mensuel' },
              { value: '100%', label: 'à vous' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <span
                  className="text-5xl font-black text-white md:text-6xl"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: 'calc(var(--tracking-readable) - 1px)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-bold text-[var(--lime)] uppercase"
                  style={{ letterSpacing: 'calc(var(--tracking-readable) - 1px)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="hidden h-16 w-px bg-white/10 md:block" />

          {/* Animated Spinning Outline Wrapper */}
          <div className="relative group flex h-16 w-64 items-center justify-center overflow-hidden rounded-full p-[2px]">
            {/* The spinning background */}
            <div className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(var(--lime)_0deg,transparent_90deg,transparent_180deg,var(--lime)_360deg)]" />
            
            {/* The actual button content over the spinning background */}
            <a
              href="#contact"
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white text-sm font-bold tracking-wider text-black uppercase transition-all duration-500"
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
    </section >
  )
}
