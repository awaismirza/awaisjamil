import { Download, ExternalLink } from 'lucide-react'
import { AnimateIn } from '../components/AnimateIn.jsx'
import { Footer } from '../components/Footer.jsx'
import { Magnetic } from '../components/fx/Magnetic.jsx'
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

      <PageHero label="Resume" title="Awais Jamil — AI Lead & Senior Software Engineer.">
        <Magnetic>
          <a
            className="focus-ring group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-canvas transition hover:shadow-glow"
            download
            href={resumeUrl}
          >
            <Download className="transition-transform group-hover:translate-y-0.5" size={16} strokeWidth={2.25} />
            Download PDF
          </a>
        </Magnetic>
        <Magnetic>
          <a
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface/70 px-6 text-sm font-semibold text-ink transition hover:bg-mist"
            href={resumeUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open in new tab <ExternalLink size={15} />
          </a>
        </Magnetic>
      </PageHero>

      <section className="pb-28">
        <div className="section-shell">
          <AnimateIn className="overflow-hidden rounded-3xl border border-line bg-surface shadow-soft" y={50}>
            <div className="flex h-11 items-center gap-2 border-b border-line bg-mist/60 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="mx-auto rounded-md bg-canvas/80 px-3 py-0.5 font-mono text-[11px] text-slate">
                Awais-Jamil-Resume.pdf
              </span>
            </div>
            <object
              className="h-[80vh] min-h-[560px] w-full bg-mist"
              data={`${resumeUrl}#view=FitH`}
              title="Awais Jamil resume"
              type="application/pdf"
            >
              <p className="p-6 text-sm text-slate">
                Your browser can&apos;t display the PDF inline.{' '}
                <a className="font-semibold text-accent-ink underline" href={resumeUrl}>
                  Download the resume instead
                </a>
                .
              </p>
            </object>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
