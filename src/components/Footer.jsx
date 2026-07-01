import { Mail, MapPin } from 'lucide-react'
import { site } from '../data/site.js'
import { Button } from './Button.jsx'
import { SocialLinks } from './SocialIcons.jsx'

export function Footer() {
  return (
    <footer id="contact" className="bg-ink py-16 text-white sm:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {site.availability}
          </h2>
          <div className="mt-8">
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="grid gap-5">
          <div className="flex items-center gap-3 text-white/75">
            <MapPin size={18} />
            <span>{site.location}</span>
          </div>
          <div className="flex items-center gap-3 text-white/75">
            <Mail size={18} />
            <span>{site.email}</span>
          </div>
          <Button href={`mailto:${site.email}`} variant="dark">
            Start a project
          </Button>
        </div>
      </div>
    </footer>
  )
}
