import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { ease } from '../../lib/animation.js'

const defaultAccentClass = 'text-gradient inline-block pr-[0.06em] font-serif font-normal italic tracking-normal'

// Reveals a heading word by word from behind a mask. Screen readers get the
// plain sentence through aria-label; the animated spans are hidden from them.
// `highlight` is a trailing phrase rendered with `accentClassName` (the accent
// serif treatment by default); `breakBeforeHighlight` puts it on its own line.
export function SplitWords({
  text,
  highlight,
  as = 'h1',
  className,
  delay = 0,
  stagger = 0.045,
  accentClassName = defaultAccentClass,
  breakBeforeHighlight = false,
}) {
  const Tag = motion[as]
  const words = text.split(' ')
  const accentWords = highlight ? highlight.split(' ') : []
  const accentStart = highlight && text.endsWith(highlight) ? words.length - accentWords.length : -1

  return (
    <Tag
      aria-label={text}
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, index) => {
        const isAccent = accentStart >= 0 && index >= accentStart
        const breakHere = breakBeforeHighlight && index === accentStart && index > 0
        const spaceAfter = index < words.length - 1 && !(breakBeforeHighlight && index + 1 === accentStart)
        return (
          <Fragment key={`${word}-${index}`}>
            {breakHere ? <br /> : null}
            <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-top">
              <motion.span
                className={isAccent ? accentClassName : 'inline-block'}
                variants={{
                  hidden: { y: '110%', rotate: 4 },
                  show: { y: '0%', rotate: 0, transition: { duration: 1, ease } },
                }}
              >
                {word}
              </motion.span>
              {spaceAfter ? ' ' : null}
            </span>
          </Fragment>
        )
      })}
    </Tag>
  )
}
