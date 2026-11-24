import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'motion/react'
import { siWhatsapp } from 'simple-icons'
import { NAV_ITEMS, ROUTES, SITE_CONFIG } from '@shared/config'
import { MOTION_EASE } from '@shared/lib'
import { BrandIcon, Container } from '@shared/ui'

const INDICATOR_SPRING = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 34,
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  const { scrollY, scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 12)
  })

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={
        isScrolled
          ? 'sticky top-0 z-50 border-b border-carbon/20 bg-chalk transition-colors duration-200'
          : 'sticky top-0 z-50 border-b border-carbon/12 bg-chalk transition-colors duration-200'
      }
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-junova"
      />

      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          to={ROUTES.HOME}
          onClick={closeMenu}
          className="group relative py-1 font-display text-xl font-bold tracking-[0.05em] text-carbon transition-colors hover:text-junova"
        >
          {SITE_CONFIG.name}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-junova transition-transform duration-300 ease-out group-hover:scale-x-100"
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          onMouseLeave={() => setHoveredPath(null)}
          className="hidden h-full items-center gap-1 md:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.to
            const isHovered = hoveredPath === item.to

            return (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => setHoveredPath(item.to)}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'relative flex h-full items-center px-4 text-sm font-semibold text-junova transition-colors'
                    : 'relative flex h-full items-center px-4 text-sm font-medium text-graphite transition-colors hover:text-carbon'
                }
              >
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="navbar-hover-bg"
                    transition={INDICATOR_SPRING}
                    aria-hidden="true"
                    className="absolute inset-x-1 inset-y-3 bg-carbon/[0.06]"
                  />
                )}

                <span className="relative z-10">{item.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    transition={INDICATOR_SPRING}
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-0 h-[3px] bg-junova"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <motion.a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden bg-carbon px-5 py-2.5 text-sm font-semibold tracking-tight text-chalk focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-junova"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-junova transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <BrandIcon icon={siWhatsapp} className="relative z-10 size-4" />
            <span className="relative z-10">Escríbenos</span>
          </motion.a>
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
            transition={{ duration: 0.28, ease: MOTION_EASE }}
            className="overflow-hidden border-t border-graphite bg-carbon text-chalk md:hidden"
          >
            <Container className="flex flex-col py-6">
              <div className="divide-y divide-graphite border-b border-graphite">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.to
                  const itemIndex = String(idx + 1).padStart(2, '0')

                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: idx * 0.04,
                        ease: MOTION_EASE,
                      }}
                    >
                      <Link
                        to={item.to}
                        onClick={closeMenu}
                        aria-current={isActive ? 'page' : undefined}
                        className={
                          isActive
                            ? 'flex items-center justify-between border-l-2 border-junova py-4 pl-4 text-base font-semibold text-lightblue'
                            : 'flex items-center justify-between py-4 text-base font-medium text-chalk transition-colors hover:text-lightblue'
                        }
                      >
                        <span>{item.label}</span>
                        <span className="font-display text-xs text-neutral">
                          {itemIndex}
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn btn-chalk mt-6 w-full"
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
