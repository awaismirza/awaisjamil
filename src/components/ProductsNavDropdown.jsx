import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'

export function ProductsNavDropdown() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div className="relative" ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className="focus-ring flex items-center gap-1 rounded-sm text-sm font-medium text-slate transition hover:text-ink dark:text-white/70 dark:hover:text-white"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        Products
        <ChevronDown
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
          size={15}
          strokeWidth={2.25}
        />
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-3 w-72 rounded-md border border-line bg-white p-2 shadow-soft dark:border-white/10">
          <Link
            className="block rounded-md px-3 py-2 text-sm font-semibold text-teal transition hover:bg-mist"
            onClick={() => setOpen(false)}
            to="/products"
          >
            All products
          </Link>
          <div className="my-1 h-px bg-line dark:bg-white/10" />
          {products.map((product) => {
            const isExternal = product.href?.startsWith('http')
            const rowClasses =
              'flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm text-ink transition hover:bg-mist'

            const content = (
              <>
                <span className="font-medium">{product.title}</span>
                {product.status ? (
                  <span className="shrink-0 text-xs font-semibold text-slate/70">
                    {product.status}
                  </span>
                ) : null}
              </>
            )

            return isExternal ? (
              <a
                className={rowClasses}
                href={product.href}
                key={product.title}
                onClick={() => setOpen(false)}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <Link
                className={rowClasses}
                key={product.title}
                onClick={() => setOpen(false)}
                to={product.href}
              >
                {content}
              </Link>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
