import clsx from 'clsx'
import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { ease } from '../../lib/animation.js'
import { SplitWords } from '../fx/SplitWords.jsx'
import { Seo } from '../Seo.jsx'
import { Eyebrow } from './ProductOverviewPage.jsx'
import { InlineText } from './InlineText.jsx'

function scrollToSection(index) {
  const target = document.getElementById(`section-${index}`)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#section-${index}`)
}

// Tracks which section heading is nearest the top of the viewport.
function useActiveSection(count) {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
          setActive(Number(top.target.id.replace('section-', '')))
        }
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )
    for (let i = 1; i <= count; i += 1) {
      const node = document.getElementById(`section-${i}`)
      if (node) observer.observe(node)
    }
    return () => observer.disconnect()
  }, [count])

  return active
}

function Block({ block }) {
  if (block.h3) {
    return <h3 className="pt-2 font-display text-lg font-semibold text-ink">{block.h3}</h3>
  }
  if (block.ul) {
    return (
      <ul className="grid gap-2.5">
        {block.ul.map((item) => (
          <li className="grid grid-cols-[1.25rem_1fr]" key={item}>
            <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>
              <InlineText text={item} />
            </span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p>
      <InlineText text={block.p} />
    </p>
  )
}

export function ProductDocPage({ kind }) {
  const site = useOutletContext()
  const doc = site[kind]
  const path = `/products/${site.slug}/${kind}`
  const showContents = doc.sections.length >= 4
  const active = useActiveSection(doc.sections.length)

  return (
    <>
      <Seo
        description={doc.seoDescription}
        image={site.socialPreview ?? site.icon}
        path={path}
        title={`${site.name} — ${doc.title}`}
      />

      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[56rem] -translate-x-1/2 rounded-full opacity-60 blur-[110px]"
          style={{ background: 'var(--accent-soft)' }}
        />
        <div className="section-shell py-14 sm:py-20">
          <Eyebrow>Legal</Eyebrow>
          <SplitWords
            className="mt-6 font-display text-5xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl"
            text={doc.title}
          />
          {doc.lastUpdated ? (
            <motion.p
              animate={{ opacity: 1 }}
              className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-slate"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <CalendarDays size={14} /> Last updated: {doc.lastUpdated}
            </motion.p>
          ) : null}

          {doc.summary ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="relative mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[color:var(--accent-line)] bg-[var(--accent-soft)] p-6 text-base leading-7 text-ink/80 sm:p-8"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                Plain-English summary
              </span>
              <InlineText text={doc.summary} />
            </motion.div>
          ) : null}

          <div className={showContents ? 'mt-16 lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16' : 'mt-16'}>
            <div className="grid max-w-3xl gap-12">
              {doc.sections.map((section, index) => (
                <motion.section
                  className="scroll-mt-28"
                  id={`section-${index + 1}`}
                  initial={{ opacity: 0, y: 24 }}
                  key={section.heading}
                  transition={{ duration: 0.7, ease }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h2 className="flex items-baseline gap-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    <span className="font-mono text-sm font-medium text-[var(--accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </h2>
                  <div className="mt-4 grid gap-4 text-base leading-7 text-slate sm:pl-10">
                    {section.blocks.map((block, blockIndex) => (
                      <Block block={block} key={blockIndex} />
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {showContents ? (
              <aside className="hidden lg:block">
                <nav aria-label="Contents" className="glass sticky top-28 rounded-3xl p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">Contents</p>
                  <div className="relative mt-4 grid gap-0.5 border-l border-line">
                    {doc.sections.map((section, index) => {
                      const isActive = active === index + 1
                      return (
                        <a
                          aria-current={isActive ? 'location' : undefined}
                          className={clsx(
                            'focus-ring relative -ml-px border-l py-1.5 pl-4 pr-2 text-[13px] font-medium transition-colors',
                            isActive
                              ? 'border-[var(--accent)] text-[var(--accent)]'
                              : 'border-transparent text-slate hover:text-ink',
                          )}
                          href={`#section-${index + 1}`}
                          key={section.heading}
                          onClick={(event) => {
                            event.preventDefault()
                            scrollToSection(index + 1)
                          }}
                        >
                          {section.heading}
                        </a>
                      )
                    })}
                  </div>
                </nav>
              </aside>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
