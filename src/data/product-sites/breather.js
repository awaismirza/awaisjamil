import { Activity, Bell, Coffee, RadioTower, SunMoon, Tags, Timer } from 'lucide-react'

export const breather = {
  slug: 'breather',
  name: 'Breather',
  category: 'Focus timer with hydration & break tracking',
  icon: '/breather/icon.svg',
  seoDescription:
    'Breather is a flexible focus timer for iPhone with custom categories, one-tap coffee/water logging, and configurable break reminders. Free 14-day trial, then $9.99 one-time.',

  accent: '#14B8A6',
  accentDark: '#0F8F82',
  accentSoft: 'rgba(20, 184, 166, 0.14)',
  // TODO: switch to { kind: 'app-store', url: '…' } once Breather ships
  download: { kind: 'coming-soon', note: 'Coming soon to the App Store' },

  facts: [
    { label: 'Platform', value: 'iPhone · iOS 17+' },
    { label: 'Pricing', value: '14-day trial · $9.99 one-time' },
    { label: 'Data', value: 'On-device only' },
    { label: 'Status', value: 'Coming soon' },
  ],

  hero: {
    eyebrow: 'Focus timer + hydration & break tracking',
    headline: 'Stay focused.',
    headlineAccent: 'Actually take your breaks.',
    sub: 'Breather is a flexible focus timer for iPhone — pick a category, start the clock, and log coffee, water, and breaks without ever losing your place. Configurable reminders nudge you to stand, hydrate, and rest your eyes on a schedule you control.',
    heroShot: '/breather/screenshot-timer-running-light.png',
    heroShotDark: '/breather/screenshot-timer-running-dark.png',
    heroShotAlt: 'Breather timer running a focus block with coffee, water, and break quick-log buttons',
    ctaNote: 'Coming soon to the App Store',
    badges: ['14-day free trial', 'One-time purchase, no subscription', 'On-device — no accounts, no analytics'],
  },

  closing: {
    title: 'Focus on your terms.',
    sub: 'Breather is coming soon to the App Store — try every feature free for 14 days, then unlock it once for $9.99.',
  },

  metrics: [
    { value: '14 days', label: 'Every feature unlocked, free, from your first launch' },
    { value: '$9.99', label: 'One-time purchase — not a subscription' },
    { value: '0', label: 'Accounts, servers, or trackers involved' },
  ],

  timerShowcase: { label: 'Focus', totalMinutes: 25 },

  screenshotsLabel: 'The app',
  screenshotsTitle: 'A focus timer built around how you actually work.',
  screenshots: [
    {
      src: '/breather/screenshot-onboarding.png',
      alt: 'Breather first-launch onboarding screen introducing focus, hydration, and reminders',
      title: 'A guided first run',
      caption: 'A short welcome flow introduces focus, hydration, and reminders before you ever see the timer.',
    },
    {
      src: '/breather/screenshot-timer-idle-light.png',
      srcDark: '/breather/screenshot-timer-idle-dark.png',
      alt: 'Breather timer idle screen with a category selected and daily activity rings',
      title: 'Pick a category, hit start',
      caption: 'Study, Fitness, Work, Read, or a category you create — each with its own icon and color.',
    },
    {
      src: '/breather/screenshot-timer-running-light.png',
      srcDark: '/breather/screenshot-timer-running-dark.png',
      alt: 'Breather timer running with quick-log buttons for coffee, water, and break',
      title: 'Log without losing focus',
      caption: 'Coffee, water, and custom quick-log buttons sit right next to the running timer.',
    },
    {
      src: '/breather/screenshot-history-light.png',
      srcDark: '/breather/screenshot-history-dark.png',
      alt: 'Breather history view showing a day-by-day timeline of focus, water, coffee, and breaks',
      title: 'Every session, every day',
      caption: 'Browse day by day — focus time, water, coffee, and breaks in one merged timeline.',
    },
    {
      src: '/breather/screenshot-settings-light.png',
      srcDark: '/breather/screenshot-settings-dark.png',
      alt: 'Breather settings screen with appearance, quick-log, categories, and reminder options',
      title: 'Make it yours',
      caption: 'Appearance, quick-log toggles, categories, and reminder schedules — all in one place.',
    },
    {
      src: '/breather/screenshot-reminders-dark.png',
      alt: 'Breather reminder schedules list showing Rest eyes, Hydrate, and Stand up rules',
      title: 'Reminders that respect focus',
      caption: 'Schedule reminders to stand, rest your eyes, or hydrate — on your own cadence and hours.',
    },
    {
      src: '/breather/screenshot-live-activity-dark.png',
      alt: 'Breather Live Activity on the iPhone Lock Screen showing a running Fitness timer',
      title: 'Live on your Lock Screen',
      caption: 'A Live Activity keeps the countdown visible on your Lock Screen and Dynamic Island.',
    },
  ],

  featuresTitle: 'Everything a focus session needs.',
  features: [
    {
      icon: Timer,
      title: 'Flexible focus timer',
      description:
        'Start a session for any category and adjust the duration with a rotary drag — no rigid Pomodoro blocks required. Pause, extend, skip, or stop at any time.',
    },
    {
      icon: Tags,
      title: 'Custom categories',
      description:
        'Study, Focus, Read, Fitness, and Work are built in. Add your own with a custom icon and color for anything else you track time against.',
    },
    {
      icon: Coffee,
      title: 'One-tap quick log',
      description:
        'Log a coffee or a glass of water in one tap, right from the running timer. Add your own custom quick-log items for anything else worth tracking.',
    },
    {
      icon: Bell,
      title: 'Configurable break reminders',
      description:
        'Schedule reminders to stand, rest your eyes, or hydrate on your own cadence and active hours — and choose whether they fire only while you’re focusing, or any time.',
    },
    {
      icon: Activity,
      title: 'Daily rings & history',
      description:
        'Daily progress rings for focus time, water, and breaks, plus a day-by-day history browser and a weekly stats view with a focus-by-day chart.',
    },
    {
      icon: RadioTower,
      title: 'Live Activity & Dynamic Island',
      description:
        'Track your countdown from the Lock Screen or Dynamic Island without unlocking your phone or reopening the app.',
    },
    {
      icon: SunMoon,
      title: 'Light, dark, or system',
      description:
        'Match your phone’s appearance automatically, or pick light or dark manually — Breather looks native either way.',
    },
  ],

  howItWorksTitle: 'Up and running in a minute.',
  howItWorks: [
    {
      title: 'Choose a category',
      description:
        'Pick Study, Fitness, Work, Read, or a category you’ve created, then set how long you want to focus for.',
    },
    {
      title: 'Start the timer',
      description:
        'Log a coffee or a glass of water as you go — your daily rings update instantly without pausing the session.',
    },
    {
      title: 'Take the break it reminds you about',
      description:
        'When a break reminder fires, log it, snooze it, or skip it. Your history keeps the full picture, every day.',
    },
  ],

  pricing: {
    title: 'Free to try. One purchase, forever.',
    sub: 'Every feature is unlocked for 14 days from your first launch — no card required. After that, a single $9.99 purchase unlocks it for good.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        per: '/ forever',
        description: 'Core tracking, always free — even after your trial ends.',
        features: [
          'Unlimited focus sessions & quick-logging',
          'Built-in break reminder schedules',
          '1 custom category',
          '1 custom quick-log item',
          'Last 3 days of history',
        ],
      },
      {
        name: 'Breather Pro',
        price: '$9.99',
        per: 'one-time',
        description:
          'Try it free for 14 days from your first launch. Afterward, one purchase unlocks it for good — not a subscription.',
        features: [
          'Unlimited custom categories',
          'Unlimited custom quick-log items',
          'Unlimited history',
          'Advanced progress & insights',
          'CSV export',
        ],
        highlight: true,
        badge: 'Best value',
        note: 'One-time purchase via the App Store. Restore anytime from Settings → Restore Purchases.',
      },
    ],
  },

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'Questions about Breather, the free trial, or the Pro unlock? Support is handled directly by the developer.',
    checklist: ['App version (Settings → About)', 'iPhone model and iOS version', 'A short description of the issue'],
    faqs: [
      {
        q: 'Is the 14-day trial really free?',
        a: 'Yes. Every feature — unlimited categories, unlimited history, CSV export, everything — is unlocked automatically for 14 days from your first launch. No card required, no account, nothing to cancel.',
      },
      {
        q: 'What happens when my trial ends?',
        a: 'Breather keeps working on the free tier: unlimited focus sessions and quick-logging, built-in break reminders, 1 custom category, 1 custom quick-log item, and your last 3 days of history. A one-time $9.99 purchase unlocks everything again, for good.',
      },
      {
        q: 'Is Breather Pro a subscription?',
        a: 'No. It’s a single one-time purchase through the App Store — pay once, keep it forever. If you reinstall or switch devices, use **Restore Purchases** in Settings.',
      },
      {
        q: 'Does Breather work offline?',
        a: 'Yes. The timer, quick-logging, reminders, and history all work fully offline — everything is stored on your device.',
      },
      {
        q: 'Does Breather track me or sell my data?',
        a: 'No. There’s no account, no server we operate, and no analytics or advertising SDKs. Your data stays on your device.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '22 July 2026',
    seoDescription:
      'Breather privacy policy: no account, no server, no analytics. Focus sessions, categories, and reminders stay on your device.',
    summary:
      'Breather has no account, no server, and no analytics. Every focus session, quick-log entry, category, and reminder schedule you create is stored locally on your device — never transmitted to us or anyone else.',
    sections: [
      {
        heading: '1. Who we are',
        blocks: [
          {
            p: 'Breather ("the App", "we", "us", "our") is an iOS application developed and published by Awais Jamil, an individual developer. Our contact email is [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
          {
            p: 'This Privacy Policy explains how we handle information in connection with your use of Breather on iPhone. By downloading or using the App you agree to the practices described in this policy.',
          },
        ],
      },
      {
        heading: '2. Information we collect',
        blocks: [
          { h3: 'Data you enter directly' },
          { p: 'When you use Breather you create the following information, entirely on your device:' },
          {
            ul: [
              'Focus session records: category, planned and actual duration, start/end time, and whether the session completed or was stopped early',
              'Coffee and water quick-log entries, and any custom quick-log items you create',
              'Custom categories you create, including name, icon, and color',
              'Reminder schedules: cadence, active hours, active weekdays, and whether a rule is suppressed during focus sessions',
              'App preferences: sound, appearance (light/dark/system), and which quick-log buttons are visible',
            ],
          },
          {
            p: 'All of this information is stored exclusively on your device using Apple’s SwiftData framework, within an App Group container shared only between the Breather app and its own Lock Screen widget and Live Activity — not with us, and not with any third party.',
          },
          { h3: 'Live Activities & Dynamic Island' },
          {
            p: 'When a focus session is running, Breather may display a Live Activity on your Lock Screen and in the Dynamic Island via Apple’s ActivityKit. This is rendered and updated entirely on your device — no session data is sent to us or to Apple’s servers to power it.',
          },
          { h3: 'Crash reports' },
          {
            p: 'We rely on Apple’s built-in crash reporting (delivered via Xcode Organizer and TestFlight). Crash logs are anonymised by Apple before they reach us and do not include your focus sessions, categories, or reminder settings. We do not embed any third-party analytics or crash-reporting SDK.',
          },
          { h3: 'Information we do NOT collect' },
          { p: 'We do not collect, process, or transmit:' },
          {
            ul: [
              'Advertising identifiers (IDFA) — we do not use ATT',
              'Your location, contacts, or photos',
              "Browsing or usage analytics beyond Apple's anonymised crash logs",
              'Any data from children under 13',
            ],
          },
        ],
      },
      {
        heading: '3. Notifications',
        blocks: [
          {
            p: 'Breather requests Notification permission to schedule two kinds of local, on-device notifications: a "block complete" alert when a focus session’s timer ends, and break reminders based on the schedules you configure. Both are scheduled and delivered entirely by iOS on your device — no push notification service or third party is involved.',
          },
          {
            p: 'You can revoke notification permission at any time in **Settings → Notifications → Breather** on your iPhone. Revoking it simply stops reminders and the completion alert from appearing; it does not delete any data already logged in the App.',
          },
        ],
      },
      {
        heading: '4. In-app purchase',
        blocks: [
          {
            p: 'The one-time Breather Pro unlock is processed entirely by Apple through the App Store using StoreKit. We do not collect or store your payment card information. Your entitlement (whether you’re on the free trial, expired, or have purchased Pro) is tracked locally on your device and re-synced from Apple via **Restore Purchases** — we do not operate a server that tracks your purchase.',
          },
        ],
      },
      {
        heading: '5. Data storage & security',
        blocks: [
          {
            p: 'All data is stored in SwiftData on your device, protected by your device’s hardware encryption (active when a passcode is set). We recommend keeping your iPhone’s iOS up to date.',
          },
          {
            p: 'We do not operate any servers that store your personal data. The only external party involved at all is Apple, for notifications, Live Activities, in-app purchases, and crash reporting — each governed by Apple’s own privacy policy.',
          },
        ],
      },
      {
        heading: '6. Data retention & deletion',
        blocks: [
          { p: 'Your data is retained on your device until you delete it. You can:' },
          {
            ul: [
              'Delete individual sessions, quick-log entries, categories, or reminder rules from within the App',
              'Delete all Breather data by removing the App from your iPhone — this permanently removes its SwiftData store and its App Group container',
            ],
          },
          { p: 'We have no ability to delete data on your behalf, as we have no access to it.' },
        ],
      },
      {
        heading: "7. Children's privacy",
        blocks: [
          {
            p: 'Breather is not directed at children and we do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has entered personal data into the App, please contact us and we will provide guidance on removing it from the device.',
          },
        ],
      },
      {
        heading: '8. Your rights',
        blocks: [
          {
            p: 'Because all data is stored locally on your device and we have no access to it, you are in full control. You can view, export (via CSV, a Pro feature), and delete your data entirely within the App at any time.',
          },
          {
            p: 'If you are located in the European Economic Area, United Kingdom, or Australia, you may have additional rights under applicable privacy law (GDPR, UK GDPR, or the Privacy Act 1988 respectively). Since we do not process your personal data on our own servers, most of these rights are exercised directly through the App. For any questions, contact us at [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
      {
        heading: '9. Changes to this policy',
        blocks: [
          {
            p: 'We may update this Privacy Policy periodically. When we do, we will update the "Last updated" date at the top of this page. Continued use of Breather after changes are posted constitutes your acceptance of the revised policy.',
          },
        ],
      },
      {
        heading: '10. Contact us',
        blocks: [
          { p: 'Questions about this Privacy Policy? We’re happy to help.' },
          {
            ul: [
              '**Developer:** Awais Jamil',
              '**Email:** [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com)',
            ],
          },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: '22 July 2026',
    seoDescription:
      'Terms and conditions for Breather, including the free tier, the 14-day trial, the one-time Pro unlock, and the Apple EULA.',
    summary:
      'Use Breather to track your own focus time, hydration, and breaks. Don’t misuse the App or reverse-engineer it, and understand it is provided as-is and isn’t a medical or workplace-safety tool. The Pro unlock is a one-time purchase, not a subscription, preceded by a 14-day free trial. These Terms incorporate Apple’s standard EULA.',
    sections: [
      {
        heading: '1. Acceptance of terms',
        blocks: [
          {
            p: 'By downloading, installing, or using Breather (the "App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not download or use the App.',
          },
          {
            p: "These Terms apply to all users of any version of Breather distributed through the Apple App Store. Your use of the App is also subject to Apple's [Standard End User License Agreement (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), which is incorporated here by reference. In the event of a conflict between these Terms and Apple's EULA, Apple's EULA controls with respect to Apple's role.",
          },
          {
            p: 'We reserve the right to update these Terms at any time. Continued use after updates are posted constitutes acceptance of the revised Terms.',
          },
        ],
      },
      {
        heading: '2. Description of the App',
        blocks: [
          { p: 'Breather is a personal focus-timer application that lets you:' },
          {
            ul: [
              'Run a focus timer against built-in or custom categories, with adjustable durations',
              'Log coffee, water, and custom quick-log items with a single tap',
              'Configure break-reminder schedules for standing, resting your eyes, hydrating, and more',
              'View daily activity rings, a day-by-day history, and weekly stats',
              'See your countdown on the Lock Screen and Dynamic Island via a Live Activity',
              'Export your logged data as CSV (Pro)',
            ],
          },
          {
            p: '**Important:** Breather is a personal productivity and habit-tracking tool only. It does **not** provide medical, ergonomic, or occupational-health advice, and its break reminders are not a substitute for your employer’s workplace safety policies or professional medical guidance. Consult a qualified professional for any health-related decisions.',
          },
        ],
      },
      {
        heading: '3. Eligibility',
        blocks: [
          {
            p: 'You must be at least 13 years old and hold a valid Apple ID to use Breather. By using the App you represent and warrant that you meet these requirements. The App is intended for personal, non-commercial use.',
          },
        ],
      },
      {
        heading: '4. Licence grant',
        blocks: [
          {
            p: 'Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to download and use the App on any iPhone you own or control, solely for your own personal use. This licence does not include the right to:',
          },
          {
            ul: [
              'Sublicense, sell, resell, or distribute the App',
              'Modify, adapt, translate, or create derivative works',
              'Reverse-engineer, decompile, disassemble, or attempt to derive source code',
              'Remove or alter any proprietary notices or labels',
            ],
          },
        ],
      },
      {
        heading: '5. Free tier, trial & Pro purchase',
        blocks: [
          { h3: 'Free tier' },
          {
            p: 'Breather offers a free tier — unlimited focus sessions and quick-logging, built-in break reminder schedules, 1 custom category, 1 custom quick-log item, and 3 days of history — available at no charge with no time limit.',
          },
          { h3: '14-day free trial' },
          {
            p: 'Every feature of Breather Pro is automatically unlocked for 14 days starting from your first launch of the App on a device, with no account, sign-up, or payment method required. Trial status is tracked locally on your device; reinstalling the App does not restart the trial if the same purchase/trial state can be restored.',
          },
          { h3: 'Breather Pro (one-time purchase)' },
          {
            p: 'After the trial ends, the following features require a one-time Breather Pro purchase made through the Apple App Store:',
          },
          {
            ul: [
              'Unlimited custom categories and quick-log items',
              'Unlimited history',
              'Advanced progress & insights',
              'CSV export',
            ],
          },
          {
            p: 'Breather Pro is a single **one-time purchase** (currently $9.99 USD, subject to regional App Store pricing) — it does not auto-renew, expire, or require any ongoing payment. Payment is charged to your Apple ID at confirmation of purchase. No refund is issued except as required by applicable law or Apple’s standard refund process.',
          },
          { h3: 'Price changes' },
          {
            p: 'We may change the Breather Pro price at any time for future purchasers. Price changes do not affect a purchase you have already made.',
          },
        ],
      },
      {
        heading: '6. User responsibilities',
        blocks: [
          {
            p: 'You agree to use Breather only for lawful purposes and in accordance with these Terms. You must not:',
          },
          {
            ul: [
              'Reverse-engineer, decompile, or disassemble any part of the App',
              'Modify, adapt, translate, or create derivative works based on the App',
              "Use the App in any manner that violates Apple's App Store Guidelines or applicable laws",
              'Attempt to gain unauthorised access to any portion or feature of the App',
            ],
          },
          {
            p: 'You are solely responsible for how you use the App, including decisions you make based on your logged focus time, hydration, or break history.',
          },
        ],
      },
      {
        heading: '7. Intellectual property',
        blocks: [
          {
            p: 'Breather, its name, logo, user interface design, source code, and all associated intellectual property are owned by or licensed to the developer, Awais Jamil. Nothing in these Terms grants you any ownership rights in the App or its content.',
          },
        ],
      },
      {
        heading: '8. Privacy',
        blocks: [
          {
            p: 'Your use of Breather is also governed by our [Privacy Policy](/products/breather/privacy), which is incorporated into these Terms by reference. By using the App you consent to the data practices described in the Privacy Policy.',
          },
        ],
      },
      {
        heading: '9. Third-party services',
        blocks: [
          { p: 'Breather integrates with the following Apple platform services:' },
          {
            ul: [
              "**Apple StoreKit** — for the one-time Pro in-app purchase. Payment processing is handled entirely by Apple.",
              "**Apple ActivityKit** — to power the Lock Screen and Dynamic Island Live Activity while a focus session is running.",
              '**Apple UserNotifications** — for local, on-device completion alerts and break reminders.',
            ],
          },
          {
            p: 'We do not embed any third-party analytics, advertising, or tracking SDKs. We are not responsible for the privacy practices of Apple’s platform services.',
          },
        ],
      },
      {
        heading: '10. Disclaimers',
        blocks: [
          {
            p: 'The App is provided **"as is"** and **"as available"** without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement.',
          },
          { p: 'Specifically, we do not warrant that:' },
          {
            ul: [
              'The App will operate error-free, uninterrupted, or free of bugs',
              'Reminder or Live Activity notifications will always be delivered — this depends on your device’s notification permissions, OS behaviour, and Apple’s ActivityKit availability',
              'The App will be compatible with future iOS versions',
            ],
          },
          {
            p: 'Breather is a habit-tracking and productivity aid, not a medical, safety, or compliance tool. You are responsible for your own health and workplace decisions.',
          },
        ],
      },
      {
        heading: '11. Limitation of liability',
        blocks: [
          {
            p: 'To the maximum extent permitted by applicable law, the developer (Awais Jamil) shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to your use of or inability to use the App, including but not limited to loss of data, missed reminders, or any decision made in reliance on the App’s tracking.',
          },
          {
            p: 'Our total aggregate liability to you for any claim arising from these Terms or your use of the App shall not exceed the total amount you paid for Breather Pro, or AUD $10 if you have not made a purchase.',
          },
          {
            p: 'Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability is limited to the fullest extent permitted by law.',
          },
        ],
      },
      {
        heading: '12. Indemnification',
        blocks: [
          {
            p: 'You agree to indemnify, defend, and hold harmless the developer from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your use of the App, your violation of these Terms, or your violation of any applicable law.',
          },
        ],
      },
      {
        heading: '13. Termination',
        blocks: [
          {
            p: 'These Terms remain in effect while you use the App. We reserve the right to terminate or suspend your access to the App immediately if you materially breach these Terms. You may stop using the App and delete it at any time without notice to us.',
          },
          { p: 'Upon termination, Sections 7, 10, 11, 12, and 14 of these Terms survive.' },
        ],
      },
      {
        heading: '14. Governing law & disputes',
        blocks: [
          {
            p: 'These Terms are governed by the laws of New South Wales, Australia, without regard to conflict-of-law principles. Any dispute arising out of or relating to these Terms or the App that cannot be resolved informally shall be subject to the exclusive jurisdiction of the courts of New South Wales, Australia.',
          },
          {
            p: 'If you are a consumer in a jurisdiction that grants you additional statutory rights (such as under Australian Consumer Law), nothing in these Terms limits those rights.',
          },
        ],
      },
      {
        heading: '15. Apple as third-party beneficiary',
        blocks: [
          {
            p: 'You acknowledge that Apple Inc. is a third-party beneficiary of these Terms and, upon your acceptance, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary. Apple has no obligation to provide any maintenance or support services for the App.',
          },
        ],
      },
      {
        heading: '16. Changes to these terms',
        blocks: [
          {
            p: 'We may update these Terms periodically. We will post the updated Terms here with a new "Last updated" date. Your continued use of the App after changes are posted constitutes your acceptance of the updated Terms.',
          },
        ],
      },
      {
        heading: '17. Contact',
        blocks: [
          { p: 'Questions or concerns about these Terms? Please reach out.' },
          {
            ul: [
              '**Developer:** Awais Jamil',
              '**Email:** [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com)',
            ],
          },
        ],
      },
    ],
  },
}
