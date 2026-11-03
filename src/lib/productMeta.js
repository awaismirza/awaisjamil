import { productSites } from '../data/product-sites/index.js'

// Portfolio cards (src/data/products.js) only carry card copy. When a card links
// to a registered mini-site, borrow that site's icon and accent so cards, menus
// and the mini-site share one identity without duplicating data.
export function getProductMeta(product, isDark = false) {
  const site = product.slug ? productSites[product.slug] : undefined
  return {
    icon: product.icon || (isDark && site?.iconDark) || site?.icon || null,
    accent: (isDark && site?.accentOnDark) || site?.accent || null,
    category: site?.category ?? product.type,
    availability: site?.download?.kind === 'app-store' && site.download.url ? 'On the App Store' : null,
  }
}

export function isExternalHref(href) {
  return Boolean(href?.startsWith('http'))
}

export function isLiveProduct(product) {
  return Boolean(product.href && product.href !== '#')
}
