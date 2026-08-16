import { motion, useReducedMotion } from 'framer-motion'
import { Mic } from 'lucide-react'
import { useEffect, useState } from 'react'

const BARS = [18, 32, 54, 38, 76, 48, 88, 62, 42, 70, 52, 30, 64, 40, 24, 46, 20]

export function AnimatedRecordingWaveform({ label = 'Your reminder, in your voice' }) {
  const reduceMotion = useReducedMotion()
  const [seconds, setSeconds] = useState(4)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev >= 30 ? 1 : prev + 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedSeconds = String(seconds).padStart(2, '0')

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex w-[300px] flex-col items-center rounded-[2.25rem] border border-line bg-white/90 p-6 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-graphite/90 sm:w-[340px]"
    >
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full blur-3xl"
        style={{ background: 'var(--accent-soft)' }}
      />

      {/* Top Header: Recording Status & Timer */}
      <div className="flex w-full items-center justify-between border-b border-line/60 pb-3.5 dark:border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C62E3E] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C62E3E]" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-ink dark:text-white">
            REC
          </span>
        </div>
        <span className="font-mono text-xs font-semibold tabular-nums text-slate dark:text-white/60">
          00:{formattedSeconds} / 00:30
        </span>
      </div>

      {/* Center Waveform Visualizer */}
      <div className="my-5 flex h-20 w-full items-center justify-center">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 280 80">
          {BARS.map((height, index) => {
            const x = 8 + index * 16
            const opacity = 0.45 + (height / 100) * 0.55
            return (
              <motion.rect
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        height: [
                          height,
                          Math.max(12, height * 0.42),
                          Math.min(76, height * 1.18),
                          height,
                        ],
                        y: [
                          40 - height / 2,
                          40 - Math.max(12, height * 0.42) / 2,
                          40 - Math.min(76, height * 1.18) / 2,
                          40 - height / 2,
                        ],
                      }
                }
                fill="var(--accent)"
                height={height}
                initial={false}
                key={x}
                opacity={opacity}
                rx="4"
                transition={{
                  delay: (index % 5) * 0.1,
                  duration: 1.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                width="7"
                x={x}
                y={40 - height / 2}
              />
            )
          })}
        </svg>
      </div>

      {/* Mic Action Icon with Radiating Rings */}
      <div className="relative my-2 flex items-center justify-center">
        {/* Pulse rings */}
        {!reduceMotion && (
          <>
            <motion.div
              animate={{ scale: [1, 1.45, 1.7], opacity: [0.35, 0.15, 0] }}
              className="absolute h-14 w-14 rounded-full border-2 border-[var(--accent)]"
              transition={{ duration: 2.2, ease: 'easeOut', repeat: Infinity }}
            />
            <motion.div
              animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
              className="absolute h-14 w-14 rounded-full border border-[var(--accent)]"
              transition={{ delay: 0.4, duration: 2.2, ease: 'easeOut', repeat: Infinity }}
            />
          </>
        )}

        <div
          className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-lg sm:h-16 sm:w-16"
          style={{
            background: 'var(--accent)',
            boxShadow: '0 8px 24px var(--accent-soft)',
          }}
        >
          <Mic className="sm:h-7 sm:w-7" size={24} strokeWidth={2.4} />
        </div>
      </div>

      {/* Bottom Labels */}
      <div className="mt-4 text-center">
        <p className="font-display text-sm font-bold text-ink dark:text-white">
          {label}
        </p>
        <p className="mt-0.5 text-xs text-slate dark:text-white/60">
          1-Tap Recording · 100% On-Device
        </p>
      </div>
    </div>
  )
}
