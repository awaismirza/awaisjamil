import { Mail, MapPin } from 'lucide-react'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Seo } from '../components/Seo.jsx'
import { SocialLinks } from '../components/SocialIcons.jsx'
import { contact } from '../data/contact.js'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Awais Jamil for software engineering, product development, web applications, iOS apps, and AI automation work."
        path="/contact"
      />

      <PageHero
        description="Whether it is a web application, iOS app, AI workflow, or product idea, I'm happy to connect and discuss how to approach it."
        label="Contact"
        title="Let's talk about software, products, apps, or automation."
      />

      <section className="bg-white pb-20">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <AnimateIn className="grid gap-4">
            <div className="rounded-md border border-line bg-mist p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white shadow-line">
                  <Mail className="text-teal" size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">Email</p>
                  <a
                    className="mt-0.5 text-sm font-semibold text-ink transition hover:text-teal"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-line bg-mist p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white shadow-line">
                  <MapPin className="text-teal" size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">Location</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-line bg-white p-6 shadow-line">
              <p className="text-sm font-semibold text-coral">Availability</p>
              <p className="mt-2 text-base leading-7 text-slate">{contact.availability}</p>
            </div>

            <div className="rounded-md border border-line bg-mist p-6">
              <p className="mb-4 text-sm font-semibold text-ink">Find me online</p>
              <SocialLinks variant="footer" />
            </div>
          </AnimateIn>

          {/* Contact form placeholder */}
          <AnimateIn delay={0.1}>
            <div className="rounded-md border border-line bg-white p-6 shadow-line md:p-8">
              <h2 className="font-display text-2xl font-semibold">Send a message</h2>
              <p className="mt-2 text-sm leading-6 text-slate">
                For now, the fastest way to reach me is by email or LinkedIn.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-md border border-line bg-mist px-4 py-3 text-sm text-ink placeholder-slate/50 transition focus:border-ink focus:bg-white focus:outline-none"
                    id="name"
                    placeholder="Your name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-md border border-line bg-mist px-4 py-3 text-sm text-ink placeholder-slate/50 transition focus:border-ink focus:bg-white focus:outline-none"
                    id="email"
                    placeholder="your@email.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full resize-none rounded-md border border-line bg-mist px-4 py-3 text-sm text-ink placeholder-slate/50 transition focus:border-ink focus:bg-white focus:outline-none"
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                  />
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-4 rounded-md border border-teal/30 bg-teal/5 px-4 py-3 text-sm text-slate">
                  For now, the fastest way to reach me is{' '}
                  <a
                    className="font-semibold text-teal hover:underline"
                    href={`mailto:${contact.email}`}
                  >
                    by email
                  </a>{' '}
                  or{' '}
                  <a
                    className="font-semibold text-teal hover:underline"
                    href={contact.links.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
                <a
                  className="focus-ring inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:bg-graphite"
                  href={`mailto:${contact.email}`}
                >
                  Send via email
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
