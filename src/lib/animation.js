// Shared motion vocabulary. Entrances use an expo-out curve; exits and hovers are
// quicker. MotionConfig in main.jsx disables transforms for reduced-motion users.
export const ease = [0.16, 1, 0.3, 1]
export const easeInOut = [0.65, 0, 0.35, 1]

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export const inViewOnce = { once: true, margin: '-60px' }
