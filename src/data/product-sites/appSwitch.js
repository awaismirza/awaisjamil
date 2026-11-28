import { ArchiveRestore, Keyboard, PanelsTopLeft } from 'lucide-react'

const support = 'support@awaisjamil.com'
const contact = `[Contact App Switch support](mailto:${support}?subject=App%20Switch)`
const checkout = import.meta.env?.VITE_APP_SWITCH_CHECKOUT_URL?.trim()
if (checkout) {
  const url = new URL(checkout)
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Use a public HTTPS checkout URL.')
}

export const appSwitch = {
  slug: 'app-switch',
  publicPath: '/app-switch',
  directPages: true,
  name: 'App Switch',
  category: 'Mac keyboard shortcuts',
  icon: '/app-switch/icon.png',
  seoDescription: 'Launch, focus or hide Mac apps with left- and right-handed keyboard shortcuts. Try unlimited shortcuts for 15 days on an Apple silicon Mac.',
  accent: '#364fbe',
  accentOnDark: '#a6baff',
  accentDark: '#293793',
  accentSoft: 'rgba(71, 99, 202, 0.12)',
  download: {
    kind: 'website',
    url: '/app-switch/downloads/App-Switch-1.4-arm64.dmg',
    label: 'Download and try free',
    compactLabel: 'Download and try free',
  },
  hero: {
    eyebrow: 'App Switch for Mac',
    headline: 'Left ⌘ for Calendar.',
    headlineAccent: 'Right ⌘ for Notes.',
    sub: `Give each side of your keyboard its own app shortcuts. Try unlimited shortcuts free for 15 days, then keep three free. ${checkout ? 'Unlock Unlimited for a one-time US$4.99 (A$4.99 in Australia).' : 'Unlimited will cost US$4.99 once (A$4.99 in Australia). Paid upgrades are coming soon.'}`,
    ctaNote: 'Version 1.4 · Apple silicon · macOS 13 or later. Signed by Awais Jamil and notarized by Apple.',
    heroShot: '/app-switch/editor.png',
    heroShotAlt: 'App Switch shortcut editor with Right Command and K assigned to Notes',
  },
  screenshotFormat: 'desktop',
  screenshotsTitle: 'Your apps, one shortcut away',
  screenshots: [{
    src: '/app-switch/shortcuts.png',
    alt: 'My Shortcuts lists Calendar, Finder, Mail and Notes with their assigned keys',
    title: 'My Shortcuts',
    caption: 'See which keys belong to each app. Open an assignment to change the keys or what happens when you press them.',
  }],
  featuresTitle: 'Decide what each keypress does',
  features: [
    { icon: Keyboard, title: 'Use either side', description: 'Assign left and right Command, Option, Shift or Control independently. Tap a modifier on its own or pair it with a character key.' },
    { icon: PanelsTopLeft, title: 'Bring an app forward', description: 'Launch a closed app, focus a running app, or tap again to hide it. Choose running-only mode to leave the keypress alone when the app is closed.' },
    { icon: ArchiveRestore, title: 'Take your shortcuts along', description: 'Export your assignments as a JSON file. On another Mac, restore the whole library or merge it and review conflicts individually.' },
  ],
  pricing: {
    title: 'Start with 15 days of unlimited shortcuts',
    sub: 'The trial starts when you open App Switch. When it ends, your first three shortcuts stay active for free. All other assignments stay saved.',
    plans: [
      { name: 'Free', price: '$0', description: 'Your first three shortcuts stay active after the trial.', features: ['15 days with unlimited shortcuts', 'Additional assignments stay saved'] },
      { name: 'Unlimited', price: 'US$4.99', per: 'once', description: checkout ? 'A$4.99 in Australia. Pay once to keep every assignment active.' : 'Planned one-time price, or A$4.99 in Australia. Purchases are currently unavailable.', features: ['Unlimited active shortcuts', 'Unlock your saved assignments'], note: checkout ? 'You can also upgrade from App Switch on your Mac.' : undefined, cta: checkout ? { href: checkout, label: 'Buy Unlimited' } : undefined },
    ],
  },
  support: {
    email: support,
    intro: 'Get help setting up your first shortcut, moving your library or activating a purchase.',
    checklist: ['Your macOS and App Switch versions', 'For shortcut problems, the app and keys you assigned', 'For purchase problems, the checkout email and purchase date. Keep your activation code and card details private.'],
    faqs: [
      { q: 'How do I install App Switch?', a: 'Download the disk image on an Apple silicon Mac running macOS 13 or later. Open the image, drag App Switch into Applications, then launch it from Applications.' },
      { q: 'How do I set up my first shortcut?', a: 'Allow App Switch in System Settings → Privacy & Security → Accessibility. In App Switch, choose a running or installed app and select Set Shortcut. Click the modifier buttons for a tap shortcut, or select Record and press a combination. Save and try it from another app.' },
      { q: 'Why is my shortcut passing through?', a: 'Check that App Switch is running and Accessibility is enabled for the copy in Applications. Relaunch it if macOS asks. A modifier-only shortcut fires when you release a short tap. In running-only mode the target must already be open. If another app or macOS reserves a combination, try a different one.' },
      { q: 'What changes at the end of the trial?', a: 'After 15 days your first three shortcuts stay active. Extra assignments remain saved and become active again when you unlock Unlimited. You can keep the free version without purchasing.' },
      { q: 'How do I unlock my purchase?', a: checkout ? 'Choose Upgrade in the App Switch toolbar. After Stripe Checkout, copy your activation code. Back in App Switch, choose Enter Code…, paste the code and click Activate Unlimited. In earlier builds, open the trial or free-plan button for both Buy once and the activation field. For a missing code or refund, contact support with your checkout email and purchase date.' : 'Paid upgrades are currently unavailable. The preview includes a 15-day unlimited trial and three active shortcuts afterwards.' },
      { q: 'Can I move shortcuts to another Mac?', a: 'Open Backups → Export Shortcuts. Transfer the JSON file and open Backups → Import Shortcuts on the other Mac. Choose Merge to review conflicts or Restore to replace its library. Undo Last Import returns to the previous library, including reverting later edits. Grant Accessibility access on the new Mac.' },
    ],
  },
  privacy: {
    title: 'Privacy Policy', lastUpdated: '28 November 2026',
    seoDescription: 'How App Switch handles shortcuts, keyboard events, purchases and support enquiries.',
    summary: 'App Switch matches shortcuts on your Mac. Checkout and purchase activation use online services.',
    sections: [
      { heading: 'Keyboard access', blocks: [{ p: 'Accessibility permission lets App Switch recognise global shortcuts and bring the chosen app forward. Keyboard events are matched in memory. App Switch does not record typed text or transmit keyboard events.' }] },
      { heading: 'Your shortcut library', blocks: [{ p: 'App Switch stores application identifiers, names, paths, assigned keys and chosen behaviours locally. The app keeps an undo copy before a restore or merge. Exporting creates a JSON file at the location you choose. If you share a backup, its recipient can see the assignments and application paths.' }] },
      { heading: 'Downloads, purchases and activation', blocks: [{ p: 'The download host and purchase activation service receive ordinary connection information, including your IP address. The app stores the trial start in local preferences and a verified activation code in your login Keychain. When activating or periodically rechecking a purchase, the app sends the checkout code to the licensing service. Shortcut assignments, keyboard events and device identifiers are excluded from this request.' }, { p: 'Stripe processes the payment and receives the checkout information you provide, including your email and payment details. The developer can use transaction details to verify purchases, handle refunds and resolve support requests. [Stripe Privacy Policy](https://stripe.com/privacy)' }] },
      { heading: 'Your choices and questions', blocks: [{ p: 'You can remove individual assignments, delete exported backups and revoke Accessibility permission in System Settings. If you contact support, the developer receives your email and the details you choose to share. To request access or deletion of purchase or support data, contact support. Some transaction information may need to be retained for accounting or legal purposes.' }, { p: contact }] },
    ],
  },
  terms: {
    title: 'Terms & Conditions', lastUpdated: '28 November 2026',
    seoDescription: 'App Switch software licence, trial terms, one-time pricing and purchase support.',
    summary: 'These terms describe the licence to use App Switch and the optional Unlimited purchase offered by Awais Jamil.',
    sections: [
      { heading: 'Using the app', blocks: [{ p: 'You receive a non-exclusive licence to install and use App Switch on a compatible Mac. The developer retains ownership of the software. Keep your activation code private and use it for your own purchase.' }] },
      { heading: 'Trial and one-time purchase', blocks: [{ p: 'The 15-day trial includes unlimited shortcuts. When it ends, the first three assignments stay active. Additional assignments remain saved. The trial does not automatically charge you. The advertised one-time price for Unlimited is US$4.99, or A$4.99 in Australia. Review the currency and final total in Stripe Checkout before paying.' }] },
      { heading: 'Activation and purchase support', blocks: [{ p: 'Activation requires an internet connection so the app can verify your purchase. Contact support about a missing activation code, duplicate payment, or refund. Include the email used at checkout and the purchase date.' }] },
      { heading: 'Compatibility and consumer rights', blocks: [{ p: 'Global shortcuts need macOS Accessibility access. System shortcuts and other utilities can affect which key combinations are available. Back up your library before a restore. Your rights and remedies under applicable consumer law continue to apply, including [Australian consumer guarantees](https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees) where applicable.' }] },
      { heading: 'Updates and contact', blocks: [{ p: 'Changes to these terms will appear here with a revised date. For questions about using the software or a purchase, contact the developer.' }, { p: contact }] },
    ],
  },
}
