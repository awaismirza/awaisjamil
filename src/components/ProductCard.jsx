import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProductMeta, isExternalHref, isLiveProduct } from '../lib/productMeta.js'
import { DARK_THEME } from '../lib/theme.js'
import { useTheme } from '../lib/useTheme.js'
import { Spotlight } from './fx/Spotlight.jsx'

export function ProductCard({ product, featured = false }) {
  const isDark = useTheme() === DARK_THEME
  const isLive = isLiveProduct(product)
  const isExternal = isExternalHref(product.href)
  const { icon, accent, availability } = getProductMeta(product, isDark)
  const tint = accent ?? 'rgb(var(--c-accent))'

  // The title link stretches over the whole card so the card is one target.
  const stretched = 'focus-ring rounded-sm after:absolute after:inset-0 after:content-[""]'
  const title = isLive ? (
    isExternal ? (
      <a className={stretched} href={product.href} rel="noreferrer" target="_blank">
        {product.title}
      </a>
    ) : (
      <Link className={stretched} to={product.href}>
        {product.title}
      </Link>
    )
  ) : (
    product.title
  )

  return (
    <Spotlight
      as="article"
      className={clsx('flex h-full flex-col p-6 md:p-8', isLive && 'cursor-pointer hover:-translate-y-1')}
      color={`color-mix(in srgb, ${tint} 55%, transparent)`}
    >
      {/* Accent wash in the corner, brighter on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover/spot:opacity-50"
        style={{ background: tint }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="relative">
          {icon ? (
            <img
              alt=""
              className={clsx(
                'rounded-[26%] border border-line object-cover shadow-soft transition-transform duration-500 group-hover/spot:-rotate-6 group-hover/spot:scale-105',
                featured ? 'h-16 w-16' : 'h-14 w-14',
              )}
              height={64}
              loading="lazy"
              src={icon}
              width={64}
            />
          ) : (
            <span
              aria-hidden="true"
              className="grid h-14 w-14 place-items-center rounded-[26%] font-display text-xl font-bold text-white shadow-soft transition-transform duration-500 group-hover/spot:-rotate-6"
              style={{ background: tint }}
            >
              {product.title.charAt(0)}
            </span>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          {product.status ? (
            <span className="rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
              {product.status}
            </span>
          ) : availability ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {availability}
            </span>
          ) : null}
          <span className="font-mono text-xs text-slate">{product.year}</span>
        </div>
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em]" style={{ color: tint }}>
        {product.type}
      </p>
      <h3 className={clsx('mt-2 font-display font-semibold leading-tight tracking-tight', featured ? 'text-3xl' : 'text-2xl')}>
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-slate">{product.summary}</p>
      {product.impact ? <p className="mt-3 text-sm leading-6 text-ink/80">{product.impact}</p> : null}

      <div className="mt-6 flex flex-wrap gap-1.5">
        {product.stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className={clsx('text-sm font-semibold', isLive ? 'text-ink' : 'text-slate/70')}>
          {isLive ? (isExternal ? 'Visit website' : 'Explore product') : (product.status ?? 'Coming soon')}
        </span>
        {isLive ? (
          <span
            aria-hidden="true"
            className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-ink transition-all duration-500 group-hover/spot:rotate-45 group-hover/spot:border-transparent group-hover/spot:text-white"
            style={{ '--tint': tint }}
          >
            <span className="absolute h-10 w-10 scale-0 rounded-full bg-[color:var(--tint)] transition-transform duration-500 group-hover/spot:scale-100" />
            <ArrowUpRight className="relative" size={17} />
          </span>
        ) : null}
      </div>
    </Spotlight>
  )
}
