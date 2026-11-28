import { ClipboardList, Keyboard, Search, ShieldCheck } from 'lucide-react'

const supportEmail = 'support@awaisjamil.com'
const downloadUrl = 'https://github.com/awaismirza/PasteMango/releases/download/v1.1/PasteMango-1.1-universal.dmg'
const coffeeUrl = 'https://buymeacoffee.com/awaismirza'

export const pasteMango = {
  slug: 'pastemango',
  name: 'PasteMango',
  category: 'Clipboard history for Mac',
  icon: '/pastemango/icon.png',
  seoDescription: 'Download PasteMango, a free Mac clipboard manager with full local history, search, pinned clips, and configurable shortcuts.',
  accent: '#16786b',
  accentOnDark: '#64cbbb',
  accentDark: '#095b51',
  accentSoft: 'rgba(22, 120, 107, 0.14)',
  directPages: true,
  download: {
    kind: 'website',
    url: downloadUrl,
    label: 'Download for Mac',
    compactLabel: 'Download for Mac',
  },

  facts: [
    { label: 'Platform', value: 'macOS 14 or later' },
    { label: 'Storage', value: 'On this Mac' },
    { label: 'Price', value: 'Free' },
  ],

  hero: {
    eyebrow: 'Clipboard history for Mac',
    headline: 'Find what you copied.',
    sub: 'Search your full clipboard history, pin what you use often, and reuse saved text and images. PasteMango is free and keeps your clips on your Mac.',
    ctas: [{ label: 'Buy Me a Coffee', href: coffeeUrl, external: true }],
    ctaNote: 'Version 1.1 · macOS 14 or later · Apple silicon and Intel. Open the DMG and drag PasteMango into Applications.',
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
      { q: 'How do I install PasteMango?', a: `[Download the free PasteMango 1.1 disk image](${downloadUrl}), open it, and drag PasteMango into Applications. Then open PasteMango from Applications. It runs on Apple silicon and Intel Macs with macOS 14 or later.` },
      { q: 'How do I update my direct download?', a: 'Quit PasteMango, then open the new disk image and replace PasteMango in Applications. Your saved history and preferences stay on your Mac.' },
      { q: 'How do I reuse a saved clip?', a: 'Click the PasteMango icon in the menu bar. Find a clip and click it to copy it back to the clipboard. Switch to the app where you want to use it and paste.' },
      { q: 'Why is a clip missing?', a: 'In Settings → General, check that Monitor clipboard automatically is enabled. Copy a new line of plain text. If macOS prompts for clipboard access, allow it if you want automatic monitoring. PasteMango skips items their source marks as concealed, transient, or automatically generated.' },
      { q: 'What are the default shortcuts?', a: 'Command–Shift–V opens PasteMango, Command–Shift–F opens search, and Command–Shift–P pins the latest clip. They work while PasteMango is running. Change or disable them in Settings → Global keyboard shortcuts.' },
      { q: 'What happens to older clips?', a: 'All saved clips stay available to search, pin, and reuse. To remove all clips from your history, choose Settings → History → Clear History.' },
      { q: 'How do I start PasteMango at login?', a: 'Enable Launch at login in Settings → General. If macOS asks for approval, open Login Items in System Settings and approve PasteMango.' },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '28 November 2026',
    seoDescription: 'How PasteMango for Mac handles local clipboard history, settings, and its optional contribution link.',
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
          { p: `GitHub hosts the Mac download. The optional [Buy Me a Coffee](${coffeeUrl}) link opens an external page in your browser. Buy Me a Coffee handles any contribution you choose to make.` },
        ],
      },
      {
        heading: 'Retention and controls',
        blocks: [
          { p: 'To stop capture, turn off Monitor clipboard automatically in Settings → General or quit PasteMango. You can also manage clipboard access in macOS System Settings where available.' },
          { p: 'Clips saved before you paused capture remain available in your local history.' },
          { p: 'Delete individual clips in the main window or choose Settings → History → Clear History to remove all saved clips from history. These actions mark clips as deleted. Their records can remain in the local database.' },
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
    lastUpdated: '28 November 2026',
    seoDescription: 'Release information and terms for PasteMango for Mac.',
    summary: 'These terms describe the free PasteMango Mac download, voluntary contributions, and local clipboard history.',
    sections: [
      {
        heading: 'Free download and contributions',
        blocks: [
          { p: 'The Mac download is free and includes all features and access to your full local clipboard history.' },
          { p: `Contributions through [Buy Me a Coffee](${coffeeUrl}) are voluntary. Buy Me a Coffee handles contributions on its website.` },
        ],
      },
      {
        heading: 'Local history',
        blocks: [{ p: 'PasteMango stores clipboard history on your Mac. Keep important material in its original app or another location you control. Clearing history removes all saved clips from the history view.' }],
      },
      {
        heading: 'Contact and changes',
        blocks: [{ p: `For questions about the app or these terms, email [${supportEmail}](mailto:${supportEmail}). The date at the top of this page shows the most recent update.` }],
      },
    ],
  },
}
