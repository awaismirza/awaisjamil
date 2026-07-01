import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

export function PageHero({ label, title, description, children }) {
  return (
    <section className="section-shell py-16 sm:py-20">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.7, ease }}
      >
        <p className="section-label">{label}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </motion.div>
    </section>
  )
}
