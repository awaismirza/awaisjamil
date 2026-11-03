import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'

const WIDE_QUERY = '(min-width: 1024px)'

function subscribeWide(callback) {
  const media = window.matchMedia(WIDE_QUERY)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function useIsWide() {
  return useSyncExternalStore(
    subscribeWide,
    () => window.matchMedia(WIDE_QUERY).matches,
    () => false,
  )
}

// Pins a row of cards and slides it sideways as the page scrolls vertically.
// Below `lg`, or with reduced motion, the cards simply stack in a grid.
export function HorizontalScroll({ children, header, fallbackClassName }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const reduce = useReducedMotion()
  const enabled = useIsWide() && !reduce
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!enabled || !track) return undefined

    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 80))
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [enabled])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const x = useTransform(smooth, [0, 1], [0, -distance])
  const progress = useTransform(smooth, [0, 1], ['0%', '100%'])

  if (!enabled) {
    return (
      <div className="section-shell" ref={sectionRef}>
        {header}
        <div className={fallbackClassName}>{children}</div>
      </div>
    )
  }

  return (
    <div className="relative" ref={sectionRef} style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="section-shell">{header}</div>
        <motion.div
          className="mt-12 flex gap-6 pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
          ref={trackRef}
          style={{ x }}
        >
          {children}
        </motion.div>
        <div className="section-shell mt-10">
          <div className="h-px w-full overflow-hidden bg-line">
            <motion.div className="h-full bg-gradient-to-r from-accent to-violet" style={{ width: progress }} />
          </div>
        </div>
      </div>
    </div>
  )
}
