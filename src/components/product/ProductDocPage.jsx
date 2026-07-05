import { useOutletContext } from 'react-router-dom'
import { Seo } from '../Seo.jsx'
import { InlineText } from './InlineText.jsx'

function Block({ block }) {
  if (block.h3) {
    return <h3 className="font-display text-lg font-semibold text-ink">{block.h3}</h3>
  }
  if (block.ul) {
    return (
      <ul className="grid gap-2">
        {block.ul.map((item) => (
          <li className="ml-5 list-disc" key={item}>
            <InlineText text={item} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p>
      <InlineText text={block.p} />
    </p>
  )
}

export function ProductDocPage({ kind }) {
  const site = useOutletContext()
  const doc = site[kind]
  const path = `/products/${site.slug}/${kind}`

  return (
    <>
      <Seo description={doc.seoDescription} path={path} title={`${site.name} — ${doc.title}`} />

      <section className="py-14 sm:py-20">
        <p className="section-label">{site.name}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
          {doc.title}
        </h1>
        {doc.lastUpdated ? (
          <p className="mt-4 text-sm font-semibold text-slate">Last updated: {doc.lastUpdated}</p>
        ) : null}

        {doc.summary ? (
          <div className="mt-8 max-w-3xl rounded-md border border-teal/30 bg-teal/5 p-6 text-base leading-7 text-slate">
            <span className="font-semibold text-teal">Plain-English summary: </span>
            <InlineText text={doc.summary} />
          </div>
        ) : null}

        {doc.sections.length >= 8 ? (
          <nav aria-label="Contents" className="mt-8 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate/70 dark:text-white/40">
              On this page
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
              {doc.sections.map((section, index) => (
                <a
                  className="focus-ring rounded-sm text-sm font-medium text-slate transition hover:text-teal dark:text-white/70"
                  href={`#section-${index + 1}`}
                  key={section.heading}
                >
                  {section.heading}
                </a>
              ))}
            </div>
          </nav>
        ) : null}

        <div className="mt-10 grid max-w-3xl gap-10">
          {doc.sections.map((section, index) => (
            <section className="scroll-mt-28 lg:scroll-mt-24" id={`section-${index + 1}`} key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
              <div className="mt-3 grid gap-4 text-base leading-7 text-slate">
                {section.blocks.map((block, blockIndex) => (
                  <Block block={block} key={blockIndex} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
