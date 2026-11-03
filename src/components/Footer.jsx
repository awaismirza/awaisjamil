import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { site } from '../data/site.js'
import { isExternalHref } from '../lib/productMeta.js'
import { Button } from './Button.jsx'
import { SocialLinks } from './SocialIcons.jsx'

const columnLink = 'focus-ring inline-flex rounded-sm text-sm text-slate transition-colors hover:text-ink'

export function Footer() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ['40%', '0%'])
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.4, 1])

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface" id="contact" ref={ref}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="section-shell relative pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="mt-5 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {site.availability}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${site.email}`}>Start a project</Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate">
              <span className="inline-flex items-center gap-2.5">
                <MapPin size={16} /> {site.location}
              </span>
              <a className="focus-ring inline-flex items-center gap-2.5 rounded-sm transition hover:text-ink" href={`mailto:${site.email}`}>
                <Mail size={16} /> {site.email}
              </a>
            </div>
          </div>

          <nav aria-label="Site">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate/80">Navigate</p>
            <ul className="mt-5 grid gap-3">
              <li>
                <Link className={columnLink} to="/">
                  Home
                </Link>
              </li>
              {site.nav.map((item) => (
                <li key={item.label}>
                  <Link className={columnLink} to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate/80">Products</p>
            <ul className="mt-5 grid gap-3">
              {products.map((product) => (
                <li key={product.title}>
                  {isExternalHref(product.href) ? (
                    <a className={columnLink} href={product.href} rel="noreferrer" target="_blank">
                      {product.title}
                    </a>
                  ) : (
                    <Link className={columnLink} to={product.href}>
                      {product.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate/80">Connect</p>
            <ul className="mt-5 grid gap-3">
              {site.socials.map((social) => (
                <li key={social.platform}>
                  <a className={`${columnLink} items-center gap-1`} href={social.href} rel="noreferrer" target="_blank">
                    {social.label} <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
              <li>
                <Link className={columnLink} to="/resume">
                  Resume
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <SocialLinks variant="footer" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line py-6 text-xs text-slate sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. Built in {site.location.split(',')[0]}.</p>
          <button
            className="focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2 font-medium text-ink transition hover:bg-mist"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            type="button"
          >
            Back to top
            <ArrowUp className="transition-transform group-hover:-translate-y-0.5" size={14} />
          </button>
        </div>
      </div>

      {/* Oversized wordmark that rises into place as the footer scrolls in */}
      <motion.p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[14vw] font-bold leading-[0.8] tracking-[-0.06em]"
        style={{ y: wordmarkY, opacity: wordmarkOpacity }}
      >
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(180deg, rgb(var(--c-ink) / 0.14), rgb(var(--c-ink) / 0))' }}
        >
          {site.name}
        </span>
      </motion.p>
    </footer>
  )
}
