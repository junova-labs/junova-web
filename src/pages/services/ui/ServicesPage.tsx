import { ServiceComparisonSection } from './ServiceComparisonSection'
import { ServiceModelsSection } from './ServiceModelsSection'
import { ServicesCtaSection } from './ServicesCtaSection'
import { ServicesHero } from './ServicesHero'

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceModelsSection />
      <ServiceComparisonSection />
      <ServicesCtaSection />
    </>
  )
}
