import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
import { AnimateIn } from '../AnimateIn.jsx'
import { Seo } from '../Seo.jsx'
import { staggerContainer, staggerItem } from '../../lib/animation.js'
import { DARK_THEME } from '../../lib/theme.js'
import { useTheme } from '../../lib/useTheme.js'
import { AnimatedTimerDial } from './AnimatedTimerDial.jsx'
import { DownloadButton } from './DownloadButton.jsx'

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
      {children}
    </span>
  )
}

function SectionHeader({ label, title, sub, center = false }) {
  return (
    <AnimateIn>
      <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
        <Eyebrow>{label}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
          {title}
        </h2>
        {sub ? <p className="mt-3 text-base leading-7 text-slate">{sub}</p> : null}
      </div>
    </AnimateIn>
  )
}

export function ProductOverviewPage() {
  const site = useOutletContext()
  const { hero, metrics, screenshots, features, howItWorks, pricing, closing, timerShowcase } = site
  const theme = useTheme()
  const isDark = theme === DARK_THEME
  const heroShotSrc = (isDark && hero.heroShotDark) || hero.heroShot

  return (
    <>
      <Seo description={site.seoDescription} path={`/products/${site.slug}`} title={site.name} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: `radial-gradient(ellipse, var(--accent-soft) 0%, transparent 70%)` }}
        />
        <div className="section-shell relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:gap-16">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl">
              {hero.headline}
              {hero.headlineAccent ? (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text text-transparent">
                    {hero.headlineAccent}
                  </span>
                </>
              ) : null}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate">{hero.sub}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <DownloadButton site={site} size="lg" />
              {site.androidDownload ? (
                <DownloadButton platform="android" site={site} size="lg" />
              ) : null}
              {hero.ctas?.map((cta) => (
                <a
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink dark:border-white/20 dark:text-white dark:hover:border-white/50"
                  href={cta.href}
                  key={cta.label}
                  {...(cta.external ? { rel: 'noreferrer', target: '_blank' } : {})}
                >
                  {cta.label}
                </a>
              ))}
              {hero.ctaNote ? (
                <span className="text-sm font-semibold text-slate">{hero.ctaNote}</span>
              ) : null}
            </div>

            {hero.badges?.length ? (
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2">
                {hero.badges.map((badge) => (
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate"
                    key={badge}
                  >
                    <Check className="text-[var(--accent)]" size={15} /> {badge}
                  </span>
                ))}
              </div>
            ) : null}
          </motion.div>

          {timerShowcase ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto"
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <AnimatedTimerDial label={timerShowcase.label} totalMinutes={timerShowcase.totalMinutes} />
            </motion.div>
          ) : hero.heroShot ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto"
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                alt={hero.heroShotAlt ?? `${site.name} app screenshot`}
                className="w-60 rounded-[2.5rem] border border-line bg-white shadow-soft ring-1 ring-black/5 sm:w-64"
                src={heroShotSrc}
              />
            </motion.div>
          ) : (
            <motion.img
              alt={`${site.name} app icon`}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto hidden h-44 w-44 rounded-[2.5rem] border border-line shadow-soft lg:block"
              initial={{ opacity: 0, y: 24 }}
              src={site.icon}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            />
          )}
        </div>
      </section>

      {/* Metrics */}
      {metrics?.length ? (
        <section className="border-y border-line bg-white py-12 dark:border-white/10">
          <div className="section-shell grid gap-8 text-center sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-4xl font-semibold tracking-[-0.02em] text-[var(--accent)]">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-sm text-slate">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Screenshots */}
      {screenshots?.length ? (
        <section className="border-t border-line bg-mist py-16 sm:py-20 dark:border-white/10">
          <div className="section-shell">
            <SectionHeader center label={site.screenshotsLabel ?? 'The app'} title={site.screenshotsTitle} />
            <motion.div
              className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-60px' }}
              whileInView="show"
            >
              {screenshots.map((shot) => (
                <motion.figure className="flex flex-col items-center" key={shot.src} variants={staggerItem}>
                  <img
                    alt={shot.alt}
                    className="w-52 rounded-[2rem] border border-line bg-white shadow-soft ring-1 ring-black/5"
                    loading="lazy"
                    src={(isDark && shot.srcDark) || shot.src}
                  />
                  <figcaption className="mt-5 max-w-[14rem] text-center">
                    <span className="block text-sm font-semibold text-ink">{shot.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate">{shot.caption}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>
      ) : null}

      {/* Features */}
      {features?.length ? (
        <section className="border-t border-line bg-white py-16 sm:py-20 dark:border-white/10">
          <div className="section-shell">
            <SectionHeader center label="Features" title={site.featuresTitle} />
            <motion.div
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true, margin: '-60px' }}
              whileInView="show"
            >
              {features.map((feature) => (
                <motion.div
                  className="rounded-2xl border border-line bg-white p-7 shadow-line transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
                  key={feature.title}
                  variants={staggerItem}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : null}

      {/* How it works */}
      {howItWorks?.length ? (
        <section className="border-t border-line bg-white py-16 sm:py-20 dark:border-white/10">
          <div className="section-shell">
            <SectionHeader center label="How it works" title={site.howItWorksTitle} />
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {howItWorks.map((step, index) => (
                <div className="flex flex-col items-center text-center" key={step.title}>
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] font-display text-lg font-bold text-white shadow-[0_8px_24px_var(--accent-soft)]">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-[18rem] text-sm leading-6 text-slate">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Pricing */}
      {pricing ? (
        <section className="border-t border-line bg-mist py-16 sm:py-20 dark:border-white/10">
          <div className="section-shell">
            <SectionHeader center label="Pricing" sub={pricing.sub} title={pricing.title} />
            <div
              className={`mx-auto mt-12 grid gap-6 ${
                pricing.plans.length === 3
                  ? 'max-w-5xl md:grid-cols-3'
                  : 'max-w-3xl md:grid-cols-2'
              }`}
            >
              {pricing.plans.map((plan) => (
                <div
                  className={`relative rounded-2xl border bg-white p-8 ${
                    plan.highlight
                      ? 'border-[var(--accent)]/50 shadow-soft'
                      : 'border-line shadow-line'
                  }`}
                  key={plan.name}
                >
                  {plan.badge || plan.highlight ? (
                    <span className="absolute right-5 top-5 rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-bold text-white">
                      {plan.badge || 'Most popular'}
                    </span>
                  ) : null}
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate">{plan.name}</p>
                  <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-ink">
                    {plan.price}{' '}
                    {plan.per ? <span className="text-base font-medium text-slate">{plan.per}</span> : null}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate">{plan.description}</p>
                  <ul className="mt-6 grid gap-2.5 text-sm text-ink">
                    {plan.features.map((item) => (
                      <li className="flex items-start gap-2.5" key={item}>
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-white">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {plan.note ? <p className="mt-6 text-xs leading-5 text-slate/80">{plan.note}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Closing CTA */}
      {closing ? (
        <section
          className="border-t border-line py-16 sm:py-20 dark:border-white/10"
          style={{ background: `linear-gradient(160deg, var(--accent-soft) 0%, transparent 60%)` }}
        >
          <div className="section-shell text-center">
            <AnimateIn>
              <Eyebrow>Get started</Eyebrow>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
                {closing.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate">{closing.sub}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <DownloadButton site={site} size="lg" />
                {site.androidDownload ? (
                  <DownloadButton platform="android" site={site} size="lg" />
                ) : null}
              </div>
            </AnimateIn>
          </div>
        </section>
      ) : null}
    </>
  )
}
