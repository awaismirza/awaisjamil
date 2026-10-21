import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'
import { wordsCut } from './wordsCut.js'

test('WordsCut no longer sends visitors to the retired distribution repository', () => {
  assert.doesNotMatch(JSON.stringify(wordsCut), /github\.io\/wordscut|github\.com\/awaismirza\/wordscut(?:["/])/)
  assert.equal(wordsCut.facts.find((fact) => fact.label === 'Latest Mac build').value, '1.0.0')
})

test('without a configured checkout, WordsCut offers contact rather than a fake purchase', () => {
  assert.match(wordsCut.download.url, /^mailto:/)
  assert.doesNotMatch(wordsCut.download.label, /buy|download/i)
  assert.match(wordsCut.terms.summary, /earlier 1\.0\.0 release remains subject to its existing licence/)
})

test('migrated WordsCut screenshots and earlier-release licence remain available', () => {
  for (const shot of wordsCut.screenshots) assert.ok(existsSync(resolve('public', `.${shot.src}`)), shot.src)
  assert.ok(existsSync('public/wordscut/legacy-AGPL-3.0.txt'))
})
