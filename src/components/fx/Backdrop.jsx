import clsx from 'clsx'

// Decorative page backdrop: masked grid plus slow-drifting aurora blobs. Colours
// default to the site tokens; product pages pass their accent instead.
export function Backdrop({ className, colors, grid = true, intensity = 1 }) {
  const [a, b, c] = colors ?? [
    'rgb(var(--c-accent) / 0.55)',
    'rgb(var(--c-violet) / 0.45)',
    'rgb(var(--c-coral) / 0.25)',
  ]

  return (
    <div aria-hidden="true" className={clsx('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      {grid ? <div className="bg-grid mask-radial absolute inset-0" /> : null}
      <div style={{ opacity: 0.55 * intensity }} className="absolute inset-0">
        <div
          className="absolute -top-40 left-[8%] h-[34rem] w-[34rem] animate-drift rounded-full blur-[110px]"
          style={{ background: a }}
        />
        <div
          className="absolute -top-24 right-[4%] h-[30rem] w-[30rem] animate-drift rounded-full blur-[120px] [animation-delay:-6s]"
          style={{ background: b }}
        />
        <div
          className="absolute top-[40%] left-[38%] h-[22rem] w-[22rem] animate-drift rounded-full blur-[120px] [animation-delay:-12s]"
          style={{ background: c }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  )
}
