import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { wordsCut } from './wordsCut.js'

test('WordsCut landing content is opt-in, complete, and honest about development availability', () => {
  assert.equal(wordsCut.overview, 'wordscut')
  assert.equal(wordsCut.hero.headline, 'Edit the words.')
  assert.equal(wordsCut.hero.headlineAccent, 'Shape the video.')
  assert.equal(wordsCut.marketing.workflow.length, 3)
  assert.equal(wordsCut.marketing.visuals.length, 4)
  assert.ok(wordsCut.marketing.faqs.some(f => /wordscut/.test(f.a) && /scribe/.test(f.a)))
  assert.match(wordsCut.marketing.captureNote, /development/)
  assert.doesNotMatch(wordsCut.marketing.captureNote, /available now/i)
})

test('every marketing capture has dimensions, local assets, and privacy-reviewed provenance', () => {
  assert.ok(wordsCut.screenshots.length >= 7)
  const manifest=JSON.parse(readFileSync('public/wordscut/screenshots/manifest.json','utf8'))
  for (const shot of wordsCut.screenshots) {
    assert.ok(existsSync(`public${shot.src}`),shot.src)
    assert.ok(shot.width > 300 && shot.height > 200)
    const provenance=manifest.screenshots.find(s => s.filename === shot.src.split('/').pop())
    assert.equal(provenance?.privacyReview,'passed')
    assert.equal(provenance?.capture,'fresh native app')
    assert.match(provenance?.sourceCommit,/^[a-f0-9]{40}$/)
  }
})

test('WordsCut uses authoritative app identity and screenshot social preview', () => {
  assert.match(readFileSync('public/wordscut/icon.svg','utf8'),/WordsCut/)
  assert.ok(wordsCut.socialPreview)
  assert.ok(existsSync(`public${wordsCut.socialPreview}`))
})
