import { motion } from 'framer-motion'
import { CTASection } from '../components/CTASection.jsx'
import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { Seo } from '../components/Seo.jsx'
import { staggerContainer, staggerItem } from '../lib/animation.js'
import { projects } from '../data/projects.js'

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        description="Personal projects and products by Awais Jamil, including iOS apps, local AI tools, open-source work, and practical software experiments."
        path="/projects"
      />

      <PageHero
        description="A collection of products and experiments built around privacy, productivity, local-first workflows, finance, faith, and creator tooling."
        label="Projects"
        title="iOS apps, open-source tools, and practical products built outside client work."
      />

      <section className="bg-white py-12 pb-20">
        <div className="section-shell">
          <motion.div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-60px' }}
            whileInView="show"
          >
            {projects.map((project) => (
              <motion.div className="h-full" key={project.title} variants={staggerItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        buttonHref="/contact"
        buttonText="Contact Me"
        description="Looking to build an iOS app, web product, or automation tool? I'm happy to discuss scope and approach."
        headline="Have a project idea? Let's talk."
      />

      <Footer />
    </>
  )
}
