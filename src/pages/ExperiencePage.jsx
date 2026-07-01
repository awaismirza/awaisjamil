import { motion } from 'framer-motion'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { CTASection } from '../components/CTASection.jsx'
import { ExperienceCard } from '../components/ExperienceSection.jsx'
import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Seo } from '../components/Seo.jsx'
import { staggerContainer, staggerItem } from '../lib/animation.js'
import { experience } from '../data/experience.js'

const careerSummary = [
  {
    title: 'Frontend Architecture',
    description:
      'Angular, React, component systems, design systems, and maintainable UI foundations.',
  },
  {
    title: 'Product Engineering',
    description:
      'Turning user needs and business requirements into polished, production-ready software.',
  },
  {
    title: 'Enterprise Systems',
    description:
      'Experience across banking, health tech, logistics, education, and energy platforms.',
  },
  {
    title: 'Full-Stack Delivery',
    description:
      'Comfortable across frontend, APIs, cloud infrastructure, CI/CD, and practical backend work.',
  },
]

const technicalStrengths = [
  { category: 'Frontend', skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'NX Monorepo'] },
  { category: 'Mobile', skills: ['Swift', 'SwiftUI', 'iOS', 'React Native', 'Ionic'] },
  { category: 'Backend', skills: ['Node.js', 'ASP.NET Core', 'FastifyJS', 'Java Spring', 'Python Django'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Elasticsearch'] },
]

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience"
        description="Professional software engineering experience across health tech, banking, logistics, education, energy, web platforms, and product engineering."
        path="/experience"
      />

      <PageHero
        description="A timeline of software engineering, leadership, and product delivery across serious software environments — from health-tech platforms and banking systems to logistics, education, energy management, and creator work."
        label="Experience"
        title="Product-minded engineering across health tech, banking, logistics, education, energy, and modern web platforms."
      />

      {/* Career summary cards */}
      <section className="bg-mist py-12">
        <div className="section-shell">
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-40px' }}
            whileInView="show"
          >
            {careerSummary.map((card) => (
              <motion.div
                className="rounded-md border border-line bg-white p-6 shadow-line"
                key={card.title}
                variants={staggerItem}
              >
                <h3 className="font-display text-base font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="timeline" className="scroll-mt-28 border-t border-line bg-white py-16 sm:py-20">
        <div className="section-shell">
          <AnimateIn>
            <p className="section-label">Timeline</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Roles and career history
            </h2>
          </AnimateIn>

          <motion.div
            className="mt-10 grid gap-5"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {experience.map((item) => (
              <motion.div key={`${item.company}-${item.role}`} variants={staggerItem}>
                <ExperienceCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical strengths */}
      <section className="border-t border-line bg-mist py-16 sm:py-20">
        <div className="section-shell">
          <AnimateIn>
            <p className="section-label">Technical strengths</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Tools and technologies
            </h2>
          </AnimateIn>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-40px' }}
            whileInView="show"
          >
            {technicalStrengths.map((group) => (
              <motion.div
                className="rounded-md border border-line bg-white p-6 shadow-line"
                key={group.category}
                variants={staggerItem}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-coral">
                  {group.category}
                </p>
                <ul className="mt-4 grid gap-2">
                  {group.skills.map((skill) => (
                    <li className="text-sm font-medium text-ink" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        buttonHref="/contact"
        buttonText="Get in touch"
        description="Looking for a senior engineer to lead a product, system, or frontend architecture? Let's talk."
        headline="Interested in working together?"
      />

      <Footer />
    </>
  )
}
