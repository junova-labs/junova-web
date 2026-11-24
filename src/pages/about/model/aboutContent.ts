export interface AboutValue {
  index: string
  title: string
  description: string
}

export const ABOUT_VALUES: readonly AboutValue[] = [
  {
    index: '01',
    title: 'Claridad antes que complejidad',
    description:
      'Explicamos cada decisión en lenguaje directo y construimos herramientas que las personas entienden desde el primer día.',
  },
  {
    index: '02',
    title: 'Ingeniería pensada para durar',
    description:
      'Cuidamos la estructura interna del software tanto como su interfaz, para que pueda mantenerse y crecer con orden.',
  },
  {
    index: '03',
    title: 'Trato directo y honesto',
    description:
      'Recomendamos el camino más conveniente para tu empresa, ya sea adaptar una solución del catálogo o desarrollar desde cero.',
  },
]
