import clsx from 'clsx'

// Infinite horizontal ticker. The list is rendered twice and translated by
// half its width; the duplicate is hidden from assistive technology.
export function Marquee({ items, className, duration = 40, reverse = false, renderItem }) {
  const render = renderItem ?? ((item) => item)

  return (
    <div className={clsx('mask-fade-x group/marquee flex overflow-hidden', className)}>
      <div
        className="flex shrink-0 animate-marquee gap-3 pr-3 group-hover/marquee:[animation-play-state:paused]"
        style={{ '--marquee-duration': `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {items.map((item, index) => (
          <div className="shrink-0" key={`a-${index}`}>
            {render(item)}
          </div>
        ))}
        {items.map((item, index) => (
          <div aria-hidden="true" className="shrink-0" key={`b-${index}`}>
            {render(item)}
          </div>
        ))}
      </div>
    </div>
  )
}
