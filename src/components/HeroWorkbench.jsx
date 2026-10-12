import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone, Smartphone, TerminalSquare } from 'lucide-react'
import { site } from '../data/site.js'

const loop = { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }

export function HeroWorkbench() {
  const reduce = useReducedMotion()
  const phoneHref = site.phone ? `tel:${site.phone.replace(/[^+\d]/g, '')}` : null
  const barWidths = ['72%', '48%', '60%']

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-xl border border-line bg-mist shadow-soft lg:max-w-none dark:border-white/15"
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Illustration (decorative) */}
      <div aria-hidden="true" className="relative aspect-[16/11]">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply dark:opacity-35 dark:mix-blend-screen"
          decoding="async"
          src="/hero-workbench-bg.png"
        />

        <motion.div
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          className="absolute left-[6%] top-[9%] w-[72%] overflow-hidden rounded-lg border border-line bg-white shadow-soft"
          transition={{ ...loop, duration: 6 }}
        >
          <div className="flex h-8 items-center gap-1.5 border-b border-line px-3 sm:h-9">
            <span className="h-2 w-2 rounded-full bg-coral" />
            <span className="h-2 w-2 rounded-full bg-[#f2c94c]" />
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="ml-2 truncate text-[10px] font-semibold text-slate sm:text-xs">
              product-system.jsx
            </span>
            <TerminalSquare className="ml-auto text-teal" size={16} />
          </div>
          <div className="grid gap-2.5 p-3 sm:p-4">
            {barWidths.map((w, i) => (
              <motion.div
                animate={reduce ? { width: w } : { width: ['12%', w, w, '12%'] }}
                className="h-2 rounded bg-ink/80 first:bg-ink sm:h-2.5"
                key={w}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.35, ease: 'easeOut' }}
              />
            ))}
            <div className="mt-1 grid grid-cols-5 gap-2">
              <div className="col-span-3 h-14 rounded-md bg-ink sm:h-20" />
              <div className="relative col-span-2 h-14 overflow-hidden rounded-md border border-line sm:h-20">
                <motion.div
                  animate={reduce ? undefined : { y: ['100%', '0%', '0%', '100%'] }}
                  className="absolute inset-x-2 bottom-2 top-4 rounded bg-teal/20"
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phone with an email notification that keeps arriving */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -7, 0] }}
          className="absolute bottom-[7%] right-[6%] w-[31%] min-w-[104px] rounded-[1.4rem] border border-ink/15 bg-white p-1.5 shadow-soft"
          transition={{ ...loop, duration: 7 }}
        >
          <div className="mx-auto h-1.5 w-8 rounded-full bg-ink/80" />
          <div className="grid gap-2 p-2.5">
            <Smartphone className="text-coral" size={16} />
            <div className="h-2 w-3/4 rounded bg-ink" />
            <div className="h-2 w-full rounded bg-slate/25" />
            <motion.div
              animate={reduce ? undefined : { opacity: [0, 1, 1, 0], y: [10, 0, 0, -6], scale: [0.95, 1, 1, 0.98] }}
              className="flex items-center gap-1.5 rounded-md bg-teal px-2 py-1.5 text-[9px] font-bold leading-tight text-white shadow-soft"
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeOut' }}
            >
              <Mail size={11} /> {site.consulting.notification}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Contact panel */}
      <div className="relative border-t border-line bg-white p-4 sm:p-5 dark:bg-graphite dark:border-white/15">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal">
          <span className="relative flex h-2.5 w-2.5">
            {!reduce && (
              <motion.span
                animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                className="absolute inset-0 rounded-full bg-teal"
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
            )}
            <span className="relative h-2.5 w-2.5 rounded-full bg-teal" />
          </span>
          {site.consulting.label}
        </p>
        <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink dark:text-white">
          {site.consulting.punchline}{' '}
          <span className="font-medium text-slate dark:text-white/70">{site.consulting.pitch}</span>
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <motion.a
            className="focus-ring group inline-flex min-h-12 flex-1 items-center justify-between gap-3 rounded-md bg-ink px-4 text-sm font-semibold text-white"
            href={`mailto:${site.email}?subject=${encodeURIComponent(site.consulting.emailSubject)}`}
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <Mail size={18} /> <span className="truncate">{site.email}</span>
            </span>
            <ArrowUpRight className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
          </motion.a>
          {phoneHref && (
            <motion.a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-line px-4 text-sm font-semibold text-ink dark:border-white/25 dark:text-white"
              href={phoneHref}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <Phone className="text-teal" size={18} /> {site.phone}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
