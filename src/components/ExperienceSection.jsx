import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, MapPin } from 'lucide-react'
import { useRef } from 'react'
import { experience } from '../data/experience.js'
import { ease } from '../lib/animation.js'
import { Button } from './Button.jsx'
import { Spotlight } from './fx/Spotlight.jsx'
import { SectionHeading } from './PageHero.jsx'

export function ExperienceCard({ item, compact = false }) {
  return (
    <Spotlight as="article" className="flex h-full flex-col p-6 md:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-coral">{item.type}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{item.role}</h3>
          <p className="mt-1 text-base font-medium text-ink/80">{item.company}</p>
        </div>
        <p className="shrink-0 rounded-full border border-line bg-mist px-3 py-1 font-mono text-xs text-accent-ink">
          {item.period}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate">
        <span className="inline-flex items-center gap-2">
          <MapPin size={14} /> {item.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <BriefcaseBusiness size={14} /> {item.workMode}
        </span>
      </div>

      <p className="mt-5 text-base leading-7 text-slate">{item.summary}</p>

      {compact ? null : (
        <ul className="mt-5 grid gap-2.5 text-sm leading-6 text-slate">
          {item.highlights.map((highlight) => (
            <li className="grid grid-cols-[1rem_1fr] gap-2" key={highlight}>
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--c-accent))]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {(compact ? item.tags.slice(0, 5) : item.tags).map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </Spotlight>
  )
}

// Vertical timeline whose spine fills in as the visitor scrolls through it.
export function ExperienceTimeline({ items, compact = false }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <div className="relative" ref={ref}>
      <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[calc(12rem+7px)]">
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-accent via-violet to-coral"
          style={{ scaleY: fill }}
        />
      </div>

      <ol className="grid gap-8">
        {items.map((item) => (
          <motion.li
            className="relative grid gap-4 pl-8 md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0"
            initial={{ opacity: 0, y: 40 }}
            key={`${item.company}-${item.role}`}
            transition={{ duration: 0.9, ease }}
            viewport={{ once: true, margin: '-80px' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="md:sticky md:top-28 md:self-start md:pr-8 md:text-right">
              <p className="font-mono text-xs text-accent-ink">{item.period}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{item.company}</p>
            </div>
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-accent/50 bg-canvas md:left-[12rem]"
              initial={{ scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ scale: 1 }}
            >
              <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_12px_rgb(var(--c-accent))]" />
            </motion.span>
            <div className="md:pl-8">
              <ExperienceCard compact={compact} item={item} />
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

export function ExperienceSection({ limit = 4 }) {
  const visibleExperience = experience.slice(0, limit)

  return (
    <section className="relative py-24 sm:py-32" id="experience">
      <div className="section-shell">
        <SectionHeading
          action={
            <Button href="/experience" variant="secondary">
              Full timeline
            </Button>
          }
          label="Experience"
          title="Recent experience across health tech, education, and product engineering."
        />
        <div className="mt-16">
          <ExperienceTimeline compact items={visibleExperience} />
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/experience" icon={false} variant="secondary">
            <span className="inline-flex items-center gap-2">
              View all experience <ArrowRight size={16} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
