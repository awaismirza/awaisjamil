import { Mail, Phone } from 'lucide-react'
import { site } from '../data/site.js'

const linkClass =
  'focus-ring inline-flex min-h-11 items-center gap-2.5 rounded-md px-3 text-sm font-semibold text-ink transition hover:text-teal dark:text-white'

export function ContractContact() {
  const phoneHref = site.phone ? `tel:${site.phone.replace(/[^+\d]/g, '')}` : null

  return (
    <div className="mt-8 rounded-lg border border-line bg-white p-4 shadow-line sm:max-w-xl dark:border-white/15 dark:bg-graphite">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal">
        <span className="h-2 w-2 rounded-full bg-teal" />
        Open for contract work
      </p>
      <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-2">
        <a className={linkClass} href={`mailto:${site.email}?subject=Contract%20work`}>
          <Mail className="text-teal" size={18} /> {site.email}
        </a>
        {phoneHref && (
          <a className={linkClass} href={phoneHref}>
            <Phone className="text-teal" size={18} /> {site.phone}
          </a>
        )}
      </div>
    </div>
  )
}
