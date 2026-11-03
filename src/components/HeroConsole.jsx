import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Gauge, Mail, Phone, ShieldCheck, TerminalSquare } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '../data/site.js'
import { ease } from '../lib/animation.js'

// A looping, decorative "agent harness" session that illustrates the work in the
// hero copy. It is aria-hidden; the meaningful contact actions sit below it.
const SCRIPT = [
  { type: 'cmd', text: 'harness sync --team engineering' },
  { type: 'info', text: 'provisioning Claude Code · Codex · Cursor …' },
  { type: 'ok', text: '27 shared skills loaded' },
  { type: 'flow', steps: ['plan', 'implement', 'test', 'review', 'release'] },
  { type: 'cmd', text: 'agent run release --env staging' },
  { type: 'gate', text: 'write to external system — needs sign-off' },
  { type: 'ok', text: 'approved by a human · deploying', pause: 900 },
  { type: 'done', text: 'shipped. guardrails held.', pause: 2600 },
]

function useConsoleScript(reduce) {
  const [lineIndex, setLineIndex] = useState(0)
  const [chars, setChars] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const line = SCRIPT[lineIndex]
    let timer

    if (!line) {
      timer = setTimeout(() => {
        setLineIndex(0)
        setChars(0)
      }, 400)
    } else if (line.type === 'cmd' && chars < line.text.length) {
      timer = setTimeout(() => setChars((value) => value + 1), 34 + Math.random() * 40)
    } else {
      timer = setTimeout(() => {
        setLineIndex((value) => value + 1)
        setChars(0)
      }, line.pause ?? (line.type === 'flow' ? 1700 : 650))
    }

    return () => clearTimeout(timer)
  }, [lineIndex, chars, reduce])

  return reduce ? { lineIndex: SCRIPT.length, chars: 0 } : { lineIndex, chars }
}

function ConsoleLine({ line, typed, active }) {
  if (line.type === 'cmd') {
    return (
      <p className="text-white">
        <span className="text-[#5eead4]">❯</span> {typed}
        {active ? <span className="ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] animate-blink bg-[#5eead4]" /> : null}
      </p>
    )
  }
  if (line.type === 'flow') {
    return (
      <div className="flex flex-wrap items-center gap-1.5 py-1">
        {line.steps.map((step, index) => (
          <motion.span
            animate={{ opacity: 1, scale: 1, backgroundColor: ['rgba(45,212,191,0.0)', 'rgba(45,212,191,0.22)', 'rgba(45,212,191,0.08)'] }}
            className="rounded-md border border-[#2dd4bf]/30 px-2 py-0.5 text-[#99f6e4]"
            initial={{ opacity: 0, scale: 0.8 }}
            key={step}
            transition={{ delay: index * 0.22, duration: 0.5 }}
          >
            {step}
          </motion.span>
        ))}
      </div>
    )
  }

  const tones = {
    info: 'text-white/55',
    ok: 'text-[#86efac]',
    gate: 'text-[#fcd34d]',
    done: 'text-[#c4b5fd]',
  }
  const glyph = { info: '→', ok: '✓', gate: '⚑', done: '●' }

  return (
    <motion.p
      animate={{ opacity: 1, x: 0 }}
      className={tones[line.type]}
      initial={{ opacity: 0, x: -6 }}
      transition={{ duration: 0.35 }}
    >
      {glyph[line.type]} {line.text}
      {line.type === 'gate' && active ? (
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          className="ml-2 inline-flex rounded-md bg-[#fcd34d] px-1.5 text-[10px] font-bold uppercase text-black"
          transition={{ duration: 0.9, repeat: Infinity }}
        >
          approve
        </motion.span>
      ) : null}
    </motion.p>
  )
}

