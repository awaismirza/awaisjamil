import { ArrowRight, BriefcaseBusiness, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { experience } from '../data/experience.js'

export function ExperienceCard({ item, compact = false }) {
  return (
    <article className={compact ? 'py-7' : 'rounded-md border border-line bg-white p-6 shadow-line md:p-8'}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-coral">{item.type}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{item.role}</h3>
          <p className="mt-1 text-base font-semibold text-ink">{item.company}</p>
        </div>
        <p className="shrink-0 text-sm font-semibold text-teal">{item.period}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate">
        <span className="inline-flex items-center gap-2">
          <MapPin size={15} />
          {item.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <BriefcaseBusiness size={15} />
          {item.workMode}
        </span>
      </div>

      <p className="mt-5 text-base leading-7 text-slate">{item.summary}</p>

      <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate">
        {item.highlights.map((highlight) => (
          <li className="grid grid-cols-[0.8rem_1fr] gap-3" key={highlight}>
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            className="rounded-md border border-line bg-mist px-3 py-1.5 text-xs font-semibold text-slate"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ExperienceSection({ limit = 4 }) {
  const visibleExperience = experience.slice(0, limit)

  return (
    <section id="experience" className="border-y border-line bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Recent experience across health tech, education, and product
              engineering.
            </h2>
          </div>
          <Link
            className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-md text-sm font-semibold text-teal"
            to="/experience"
          >
            View all experience <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {visibleExperience.map((item) => (
            <ExperienceCard item={item} key={`${item.company}-${item.role}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
