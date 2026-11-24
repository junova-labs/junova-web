import { Mail } from 'lucide-react'
import { siWhatsapp } from 'simple-icons'
import { SITE_CONFIG } from '@shared/config'
import { BrandIcon, Container, Reveal } from '@shared/ui'

export function ServicesCtaSection() {
  return (
    <section className="section-band bg-carbon text-chalk">
      <Container>
        <Reveal className="grid gap-10 border-l-4 border-junova pl-6 sm:pl-10 lg:grid-cols-12 lg:items-end">
          <div className="space-y-4 lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-lightblue uppercase">
              Siguiente paso
            </p>
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl">
              ¿No sabes todavía qué modalidad encaja mejor?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral">
              Cuéntanos qué necesitas resolver y evaluamos juntos si conviene
              adaptar una base existente o desarrollar una solución desde cero.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:justify-end">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-chalk"
            >
              <BrandIcon icon={siWhatsapp} className="size-4" />
              Escríbenos
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="btn btn-outline-dark">
              <Mail className="size-4" aria-hidden="true" />
              Enviar correo
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
