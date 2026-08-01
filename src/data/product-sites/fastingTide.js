import {
  Bell,
  CalendarDays,
  ChartNoAxesCombined,
  CircleGauge,
  Download,
  ListChecks,
  MoonStar,
  ShieldCheck,
} from 'lucide-react'

export const fastingTide = {
  slug: 'fasting-tide',
  name: 'Fasting Tide',
  category: 'Fasting timer, log & insights',
  icon: '/fasting-tide/icon.png',
  seoDescription:
    'Fasting Tide is a private intermittent-fasting timer for iPhone, iPad, and Mac, with routines, a full history log, and useful insights.',

  // Sunset and dusk tones drawn from the Fasting Tide app theme.
  accent: '#C95A36',
  accentDark: '#A95D61',
  accentSoft: 'rgba(201, 90, 54, 0.13)',
  // TODO: replace with { kind: 'app-store', url: '…' } once Fasting Tide is live.
  download: { kind: 'coming-soon', note: 'Fasting Tide is coming soon to the App Store.' },

  facts: [
    { label: 'Platform', value: 'iPhone, iPad & Mac' },
    { label: 'Privacy', value: '100% on-device' },
    { label: 'Pricing', value: 'Free · $9.99 one-time' },
  ],

  hero: {
    eyebrow: 'Fasting timer, log & insights',
    headline: 'A calmer way to',
    headlineAccent: 'keep your fasting rhythm.',
    sub: 'Track your fasts with a clean ring timer, weekly routines with real rest days, and a full history log. No account, no ads — everything stays on your device.',
    ctaNote: 'Coming soon for iPhone, iPad & Mac',
    badges: ['No account or ads', 'Works fully offline', 'One-time Pro unlock, no subscription'],
  },

  closing: {
    title: 'Make space for a rhythm that fits your week.',
    sub: 'Fasting Tide keeps the timer, history, and insight close at hand — and private on your device.',
  },

  screenshotsLabel: 'A closer look',
  screenshotsTitle: 'A focused flow from today to your long-term rhythm.',
  screenshots: [
    {
      placeholder: true,
      title: 'Today',
      caption: 'A clean ring timer for starting, tracking, and ending a fast.',
    },
    {
      placeholder: true,
      title: 'Routine',
      caption: 'Set a weekly plan with real rest days that do not break your routine.',
    },
    {
      placeholder: true,
      title: 'History',
      caption: 'Review completed fasts in a calendar log and add past sessions when needed.',
    },
    {
      placeholder: true,
      title: 'Insights',
      caption: 'See streaks, time, completion, and progress over time.',
    },
  ],

  featuresTitle: 'A simple logbook for a sustainable practice.',
  features: [
    {
      icon: CircleGauge,
      title: 'Live ring timer',
      description: 'Start or end a fast with one tap, then view elapsed or remaining time at a glance.',
    },
    {
      icon: CalendarDays,
      title: 'Weekly routines with rest days',
      description: 'Plan your week around real life. Rest days skip fasting without breaking your routine.',
    },
    {
      icon: ListChecks,
      title: 'Complete local history',
      description: 'Keep an unlimited calendar log, with manual add and edit controls for past fasts.',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Insights that stay useful',
      description: 'Free insights include your streak, 7-day time, completion rate, and a four-week chart.',
    },
    {
      icon: Bell,
      title: 'Optional local reminders',
      description: 'Choose on-device goal-completion alerts and gentle in-progress check-ins.',
    },
    {
      icon: MoonStar,
      title: 'Quick-glance Mac timer',
      description: 'Check an active fast from the Mac menu bar, alongside the full iPhone, iPad, and Mac app.',
    },
    {
      icon: Download,
      title: 'Your data, exportable',
      description: 'Export history as CSV or create a full JSON backup to keep wherever you choose.',
    },
    {
      icon: ShieldCheck,
      title: 'Private by design',
      description: 'No account, analytics, tracking SDKs, ads, or developer-operated sync server.',
    },
  ],

  pricing: {
    title: 'Start free. Upgrade only when your practice grows.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        description: 'A complete daily fasting companion, free forever for plans up to 16 hours.',
        features: [
          '12h, 14h, and 16h fasting plans',
          'Full timer, log, editing, export, and safety guidance',
          'Streak, 7-day time, completion rate, and 4-week chart',
        ],
      },
      {
        name: 'Fasting Tide Pro',
        price: '$9.99',
        per: 'one-time',
        description: 'Pay once. Unlock longer fasting windows and a deeper view of your progress — no subscription.',
        features: [
          '18h, 20h, OMAD, and other longer windows',
          'Notes and difficulty check-ins for every fast',
          '13-week heatmap, adherence stats, and range selector',
        ],
        highlight: true,
      },
    ],
  },

  support: {
    email: 'owaesmirza@gmail.com',
    intro: 'Need help with Fasting Tide? Send an email and we’ll get back to you.',
    checklist: ['Your device and OS version', 'A short description of what happened', 'A screenshot, if it helps explain the issue'],
    faqs: [
      {
        q: 'How do I change my fasting plan or add rest days?',
        a: 'Open Profile, then Routine and Current plan. Choose a fasting length and mark any day as a rest day. Rest days skip fasting and do not break your routine.',
      },
      {
        q: 'What happens when I reach the 16-hour free-tier limit?',
        a: 'Nothing breaks. 12-hour, 14-hour, and 16-hour plans stay free forever. Longer windows, plus notes, difficulty check-ins, and extended insights, are included in the one-time Fasting Tide Pro unlock.',
      },
      {
        q: 'Is my data backed up anywhere if I lose my phone?',
        a: 'Not automatically. Fasting Tide stores data locally with no cloud sync today. Create a full backup from Profile → Data and privacy from time to time, then keep the file somewhere safe.',
      },
      {
        q: 'How do I export my fasting history?',
        a: 'Go to Profile → Data and privacy. Export CSV creates a spreadsheet-friendly file; Create full backup saves a JSON file containing sessions, routines, and preferences.',
      },
      {
        q: 'How do I restore my Fasting Tide Pro purchase on a new device?',
        a: 'Open the Pro paywall from Profile → Fasting Tide Pro, then choose Restore Purchases while signed in with the same Apple ID used for the original purchase.',
      },
      {
        q: 'Does Fasting Tide require an internet connection?',
        a: 'No. The timer, log, insights, and notifications work fully offline. An internet connection is only used by the App Store itself for a one-time purchase.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '1 August 2026',
    seoDescription:
      'Fasting Tide is a local-only fasting timer with no account, analytics, tracking, or developer-operated server.',
    summary:
      'Fasting Tide has no account, no analytics, and no developer-operated server. Your fasting data stays on your device.',
    sections: [
      {
        heading: 'No account, no server',
        blocks: [
          {
            p: 'Fasting Tide has no account or sign-in of any kind. It does not collect, transmit, or store personal data on a server. There is no backend, analytics, tracking SDK, or developer-operated sync service.',
          },
        ],
      },
      {
        heading: 'Where your data lives',
        blocks: [
          {
            p: "Your fasting sessions, routines, and preferences are stored **locally on your device only**, using Apple's SwiftData framework. Nothing syncs to iCloud or another cloud service today.",
          },
        ],
      },
      {
        heading: 'Notifications and permissions',
        blocks: [
          {
            p: 'Optional reminders are scheduled locally on your device. Fasting Tide does not request access to your camera, photo library, location, or contacts. It asks for notification permission only after you choose to enable notifications.',
          },
        ],
      },
      {
        heading: 'Export and backup',
        blocks: [
          {
            p: 'You can export history as CSV or create a full JSON backup from Profile → Data and privacy. You choose where those files are saved or shared, and the developer never receives a copy.',
          },
        ],
      },
      {
        heading: 'Payments',
        blocks: [
          {
            p: 'The optional Fasting Tide Pro unlock is processed entirely by Apple through StoreKit and the App Store. The developer never sees or stores payment information.',
          },
        ],
      },
      {
        heading: 'Not medical advice',
        blocks: [
          {
            p: 'Fasting Tide is not medical advice. Consult a qualified health professional before starting a fasting routine, particularly if you have a medical condition.',
          },
        ],
      },
      {
        heading: 'Changes to this policy',
        blocks: [
          {
            p: 'If this policy changes, the last-updated date above will change too. Continued use of Fasting Tide after a change means you accept the updated policy.',
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
    lastUpdated: '1 August 2026',
    seoDescription:
      'Terms and conditions for Fasting Tide, including the one-time Fasting Tide Pro purchase and medical disclaimer.',
    summary:
      'Use Fasting Tide as a personal fasting log. Fasting Tide Pro is a one-time purchase handled by Apple — not a subscription.',
    sections: [
      {
        heading: 'License',
        blocks: [
          {
            p: "Fasting Tide is licensed for personal use on devices you own or control, under Apple's standard End User License Agreement. Fasting Tide does not use a custom EULA.",
          },
        ],
      },
      {
        heading: 'Fasting Tide Pro',
        blocks: [
          {
            p: 'The Fasting Tide Pro unlock is a **one-time purchase**, not a subscription. It does not auto-renew or expire.',
          },
        ],
      },
      {
        heading: 'Payments and refunds',
        blocks: [
          {
            p: "Purchases are processed by Apple through the App Store. Refunds are handled through Apple's standard App Store refund process, not directly by the developer.",
          },
        ],
      },
      {
        heading: 'No warranty and backups',
        blocks: [
          {
            p: 'Fasting Tide is provided "as is" without warranty of any kind. The developer is not liable for data loss. Because your data is local-only with no cloud sync today, export a backup periodically from Profile → Data and privacy.',
          },
        ],
      },
      {
        heading: 'Not medical advice',
        blocks: [
          {
            p: 'Fasting Tide does not provide medical advice. Consult a qualified healthcare professional before starting a fasting routine, particularly if you have a medical condition.',
          },
        ],
      },
      {
        heading: 'Changes to these terms',
        blocks: [
          {
            p: 'These terms may change over time. Continued use of Fasting Tide after a change means you accept the updated terms.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          { p: 'Questions about these terms? Email [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).' },
          { p: '© 2026 Awais Jamil. All rights reserved.' },
        ],
      },
    ],
  },
}
