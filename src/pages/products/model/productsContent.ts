export interface CatalogLine {
  index: string
  category: string
  title: string
  description: string
  adaptationNote: string
}

export interface AdaptationTrait {
  index: string
  title: string
  description: string
}

export const CATALOG_LINES: readonly CatalogLine[] = [
  {
    index: '01',
    category: 'Operación interna',
    title: 'Plataforma de gestión operativa',
    description:
      'Estructura base para organizar tareas, procesos internos, aprobaciones y seguimiento diario en un solo lugar.',
    adaptationNote: 'Adaptable a flujos, roles y reportes propios de tu empresa.',
  },
  {
    index: '02',
    category: 'Relación comercial',
    title: 'Sistema de seguimiento y atención',
    description:
      'Base funcional para centralizar solicitudes, historial de clientes y procesos comerciales con orden y trazabilidad.',
    adaptationNote: 'Configurable según etapas comerciales y canales de contacto.',
  },
  {
    index: '03',
    category: 'Experiencia externa',
    title: 'Portal web para clientes o socios',
    description:
      'Entorno privado donde clientes, proveedores o equipos pueden consultar información, documentos y estados en tiempo real.',
    adaptationNote: 'Personalizable con tu marca, permisos e integraciones.',
  },
]

export const ADAPTATION_TRAITS: readonly AdaptationTrait[] = [
  {
    index: '01',
    title: 'Identidad propia',
    description:
      'Cada solución se adapta al nombre, estilo visual y lenguaje de tu empresa.',
  },
  {
    index: '02',
    title: 'Reglas configurables',
    description:
      'Ajustamos permisos, etapas y validaciones para reflejar cómo trabajas hoy.',
  },
  {
    index: '03',
    title: 'Evolución modular',
    description:
      'Puedes empezar con lo esencial e incorporar nuevos módulos cuando los necesites.',
  },
]
