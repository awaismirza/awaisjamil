import { BarChart3, Calculator, Dumbbell, ListChecks, Play, Timer, Trophy } from 'lucide-react'

export const logMyRep = {
  slug: 'log-my-rep',
  name: 'Log My Rep',
  category: 'Set-by-set workout logger with PR detection',
  icon: '/log-my-rep/icon.png',
  iconDark: '/log-my-rep/icon-dark.png',
  seoDescription:
    'Log My Rep is a native iPhone workout logger with automatic personal-record detection, background-safe rest timers, 28 training programs, and 165 animated exercise demonstrations. Free for 20 sessions a month; Rep Unlimited is $9.99/year with a 7-day free trial.',

  accent: '#3B7EF2',
  accentDark: '#2C63C7',
  accentSoft: 'rgba(59, 126, 242, 0.14)',
  download: { kind: 'coming-soon', note: 'Log My Rep is in final testing ahead of its App Store release.' },

  facts: [
    { label: 'Platform', value: 'iPhone · iOS 26.5+' },
    { label: 'Pricing', value: 'Free tier · Rep Unlimited $9.99/year' },
    { label: 'Data', value: 'On-device only' },
  ],

  hero: {
    eyebrow: 'Set-by-set logging with automatic PR detection',
    headline: 'Log every set.',
    headlineAccent: 'Beat every best.',
    sub: 'Log My Rep is a workout logger built for the gym floor, not the couch. Logging a set takes two taps — the next set is pre-armed, the rest timer starts itself, and a personal record is flagged the moment you hit one. Every exercise ships with an animated demonstration drawn on-device.',
    badges: ['7-day free trial', '$9.99/year', 'On-device — no accounts, no analytics'],
  },

  closing: {
    title: 'Your training, on the record.',
    sub: 'Log My Rep is coming to the App Store. Free to use up to 20 sessions a month — Rep Unlimited removes the cap for $9.99/year.',
  },

  metrics: [
    { value: '165', label: 'Exercises seeded, each with an animated demonstration' },
    { value: '28', label: 'Structured training programs in the library' },
    { value: '0', label: 'Accounts, servers, or trackers involved' },
  ],

  screenshotsLabel: 'The app',
  screenshotsTitle: 'Built to disappear while you train.',
  screenshots: [
    {
      src: '/log-my-rep/screenshot-today.png',
      alt: 'Log My Rep Today tab showing the start-workout button, monthly session meter, and program picks',
      title: 'Start in one tap',
      caption: 'Today leads with your active program day, your streak, and the sessions you have logged this month.',
      placeholder: true,
    },
    {
      src: '/log-my-rep/screenshot-session.png',
      alt: 'Log My Rep active session screen logging a set of bench press with a rest timer running',
      title: 'Two taps per set',
      caption: 'Weight and reps carry over from your last set, so logging is a stepper nudge and a tap.',
      placeholder: true,
    },
    {
      src: '/log-my-rep/screenshot-progress.png',
      alt: 'Log My Rep progress tab with estimated one-rep-max charts and body-weight tracking',
      title: 'Progress you can read',
      caption: 'Estimated 1RM trends, volume by muscle group, body weight, streaks, and achievements.',
      placeholder: true,
    },
    {
      src: '/log-my-rep/screenshot-programs.png',
      alt: 'Log My Rep programs library grouped by training goal',
      title: '28 programs, ready to run',
      caption: 'Push/pull/legs, upper/lower, 5/3/1, full body, and a proven-classics pack — grouped by goal.',
      placeholder: true,
    },
  ],

  featuresTitle: 'Everything a training log should do.',
  features: [
    {
      icon: Dumbbell,
      title: 'Set-by-set logging',
      description:
        'Weight and reps pre-fill from your last set on that exercise. Mark warm-ups, build supersets, and reorder exercises mid-session without losing your place.',
    },
    {
      icon: Trophy,
      title: 'Automatic PR detection',
      description:
        'Every working set is scored against your entire history using estimated 1RM. When you beat a best, the app tells you the moment you log it — warm-ups excluded.',
    },
    {
      icon: Timer,
      title: 'Rest timers that survive backgrounding',
      description:
        'Rest starts automatically when you log a set and is tracked against an end date, not a tick count — so it stays correct when you lock your phone or switch apps.',
    },
    {
      icon: ListChecks,
      title: '28 training programs',
      description:
        'Push/pull/legs, upper/lower, full body, 5/3/1, high-volume splits, and a proven-classics pack. Activate one and Today always knows which day is next.',
    },
    {
      icon: Play,
      title: '165 animated exercise demos',
      description:
        'Every movement resolves to a vector athlete animation drawn at runtime — no bundled videos, no downloads, correct in light and dark mode.',
    },
    {
      icon: BarChart3,
      title: 'Progress & history',
      description:
        'Estimated 1RM charts per exercise, volume by muscle group, body-weight tracking, training streaks, achievements, and a full searchable session history.',
    },
    {
      icon: Calculator,
      title: 'Plate calculator',
      description:
        'Work out exactly which plates go on the bar for any target weight, in kilograms or pounds, without doing arithmetic between sets.',
    },
  ],

  howItWorksTitle: 'From install to first PR.',
  howItWorks: [
    {
      title: 'Tell it how you train',
      description:
        'A short optional setup asks your goal, experience, and how many days a week you train — then puts matching programs front and centre.',
    },
    {
      title: 'Start a workout',
      description:
        'Pick your program day, a saved template, or build a session on the fly from the 165-exercise catalogue.',
    },
    {
      title: 'Log sets and let it do the rest',
      description:
        'Rest timers start themselves, PRs are flagged as they happen, and everything lands in your history and progress charts automatically.',
    },
  ],

  pricing: {
    title: 'Free to use. Cheap to unlock.',
    sub: 'The free tier is a real training log, not a demo — 20 logged sessions every calendar month, forever.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        per: '/ forever',
        description: '20 logged sessions per calendar month, with the full logging experience.',
        features: [
          '20 logged sessions per month',
          'All 165 exercises and animated demonstrations',
          'PR detection, rest timers, and plate calculator',
          'Full history, progress charts, and CSV export',
          'Browse the entire program library',
        ],
      },
      {
        name: 'Rep Unlimited',
        price: '$9.99',
        per: '/ year',
        description: 'Starts with a 7-day free trial. Cancel anytime.',
        features: [
          'Unlimited logged sessions — no monthly cap',
          'Activate any of the 28 training programs',
          'Import add-on program days as templates',
          'Everything in the free tier',
        ],
        highlight: true,
        badge: '7-day free trial',
        note: 'Auto-renewing subscription via the App Store. Manage or cancel anytime in Settings → Apple ID → Subscriptions.',
      },
    ],
  },

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'Questions about Log My Rep, the free trial, or Rep Unlimited? Support is handled directly by the developer.',
    checklist: ['App version (Settings → About)', 'iPhone model and iOS version', 'A short description of the issue'],
    faqs: [
      {
        q: 'What does the free tier actually include?',
        a: 'Everything except the two paid gates. You get all 165 exercises, animated demonstrations, PR detection, rest timers, the plate calculator, full history, progress charts, and CSV export — capped at 20 logged sessions per calendar month. The cap resets on the first of each month.',
      },
      {
        q: 'What does Rep Unlimited unlock?',
        a: 'Two things: unlimited logged sessions (no 20-per-month cap), and the ability to **activate** a training program so Today tracks which day comes next. You can browse every program in the library for free — activation is the paid part.',
      },
      {
        q: 'Is the 7-day trial really free?',
        a: 'Yes. Apple does not charge you until the 7 days end, and you can cancel anytime before then in Settings → Apple ID → Subscriptions with nothing charged.',
      },
      {
        q: 'How are personal records calculated?',
        a: 'Log My Rep uses the Epley formula for estimated one-rep max — weight × (1 + reps ÷ 30). Each working set is compared against your full history and against earlier sets in the same session. Sets you mark as warm-ups are excluded.',
      },
      {
        q: 'Does the rest timer keep running if I lock my phone?',
        a: 'Yes. Rest timers are tracked against an end date rather than counting ticks, so they stay accurate whether the app is backgrounded, your screen is off, or you switch to something else mid-set.',
      },
      {
        q: 'Can I log in kilograms and pounds?',
        a: 'Both. Pick your unit in Settings and everything — logging, charts, history, and the plate calculator — follows it. Weights are stored in a single canonical unit internally, so switching units never corrupts your history.',
      },
      {
        q: 'Does Log My Rep sync between devices?',
        a: 'Not in this version. All data is stored locally on your iPhone. You can export everything as CSV at any time from Settings → Export data.',
      },
      {
        q: 'Does Log My Rep track me or sell my data?',
        a: 'No. There is no account, no server we operate, and no analytics or advertising SDKs. Your training data never leaves your device.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '20 August 2026',
    seoDescription:
      'Log My Rep privacy policy: no account, no server, no analytics. Workouts, exercises, and body measurements stay on your device.',
    summary:
      'Log My Rep has no account, no server, and no analytics. Every workout, set, exercise, program, and body measurement you record is stored locally on your iPhone — never transmitted to us or anyone else.',
    sections: [
      {
        heading: '1. Who we are',
        blocks: [
          {
            p: 'Log My Rep ("the App", "we", "us", "our") is an iOS application developed and published by Awais Jamil, an individual developer. Our contact email is [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
          {
            p: 'This Privacy Policy explains how we handle information in connection with your use of Log My Rep on iPhone. By downloading or using the App you agree to the practices described in this policy.',
          },
        ],
      },
      {
        heading: '2. Information we collect',
        blocks: [
          { h3: 'Data you enter directly' },
          { p: 'When you use Log My Rep you create the following information, entirely on your device:' },
          {
            ul: [
              'Workout sessions: date, start and end time, duration, session name, and notes',
              'Set entries: exercise name, weight, repetitions, whether the set was a warm-up, and whether it set a personal record',
              'Custom exercises and workout templates you create, and edits you make to the seeded catalogue',
              'Programs you activate and your position in a program rotation',
              'Optional profile details: your name, date of birth, body option, height, and current weight',
              'Body-weight log entries you record over time',
              'App preferences: weight unit, appearance, default rest length, rest sound, and haptics',
            ],
          },
          {
            p: 'All of this information is stored exclusively on your device using Apple’s SwiftData framework and the standard iOS preferences store. The SwiftData container is configured as local-only — iCloud sync is deliberately disabled — so your training data is not copied to any server, ours or Apple’s.',
          },
          { h3: 'Sign in with Apple' },
          {
            p: 'Log My Rep optionally offers Sign in with Apple during first-run setup, purely as a convenience for pre-filling your name. If you use it, we store the anonymous Apple user identifier and the name Apple provides on your device only. We do not operate a server, so this identifier is never transmitted anywhere and is not used to track you. You can skip this entirely and set up the App manually.',
          },
          { h3: 'Crash reports' },
          {
            p: 'We rely on Apple’s built-in crash reporting (delivered via Xcode Organizer and TestFlight). Crash logs are anonymised by Apple before they reach us and do not include your workouts, exercises, or profile details. We do not embed any third-party analytics or crash-reporting SDK.',
          },
          { h3: 'Information we do NOT collect' },
          { p: 'We do not collect, process, or transmit:' },
          {
            ul: [
              'Advertising identifiers (IDFA) — we do not use ATT',
              'Your location, contacts, or photo library',
              'Health or fitness data from Apple Health — Log My Rep does not request HealthKit access',
              "Browsing or usage analytics beyond Apple's anonymised crash logs",
              'Any data from children under 13',
            ],
          },
        ],
      },
      {
        heading: '3. Health & fitness information',
        blocks: [
          {
            p: 'The information you log in Log My Rep — lifts, repetitions, body weight, height, and date of birth — can be considered health-related. Because it is stored only on your device and we operate no servers, we never receive, process, or have any ability to access it.',
          },
          {
            p: 'Log My Rep does **not** integrate with Apple Health. Nothing you record is written to HealthKit, and nothing is read from it.',
          },
        ],
      },
      {
        heading: '4. Notifications & timers',
        blocks: [
          {
            p: 'Log My Rep uses local, on-device timing to run rest timers between sets. Any alert it raises is scheduled and delivered entirely by iOS on your device — no push notification service or third party is involved.',
          },
          {
            p: 'You can manage notification permission at any time in **Settings → Notifications → Log My Rep** on your iPhone. Changing it does not delete any data already logged in the App.',
          },
        ],
      },
      {
        heading: '5. In-app purchase',
        blocks: [
          {
            p: 'Rep Unlimited is processed entirely by Apple through the App Store using StoreKit. We do not collect or store your payment card information. Your entitlement (whether you are on a free trial, subscribed, or on the free tier) is tracked locally on your device and re-synced from Apple via **Restore Purchase** — we do not operate a server that tracks your purchase or subscription status.',
          },
        ],
      },
      {
        heading: '6. Data storage & security',
        blocks: [
          {
            p: 'All data is stored in SwiftData and iOS preferences on your device, protected by your device’s hardware encryption (active when a passcode is set). We recommend keeping your iPhone’s iOS up to date.',
          },
          {
            p: 'We do not operate any servers that store your personal data. The only external party involved at all is Apple, for in-app purchases, Sign in with Apple, and crash reporting — each governed by Apple’s own privacy policy.',
          },
        ],
      },
      {
        heading: '7. Data retention & deletion',
        blocks: [
          { p: 'Your data is retained on your device until you delete it. You can:' },
          {
            ul: [
              'Delete individual sessions, sets, exercises, templates, or body-weight entries from within the App',
              'Use **Settings → Delete all data** to wipe every record and reset the App to a fresh catalogue',
              'Delete all Log My Rep data by removing the App from your iPhone — this permanently removes its local data store',
            ],
          },
          { p: 'We have no ability to delete data on your behalf, as we have no access to it.' },
        ],
      },
      {
        heading: '8. Exporting your data',
        blocks: [
          {
            p: 'Log My Rep can export your complete set history as a CSV file from **Settings → Export data**. The export is generated on your device and handed to the standard iOS share sheet — where it goes next is entirely your choice. We never see the file.',
          },
        ],
      },
      {
        heading: "9. Children's privacy",
        blocks: [
          {
            p: 'Log My Rep is not directed at children and we do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has entered personal data into the App, please contact us and we will provide guidance on removing it from the device.',
          },
        ],
      },
      {
        heading: '10. Your rights',
        blocks: [
          {
            p: 'Because all data is stored locally on your device and we have no access to it, you are in full control. You can view, export as CSV, and delete your data entirely within the App at any time.',
          },
          {
            p: 'If you are located in the European Economic Area, United Kingdom, or Australia, you may have additional rights under applicable privacy law (GDPR, UK GDPR, or the Privacy Act 1988 respectively). Since we do not process your personal data on our own servers, most of these rights are exercised directly through the App. For any questions, contact us at [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
      {
        heading: '11. Changes to this policy',
        blocks: [
          {
            p: 'We may update this Privacy Policy periodically. When we do, we will update the "Last updated" date at the top of this page. Continued use of Log My Rep after changes are posted constitutes your acceptance of the revised policy.',
          },
        ],
      },
      {
        heading: '12. Contact us',
        blocks: [
          { p: 'Questions about this Privacy Policy? We’re happy to help.' },
          {
            ul: ['**Developer:** Awais Jamil', '**Email:** [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com)'],
          },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: '20 August 2026',
    seoDescription:
      'Terms and conditions for Log My Rep, including the free tier session cap, Rep Unlimited auto-renewal and cancellation, the 7-day free trial, and the Apple EULA.',
    summary:
      'Use Log My Rep to log your own training. Don’t misuse the App or reverse-engineer it, and understand it is provided as-is and is not a medical, coaching, or fitness-advice tool. Rep Unlimited is an auto-renewing yearly subscription with a 7-day free trial. These Terms incorporate Apple’s standard EULA.',
    sections: [
      {
        heading: '1. Acceptance of terms',
        blocks: [
          {
            p: 'By downloading, installing, or using Log My Rep (the "App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not download or use the App.',
          },
          {
            p: "These Terms apply to all users of any version of Log My Rep distributed through the Apple App Store. Your use of the App is also subject to Apple's [Standard End User License Agreement (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), which is incorporated here by reference. In the event of a conflict between these Terms and Apple's EULA, Apple's EULA controls with respect to Apple's role.",
          },
          {
            p: 'We reserve the right to update these Terms at any time. Continued use after updates are posted constitutes acceptance of the revised Terms.',
          },
        ],
      },
      {
        heading: '2. Description of the App',
        blocks: [
          { p: 'Log My Rep is a personal resistance-training log that lets you:' },
          {
            ul: [
              'Record workouts set by set, with weight, repetitions, and warm-up marking',
              'Have personal records detected automatically from your logged history',
              'Run rest timers between sets that stay accurate in the background',
              'Follow structured training programs from a curated library, or build your own templates',
              'View animated demonstrations and technique notes for each exercise',
              'Track estimated one-rep max, training volume, body weight, streaks, and achievements',
              'Calculate barbell plate loading for any target weight',
              'Export your complete set history as CSV',
            ],
          },
          {
            p: '**Important:** Log My Rep is a personal training-log and habit-tracking tool only. It does **not** provide medical, physiotherapeutic, nutritional, or professional coaching advice. Its exercise demonstrations, technique notes, and training programs are general information, not personalised instruction. Resistance training carries an inherent risk of injury. Consult a qualified physician before starting any exercise program, and a qualified coach for technique instruction. You train at your own risk.',
          },
        ],
      },
      {
        heading: '3. Eligibility',
        blocks: [
          {
            p: 'You must be at least 13 years old and hold a valid Apple ID to use Log My Rep. By using the App you represent and warrant that you meet these requirements. The App is intended for personal, non-commercial use.',
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
        heading: '5. Free tier, trial & Rep Unlimited',
        blocks: [
          { h3: 'Free tier' },
          {
            p: 'Log My Rep is free to use for up to 20 logged workout sessions per calendar month. The count resets at the start of each calendar month. Within that cap, the free tier includes the full logging experience: the complete exercise catalogue, animated demonstrations, personal-record detection, rest timers, the plate calculator, history, progress charts, and CSV export.',
          },
          { h3: 'Rep Unlimited subscription' },
          {
            p: 'Rep Unlimited is an auto-renewing yearly subscription, priced at $9.99 USD per year through the Apple App Store, and preceded by a 7-day free trial starting when you first subscribe on a device — no charge is made during the trial.',
          },
          {
            p: "Payment is charged to your Apple ID at confirmation of purchase (or, if you started a free trial, when the trial ends, unless you cancel first). Your subscription automatically renews for the same length at the then-current price unless you turn off auto-renewal at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage or cancel your subscription, and turn off auto-renewal, at any time in your iPhone's Settings → [your name] → Subscriptions — cancelling stops future renewals but does not refund the current period. Any unused portion of a free trial is forfeited if you cancel during the trial.",
          },
          { h3: 'What Rep Unlimited unlocks' },
          { p: 'An active subscription (including its trial period) unlocks:' },
          {
            ul: [
              'Unlimited logged sessions — the 20-per-month cap is removed',
              'Activation of any training program in the library, so the App tracks your rotation',
              'Importing add-on program days as reusable workout templates',
            ],
          },
          { h3: 'Restoring purchases' },
          {
            p: 'If you reinstall the App or switch devices, use **Restore Purchase** in Settings to re-link an active subscription to the App — no new charge is made.',
          },
          { h3: 'Price changes' },
          {
            p: "We may change subscription prices at any time for future purchasers or renewal terms, subject to Apple's requirements for notifying existing subscribers of price increases.",
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
          { p: 'You agree to use Log My Rep only for lawful purposes and in accordance with these Terms. You must not:' },
          {
            ul: [
              'Reverse-engineer, decompile, or disassemble any part of the App',
              'Modify, adapt, translate, or create derivative works based on the App',
              "Use the App in any manner that violates Apple's App Store Guidelines or applicable laws",
              'Attempt to gain unauthorised access to any portion or feature of the App, or to circumvent the free-tier session cap',
            ],
          },
          {
            p: 'You are solely responsible for how you train and for any decisions you make based on your logged history, estimated one-rep max figures, or the programs and demonstrations included in the App.',
          },
        ],
      },
      {
        heading: '7. Intellectual property',
        blocks: [
          {
            p: 'Log My Rep, its name, logo, user interface design, exercise animation system, program library, source code, and all associated intellectual property are owned by or licensed to the developer, Awais Jamil. Nothing in these Terms grants you any ownership rights in the App or its content. Your own logged training data remains yours.',
          },
        ],
      },
      {
        heading: '8. Privacy',
        blocks: [
          {
            p: 'Your use of Log My Rep is also governed by our [Privacy Policy](/products/log-my-rep/privacy), which is incorporated into these Terms by reference. By using the App you consent to the data practices described in the Privacy Policy.',
          },
        ],
      },
      {
        heading: '9. Third-party services',
        blocks: [
          { p: 'Log My Rep integrates with the following Apple platform services:' },
          {
            ul: [
              '**Apple StoreKit** — for the Rep Unlimited subscription. Payment processing is handled entirely by Apple.',
              '**Sign in with Apple** — optional, used only to pre-fill your name during setup.',
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
              'Estimated one-rep max figures, personal-record detection, or plate calculations will be accurate for your circumstances — estimated 1RM is a formula-based approximation, not a measurement',
              'The exercise demonstrations, technique notes, or training programs are appropriate, safe, or effective for you',
              'The App will be compatible with future iOS versions',
            ],
          },
          {
            p: 'Log My Rep is a training-log and habit-tracking aid, not a medical device, diagnostic tool, or substitute for professional coaching or medical supervision. You are responsible for your own health, technique, and training decisions.',
          },
        ],
      },
      {
        heading: '11. Limitation of liability',
        blocks: [
          {
            p: 'To the maximum extent permitted by applicable law, the developer (Awais Jamil) shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to your use of or inability to use the App, including but not limited to loss of data, injury sustained while training, or any decision made in reliance on the App’s tracking, estimates, or programs.',
          },
          {
            p: 'Our total aggregate liability to you for any claim arising from these Terms or your use of the App shall not exceed the total amount you paid for Rep Unlimited, or AUD $10 if you have not made a purchase.',
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
            ul: ['**Developer:** Awais Jamil', '**Email:** [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com)'],
          },
        ],
      },
    ],
  },
}
