import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ROUTES, SITE_CONFIG } from '@shared/config'
import { fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container, JunovaConstruct } from '@shared/ui'

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-4.5rem)] items-center bg-chalk py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:col-span-6"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-semibold tracking-[0.2em] text-junova uppercase"
            >
              {SITE_CONFIG.name} · Empresa tecnológica
            </motion.p>

            <motion.h1
              variants={fadeUpVariants}
              className="text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[1.03] font-semibold tracking-tight text-carbon"
            >
              Convertimos ideas en software y productos digitales.
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="max-w-lg text-base leading-relaxed text-graphite sm:text-lg"
            >
              Desarrollamos software a medida, brindamos servicios tecnológicos y
              creamos productos propios con enfoque claro, útil y duradero.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <Link to={ROUTES.CONTACT} className="btn btn-blue">
                Hablemos de tu idea
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to={ROUTES.SERVICES}
                className="inline-flex items-center gap-2 border-b border-carbon pb-1 text-sm font-semibold text-carbon transition-colors hover:border-junova hover:text-junova"
              >
                Ver servicios
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <JunovaConstruct />
          </div>
        </div>
      </Container>
    </section>
  )
}
