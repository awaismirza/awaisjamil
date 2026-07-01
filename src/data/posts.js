import usefulVelocity from '../content/posts/useful-velocity.md?raw'
import polishedSoftware from '../content/posts/polished-software.md?raw'
import privacyIos from '../content/posts/building-privacy-first-ios-apps.md?raw'
import driverLogbook from '../content/posts/from-uber-driving-to-driver-logbook.md?raw'
import localAi from '../content/posts/local-ai-tools-on-apple-silicon.md?raw'

const rawPosts = [usefulVelocity, polishedSoftware, privacyIos, driverLogbook, localAi]

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { meta: {}, body: source.trim() }
  }

  const meta = Object.fromEntries(
    match[1].split('\n').map((line) => {
      const [key, ...value] = line.split(':')
      return [key.trim(), value.join(':').trim()]
    }),
  )

  return { meta, body: match[2].trim() }
}

export const posts = rawPosts
  .map((post, index) => {
    const { meta, body } = parseFrontmatter(post)
    return {
      id: meta.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      order: index,
      ...meta,
      body,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))
