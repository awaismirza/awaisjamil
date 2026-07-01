import { ArrowUpRight, Smartphone } from 'lucide-react'

export function PersonalProjectCard({ project, featured = false }) {
  return (
    <a
      className={
        featured
          ? 'focus-ring group relative block overflow-hidden rounded-md border border-line bg-white p-6 shadow-line transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft'
          : 'focus-ring group relative block overflow-hidden rounded-md border border-line bg-mist p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-white hover:shadow-soft md:p-8'
      }
      href={project.href}
      rel="noreferrer"
      target="_blank"
    >
      <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-md bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
        <Smartphone size={19} />
      </div>

      <div className="pr-14">
        <p className="text-sm font-semibold text-coral">{project.type}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.01em]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-teal">{project.year}</p>
      </div>

      <p className="mt-5 text-base leading-7 text-slate">{project.summary}</p>

      {project.impact ? (
        <p className="mt-4 text-sm font-semibold leading-6 text-ink">
          {project.impact}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            className="rounded-md border border-line bg-white px-3 py-1.5 text-xs font-semibold text-slate group-hover:border-teal/30"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal">
        View website
        <ArrowUpRight
          className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          size={16}
        />
      </span>
    </a>
  )
}
