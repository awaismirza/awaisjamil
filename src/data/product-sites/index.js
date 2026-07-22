import { aussieLoanCalculator } from './aussieLoanCalculator.js'
import { breather } from './breather.js'
import { driverLogbook } from './driverLogbook.js'
import { fivePrayers } from './fivePrayers.js'
import { freezerpal } from './freezerpal.js'
import { yusafcut } from './yusafcut.js'

// Each product's mini-site (overview, privacy, terms, support) lives in its own
// file here. To update a product's support email or copy, edit its file — the
// layout, routes, and pages pick the change up automatically.
export const productSites = {
  [breather.slug]: breather,
  [freezerpal.slug]: freezerpal,
  [driverLogbook.slug]: driverLogbook,
  [fivePrayers.slug]: fivePrayers,
  [aussieLoanCalculator.slug]: aussieLoanCalculator,
  [yusafcut.slug]: yusafcut,
}
