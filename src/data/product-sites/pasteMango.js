import { ClipboardList, Keyboard, Search, ShieldCheck } from 'lucide-react'

const supportEmail = 'support@awaisjamil.com'
const appleLicense = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'

export const pasteMango = {
  slug: 'pastemango',
  name: 'PasteMango',
  category: 'Clipboard history for Mac',
  icon: '/pastemango/icon.png',
  seoDescription: 'PasteMango is a native Mac clipboard manager with local history, search, pinned clips, and configurable shortcuts. The Mac App Store release is in preparation.',
  accent: '#16786b',
  accentOnDark: '#64cbbb',
  accentDark: '#095b51',
  accentSoft: 'rgba(22, 120, 107, 0.14)',
  directPages: true,
  download: { kind: 'coming-soon', note: 'The Mac App Store release is in preparation.' },

  facts: [
    { label: 'Platform', value: 'macOS 14 or later' },
    { label: 'Storage', value: 'On this Mac' },
    { label: 'Availability', value: 'Coming soon' },
  ],

  hero: {
    eyebrow: 'Clipboard history for Mac',
    headline: 'Find what you copied.',
    sub: 'Search saved clips, pin what you use often, and put any clip back on the clipboard. Open PasteMango from the menu bar or with a shortcut.',
    ctas: [{ label: 'Get support', href: '/products/pastemango/support' }],
  },

  screenshotFormat: 'desktop',
  screenshotsTitle: 'Find a clip and see it in context',
  screenshots: [{
    src: '/pastemango/history.png',
    alt: 'PasteMango’s Mac window with clip categories, a searchable list of copied items, and a preview of sample field notes',
    title: 'Clipboard history',
    caption: 'The Mac app with sample clips. Select a clip to preview it, pin it, or copy it back to the clipboard.',
  }],

  featuresTitle: 'Pick up where you left off',
  features: [
    { icon: ClipboardList, title: 'Capture while you work', description: 'Save supported text and images when automatic monitoring is enabled. The app can keep capturing after you close its main window.' },
    { icon: Search, title: 'Search and pin clips', description: 'Find a clip by searching your history or browsing by type. Pin items you expect to use again.' },
    { icon: Keyboard, title: 'Reach history from another app', description: 'Use the menu bar or a configurable shortcut to open PasteMango, search clips, or pin the latest item.' },
    { icon: ShieldCheck, title: 'Keep your clips on your Mac', description: 'PasteMango stores your clipboard history and settings locally. You can pause capture or clear your saved history in Settings.' },
  ],

  support: {
    email: supportEmail,
    intro: 'Get help with clipboard capture, keyboard shortcuts, or history in PasteMango for Mac.',
    checklist: ['Your macOS version and PasteMango version', 'What you expected and what happened', 'Steps to reproduce the issue using sample text'],
    faqs: [
      { q: 'Where can I get PasteMango?', a: 'The Mac App Store release is in preparation. PasteMango requires macOS 14 or later.' },
      { q: 'How do I reuse a saved clip?', a: 'Click the PasteMango icon in the menu bar. Find a clip and click it to copy it back to the clipboard. Switch to the app where you want to use it and paste.' },
      { q: 'Why is a clip missing?', a: 'In Settings → General, check that Monitor clipboard automatically is enabled. Copy a new line of plain text. If macOS prompts for clipboard access, allow it if you want automatic monitoring. PasteMango skips items their source marks as concealed, transient, or automatically generated.' },
      { q: 'What are the default shortcuts?', a: 'Command–Shift–V opens PasteMango, Command–Shift–F opens search, and Command–Shift–P pins the latest clip. They work while PasteMango is running. Change or disable them in Settings → Global keyboard shortcuts.' },
      { q: 'What happens to older clips?', a: 'The Mac app’s Free view shows the newest 50 saved clips, including pinned clips in that range. Older clips remain stored on your Mac. Use Settings → History → Clear History to remove clips from history, including those outside the Free view.' },
      { q: 'How do I start PasteMango at login?', a: 'Enable Launch at login in Settings → General. If macOS asks for approval, open Login Items in System Settings and approve PasteMango.' },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '27 November 2026',
    seoDescription: 'How PasteMango for Mac handles local clipboard history, settings, and App Store transactions.',
    summary: 'PasteMango for Mac keeps clipboard history and settings on your Mac. The app keeps clipboard content and usage data out of the publisher’s systems.',
    sections: [
      {
        heading: 'What the app stores',
        blocks: [
          { p: 'When automatic monitoring is enabled, PasteMango reads supported text and image items from the macOS clipboard while the app runs, including after its window closes. It stores the clip, the active app name when available, and details such as its saved time, pin status, and when it was reused.' },
          { p: 'PasteMango skips items the source marks as concealed, transient, or automatically generated. Some apps leave sensitive items unmarked. Turn off automatic monitoring before copying anything you want to keep out of history.' },
        ],
      },
      {
        heading: 'How the app uses and shares data',
        blocks: [
          { p: 'PasteMango uses clipboard history to help you find and reuse clips. The app stores history and preferences locally. It has no cloud sync, PasteMango account, advertising, or analytics.' },
          { p: 'Copying a saved clip puts it back on the macOS clipboard. If you open a saved link or share a clip, macOS passes the item to the app or service you choose.' },
          { p: 'If an App Store purchase or trial is offered, Apple handles the transaction and restoration. PasteMango reads verified StoreKit transactions to determine access to full history and uses the original trial transaction date to calculate its end.' },
        ],
      },
      {
        heading: 'Retention and controls',
        blocks: [
          { p: 'To stop capture, turn off Monitor clipboard automatically in Settings → General or quit PasteMango. You can also manage clipboard access in macOS System Settings where available.' },
          { p: 'The Free view shows the latest 50 saved clips. Older clips and items saved before you paused capture remain on your Mac.' },
          { p: 'Delete individual clips in the main window or choose Settings → History → Clear History to remove all clips from history, including clips outside the Free view. These actions mark clips as deleted. Their records can remain in the local database.' },
        ],
      },
      {
        heading: 'Contact and changes',
        blocks: [{ p: `Send privacy questions to [${supportEmail}](mailto:${supportEmail}). The policy date above shows when this page was last updated.` }],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: '27 November 2026',
    seoDescription: 'Release information and terms for PasteMango for Mac.',
    summary: 'These terms describe the PasteMango Mac release, App Store purchases, and the limits of local clipboard history.',
    sections: [
      {
        heading: 'App Store licence',
        blocks: [{ p: `If you obtain PasteMango through the Mac App Store, the licence shown in its listing applies. When the listing provides no custom licence, [Apple’s standard App Store licence](${appleLicense}) applies.` }],
      },
      {
        heading: 'Availability and purchases',
        blocks: [
          { p: 'PasteMango is being prepared as a free Mac App Store download. A free 30-day trial and a separate one-time full-history unlock are planned. Availability and local pricing will be shown in the app when the products are offered.' },
          { p: 'Apple handles purchases and refunds through your App Store account. To restore a purchase, use Restore Purchases with the App Store account used to make it.' },
        ],
      },
      {
        heading: 'Local history',
        blocks: [{ p: 'PasteMango provides a working clipboard history. Keep important material in its original app or another location you control. Clearing history removes clips from the history view, including items outside the Free view.' }],
      },
      {
        heading: 'Contact and changes',
        blocks: [{ p: `For questions about the app or these terms, email [${supportEmail}](mailto:${supportEmail}). The date at the top of this page shows the most recent update.` }],
      },
    ],
  },
}
