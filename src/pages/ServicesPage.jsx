import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { CTASection } from '../components/CTASection.jsx'
import { Footer } from '../components/Footer.jsx'
import { Marquee } from '../components/fx/Marquee.jsx'
import { PageHero, SectionHeading } from '../components/PageHero.jsx'
import { ServiceCard } from '../components/ServiceCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { techStack } from '../data/expertise.js'
import { processSteps, services } from '../data/services.js'
import { ease, inViewOnce, staggerContainer, staggerItem } from '../lib/animation.js'

function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section className="border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.85fr_1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading label="How I work" title="A practical, focused process from problem to launch." />
        </div>
        <ol className="relative grid gap-6" ref={ref}>
          <div aria-hidden="true" className="absolute bottom-6 left-7 top-6 w-px bg-line">
            <motion.div className="h-full origin-top bg-gradient-to-b from-accent to-violet" style={{ scaleY: fill }} />
          </div>
          {processSteps.map((step, index) => (
            <motion.li
              className="relative grid grid-cols-[3.5rem_1fr] gap-6"
              initial={{ opacity: 0, x: 30 }}
              key={step.title}
              transition={{ duration: 0.8, ease }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-canvas font-mono text-sm font-semibold text-accent-ink shadow-soft">
                0{index + 1}
              </span>
              <div className="card p-6">
                <p className="font-display text-xl font-semibold tracking-tight">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Software development services for web applications, iOS apps, MVPs, AI automation, APIs, cloud integration, and technical consulting."
        path="/services"
      />

      <PageHero
        description="I help with web applications, iOS apps, MVPs, AI workflows, API integration, and technical consulting — with a focus on clean interfaces, maintainable systems, and products people can actually use."
        label="Services"
        title="Software development services for practical products, polished interfaces, and reliable delivery."
      />

      <section className="pb-24">
        <motion.div
          className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={inViewOnce}
          whileInView="show"
        >
          {services.map((service, index) => (
            <motion.div className="h-full" key={service.title} variants={staggerItem}>
              <ServiceCard index={index} service={service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Process />

      <section className="py-24 sm:py-32">
        <div className="section-shell">
          <SectionHeading align="center" label="Technologies" title="Tools and technologies I work with" />
        </div>
        <div className="mt-14 grid gap-4">
          <Marquee
            duration={45}
            items={techStack}
            renderItem={(tech) => (
              <span className="font-display text-4xl font-semibold tracking-tight text-ink/80 sm:text-6xl">
                {tech} <span className="px-4 text-accent">/</span>
              </span>
            )}
          />
          <Marquee
            duration={55}
            items={[...techStack].reverse()}
            renderItem={(tech) => (
              <span className="font-serif text-4xl italic text-slate/60 sm:text-6xl">
                {tech} <span className="px-4 text-violet">✦</span>
              </span>
            )}
            reverse
          />
        </div>
      </section>

      <CTASection
        buttonHref="/contact"
        buttonText="Contact Me"
        description="Have an app, automation idea, or web product you want to build?"
        headline="Ready to start a project?"
      />

      <Footer />
    </>
  )
}
