import { motion } from 'framer-motion'
import { Smartphone, TerminalSquare } from 'lucide-react'

export function HeroWorkbench() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      className="relative min-h-[410px] overflow-hidden rounded-md border border-line bg-mist p-4 shadow-soft sm:p-6"
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-x-10 top-8 h-44 rounded-full border border-teal/20" />
      <div className="absolute bottom-10 left-8 right-10 h-24 rounded-[50%] border border-coral/20" />
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-multiply dark:opacity-40 dark:mix-blend-screen"
        decoding="async"
        src="/hero-workbench-bg.png"
      />

      <div className="relative ml-auto mt-8 w-[88%] rounded-md border border-line bg-white shadow-soft">
        <div className="flex h-10 items-center gap-2 border-b border-line px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f2c94c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          <span className="ml-3 text-xs font-semibold text-slate">product-system.jsx</span>
        </div>
        <div className="grid gap-4 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-3 w-24 rounded bg-ink" />
              <div className="mt-3 h-2 w-36 rounded bg-slate/25" />
            </div>
            <TerminalSquare className="text-teal" size={22} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 h-28 rounded-md bg-ink p-4">
              <div className="h-2 w-20 rounded bg-white/80" />
              <div className="mt-8 h-2 w-full rounded bg-white/20" />
              <div className="mt-3 h-2 w-3/4 rounded bg-white/20" />
            </div>
            <div className="rounded-md border border-line p-3">
              <div className="h-2 w-12 rounded bg-teal" />
              <div className="mt-7 h-12 rounded bg-mist" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-7 w-32 rounded-[1.4rem] border border-ink/15 bg-white p-2 shadow-soft">
        <div className="h-5 rounded-t-[1rem] bg-ink" />
        <div className="grid gap-2 p-3">
          <Smartphone className="text-coral" size={18} />
          <div className="h-2 w-16 rounded bg-ink" />
          <div className="h-2 w-20 rounded bg-slate/25" />
          <div className="h-16 rounded-md bg-teal/10" />
        </div>
      </div>
    </motion.div>
  )
}
