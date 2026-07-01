import { motion } from 'framer-motion'
import { CTASection } from '../components/CTASection.jsx'
import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { ServiceCard } from '../components/ServiceCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { staggerContainer, staggerItem } from '../lib/animation.js'
import { services, processSteps } from '../data/services.js'

const techStack = [
  'React', 'Angular', 'TypeScript', 'JavaScript', 'Node.js',
  'Swift', 'SwiftUI', 'iOS', 'macOS',
  'ASP.NET Core', 'FastifyJS', 'REST APIs',
  'AWS', 'Docker', 'CI/CD',
  'NX Monorepo', 'Design Systems', 'PostgreSQL',
]

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

      {/* Services grid */}
      <section className="bg-white py-12">
        <div className="section-shell">
          <motion.div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {services.map((service) => (
              <motion.div className="h-full" key={service.title} variants={staggerItem}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-mist py-16 sm:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <AnimateIn>
            <p className="section-label">How I work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              A practical, focused process from problem to launch.
            </h2>
          </AnimateIn>
          <motion.ol
            className="grid gap-5"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {processSteps.map((step, index) => (
              <motion.li
                className="grid grid-cols-[3rem_1fr] gap-5 border-b border-line pb-5 last:border-0 last:pb-0"
                key={step.title}
                variants={staggerItem}
              >
                <span className="font-display text-3xl font-semibold text-coral">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-line bg-white py-16 sm:py-20">
        <div className="section-shell">
          <AnimateIn>
            <p className="section-label">Technologies</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em]">
              Tools and technologies I work with
            </h2>
          </AnimateIn>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-40px' }}
            whileInView="show"
          >
            {techStack.map((tech) => (
              <motion.span
                className="rounded-md border border-line bg-mist px-4 py-2 text-sm font-semibold text-ink"
                key={tech}
                variants={staggerItem}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
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
