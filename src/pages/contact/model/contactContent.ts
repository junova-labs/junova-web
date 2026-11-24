export const INQUIRY_OPTIONS = [
  'Software de catálogo adaptable',
  'Software a medida',
  'Consulta general',
] as const

export type InquiryOption = (typeof INQUIRY_OPTIONS)[number]
