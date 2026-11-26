import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { productSites } from '../src/data/product-sites/index.js'
import { site } from '../src/data/site.js'

const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
const escape = (text) => text.replace(/[&<>"']/g, (character) => entities[character])

function inline(text) {
  return escape(text).replace(/\[([^\]]+)\]\(((?:https:\/\/|mailto:|\/(?!\/))[^)]+)\)/g, '<a class="underline" href="$2">$1</a>')
}

function sections(document) {
  return document.sections.map(({ heading, blocks }) =>
    `<section class="my-6"><h2 class="text-xl font-semibold">${escape(heading)}</h2>${blocks.map((block) => {
      if (block.p) return `<p class="mt-3">${inline(block.p)}</p>`
      if (block.h3) return `<h3 class="mt-3 font-semibold">${escape(block.h3)}</h3>`
      return `<ul class="mt-3 list-disc pl-6">${block.ul.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`
    }).join('')}</section>`,
  ).join('')
}

function pages(product) {
  const faqs = product.support.faqs.map(({ q, a }) =>
    `<h2 class="mt-6 text-xl font-semibold">${escape(q)}</h2><p class="mt-3">${inline(a)}</p>`,
  ).join('')
  return [
    { route: '', label: 'Overview', title: product.name, description: product.seoDescription, body: `<p class="mt-3">${escape(product.hero.sub)}</p>` },
    ...['privacy', 'terms'].map((route) => {
      const document = product[route]
      return {
        route,
        label: document.title,
        title: document.title,
        description: document.seoDescription,
        body: `<p class="mt-3">${escape(document.summary)}</p><p class="mt-3">Last updated ${escape(document.lastUpdated)}</p>${sections(document)}`,
      }
    }),
    { route: 'support', label: 'Support', title: 'Support', description: `Get help with ${product.name}.`, body: `<p class="mt-3">${escape(product.support.intro)}</p>${faqs}` },
  ]
}

export function directProductPages() {
  return {
    name: 'direct-product-pages',
    apply: 'build',
    writeBundle({ dir }, bundle) {
      const shell = bundle['index.html'].source
      for (const product of Object.values(productSites).filter((item) => item.directPages)) {
        const base = `/products/${product.slug}`
        const entries = pages(product)
        const pathFor = (route) => route ? `${base}/${route}` : base
        const nav = entries.map(({ route, label }) => `<a class="mr-4 underline" href="${pathFor(route)}">${escape(label)}</a>`).join('')
        const email = escape(product.support.email)

        for (const page of entries) {
          const title = escape(page.route ? `${product.name} — ${page.title}` : product.name)
          const path = pathFor(page.route)
          const canonical = escape(new URL(path, site.domain).href)
          const content = `<main class="section-shell py-12">
  <nav class="mb-6" aria-label="${escape(product.name)}">${nav}</nav>
  <h1 class="text-4xl font-semibold">${title}</h1>
  ${page.body}
  ${page.route === 'support' ? `<p class="mt-6"><a class="underline" href="mailto:${email}">${email}</a></p>` : ''}
</main>`
          const html = shell
            .replace(/<title>[^<]*<\/title>/, () => `<title>${title} | ${escape(site.name)}</title>`)
            .replace(/<meta name="description"\s+content="[^"]*"\s*\/>/, () =>
              `<meta data-rh="true" name="description" content="${escape(page.description)}" />\n  <link data-rh="true" rel="canonical" href="${canonical}" />`,
            )
            .replace('<div id="root"></div>', () => `<div id="root"><noscript>${content}</noscript></div>`)
          const file = join(dir, path.slice(1), 'index.html')
          mkdirSync(dirname(file), { recursive: true })
          writeFileSync(file, html)
        }
      }
    },
  }
}
