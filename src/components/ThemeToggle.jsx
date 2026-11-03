import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import {
  DARK_THEME,
  LIGHT_THEME,
  applyTheme,
  getNextTheme,
  getStoredTheme,
  getThemeLabel,
  storeTheme,
} from '../lib/theme.js'
import { useTheme } from '../lib/useTheme.js'

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export function ThemeToggle() {
  // Read the applied theme from the root element so every toggle on the page
  // (desktop and mobile headers) stays in sync.
  const theme = useTheme()
  const label = getThemeLabel(theme)

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!media) return undefined

    function syncSystemTheme(event) {
      if (!getStoredTheme()) applyTheme(event.matches ? DARK_THEME : LIGHT_THEME)
    }

    media.addEventListener('change', syncSystemTheme)
    return () => media.removeEventListener('change', syncSystemTheme)
  }, [])

  function handleToggle(event) {
    const nextTheme = getNextTheme(theme)
    const commit = () => {
      applyTheme(nextTheme)
      storeTheme(nextTheme)
    }

    if (!document.startViewTransition || prefersReducedMotion()) {
      commit()
      return
    }

    // Expand the new theme as a circle from the toggle button.
    const x = event.clientX || window.innerWidth - 40
    const y = event.clientY || 40
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    const transition = document.startViewTransition(commit)

    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
        )
      })
      .catch(() => {})
  }

  return (
    <button
      aria-label={label}
      className="focus-ring relative grid h-10 w-10 cursor-pointer place-items-center overflow-hidden rounded-full border border-line bg-surface/60 text-ink transition hover:border-ink/30 hover:bg-mist"
      onClick={handleToggle}
      title={label}
      type="button"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          key={theme}
          transition={{ duration: 0.25 }}
        >
          {theme === DARK_THEME ? <Sun size={17} strokeWidth={2.25} /> : <Moon size={17} strokeWidth={2.25} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
