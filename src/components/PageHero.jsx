import { motion } from 'framer-motion'
import { ease } from '../lib/animation.js'
import { Backdrop } from './fx/Backdrop.jsx'
import { SplitWords } from './fx/SplitWords.jsx'

export function PageHero({ label, title, highlight, description, children, aside }) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <Backdrop intensity={0.8} />
      <div className={`section-shell ${aside ? 'grid items-end gap-12 lg:grid-cols-[1fr_auto]' : ''}`}>
        <div>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease }}
          >
            {label}
          </motion.p>
          <SplitWords
            className="mt-6 max-w-5xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl"
            delay={0.1}
            highlight={highlight}
            text={title}
          />
          {description ? (
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-slate"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
            >
              {description}
            </motion.p>
          ) : null}
          {children ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
            >
              {children}
            </motion.div>
          ) : null}
        </div>
        {aside ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 1, delay: 0.3, ease }}
          >
            {aside}
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}

export function SectionHeading({ label, title, description, action, align = 'left' }) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-3xl text-center'
          : 'flex flex-col justify-between gap-6 sm:flex-row sm:items-end'
      }
    >
      <div className={align === 'center' ? '' : 'max-w-3xl'}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {label}
        </motion.p>
        <SplitWordsInView
          className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl"
          text={title}
        />
        {description ? (
          <motion.p
            className={`mt-5 text-lg leading-8 text-slate ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {description}
          </motion.p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

// Same mask-reveal as SplitWords, but triggered when scrolled into view.
function SplitWordsInView({ text, className }) {
  const words = text.split(' ')
  return (
    <motion.h2
      aria-label={text}
      className={className}
      initial="hidden"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
      viewport={{ once: true, margin: '-60px' }}
      whileInView="show"
    >
      {words.map((word, index) => (
        <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.1em] align-top" key={`${word}-${index}`}>
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.9, ease } } }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </motion.h2>
  )
}
