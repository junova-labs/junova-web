import { Link } from 'react-router'
import { FOOTER_SECTIONS, ROUTES, SITE_CONFIG } from '@shared/config'
import { Container, JunovaMark } from '@shared/ui'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-graphite bg-carbon text-chalk">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="space-y-5 md:col-span-5">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-3 font-display text-xl font-bold tracking-[0.04em] text-chalk transition-colors hover:text-lightblue"
          >
            <JunovaMark className="size-6" />
            {SITE_CONFIG.name}
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-neutral">
            {SITE_CONFIG.tagline}
          </p>
          <p className="text-xs text-neutral">{SITE_CONFIG.location}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-chalk uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((item) => (
                  <li key={`${section.title}-${item.label}`}>
                    {item.external ? (
                      <a
                        href={item.to}
                        target={item.to.startsWith('http') ? '_blank' : undefined}
                        rel={item.to.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="nav-link-dark text-sm"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.to} className="nav-link-dark text-sm">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-graphite">
        <Container className="flex flex-col gap-2 py-6 text-xs text-neutral sm:flex-row sm:items-center sm:justify-between">
          <p>© {CURRENT_YEAR} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
          <p>{SITE_CONFIG.email}</p>
        </Container>
      </div>
    </footer>
  )
}
