import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ROUTES, SITE_CONFIG } from '@shared/config'
import { fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container, JunovaConstruct } from '@shared/ui'

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-4.5rem)] items-center bg-chalk py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:col-span-6"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-semibold tracking-[0.2em] text-junova uppercase"
            >
              {SITE_CONFIG.name} · Software y Productos Digitales
            </motion.p>

            <motion.h1
              variants={fadeUpVariants}
              className="text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.06] font-semibold tracking-tight text-carbon"
            >
              Software que se adapta a tu empresa.
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="max-w-lg text-base leading-relaxed text-graphite sm:text-lg"
            >
              Adaptamos soluciones de nuestro catálogo a tu operación y creamos
              software a medida cuando tu idea lo requiere.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <Link to={ROUTES.SERVICES} className="btn btn-blue">
                Explorar servicios
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to={ROUTES.PRODUCTS}
                className="inline-flex items-center gap-2 border-b border-carbon pb-1 text-sm font-semibold text-carbon transition-colors hover:border-junova hover:text-junova"
              >
                Ver catálogo
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
