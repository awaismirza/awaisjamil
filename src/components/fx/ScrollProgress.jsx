import { motion, useScroll, useSpring } from 'framer-motion'

// Thin reading-progress bar pinned to the top of the viewport.
export function ScrollProgress({ color }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          color ?? 'linear-gradient(90deg, rgb(var(--c-accent)), rgb(var(--c-violet)), rgb(var(--c-coral)))',
      }}
    />
  )
}
