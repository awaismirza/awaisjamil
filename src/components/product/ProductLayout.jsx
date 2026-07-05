import { ArrowLeft, Mail } from 'lucide-react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { Footer } from '../Footer.jsx'
import { productSites } from '../../data/product-sites/index.js'
import { NotFoundPage } from '../../pages/NotFoundPage.jsx'

function navItems(slug) {
  return [
    { label: 'Overview', to: `/products/${slug}`, end: true },
    { label: 'Privacy Policy', to: `/products/${slug}/privacy` },
    { label: 'Terms & Conditions', to: `/products/${slug}/terms` },
    { label: 'Support', to: `/products/${slug}/support` },
  ]
}

export function ProductLayout() {
  const { slug } = useParams()
  const site = productSites[slug]

  if (!site) return <NotFoundPage />

  const items = navItems(slug)

  return (
    <>
      {/* Mobile: horizontal tab bar under the site header */}
      <div className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur lg:hidden dark:border-white/10 dark:bg-ink/95">
        <div className="section-shell flex items-center gap-2 overflow-x-auto py-2.5">
          <img
            alt=""
            className="h-7 w-7 shrink-0 rounded-lg border border-line"
            height={28}
            src={site.icon}
            width={28}
          />
          {items.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `focus-ring shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-teal/10 text-teal'
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
        </div>
      </div>

      <div className="section-shell">
        <div className="lg:grid lg:grid-cols-[264px_minmax(0,1fr)]">
          {/* Desktop: full-height spec-sheet sidebar */}
          <aside className="hidden border-r border-line lg:block dark:border-white/10">
            <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col overflow-y-auto py-10 pr-8">
              <Link className="focus-ring flex items-center gap-3 rounded-md" to={`/products/${slug}`}>
                <img
                  alt={`${site.name} app icon`}
                  className="h-14 w-14 rounded-2xl border border-line shadow-line"
                  height={56}
                  src={site.icon}
                  width={56}
                />
                <span>
                  <span className="block font-display text-lg font-semibold leading-tight text-ink">
                    {site.name}
                  </span>
                  <span className="mt-0.5 block text-xs font-medium text-slate">{site.category}</span>
                </span>
              </Link>

              <nav aria-label={`${site.name} pages`} className="mt-8 grid gap-1">
                {items.map((item) => (
                  <NavLink end={item.end} key={item.to} to={item.to}>
                    {({ isActive }) => (
                      <span
                        className={`focus-ring relative flex rounded-sm py-2 pl-4 text-sm transition ${
                          isActive
                            ? 'font-semibold text-teal'
                            : 'font-medium text-slate hover:text-ink dark:text-white/70 dark:hover:text-white'
                        }`}
                      >
                        {isActive ? (
                          <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-teal" />
                        ) : null}
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto grid gap-5 border-t border-line pt-6 dark:border-white/10">
                <dl className="grid gap-3">
                  {site.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate/70 dark:text-white/40">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-medium text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-teal hover:underline"
                  href={`mailto:${site.support.email}`}
                >
                  <Mail size={15} /> {site.support.email}
                </a>

                <Link
                  className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-medium text-slate transition hover:text-ink dark:text-white/70 dark:hover:text-white"
                  to="/products"
                >
                  <ArrowLeft size={15} /> All products
                </Link>
              </div>
            </div>
          </aside>

          <div className="min-w-0 lg:pl-10">
            <Outlet context={site} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
