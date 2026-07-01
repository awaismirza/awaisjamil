import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }) {
  const isLive = project.href && project.href !== '#'

  return (
    <article className="flex h-full flex-col rounded-md border border-line bg-white p-6 shadow-line transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-coral">{project.type}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-semibold text-teal">{project.year}</p>
        </div>
        {project.status ? (
          <span className="shrink-0 rounded-md border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
            {project.status}
          </span>
        ) : null}
      </div>

      <p className="mt-5 text-base leading-7 text-slate">{project.summary}</p>

      {project.impact ? (
        <p className="mt-4 text-sm font-semibold leading-6 text-ink">{project.impact}</p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            className="rounded-md border border-line bg-mist px-3 py-1.5 text-xs font-semibold text-slate"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        {isLive ? (
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:gap-3"
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            View website
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <span className="text-sm font-semibold text-slate/60">
            {project.status ?? 'Coming soon'}
          </span>
        )}
      </div>
    </article>
  )
}
