import { Helmet } from 'react-helmet-async'
import { site } from '../data/site.js'

export function Seo({ title, description, path = '/' }) {
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | Senior Software Engineer`
  const canonical = new URL(path, site.domain).toString()
  const metaDescription =
    description ||
    'Awais Jamil is a Melbourne-based senior software engineer building polished web and mobile products.'

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
