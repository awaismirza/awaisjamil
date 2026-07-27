import { BellRing, CalendarCheck, FileDown, Fingerprint, ListOrdered, SlidersHorizontal, Wallet } from 'lucide-react'

export const clearpath = {
  slug: 'clearpath',
  name: 'ClearPath',
  category: 'Debt payoff tracker for iPhone',
  icon: '/clearpath/icon.svg',
  seoDescription:
    'ClearPath is a local-only debt payoff tracker for iPhone. Track every credit card, loan and BNPL balance, pick a snowball, avalanche or custom strategy, and see a live debt-free date. Coming soon to the App Store.',

  accent: '#1B9E83',
  accentDark: '#126352',
  accentSoft: 'rgba(27, 158, 131, 0.14)',
  download: { kind: 'coming-soon', note: 'Coming soon to the App Store' },

  facts: [
    { label: 'Platform', value: 'iPhone · iOS 26+' },
    { label: 'Pricing', value: 'To be announced' },
    { label: 'Data', value: '100% on-device · no accounts' },
    { label: 'Status', value: 'Coming soon' },
  ],

  hero: {
    eyebrow: 'Debt payoff tracker',
    headline: 'See your way',
    headlineAccent: 'out of debt.',
    sub: 'ClearPath tracks every credit card, loan and BNPL balance in one place, projects a real debt-free date, and updates it live every time you log a payment or change strategy.',
    ctaNote: 'Coming soon to the App Store',
    badges: ['No accounts, no bank linking', 'Snowball, avalanche or your own order', '100% on-device'],
  },

  closing: {
    title: 'Your debt-free date, always current.',
    sub: 'ClearPath is coming soon to the App Store — track every balance and watch your payoff date move with every payment.',
  },

  metrics: [
    { value: '0', label: 'Accounts or bank connections required' },
    { value: '100%', label: 'On-device — no backend, no cloud upload' },
    { value: '3', label: 'Payoff strategies: snowball, avalanche, custom' },
  ],

  featuresTitle: 'Everything you need to see the finish line.',
  features: [
    {
      icon: ListOrdered,
      title: 'Snowball, avalanche or custom order',
      description:
        'Pay off smallest balances first, highest interest first, or set your own priority order — ClearPath recalculates your payoff plan around whichever strategy you pick.',
    },
    {
      icon: CalendarCheck,
      title: 'A debt-free date that stays current',
      description:
        'Every debt, minimum payment and APR feeds a live projection. Log a payment or change your extra monthly amount and the date — and total interest — update instantly.',
    },
    {
      icon: SlidersHorizontal,
      title: 'What-if simulator',
      description:
        'Try an extra monthly amount or a one-off lump sum and see exactly how many months sooner you\'d be debt-free and how much interest you\'d save, before committing to anything.',
    },
    {
      icon: Wallet,
      title: 'Payments & balance tracking',
      description:
        'Log payments with a principal/interest breakdown, or record a balance adjustment when a charge or fee changes what you owe — your projections recompute either way.',
    },
    {
      icon: BellRing,
      title: 'Local due-date reminders',
      description:
        'Get nudged a few days before each minimum is due. Reminders are scheduled entirely on your device — no push notifications, no server involved.',
    },
    {
      icon: Fingerprint,
      title: 'Face ID lock',
      description:
        'Lock ClearPath behind Face ID or Touch ID, with your device passcode as fallback. Your balances stay private even if someone picks up your phone.',
    },
    {
      icon: FileDown,
      title: 'Export your data as CSV',
      description:
        'Export every payment — date, debt, amount, principal, interest — as a CSV whenever you want a copy outside the app.',
    },
  ],

  howItWorksTitle: 'Up and running in a minute.',
  howItWorks: [
    {
      title: 'Add your debts',
      description:
        'Enter each balance, APR, minimum payment and due date — credit cards, car loans, student loans, BNPL, or anything else you owe.',
    },
    {
      title: 'Pick a strategy',
      description:
        'Choose snowball, avalanche, or set your own custom order, then add any extra you can put toward it each month.',
    },
    {
      title: 'Log payments, watch the date move',
      description:
        'Every payment you log recalculates your balances, your total interest, and your projected debt-free date — live.',
    },
  ],

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'Questions about ClearPath or when it\'s launching? Support is handled directly by the developer.',
    checklist: ['App version (once released)', 'iPhone model and iOS version', 'A short description of the issue'],
    faqs: [
      {
        q: 'When is ClearPath launching?',
        a: 'ClearPath is currently in development. There\'s no confirmed App Store release date yet — check back here for updates.',
      },
      {
        q: 'Does ClearPath link to my bank?',
        a: 'No. ClearPath never connects to your bank or any financial institution. You enter your balances, APRs and payments manually, and everything stays on your device.',
      },
      {
        q: 'What\'s the difference between snowball, avalanche and custom?',
        a: 'Snowball pays off your smallest balance first for quick wins. Avalanche pays off your highest-APR balance first to minimize total interest. Custom lets you set your own order — ClearPath shows the payoff date and total interest for whichever you choose.',
      },
      {
        q: 'Does ClearPath work offline?',
        a: 'Yes. ClearPath has no account and no server — every calculation happens on your device, online or off.',
      },
      {
        q: 'Will ClearPath be free?',
        a: 'Pricing hasn\'t been finalized yet. This page will be updated with pricing details before launch.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '26 July 2026',
    seoDescription:
      'ClearPath privacy policy: all debt and payment data stays on your device. No accounts, no bank linking, no analytics, no data selling.',
    summary:
      'ClearPath stores everything you enter — debts, payments, and settings — locally on your device. There is no account, no bank connection, and no server that stores your financial data. We have no advertising partners, we run no third-party analytics, and we never sell your data.',
    sections: [
      {
        heading: '1. Who we are',
        blocks: [
          {
            p: 'ClearPath ("the App", "we", "us", "our") is an iOS application developed and published by Awais Jamil, an individual developer. Our contact email is [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
          {
            p: 'This Privacy Policy explains how we handle information in connection with your use of ClearPath on iPhone. By downloading or using the App you agree to the practices described in this policy.',
          },
        ],
      },
      {
        heading: '2. Information we collect',
        blocks: [
          { h3: 'Data you enter directly' },
          { p: 'When you use ClearPath you create the following information, entirely on your device:' },
          {
            ul: [
              'Debt entries: name, type (credit card, car loan, student loan, BNPL, personal, other), current and original balance, APR (including any promotional rate and its expiry), minimum payment, due day, and notes',
              'Payment records: amount, principal/interest breakdown, date, and an optional note',
              'Balance adjustments: amount, direction, and reason',
              'App settings: payoff strategy (snowball, avalanche or custom order), extra monthly payment amount, reminder preferences, biometric lock preference, and haptics preference',
            ],
          },
          {
            p: 'All of this information is stored exclusively on your device using Apple’s SwiftData framework. It never leaves your device unless you explicitly export it (see Section 5).',
          },
          { h3: 'Face ID / Touch ID' },
          {
            p: 'If you enable the app lock, ClearPath uses Apple’s LocalAuthentication framework to request Face ID, Touch ID, or your device passcode. Your biometric data is processed entirely by iOS and never reaches ClearPath or any server we operate — the App only receives a pass/fail result.',
          },
          { h3: 'Crash reports' },
          {
            p: 'We rely on Apple’s built-in crash reporting (delivered via Xcode Organizer and TestFlight). Crash logs are anonymised by Apple before they reach us and do not include your debts, payments, or notes. We do not embed any third-party analytics or crash-reporting SDK.',
          },
          { h3: 'Information we do NOT collect' },
          { p: 'We do not collect, process, or transmit:' },
          {
            ul: [
              'Bank account or card credentials — ClearPath never connects to any financial institution',
              'Advertising identifiers (IDFA) — we do not use ATT',
              'Location or contacts',
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
            p: 'ClearPath requests Notification permission to schedule local, on-device reminders a few days before each debt’s due date, based on the schedule you configure. These are scheduled and delivered entirely by iOS — no push notification service or third party is involved.',
          },
          {
            p: 'You can revoke notification permission at any time in **Settings → Notifications → ClearPath** on your iPhone. Revoking it simply stops reminders from appearing; it does not delete any data already logged in the App.',
          },
        ],
      },
      {
        heading: '4. How we use your information',
        blocks: [
          { p: 'We use the information you enter solely to:' },
          {
            ul: [
              'Display your dashboard, debt list, and payment history within the App',
              'Project a debt-free date and total interest under your chosen strategy',
              'Generate the CSV export you explicitly request',
              'Schedule the local due-date reminders you configure',
              "Diagnose and fix crashes using Apple's anonymised crash reporting",
            ],
          },
          {
            p: 'We do **not** use your data for advertising, profiling, or to train machine learning models. We do not sell your data to any third party.',
          },
        ],
      },
      {
        heading: '5. Exporting your data',
        blocks: [
          {
            p: 'ClearPath lets you export your payment history as a CSV file via the system share sheet. The file is generated on-device and only goes wherever you choose to save or share it — we have no visibility into, or copy of, anything you export.',
          },
        ],
      },
      {
        heading: '6. Data storage & security',
        blocks: [
          {
            p: "All data is stored using SwiftData on your device, protected by your device's hardware encryption (active when a passcode is set). We recommend enabling Face ID / Touch ID within ClearPath and keeping your iPhone's iOS up to date.",
          },
          {
            p: 'We do not operate any servers that store your personal or financial data. The only external party involved at all is Apple, for notifications, biometric authentication, and crash reporting — each governed by Apple’s own privacy policy.',
          },
        ],
      },
      {
        heading: '7. Data retention & deletion',
        blocks: [
          { p: 'Your data is retained on your device until you delete it. You can:' },
          {
            ul: [
              'Delete individual debts, payments, or adjustments from within the App',
              'Delete all ClearPath data from Settings → Delete all data',
              'Delete all data by removing ClearPath from your iPhone — this permanently removes its local data store',
            ],
          },
          { p: 'We have no ability to delete data on your behalf, as we have no access to it.' },
        ],
      },
      {
        heading: "8. Children's privacy",
        blocks: [
          {
            p: 'ClearPath is intended for adults managing their own personal debt. We do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has entered personal data into the App, please contact us and we will provide guidance on removing it from the device.',
          },
        ],
      },
      {
        heading: '9. Your rights',
        blocks: [
          {
            p: 'Because all data is stored locally on your device and we have no access to it, you are in full control. You can view, export, and delete your data entirely within the App at any time.',
          },
          {
            p: 'If you are located in the European Economic Area, United Kingdom, or Australia, you may have additional rights under applicable privacy law (GDPR, UK GDPR, or the Privacy Act 1988 respectively). Since we do not process your personal data on our own servers, most of these rights are exercised directly through the App. For any questions, contact us at [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
      {
        heading: '10. Changes to this policy',
        blocks: [
          {
            p: 'We may update this Privacy Policy periodically. When we do, we will update the "Last updated" date at the top of this page. For material changes we will display an in-app notice. Continued use of ClearPath after changes are posted constitutes your acceptance of the revised policy.',
          },
        ],
      },
      {
        heading: '11. Contact us',
        blocks: [
          { p: 'Questions about this Privacy Policy? We\'re happy to help.' },
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
    lastUpdated: '26 July 2026',
    seoDescription:
      'Terms and conditions for ClearPath, a local-only debt payoff tracker for iPhone, including the Apple EULA.',
    summary:
      'Use ClearPath to track your own debts and payments. Don’t misuse the App or reverse-engineer it, and understand it is provided as-is without financial, tax or legal advice. These Terms incorporate Apple’s standard EULA.',
    sections: [
      {
        heading: '1. Acceptance of terms',
        blocks: [
          {
            p: 'By downloading, installing, or using ClearPath (the "App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not download or use the App.',
          },
          {
            p: "These Terms apply to all users of any version of ClearPath distributed through the Apple App Store. Your use of the App is also subject to Apple's [Standard End User License Agreement (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), which is incorporated here by reference. In the event of a conflict between these Terms and Apple's EULA, Apple's EULA controls with respect to Apple's role.",
          },
          {
            p: 'We reserve the right to update these Terms at any time. Continued use after updates are posted constitutes acceptance of the revised Terms.',
          },
        ],
      },
      {
        heading: '2. Description of the App',
        blocks: [
          { p: 'ClearPath is a personal debt-tracking application designed to help you:' },
          {
            ul: [
              'Record credit card, loan, BNPL and other personal debts, including balance, APR and minimum payment',
              'Choose a payoff strategy — snowball, avalanche, or a custom order — and see a projected debt-free date',
              'Log payments and balance adjustments and track progress over time',
              'Simulate an extra monthly payment or a one-off lump sum before committing to it',
              'Export payment history as CSV',
            ],
          },
          {
            p: '**Important:** ClearPath is a personal record-keeping and projection tool only. It does **not** provide financial, tax, credit, or legal advice, and it is not a lender, credit counselor, or debt settlement service. All projections are estimates based on the information you enter and are for your personal reference only. Consult a qualified professional before making financial decisions.',
          },
        ],
      },
      {
        heading: '3. Eligibility',
        blocks: [
          {
            p: 'You must be at least 18 years old and hold a valid Apple ID to use ClearPath. By using the App you represent and warrant that you meet these requirements. The App is intended for personal, non-commercial use to track your own debts.',
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
        heading: '5. Pricing',
        blocks: [
          {
            p: 'ClearPath’s pricing has not been finalized. Any pricing, trial, or subscription terms will be displayed in the App Store listing and, once available, added to this page before the App is released. Continued use of the App after a pricing change is communicated constitutes acceptance of that change.',
          },
        ],
      },
      {
        heading: '6. User responsibilities',
        blocks: [
          {
            p: 'You agree to use ClearPath only for lawful purposes and in accordance with these Terms. You must not:',
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
            p: 'You are solely responsible for the accuracy of the data you enter and for any decisions you make based on the App’s projections. We are not liable for errors in manually entered data.',
          },
        ],
      },
      {
        heading: '7. Intellectual property',
        blocks: [
          {
            p: 'ClearPath, its name, logo, user interface design, source code, and all associated intellectual property are owned by or licensed to the developer, Awais Jamil. Nothing in these Terms grants you any ownership rights in the App or its content.',
          },
        ],
      },
      {
        heading: '8. Privacy',
        blocks: [
          {
            p: 'Your use of ClearPath is also governed by our [Privacy Policy](/products/clearpath/privacy), which is incorporated into these Terms by reference. By using the App you consent to the data practices described in the Privacy Policy.',
          },
        ],
      },
      {
        heading: '9. Third-party services',
        blocks: [
          { p: 'ClearPath integrates with the following Apple platform services:' },
          {
            ul: [
              '**Apple LocalAuthentication** — for the optional Face ID / Touch ID app lock. Processed entirely on-device.',
              '**Apple UserNotifications** — for local, on-device due-date reminders.',
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
              'Debt-free date and interest projections will exactly match what a lender ultimately charges you',
              'Reminder notifications will always be delivered — this depends on your device’s notification permissions and OS behaviour',
              'The App will be compatible with future iOS versions',
            ],
          },
          {
            p: 'ClearPath is not a financial advisor, lender, or credit counseling service. You are responsible for verifying any figures against your actual account statements before making financial decisions.',
          },
        ],
      },
      {
        heading: '11. Limitation of liability',
        blocks: [
          {
            p: 'To the maximum extent permitted by applicable law, the developer (Awais Jamil) shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to your use of or inability to use the App, including but not limited to loss of data or any financial decision made in reliance on the App’s projections.',
          },
          {
            p: 'Our total aggregate liability to you for any claim arising from these Terms or your use of the App shall not exceed the total amount you paid for ClearPath in the twelve (12) months immediately preceding the claim, or AUD $10 if you have not paid any fees.',
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
            p: 'We may update these Terms periodically. We will post the updated Terms here with a new "Last updated" date. For material changes, we will provide in-app notice. Your continued use of the App after changes are posted constitutes your acceptance of the updated Terms.',
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
