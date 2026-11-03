import clsx from 'clsx'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import { CTASection } from '../components/CTASection.jsx'
import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { ProductCard } from '../components/ProductCard.jsx'
import { ProductIcon } from '../components/ProductsNavDropdown.jsx'
import { Seo } from '../components/Seo.jsx'
import { products } from '../data/products.js'
import { ease } from '../lib/animation.js'
import { DARK_THEME } from '../lib/theme.js'
import { useTheme } from '../lib/useTheme.js'

// Filters derive from each card's `type`, so new products slot in automatically.
const filters = [
  { label: 'All', match: () => true },
  { label: 'iOS', match: (product) => /ios/i.test(product.type) },
  { label: 'macOS', match: (product) => /macos/i.test(product.type) },
  { label: 'Local AI', match: (product) => /ai/i.test(product.type) },
].filter((filter) => products.some(filter.match))

function IconCloud() {
  const isDark = useTheme() === DARK_THEME
  const shown = products.slice(0, 8)

  return (
    <div aria-hidden="true" className="relative hidden h-56 w-72 lg:block">
      {shown.map((product, index) => {
        const angle = (index / shown.length) * Math.PI * 2
        return (
          <motion.div
            animate={{ y: [0, -10, 0] }}
            className="absolute"
            key={product.title}
            style={{ left: `${44 + Math.cos(angle) * 36}%`, top: `${42 + Math.sin(angle) * 34}%` }}
            transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
          >
            <ProductIcon className="h-12 w-12 shadow-soft" isDark={isDark} product={product} />
          </motion.div>
        )
      })}
    </div>
  )
}

export function ProductsPage() {
  const [active, setActive] = useState(filters[0].label)
  const current = filters.find((filter) => filter.label === active) ?? filters[0]
  const visible = products.filter(current.match)

  return (
    <>
      <Seo
        title="Products"
        description="Personal products by Awais Jamil, including iOS apps, local AI tools, open-source work, and practical software experiments."
        path="/products"
      />

      <PageHero
        aside={<IconCloud />}
        description="A collection of products and experiments built around privacy, productivity, local-first workflows, finance, faith, and creator tooling."
        label="Products"
        title="iOS apps, open-source tools, and practical products built outside client work."
      />

      <section className="pb-12">
        <div className="section-shell">
          <LayoutGroup>
            <div aria-label="Filter products" className="glass inline-flex flex-wrap gap-1 rounded-full p-1" role="group">
              {filters.map((filter) => {
                const isActive = filter.label === active
                const count = products.filter(filter.match).length
                return (
                  <button
                    aria-pressed={isActive}
                    className={clsx(
                      'focus-ring relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-canvas' : 'text-slate hover:text-ink',
                    )}
                    key={filter.label}
                    onClick={() => setActive(filter.label)}
                    type="button"
                  >
                    {isActive ? (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-ink"
                        layoutId="product-filter"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative">
                      {filter.label} <span className="font-mono text-xs opacity-60">{count}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </LayoutGroup>

          <motion.div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" layout>
            <AnimatePresence mode="popLayout">
              {visible.map((product, index) => (
                <motion.div
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="h-full"
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  key={product.title}
                  layout
                  transition={{ duration: 0.6, delay: index * 0.05, ease }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection
        buttonHref="/contact"
        buttonText="Contact Me"
        description="Looking to build an iOS app, web product, or automation tool? I'm happy to discuss scope and approach."
        headline="Have a project idea? Let's talk."
      />

      <Footer />
    </>
  )
}
