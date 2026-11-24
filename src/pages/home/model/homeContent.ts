import { ROUTES } from '@shared/config'
import type { ConstructStage } from '@shared/ui'

export interface PracticeLine {
  index: string
  title: string
  description: string
}

export interface ProcessStage {
  index: string
  stage: ConstructStage
  title: string
  description: string
}

export interface EcosystemPillar {
  label: string
  title: string
  description: string
  ctaLabel: string
  ctaTo: string
  tone: 'carbon' | 'blue'
}

export const PRACTICE_LINES: readonly PracticeLine[] = [
  {
    index: '01',
    title: 'Software de catálogo adaptable',
    description:
      'Nuestra línea principal: plataformas ya diseñadas y probadas por JUNOVA que configuramos, integramos y adaptamos a la identidad y procesos de tu empresa.',
  },
  {
    index: '02',
    title: 'Software a medida',
    description:
      'Convertimos ideas nuevas o requerimientos operativos muy específicos en aplicaciones desarrolladas desde cero alrededor de tu negocio.',
  },
  {
    index: '03',
    title: 'Productos digitales propios',
    description:
      'Creamos y evolucionamos tecnología propia dentro de JUNOVA, fortaleciendo continuamente el catálogo de soluciones disponibles para nuestros clientes.',
  },
]

export const PROCESS_STAGES: readonly ProcessStage[] = [
  {
    index: '01',
    stage: 'structure',
    title: 'Evaluar la mejor base',
    description:
      'Analizamos tu operación para identificar qué solución de nuestro catálogo se ajusta mejor a tus objetivos o si conviene un desarrollo específico.',
  },
  {
    index: '02',
    stage: 'build',
    title: 'Adaptar y construir con precisión',
    description:
      'Personalizamos flujos, reglas e integraciones para que tu equipo trabaje con una herramienta clara, rápida y alineada a su día a día.',
  },
  {
    index: '03',
    stage: 'evolve',
    title: 'Evolucionar de forma continua',
    description:
      'Acompañamos el crecimiento de tu empresa incorporando nuevos módulos y capacidades sin interrumpir tu operación.',
  },
]

export const ECOSYSTEM_PILLARS: readonly EcosystemPillar[] = [
  {
    label: 'Línea principal · Catálogo adaptable',
    title: 'Soluciones JUNOVA adaptadas a tu empresa',
    description:
      'Implementa tecnología probada y desarrollada por nuestro equipo, personalizada con tus procesos, reglas e identidad para generar impacto en menos tiempo.',
    ctaLabel: 'Explorar productos',
    ctaTo: ROUTES.PRODUCTS,
    tone: 'blue',
  },
  {
    label: 'Línea complementaria · Desarrollo específico',
    title: 'Software a medida desde cero',
    description:
      'Cuando tienes una idea nueva o un proceso particular que requiere una arquitectura exclusiva, construimos cada pieza a la medida de tu proyecto.',
    ctaLabel: 'Ver servicios',
    ctaTo: ROUTES.SERVICES,
    tone: 'carbon',
  },
]
