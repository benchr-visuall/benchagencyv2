export function EvolutionSection() {
    const guarantees = [
        { icon: 'Ø', label: 'Loyer mensuel', desc: "Une prestation claire. Vous payez une fois, c'est réglé." },
        { icon: 'Ø', label: 'Maintenance forcée', desc: 'Interventions à la demande. Aucun abonnement.' },
        { icon: '100%', label: 'Liberté totale', desc: 'Le code, le design, le domaine. Tout vous appartient.' },
    ]

    return (
        <section
            id="evolution"
            className="relative flex flex-col items-center px-6 py-32 md:py-48"
            style={{ background: 'var(--lime)', color: 'var(--black)' }}
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
                {/* Section Label */}
                <div className="mb-8 flex items-center justify-center gap-4">
                    <span className="text-sm font-black text-black" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>05</span>
                    <span className="h-px w-8 bg-black/20" />
                    <span className="text-xs font-bold tracking-widest text-black/60 uppercase">
                        Évolution
                    </span>
                    <span className="h-px w-8 bg-black/20" />
                </div>

                {/* Title */}
                <h2
                    className="mb-12 text-5xl leading-[0.9] font-black uppercase md:text-7xl lg:text-9xl tracking-tighter"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                    Votre site <span className="text-black">évolue</span> <br />
                    avec vous.
                </h2>

                {/* Text */}
                <div className="mx-auto mb-24 flex w-full max-w-4xl flex-col items-center gap-8 text-center px-4">
                    <p className="text-3xl md:text-5xl font-black leading-tight text-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                        Nous ne livrons pas de chantiers inachevés.
                    </p>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-black/80 max-w-2xl">
                        Votre site est une structure autonome, sécurisée et définitive. Besoin de changer un texte, une photo ou autre chose ? Nous intervenons à la demande.
                    </p>
                    <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-black bg-black/[0.03] p-6 shadow-[8px_8px_0px_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000]">
                        <span className="text-xs font-bold tracking-widest text-black/50 uppercase">Pas de contrat inutile</span>
                        <p className="text-2xl font-black tracking-widest text-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            La liberté, tout simplement.
                        </p>
                    </div>
                </div>

                {/* 3 guarantees horizontally grouped */}
                <div className="grid w-full grid-cols-1 gap-12 border-t border-black/10 pt-16 md:grid-cols-3">
                    {guarantees.map((item) => (
                        <div key={item.label} className="group flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:-translate-y-2">
                            <span
                                className="text-6xl font-black leading-none md:text-7xl lg:text-8xl text-black/90"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                {item.icon}
                            </span>
                            <div>
                                <h3 className="mb-2 text-lg font-bold uppercase tracking-widest">{item.label}</h3>
                                <p className="text-sm font-medium text-black/60 mx-auto max-w-[200px]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
