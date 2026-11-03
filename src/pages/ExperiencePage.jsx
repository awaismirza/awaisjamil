import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { CTASection } from '../components/CTASection.jsx'
import { ExperienceTimeline } from '../components/ExperienceSection.jsx'
import { Footer } from '../components/Footer.jsx'
import { Spotlight } from '../components/fx/Spotlight.jsx'
import { Counter } from '../components/fx/Counter.jsx'
import { Magnetic } from '../components/fx/Magnetic.jsx'
import { PageHero, SectionHeading } from '../components/PageHero.jsx'
import { Seo } from '../components/Seo.jsx'
import { experience } from '../data/experience.js'
import { careerSummary, technicalStrengths, yearsOfExperience } from '../data/expertise.js'
import { inViewOnce, staggerContainer, staggerItem } from '../lib/animation.js'

function YearsBadge() {
  return (
    <div className="relative grid h-44 w-44 place-items-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-spin-slow rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, rgb(var(--c-accent)), rgb(var(--c-violet)), rgb(var(--c-coral)), rgb(var(--c-accent)))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
        }}
      />
      <div className="text-center">
        <p className="font-display text-6xl font-semibold tracking-tight">
          <Counter suffix="+" value={yearsOfExperience(experience)} />
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate">years shipping</p>
      </div>
    </div>
  )
}

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience"
        description="AI lead and senior software engineer: agent harnesses, skills and developer tooling, built on experience across health tech, banking, logistics, education, energy, and web platforms."
        path="/experience"
      />

      <PageHero
        aside={<YearsBadge />}
        description="Today I lead AI and agent-harness work: the agents, skills and guardrails that let engineering teams build with coding agents safely. It rests on a career of software engineering, leadership, and product delivery — from health-tech platforms and banking systems to logistics, education, energy management, and creator work."
        label="Experience"
        title="AI-led engineering, built on product delivery across health tech, banking, logistics, education, and energy."
      >
        <Magnetic>
          <a
            className="focus-ring group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface/70 px-6 text-sm font-semibold text-ink backdrop-blur transition hover:bg-mist"
            download
            href="/Awais-Jamil-Resume.pdf"
          >
            <Download className="transition-transform group-hover:translate-y-0.5" size={16} />
            Download resume (PDF)
          </a>
        </Magnetic>
      </PageHero>

      {/* Focus areas */}
      <section className="pb-20">
        <motion.div
          className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          variants={staggerContainer}
          viewport={inViewOnce}
          whileInView="show"
        >
          {careerSummary.map((card, index) => (
            <motion.div className="h-full" key={card.title} variants={staggerItem}>
              <Spotlight className="h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent-ink transition-transform duration-500 group-hover/spot:rotate-12">
                    <card.icon size={19} />
                  </span>
                  <span className="font-mono text-xs text-slate">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{card.description}</p>
              </Spotlight>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="scroll-mt-28 border-t border-line py-24 sm:py-32" id="timeline">
        <div className="section-shell">
          <SectionHeading label="Timeline" title="Roles and career history" />
          <div className="mt-16">
            <ExperienceTimeline items={experience} />
          </div>
        </div>
      </section>

      {/* Technical strengths */}
      <section className="border-t border-line bg-surface/40 py-24 sm:py-32">
        <div className="section-shell">
          <SectionHeading label="Technical strengths" title="Tools and technologies" />
          <motion.div
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            variants={staggerContainer}
            viewport={inViewOnce}
            whileInView="show"
          >
            {technicalStrengths.map((group) => (
              <motion.div className="h-full" key={group.category} variants={staggerItem}>
                <Spotlight className="h-full p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-coral">{group.category}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.skills.map((skill, index) => (
                      <motion.li
                        className="chip text-ink/80"
                        initial={{ opacity: 0, scale: 0.8 }}
                        key={skill}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, scale: 1 }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </Spotlight>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        buttonHref="/contact"
        buttonText="Get in touch"
        description="Need an agent harness, a faster engineering workflow, or a senior engineer to lead a product or system? Let's talk."
        headline="Interested in working together?"
      />

      <Footer />
    </>
  )
}
