import assert from 'node:assert/strict'
import test from 'node:test'
import { products } from '../data/products.js'
import { productSites } from '../data/product-sites/index.js'
import { getProductMeta, isExternalHref, isLiveProduct } from './productMeta.js'

test('portfolio cards borrow the icon and accent of their mini-site', () => {
  const card = products.find((product) => product.slug === 'wfhfocus')
  const meta = getProductMeta(card)
  assert.equal(meta.icon, productSites.wfhfocus.icon)
  assert.equal(meta.accent, productSites.wfhfocus.accent)
  assert.equal(meta.availability, 'On the App Store')
  assert.equal(getProductMeta(products.find((product) => product.slug === 'fasting-tide')).availability, null)
})

test('dark theme prefers the dark icon and on-dark accent when a product defines them', () => {
  const wfh = getProductMeta(products.find((product) => product.slug === 'wfhfocus'), true)
  assert.equal(wfh.icon, productSites.wfhfocus.iconDark)
  const wordsCut = getProductMeta(products.find((product) => product.slug === 'wordscut'), true)
  assert.equal(wordsCut.accent, productSites.wordscut.accentOnDark)
})

test('an explicit card icon wins and unknown products degrade gracefully', () => {
  assert.equal(getProductMeta({ icon: '/x.svg', slug: 'wordscut' }).icon, '/x.svg')
  assert.deepEqual(getProductMeta({ title: 'X', type: 'Tool' }), { icon: null, accent: null, category: 'Tool', availability: null })
})

test('link helpers classify product hrefs', () => {
  assert.equal(isExternalHref('https://example.com'), true)
  assert.equal(isExternalHref('/products/wordscut'), false)
  assert.equal(isLiveProduct({ href: '#' }), false)
  assert.equal(isLiveProduct({ href: '/products/wordscut' }), true)
})
