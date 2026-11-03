import clsx from 'clsx'
import { useRef } from 'react'

// Card surface whose border and fill glow toward the pointer. The glow colour
// comes from `--spot` so product pages can tint it with their accent.
export function Spotlight({ as: Tag = 'div', className, children, color, ...props }) {
  const ref = useRef(null)

  function handleMove(event) {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    node.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <Tag
      className={clsx(
        'group/spot relative isolate overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:border-[color:var(--spot)] hover:shadow-soft',
        className,
      )}
      onPointerMove={handleMove}
      ref={ref}
      style={{ '--spot': color ?? 'rgb(var(--c-accent) / 0.45)' }}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--spot) 40%, transparent), transparent 65%)',
        }}
      />
      {children}
    </Tag>
  )
}
