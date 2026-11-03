import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Clock, Copy, Mail, MapPin, Send } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { Footer } from '../components/Footer.jsx'
import { Spotlight } from '../components/fx/Spotlight.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Seo } from '../components/Seo.jsx'
import { SocialLinks } from '../components/SocialIcons.jsx'
import { contact } from '../data/contact.js'

function useLocalTime(timeZone) {
  const format = () =>
    new Intl.DateTimeFormat('en-AU', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone }).format(new Date())
  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])

  return time
}

function EmailCard() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <Spotlight className="p-6">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent-ink">
          <Mail size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">Email</p>
          <a className="focus-ring mt-1 block truncate rounded-sm font-display text-lg font-semibold hover:text-accent-ink" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
        <button
          aria-label={copied ? 'Email address copied' : 'Copy email address'}
          className="focus-ring relative z-10 grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-line text-ink transition hover:bg-mist"
          onClick={copyEmail}
          type="button"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              initial={{ scale: 0.5, opacity: 0 }}
              key={copied ? 'done' : 'copy'}
              transition={{ duration: 0.18 }}
            >
              {copied ? <Check className="text-accent-ink" size={16} /> : <Copy size={16} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
      <p aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </p>
    </Spotlight>
  )
}

function Field({ label, error, children, id }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-ink" htmlFor={id}>
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error ? (
          <motion.p
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-1.5 text-sm text-coral"
            exit={{ opacity: 0, height: 0 }}
            id={`${id}-error`}
            initial={{ opacity: 0, height: 0 }}
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

const inputClass =
  'w-full rounded-2xl border bg-mist/60 px-4 py-3.5 text-base text-ink placeholder:text-slate/60 transition focus:bg-surface focus:outline-none focus:ring-4'

// No backend: the form drafts an email in the visitor's own mail app.
function MessageForm() {
  const baseId = useId()
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(field) {
    return (event) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please add your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please add an email address I can reply to.'
    if (values.message.trim().length < 10) next.message = 'Tell me a little more about the project.'
    setErrors(next)
    if (Object.keys(next).length) return

    const subject = `Project enquiry from ${values.name.trim()}`
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldClass = (field) =>
    clsx(inputClass, errors[field] ? 'border-coral/60 focus:ring-coral/15' : 'border-line focus:border-accent focus:ring-accent/15')

  return (
    <form className="card relative overflow-hidden p-6 md:p-10" noValidate onSubmit={handleSubmit}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet/15 blur-3xl" />
      <h2 className="relative font-display text-3xl font-semibold tracking-tight">Send a message</h2>
      <p className="relative mt-2 text-sm leading-6 text-slate">
        This drafts an email in your mail app — nothing is stored on this site. You can also reach me on{' '}
        <a className="font-semibold text-accent-ink hover:underline" href={contact.links.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        .
      </p>

      <div className="relative mt-8 grid gap-5 sm:grid-cols-2">
        <Field error={errors.name} id={`${baseId}-name`} label="Name">
          <input
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className={fieldClass('name')}
            id={`${baseId}-name`}
            onChange={update('name')}
            placeholder="Your name"
            type="text"
            value={values.name}
          />
        </Field>
        <Field error={errors.email} id={`${baseId}-email`} label="Email">
          <input
            aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={fieldClass('email')}
            id={`${baseId}-email`}
            inputMode="email"
            onChange={update('email')}
            placeholder="you@company.com"
            type="email"
            value={values.email}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field error={errors.message} id={`${baseId}-message`} label="Project details">
            <textarea
              aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
              aria-invalid={Boolean(errors.message)}
              className={clsx(fieldClass('message'), 'resize-none')}
              id={`${baseId}-message`}
              onChange={update('message')}
              placeholder="What are you building, and where could I help?"
              rows={6}
              value={values.message}
            />
          </Field>
        </div>
      </div>

      <button
        className="focus-ring group relative mt-8 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-ink text-sm font-semibold text-canvas transition hover:shadow-glow"
        type="submit"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative">Draft email</span>
        <Send className="relative transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1" size={16} />
      </button>

      <AnimatePresence>
        {sent ? (
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 text-sm text-accent-ink"
            initial={{ opacity: 0, y: 8 }}
            role="status"
          >
            <Check size={15} /> Your mail app should open with the message ready to send.
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  )
}

export function ContactPage() {
  const time = useLocalTime(contact.timeZone)

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

      <section className="pb-28">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimateIn className="grid content-start gap-4">
            <EmailCard />

            <Spotlight className="p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet/10 text-violet">
                  <MapPin size={20} />
                </span>
                <div className="flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">Location</p>
                  <p className="mt-1 font-display text-lg font-semibold">{contact.location}</p>
                </div>
                <div className="text-right">
                  <p className="flex items-center justify-end gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
                    <Clock size={12} /> Local
                  </p>
                  <p className="mt-1 font-mono text-sm tabular-nums text-ink">{time}</p>
                </div>
              </div>
            </Spotlight>

            <Spotlight className="p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-coral">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-coral opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-coral" />
                </span>
                Availability
              </p>
              <p className="mt-3 text-base leading-7 text-ink/80">{contact.availability}</p>
            </Spotlight>

            <Spotlight className="p-6">
              <p className="text-sm font-semibold">Find me online</p>
              <div className="mt-4">
                <SocialLinks fullRow />
              </div>
              <a
                className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-accent-ink hover:underline"
                href="/Awais-Jamil-Resume.pdf"
              >
                Download resume <ArrowUpRight size={14} />
              </a>
            </Spotlight>
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <MessageForm />
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
