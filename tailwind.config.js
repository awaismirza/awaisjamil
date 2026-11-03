/** @type {import('tailwindcss').Config} */

// Every colour resolves to a CSS variable defined in src/index.css, so light and
// dark themes swap by redefining the variables under `.dark` instead of per-class
// overrides. Variables hold space-separated RGB channels so opacity modifiers work.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        mist: token('mist'),
        line: token('line'),
        ink: token('ink'),
        slate: token('slate'),
        accent: token('accent'),
        'accent-ink': token('accent-ink'),
        violet: token('violet'),
        coral: token('coral'),
        // Legacy aliases kept so older markup and data-driven classes still resolve.
        teal: token('accent-ink'),
        graphite: token('mist'),
        paper: token('surface'),
      },
      fontFamily: {
        sans: [
          '"Geist Variable"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        display: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        soft: '0 24px 80px -24px rgb(var(--c-shadow) / 0.28)',
        line: '0 1px 0 rgb(var(--c-shadow) / 0.06)',
        glow: '0 0 0 1px rgb(var(--c-accent) / 0.25), 0 18px 60px -12px rgb(var(--c-accent) / 0.45)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(6%, -8%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 6%, 0) scale(0.95)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        drift: 'drift 18s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease-in-out infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
    },
  },
  plugins: [],
}
