import { Footer } from '../components/Footer.jsx'
import { Seo } from '../components/Seo.jsx'
import { posts } from '../data/posts.js'

function MarkdownBody({ body }) {
  return body.split('\n\n').map((paragraph) => (
    <p className="mt-5 text-lg leading-8 text-slate" key={paragraph}>
      {paragraph}
    </p>
  ))
}

export function WritingPage() {
  return (
    <>
      <Seo
        title="Writing"
        description="Writing by Awais Jamil on product engineering and software quality."
        path="/writing"
      />
      <section className="section-shell py-16 sm:py-20">
        <p className="section-label">Writing</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
          Practical notes on building products with useful velocity.
        </h1>
      </section>
      <section className="section-shell grid gap-6 pb-20">
        {posts.map((post) => (
          <article className="rounded-md border border-line bg-white p-6 md:p-8" key={post.id}>
            <p className="text-sm font-semibold text-coral">{post.date}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-lg text-slate">{post.description}</p>
            <MarkdownBody body={post.body} />
          </article>
        ))}
      </section>
      <Footer />
    </>
  )
}
