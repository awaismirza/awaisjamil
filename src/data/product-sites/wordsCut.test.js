import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
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

test('WordsCut app icon uses the master graphite/indigo identity and exists', () => {
  assert.equal(wordsCut.icon, '/wordscut/icon.svg')
  const iconPath = resolve('public', `.${wordsCut.icon}`)
  assert.ok(existsSync(iconPath), 'icon file exists')
  const content = readFileSync(iconPath, 'utf8')
  assert.doesNotMatch(content, /#7040a0/i, 'must not use superseded purple')
  assert.match(content, /#232A3E|#161B2B|#0C1020/i, 'uses graphite background stops')
  assert.match(content, /#5C6EF0|#8092FF/i, 'uses master violet/indigo gradient stops')
  assert.match(content, /<title[^>]*>WordsCut<\/title>/i, 'contains title')
})

test('WordsCut uses the restrained indigo/lavender accent system with WCAG contrast', () => {
  assert.equal(wordsCut.accent, '#4F5EE8')
  assert.equal(wordsCut.accentDark, '#3644B8')
  assert.equal(wordsCut.accentOnDark, '#9AA8FF')
  assert.equal(wordsCut.accentSoft, 'rgba(79, 94, 232, 0.12)')
  assert.equal(wordsCut.socialPreview, '/wordscut/social-preview.png')
  assert.doesNotMatch(JSON.stringify(wordsCut), /#7040A0|#B88DE2|#A879D2/i, 'superseded purples removed')
})
