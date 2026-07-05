export function InlineText({ text }) {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  const nodes = []
  let cursor = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index))

    if (match[1]) {
      const href = match[2]
      const isExternal = href.startsWith('http')
      nodes.push(
        <a
          className="font-semibold text-teal hover:underline"
          href={href}
          key={match.index}
          {...(isExternal ? { rel: 'noreferrer', target: '_blank' } : {})}
        >
          {match[1]}
        </a>,
      )
    } else {
      nodes.push(
        <strong className="font-semibold text-ink" key={match.index}>
          {match[3]}
        </strong>,
      )
    }
    cursor = match.index + match[0].length
  }

  if (cursor < text.length) nodes.push(text.slice(cursor))
  return <>{nodes}</>
}
