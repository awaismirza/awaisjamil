import { ArrowLeft, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { productSites } from '../../data/product-sites/index.js'
import { NotFoundPage } from '../../pages/NotFoundPage.jsx'
import { SocialLinks } from '../SocialIcons.jsx'
import { ThemeToggle } from '../ThemeToggle.jsx'
import { DownloadButton } from './DownloadButton.jsx'

function navItems(slug) {
  return [
    { label: 'Overview', to: `/products/${slug}`, end: true },
    { label: 'Privacy', to: `/products/${slug}/privacy` },
    { label: 'Terms', to: `/products/${slug}/terms` },
    { label: 'Support', to: `/products/${slug}/support` },
  ]
}

export function ProductSiteLayout() {
  const { slug } = useParams()
  const [open, setOpen] = useState(false)
  // Read once on mount so the strip doesn't pop in mid-visit
  const [fromPortfolio] = useState(() => {
    try {
      return sessionStorage.getItem('visited-portfolio') === '1'
    } catch {
      return false
    }
  })
  const site = productSites[slug]

  if (!site) return <NotFoundPage />

  const items = navItems(slug)

  return (
    <div
      className="min-h-screen text-ink transition-colors dark:text-white"
      style={{
        '--accent': site.accent,
        '--accent-dark': site.accentDark,
        '--accent-soft': site.accentSoft,
      }}
    >
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-ink/90">
        {/* Portfolio strip — only for visitors who navigated here from the portfolio */}
        {fromPortfolio ? (
          <div className="border-b border-line/60 bg-mist/70 dark:border-white/5 dark:bg-graphite/40">
            <div className="section-shell flex h-9 items-center justify-between">
              <Link
                className="focus-ring inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-slate transition hover:text-ink dark:text-white/60 dark:hover:text-white"
                to="/"
              >
                <ArrowLeft size={13} /> Back to awaisjamil.com
              </Link>
              <SocialLinks variant="nav" />
            </div>
          </div>
        ) : null}

        {/* Product bar */}
        <nav className="section-shell flex h-16 items-center justify-between">
          <Link className="focus-ring flex items-center gap-3 rounded-md" to={`/products/${slug}`}>
            <img
              alt=""
              className="h-9 w-9 rounded-xl border border-line"
              height={36}
              src={site.icon}
              width={36}
            />
            <span className="font-display text-lg font-semibold text-ink dark:text-white">
              {site.name}
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {items.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `focus-ring rounded-sm text-sm font-medium transition ${
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-slate hover:text-ink dark:text-white/70 dark:hover:text-white'
                  }`
                }
                end={item.end}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <DownloadButton compact site={site} />
              {site.androidDownload ? (
                <DownloadButton compact platform="android" site={site} />
              ) : null}
            </div>
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
            <div className="section-shell grid gap-1 py-4">
              {items.map((item) => (
                <NavLink
                  className="rounded-md px-2 py-3 text-base font-medium text-slate dark:text-white/75"
                  end={item.end}
                  key={item.to}
                  onClick={() => setOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 border-t border-line pt-4 dark:border-white/10 flex flex-col gap-2">
                <DownloadButton site={site} />
                {site.androidDownload ? (
                  <DownloadButton platform="android" site={site} />
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet context={site} />
      </main>

      <footer className="border-t border-line bg-mist transition-colors dark:border-white/10 dark:bg-graphite/40">
        <div className="section-shell flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-10">
          <div className="flex items-center gap-3">
            <img alt="" className="h-9 w-9 rounded-xl border border-line" height={36} src={site.icon} width={36} />
            <div>
              <p className="font-display text-sm font-semibold text-ink">{site.name}</p>
              <p className="text-xs text-slate">© 2026 Awais Jamil. All rights reserved.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <Link className="focus-ring rounded-sm text-slate transition hover:text-ink dark:text-white/70" to={`/products/${slug}/privacy`}>
              Privacy Policy
            </Link>
            <Link className="focus-ring rounded-sm text-slate transition hover:text-ink dark:text-white/70" to={`/products/${slug}/terms`}>
              Terms &amp; Conditions
            </Link>
            <Link className="focus-ring rounded-sm text-slate transition hover:text-ink dark:text-white/70" to={`/products/${slug}/support`}>
              Support
            </Link>
            <Link className="focus-ring rounded-sm text-slate transition hover:text-ink dark:text-white/70" to="/products">
              More products
            </Link>
            <Link className="focus-ring rounded-sm font-semibold text-[var(--accent)]" to="/">
              awaisjamil.com
            </Link>
          </div>

          <SocialLinks variant="nav" />
        </div>
      </footer>
    </div>
  )
}
