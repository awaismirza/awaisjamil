import { ArrowRight, CheckCircle2, Code2, Layers3, PenLine } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { ExperienceSection } from '../components/ExperienceSection.jsx'
import { Footer } from '../components/Footer.jsx'
import { HeroWorkbench } from '../components/HeroWorkbench.jsx'
import { PersonalProjectCard } from '../components/PersonalProjectCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { personalProjects } from '../data/experience.js'
import { posts } from '../data/posts.js'
import { processSteps, services } from '../data/site.js'

const iconMap = [Layers3, Code2, PenLine, CheckCircle2]

export function HomePage() {
  return (
    <>
      <Seo />
      <section className="section-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.86fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
            I design and ship web and mobile products that feel sharp, useful,
            and built to last.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate">
            Senior software engineer in Melbourne, building React, mobile, and
            product systems for founders and teams.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/experience">View experience</Button>
            <Button href="/#contact" variant="secondary">
              Start a project
            </Button>
          </div>
        </motion.div>
        <HeroWorkbench />
      </section>

      <ExperienceSection />

      <section id="projects" className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Personal projects</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                iOS apps, open-source tools, and practical products built outside
                client work.
              </h2>
            </div>
            <Link
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal"
              to="/experience#personal-projects"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12">
            {personalProjects.length ? (
              <div className="grid gap-5 md:grid-cols-3">
                {personalProjects.map((project) => (
                  <PersonalProjectCard featured key={project.title} project={project} />
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-line bg-mist p-6">
                <p className="max-w-2xl text-base leading-7 text-slate">
                  Personal project list is ready. Add iOS apps and open-source
                  projects to <span className="font-semibold text-ink">personalProjects</span>{' '}
                  in <span className="font-semibold text-ink">experience.js</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="services" className="bg-mist py-16 sm:py-20">
        <div className="section-shell">
          <p className="section-label">Services</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = iconMap[index]
              return (
                <div
                  className="rounded-md border border-line bg-white p-6 shadow-line"
                  key={service.title}
                >
                  <Icon className="text-teal" size={24} strokeWidth={2} />
                  <h3 className="mt-8 font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate">{service.summary}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="section-label">Process</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Small enough to ship. Strong enough to trust.
            </h2>
          </div>
          <ol className="grid gap-5">
            {processSteps.map((step, index) => (
              <li
                className="grid grid-cols-[3rem_1fr] gap-5 border-b border-line pb-5"
                key={step}
              >
                <span className="font-display text-3xl font-semibold text-coral">
                  0{index + 1}
                </span>
                <p className="text-lg leading-8 text-slate">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="writing" className="border-t border-line bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="section-label">Writing</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Notes on product quality, speed, and software craft.
            </h2>
          </div>
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link
                className="group rounded-md border border-line bg-mist p-6 transition hover:border-ink hover:bg-white"
                key={post.id}
                to="/writing"
              >
                <p className="text-sm font-semibold text-coral">{post.date}</p>
                <h3 className="mt-3 flex items-center justify-between gap-4 font-display text-2xl font-semibold">
                  {post.title}
                  <ArrowRight
                    className="shrink-0 transition group-hover:translate-x-1"
                    size={18}
                  />
                </h3>
                <p className="mt-3 text-slate">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
