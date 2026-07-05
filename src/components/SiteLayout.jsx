import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { products } from '../data/products.js'
import { site } from '../data/site.js'
import { ProductsNavDropdown } from './ProductsNavDropdown.jsx'
import { SocialLinks } from './SocialIcons.jsx'
import { ThemeToggle } from './ThemeToggle.jsx'

export function SiteLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen text-ink transition-colors dark:text-white">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-ink/90">
        <nav className="section-shell flex h-20 items-center justify-between">
          <Link className="focus-ring flex items-center gap-3 rounded-md" to="/">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-ink text-sm font-bold text-white">
              AJ
            </span>
            <span className="font-display text-lg font-semibold text-ink dark:text-white">{site.name}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) =>
              item.label === 'Products' ? (
                <ProductsNavDropdown key={item.label} />
              ) : (
                <NavLink
                  className="focus-ring rounded-sm text-sm font-medium text-slate transition hover:text-ink dark:text-white/70 dark:hover:text-white"
                  key={item.label}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ),
            )}

            <ThemeToggle />

            <span className="h-5 w-px bg-line dark:bg-white/15" />

            <SocialLinks variant="nav" />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle navigation"
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-line bg-white text-ink transition dark:border-white/15 dark:bg-graphite dark:text-white"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="border-t border-line bg-white transition-colors dark:border-white/10 dark:bg-ink md:hidden">
            <div className="section-shell grid gap-2 py-4">
              {site.nav.map((item) => (
                <div key={item.label}>
                  <NavLink
                    className="rounded-md px-2 py-3 text-base font-medium text-slate dark:text-white/75"
                    onClick={() => setOpen(false)}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                  {item.label === 'Products' ? (
                    <div className="ml-2 grid gap-1 border-l border-line pb-2 pl-4 dark:border-white/10">
                      {products.map((product) => {
                        const isExternal = product.href?.startsWith('http')
                        const linkProps = isExternal
                          ? { href: product.href, rel: 'noreferrer', target: '_blank' }
                          : {}

                        return isExternal ? (
                          <a
                            className="rounded-md px-2 py-2 text-sm font-medium text-slate/80 dark:text-white/60"
                            key={product.title}
                            onClick={() => setOpen(false)}
                            {...linkProps}
                          >
                            {product.title}
                          </a>
                        ) : (
                          <NavLink
                            className="rounded-md px-2 py-2 text-sm font-medium text-slate/80 dark:text-white/60"
                            key={product.title}
                            onClick={() => setOpen(false)}
                            to={product.href}
                          >
                            {product.title}
                          </NavLink>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="mt-2 border-t border-line pt-4 dark:border-white/10">
                <SocialLinks variant="nav" />
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
