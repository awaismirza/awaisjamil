import { CheckCircle2 } from 'lucide-react'

export function ServiceCard({ service }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-line bg-white p-6 shadow-line md:p-8">
      <h3 className="font-display text-xl font-semibold leading-tight">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate">{service.summary}</p>

      <ul className="mt-6 grid gap-2">
        {service.features.map((feature) => (
          <li className="flex items-start gap-2.5 text-sm text-slate" key={feature}>
            <CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={15} strokeWidth={2} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
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
