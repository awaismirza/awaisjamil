import clsx from 'clsx'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Navigate, NavLink, useLocation, useOutlet, useParams } from 'react-router-dom'
import { productAliases, productSites } from '../../data/product-sites/index.js'
import { ease } from '../../lib/animation.js'
import { DARK_THEME } from '../../lib/theme.js'
import { useTheme } from '../../lib/useTheme.js'
import { NotFoundPage } from '../../pages/NotFoundPage.jsx'
import { ScrollProgress } from '../fx/ScrollProgress.jsx'
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

function ProductNav({ items }) {
  const { pathname } = useLocation()
  const active = items.find((item) => (item.end ? pathname === item.to : pathname.startsWith(item.to)))?.to

  return (
    <div className="glass hidden items-center rounded-full p-1 md:flex">
      {items.map((item) => (
        <NavLink
          className={clsx(
            'focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
            active === item.to ? 'text-[var(--accent)]' : 'text-slate hover:text-ink',
          )}
          end={item.end}
          key={item.to}
          to={item.to}
        >
          {active === item.to ? (
            <motion.span
              className="absolute inset-0 rounded-full bg-[var(--accent-soft)]"
              layoutId="product-nav-pill"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          ) : null}
          <span className="relative">{item.label}</span>
        </NavLink>
      ))}
    </div>
  )
}

export function ProductSiteLayout() {
  const { slug } = useParams()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const theme = useTheme()
  const isDark = theme === DARK_THEME
  // Read once on mount so the strip doesn't pop in mid-visit
  const [fromPortfolio] = useState(() => {
    try {
      return sessionStorage.getItem('visited-portfolio') === '1'
    } catch {
      return false
    }
  })
  const site = productSites[slug]
  const aliasOf = productAliases[slug]
  // Pages read the product definition through useOutletContext().
  const outlet = useOutlet(site)

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 16))

  // Close the mobile menu after navigation.
  const [lastPath, setLastPath] = useState(location.pathname)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (aliasOf) {
    const rest = location.pathname.slice(`/products/${slug}`.length)
    return <Navigate replace to={`/products/${aliasOf}${rest}${location.search}${location.hash}`} />
  }
  if (!site) return <NotFoundPage />

  const items = navItems(slug)
  const icon = (isDark && site.iconDark) || site.icon

  return (
    <div
      className="relative min-h-screen overflow-x-clip text-ink"
      style={{
        '--accent': isDark ? (site.accentOnDark ?? site.accent) : site.accent,
        '--accent-dark': site.accentDark,
        '--accent-control': site.accent,
        '--accent-soft': site.accentSoft,
        '--accent-line': 'color-mix(in srgb, var(--accent) 30%, transparent)',
        '--accent-glow': 'color-mix(in srgb, var(--accent-control) 55%, transparent)',
      }}
    >
      <ScrollProgress color="linear-gradient(90deg, var(--accent), var(--accent-dark))" />

      <header className="sticky top-0 z-50">
        {/* Portfolio strip — only for visitors who navigated here from the portfolio */}
        {fromPortfolio ? (
          <div className="border-b border-line/60 bg-mist/80 backdrop-blur">
            <div className="section-shell flex h-9 items-center justify-between">
              <Link
                className="focus-ring group inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-slate transition hover:text-ink"
                to="/"
              >
                <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" size={13} /> Back to awaisjamil.com
              </Link>
              <SocialLinks variant="nav" />
            </div>
          </div>
        ) : null}

        <div
          className={clsx(
            'border-b transition-colors duration-500',
            scrolled || open ? 'border-line/60 bg-canvas/75 backdrop-blur-xl' : 'border-transparent bg-transparent',
          )}
        >
          <nav className="section-shell flex h-16 items-center justify-between gap-4">
            <Link className="focus-ring group flex items-center gap-3 rounded-xl" to={`/products/${slug}`}>
              <img
                alt=""
                className="h-9 w-9 rounded-[28%] border border-line shadow-line transition-transform duration-500 group-hover:-rotate-6"
                height={36}
                src={icon}
                width={36}
              />
              <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
            </Link>

            <ProductNav items={items} />

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="hidden items-center gap-2 md:flex">
                <DownloadButton compact site={site} />
                {site.androidDownload ? <DownloadButton compact platform="android" site={site} /> : null}
              </div>
              <button
                aria-expanded={open}
                aria-label={open ? 'Close navigation' : 'Open navigation'}
                className="focus-ring grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line bg-surface/60 md:hidden"
                onClick={() => setOpen((value) => !value)}
                type="button"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {open ? (
              <motion.div
                animate={{ height: 'auto', opacity: 1 }}
                className="overflow-hidden md:hidden"
                exit={{ height: 0, opacity: 0 }}
                initial={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                <div className="section-shell grid gap-1 pb-6 pt-2">
                  {items.map((item, index) => (
                    <motion.div
                      animate={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -12 }}
                      key={item.to}
                      transition={{ delay: 0.05 * index, duration: 0.4, ease }}
                    >
                      <NavLink
                        className={({ isActive }) =>
                          clsx(
                            'focus-ring flex items-center justify-between rounded-2xl px-4 py-3 font-display text-xl font-semibold',
                            isActive ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-ink/80',
                          )
                        }
                        end={item.end}
                        onClick={() => setOpen(false)}
                        to={item.to}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                  <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
                    <DownloadButton site={site} />
                    {site.androidDownload ? <DownloadButton platform="android" site={site} /> : null}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </header>

      <main>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          key={location.pathname}
          transition={{ duration: 0.7, ease }}
        >
          {outlet}
        </motion.div>
      </main>

      <footer className="relative overflow-hidden border-t border-line bg-surface/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[50rem] -translate-x-1/2 rounded-full opacity-60 blur-[110px]"
          style={{ background: 'var(--accent-soft)' }}
        />
        <div className="section-shell relative py-14">
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div className="flex items-center gap-4">
              <img alt="" className="h-14 w-14 rounded-[28%] border border-line shadow-soft" height={56} src={icon} width={56} />
              <div>
                <p className="font-display text-xl font-semibold tracking-tight">{site.name}</p>
                <p className="mt-0.5 text-sm text-slate">{site.category}</p>
              </div>
            </div>
            <nav aria-label={`${site.name} links`} className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
              <Link className="focus-ring rounded-sm text-slate transition hover:text-ink" to={`/products/${slug}/privacy`}>
                Privacy Policy
              </Link>
              <Link className="focus-ring rounded-sm text-slate transition hover:text-ink" to={`/products/${slug}/terms`}>
                Terms &amp; Conditions
              </Link>
              <Link className="focus-ring rounded-sm text-slate transition hover:text-ink" to={`/products/${slug}/support`}>
                Support
              </Link>
              <Link className="focus-ring rounded-sm text-slate transition hover:text-ink" to="/products">
                More products
              </Link>
              <Link className="focus-ring inline-flex items-center gap-1 rounded-sm font-semibold text-[var(--accent)]" to="/">
                awaisjamil.com <ArrowUpRight size={13} />
              </Link>
            </nav>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <p className="text-xs text-slate">© 2026 Awais Jamil. All rights reserved.</p>
            <SocialLinks variant="nav" />
          </div>
        </div>
      </footer>
    </div>
  )
}
