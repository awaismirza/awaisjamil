// Keep published app/legal links working after a product moves off the portfolio.
export function externalProductDestination(pathname, search = '', hash = '') {
  const match = pathname.match(/^\/products\/(?:wordscut|yusafcut)(?:\/(privacy|terms|support))?\/?$/)
  return match ? `https://wordscut.com/${match[1] || ''}${search}${hash}` : null
}
