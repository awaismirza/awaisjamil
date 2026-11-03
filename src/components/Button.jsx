import clsx from 'clsx'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Magnetic } from './fx/Magnetic.jsx'

const styles = {
  primary:
    'bg-ink text-canvas shadow-[0_10px_30px_-10px_rgb(var(--c-shadow)/0.5)] hover:shadow-glow',
  secondary: 'border border-line bg-surface/70 text-ink backdrop-blur hover:border-ink/40 hover:bg-mist',
  accent:
    'bg-gradient-to-r from-accent via-violet to-accent bg-[length:200%_auto] text-white hover:bg-right shadow-glow',
  dark: 'bg-white text-black hover:bg-white/90',
}

export function Button({ children, href, variant = 'primary', className, magnetic = true, icon = true, ...props }) {
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:')
  const classes = clsx(
    'focus-ring group/btn relative inline-flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold transition-all duration-300',
    styles[variant],
    className,
  )
  const Arrow = isExternal ? ArrowUpRight : ArrowRight

  const content = (
    <>
      {/* Sheen that sweeps across on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
      />
      <span className="relative">{children}</span>
      {icon ? (
        <Arrow
          className="relative transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px"
          size={16}
          strokeWidth={2.25}
        />
      ) : null}
    </>
  )

  const element = isExternal ? (
    <a className={classes} href={href} {...props}>
      {content}
    </a>
  ) : (
    <Link className={classes} to={href} {...props}>
      {content}
    </Link>
  )

  return magnetic ? <Magnetic>{element}</Magnetic> : element
}
