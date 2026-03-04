import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ManifestSection } from '@/components/ManifestSection'
import { OffresSection } from '@/components/OffresSection'
import { StudioSection } from '@/components/StudioSection'
import { EvolutionSection } from '@/components/EvolutionSection'
import { CreationsSection } from '@/components/CreationsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ManifestSection />
        <OffresSection />
        <StudioSection />
        <EvolutionSection />
        <CreationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
