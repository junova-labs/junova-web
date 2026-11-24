import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { siWhatsapp } from 'simple-icons'
import { NAV_ITEMS, ROUTES, SITE_CONFIG } from '@shared/config'
import { MOTION_EASE } from '@shared/lib'
import { BrandIcon, Container } from '@shared/ui'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-carbon/12 bg-chalk">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          to={ROUTES.HOME}
          onClick={closeMenu}
          className="font-display text-xl font-bold tracking-[0.04em] text-carbon transition-colors hover:text-junova"
        >
          {SITE_CONFIG.name}
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.to

            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'nav-link-light text-junova'
                    : 'nav-link-light'
                }
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-carbon"
          >
            <BrandIcon icon={siWhatsapp} className="size-4" />
            Escríbenos
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="btn btn-outline-light p-2.5 md:hidden"
        >
          {isMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: MOTION_EASE }}
            className="overflow-hidden border-t border-carbon/12 bg-chalk md:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.to

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={
                      isActive
                        ? 'nav-link-light text-base text-junova'
                        : 'nav-link-light text-base'
                    }
                  >
                    {item.label}
                  </Link>
                )
              })}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn btn-carbon mt-2 w-full"
              >
                <BrandIcon icon={siWhatsapp} className="size-4" />
                Escríbenos
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
