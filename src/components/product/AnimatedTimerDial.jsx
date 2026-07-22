import { useEffect, useState } from 'react'

const TICK_COUNT = 60
const RADIUS = 118
const DIAL_SIZE = 280

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

// A decorative, always-running recreation of the app's radial timer — not a real
// countdown, just a live demo so the product page doesn't rely on a static screenshot
// for its most distinctive piece of UI.
export function AnimatedTimerDial({ label = 'FOCUS', totalMinutes = 25 }) {
  const totalSeconds = totalMinutes * 60
  const [remaining, setRemaining] = useState(totalSeconds)

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? totalSeconds : prev - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [totalSeconds])

  const ticks = Array.from({ length: TICK_COUNT }, (_, i) => i)

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto grid place-items-center"
      style={{ height: DIAL_SIZE, width: DIAL_SIZE }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 rounded-full blur-2xl"
        style={{ background: 'var(--accent-soft)' }}
      />

      {/* Static dashed dial, matching the app's radial timer face. Each tick gets its
          own full-size rotated wrapper so it orbits the shared center — rotating the
          tick element directly would just spin it in place around its own center. */}
      {ticks.map((i) => (
        <div
          className="absolute inset-0"
          key={i}
          style={{ transform: `rotate(${(360 / TICK_COUNT) * i}deg)` }}
        >
          <span
            className="absolute left-1/2 top-1/2 h-3 w-[2px] rounded-full bg-line dark:bg-white/15"
            style={{ transform: `translate(-50%, ${-RADIUS}px)` }}
          />
        </div>
      ))}

      {/* Continuously spinning accent tick — the "it's alive" touch */}
      <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
        <span
          className="absolute left-1/2 top-1/2 h-4 w-[3px] rounded-full"
          style={{
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
            transform: `translate(-50%, ${-RADIUS}px)`,
          }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate">{label}</span>
        <span className="mt-2 font-mono text-5xl font-semibold tabular-nums text-ink dark:text-white sm:text-6xl">
          {formatTime(remaining)}
        </span>
        <span className="mt-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
          Focusing
        </span>
      </div>
    </div>
  )
}
