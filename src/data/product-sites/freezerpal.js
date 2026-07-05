import { Bell, Camera, Check, ListChecks, RefreshCcw, Snowflake } from 'lucide-react'

export const freezerpal = {
  slug: 'freezerpal',
  name: 'FreezerPal',
  category: 'Freezer inventory for iPhone',
  icon: '/freezerpal/app-icon-512.png',
  seoDescription:
    "FreezerPal is a simple, focused freezer inventory tracker for iPhone that reminds you what to eat before it's too late. Free for 15 items, $9.99 one-time to unlock unlimited.",

  accent: '#2F7FE0',
  accentDark: '#1D5FB8',
  accentSoft: 'rgba(47, 127, 224, 0.13)',
  // TODO: switch to { kind: 'app-store', url: '…' } once FreezerPal ships
  download: { kind: 'coming-soon', note: 'Currently in TestFlight' },

  facts: [
    { label: 'Platform', value: 'iPhone' },
    { label: 'Pricing', value: 'Free · $9.99 one-time' },
    { label: 'Data', value: '100% on-device' },
    { label: 'Status', value: 'In TestFlight' },
  ],

  hero: {
    eyebrow: 'Freezer inventory & reminders',
    headline: 'Never lose track of',
    headlineAccent: "what's in your freezer.",
    sub: 'Add items, set expiry reminders, and get notified before food goes to waste — entirely on your device, no account required.',
    heroShot: '/freezerpal/screenshot-home.png',
    heroShotAlt: 'FreezerPal home dashboard with active items and expiring soon',
    ctaNote: 'Currently in TestFlight',
    badges: ['No account required', 'Works fully offline', 'One-time purchase, no subscription'],
  },

  closing: {
    title: 'Stop losing food to the back of the freezer.',
    sub: 'FreezerPal is coming soon to the App Store — free for your first 15 items.',
  },

  screenshotsTitle: 'Simple screens, built for a quick freezer check.',
  screenshots: [
    {
      src: '/freezerpal/screenshot-onboarding-1.png',
      alt: 'FreezerPal onboarding — never forget frozen food again',
      title: 'Onboarding',
      caption: 'Never forget frozen food again.',
    },
    {
      src: '/freezerpal/screenshot-home.png',
      alt: 'FreezerPal home dashboard with active items and expiring soon',
      title: 'Home',
      caption: 'Active items and expiring soon, at a glance.',
    },
    {
      src: '/freezerpal/screenshot-log.png',
      alt: 'FreezerPal freezer log with all tracked items',
      title: 'Freezer log',
      caption: 'Every tracked item in one list.',
    },
    {
      src: '/freezerpal/screenshot-onboarding-2.png',
      alt: 'FreezerPal pricing — free to start, powerful when you need more',
      title: 'Pricing',
      caption: 'Free to start, unlimited when you need more.',
    },
  ],

  featuresTitle: "Everything you need, nothing you don't.",
  features: [
    {
      icon: Snowflake,
      title: 'Track what you freeze',
      description: 'Quick-add presets and category icons make logging an item take seconds.',
    },
    {
      icon: Bell,
      title: 'Custom expiry reminders',
      description: 'Get nudged on the expiry date, or up to two weeks ahead — your call, per item.',
    },
    {
      icon: Camera,
      title: 'Photo per item',
      description: 'Attach a photo so you actually recognise what is in the bag or container.',
    },
    {
      icon: ListChecks,
      title: 'Clear expiring-soon view',
      description: 'See what is expiring soon and what has already gone off, at a glance.',
    },
    {
      icon: Check,
      title: 'Log used items',
      description: 'Mark items used or expired to keep the active list clean without deleting history.',
    },
    {
      icon: RefreshCcw,
      title: 'Optional monthly check-in',
      description: 'A once-a-month reminder to review your freezer, if you want one.',
    },
  ],

  pricing: {
    title: 'Free to start. One-time purchase to go unlimited.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        description: 'Track up to 15 active freezer items with every feature included.',
        features: [
          'Up to 15 active items',
          'Custom expiry reminders',
          'Photos, categories, monthly check-in',
        ],
      },
      {
        name: 'FreezerPal Unlimited',
        price: '$9.99',
        per: 'one-time',
        description: 'Not a subscription. Pay once, unlock unlimited items and reminders for good.',
        features: ['Unlimited freezer items', 'Unlimited reminders', 'Everything in Free, forever'],
        highlight: true,
      },
    ],
  },

  support: {
    email: 'owaesmirza@gmail.com',
    intro: "Need help with FreezerPal? Send an email and we'll get back to you.",
    faqs: [
      {
        q: 'How do I add a photo to a freezer item?',
        a: 'When adding or editing an item, tap the photo area to choose a photo from your library or take a new one with the camera.',
      },
      {
        q: 'What happens when I reach the 15-item free limit?',
        a: "You'll see a prompt to unlock FreezerPal Unlimited with a one-time $9.99 purchase. You can keep using your existing 15 items until you're ready to upgrade — nothing is deleted.",
      },
      {
        q: 'Is my data backed up anywhere if I lose my phone?',
        a: "No. FreezerPal stores everything locally on your device with no cloud backup, so it won't transfer automatically if you get a new phone or lose your current one.",
      },
      {
        q: 'How do I restore my FreezerPal Unlimited purchase on a new device?',
        a: 'Open Settings inside FreezerPal and use the "Restore Purchase" option, signed in with the same Apple ID you originally purchased with.',
      },
      {
        q: 'Does FreezerPal require an internet connection?',
        a: 'No. FreezerPal works fully offline — everything is stored and processed on your device.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'July 2026',
    seoDescription:
      "FreezerPal's privacy policy: no accounts, no analytics, no network calls. Everything is stored locally on your device.",
    summary:
      'FreezerPal has no accounts, no analytics, and makes no network calls. Everything you add stays on your device.',
    sections: [
      {
        heading: 'No account, no server',
        blocks: [
          {
            p: 'FreezerPal has no account or sign-in of any kind. There is no backend server, and the app makes no network calls of any kind — no analytics, no tracking SDKs, and nothing is ever transmitted off your device.',
          },
        ],
      },
      {
        heading: 'Everything stays on your device',
        blocks: [
          {
            p: "All app data — your freezer items, reminder settings, and photos — is stored **locally on your device only**, using Apple's SwiftData framework. Nothing syncs to iCloud or any other cloud service.",
          },
        ],
      },
      {
        heading: 'Camera and Photo Library',
        blocks: [
          {
            p: "FreezerPal requests Camera and Photo Library access solely so you can attach a photo to a freezer item. Photos are stored in the app's own local storage on your device and are never uploaded anywhere.",
          },
        ],
      },
      {
        heading: 'Notifications',
        blocks: [
          {
            p: 'FreezerPal requests Notification permission solely to schedule local reminders about expiring items. These are local, on-device scheduled notifications — no push notification service or third party is involved.',
          },
        ],
      },
      {
        heading: 'Payments',
        blocks: [
          {
            p: 'The optional $9.99 FreezerPal Unlimited unlock is handled entirely by Apple through the App Store. FreezerPal never sees or stores any payment information.',
          },
        ],
      },
      {
        heading: 'Changes to this policy',
        blocks: [
          {
            p: 'If this policy changes, the "Last updated" date above will reflect it. Continued use of FreezerPal after a change means you accept the updated policy.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          { p: 'Questions about privacy? Email [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).' },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: 'July 2026',
    seoDescription:
      'Terms and conditions for using FreezerPal, including the one-time FreezerPal Unlimited purchase.',
    summary:
      'Use FreezerPal for personal freezer tracking. The Unlimited unlock is a one-time purchase handled by Apple — not a subscription.',
    sections: [
      {
        heading: 'License',
        blocks: [
          {
            p: "FreezerPal is licensed for personal use on devices you own or control, under Apple's standard End User License Agreement. FreezerPal does not use a custom EULA.",
          },
        ],
      },
      {
        heading: 'FreezerPal Unlimited',
        blocks: [
          {
            p: 'The $9.99 "FreezerPal Unlimited" unlock is a **one-time purchase**, not a subscription. It does not auto-renew, expire, or require ongoing payment.',
          },
        ],
      },
      {
        heading: 'Payments and refunds',
        blocks: [
          {
            p: "All purchases are processed by Apple through the App Store. Refunds are handled through Apple's standard App Store refund process — not directly by the developer.",
          },
        ],
      },
      {
        heading: 'No warranty',
        blocks: [
          {
            p: 'FreezerPal is provided "as is", without warranty of any kind. Since all data is stored locally with no cloud backup, we recommend not relying on FreezerPal as your sole record of anything critical.',
          },
        ],
      },
      {
        heading: 'Changes to these terms',
        blocks: [
          {
            p: 'These terms may change over time. Continued use of FreezerPal after a change means you accept the updated terms.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          { p: 'Questions about these terms? Email [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).' },
        ],
      },
    ],
  },
}
