import { ArrowUpRight } from 'lucide-react'
import { Footer } from '../components/Footer.jsx'
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
            <article
              className="grid gap-8 rounded-md border border-line bg-white p-6 shadow-line md:grid-cols-[0.7fr_1fr] md:p-8"
              key={project.title}
            >
              <div>
                <p className="text-sm font-semibold text-coral">{project.type}</p>
                <h2 className="mt-3 font-display text-3xl font-semibold">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate">{project.year}</p>
              </div>
              <div>
                <p className="text-lg leading-8 text-slate">{project.summary}</p>
                <p className="mt-5 font-semibold text-ink">{project.impact}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-md border border-line bg-mist px-3 py-2 text-sm font-semibold text-slate"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-teal"
                  href="mailto:hello@awaisjamil.com"
                >
                  Discuss similar work <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
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
