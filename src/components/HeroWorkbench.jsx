import { motion } from 'framer-motion'
import { Smartphone, TerminalSquare } from 'lucide-react'

export function HeroWorkbench() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-[5/4] w-full max-w-[560px] overflow-hidden rounded-xl border border-line bg-mist shadow-soft lg:max-w-none"
    >
      <img
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply dark:opacity-35 dark:mix-blend-screen"
        decoding="async"
        src="/hero-workbench-bg.png"
      />

      {/* Browser window: top-left, leaves a clear gutter for the phone */}
      <div className="absolute left-[6%] top-[9%] w-[72%] overflow-hidden rounded-lg border border-line bg-white shadow-soft">
        <div className="flex h-9 items-center gap-1.5 border-b border-line px-3.5 sm:h-10 sm:gap-2 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-coral sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#f2c94c] sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-teal sm:h-2.5 sm:w-2.5" />
          <span className="ml-2 truncate text-[10px] font-semibold text-slate sm:ml-3 sm:text-xs">
            product-system.jsx
          </span>
        </div>
        <div className="grid gap-3 p-3.5 sm:gap-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 w-20 rounded bg-ink sm:h-3 sm:w-24" />
              <div className="mt-2 h-1.5 w-28 rounded bg-slate/25 sm:mt-3 sm:h-2 sm:w-36" />
            </div>
            <TerminalSquare className="text-teal" size={20} />
          </div>
          <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
            <div className="col-span-3 rounded-md bg-ink p-3 sm:p-4">
              <div className="h-1.5 w-1/2 rounded bg-white/80 sm:h-2" />
              <div className="mt-5 h-1.5 w-full rounded bg-white/20 sm:mt-8 sm:h-2" />
              <div className="mt-2 h-1.5 w-3/4 rounded bg-white/20 sm:mt-3 sm:h-2" />
              <div className="mt-2 h-1.5 w-1/2 rounded bg-white/20 sm:mt-3 sm:h-2" />
            </div>
            <div className="col-span-2 rounded-md border border-line p-2.5 sm:p-3">
              <div className="h-1.5 w-2/3 rounded bg-teal sm:h-2" />
              <div className="mt-4 h-10 rounded bg-mist sm:mt-6 sm:h-14" />
            </div>
          </div>
        </div>
      </div>

      {/* Phone: bottom-right, overlaps the window corner only */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        className="absolute bottom-[8%] right-[6%] w-[30%] min-w-[104px] rounded-[1.4rem] border border-ink/15 bg-white p-1.5 shadow-soft sm:p-2"
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mx-auto h-1.5 w-8 rounded-full bg-ink/80" />
        <div className="grid gap-2 p-2.5 sm:p-3">
          <Smartphone className="text-coral" size={18} />
          <div className="h-2 w-3/4 rounded bg-ink" />
          <div className="h-2 w-full rounded bg-slate/25" />
          <div className="h-14 rounded-md bg-teal/10 sm:h-20" />
        </div>
      </motion.div>
    </div>
  )
}
