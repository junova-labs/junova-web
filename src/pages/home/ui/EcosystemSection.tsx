import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { MOTION_VIEWPORT, fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container, Reveal } from '@shared/ui'
import { ECOSYSTEM_PILLARS } from '../model/homeContent'

export function EcosystemSection() {
  return (
    <section id="ecosistema" className="section-band bg-chalk text-carbon">
      <Container className="space-y-14 lg:space-y-16">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-junova uppercase">
            Dos caminos para empezar
          </p>
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-carbon sm:text-4xl lg:text-[2.75rem]">
            Elige el formato que mejor se ajusta a tus tiempos y objetivos.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-graphite sm:text-lg">
            Tanto si buscas crear una herramienta exclusiva desde cero como si
            prefieres adaptar un sistema probado de nuestro catálogo, trabajamos
            bajo un mismo estándar.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          className="grid gap-6 md:grid-cols-2"
        >
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const isBlue = pillar.tone === 'blue'

            return (
              <motion.article
                key={pillar.title}
                variants={fadeUpVariants}
                className={
                  isBlue
                    ? 'flex flex-col justify-between gap-10 bg-junova p-8 text-chalk sm:p-12'
                    : 'flex flex-col justify-between gap-10 bg-carbon p-8 text-chalk sm:p-12'
                }
              >
                <div className="space-y-6">
                  <p
                    className={
                      isBlue
                        ? 'text-xs font-semibold tracking-[0.18em] text-chalk/80 uppercase'
                        : 'text-xs font-semibold tracking-[0.18em] text-lightblue uppercase'
                    }
                  >
                    {pillar.label}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-chalk sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p
                      className={
                        isBlue
                          ? 'text-sm leading-relaxed text-chalk/90 sm:text-base'
                          : 'text-sm leading-relaxed text-neutral sm:text-base'
                      }
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    to={pillar.ctaTo}
                    className={
                      isBlue
                        ? 'inline-flex items-center gap-2 border-b border-chalk pb-1 text-sm font-semibold text-chalk transition-colors hover:border-lightblue hover:text-lightblue'
                        : 'inline-flex items-center gap-2 border-b border-lightblue pb-1 text-sm font-semibold text-chalk transition-colors hover:text-lightblue'
                    }
                  >
                    {pillar.ctaLabel}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
