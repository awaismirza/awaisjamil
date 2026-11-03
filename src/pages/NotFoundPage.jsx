import { motion } from 'framer-motion'
import { Button } from '../components/Button.jsx'
import { Backdrop } from '../components/fx/Backdrop.jsx'
import { Seo } from '../components/Seo.jsx'
import { ease } from '../lib/animation.js'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden px-5 py-32 text-center">
        <Backdrop />
        <div>
          <p className="section-label">Error 404</p>
          <div aria-hidden="true" className="mt-6 flex justify-center font-display text-[32vw] font-bold leading-[0.8] tracking-[-0.08em] sm:text-[14rem]">
            {['4', '0', '4'].map((digit, index) => (
              <motion.span
                animate={{ y: [0, -14, 0], rotate: [0, index === 1 ? 8 : -4, 0] }}
                className={index === 1 ? 'text-gradient font-serif font-normal italic' : 'text-ink'}
                initial={{ y: 0 }}
                key={index}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
              >
                {digit}
              </motion.span>
            ))}
          </div>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            This page is not here.
          </motion.h1>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            <Button href="/">Back home</Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
