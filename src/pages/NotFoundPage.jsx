import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo.jsx'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="section-shell grid min-h-[60svh] place-items-center py-20 text-center">
        <div>
          <p className="section-label">404</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.03em]">
            This page is not here.
          </h1>
          <Link
            className="focus-ring mt-8 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white"
            to="/"
          >
            Back home
          </Link>
        </div>
      </section>
    </>
  )
}
