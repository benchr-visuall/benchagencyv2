import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/CustomCursor'
import { Preloader } from '@/components/Preloader'
import { SmoothScroll } from '@/components/SmoothScroll'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BenchAgency — Votre site. Livré demain.',
  description:
    "Agence d'ingénierie créative d'élite. Un brief ce matin, votre site en ligne demain. Zéro loyer, zéro maintenance, zéro stress.",
  metadataBase: new URL('https://benchagency.fr'),
  openGraph: {
    title: 'BenchAgency — Votre site. Livré demain.',
    description:
      'Un brief ce matin. Votre site en ligne demain. Architecture optimisée, vitesse maximale, zéro frais cachés.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BenchAgency — Votre site. Livré demain.',
    description:
      'Un brief ce matin. Votre site en ligne demain. Architecture optimisée, vitesse maximale, zéro frais cachés.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
