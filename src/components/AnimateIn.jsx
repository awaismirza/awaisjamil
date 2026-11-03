import { motion } from 'framer-motion'
import { ease } from '../lib/animation.js'

export function AnimateIn({ children, className, delay = 0, y = 24, as = 'div' }) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Component>
  )
}
