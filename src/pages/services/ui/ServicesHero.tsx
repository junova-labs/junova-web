import { motion } from 'motion/react'
import { fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container } from '@shared/ui'

export function ServicesHero() {
  return (
    <section className="border-b border-carbon/12 bg-chalk py-16 sm:py-24 lg:py-28">
      <Container>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="space-y-5 lg:col-span-7">
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-semibold tracking-[0.2em] text-junova uppercase"
            >
              Servicios
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              className="text-[clamp(2.15rem,4.2vw,3.5rem)] leading-[1.08] font-semibold tracking-tight text-carbon"
            >
              Catálogo adaptable y desarrollo a medida.
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUpVariants}
            className="text-base leading-relaxed text-graphite sm:text-lg lg:col-span-5"
          >
            Partimos principalmente de plataformas probadas de nuestro catálogo
            que adaptamos a cada empresa, y complementamos nuestra oferta con
            desarrollo desde cero para proyectos específicos.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
