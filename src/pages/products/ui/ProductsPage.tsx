import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ROUTES } from '@shared/config'
import { MOTION_VIEWPORT, fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container, Reveal } from '@shared/ui'
import { ADAPTATION_TRAITS, CATALOG_LINES } from '../model/productsContent'

export function ProductsPage() {
  return (
    <>
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
                Productos
              </motion.p>
              <motion.h1
                variants={fadeUpVariants}
                className="text-[clamp(2.15rem,4.2vw,3.5rem)] leading-[1.08] font-semibold tracking-tight text-carbon"
              >
                Catálogo de software adaptable.
              </motion.h1>
            </div>

            <motion.div variants={fadeUpVariants} className="space-y-4 lg:col-span-5">
              <p className="text-base leading-relaxed text-graphite sm:text-lg">
                Soluciones base desarrolladas por JUNOVA para adaptarse a las
                reglas, identidad y ritmo de cada empresa.
              </p>
              <Link
                to={ROUTES.SERVICES}
                className="inline-flex items-center gap-2 border-b border-carbon pb-1 text-sm font-semibold text-carbon transition-colors hover:border-junova hover:text-junova"
              >
                Ver cómo funciona el servicio
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="section-band bg-carbon text-chalk">
        <Container className="space-y-14">
          <Reveal className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-lightblue uppercase">
              Líneas base
            </p>
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl">
              Arquitecturas listas para personalizar.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={MOTION_VIEWPORT}
            className="divide-y divide-graphite border-y border-graphite"
          >
            {CATALOG_LINES.map((item) => (
              <motion.article
                key={item.index}
                variants={fadeUpVariants}
                className="grid gap-6 py-10 lg:grid-cols-12 lg:items-start lg:gap-8"
              >
                <div className="flex items-center gap-4 lg:col-span-3">
                  <span className="font-display text-sm font-semibold text-lightblue">
                    {item.index}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-neutral uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-3 lg:col-span-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-chalk">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral sm:text-base">
                    {item.description}
                  </p>
                  <p className="text-xs font-medium text-lightblue">
                    {item.adaptationNote}
                  </p>
                </div>

                <div className="lg:col-span-3 lg:flex lg:justify-end">
                  <Link to={ROUTES.CONTACT} className="btn btn-outline-dark">
                    Solicitar adaptación
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="section-band bg-junova text-chalk">
        <Container className="space-y-14">
          <Reveal className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-chalk/80 uppercase">
              Adaptación real
            </p>
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl">
              Una base común, ajustada a cada operación.
            </h2>
          </Reveal>

          <div className="grid gap-10 border-t border-chalk/25 pt-10 md:grid-cols-3">
            {ADAPTATION_TRAITS.map((trait) => (
              <Reveal key={trait.index} className="space-y-3">
                <span className="font-display text-sm font-semibold text-lightblue">
                  {trait.index}
                </span>
                <h3 className="text-xl font-semibold text-chalk">{trait.title}</h3>
                <p className="text-sm leading-relaxed text-chalk/85 sm:text-base">
                  {trait.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
