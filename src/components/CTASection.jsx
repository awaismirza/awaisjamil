import { AnimateIn } from './AnimateIn.jsx'
import { Button } from './Button.jsx'

export function CTASection({ headline, description, buttonText, buttonHref }) {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="section-shell">
        <AnimateIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {headline}
          </h2>
          {description ? (
            <p className="mt-5 text-lg leading-8 text-white/70">{description}</p>
          ) : null}
          <div className="mt-8">
            <Button href={buttonHref} variant="dark">
              {buttonText}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
