interface SectionHeaderProps {
  eyebrow: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = 'light',
}: SectionHeaderProps) {
  const isDark = tone === 'dark'

  return (
    <div className="max-w-2xl space-y-4">
      <p
        className={
          isDark
            ? 'text-xs font-semibold tracking-[0.2em] text-lightblue uppercase'
            : 'text-xs font-semibold tracking-[0.2em] text-junova uppercase'
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          isDark
            ? 'text-3xl leading-[1.1] font-semibold tracking-tight text-chalk sm:text-4xl'
            : 'text-3xl leading-[1.1] font-semibold tracking-tight text-carbon sm:text-4xl'
        }
      >
        {title}
      </h2>
      <p
        className={
          isDark
            ? 'text-base leading-relaxed text-neutral'
            : 'text-base leading-relaxed text-graphite'
        }
      >
        {description}
      </p>
    </div>
  )
}
