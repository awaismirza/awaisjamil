import { motion, useReducedMotion } from 'framer-motion'
import { Mic } from 'lucide-react'

const BARS = [20, 34, 55, 31, 74, 48, 88, 58, 39, 68, 46, 27, 62, 36, 22]

export function AnimatedRecordingWaveform({ label = 'Recording a reminder' }) {
  const reduceMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="relative mx-auto grid h-[280px] w-[280px] place-items-center sm:h-[320px] sm:w-[320px]">
      <div className="pointer-events-none absolute -inset-8 rounded-full blur-3xl" style={{ background: 'var(--accent-soft)' }} />
      <div className="absolute inset-2 rounded-full border border-[var(--accent)]/15 bg-white/70 shadow-soft dark:bg-graphite/70" />
      <div className="absolute inset-7 rounded-full border border-dashed border-[var(--accent)]/25" />

      <svg className="relative h-28 w-60 overflow-visible sm:w-72" viewBox="0 0 300 120">
        {BARS.map((height, index) => {
          const x = 10 + index * 20
          const opacity = 0.35 + (height / 100) * 0.65
          return (
            <motion.rect
              animate={reduceMotion ? undefined : { height: [height, Math.max(16, height * 0.48), Math.min(94, height * 1.12), height] }}
              fill="var(--accent)"
              height={height}
              initial={false}
              key={x}
              opacity={opacity}
              rx="5"
              transition={{ delay: index * 0.045, duration: 1.35, ease: 'easeInOut', repeat: Infinity }}
              width="10"
              x={x}
              y={60 - height / 2}
            />
          )
        })}
      </svg>

      <motion.div
        animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 0 var(--accent-soft)', '0 0 0 20px transparent', '0 0 0 0 transparent'] }}
        className="relative -mt-2 grid h-20 w-20 place-items-center rounded-full bg-[var(--accent)] text-white shadow-[0_14px_32px_var(--accent-soft)] sm:h-24 sm:w-24"
        transition={{ duration: 2, ease: 'easeOut', repeat: Infinity }}
      >
        <Mic size={36} strokeWidth={2.4} />
      </motion.div>

      <div className="absolute bottom-7 text-center sm:bottom-9">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Live waveform</p>
        <p className="mt-1 text-sm font-medium text-slate">{label}</p>
      </div>
    </div>
  )
}
