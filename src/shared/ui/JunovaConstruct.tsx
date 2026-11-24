import { motion } from 'motion/react'
import { MOTION_EASE } from '@shared/lib'

/**
 * El Ensamble JUNOVA (The Junova Construct)
 * Elemento gráfico protagonista reutilizable de la marca.
 * Representa la transformación de una idea abierta en un sistema digital tangible
 * mediante tres planos geométricos modulares que encajan con precisión.
 */
export function JunovaConstruct() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Composición geométrica modular de JUNOVA representando la construcción de soluciones digitales"
      className="h-auto w-full max-w-[460px]"
    >
      {/* Plano 1 — Base de ingeniería (Carbon Black) */}
      <motion.path
        d="M48 312H256V432H112C76.6538 432 48 403.346 48 368V312Z"
        fill="var(--junova-carbon)"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: MOTION_EASE }}
      />

      {/* Plano 2 — Núcleo estructural activo (Junova Blue) */}
      <motion.path
        d="M256 48H432V312C432 378.274 378.274 432 312 432H256V48Z"
        fill="var(--junova-blue)"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: MOTION_EASE }}
      />

      {/* Plano 3 — Evolución y producto tangible (Light Blue) */}
      <motion.rect
        x="112"
        y="128"
        width="144"
        height="184"
        fill="var(--junova-light-blue)"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: MOTION_EASE }}
      />

      {/* Junta estructural — Precisión y punto de encuentro */}
      <motion.rect
        x="256"
        y="128"
        width="88"
        height="88"
        fill="var(--junova-chalk)"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.32, ease: MOTION_EASE }}
      />

      {/* Bloque de anclaje superior (Graphite) */}
      <motion.rect
        x="48"
        y="48"
        width="64"
        height="80"
        fill="var(--junova-graphite)"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.25, ease: MOTION_EASE }}
      />

      {/* Línea constructiva de proporción */}
      <motion.line
        x1="48"
        y1="312"
        x2="432"
        y2="312"
        stroke="var(--junova-chalk)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.35, ease: MOTION_EASE }}
      />
    </svg>
  )
}

export type ConstructStage = 'structure' | 'build' | 'evolve'

interface JunovaStageMarkProps {
  stage: ConstructStage
}

/**
 * Variaciones geométricas del sistema JUNOVA para ilustrar las tres etapas
 * de transformación: definir estructura, construir software y evolucionar.
 */
export function JunovaStageMark({ stage }: JunovaStageMarkProps) {
  return (
    <svg
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="size-16"
    >
      {stage === 'structure' && (
        <>
          <rect x="8" y="8" width="32" height="32" stroke="var(--junova-light-blue)" strokeWidth="2" />
          <rect x="48" y="8" width="32" height="32" fill="var(--junova-graphite)" />
          <rect x="8" y="48" width="72" height="32" fill="var(--junova-blue)" />
        </>
      )}

      {stage === 'build' && (
        <>
          <rect x="8" y="8" width="36" height="72" fill="var(--junova-graphite)" />
          <path d="M44 8H80V52C80 67.464 67.464 80 52 80H44V8Z" fill="var(--junova-blue)" />
          <rect x="44" y="28" width="20" height="20" fill="var(--junova-chalk)" />
        </>
      )}

      {stage === 'evolve' && (
        <>
          <rect x="8" y="44" width="36" height="36" fill="var(--junova-graphite)" />
          <rect x="28" y="24" width="36" height="36" fill="var(--junova-blue)" />
          <rect x="48" y="8" width="32" height="32" fill="var(--junova-light-blue)" />
        </>
      )}
    </svg>
  )
}

interface JunovaMarkProps {
  className?: string
}

/**
 * Símbolo compacto derivado del Ensamble JUNOVA para uso en firma de marca,
 * presentaciones y productos digitales.
 */
export function JunovaMark({ className = 'size-7' }: JunovaMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="20" width="14" height="10" fill="var(--junova-graphite)" />
      <path d="M16 2H30V20C30 25.5228 25.5228 30 20 30H16V2Z" fill="var(--junova-blue)" />
      <rect x="6" y="8" width="10" height="12" fill="var(--junova-light-blue)" />
    </svg>
  )
}
