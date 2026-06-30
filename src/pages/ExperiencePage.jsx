import { ExperienceCard } from '../components/ExperienceSection.jsx'
import { Footer } from '../components/Footer.jsx'
import { PersonalProjectCard } from '../components/PersonalProjectCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { experience, personalProjects } from '../data/experience.js'

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience"
        description="Awais Jamil's engineering experience across health tech, finance, logistics, education, and product work."
        path="/experience"
      />

      <section className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <aside className="lg:sticky lg:top-28">
          <p className="section-label">Experience</p>
          <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
            Product-minded engineering across serious software environments.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate">
            A timeline of leadership, software engineering, creator work, and
            product delivery across health tech, banking, logistics, education,
            energy, and web application systems.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 border-y border-line py-6">
            <a className="group rounded-md p-3 transition hover:bg-mist" href="#timeline">
              <p className="font-display text-4xl font-semibold">{experience.length}</p>
              <p className="mt-1 text-sm font-semibold text-slate">
                Experience entries
              </p>
            </a>
            <a
              className="group rounded-md p-3 transition hover:bg-mist"
              href="#personal-projects"
            >
              <p className="font-display text-4xl font-semibold">
                {personalProjects.length}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate">
                Personal projects
              </p>
            </a>
          </div>

          <nav className="mt-6 grid gap-2 text-sm font-semibold">
            <a
              className="focus-ring rounded-md border border-line bg-white px-4 py-3 text-ink transition hover:border-ink"
              href="#timeline"
            >
              Experience timeline
            </a>
            <a
              className="focus-ring rounded-md border border-line bg-white px-4 py-3 text-ink transition hover:border-ink"
              href="#personal-projects"
            >
              Personal projects
            </a>
          </nav>
        </aside>

        <div className="grid gap-12">
          <section id="timeline" className="scroll-mt-28">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="section-label">Timeline</p>
                <h2 className="mt-3 font-display text-3xl font-semibold">
                  Roles and creator work
                </h2>
              </div>
            </div>
            <div className="grid gap-5">
              {experience.map((item) => (
                <ExperienceCard item={item} key={`${item.company}-${item.role}`} />
              ))}
            </div>
          </section>

          <section id="personal-projects" className="scroll-mt-28">
            <p className="section-label">Personal projects</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              iOS apps and open-source work
            </h2>
            <div className="mt-6 grid gap-5">
              {personalProjects.length ? (
                personalProjects.map((project) => (
                  <PersonalProjectCard key={project.title} project={project} />
                ))
              ) : (
                <div className="rounded-md border border-dashed border-line bg-mist p-6 md:p-8">
                  <p className="text-base leading-7 text-slate">
                    Personal project list is ready. Paste your iOS native apps and
                    open-source projects into the{' '}
                    <span className="font-semibold text-ink">personalProjects</span>{' '}
                    array in <span className="font-semibold text-ink">experience.js</span>.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  )
}
