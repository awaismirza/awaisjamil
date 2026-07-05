import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-ink text-white hover:bg-graphite dark:!bg-white dark:!text-ink dark:hover:!bg-line',
  secondary:
    'border border-line bg-white text-ink hover:border-ink dark:!border-white/15 dark:!bg-graphite dark:!text-white dark:hover:!border-white/35 dark:hover:!bg-white/10',
  dark: 'bg-white text-ink hover:bg-mist dark:!bg-white dark:!text-ink dark:hover:!bg-line',
}

export function Button({ children, href, variant = 'primary', className }) {
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:')
  const classes = clsx(
    'focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition',
    styles[variant],
    className,
  )

  if (isExternal) {
    return (
      <a className={classes} href={href}>
        {children}
        <ArrowUpRight size={16} strokeWidth={2.25} />
      </a>
    )
  }

  return (
    <Link className={classes} to={href}>
      {children}
    </Link>
  )
}
