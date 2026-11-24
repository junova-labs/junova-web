import type { Transition, Variants } from 'motion/react'

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const

export const MOTION_TRANSITION: Transition = {
  duration: 0.55,
  ease: MOTION_EASE,
}

export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.2,
} as const

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: MOTION_TRANSITION,
  },
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}
