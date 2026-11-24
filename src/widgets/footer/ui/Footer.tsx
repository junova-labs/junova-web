import { Link, useLocation } from 'react-router'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { siWhatsapp } from 'simple-icons'
import { FOOTER_SECTIONS, ROUTES, SITE_CONFIG } from '@shared/config'
import { MOTION_VIEWPORT, fadeUpVariants, staggerContainerVariants } from '@shared/lib'
import { BrandIcon, Container, JunovaMark } from '@shared/ui'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const { pathname } = useLocation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-carbon text-chalk">
      {/* Franja arquitectónica superior */}
      <div aria-hidden="true" className="grid h-1 w-full grid-cols-12">
        <div className="col-span-4 bg-junova sm:col-span-3" />
        <div className="col-span-8 bg-graphite sm:col-span-9" />
      </div>

      <Container>
        {/* Bloque superior de identidad y contacto directo */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          className="grid gap-10 border-b border-graphite py-14 lg:grid-cols-12 lg:items-end lg:py-16"
        >
          <motion.div variants={fadeUpVariants} className="space-y-4 lg:col-span-7">
            <Link
              to={ROUTES.HOME}
              className="group inline-flex items-center gap-3.5"
            >
              <JunovaMark className="size-8 transition-transform duration-300 group-hover:scale-105" />
              <span className="font-display text-3xl font-bold tracking-[0.04em] text-chalk transition-colors group-hover:text-lightblue sm:text-4xl">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-neutral sm:text-base">
              {SITE_CONFIG.tagline}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:justify-end"
          >
            <motion.a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden bg-chalk px-5 py-3 text-sm font-semibold tracking-tight text-carbon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightblue"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-junova transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
              <BrandIcon
                icon={siWhatsapp}
                className="relative z-10 size-4 transition-colors duration-200 group-hover:text-chalk"
              />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-chalk">
                Escríbenos
              </span>
            </motion.a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="group inline-flex items-center gap-1.5 border border-graphite px-5 py-3 text-sm font-medium text-chalk transition-colors duration-200 hover:border-lightblue hover:text-lightblue"
            >
              <span>{SITE_CONFIG.email}</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Navegación estructurada por columnas */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12"
        >
          {FOOTER_SECTIONS.map((section, idx) => {
            const sectionNumber = String(idx + 1).padStart(2, '0')

            return (
              <motion.div
                key={section.title}
                variants={fadeUpVariants}
                className="space-y-5 lg:col-span-3"
              >
                <div className="flex items-center gap-3 border-b border-graphite pb-3">
                  <span className="font-display text-xs font-semibold text-lightblue">
                    {sectionNumber}
                  </span>
                  <h3 className="text-xs font-semibold tracking-[0.18em] text-chalk uppercase">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {section.links.map((item) => {
                    const isActive = !item.external && pathname === item.to

                    return (
                      <li key={`${section.title}-${item.label}`}>
                        {item.external ? (
                          <a
                            href={item.to}
                            target={item.to.startsWith('http') ? '_blank' : undefined}
                            rel={item.to.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group inline-flex items-center gap-1.5 text-sm text-neutral transition-colors duration-200 hover:text-chalk"
                          >
                            <span>{item.label}</span>
                            <ArrowUpRight
                              className="size-3.5 text-neutral transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lightblue"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          <Link
                            to={item.to}
                            aria-current={isActive ? 'page' : undefined}
                            className={
                              isActive
                                ? 'inline-flex items-center gap-2 border-l-2 border-junova pl-3 text-sm font-semibold text-lightblue'
                                : 'inline-block text-sm text-neutral transition-all duration-200 hover:translate-x-1 hover:text-chalk'
                            }
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )
          })}

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col justify-between gap-6 border-t border-graphite pt-6 sm:col-span-2 lg:col-span-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.18em] text-lightblue uppercase">
                Presencia
              </p>
              <p className="text-sm leading-relaxed text-neutral">
                {SITE_CONFIG.location}
              </p>
            </div>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-fit items-center gap-2 border border-graphite px-4 py-2 text-xs font-semibold tracking-[0.14em] text-chalk uppercase transition-colors hover:border-junova hover:bg-junova"
            >
              Volver arriba
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Barra inferior */}
        <div className="flex flex-col gap-2 border-t border-graphite py-6 text-xs text-neutral sm:flex-row sm:items-center sm:justify-between">
          <p>© {CURRENT_YEAR} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
          <p>Software de catálogo adaptable · Desarrollo a medida</p>
        </div>
      </Container>
    </footer>
  )
}
