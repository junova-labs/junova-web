import { motion } from 'motion/react'
import { MOTION_VIEWPORT, fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { Container, JunovaStageMark, Reveal } from '@shared/ui'
import { PROCESS_STAGES } from '../model/homeContent'

export function ApproachSection() {
  return (
    <section id="proceso" className="section-band bg-carbon text-chalk">
      <Container className="space-y-16 lg:space-y-20">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-lightblue uppercase">
              Cómo trabajamos
            </p>
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl lg:text-[2.75rem]">
              Un proceso claro para pasar de la idea al resultado.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral lg:col-span-5">
            Sin promesas infladas ni tecnicismos innecesarios: decisiones claras
            que entiende tu equipo de negocio y respalda tu equipo técnico.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          className="grid gap-12 md:grid-cols-3 md:gap-10"
        >
          {PROCESS_STAGES.map((item) => (
            <motion.article
              key={item.index}
              variants={fadeUpVariants}
              className="space-y-6 border-t border-graphite pt-8"
            >
              <div className="flex items-start justify-between">
                <JunovaStageMark stage={item.stage} />
                <span className="font-display text-sm font-semibold text-neutral">
                  {item.index}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-chalk">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
