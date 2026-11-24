import { motion } from 'motion/react'
import { MOTION_EASE, MOTION_VIEWPORT } from '@shared/lib'
import type { ServiceVariant } from '../model/servicesContent'

interface ServiceDiagramProps {
  variant: ServiceVariant
}

/**
 * Representaciones gráficas derivadas del lenguaje modular de JUNOVA:
 * - "custom": piezas singulares ensambladas desde cero en una forma única.
 * - "catalog": núcleo estandarizado al que se acoplan módulos adaptables.
 */
export function ServiceDiagram({ variant }: ServiceDiagramProps) {
  if (variant === 'custom') {
    return (
      <svg
        viewBox="0 0 420 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagrama geométrico de software a medida: piezas únicas ensambladas según cada operación"
        className="h-auto w-full max-w-[400px]"
      >
        {/* Bloque estructural base */}
        <motion.path
          d="M36 220H196V304H92C61.0721 304 36 278.928 36 248V220Z"
          fill="var(--junova-graphite)"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.6, ease: MOTION_EASE }}
        />

        {/* Módulo principal diseñado a medida */}
        <motion.path
          d="M196 36H328C358.928 36 384 61.0721 384 92V220H196V36Z"
          fill="var(--junova-blue)"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.65, delay: 0.1, ease: MOTION_EASE }}
        />

        {/* Pieza de acople única */}
        <motion.rect
          x="92"
          y="96"
          width="104"
          height="124"
          fill="var(--junova-light-blue)"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.6, delay: 0.2, ease: MOTION_EASE }}
        />

        {/* Extensión específica inferior derecha */}
        <motion.rect
          x="268"
          y="220"
          width="116"
          height="84"
          stroke="var(--junova-chalk)"
          strokeWidth="2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.6, delay: 0.28, ease: MOTION_EASE }}
        />

        {/* Punto de encaje central */}
        <motion.rect
          x="196"
          y="148"
          width="72"
          height="72"
          fill="var(--junova-chalk)"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.5, delay: 0.34, ease: MOTION_EASE }}
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagrama geométrico de software de catálogo adaptable: núcleo base con módulos configurables"
      className="h-auto w-full max-w-[400px]"
    >
      {/* Núcleo base del catálogo (Carbon Black sobre fondo azul) */}
      <motion.rect
        x="126"
        y="86"
        width="168"
        height="168"
        fill="var(--junova-carbon)"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: 0.6, ease: MOTION_EASE }}
      />

      {/* Marco interno del núcleo */}
      <motion.rect
        x="166"
        y="126"
        width="88"
        height="88"
        fill="var(--junova-chalk)"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: 0.55, delay: 0.14, ease: MOTION_EASE }}
      />

      {/* Módulo adaptable izquierdo */}
      <motion.rect
        x="36"
        y="118"
        width="74"
        height="104"
        fill="var(--junova-light-blue)"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: 0.55, delay: 0.22, ease: MOTION_EASE }}
      />

      {/* Módulo adaptable derecho */}
      <motion.rect
        x="310"
        y="118"
        width="74"
        height="104"
        stroke="var(--junova-chalk)"
        strokeWidth="2"
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: 0.55, delay: 0.28, ease: MOTION_EASE }}
      />

      {/* Módulo adaptable superior */}
      <motion.rect
        x="158"
        y="24"
        width="104"
        height="46"
        fill="var(--junova-chalk)"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: 0.55, delay: 0.32, ease: MOTION_EASE }}
      />

      {/* Módulo adaptable inferior */}
      <motion.rect
        x="158"
        y="270"
        width="104"
        height="46"
        fill="var(--junova-light-blue)"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: 0.55, delay: 0.36, ease: MOTION_EASE }}
      />
    </svg>
  )
}
