import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
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
      <PageHero
        label="Personal projects"
        title="iOS apps, open-source tools, and practical products built outside client work."
      />
      <section className="section-shell pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {personalProjects.length ? (
            personalProjects.map((project) => <PersonalProjectCard key={project.title} project={project} />)
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-mist/50 p-6 md:col-span-2 md:p-8">
              <p className="text-base leading-7 text-slate">
                Personal project list is ready. Paste your iOS native apps and open-source projects into the{' '}
                <span className="font-semibold text-ink">personalProjects</span> array in{' '}
                <span className="font-semibold text-ink">experience.js</span>.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
