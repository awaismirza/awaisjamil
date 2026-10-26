import { Helmet } from 'react-helmet-async'
import { site } from '../data/site.js'

export function Seo({ title, description, path = '/', image, imageAlt }) {
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
  const canonical = new URL(path, site.domain).toString()
  const metaDescription =
    description ||
    'Awais Jamil is a Melbourne-based AI lead and senior software engineer building agent harnesses, skills and developer tooling, plus polished web and mobile products.'

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {image ? <meta property="og:image" content={new URL(image, site.domain).toString()} /> : null}
      {imageAlt ? <meta property="og:image:alt" content={imageAlt} /> : null}
      {image ? <meta name="twitter:image" content={new URL(image, site.domain).toString()} /> : null}
      {imageAlt ? <meta name="twitter:image:alt" content={imageAlt} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
