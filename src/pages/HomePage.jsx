import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { Button } from '../components/Button.jsx'
import { CTASection } from '../components/CTASection.jsx'
import { ExperienceSection } from '../components/ExperienceSection.jsx'
import { Footer } from '../components/Footer.jsx'
import { Backdrop } from '../components/fx/Backdrop.jsx'
import { Counter } from '../components/fx/Counter.jsx'
import { HorizontalScroll } from '../components/fx/HorizontalScroll.jsx'
import { Marquee } from '../components/fx/Marquee.jsx'
import { SplitWords } from '../components/fx/SplitWords.jsx'
import { HeroConsole } from '../components/HeroConsole.jsx'
import { SectionHeading } from '../components/PageHero.jsx'
import { ProductCard } from '../components/ProductCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { ServiceCard } from '../components/ServiceCard.jsx'
import { SocialLinks } from '../components/SocialIcons.jsx'
import { experience } from '../data/experience.js'
import { technicalStrengths, techStack, yearsOfExperience } from '../data/expertise.js'
import { posts } from '../data/posts.js'
import { products } from '../data/products.js'
import { services } from '../data/services.js'
import { site } from '../data/site.js'
import { ease, inViewOnce, staggerContainer, staggerItem } from '../lib/animation.js'
import { isLiveProduct } from '../lib/productMeta.js'

const PREVIEW_SERVICE_COUNT = 4
const PREVIEW_POST_COUNT = 3
const agentTools = technicalStrengths.find((group) => group.category === 'AI & Agents')?.skills ?? []

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <Backdrop />
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-medium text-slate"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-canvas">
              {site.tagline.split(' & ')[0]}
            </span>
            {site.location}
          </motion.div>

          <SplitWords
            className="mt-8 max-w-4xl text-balance font-display text-[2.75rem] font-semibold leading-[1] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.6rem]"
            delay={0.15}
            highlight={site.hero.highlight}
            text={site.hero.headline}
          />

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-xl text-pretty text-lg leading-8 text-slate"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
          >
            {site.hero.summary}
          </motion.p>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 max-w-xl text-sm leading-6 text-slate/90"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
          >
            {site.hero.alsoLine}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
          >
            <Button href="/experience">View experience</Button>
            <Button href="/contact" variant="secondary">
              Start a project
            </Button>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="mt-8 hidden items-center gap-4 sm:flex"
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <SocialLinks variant="nav" />
            <span className="h-px w-12 bg-line" />
            <span className="font-mono text-xs text-slate">{site.socials.map((s) => s.label).join(' / ')}</span>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            className="mt-8 sm:hidden"
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <SocialLinks fullRow />
          </motion.div>
        </div>

        <HeroConsole />
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ opacity: 1 }}
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        initial={{ opacity: 0 }}
        transition={{ delay: 1.6 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            animate={{ y: ['-100%', '100%'] }}
            className="absolute inset-x-0 h-1/2 bg-accent"
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}

function Ticker() {
  const pill = (item) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm font-medium text-ink/80">
      <span className="h-1 w-1 rounded-full bg-accent" />
      {item}
    </span>
  )

  return (
    <section aria-label="Technologies" className="border-y border-line bg-surface/40 py-6">
      <div className="grid gap-3">
        <Marquee duration={50} items={techStack} renderItem={pill} />
        <Marquee duration={36} items={[...agentTools, ...agentTools]} renderItem={pill} reverse />
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: yearsOfExperience(experience), suffix: '+', label: 'years building software' },
    { value: products.length, label: 'products built outside client work' },
    { value: experience.length, label: 'roles on the timeline' },
    { value: posts.length, label: 'notes on building software' },
  ]

  return (
    <section className="section-shell py-20 sm:py-24">
      <motion.dl
        className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4"
        initial="hidden"
        variants={staggerContainer}
        viewport={inViewOnce}
        whileInView="show"
      >
        {stats.map((stat) => (
          <div className="bg-canvas p-6 sm:p-8" key={stat.label}>
            <motion.dt className="text-sm leading-6 text-slate" variants={staggerItem}>
              {stat.label}
            </motion.dt>
            <motion.dd className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl" variants={staggerItem}>
              <Counter suffix={stat.suffix} value={stat.value} />
            </motion.dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}

function ProductsPreview() {
  const previewProducts = products.filter(isLiveProduct).slice(0, 4)

  return (
    <section className="relative py-24 sm:py-32" id="products">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-gradient-to-b from-violet/[0.06] to-transparent" />
      <div className="section-shell">
        <SectionHeading
          action={
            <Button href="/products" variant="secondary">
              All products
            </Button>
          }
          label="Personal products"
          title="iOS apps, open-source tools, and practical products built outside client work."
        />
        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={inViewOnce}
          whileInView="show"
        >
          {previewProducts.map((product) => (
            <motion.div className="h-full" key={product.title} variants={staggerItem}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const previewServices = services.slice(0, PREVIEW_SERVICE_COUNT)

  return (
    <section className="py-24 sm:py-32 lg:py-0" id="services">
      <HorizontalScroll
        fallbackClassName="mt-14 grid gap-5 md:grid-cols-2"
        header={
          <SectionHeading
            action={
              <Button href="/services" variant="secondary">
                All services
              </Button>
            }
            label="Services"
            title="Software development services for products people can actually use."
          />
        }
      >
        {previewServices.map((service, index) => (
          <div className="h-full lg:w-[420px] lg:shrink-0" key={service.title}>
            <ServiceCard index={index} service={service} />
          </div>
        ))}
      </HorizontalScroll>
    </section>
  )
}

function WritingPreview() {
  const previewPosts = posts.slice(0, PREVIEW_POST_COUNT)

  return (
    <section className="py-24 sm:py-32" id="writing">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading label="Writing" title="Notes on product quality, speed, and software craft." />
          <AnimateIn className="mt-8" delay={0.2}>
            <Button href="/writing" variant="secondary">
              Read all articles
            </Button>
          </AnimateIn>
        </div>
        <motion.div
          className="border-t border-line"
          initial="hidden"
          variants={staggerContainer}
          viewport={inViewOnce}
          whileInView="show"
        >
          {previewPosts.map((post, index) => (
            <motion.div key={post.id} variants={staggerItem}>
              <Link
                className="focus-ring group relative grid gap-3 overflow-hidden border-b border-line py-8 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6"
                to={`/writing#post-${post.id}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-accent/10 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <span className="font-mono text-xs text-slate">0{index + 1}</span>
                <span>
                  <span className="flex flex-wrap items-center gap-3 text-xs text-slate">
                    <span className="font-mono text-coral">{post.date}</span>
                    {post.category ? <span className="chip">{post.category}</span> : null}
                  </span>
                  <span className="mt-3 block font-display text-2xl font-semibold leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {post.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate">{post.description}</span>
                </span>
                <span className="hidden h-11 w-11 place-items-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:bg-ink group-hover:text-canvas sm:grid">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Seo />
      <Hero />
      <Ticker />
      <Stats />
      <ExperienceSection limit={6} />
      <ProductsPreview />
      <ServicesPreview />
      <WritingPreview />
      <CTASection
        buttonHref="/contact"
        buttonText="Start a project"
        description={site.consulting.pitch}
        headline={site.consulting.punchline}
        label={site.consulting.label}
      />
      <Footer />
    </>
  )
}
