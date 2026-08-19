import { aussieLoanCalculator } from './aussieLoanCalculator.js'
import { wfhFocus } from './wfhFocus.js'
import { driverLogbook } from './driverLogbook.js'
import { fastingTide } from './fastingTide.js'
import { fivePrayers } from './fivePrayers.js'
import { freezerpal } from './freezerpal.js'
import { yusafcut } from './yusafcut.js'
import { voiceAlarmPro } from './voiceAlarmPro.js'
import { logMyRep } from './logMyRep.js'

// Each product's mini-site (overview, privacy, terms, support) lives in its own
// file here. To update a product's support email or copy, edit its file — the
// layout, routes, and pages pick the change up automatically.
export const productSites = {
  [wfhFocus.slug]: wfhFocus,
  [freezerpal.slug]: freezerpal,
  [driverLogbook.slug]: driverLogbook,
  [fastingTide.slug]: fastingTide,
  [fivePrayers.slug]: fivePrayers,
  [aussieLoanCalculator.slug]: aussieLoanCalculator,
  [yusafcut.slug]: yusafcut,
  [voiceAlarmPro.slug]: voiceAlarmPro,
  [logMyRep.slug]: logMyRep,
}
