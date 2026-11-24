import { motion } from 'motion/react'
import { MOTION_VIEWPORT, fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container, Reveal } from '@shared/ui'
import { PRACTICE_LINES } from '../model/homeContent'

export function SolutionsSection() {
  return (
    <section id="que-hacemos" className="section-band bg-junova text-chalk">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="space-y-6 lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-chalk/80 uppercase">
              Propuesta de valor
            </p>
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl lg:text-[2.65rem]">
              Tecnología probada que se adapta a tu empresa. Y desarrollo a medida cuando lo necesitas.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-chalk/85">
              Nuestro catálogo de software adaptable te permite avanzar sobre una
              base sólida diseñada por JUNOVA, complementado con ingeniería a
              medida para retos únicos.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={MOTION_VIEWPORT}
            className="divide-y divide-chalk/25 border-y border-chalk/25 lg:col-span-7"
          >
            {PRACTICE_LINES.map((line) => (
              <motion.article
                key={line.index}
                variants={fadeUpVariants}
                className="grid gap-4 py-8 sm:grid-cols-12 sm:items-baseline"
              >
                <span className="font-display text-sm font-semibold text-lightblue sm:col-span-2">
                  {line.index}
                </span>
                <div className="space-y-2.5 sm:col-span-10">
                  <h3 className="text-xl font-semibold tracking-tight text-chalk sm:text-2xl">
                    {line.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-chalk/85 sm:text-base">
                    {line.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
