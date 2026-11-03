import clsx from 'clsx'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import { AnimateIn } from '../AnimateIn.jsx'
import { Backdrop } from '../fx/Backdrop.jsx'
import { Spotlight } from '../fx/Spotlight.jsx'
import { SplitWords } from '../fx/SplitWords.jsx'
import { Seo } from '../Seo.jsx'
import { ease, inViewOnce, staggerContainer, staggerItem } from '../../lib/animation.js'
import { DARK_THEME } from '../../lib/theme.js'
import { useTheme } from '../../lib/useTheme.js'
import { AnimatedTimerDial } from './AnimatedTimerDial.jsx'
import { AnimatedRecordingWaveform } from './AnimatedRecordingWaveform.jsx'
import { DownloadButton } from './DownloadButton.jsx'

const accentGradientText =
  'inline-block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] bg-clip-text pr-[0.04em] text-transparent dark:to-[var(--accent)]'

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-line)] bg-[var(--accent-soft)] px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
      {children}
    </span>
  )
}

function SectionHeader({ label, title, sub, center = false }) {
  return (
    <AnimateIn>
      <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
        <Eyebrow>{label}</Eyebrow>
        {title ? (
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl">
            {title}
          </h2>
        ) : null}
        {sub ? <p className="mt-4 text-lg leading-8 text-slate">{sub}</p> : null}
      </div>
    </AnimateIn>
  )
}

