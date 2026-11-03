import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useRef } from 'react'

// Pulls its child gently toward a fine pointer. Touch and reduced-motion users
// get a static element.
export function Magnetic({ children, strength = 0.25, className = 'inline-flex' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })

  function handleMove(event) {
    if (reduce || event.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      onPointerLeave={reset}
      onPointerMove={handleMove}
      ref={ref}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  )
}
