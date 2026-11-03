import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Mail, Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { ease, inViewOnce, staggerContainer, staggerItem } from '../../lib/animation.js'
import { Spotlight } from '../fx/Spotlight.jsx'
import { SplitWords } from '../fx/SplitWords.jsx'
import { Seo } from '../Seo.jsx'
import { Eyebrow } from './ProductOverviewPage.jsx'
import { InlineText } from './InlineText.jsx'

// Answers stay in the DOM (collapsed with a grid-rows transition) so they remain
// searchable and indexable.
function FaqItem({ faq, open, onToggle }) {
  const id = useId()

  return (
    <div className={clsx('rounded-2xl border bg-surface transition-colors', open ? 'border-[color:var(--accent-line)]' : 'border-line')}>
      <h3>
        <button
          aria-controls={id}
          aria-expanded={open}
          className="focus-ring flex w-full cursor-pointer items-center justify-between gap-6 rounded-2xl p-6 text-left font-display text-lg font-semibold text-ink"
          onClick={onToggle}
          type="button"
        >
          {faq.q}
          <span
            className={clsx(
              'grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500',
              open ? 'rotate-45 border-transparent bg-[var(--accent-control)] text-white' : 'border-line text-slate',
            )}
          >
            <Plus size={16} />
          </span>
        </button>
      </h3>
      <div
        className={clsx('grid transition-[grid-template-rows] duration-500 ease-out', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
        id={id}
      >
        <div className="overflow-hidden">
          <p className={clsx('px-6 pb-6 text-base leading-7 text-slate transition-opacity duration-500', open ? 'opacity-100' : 'opacity-0')}>
            <InlineText text={faq.a} />
          </p>
        </div>
      </div>
    </div>
  )
}

export function ProductSupportPage() {
  const site = useOutletContext()
  const { support } = site
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Seo
        description={`Get help with ${site.name} — frequently asked questions and support contact.`}
        image={site.socialPreview ?? site.icon}
        path={`/products/${site.slug}/support`}
        title={`${site.name} — Support`}
      />

      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[56rem] -translate-x-1/2 rounded-full opacity-60 blur-[110px]"
          style={{ background: 'var(--accent-soft)' }}
        />
        <div className="section-shell grid gap-14 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Support</Eyebrow>
            <SplitWords
              className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-6xl"
              text={`Need help with ${site.name}?`}
            />
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate"
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              {support.intro}
            </motion.p>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-10"
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
            >
              <Spotlight className="p-7" color="var(--accent-line)">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">Email support</p>
                <a
                  className="focus-ring group mt-3 inline-flex items-center gap-3 rounded-sm font-display text-xl font-semibold text-[var(--accent)]"
                  href={`mailto:${support.email}?subject=${encodeURIComponent(`${site.name} support`)}`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-soft)]">
                    <Mail size={18} />
                  </span>
                  <span className="break-all">{support.email}</span>
                  <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} />
                </a>
                {support.checklist?.length ? (
                  <>
                    <p className="mt-7 text-sm font-semibold text-ink">When contacting support, include:</p>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate">
                      {support.checklist.map((item) => (
                        <li className="grid grid-cols-[1.25rem_1fr]" key={item}>
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </Spotlight>
            </motion.div>

            {support.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {support.links.map((link) => (
                  <a
                    className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm font-semibold text-ink transition hover:border-[color:var(--accent-line)] hover:text-[var(--accent)]"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label} <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {support.faqs?.length ? (
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Frequently asked questions</h2>
              <motion.div
                className="mt-6 grid gap-3"
                initial="hidden"
                variants={staggerContainer}
                viewport={inViewOnce}
                whileInView="show"
              >
                {support.faqs.map((faq, index) => (
                  <motion.div key={faq.q} variants={staggerItem}>
                    <FaqItem
                      faq={faq}
                      onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
                      open={openIndex === index}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}
