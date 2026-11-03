import assert from 'node:assert/strict'
import test from 'node:test'
import { experience } from './experience.js'
import { careerSummary, technicalStrengths, techStack, yearsOfExperience } from './expertise.js'
import { services } from './services.js'

test('years of experience counts from the earliest dated role', () => {
  const entries = [{ period: 'Jun 2026 — Present' }, { period: 'Apr 2016 — Present' }, { period: 'Previous' }]
  assert.equal(yearsOfExperience(entries, new Date('2026-10-29')), 10)
  assert.equal(yearsOfExperience([{ period: 'Previous' }]), 0)
  assert.ok(yearsOfExperience(experience) > 0)
})

test('expertise and service data carry the fields the redesigned pages render', () => {
  for (const card of careerSummary) {
    assert.ok(card.icon, `${card.title} has an icon`)
    assert.ok(card.description)
  }
  for (const group of technicalStrengths) assert.ok(group.skills.length, group.category)
  assert.ok(techStack.length > 0)
  for (const service of services) assert.ok(service.icon, `${service.title} has an icon`)
})