// Phone frame that floats and tilts toward the pointer.
function PhoneMockup({ src, alt }) {
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 120, damping: 14 })
  const rotateY = useSpring(ry, { stiffness: 120, damping: 14 })

  function handleMove(event) {
    if (reduce || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    ry.set(((event.clientX - rect.left) / rect.width - 0.5) * 16)
    rx.set(((event.clientY - rect.top) / rect.height - 0.5) * -16)
  }

  return (
    <div
      className="relative [perspective:1200px]"
      onPointerLeave={() => {
        rx.set(0)
        ry.set(0)
      }}
      onPointerMove={handleMove}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-3/4 w-3/4 rounded-full blur-[80px]" style={{ background: 'var(--accent)', opacity: 0.35 }} />
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="relative rounded-[2.9rem] border border-white/10 bg-[#0b0c10] p-2.5 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.55)]"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          <img alt={alt} className="w-60 rounded-[2.3rem] sm:w-64" src={src} />
          {/* Glass glare */}
          <span className="pointer-events-none absolute inset-2.5 rounded-[2.3rem] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// App icon with orbiting accent rings, for products without a hero screen.
function IconOrbit({ src, name }) {
  return (
    <div className="relative mx-auto grid h-80 w-80 place-items-center">
      <div aria-hidden="true" className="absolute inset-10 rounded-full blur-[70px]" style={{ background: 'var(--accent)', opacity: 0.35 }} />
      {[0, 1].map((ring) => (
        <div
          aria-hidden="true"
          className="absolute rounded-full border border-dashed border-[color:var(--accent-line)]"
          key={ring}
          style={{ inset: ring === 0 ? '8%' : '-6%' }}
        >
          <div
            className="absolute inset-0 animate-spin-slow"
            style={{ animationDuration: ring === 0 ? '18s' : '30s', animationDirection: ring ? 'reverse' : 'normal' }}
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)]" />
          </div>
        </div>
      ))}
      <motion.img
        alt={`${name} app icon`}
        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
        className="relative h-40 w-40 rounded-[26%] border border-line shadow-soft"
        src={src}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function HeroVisual({ site, isDark }) {
  const { hero, timerShowcase, recordingShowcase } = site
  if (recordingShowcase) return <AnimatedRecordingWaveform label={recordingShowcase.label} />
  if (timerShowcase) {
    return <AnimatedTimerDial label={timerShowcase.label} totalMinutes={timerShowcase.totalMinutes} />
  }
  if (hero.heroShot) {
    return (
      <PhoneMockup
        alt={hero.heroShotAlt ?? `${site.name} app screenshot`}
        src={(isDark && hero.heroShotDark) || hero.heroShot}
      />
    )
  }
  return <IconOrbit name={site.name} src={(isDark && site.iconDark) || site.icon} />
}

function Hero({ site, isDark }) {
  const { hero } = site
  const headline = hero.headlineAccent ? `${hero.headline} ${hero.headlineAccent}` : hero.headline

  return (
    <section className="relative isolate overflow-hidden">
      <Backdrop
        colors={[
          'var(--accent)',
          'var(--accent-dark)',
          'color-mix(in srgb, var(--accent) 50%, rgb(var(--c-violet)))',
        ]}
        intensity={0.7}
      />
      <div className="section-shell grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pb-28">
        <div>
          <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.6, ease }}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </motion.div>
          <SplitWords
            accentClassName={accentGradientText}
            breakBeforeHighlight
            className="mt-6 max-w-2xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-7xl"
            delay={0.1}
            highlight={hero.headlineAccent}
            text={headline}
          />
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 max-w-xl text-pretty text-lg leading-8 text-slate"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            <DownloadButton site={site} size="lg" />
            {site.androidDownload ? <DownloadButton platform="android" site={site} size="lg" /> : null}
            {hero.ctas?.map((cta) => (
              <a
                className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-7 text-base font-semibold text-ink backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:var(--accent-line)]"
                href={cta.href}
                key={cta.label}
                {...(cta.external ? { rel: 'noreferrer', target: '_blank' } : {})}
              >
                {cta.label}
              </a>
            ))}
            {hero.ctaNote ? <span className="text-sm font-semibold text-slate">{hero.ctaNote}</span> : null}
          </motion.div>

          {hero.badges?.length ? (
            <motion.ul
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-2"
              initial="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } } }}
            >
              {hero.badges.map((badge) => (
                <motion.li
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-sm font-medium text-slate backdrop-blur"
                  key={badge}
                  variants={staggerItem}
                >
                  <Check className="text-[var(--accent)]" size={14} strokeWidth={2.5} /> {badge}
                </motion.li>
              ))}
            </motion.ul>
          ) : null}
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mx-auto"
          initial={{ opacity: 0, y: 30, scale: 0.94 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <HeroVisual isDark={isDark} site={site} />
        </motion.div>
      </div>
    </section>
  )
}

function Facts({ facts }) {
  return (
    <section aria-label="Key facts" className="section-shell pb-16">
      <motion.dl
        className={clsx(
          'grid gap-px overflow-hidden rounded-3xl border border-line bg-line',
          facts.length % 2 === 0 ? 'sm:grid-cols-2' : '',
          { 1: '', 2: 'lg:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'lg:grid-cols-4' }[facts.length] ?? 'lg:grid-cols-3',
        )}
        initial="hidden"
        variants={staggerContainer}
        viewport={inViewOnce}
        whileInView="show"
      >
        {facts.map((fact) => (
          <div className="bg-canvas p-5 sm:p-6" key={fact.label}>
            <motion.dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate" variants={staggerItem}>
              {fact.label}
            </motion.dt>
            <motion.dd className="mt-2 font-display text-base font-semibold text-ink" variants={staggerItem}>
              {fact.value}
            </motion.dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}

function Metrics({ metrics }) {
  return (
    <section className="border-y border-line bg-surface/40 py-16">
      <motion.div
        className="section-shell grid gap-10 text-center sm:grid-cols-3"
        initial="hidden"
        variants={staggerContainer}
        viewport={inViewOnce}
        whileInView="show"
      >
        {metrics.map((metric) => (
          <motion.div key={metric.label} variants={staggerItem}>
            <p className={clsx('font-display text-5xl font-semibold tracking-[-0.03em] sm:text-6xl', accentGradientText)}>
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-slate">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function ScreenshotPlaceholder({ shot }) {
  return (
    <div
      aria-label={`${shot.title} screenshot coming soon`}
      className="relative flex aspect-[9/19.5] w-52 flex-col overflow-hidden rounded-[2rem] border border-[color:var(--accent-line)] bg-gradient-to-b from-[var(--accent-soft)] via-surface to-mist p-5 shadow-soft"
      role="img"
    >
      <div className="mx-auto mt-1 h-1.5 w-16 rounded-full bg-ink/10" />
      <div className="mx-auto mt-10 grid h-28 w-28 place-items-center rounded-full border-[10px] border-[var(--accent)] bg-surface shadow-[0_0_0_8px_var(--accent-soft)]">
        <span className="font-display text-xl font-semibold text-[var(--accent)]">{shot.title}</span>
      </div>
      <div className="mt-auto rounded-2xl border border-line bg-surface/80 p-3 backdrop-blur">
        <div className="h-2 w-16 rounded-full bg-[var(--accent-soft)]" />
        <div className="mt-2 h-1.5 w-full rounded-full bg-ink/10" />
        <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-ink/10" />
      </div>
      <span className="absolute inset-x-0 bottom-2 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-slate/70">
        Screenshot coming soon
      </span>
    </div>
  )
}

function Caption({ shot, className }) {
  return (
    <figcaption className={clsx('mt-6 text-center', className)}>
      <span className="block font-display text-base font-semibold text-ink">{shot.title}</span>
      <span className="mx-auto mt-1 block max-w-[16rem] text-sm leading-5 text-slate">{shot.caption}</span>
    </figcaption>
  )
}

// Phone screenshots drift at different speeds as the gallery scrolls past.
function ParallaxPhone({ shot, progress, offset, isDark }) {
  const y = useTransform(progress, [0, 1], [offset, -offset])
  return (
    <motion.figure className="flex flex-col items-center" style={{ y }}>
      {shot.placeholder ? (
        <ScreenshotPlaceholder shot={shot} />
      ) : (
        <div className="group rounded-[2.4rem] border border-white/10 bg-[#0b0c10] p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
          <img
            alt={shot.alt}
            className="w-52 rounded-[2rem] sm:w-56"
            loading="lazy"
            src={(isDark && shot.srcDark) || shot.src}
          />
        </div>
      )}
      <Caption shot={shot} />
    </motion.figure>
  )
}

function PhoneGallery({ shots, isDark }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" ref={ref}>
      {shots.map((shot, index) => (
        <ParallaxPhone
          isDark={isDark}
          key={shot.src ?? shot.title}
          offset={[30, -30, 60][index % 3]}
          progress={smooth}
          shot={shot}
        />
      ))}
    </div>
  )
}

// Desktop captures tilt up into place as each one scrolls into view.
function DesktopShot({ shot, isDark }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])

  return (
    <figure className="[perspective:1400px]" ref={ref}>
      <motion.div
        className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_50px_120px_-40px_rgba(0,0,0,0.45)]"
        style={{ rotateX, scale, opacity, transformOrigin: 'center top' }}
      >
        <div className="flex h-9 items-center gap-1.5 border-b border-line bg-mist/70 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <img alt={shot.alt} className="w-full" loading="lazy" src={(isDark && shot.srcDark) || shot.src} />
      </motion.div>
      <Caption shot={shot} />
    </figure>
  )
}

function Screenshots({ site, isDark }) {
  const desktop = site.screenshotFormat === 'desktop'
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-[var(--accent-soft)] to-transparent opacity-60" />
      <div className="section-shell">
        <SectionHeader center label={site.screenshotsLabel ?? 'The app'} title={site.screenshotsTitle} />
        {desktop ? (
          <div className="mx-auto mt-16 grid max-w-5xl gap-20">
            {site.screenshots.map((shot) => (
              <DesktopShot isDark={isDark} key={shot.src ?? shot.title} shot={shot} />
            ))}
          </div>
        ) : (
          <PhoneGallery isDark={isDark} shots={site.screenshots} />
        )}
      </div>
    </section>
  )
}

function Features({ site }) {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader center label="Features" title={site.featuresTitle} />
        <motion.div
          className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={inViewOnce}
          whileInView="show"
        >
          {site.features.map((feature) => (
            <motion.div className="h-full" key={feature.title} variants={staggerItem}>
              <Spotlight className="h-full p-7 hover:-translate-y-1" color="var(--accent-line)">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-500 group-hover/spot:-rotate-6 group-hover/spot:scale-110">
                  <feature.icon size={21} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{feature.description}</p>
              </Spotlight>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function HowItWorks({ site }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'center 50%'] })
  const draw = useSpring(scrollYProgress, { stiffness: 100, damping: 26 })

  return (
    <section className="border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader center label="How it works" title={site.howItWorksTitle} />
        <div className="relative mt-16 grid gap-12 md:grid-cols-3" ref={ref}>
          <div aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-line md:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)]"
              style={{ scaleX: draw }}
            />
          </div>
          {site.howItWorks.map((step, index) => (
            <motion.div
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              key={step.title}
              transition={{ duration: 0.8, delay: index * 0.15, ease }}
              viewport={inViewOnce}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] font-display text-lg font-bold text-white shadow-[0_10px_30px_-6px_var(--accent-glow)]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-20 [animation-duration:2.6s]" />
                <span className="relative">{index + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 max-w-[18rem] text-sm leading-6 text-slate">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing({ pricing }) {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader center label="Pricing" sub={pricing.sub} title={pricing.title} />
        <motion.div
          className={clsx(
            'mx-auto mt-16 grid gap-6',
            pricing.plans.length === 3 ? 'max-w-5xl md:grid-cols-3' : 'max-w-3xl md:grid-cols-2',
          )}
          initial="hidden"
          variants={staggerContainer}
          viewport={inViewOnce}
          whileInView="show"
        >
          {pricing.plans.map((plan) => (
            <motion.div
              className={clsx('relative rounded-3xl p-px', plan.highlight ? 'overflow-hidden' : '')}
              key={plan.name}
              variants={staggerItem}
            >
              {plan.highlight ? (
                // Rotating gradient border for the recommended plan
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                  style={{
                    animationDuration: '6s',
                    background: 'conic-gradient(from 0deg, transparent 0 55%, var(--accent) 75%, var(--accent-dark) 90%, transparent 100%)',
                  }}
                />
              ) : null}
              <div
                className={clsx(
                  'relative h-full rounded-[calc(1.5rem-1px)] bg-surface p-8',
                  plan.highlight ? 'shadow-soft' : 'border border-line',
                )}
              >
                {plan.badge || plan.highlight ? (
                  <span className="absolute right-6 top-6 rounded-full bg-[var(--accent-control)] px-3 py-1 text-[11px] font-bold text-white">
                    {plan.badge || 'Most popular'}
                  </span>
                ) : null}
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate">{plan.name}</p>
                <p className="mt-5 font-display text-5xl font-semibold tracking-[-0.03em] text-ink">
                  {plan.price} {plan.per ? <span className="text-base font-medium tracking-normal text-slate">{plan.per}</span> : null}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate">{plan.description}</p>
                <ul className="mt-7 grid gap-3 text-sm text-ink">
                  {plan.features.map((item) => (
                    <li className="flex items-start gap-2.5" key={item}>
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent-control)] text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {plan.note ? <p className="mt-6 text-xs leading-5 text-slate/90">{plan.note}</p> : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Closing({ site, isDark }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <AnimateIn className="relative isolate overflow-hidden rounded-[2rem] border border-[color:var(--accent-line)] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface" />
          <div aria-hidden="true" className="absolute -left-24 -top-24 -z-10 h-80 w-80 animate-drift rounded-full blur-[90px]" style={{ background: 'var(--accent)', opacity: 0.3 }} />
          <div aria-hidden="true" className="absolute -bottom-32 -right-16 -z-10 h-96 w-96 animate-drift rounded-full blur-[100px] [animation-delay:-7s]" style={{ background: 'var(--accent-dark)', opacity: 0.3 }} />
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
          <img
            alt=""
            className="mx-auto h-16 w-16 rounded-[26%] border border-line shadow-soft"
            src={(isDark && site.iconDark) || site.icon}
          />
          <h2 className="mx-auto mt-8 max-w-2xl text-balance font-display text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-6xl">
            {site.closing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate">{site.closing.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <DownloadButton site={site} size="lg" />
            {site.androidDownload ? <DownloadButton platform="android" site={site} size="lg" /> : null}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export function ProductOverviewPage() {
  const site = useOutletContext()
  const isDark = useTheme() === DARK_THEME

  return (
    <>
      <Seo
        description={site.seoDescription}
        image={site.socialPreview ?? site.icon}
        path={`/products/${site.slug}`}
        title={site.name}
      />

      <Hero isDark={isDark} site={site} />
      {site.facts?.length ? <Facts facts={site.facts} /> : null}
      {site.metrics?.length ? <Metrics metrics={site.metrics} /> : null}
      {site.screenshots?.length ? <Screenshots isDark={isDark} site={site} /> : null}
      {site.features?.length ? <Features site={site} /> : null}
      {site.howItWorks?.length ? <HowItWorks site={site} /> : null}
      {site.pricing ? <Pricing pricing={site.pricing} /> : null}
      {site.closing ? <Closing isDark={isDark} site={site} /> : null}
    </>
  )
}
