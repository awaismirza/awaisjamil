import { Check } from 'lucide-react'
import { Spotlight } from './fx/Spotlight.jsx'

export function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <Spotlight as="article" className="flex h-full flex-col p-6 md:p-8">
      <div className="flex items-center justify-between">
        {Icon ? (
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent-ink transition-transform duration-500 group-hover/spot:-rotate-6 group-hover/spot:scale-110">
            <Icon size={22} strokeWidth={1.8} />
          </span>
        ) : null}
        {index !== undefined ? (
          <span className="font-mono text-xs text-slate">{String(index + 1).padStart(2, '0')}</span>
        ) : null}
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold leading-tight tracking-tight">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate">{service.summary}</p>

      <ul className="mt-6 grid gap-2">
        {service.features.map((feature) => (
          <li className="flex items-start gap-2.5 text-sm text-ink/80" key={feature}>
            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-ink">
              <Check size={10} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {service.tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </Spotlight>
  )
}
