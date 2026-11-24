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
  tone: 'carbon' | 'blue'
}

export const PRACTICE_LINES: readonly PracticeLine[] = [
  {
    index: '01',
    title: 'Desarrollo de software a medida',
    description:
      'Construimos aplicaciones web, sistemas internos y herramientas diseñadas alrededor de cómo trabaja realmente tu negocio.',
  },
  {
    index: '02',
    title: 'Servicios tecnológicos',
    description:
      'Acompañamos decisiones de arquitectura, modernización de sistemas e integración técnica con criterio claro y ejecución directa.',
  },
  {
    index: '03',
    title: 'Productos digitales propios',
    description:
      'Desarrollamos nuestras propias soluciones digitales, aplicando la misma disciplina de ingeniería y diseño que ofrecemos a cada cliente.',
  },
]

export const PROCESS_STAGES: readonly ProcessStage[] = [
  {
    index: '01',
    stage: 'structure',
    title: 'Entender y ordenar',
    description:
      'Traducimos una idea o necesidad concreta en una estructura clara antes de escribir la primera línea de código.',
  },
  {
    index: '02',
    stage: 'build',
    title: 'Construir con criterio',
    description:
      'Desarrollamos software limpio, comprensible y bien probado, con avances visibles y comunicación sin tecnicismos innecesarios.',
  },
  {
    index: '03',
    stage: 'evolve',
    title: 'Evolucionar sin rehacer',
    description:
      'Entregamos bases preparadas para crecer, integrar nuevas funciones y adaptarse cuando el negocio lo necesite.',
  },
]

export const ECOSYSTEM_PILLARS: readonly EcosystemPillar[] = [
  {
    label: 'Línea 01 · Trabajo con organizaciones',
    title: 'Servicios y desarrollo',
    description:
      'Colaboramos con empresas, emprendedores y equipos técnicos para diseñar, construir y poner en marcha software que resuelve problemas reales.',
    tone: 'carbon',
  },
  {
    label: 'Línea 02 · Creación interna',
    title: 'Productos JUNOVA',
    description:
      'Un espacio dedicado a investigar, diseñar y lanzar herramientas digitales propias que amplían nuestra propuesta tecnológica más allá de los servicios.',
    tone: 'blue',
  },
]
