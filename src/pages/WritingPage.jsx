import clsx from 'clsx'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useState } from 'react'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { Footer } from '../components/Footer.jsx'
import { Spotlight } from '../components/fx/Spotlight.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Seo } from '../components/Seo.jsx'
import { posts } from '../data/posts.js'
import { ease } from '../lib/animation.js'

const ALL = 'All'

function getCategories(postList) {
  const cats = new Set(postList.map((p) => p.category).filter(Boolean))
  return [ALL, ...Array.from(cats)]
}

function readingTime(body) {
  return Math.max(1, Math.round(body.split(/\s+/).length / 220))
}

function PostMeta({ post }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs">
      <span className="font-mono text-coral">{post.date}</span>
      <span className="font-mono text-slate">{readingTime(post.body)} min read</span>
      {post.category ? <span className="chip">{post.category}</span> : null}
    </div>
  )
}

function PostCard({ post, index }) {
  return (
    <Spotlight as="article" className="h-full p-6 hover:-translate-y-1 md:p-8">
      <a className='focus-ring block rounded-sm after:absolute after:inset-0 after:content-[""]' href={`#post-${post.id}`}>
        <span className="font-mono text-xs text-slate">{String(index + 1).padStart(2, '0')}</span>
        <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight">{post.title}</h2>
      </a>
      <p className="mt-3 text-base leading-7 text-slate">{post.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <PostMeta post={post} />
        <ArrowDown className="text-slate transition-transform duration-500 group-hover/spot:translate-y-1 group-hover/spot:text-accent-ink" size={18} />
      </div>
    </Spotlight>
  )
}

function PostArticle({ post }) {
  const paragraphs = post.body.split('\n\n')

  return (
    <AnimateIn as="article" className="border-t border-line pt-12" y={40}>
      <div className="grid scroll-mt-28 gap-8 lg:grid-cols-[14rem_1fr] lg:gap-16" id={`post-${post.id}`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <PostMeta post={post} />
        </div>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{post.title}</h2>
          <p className="mt-4 font-serif text-2xl italic leading-snug text-slate">{post.description}</p>
          <div className="prose-body mt-8 text-lg leading-8 text-ink/80">
            {paragraphs.map((paragraph, i) => (
              <p
                className={clsx(
                  i === 0 &&
                    'first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-accent-ink',
                )}
                key={i}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}

export function WritingPage() {
  const categories = getCategories(posts)
  const [active, setActive] = useState(ALL)
  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="Writing"
        description="Articles and notes on software engineering, product development, iOS apps, AI automation, and building useful tools."
        path="/writing"
      />

      <PageHero
        description="Notes on software engineering, product decisions, iOS development, AI automation, and building things that matter."
        highlight="useful velocity."
        label="Writing"
        title="Practical notes on building products with useful velocity."
      />

      {categories.length > 1 ? (
        <div className="section-shell pb-8">
          <LayoutGroup>
            <div aria-label="Filter articles" className="glass inline-flex flex-wrap gap-1 rounded-full p-1" role="group">
              {categories.map((cat) => {
                const isActive = active === cat
                return (
                  <button
                    aria-pressed={isActive}
                    className={clsx(
                      'focus-ring relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-canvas' : 'text-slate hover:text-ink',
                    )}
                    key={cat}
                    onClick={() => setActive(cat)}
                    type="button"
                  >
                    {isActive ? (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-ink"
                        layoutId="writing-filter"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative">{cat}</span>
                  </button>
                )
              })}
            </div>
          </LayoutGroup>
        </div>
      ) : null}

      <section className="section-shell pb-20">
        <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((post, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="h-full"
                exit={{ opacity: 0, scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                key={post.id}
                layout
                transition={{ duration: 0.6, delay: index * 0.06, ease }}
              >
                <PostCard index={index} post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="section-shell grid gap-16 pb-28">
        {filtered.map((post) => (
          <PostArticle key={post.id} post={post} />
        ))}
      </section>

      <Footer />
    </>
  )
}
