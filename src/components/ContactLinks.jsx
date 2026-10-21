import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { site } from '../data/site.js'

const base =
  'focus-ring inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md px-5 text-sm font-semibold transition'

const styles = {
  light: {
    email: `${base} bg-ink text-white hover:bg-graphite dark:!bg-white dark:!text-ink`,
    phone: `${base} border border-line bg-white text-ink hover:border-ink dark:!border-white/15 dark:!bg-graphite dark:!text-white`,
  },
  dark: {
    email: `${base} bg-white text-ink hover:bg-white/90`,
    phone: `${base} border border-white/30 text-white hover:border-white`,
  },
}

export function ContactLinks({ variant = 'light', subject = site.consulting.emailSubject }) {
  const s = styles[variant]
  const phoneHref = site.phone ? `tel:${site.phone.replace(/[^+\d]/g, '')}` : null

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a className={s.email} href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>
        <Mail size={18} /> {site.email} <ArrowUpRight size={16} />
      </a>
      {phoneHref && (
        <a className={s.phone} href={phoneHref}>
          <Phone size={18} /> {site.phone}
        </a>
      )}
    </div>
  )
}
