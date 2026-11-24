import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ROUTES, SITE_CONFIG } from '@shared/config'
import { MOTION_VIEWPORT, fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container, JunovaMark, Reveal } from '@shared/ui'
import { ABOUT_VALUES } from '../model/aboutContent'

export function AboutPage() {
  return (
    <>
      <section className="border-b border-carbon/12 bg-chalk py-16 sm:py-24 lg:py-28">
        <Container>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="space-y-5 lg:col-span-7">
              <motion.p
                variants={fadeUpVariants}
                className="text-xs font-semibold tracking-[0.2em] text-junova uppercase"
              >
                Nosotros
              </motion.p>
              <motion.h1
                variants={fadeUpVariants}
                className="text-[clamp(2.15rem,4.2vw,3.5rem)] leading-[1.08] font-semibold tracking-tight text-carbon"
              >
                Construimos tecnología clara, útil y duradera.
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUpVariants}
              className="text-base leading-relaxed text-graphite sm:text-lg lg:col-span-5"
            >
              {SITE_CONFIG.name} es una empresa tecnológica enfocada en crear
              software adaptable y convertir ideas concretas en soluciones
              digitales reales.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="section-band bg-junova text-chalk">
        <Container>
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-5 lg:col-span-4">
              <JunovaMark className="size-10" />
              <p className="text-xs font-semibold tracking-[0.2em] text-chalk/80 uppercase">
                Propósito
              </p>
            </div>

            <div className="space-y-6 lg:col-span-8">
              <h2 className="text-2xl leading-[1.2] font-semibold tracking-tight text-chalk sm:text-3xl lg:text-4xl">
                Creemos que el buen software debe adaptarse a la forma en que
                trabajan las personas, no obligarlas a cambiar todo para poder
                usarlo.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-chalk/85">
                Por eso desarrollamos un catálogo propio de soluciones adaptables
                y, al mismo tiempo, acompañamos proyectos a medida cuando una
                idea o una operación requiere construirse desde cero.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-band bg-carbon text-chalk">
        <Container className="space-y-14">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] text-lightblue uppercase">
                Forma de trabajo
              </p>
              <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl">
                Lo que guía cada proyecto en {SITE_CONFIG.name}.
              </h2>
            </div>

            <Link to={ROUTES.CONTACT} className="btn btn-chalk w-fit">
              Conversar con nosotros
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={MOTION_VIEWPORT}
            className="grid gap-10 md:grid-cols-3"
          >
            {ABOUT_VALUES.map((value) => (
              <motion.article
                key={value.index}
                variants={fadeUpVariants}
                className="space-y-4 border-t border-graphite pt-8"
              >
                <span className="font-display text-sm font-semibold text-lightblue">
                  {value.index}
                </span>
                <h3 className="text-xl font-semibold text-chalk">{value.title}</h3>
                <p className="text-sm leading-relaxed text-neutral sm:text-base">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  )
}
