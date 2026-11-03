import { AnimateIn } from './AnimateIn.jsx'
import { Button } from './Button.jsx'
import { Marquee } from './fx/Marquee.jsx'

export function CTASection({ headline, description, buttonText, buttonHref, label = 'Get in touch' }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <AnimateIn className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#07080a] px-6 py-16 text-white sm:px-12 sm:py-20">
          {/* Animated aurora behind the card copy */}
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-32 h-96 w-96 animate-drift rounded-full bg-[#2dd4bf]/40 blur-[100px]" />
            <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] animate-drift rounded-full bg-[#a78bfa]/40 blur-[110px] [animation-delay:-8s]" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                maskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 70%)',
              }}
            />
          </div>

          <div className="relative max-w-3xl">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#5eead4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_12px_#2dd4bf]" />
              {label}
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {headline}
            </h2>
            {description ? <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{description}</p> : null}
            <div className="mt-10">
              <Button href={buttonHref} variant="dark">
                {buttonText}
              </Button>
            </div>
          </div>

          <Marquee
            className="mt-14 -mx-6 sm:-mx-12"
            duration={30}
            items={['Agent harnesses', 'Skills', 'Guardrails', 'iOS apps', 'Web products', 'Developer tooling', 'Design systems']}
            renderItem={(item) => (
              <span className="font-display text-2xl font-semibold tracking-tight text-white/15 sm:text-3xl">
                {item} <span className="px-3 text-[#2dd4bf]/50">✦</span>
              </span>
            )}
          />
        </AnimateIn>
      </div>
    </section>
  )
}
