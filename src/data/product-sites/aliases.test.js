import assert from 'node:assert/strict'
import test from 'node:test'
import { productAliases, productSites } from './index.js'

test('former slugs redirect to the current product slug', () => {
  assert.equal(productAliases.sayso, 'voice-alarm-pro')
})

test('an alias never shadows a live product slug', () => {
  for (const alias of Object.keys(productAliases)) {
    assert.equal(productSites[alias], undefined, `alias "${alias}" collides with a product slug`)
  }
})
