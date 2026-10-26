import { Helmet } from 'react-helmet-async'
import { site } from '../data/site.js'

export function Seo({ title, description, path = '/', image }) {
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
  const canonical = new URL(path, site.domain).toString()
  const metaDescription =
    description ||
    'Awais Jamil is a Melbourne-based AI lead and senior software engineer building agent harnesses, skills and developer tooling, plus polished web and mobile products.'
  const imageUrl = image ? new URL(image, site.domain).toString() : null

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
    </Helmet>
  )
}
