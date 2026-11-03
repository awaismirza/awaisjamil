import clsx from 'clsx'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useOutlet } from 'react-router-dom'
import { products } from '../data/products.js'
import { site } from '../data/site.js'
import { ease } from '../lib/animation.js'
import { isExternalHref } from '../lib/productMeta.js'
import { DARK_THEME } from '../lib/theme.js'
import { useTheme } from '../lib/useTheme.js'
import { ScrollProgress } from './fx/ScrollProgress.jsx'
import { ProductIcon, ProductsNavDropdown } from './ProductsNavDropdown.jsx'
import { SocialLinks } from './SocialIcons.jsx'
import { ThemeToggle } from './ThemeToggle.jsx'

const pillLink =
  'focus-ring relative cursor-pointer rounded-full px-3.5 py-2 text-sm font-medium text-slate transition-colors hover:text-ink'

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-ink font-mono text-xs font-bold text-canvas">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-spin-slow opacity-80"
          style={{
            background:
              'conic-gradient(from 0deg, transparent, rgb(var(--c-accent) / 0.9), transparent 40%, rgb(var(--c-violet) / 0.9), transparent 75%)',
          }}
        />
        <span className="absolute inset-[2px] rounded-[10px] bg-ink" />
        <span className="relative">AJ</span>
      </span>
      <span className="font-display text-base font-semibold tracking-tight text-ink">{site.name}</span>
    </span>
  )
}

function DesktopNav() {
  const { pathname } = useLocation()
  const [hovered, setHovered] = useState(null)
  const activeHref = site.nav.find((item) => pathname.startsWith(item.href))?.href
  const highlighted = hovered ?? activeHref

  return (
    <div
      className="glass hidden items-center rounded-full p-1 shadow-line lg:flex"
      onMouseLeave={() => setHovered(null)}
    >
      {site.nav.map((item) => {
        const isHighlighted = highlighted === item.href
        const indicator = isHighlighted ? (
          <motion.span
            className="absolute inset-0 rounded-full bg-mist"
            layoutId="nav-pill"
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          />
        ) : null

        return (
          <div className="relative" key={item.label} onMouseEnter={() => setHovered(item.href)}>
            {indicator}
            {item.label === 'Products' ? (
              <ProductsNavDropdown className={clsx(pillLink, activeHref === item.href && 'text-ink')} />
            ) : (
              <NavLink className={({ isActive }) => clsx(pillLink, isActive && 'text-ink')} to={item.href}>
                <span className="relative z-10">{item.label}</span>
              </NavLink>
            )}
          </div>
        )
      })}
    </div>
  )
}

function MobileMenu({ onClose }) {
  const isDark = useTheme() === DARK_THEME

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-40 overflow-y-auto bg-canvas/95 backdrop-blur-2xl lg:hidden"
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      initial={{ opacity: 0 }}
    >
      <div className="section-shell pb-12 pt-24">
        <motion.nav
          animate="show"
          className="grid"
          initial="hidden"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
        >
          {site.nav.map((item, index) => (
            <motion.div
              className="border-b border-line"
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            >
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    'focus-ring flex items-baseline justify-between py-4 font-display text-4xl font-semibold tracking-tight',
                    isActive ? 'text-ink' : 'text-ink/70',
                  )
                }
                onClick={onClose}
                to={item.href}
              >
                {item.label}
                <span className="font-mono text-xs text-slate">0{index + 1}</span>
              </NavLink>
              {item.label === 'Products' ? (
                <div className="grid grid-cols-2 gap-2 pb-5">
                  {products.map((product) => {
                    const classes =
                      'focus-ring flex items-center gap-2.5 rounded-2xl border border-line bg-surface/60 p-2 text-sm font-medium text-ink'
                    const content = (
                      <>
                        <ProductIcon className="h-8 w-8" isDark={isDark} product={product} />
                        <span className="truncate">{product.title}</span>
                      </>
                    )
                    return isExternalHref(product.href) ? (
                      <a className={classes} href={product.href} key={product.title} onClick={onClose} rel="noreferrer" target="_blank">
                        {content}
                      </a>
                    ) : (
                      <Link className={classes} key={product.title} onClick={onClose} to={product.href}>
                        {content}
                      </Link>
                    )
                  })}
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.nav>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 grid gap-4"
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.4, duration: 0.6, ease }}
        >
          <a
            className="focus-ring flex items-center justify-between rounded-full bg-ink px-6 py-4 text-sm font-semibold text-canvas"
            href={`mailto:${site.email}`}
          >
            {site.email}
            <ArrowUpRight size={18} />
          </a>
          <SocialLinks fullRow />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { pathname } = useLocation()

  // Hide the header while reading downwards; bring it back on any upward scroll.
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(latest > 24)
    setHidden(latest > 240 && latest > previous && !open)
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the mobile menu after navigation.
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-120%' : '0%' }}
        className="fixed inset-x-0 top-0 z-50"
        transition={{ duration: 0.45, ease }}
      >
        <nav
          className={clsx(
            'section-shell flex h-20 items-center justify-between gap-4 transition-all duration-500',
            scrolled && 'h-16',
          )}
        >
          <Link className="focus-ring relative z-50 rounded-xl" onClick={() => setOpen(false)} to="/">
            <Logo />
          </Link>

          <DesktopNav />

          <div className="relative z-50 flex items-center gap-2">
            <div className="hidden xl:block">
              <SocialLinks variant="nav" />
            </div>
            <ThemeToggle />
            <a
              className="focus-ring group hidden h-10 items-center gap-1.5 rounded-full bg-ink pl-4 pr-3 text-sm font-semibold text-canvas transition hover:shadow-glow sm:inline-flex"
              href={`mailto:${site.email}?subject=${encodeURIComponent(site.consulting.emailSubject)}`}
            >
              Let&apos;s talk
              <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={15} />
            </a>
            <button
              aria-expanded={open}
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              className="focus-ring grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line bg-surface/60 text-ink backdrop-blur lg:hidden"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  initial={{ rotate: -90, opacity: 0 }}
                  key={open ? 'x' : 'menu'}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
        {/* Frosted bar fades in once the page has scrolled */}
        <div
          aria-hidden="true"
          className={clsx(
            'absolute inset-0 -z-10 border-b border-line/60 bg-canvas/70 backdrop-blur-xl transition-opacity duration-500',
            scrolled && !open ? 'opacity-100' : 'opacity-0',
          )}
        />
      </motion.header>

      <AnimatePresence>{open ? <MobileMenu onClose={() => setOpen(false)} /> : null}</AnimatePresence>
    </>
  )
}

export function SiteLayout() {
  const { pathname } = useLocation()
  const outlet = useOutlet()

  // Lets product mini-sites know the visitor came from the portfolio, so they
  // can show the "Back to awaisjamil.com" strip only for those visitors.
  useEffect(() => {
    try {
      sessionStorage.setItem('visited-portfolio', '1')
    } catch {
      /* private browsing — strip just stays hidden */
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip text-ink">
      <a
        className="focus-ring sr-only z-[70] rounded-full bg-ink px-4 py-2 text-sm font-semibold text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#main"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <SiteHeader />

      <main id="main">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          key={pathname}
          transition={{ duration: 0.7, ease }}
        >
          {outlet}
        </motion.div>
      </main>
    </div>
  )
}