export function HeroConsole() {
  const reduce = useReducedMotion()
  const { lineIndex, chars } = useConsoleScript(reduce)
  const phoneHref = site.phone ? `tel:${site.phone.replace(/[^+\d]/g, '')}` : null

  // Pointer parallax for the floating chips.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 80, damping: 20 })
  const sy = useSpring(py, { stiffness: 80, damping: 20 })
  const nearX = useTransform(sx, (v) => v * 18)
  const nearY = useTransform(sy, (v) => v * 18)
  const farX = useTransform(sx, (v) => v * -10)
  const farY = useTransform(sy, (v) => v * -10)

  function handleMove(event) {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const visible = SCRIPT.slice(0, Math.min(lineIndex + 1, SCRIPT.length))

  return (
    <motion.div
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      onPointerLeave={() => {
        px.set(0)
        py.set(0)
      }}
      onPointerMove={handleMove}
      transition={{ duration: 1.1, delay: 0.25, ease }}
    >
      {/* Orbit rings behind the console */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[42%] -z-10 -translate-x-1/2 -translate-y-1/2">
        {[340, 470, 600].map((size, index) => (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/10"
            key={size}
            style={{ height: size, width: size }}
          >
            <div
              className="absolute inset-0 animate-spin-slow"
              style={{ animationDuration: `${30 + index * 14}s`, animationDirection: index % 2 ? 'reverse' : 'normal' }}
            >
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_rgb(var(--c-accent))]" />
            </div>
          </div>
        ))}
      </div>

      {/* Console window */}
      <div aria-hidden="true" className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10]/95 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/5 backdrop-blur-xl">
        <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate font-mono text-[11px] text-white/45">agent-harness — zsh</span>
          <TerminalSquare className="ml-auto text-[#5eead4]" size={15} />
        </div>
        <div className="relative h-[272px] space-y-2 overflow-hidden p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
          <AnimatePresence initial={false}>
            {visible.map((line, index) => {
              const active = index === lineIndex
              const typed = line.type === 'cmd' ? (active ? line.text.slice(0, chars) : line.text) : null
              return (
                <motion.div
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  key={`${index}-${line.type}`}
                >
                  <ConsoleLine active={active} line={line} typed={typed} />
                </motion.div>
              )
            })}
          </AnimatePresence>
          {/* Scanline sheen */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.015)_50%)] bg-[length:100%_4px]" />
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        aria-hidden="true"
        className="glass absolute -left-4 top-[52%] hidden items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-soft sm:flex lg:-left-10"
        style={{ x: nearX, y: nearY }}
      >
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent/15 text-accent-ink">
          <ShieldCheck size={16} />
        </span>
        <span className="text-xs leading-tight">
          <span className="block font-semibold text-ink">Guardrails on</span>
          <span className="text-slate">Risk-tiered approvals</span>
        </span>
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="glass absolute -right-3 -top-6 hidden w-44 rounded-2xl px-3.5 py-3 shadow-soft sm:block lg:-right-8"
        style={{ x: farX, y: farY }}
      >
        <span className="flex items-center gap-2 text-xs font-semibold text-ink">
          <Gauge className="text-violet" size={14} /> Token budget
        </span>
        <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-mist">
          <motion.span
            animate={reduce ? { width: '38%' } : { width: ['18%', '42%', '31%', '18%'] }}
            className="block h-full rounded-full bg-gradient-to-r from-accent to-violet"
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <span className="mt-1.5 block font-mono text-[10px] text-slate">on-demand skill loading</span>
      </motion.div>

      {/* Consulting panel */}
      <div className="glass relative mt-5 rounded-2xl p-5 shadow-soft">
        <p className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent-ink">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.consulting.label}
        </p>
        <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
          {site.consulting.punchline} <span className="font-normal text-slate">{site.consulting.pitch}</span>
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a
            className="focus-ring group inline-flex min-h-12 flex-1 items-center justify-between gap-3 rounded-full bg-ink px-5 text-sm font-semibold text-canvas transition hover:shadow-glow"
            href={`mailto:${site.email}?subject=${encodeURIComponent(site.consulting.emailSubject)}`}
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <Mail size={17} /> <span className="truncate">{site.email}</span>
            </span>
            <ArrowUpRight className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} />
          </a>
          {phoneHref ? (
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-line px-5 text-sm font-semibold text-ink transition hover:bg-mist"
              href={phoneHref}
            >
              <Phone className="text-accent-ink" size={16} /> {site.phone}
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}
