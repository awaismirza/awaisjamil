import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { SocialLinks } from '../components/SocialIcons.jsx'
import { staggerContainer, staggerItem } from '../lib/animation.js'
import { ExperienceSection } from '../components/ExperienceSection.jsx'
import { Footer } from '../components/Footer.jsx'
import { HeroWorkbench } from '../components/HeroWorkbench.jsx'
import { ProductCard } from '../components/ProductCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { products } from '../data/products.js'
import { posts } from '../data/posts.js'
import { services } from '../data/services.js'

const PREVIEW_SERVICE_COUNT = 4
const PREVIEW_POST_COUNT = 3

export function HomePage() {
  const previewProducts = products
    .filter((p) => p.href && p.href !== '#')
    .slice(0, 4)
  const previewServices = services.slice(0, PREVIEW_SERVICE_COUNT)
  const previewPosts = posts.slice(0, PREVIEW_POST_COUNT)

  return (
    <>
      <Seo />

      {/* Hero */}
      <section className="section-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.86fr] lg:py-24">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
            I design and ship web and mobile products that feel sharp, useful,
            and built to last.
          </h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 }}
          >
            Senior software engineer in Melbourne, building React, mobile, and
            product systems for founders and teams.
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 sm:hidden"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.22 }}
          >
            <SocialLinks fullRow variant="nav" />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            <Button href="/experience">View experience</Button>
            <Button href="/contact" variant="secondary">
              Start a project
            </Button>
          </motion.div>
        </motion.div>
        <HeroWorkbench />
      </section>

      {/* Experience preview */}
      <ExperienceSection limit={6} />

      {/* Products preview */}
      <section id="products" className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <AnimateIn className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Personal products</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                iOS apps, open-source tools, and practical products built outside
                client work.
              </h2>
            </div>
            <Link
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal"
              to="/products"
            >
              View all products <ArrowRight size={16} />
            </Link>
          </AnimateIn>

          <div className="mt-12">
            <motion.div
              className="grid gap-5 md:grid-cols-2"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-60px' }}
              whileInView="show"
            >
              {previewProducts.map((product) => (
                <motion.div className="h-full" key={product.title} variants={staggerItem}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink dark:border-white/20 dark:bg-graphite dark:text-white dark:hover:border-white/50"
              to="/products"
            >
              View all products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" className="bg-mist py-16 sm:py-20">
        <div className="section-shell">
          <AnimateIn className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Services</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                Software development services for products people can actually use.
              </h2>
            </div>
            <Link
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal"
              to="/services"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </AnimateIn>

          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {previewServices.map((service) => (
              <motion.div
                className="rounded-md border border-line bg-white p-6 shadow-line"
                key={service.title}
                variants={staggerItem}
              >
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate">{service.summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Writing preview */}
      <section id="writing" className="border-t border-line bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <AnimateIn>
            <p className="section-label">Writing</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Notes on product quality, speed, and software craft.
            </h2>
            <Link
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal"
              to="/writing"
            >
              Read all articles <ArrowRight size={16} />
            </Link>
          </AnimateIn>
          <motion.div
            className="grid gap-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {previewPosts.map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <Link
                  className="group block rounded-md border border-line bg-mist p-6 transition hover:border-ink hover:bg-white"
                  to="/writing"
                >
                  <p className="text-sm font-semibold text-coral">{post.date}</p>
                  <h3 className="mt-3 flex items-center justify-between gap-4 font-display text-xl font-semibold">
                    {post.title}
                    <ArrowRight
                      className="shrink-0 transition group-hover:translate-x-1"
                      size={18}
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{post.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
