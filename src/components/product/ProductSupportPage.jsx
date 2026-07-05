import { ExternalLink, Mail } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
import { Seo } from '../Seo.jsx'
import { InlineText } from './InlineText.jsx'

export function ProductSupportPage() {
  const site = useOutletContext()
  const { support } = site

  return (
    <>
      <Seo
        description={`Get help with ${site.name} — frequently asked questions and support contact.`}
        path={`/products/${site.slug}/support`}
        title={`${site.name} — Support`}
      />

      <section className="py-14 sm:py-20">
        <p className="section-label">{site.name}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
          Support
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate">{support.intro}</p>

        <div className="mt-8 max-w-xl rounded-md border border-line bg-white p-6 shadow-line">
          <p className="text-sm font-semibold text-slate">Email support</p>
          <a
            className="focus-ring mt-2 inline-flex items-center gap-2 rounded-sm font-display text-xl font-semibold text-teal hover:underline"
            href={`mailto:${support.email}?subject=${encodeURIComponent(`${site.name} support`)}`}
          >
            <Mail size={19} /> {support.email}
          </a>
          {support.checklist?.length ? (
            <>
              <p className="mt-5 text-sm font-semibold text-ink">When contacting support, include:</p>
              <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-slate">
                {support.checklist.map((item) => (
                  <li className="ml-5 list-disc" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>

        {support.links?.length ? (
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            {support.links.map((link) => (
              <a
                className="focus-ring inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-teal hover:underline"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>
        ) : null}

        {support.faqs?.length ? (
          <div className="mt-12 grid max-w-3xl gap-8">
            <h2 className="font-display text-2xl font-semibold text-ink">Frequently asked questions</h2>
            {support.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-display text-lg font-semibold text-ink">{faq.q}</h3>
                <p className="mt-2 text-base leading-7 text-slate">
                  <InlineText text={faq.a} />
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </>
  )
}
