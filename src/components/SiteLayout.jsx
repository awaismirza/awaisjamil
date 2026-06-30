import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { site } from '../data/site.js'

export function SiteLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen text-ink">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
        <nav className="section-shell flex h-20 items-center justify-between">
          <Link className="focus-ring flex items-center gap-3 rounded-md" to="/">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-ink text-sm font-bold text-white">
              AJ
            </span>
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <NavLink
                className="focus-ring rounded-sm text-sm font-medium text-slate transition hover:text-ink"
                key={item.label}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            aria-label="Toggle navigation"
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-line md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-line bg-white md:hidden">
            <div className="section-shell grid gap-2 py-4">
              {site.nav.map((item) => (
                <NavLink
                  className="rounded-md px-2 py-3 text-base font-medium text-slate"
                  key={item.label}
                  onClick={() => setOpen(false)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
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
