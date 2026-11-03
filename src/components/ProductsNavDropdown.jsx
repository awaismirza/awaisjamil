import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { ease } from '../lib/animation.js'
import { getProductMeta, isExternalHref } from '../lib/productMeta.js'
import { DARK_THEME } from '../lib/theme.js'
import { useTheme } from '../lib/useTheme.js'

export function ProductIcon({ product, isDark, className = 'h-9 w-9' }) {
  const { icon, accent } = getProductMeta(product, isDark)
  if (icon) {
    return <img alt="" className={`${className} shrink-0 rounded-[28%] border border-line object-cover`} src={icon} />
  }
  return (
    <span
      aria-hidden="true"
      className={`${className} grid shrink-0 place-items-center rounded-[28%] font-display text-sm font-bold text-white`}
      style={{ background: accent ?? 'rgb(var(--c-accent))' }}
    >
      {product.title.charAt(0)}
    </span>
  )
}

export function ProductsNavDropdown({ className }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const closeTimer = useRef(null)
  const isDark = useTheme() === DARK_THEME

  useEffect(() => {
    if (!open) return undefined

    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function openNow() {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  function closeSoon() {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 160)
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon} ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className={className}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="relative z-10 inline-flex items-center gap-1">
          Products
          <ChevronDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={14} strokeWidth={2.5} />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            className="absolute left-1/2 top-full z-50 w-[min(92vw,640px)] pt-4"
            exit={{ opacity: 0, y: 8, scale: 0.98, filter: 'blur(4px)' }}
            initial={{ opacity: 0, y: 10, scale: 0.97, filter: 'blur(4px)' }}
            style={{ x: '-50%' }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="glass overflow-hidden rounded-3xl p-2 shadow-soft">
              <div className="grid grid-cols-2 gap-1">
                {products.map((product, index) => {
                  const external = isExternalHref(product.href)
                  const rowClasses =
                    'group flex items-center gap-3 rounded-2xl p-2.5 text-left transition-colors hover:bg-mist focus-ring'
                  const content = (
                    <>
                      <ProductIcon isDark={isDark} product={product} />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                          <span className="truncate">{product.title}</span>
                          {external ? <ArrowUpRight className="shrink-0 text-slate" size={13} /> : null}
                        </span>
                        <span className="block truncate text-xs text-slate">{product.status ?? product.type}</span>
                      </span>
                    </>
                  )

                  return (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 6 }}
                      key={product.title}
                      transition={{ delay: 0.03 * index, duration: 0.4, ease }}
                    >
                      {external ? (
                        <a className={rowClasses} href={product.href} onClick={() => setOpen(false)} rel="noreferrer" target="_blank">
                          {content}
                        </a>
                      ) : (
                        <Link className={rowClasses} onClick={() => setOpen(false)} to={product.href}>
                          {content}
                        </Link>
                      )}
                    </motion.div>
                  )
                })}
              </div>
              <Link
                className="focus-ring group mt-1 flex items-center justify-between rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-canvas"
                onClick={() => setOpen(false)}
                to="/products"
              >
                All products
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
