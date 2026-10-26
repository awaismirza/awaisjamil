import assert from 'node:assert/strict'
import test from 'node:test'
import { products } from './products.js'
import { productSites, productAliases } from './product-sites/index.js'
import { externalProductDestination } from '../lib/externalProducts.js'

test('WordsCut is an external product instead of a hosted mini-site',()=>{
 assert.equal(products.find(p=>p.slug==='wordscut').href,'https://wordscut.com')
 assert.equal(productSites.wordscut,undefined)
 assert.equal(productAliases.yusafcut,undefined)
})
test('old WordsCut and YusafCut links preserve legal destinations and query/hash',()=>{
 assert.equal(externalProductDestination('/products/wordscut'), 'https://wordscut.com/')
 assert.equal(externalProductDestination('/products/yusafcut/privacy','?from=app','#files'), 'https://wordscut.com/privacy?from=app#files')
 assert.equal(externalProductDestination('/products/wordscut/terms'), 'https://wordscut.com/terms')
 assert.equal(externalProductDestination('/products/wordscut/support'), 'https://wordscut.com/support')
 assert.equal(externalProductDestination('/products/wordscutter'),null)
 assert.equal(externalProductDestination('/products/freezerpal'),null)
})
