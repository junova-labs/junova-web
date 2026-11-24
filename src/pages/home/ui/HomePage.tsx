import { ApproachSection } from './ApproachSection'
import { CtaSection } from './CtaSection'
import { EcosystemSection } from './EcosystemSection'
import { HeroSection } from './HeroSection'
import { SolutionsSection } from './SolutionsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ApproachSection />
      <EcosystemSection />
      <CtaSection />
    </>
  )
}
