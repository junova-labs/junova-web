import { ROUTES } from './routes'

export interface NavItem {
  label: string
  to: string
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
  { label: 'Qué hacemos', to: ROUTES.WORK },
  { label: 'Cómo trabajamos', to: ROUTES.PROCESS },
  { label: 'Ecosistema', to: ROUTES.ECOSYSTEM },
  { label: 'Contacto', to: ROUTES.CONTACT },
]

export const FOOTER_SECTIONS: readonly FooterSection[] = [
  {
    title: 'Empresa',
    links: [
      { label: 'Inicio', to: ROUTES.HOME },
      { label: 'Qué hacemos', to: ROUTES.WORK },
      { label: 'Cómo trabajamos', to: ROUTES.PROCESS },
      { label: 'Ecosistema', to: ROUTES.ECOSYSTEM },
    ],
  },
  {
    title: 'Líneas',
    links: [
      { label: 'Software a medida', to: ROUTES.WORK },
      { label: 'Servicios tecnológicos', to: ROUTES.WORK },
      { label: 'Productos propios', to: ROUTES.ECOSYSTEM },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'Escríbenos por WhatsApp', to: SITE_CONFIG.whatsappUrl },
      { label: SITE_CONFIG.email, to: `mailto:${SITE_CONFIG.email}` },
    ],
  },
]
