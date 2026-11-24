import type { SimpleIcon } from 'simple-icons'

interface BrandIconProps {
  icon: SimpleIcon
  className?: string
}

export function BrandIcon({ icon, className = 'size-4' }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  )
}
