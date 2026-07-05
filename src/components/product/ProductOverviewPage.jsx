import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link, useOutletContext } from 'react-router-dom'
import { AnimateIn } from '../AnimateIn.jsx'
import { Seo } from '../Seo.jsx'
import { staggerContainer, staggerItem } from '../../lib/animation.js'

function SectionHeading({ label, title }) {
  return (
    <AnimateIn>
      <p className="section-label">{label}</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
        {title}
      </h2>
    </AnimateIn>
  )
}

export function ProductOverviewPage() {
  const site = useOutletContext()
  const { hero, metrics, screenshots, features, howItWorks, pricing } = site

  return (
    <>
      <Seo description={site.seoDescription} path={`/products/${site.slug}`} title={site.name} />

      {/* Hero */}
      <section className="py-14 sm:py-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-start gap-6">
            <img
              alt={`${site.name} app icon`}
              className="hidden h-20 w-20 rounded-3xl border border-line shadow-soft sm:block lg:hidden"
              height={80}
              src={site.icon}
              width={80}
            />
            <div>
              <p className="section-label">{hero.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
                {hero.headline}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate">{hero.sub}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {hero.ctas?.map((cta) =>
              cta.kind === 'primary' ? (
                <a
                  className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:bg-graphite dark:!bg-white dark:!text-ink"
                  href={cta.href}
                  key={cta.label}
                  {...(cta.external ? { rel: 'noreferrer', target: '_blank' } : {})}
                >
                  {cta.label}
                </a>
              ) : (
                <a
                  className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-line px-5 text-sm font-semibold text-ink transition hover:border-ink dark:border-white/20 dark:text-white"
                  href={cta.href}
                  key={cta.label}
                  {...(cta.external ? { rel: 'noreferrer', target: '_blank' } : {})}
                >
                  {cta.label}
                </a>
              ),
            )}
            {hero.ctaBadge ? (
              <span className="focus-ring inline-flex h-12 cursor-default items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white opacity-60 dark:!bg-white dark:!text-ink">
                {hero.ctaBadge}
              </span>
            ) : null}
            {hero.ctaNote ? (
              <span className="text-sm font-semibold text-slate">{hero.ctaNote}</span>
            ) : null}
          </div>

          {hero.badges?.length ? (
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              {hero.badges.map((badge) => (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate" key={badge}>
                  <Check className="text-teal" size={15} /> {badge}
                </span>
              ))}
            </div>
          ) : null}
        </motion.div>
      </section>

      {/* Metrics */}
      {metrics?.length ? (
        <section className="border-t border-line py-10 dark:border-white/10">
          <div className="grid gap-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-teal">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-slate">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Screenshots */}
      {screenshots?.length ? (
        <section className="border-t border-line py-14 sm:py-16 dark:border-white/10">
          <SectionHeading label={site.screenshotsLabel ?? 'A look inside'} title={site.screenshotsTitle} />
          <motion.div
            className="mt-10 flex gap-6 overflow-x-auto pb-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {screenshots.map((shot) => (
              <motion.figure className="w-56 shrink-0" key={shot.src} variants={staggerItem}>
                <img
                  alt={shot.alt}
                  className="w-full rounded-2xl border border-line bg-white shadow-line"
                  loading="lazy"
                  src={shot.src}
                />
                {shot.title ? (
                  <figcaption className="mt-3">
                    <span className="block text-sm font-semibold text-ink">{shot.title}</span>
                    {shot.caption ? (
                      <span className="mt-0.5 block text-xs leading-5 text-slate">{shot.caption}</span>
                    ) : null}
                  </figcaption>
                ) : null}
              </motion.figure>
            ))}
          </motion.div>
        </section>
      ) : null}

      {/* Features */}
      {features?.length ? (
        <section className="border-t border-line py-14 sm:py-16 dark:border-white/10">
          <SectionHeading label="Features" title={site.featuresTitle} />
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {features.map((feature) => (
              <motion.div
                className="rounded-md border border-line bg-white p-6 shadow-line"
                key={feature.title}
                variants={staggerItem}
              >
                <div className="grid h-10 w-10 place-items-center rounded-md bg-teal/10 text-teal">
                  <feature.icon size={19} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ) : null}

      {/* How it works */}
      {howItWorks?.length ? (
        <section className="border-t border-line py-14 sm:py-16 dark:border-white/10">
          <SectionHeading label="How it works" title={site.howItWorksTitle} />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div key={step.title}>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white dark:!bg-white dark:!text-ink">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Pricing */}
      {pricing ? (
        <section className="border-t border-line py-14 sm:py-16 dark:border-white/10">
          <SectionHeading label="Pricing" title={pricing.title} />
          {pricing.sub ? <p className="mt-3 max-w-xl text-base leading-7 text-slate">{pricing.sub}</p> : null}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pricing.plans.map((plan) => (
              <div
                className={`rounded-md border bg-white p-8 ${
                  plan.highlight ? 'border-teal/40 shadow-soft' : 'border-line shadow-line'
                }`}
                key={plan.name}
              >
                <p className={`text-sm font-semibold ${plan.highlight ? 'text-teal' : 'text-coral'}`}>
                  {plan.name}
                </p>
                <p className="mt-3 font-display text-3xl font-semibold text-ink">
                  {plan.price}{' '}
                  {plan.per ? <span className="text-base font-medium text-slate">{plan.per}</span> : null}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate">{plan.description}</p>
                <ul className="mt-6 grid gap-2 text-sm text-ink">
                  {plan.features.map((item) => (
                    <li className="flex items-start gap-2" key={item}>
                      <Check className="mt-0.5 shrink-0 text-teal" size={16} /> {item}
                    </li>
                  ))}
                </ul>
                {plan.note ? <p className="mt-5 text-xs leading-5 text-slate/80">{plan.note}</p> : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Legal links */}
      <section className="border-t border-line py-8 dark:border-white/10">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-teal">
          <Link className="focus-ring rounded-sm hover:underline" to={`/products/${site.slug}/privacy`}>
            Privacy Policy
          </Link>
          <Link className="focus-ring rounded-sm hover:underline" to={`/products/${site.slug}/terms`}>
            Terms &amp; Conditions
          </Link>
          <Link className="focus-ring rounded-sm hover:underline" to={`/products/${site.slug}/support`}>
            Support
          </Link>
        </div>
      </section>
    </>
  )
}
