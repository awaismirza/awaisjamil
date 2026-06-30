import { Footer } from '../components/Footer.jsx'
import { PersonalProjectCard } from '../components/PersonalProjectCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { personalProjects } from '../data/experience.js'

export function WorkPage() {
  return (
    <>
      <Seo
        title="Personal Projects"
        description="Personal iOS apps, open-source work, and side projects by Awais Jamil."
        path="/work"
      />
      <section className="section-shell py-16 sm:py-20">
        <p className="section-label">Personal projects</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
          iOS apps, open-source tools, and practical products built outside client work.
        </h1>
      </section>
      <section className="section-shell pb-20">
        <div className="grid gap-6">
          {personalProjects.length ? (
            personalProjects.map((project) => (
              <PersonalProjectCard key={project.title} project={project} />
            ))
          ) : (
            <div className="rounded-md border border-dashed border-line bg-mist p-6 md:p-8">
              <p className="text-base leading-7 text-slate">
                Personal project list is ready. Paste your iOS native apps and
                open-source projects into the{' '}
                <span className="font-semibold text-ink">personalProjects</span> array
                in <span className="font-semibold text-ink">experience.js</span>.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
