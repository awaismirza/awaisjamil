import { Activity, Bell, Coffee, RadioTower, SunMoon, Tags, Timer } from 'lucide-react'

export const wfhFocus = {
  slug: 'wfhfocus',
  name: 'WFH Focus',
  category: 'Focus timer with hydration & break tracking',
  icon: '/wfhfocus/icon-light.png',
  iconDark: '/wfhfocus/icon-dark.png',
  seoDescription:
    'WFH Focus is a flexible focus timer for iPhone with custom categories, one-tap coffee/water logging, and configurable break reminders. Monthly or Yearly subscription with a 14-day free trial, or a one-time Lifetime purchase.',

  accent: '#14B8A6',
  accentDark: '#0F8F82',
  accentSoft: 'rgba(20, 184, 166, 0.14)',
  // TODO: switch to { kind: 'app-store', url: '…' } once WFH Focus ships
  download: { kind: 'coming-soon', note: 'Coming soon to the App Store' },

  facts: [
    { label: 'Platform', value: 'iPhone · iOS 17+' },
    { label: 'Pricing', value: '14-day free trial · Monthly, Yearly, or Lifetime' },
    { label: 'Data', value: 'On-device only' },
    { label: 'Status', value: 'Coming soon' },
  ],

  hero: {
    eyebrow: 'Focus timer + hydration & break tracking',
    headline: 'Stay focused.',
    headlineAccent: 'Actually take your breaks.',
    sub: 'WFH Focus is a flexible focus timer for iPhone — pick a category, start the clock, and log coffee, water, and breaks without ever losing your place. Configurable reminders nudge you to stand, hydrate, and rest your eyes on a schedule you control.',
    ctaNote: 'Coming soon to the App Store',
    badges: ['14-day free trial', 'Monthly, Yearly, or Lifetime', 'On-device — no accounts, no analytics'],
  },

  closing: {
    title: 'Focus on your terms.',
    sub: 'WFH Focus is coming soon to the App Store — try every feature free for 14 days on a Monthly or Yearly plan, or unlock it for good with a one-time Lifetime purchase.',
  },

  metrics: [
    { value: '14 days', label: 'Free trial on any Monthly or Yearly plan' },
    { value: '3', label: 'Ways to unlock Pro — Monthly, Yearly, or Lifetime' },
    { value: '0', label: 'Accounts, servers, or trackers involved' },
  ],

  timerShowcase: { label: 'Focus', totalMinutes: 25 },

  screenshotsLabel: 'The app',
  screenshotsTitle: 'A focus timer built around how you actually work.',
  screenshots: [
    {
      src: '/wfhfocus/screenshot-onboarding.png',
      alt: 'WFH Focus first-launch onboarding screen introducing focus, hydration, and reminders',
      title: 'A guided first run',
      caption: 'A short welcome flow introduces focus, hydration, and reminders before you ever see the timer.',
    },
    {
      src: '/wfhfocus/screenshot-timer-idle-light.png',
      srcDark: '/wfhfocus/screenshot-timer-idle-dark.png',
      alt: 'WFH Focus timer idle screen with a category selected and daily activity rings',
      title: 'Pick a category, hit start',
      caption: 'Study, Fitness, Work, Read, or a category you create — each with its own icon and color.',
    },
    {
      src: '/wfhfocus/screenshot-timer-running-light.png',
      srcDark: '/wfhfocus/screenshot-timer-running-dark.png',
      alt: 'WFH Focus timer running with quick-log buttons for coffee, water, and break',
      title: 'Log without losing focus',
      caption: 'Coffee, water, and custom quick-log buttons sit right next to the running timer.',
    },
    {
      src: '/wfhfocus/screenshot-history-light.png',
      srcDark: '/wfhfocus/screenshot-history-dark.png',
      alt: 'WFH Focus history view showing a day-by-day timeline of focus, water, coffee, and breaks',
      title: 'Every session, every day',
      caption: 'Browse day by day — focus time, water, coffee, and breaks in one merged timeline.',
    },
    {
      src: '/wfhfocus/screenshot-settings-light.png',
      srcDark: '/wfhfocus/screenshot-settings-dark.png',
      alt: 'WFH Focus settings screen with appearance, quick-log, categories, and reminder options',
      title: 'Make it yours',
      caption: 'Appearance, quick-log toggles, categories, and reminder schedules — all in one place.',
    },
    {
      src: '/wfhfocus/screenshot-reminders-light.png',
      srcDark: '/wfhfocus/screenshot-reminders-dark.png',
      alt: 'WFH Focus reminder schedules list showing Rest eyes, Hydrate, and Stand up rules',
      title: 'Reminders that respect focus',
      caption: 'Schedule reminders to stand, rest your eyes, or hydrate — on your own cadence and hours.',
    },
    {
      src: '/wfhfocus/screenshot-live-activity-dark.png',
      alt: 'WFH Focus Live Activity on the iPhone Lock Screen showing a running Fitness timer',
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
        'Match your phone’s appearance automatically, or pick light or dark manually — WFH Focus looks native either way.',
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
    title: 'Free to try. Flexible to keep.',
    sub: 'Start a 14-day free trial on a Monthly or Yearly plan — cancel anytime. Prefer not to subscribe? A one-time Lifetime purchase unlocks everything for good.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        per: '/ forever',
        description: 'Core tracking, always free — no trial or purchase needed.',
        features: [
          'Unlimited focus sessions & quick-logging',
          'Built-in break reminder schedules',
          '1 custom category',
          '1 custom quick-log item',
          'Last 3 days of history',
        ],
      },
      {
        name: 'Pro',
        price: '$2.99',
        per: '/ month',
        description: 'Or $14.99/year (best value) — both start with a 14-day free trial, cancel anytime.',
        features: [
          'Unlimited custom categories',
          'Unlimited custom quick-log items',
          'Unlimited history',
          'Advanced progress & insights',
          'CSV export',
        ],
        highlight: true,
        badge: '14-day free trial',
        note: 'Auto-renewing subscription via the App Store. Manage or cancel anytime in Settings → Apple ID → Subscriptions.',
      },
      {
        name: 'Lifetime',
        price: 'One-time',
        per: 'pay once',
        description: 'Prefer not to subscribe? Pay once and unlock everything for good — no recurring charge.',
        features: [
          'Everything in Pro',
          'No trial, no auto-renewal',
        ],
        note: 'One-time purchase via the App Store. Restore anytime from Settings → Restore Purchases.',
      },
    ],
  },

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'Questions about WFH Focus, the free trial, or the Pro unlock? Support is handled directly by the developer.',
    checklist: ['App version (Settings → About)', 'iPhone model and iOS version', 'A short description of the issue'],
    faqs: [
      {
        q: 'Is the 14-day trial really free?',
        a: 'Yes. Start a Monthly or Yearly plan and every feature — unlimited categories, unlimited history, CSV export, everything — is unlocked immediately. Apple doesn\'t charge you until the 14 days end, and you can cancel anytime before then in Settings → Apple ID → Subscriptions with nothing charged.',
      },
      {
        q: 'What happens when my trial or subscription ends?',
        a: 'If you don\'t cancel, your subscription auto-renews at the regular price and Pro stays unlocked. If you cancel (during the trial or afterward), WFH Focus drops back to the free tier: unlimited focus sessions and quick-logging, built-in break reminders, 1 custom category, 1 custom quick-log item, and your last 3 days of history.',
      },
      {
        q: 'Is WFH Focus Pro a subscription?',
        a: 'It\'s your choice. Monthly and Yearly are auto-renewing subscriptions, each starting with a 14-day free trial. If you\'d rather not subscribe, a one-time Lifetime purchase unlocks everything for good with no recurring charge. If you reinstall or switch devices, use **Restore Purchases** in Settings.',
      },
      {
        q: 'Can I switch between Monthly, Yearly, and Lifetime?',
        a: 'You can switch between Monthly and Yearly anytime in Settings → Apple ID → Subscriptions — the change takes effect at your next renewal. Lifetime is a separate one-time purchase and doesn\'t require cancelling an existing subscription.',
      },
      {
        q: 'Does WFH Focus work offline?',
        a: 'Yes. The timer, quick-logging, reminders, and history all work fully offline — everything is stored on your device.',
      },
      {
        q: 'Does WFH Focus track me or sell my data?',
        a: 'No. There’s no account, no server we operate, and no analytics or advertising SDKs. Your data stays on your device.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '22 July 2026',
    seoDescription:
      'WFH Focus privacy policy: no account, no server, no analytics. Focus sessions, categories, and reminders stay on your device.',
    summary:
      'WFH Focus has no account, no server, and no analytics. Every focus session, quick-log entry, category, and reminder schedule you create is stored locally on your device — never transmitted to us or anyone else.',
    sections: [
      {
        heading: '1. Who we are',
        blocks: [
          {
            p: 'WFH Focus ("the App", "we", "us", "our") is an iOS application developed and published by Awais Jamil, an individual developer. Our contact email is [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
          {
            p: 'This Privacy Policy explains how we handle information in connection with your use of WFH Focus on iPhone. By downloading or using the App you agree to the practices described in this policy.',
          },
        ],
      },
      {
        heading: '2. Information we collect',
        blocks: [
          { h3: 'Data you enter directly' },
          { p: 'When you use WFH Focus you create the following information, entirely on your device:' },
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
            p: 'All of this information is stored exclusively on your device using Apple’s SwiftData framework, within an App Group container shared only between the WFH Focus app and its own Lock Screen widget and Live Activity — not with us, and not with any third party.',
          },
          { h3: 'Live Activities & Dynamic Island' },
          {
            p: 'When a focus session is running, WFH Focus may display a Live Activity on your Lock Screen and in the Dynamic Island via Apple’s ActivityKit. This is rendered and updated entirely on your device — no session data is sent to us or to Apple’s servers to power it.',
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
            p: 'WFH Focus requests Notification permission to schedule two kinds of local, on-device notifications: a "block complete" alert when a focus session’s timer ends, and break reminders based on the schedules you configure. Both are scheduled and delivered entirely by iOS on your device — no push notification service or third party is involved.',
          },
          {
            p: 'You can revoke notification permission at any time in **Settings → Notifications → WFH Focus** on your iPhone. Revoking it simply stops reminders and the completion alert from appearing; it does not delete any data already logged in the App.',
          },
        ],
      },
      {
        heading: '4. In-app purchase',
        blocks: [
          {
            p: 'Pro subscriptions (Monthly/Yearly) and the one-time Lifetime purchase are processed entirely by Apple through the App Store using StoreKit. We do not collect or store your payment card information. Your entitlement (whether you’re on a free trial, subscribed, have purchased Lifetime, or have no active entitlement) is tracked locally on your device and re-synced from Apple via **Restore Purchases** — we do not operate a server that tracks your purchase or subscription status.',
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
              'Delete all WFH Focus data by removing the App from your iPhone — this permanently removes its SwiftData store and its App Group container',
            ],
          },
          { p: 'We have no ability to delete data on your behalf, as we have no access to it.' },
        ],
      },
      {
        heading: "7. Children's privacy",
        blocks: [
          {
            p: 'WFH Focus is not directed at children and we do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has entered personal data into the App, please contact us and we will provide guidance on removing it from the device.',
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
            p: 'We may update this Privacy Policy periodically. When we do, we will update the "Last updated" date at the top of this page. Continued use of WFH Focus after changes are posted constitutes your acceptance of the revised policy.',
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
      'Terms and conditions for WFH Focus, including the free tier, Monthly/Yearly subscription auto-renewal and cancellation, the 14-day free trial, the one-time Lifetime purchase, and the Apple EULA.',
    summary:
      'Use WFH Focus to track your own focus time, hydration, and breaks. Don’t misuse the App or reverse-engineer it, and understand it is provided as-is and isn’t a medical or workplace-safety tool. Pro is available as an auto-renewing Monthly or Yearly subscription (each with a 14-day free trial) or a one-time Lifetime purchase. These Terms incorporate Apple’s standard EULA.',
    sections: [
      {
        heading: '1. Acceptance of terms',
        blocks: [
          {
            p: 'By downloading, installing, or using WFH Focus (the "App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not download or use the App.',
          },
          {
            p: "These Terms apply to all users of any version of WFH Focus distributed through the Apple App Store. Your use of the App is also subject to Apple's [Standard End User License Agreement (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), which is incorporated here by reference. In the event of a conflict between these Terms and Apple's EULA, Apple's EULA controls with respect to Apple's role.",
          },
          {
            p: 'We reserve the right to update these Terms at any time. Continued use after updates are posted constitutes acceptance of the revised Terms.',
          },
        ],
      },
      {
        heading: '2. Description of the App',
        blocks: [
          { p: 'WFH Focus is a personal focus-timer application that lets you:' },
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
            p: '**Important:** WFH Focus is a personal productivity and habit-tracking tool only. It does **not** provide medical, ergonomic, or occupational-health advice, and its break reminders are not a substitute for your employer’s workplace safety policies or professional medical guidance. Consult a qualified professional for any health-related decisions.',
          },
        ],
      },
      {
        heading: '3. Eligibility',
        blocks: [
          {
            p: 'You must be at least 13 years old and hold a valid Apple ID to use WFH Focus. By using the App you represent and warrant that you meet these requirements. The App is intended for personal, non-commercial use.',
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
            p: 'WFH Focus offers a free tier — unlimited focus sessions and quick-logging, built-in break reminder schedules, 1 custom category, 1 custom quick-log item, and 3 days of history — available at no charge with no time limit.',
          },
          { h3: 'Pro subscriptions (Monthly / Yearly)' },
          {
            p: 'Pro can be unlocked with an auto-renewing subscription, billed monthly or yearly through the Apple App Store. Each plan is preceded by a 14-day free trial, starting when you first subscribe to that plan on a device — no charge is made during the trial.',
          },
          {
            p: 'Payment is charged to your Apple ID at confirmation of purchase (or, if you started a free trial, when the trial ends, unless you cancel first). Your subscription automatically renews for the same length at the then-current price unless you turn off auto-renewal at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage or cancel your subscription, and turn off auto-renewal, at any time in your iPhone\'s Settings → [your name] → Subscriptions — cancelling stops future renewals but does not refund the current period. Any unused portion of a free trial is forfeited if you cancel during the trial.',
          },
          { h3: 'Pro lifetime purchase' },
          {
            p: 'If you\'d rather not subscribe, a one-time, non-consumable Lifetime purchase made through the Apple App Store unlocks Pro permanently with no recurring charge and no trial. Payment is charged to your Apple ID at confirmation of purchase.',
          },
          { h3: 'What Pro unlocks' },
          {
            p: 'Any of the above — an active subscription (including its trial period) or the Lifetime purchase — unlocks:',
          },
          {
            ul: [
              'Unlimited custom categories and quick-log items',
              'Unlimited history',
              'Advanced progress & insights',
              'CSV export',
            ],
          },
          { h3: 'Restoring purchases' },
          {
            p: 'If you reinstall the App or switch devices, use **Restore Purchases** in Settings to re-link an active subscription or a previous Lifetime purchase to the App — no new charge is made.',
          },
          { h3: 'Price changes' },
          {
            p: 'We may change subscription or Lifetime purchase prices at any time for future purchasers or renewal terms, subject to Apple\'s requirements for notifying existing subscribers of price increases. Price changes do not affect a Lifetime purchase you\'ve already made.',
          },
          { h3: 'Refunds' },
          {
            p: 'All payments are processed by Apple. Refund requests are handled entirely by Apple under its own refund policies — we do not process refunds directly.',
          },
        ],
      },
      {
        heading: '6. User responsibilities',
        blocks: [
          {
            p: 'You agree to use WFH Focus only for lawful purposes and in accordance with these Terms. You must not:',
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
            p: 'WFH Focus, its name, logo, user interface design, source code, and all associated intellectual property are owned by or licensed to the developer, Awais Jamil. Nothing in these Terms grants you any ownership rights in the App or its content.',
          },
        ],
      },
      {
        heading: '8. Privacy',
        blocks: [
          {
            p: 'Your use of WFH Focus is also governed by our [Privacy Policy](/products/wfhfocus/privacy), which is incorporated into these Terms by reference. By using the App you consent to the data practices described in the Privacy Policy.',
          },
        ],
      },
      {
        heading: '9. Third-party services',
        blocks: [
          { p: 'WFH Focus integrates with the following Apple platform services:' },
          {
            ul: [
              "**Apple StoreKit** — for Pro subscriptions and the one-time Lifetime purchase. Payment processing is handled entirely by Apple.",
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
            p: 'WFH Focus is a habit-tracking and productivity aid, not a medical, safety, or compliance tool. You are responsible for your own health and workplace decisions.',
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
            p: 'Our total aggregate liability to you for any claim arising from these Terms or your use of the App shall not exceed the total amount you paid for WFH Focus Pro, or AUD $10 if you have not made a purchase.',
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
