import { ROUTES } from './routes'

export interface NavItem {
  label: string
  to: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: readonly NavItem[]
}

export const SITE_CONFIG = {
  name: 'JUNOVA',
  tagline: 'Desarrollo de software, servicios tecnológicos y productos digitales propios.',
  email: 'contacto@junova.dev',
  whatsappUrl: 'https://wa.me/00000000000',
  location: 'Operación remota · Latinoamérica y global',
} as const

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', to: ROUTES.HOME },
  { label: 'Servicios', to: ROUTES.SERVICES },
  { label: 'Productos', to: ROUTES.PRODUCTS },
  { label: 'Nosotros', to: ROUTES.ABOUT },
  { label: 'Contacto', to: ROUTES.CONTACT },
]

export const FOOTER_SECTIONS: readonly FooterSection[] = [
  {
    title: 'Empresa',
    links: [
      { label: 'Inicio', to: ROUTES.HOME },
      { label: 'Nosotros', to: ROUTES.ABOUT },
      { label: 'Contacto', to: ROUTES.CONTACT },
    ],
  },
  {
    title: 'Líneas',
    links: [
      { label: 'Servicios', to: ROUTES.SERVICES },
      { label: 'Productos', to: ROUTES.PRODUCTS },
    ],
  },
  {
    title: 'Contacto directo',
    links: [
      { label: 'Escríbenos por WhatsApp', to: SITE_CONFIG.whatsappUrl, external: true },
      { label: SITE_CONFIG.email, to: `mailto:${SITE_CONFIG.email}`, external: true },
    ],
  },
]
