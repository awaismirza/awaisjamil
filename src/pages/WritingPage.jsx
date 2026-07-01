import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Seo } from '../components/Seo.jsx'
import { staggerContainer, staggerItem } from '../lib/animation.js'
import { posts } from '../data/posts.js'

const ALL = 'All'

function getCategories(postList) {
  const cats = new Set(postList.map((p) => p.category).filter(Boolean))
  return [ALL, ...Array.from(cats)]
}

function PostCard({ post }) {
  return (
    <a
      className="group block rounded-md border border-line bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-ink hover:shadow-soft md:p-8"
      href={`#post-${post.id}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-coral">{post.date}</span>
        {post.category ? (
          <span className="rounded-md border border-line bg-mist px-2.5 py-1 text-xs font-semibold text-slate">
            {post.category}
          </span>
        ) : null}
      </div>
      <h2 className="mt-3 font-display text-2xl font-semibold leading-tight transition group-hover:text-teal">
        {post.title}
      </h2>
      <p className="mt-2 text-base leading-7 text-slate">{post.description}</p>
    </a>
  )
}

function PostArticle({ post }) {
  return (
    <article
      className="rounded-md border border-line bg-white p-6 md:p-8"
      id={`post-${post.id}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-coral">{post.date}</span>
        {post.category ? (
          <span className="rounded-md border border-line bg-mist px-2.5 py-1 text-xs font-semibold text-slate">
            {post.category}
          </span>
        ) : null}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">{post.title}</h2>
      <p className="mt-3 text-lg font-medium text-slate">{post.description}</p>
      <div className="mt-6 border-t border-line pt-6">
        {post.body.split('\n\n').map((paragraph, i) => (
          <p className="mt-4 text-base leading-7 text-slate first:mt-0" key={i}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
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
        label="Writing"
        title="Practical notes on building products with useful velocity."
      />

      {/* Category filters */}
      <div className="section-shell pb-6">
        <AnimateIn>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                  active === cat
                    ? 'border-ink bg-ink text-white'
                    : 'border-line bg-white text-slate hover:border-ink hover:text-ink'
                }`}
                key={cat}
                onClick={() => setActive(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Post cards grid */}
      <section className="section-shell pb-12">
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          initial="hidden"
          key={active}
          variants={staggerContainer}
          viewport={{ once: true, margin: '-40px' }}
          whileInView="show"
        >
          {filtered.map((post) => (
            <motion.div key={post.id} variants={staggerItem}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Full articles */}
      <section className="section-shell grid gap-8 pb-20">
        {filtered.map((post) => (
          <PostArticle key={post.id} post={post} />
        ))}
      </section>

      <Footer />
    </>
  )
}
