import { ArrowUpRight, Smartphone } from 'lucide-react'
import { Spotlight } from './fx/Spotlight.jsx'

export function PersonalProjectCard({ project }) {
  return (
    <Spotlight as="article" className="flex h-full flex-col p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-coral">{project.type}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
            <a
              className='focus-ring rounded-sm after:absolute after:inset-0 after:content-[""]'
              href={project.href}
              rel="noreferrer"
              target="_blank"
            >
              {project.title}
            </a>
          </h3>
          <p className="mt-1 font-mono text-xs text-accent-ink">{project.year}</p>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent-ink transition group-hover/spot:bg-accent group-hover/spot:text-white">
          <Smartphone size={19} />
        </span>
      </div>

      <p className="mt-5 text-base leading-7 text-slate">{project.summary}</p>
      {project.impact ? <p className="mt-3 text-sm leading-6 text-ink/80">{project.impact}</p> : null}

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>

      <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-ink">
        View website
        <ArrowUpRight className="transition group-hover/spot:-translate-y-0.5 group-hover/spot:translate-x-0.5" size={16} />
      </span>
    </Spotlight>
  )
}
