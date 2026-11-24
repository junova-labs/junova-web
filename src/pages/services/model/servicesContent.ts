export type ServiceVariant = 'catalog' | 'custom'

export interface ServiceModel {
  index: string
  variant: ServiceVariant
  eyebrow: string
  title: string
  summary: string
  detail: string
  highlights: readonly string[]
  idealFor: string
}

export interface ComparisonRow {
  criterion: string
  catalog: string
  custom: string
}

export const SERVICE_MODELS: readonly ServiceModel[] = [
  {
    index: '01',
    variant: 'catalog',
    eyebrow: 'Servicio principal · Base probada y adaptable',
    title: 'Software de catálogo adaptable',
    summary:
      'Plataformas diseñadas y construidas por JUNOVA que adaptamos con precisión a la identidad, reglas y operación de tu empresa.',
    detail:
      'Nuestra propuesta central combina la solidez de una arquitectura ya probada con la flexibilidad de la personalización real: ajustamos flujos, permisos, módulos e integraciones para que el sistema trabaje exactamente como tu negocio lo necesita.',
    highlights: [
      'Arquitectura propia de JUNOVA, estable y lista para operar.',
      'Personalización de identidad visual, reglas de negocio y flujos clave.',
      'Puesta en marcha más ágil con menor riesgo técnico desde el inicio.',
      'Crecimiento modular con soporte continuo y nuevas capacidades.',
    ],
    idealFor:
      'Empresas que buscan resultados rápidos sobre tecnología probada, adaptada exactamente a su forma de operar.',
  },
  {
    index: '02',
    variant: 'custom',
    eyebrow: 'Desarrollo específico',
    title: 'Software a medida',
    summary:
      'Construimos aplicaciones desde cero para dar vida a ideas nuevas o cubrir procesos altamente particulares de tu empresa.',
    detail:
      'Cuando tu proyecto requiere una lógica completamente distinta o un producto digital propio, diseñamos y desarrollamos una arquitectura exclusiva pensada alrededor de tus objetivos.',
    highlights: [
      'Diseño funcional y técnico definido desde la hoja en blanco.',
      'Control total sobre cada pantalla, flujo y regla de negocio.',
      'Integración directa con sistemas externos y herramientas internas.',
      'Base escalable pensada para evolucionar a largo plazo.',
    ],
    idealFor:
      'Empresas con iniciativas nuevas, modelos operativos únicos o requerimientos que exigen una construcción exclusiva.',
  },
]

export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    criterion: 'Punto de partida',
    catalog: 'Plataforma probada del catálogo de JUNOVA lista para adaptar.',
    custom: 'Diseño y desarrollo desde cero para un alcance exclusivo.',
  },
  {
    criterion: 'Nivel de personalización',
    catalog: 'Alto: configuramos identidad, flujos, reglas y módulos clave.',
    custom: 'Total: cada pantalla, estructura y lógica se crea a medida.',
  },
  {
    criterion: 'Velocidad de implementación',
    catalog: 'Más ágil al construir sobre una base sólida ya validada.',
    custom: 'Progresiva por etapas según la complejidad del proyecto.',
  },
  {
    criterion: 'Cuándo elegirlo',
    catalog: 'Cuando buscas tecnología confiable adaptada a tu empresa en menos tiempo.',
    custom: 'Cuando necesitas materializar una idea nueva o una lógica única.',
  },
]
