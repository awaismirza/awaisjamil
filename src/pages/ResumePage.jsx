import { Download } from 'lucide-react'
import { Footer } from '../components/Footer.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Seo } from '../components/Seo.jsx'

const resumeUrl = '/Awais-Jamil-Resume.pdf'

export function ResumePage() {
  return (
    <>
      <Seo
        title="Resume"
        description="Resume of Awais Jamil: AI lead, senior software engineer, and creator of native iOS apps on the Apple App Store."
        path="/resume"
      />

      <PageHero
        label="Resume"
        title="Awais Jamil — AI Lead & Senior Software Engineer."
      >
        <a
          className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:bg-graphite dark:!bg-white dark:!text-ink dark:hover:!bg-line"
          download
          href={resumeUrl}
        >
          <Download size={16} strokeWidth={2.25} />
          Download PDF
        </a>
      </PageHero>

      <section className="bg-white pb-20 dark:bg-transparent">
        <div className="section-shell">
          <object
            className="h-[80vh] min-h-[560px] w-full rounded-md border border-line bg-mist"
            data={`${resumeUrl}#view=FitH`}
            title="Awais Jamil resume"
            type="application/pdf"
          >
            <p className="p-6 text-sm text-slate">
              Your browser can't display the PDF inline.{' '}
              <a className="font-semibold text-teal underline" href={resumeUrl}>
                Download the resume instead
              </a>
              .
            </p>
          </object>
        </div>
      </section>

      <Footer />
    </>
  )
}
