import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '@shared/config'
import { Container, Reveal } from '@shared/ui'
import { SERVICE_MODELS } from '../model/servicesContent'
import { ServiceDiagram } from './ServiceDiagram'

export function ServiceModelsSection() {
  return (
    <div>
      {SERVICE_MODELS.map((service) => {
        const isCatalog = service.variant === 'catalog'

        return (
          <section
            key={service.index}
            className={
              isCatalog
                ? 'section-band bg-junova text-chalk'
                : 'section-band bg-carbon text-chalk'
            }
          >
            <Container>
              <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={
                    isCatalog
                      ? 'space-y-7 lg:order-2 lg:col-span-7'
                      : 'space-y-7 lg:col-span-7'
                  }
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={
                        isCatalog
                          ? 'font-display text-sm font-semibold text-chalk/80'
                          : 'font-display text-sm font-semibold text-lightblue'
                      }
                    >
                      {service.index}
                    </span>
                    <span
                      className={
                        isCatalog
                          ? 'text-xs font-semibold tracking-[0.2em] text-chalk/80 uppercase'
                          : 'text-xs font-semibold tracking-[0.2em] text-lightblue uppercase'
                      }
                    >
                      {service.eyebrow}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl lg:text-[2.75rem]">
                      {service.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-chalk/95">
                      {service.summary}
                    </p>
                    <p
                      className={
                        isCatalog
                          ? 'text-sm leading-relaxed text-chalk/80 sm:text-base'
                          : 'text-sm leading-relaxed text-neutral sm:text-base'
                      }
                    >
                      {service.detail}
                    </p>
                  </div>

                  <ul
                    className={
                      isCatalog
                        ? 'space-y-3 border-t border-chalk/25 pt-6'
                        : 'space-y-3 border-t border-graphite pt-6'
                    }
                  >
                    {service.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-baseline gap-3 text-sm leading-relaxed text-chalk/90 sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className={
                            isCatalog
                              ? 'inline-block size-1.5 shrink-0 bg-chalk'
                              : 'inline-block size-1.5 shrink-0 bg-lightblue'
                          }
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={
                      isCatalog
                        ? 'border-l-2 border-chalk pl-4 text-sm text-chalk/85'
                        : 'border-l-2 border-junova pl-4 text-sm text-neutral'
                    }
                  >
                    <strong className="font-semibold text-chalk">Ideal para: </strong>
                    {service.idealFor}
                  </div>

                  <div className="flex flex-wrap items-center gap-5 pt-2">
                    <Link
                      to={ROUTES.CONTACT}
                      className={isCatalog ? 'btn btn-carbon' : 'btn btn-chalk'}
                    >
                      Consultar esta modalidad
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>

                    {isCatalog && (
                      <Link
                        to={ROUTES.PRODUCTS}
                        className="inline-flex items-center gap-2 border-b border-chalk pb-1 text-sm font-semibold text-chalk transition-colors hover:border-lightblue hover:text-lightblue"
                      >
                        Ir a Productos
                      </Link>
                    )}
                  </div>
                </Reveal>

                <div
                  className={
                    isCatalog
                      ? 'flex justify-center lg:order-1 lg:col-span-5 lg:justify-start'
                      : 'flex justify-center lg:col-span-5 lg:justify-end'
                  }
                >
                  <ServiceDiagram variant={service.variant} />
                </div>
              </div>
            </Container>
          </section>
        )
      })}
    </div>
  )
}
