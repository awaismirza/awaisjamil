import { Camera, Car, CloudUpload, FileDown, MapPin, PieChart, ReceiptText } from 'lucide-react'

export const driverLogbook = {
  slug: 'driver-logbook',
  name: 'Driver Logbook',
  category: 'Income & expense tracker for drivers',
  icon: '/driver-logbook/icon.png',
  seoDescription:
    'Track rideshare income, scan receipts with OCR, and get tax-ready reports. Built for Uber, Lyft, DiDi and Ola drivers. Free to download on iPhone.',

  accent: '#1B9E83',
  accentDark: '#15695C',
  accentSoft: 'rgba(27, 158, 131, 0.14)',
  // TODO: set the App Store listing URL once available
  download: { kind: 'app-store', url: null },

  facts: [
    { label: 'Platform', value: 'iPhone · iOS 16+' },
    { label: 'Pricing', value: 'Free · Premium $1.99/mo' },
    { label: 'Data', value: 'On-device + your iCloud' },
    { label: 'Tracking', value: 'Zero third-party SDKs' },
  ],

  hero: {
    eyebrow: 'For Uber, Lyft, DiDi & Ola drivers',
    headline: 'Every dollar.',
    headlineAccent: 'Always tracked.',
    sub: 'Driver Logbook makes tax time simple — scan receipts with your camera, log trip income instantly, and export a complete profit & loss report in seconds.',
    heroShot: '/driver-logbook/screenshot-dashboard.png',
    heroShotAlt: 'Driver Logbook dashboard showing weekly profit',
    badges: ['Free to start', 'Private & offline-first', 'Tax-ready exports'],
  },

  closing: {
    title: 'Know your profit. Every shift.',
    sub: 'Download Driver Logbook free on the App Store. iPhone only · iOS 16+.',
  },

  metrics: [
    { value: '0¢', label: 'Third-party SDKs — zero tracking' },
    { value: '100%', label: 'On-device OCR — no cloud upload' },
    { value: 'iOS 16+', label: 'iPhone only · offline-first' },
  ],

  screenshotsLabel: 'The app',
  screenshotsTitle: 'Built for how drivers actually work.',
  screenshots: [
    {
      src: '/driver-logbook/screenshot-dashboard.png',
      alt: 'Driver Logbook dashboard showing weekly profit',
      title: 'Live dashboard',
      caption: 'Net profit, income and spend — updated the moment you save an entry.',
    },
    {
      src: '/driver-logbook/screenshot-entries.png',
      alt: 'Trips and entries list',
      title: 'Trips & expenses',
      caption: 'Filter by Today, Week, Month or Year — with a running annual summary.',
    },
    {
      src: '/driver-logbook/screenshot-reports.png',
      alt: 'Reports with donut chart',
      title: 'Expense reports',
      caption: 'Visual breakdown by category — see exactly where your money goes.',
    },
    {
      src: '/driver-logbook/screenshot-add-income.png',
      alt: 'Add income form',
      title: 'Log a trip',
      caption: 'Pick your platform, set the amount and trips — done in seconds.',
    },
    {
      src: '/driver-logbook/screenshot-add-entry.png',
      alt: 'New entry picker',
      title: 'Three ways to add',
      caption: 'Manual entry, scan a receipt, or log income — one tap from anywhere.',
    },
    {
      src: '/driver-logbook/screenshot-settings.png',
      alt: 'Settings page',
      title: 'Your setup',
      caption: 'Multiple vehicles, expense categories, and iCloud sync for Premium users.',
    },
  ],

  featuresTitle: "Everything you need, nothing you don't.",
  features: [
    {
      icon: Camera,
      title: 'Receipt scanner',
      description:
        "Point your camera at any paper receipt. On-device OCR reads the amount, date and merchant automatically using Apple's Vision framework — no internet needed.",
    },
    {
      icon: Car,
      title: 'Trip income logging',
      description:
        'Log earnings from Uber, DiDi, Lyft, Ola or any platform in seconds. Record the number of trips, amount, vehicle and date — all in one place.',
    },
    {
      icon: ReceiptText,
      title: 'Expense categories',
      description:
        'Petrol, insurance, car service, cleaning, tolls, parking and more. Mark deductible items and attach receipt photos — your accountant will thank you.',
    },
    {
      icon: PieChart,
      title: 'P&L reports',
      description:
        'Weekly, monthly and yearly profit & loss views with a donut chart breakdown by expense category — see exactly where your money goes.',
    },
    {
      icon: MapPin,
      title: 'GPS mileage tracking (Premium)',
      description:
        'Start a shift and Driver Logbook tracks your kilometres automatically with GPS — no manual odometer readings. Log an odometer reading instead and it always takes priority over the GPS distance.',
    },
    {
      icon: FileDown,
      title: 'Export PDF or CSV',
      description:
        'Export a full PDF or CSV report of your income, expenses and tracked mileage for any date range — every detail, ready to hand to your accountant or keep for your own records.',
    },
    {
      icon: CloudUpload,
      title: 'iCloud sync (Premium)',
      description:
        "All your entries encrypted and synced across every iPhone you own via Apple's CloudKit — add a trip on one device, see it on another in seconds. Prefer to manage it yourself? Export a full backup and import it on any device, any time.",
    },
  ],

  howItWorksTitle: 'Up and running in three steps.',
  howItWorks: [
    {
      title: 'Download & set up',
      description:
        'Install the app, choose your currency and add your vehicle. Takes under two minutes. No sign-in required — use as a guest or sign in with Apple for iCloud sync.',
    },
    {
      title: 'Log trips & expenses',
      description:
        'After every shift, record your trip income and scan any receipts. The dashboard updates instantly — you always know your real profit for the week.',
    },
    {
      title: 'Export at tax time',
      description:
        'Open Reports, pick your date range, and export a CSV. Hand it to your accountant or import it directly into your tax software. Done.',
    },
  ],

  pricing: {
    title: "Start free. Upgrade when you're ready.",
    sub: 'Core tracking features are free forever. Premium unlocks iCloud sync, GPS mileage tracking and full PDF/CSV export.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        per: '/ forever',
        description: 'All the essentials to track your driving business — no credit card needed.',
        features: [
          'Unlimited trip income entries',
          'Unlimited expense entries',
          'Receipt scanner (OCR)',
          'Live dashboard & profit calc',
          'Multiple vehicles',
          'Weekly / monthly views',
        ],
      },
      {
        name: 'Premium',
        price: '$1.99',
        per: '/ month',
        description: 'Everything in Free, plus iCloud sync, GPS mileage tracking, and full data export.',
        features: [
          'Everything in Free',
          'iCloud sync across all your iPhones',
          'GPS mileage tracking',
          'Full PDF/CSV export of your data',
          'Full backup export & import',
          'Priority support',
        ],
        highlight: true,
        note: 'Also available: $9.99/year (save 58%). Subscription auto-renews unless cancelled at least 24 hours before the end of the current period. Manage in Apple ID Settings.',
      },
    ],
  },

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'Questions about Driver Logbook, Premium subscriptions, or your data? Support is handled directly by the developer.',
    checklist: ['App version', 'Device model and iOS version', 'A short description of the issue'],
    links: [
      { label: 'Report an issue on GitHub', href: 'https://github.com/awaismirza/driver-logbook-web/issues' },
    ],
    faqs: [
      {
        q: 'Does Driver Logbook work offline?',
        a: 'Yes. Everything — including receipt scanning — runs on your device. iCloud sync (Premium) is the only feature that uses the network, and it goes through your own iCloud account.',
      },
      {
        q: 'How do I cancel my Premium subscription?',
        a: 'Subscriptions are managed by Apple. Go to **Settings → [Your Name] → Subscriptions** on your iPhone and cancel at least 24 hours before the current period ends.',
      },
      {
        q: 'Can you see my income or expense data?',
        a: 'No. Your data is stored in Core Data on your device, and iCloud sync uses your private iCloud container that only your Apple ID can access.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '16 May 2026',
    seoDescription:
      'Driver Logbook privacy policy: all financial data stays on your device or in your private iCloud. No ads, no analytics, no data selling.',
    summary:
      'Driver Logbook stores all your financial data locally on your device. If you enable iCloud Sync (Premium), your data is stored in your own private iCloud container — we cannot access it. We have no advertising partners, we run no third-party analytics, and we never sell your data.',
    sections: [
      {
        heading: '1. Who we are',
        blocks: [
          {
            p: 'Driver Logbook ("the App", "we", "us", "our") is an iOS application developed and published by Awais Jamil, an individual developer. Our contact email is [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
          {
            p: 'This Privacy Policy explains how we handle information in connection with your use of Driver Logbook on iPhone. By downloading or using the App you agree to the practices described in this policy.',
          },
        ],
      },
      {
        heading: '2. Information we collect',
        blocks: [
          { h3: 'Data you enter directly' },
          {
            p: 'When you use Driver Logbook you may enter or import the following personal and financial information:',
          },
          {
            ul: [
              'Driver name and currency preference',
              'Trip income entries: platform (Uber, DiDi, Lyft, Ola, etc.), amount, number of trips, date, notes',
              'Expense entries: category, merchant name, amount, date, receipt image',
              'Vehicle profiles: make, model, year, colour, nickname',
              'Mileage trips (Premium): GPS-tracked route distance, odometer readings, start/end times',
            ],
          },
          {
            p: 'All of this information is stored exclusively in Core Data on your device. It never leaves your device unless you explicitly enable iCloud Sync (see section 5).',
          },
          { h3: 'Apple Sign In' },
          {
            p: "If you choose to Sign In with Apple, Apple provides us with a unique user identifier and, at your discretion, your name and email address. This information is stored on-device in Apple's Keychain and in Core Data. We do not transmit it to any external server we operate.",
          },
          { h3: 'Receipt images' },
          {
            p: "When you capture a receipt with your camera or import one from your photo library, the image is stored locally within the App's private Documents directory. Receipt images are:",
          },
          {
            ul: [
              "Processed entirely on-device using Apple's Vision framework (no cloud OCR service is used)",
              'Never uploaded to any server we operate',
              "Included in your device's encrypted local backup and, if enabled by you, iCloud Backup",
            ],
          },
          { h3: 'Crash reports' },
          {
            p: "We rely on Apple's built-in crash reporting (delivered via Xcode Organizer and TestFlight). Crash logs are anonymised by Apple before they reach us and do not include your financial entries, driver name, or receipt images. We do not embed any third-party analytics or crash-reporting SDK.",
          },
          { h3: 'Information we do NOT collect' },
          { p: 'We do not collect, process, or transmit:' },
          {
            ul: [
              'Advertising identifiers (IDFA) — we do not use ATT',
              'Contacts',
              "Browsing or usage analytics beyond Apple's anonymised crash logs",
              'Any data from children under 13',
            ],
          },
        ],
      },
      {
        heading: '3. Camera, photo library & location',
        blocks: [
          { p: 'Driver Logbook requests the following device permissions solely to enable receipt capture and, for Premium users, GPS mileage tracking:' },
          {
            ul: [
              '**Camera:** used to photograph paper receipts. The camera is only activated when you explicitly tap "Scan Receipt" in the App. No photos are taken in the background.',
              '**Photo Library (read):** used to let you attach an existing photo from your library as a receipt image. We only access the specific image you select — we do not scan or index your full library.',
              '**Photo Library (write):** used only when you explicitly choose to save a scanned receipt back to your photo library.',
              '**Location (Premium, When-In-Use only):** used only while you have an active tracked shift, to record your trip distance via GPS. We never request "Always" location access, and location is processed entirely on-device — it is never transmitted to any server we operate. You can log an odometer reading instead of using GPS at any time.',
            ],
          },
          {
            p: 'You can revoke any of these permissions at any time in **Settings → Privacy & Security** on your iPhone. Revoking camera or photo library access does not delete any previously captured receipt images stored in the App; revoking location access simply stops GPS-based shift tracking (you can still log trips manually).',
          },
        ],
      },
      {
        heading: '4. How we use your information',
        blocks: [
          { p: 'We use the information you enter solely to:' },
          {
            ul: [
              'Display your dashboard, trip list, expense list, and profit/loss reports within the App',
              'Calculate net profit, mileage-based cost estimates, and expense summaries',
              'Generate PDF/CSV exports and full data backups you explicitly request',
              'Sync your data to your own Apple devices via iCloud (if enabled)',
              "Diagnose and fix crashes using Apple's anonymised crash reporting",
            ],
          },
          {
            p: 'We do **not** use your data for advertising, profiling, or to train machine learning models beyond your device. We do not sell your data to any third party.',
          },
        ],
      },
      {
        heading: '5. iCloud Sync & Backup (Premium)',
        blocks: [
          { p: 'iCloud Sync is an optional Premium feature — it is off by default. When you enable it:' },
          {
            ul: [
              "Your Core Data records (trips, expenses, vehicles) are synced via Apple's CloudKit to your private iCloud container.",
              'Only devices signed in to the same Apple ID can access this container.',
              'Apple encrypts data in transit and at rest in iCloud. We have no ability to access your CloudKit data.',
              'Disabling iCloud Sync in the App stops future sync. Existing local data is not deleted.',
              'To delete your iCloud data entirely: go to **Settings → [Your Name] → iCloud → Manage Account Storage → Driver Logbook → Delete Data**.',
            ],
          },
          {
            p: "If you'd rather manage your own backups instead of (or alongside) iCloud Sync, Premium also lets you export a full backup file of your data and import it back in on any device — the file is generated on-device and only goes wherever you choose to save or share it.",
          },
          {
            p: "Apple's iCloud privacy practices are governed by the [Apple Privacy Policy](https://www.apple.com/legal/privacy/).",
          },
        ],
      },
      {
        heading: '6. Data storage & security',
        blocks: [
          {
            p: "All financial data is stored in Core Data on your device, protected by your device's hardware encryption (which is active when a passcode is set). We recommend enabling Face ID / Touch ID for the App and keeping your iPhone's iOS up to date.",
          },
          {
            p: "We do not operate any servers that store your personal or financial data. The only external data processor involved is Apple (for iCloud and crash reporting), governed by Apple's own privacy policy.",
          },
        ],
      },
      {
        heading: '7. In-app purchases & subscriptions',
        blocks: [
          {
            p: 'Premium subscription payments are processed exclusively by Apple through the App Store. We do not collect or store your payment card information. Purchase history is managed by Apple and is subject to Apple\'s privacy policy. You can manage or cancel your subscription at any time via **Settings → [Your Name] → Subscriptions** on your iPhone.',
          },
        ],
      },
      {
        heading: '8. Data retention & deletion',
        blocks: [
          { p: 'Your data is retained on your device until you delete it. You can:' },
          {
            ul: [
              'Delete individual entries from the Trips or Expenses list using swipe-to-delete',
              'Delete all App data by removing Driver Logbook from your iPhone — this permanently removes the Core Data store and all stored receipt images',
              'Delete iCloud data via **Settings → [Your Name] → iCloud → Manage Account Storage → Driver Logbook**',
            ],
          },
          { p: 'We have no ability to delete data on your behalf, as we do not have access to it.' },
        ],
      },
      {
        heading: "9. Children's privacy",
        blocks: [
          {
            p: 'Driver Logbook is intended for adults (18+) who drive for rideshare or delivery platforms. We do not knowingly collect personal information from anyone under 13. If you believe a child under 13 has entered personal data into the App, please contact us and we will provide guidance on removing it from the device.',
          },
        ],
      },
      {
        heading: '10. Your rights',
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
        heading: '11. Changes to this policy',
        blocks: [
          {
            p: 'We may update this Privacy Policy periodically. When we do, we will update the "Last updated" date at the top of this page. For material changes we will display an in-app notice. Continued use of Driver Logbook after changes are posted constitutes your acceptance of the revised policy.',
          },
        ],
      },
      {
        heading: '12. Contact us',
        blocks: [
          { p: 'Questions about this Privacy Policy? We\'re happy to help.' },
          {
            ul: [
              '**Developer:** Awais Jamil',
              '**Email:** [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com)',
              '**Support:** [github.com/awaismirza/driver-logbook-web/issues](https://github.com/awaismirza/driver-logbook-web/issues)',
            ],
          },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: '16 May 2026',
    seoDescription:
      'Terms and conditions for Driver Logbook, including the free tier, Premium subscription, and Apple EULA.',
    summary:
      "Use Driver Logbook to track your own driving income and expenses. Don't misuse the App, don't reverse-engineer it, and understand it is provided as-is without tax or financial advice. Premium features require a paid subscription billed by Apple. These Terms incorporate Apple's standard EULA.",
    sections: [
      {
        heading: '1. Acceptance of terms',
        blocks: [
          {
            p: 'By downloading, installing, or using Driver Logbook (the "App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not download or use the App.',
          },
          {
            p: "These Terms apply to all users of any version of Driver Logbook distributed through the Apple App Store. Your use of the App is also subject to Apple's [Standard End User License Agreement (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), which is incorporated here by reference. In the event of a conflict between these Terms and Apple's EULA, Apple's EULA controls with respect to Apple's role.",
          },
          {
            p: 'We reserve the right to update these Terms at any time. Continued use after updates are posted constitutes acceptance of the revised Terms.',
          },
        ],
      },
      {
        heading: '2. Description of the App',
        blocks: [
          {
            p: 'Driver Logbook is a personal finance tracking application designed to help rideshare and delivery drivers:',
          },
          {
            ul: [
              'Log trip income from platforms including Uber, DiDi, Lyft, and Ola',
              'Record and categorise business expenses',
              'Capture and store receipt images with on-device OCR extraction',
              'View profit and loss reports and export data as PDF or CSV',
              'Track GPS-based trip mileage (Premium)',
              'Sync data across devices via iCloud, or export/import a full backup (Premium)',
            ],
          },
          {
            p: '**Important:** Driver Logbook is a record-keeping tool only. It does **not** provide tax advice, accounting services, financial planning, legal advice, or any regulated financial service. Any report or export generated by the App is for your personal reference only. You should consult a qualified tax professional before lodging any tax return.',
          },
        ],
      },
      {
        heading: '3. Eligibility',
        blocks: [
          {
            p: 'You must be at least 18 years old and hold a valid Apple ID to use Driver Logbook. By using the App you represent and warrant that you meet these requirements. The App is intended for personal, non-commercial use to track your own driving activity and associated business income and expenses.',
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
        heading: '5. Free & Premium plans',
        blocks: [
          { h3: 'Free tier' },
          {
            p: 'Driver Logbook offers a free tier with core tracking features including unlimited trip income entries, unlimited expense entries, receipt scanning, a live dashboard, and weekly/monthly/yearly reporting — available at no charge with no time limit.',
          },
          { h3: 'Premium subscription' },
          {
            p: 'The following features require an active Premium subscription purchased through the Apple App Store:',
          },
          {
            ul: [
              'iCloud Sync across all your iPhones',
              'GPS mileage tracking',
              'PDF/CSV export of your financial data',
              'Full data backup export and import',
            ],
          },
          {
            p: 'Premium is available as a monthly ($1.99 USD/month) or annual ($9.99 USD/year) auto-renewing subscription. Prices may vary by region and are displayed in the App Store at the time of purchase.',
          },
          {
            ul: [
              'Payment is charged to your Apple ID at confirmation of purchase.',
              'Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current period.',
              'You can manage or cancel your subscription at any time via **Settings → [Your Name] → Subscriptions** on your iPhone.',
              'No refund is issued for the unused portion of a subscription period, except as required by applicable law.',
            ],
          },
          { h3: 'Free trial' },
          {
            p: 'We may offer a free trial period for Premium. If a free trial is offered, it begins on the date of subscription confirmation and converts to a paid subscription at the end of the trial period unless you cancel at least 24 hours before expiry.',
          },
          { h3: 'Price changes' },
          {
            p: 'We may change subscription pricing at any time. Price changes will be communicated via the App Store and will take effect at your next renewal. If you do not agree to a price change, you must cancel before the renewal date.',
          },
        ],
      },
      {
        heading: '6. User responsibilities',
        blocks: [
          {
            p: 'You agree to use Driver Logbook only for lawful purposes and in accordance with these Terms. You must not:',
          },
          {
            ul: [
              'Enter false, fraudulent, or misleading financial data with intent to deceive any tax authority, government agency, or third party',
              'Use the App or any export from it to commit fraud or financial misrepresentation',
              'Reverse-engineer, decompile, or disassemble any part of the App',
              'Modify, adapt, translate, or create derivative works based on the App',
              "Use the App in any manner that violates Apple's App Store Guidelines or applicable laws",
              'Attempt to gain unauthorised access to any portion or feature of the App',
              'Use the App on behalf of any third party without their explicit consent',
            ],
          },
          {
            p: 'You are solely responsible for the accuracy of the data you enter and for how you use any report or export generated by the App. We are not liable for errors in manually entered data or for OCR extraction inaccuracies.',
          },
        ],
      },
      {
        heading: '7. Intellectual property',
        blocks: [
          {
            p: 'Driver Logbook, its name, logo, user interface design, source code, and all associated intellectual property are owned by or licensed to the developer, Awais Jamil. Nothing in these Terms grants you any ownership rights in the App or its content.',
          },
          {
            p: "The App's underlying source code is available on GitHub. The availability of source code does not grant you rights to use the Driver Logbook name, App Store listing, or design assets. See the repository's licence file for the applicable open-source licence terms.",
          },
        ],
      },
      {
        heading: '8. Privacy',
        blocks: [
          {
            p: 'Your use of Driver Logbook is also governed by our [Privacy Policy](/products/driver-logbook/privacy), which is incorporated into these Terms by reference. By using the App you consent to the data practices described in the Privacy Policy.',
          },
        ],
      },
      {
        heading: '9. Third-party services',
        blocks: [
          { p: 'Driver Logbook integrates with the following Apple platform services:' },
          {
            ul: [
              "**Apple CloudKit** — for iCloud Sync (Premium). Governed by Apple's Privacy Policy and iCloud Terms.",
              '**Apple StoreKit** — for in-app purchases. Payment processing is handled entirely by Apple.',
              '**Apple Vision** — for on-device OCR. All processing occurs locally on your device.',
              "**Sign In with Apple** — for optional authentication. Governed by Apple's Sign In with Apple terms.",
            ],
          },
          {
            p: "We do not embed any third-party analytics, advertising, or tracking SDKs. We are not responsible for the privacy practices of Apple's platform services.",
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
              'OCR receipt extraction will be 100% accurate — you should always verify extracted amounts and dates',
              'Reports or CSV exports will satisfy any particular tax, legal, or accounting requirement in your jurisdiction',
              "iCloud Sync will be available at all times — availability depends on Apple's iCloud infrastructure",
              'The App will be compatible with future iOS versions',
            ],
          },
          {
            p: "Tax laws and regulations vary by jurisdiction and change frequently. You are responsible for verifying that any use of the App's outputs complies with applicable laws in your country or region.",
          },
        ],
      },
      {
        heading: '11. Limitation of liability',
        blocks: [
          {
            p: 'To the maximum extent permitted by applicable law, the developer (Awais Jamil) shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to your use of or inability to use the App, including but not limited to:',
          },
          {
            ul: [
              'Loss of data or corruption of records',
              'Tax penalties, fines, or assessments arising from reliance on App outputs',
              'Loss of revenue or profits',
              'Costs of substitute goods or services',
            ],
          },
          {
            p: 'Our total aggregate liability to you for any claim arising from these Terms or your use of the App shall not exceed the total subscription fees you paid in the twelve (12) months immediately preceding the claim, or AUD $10 if you have not paid any fees.',
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
          {
            p: 'In the event of any claim by a third party that the App or your possession and use of the App infringes that third party\'s intellectual property rights, Apple (not us) will be solely responsible for the investigation, defence, settlement, and discharge of any such infringement claim.',
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
              '**Support:** [github.com/awaismirza/driver-logbook-web/issues](https://github.com/awaismirza/driver-logbook-web/issues)',
            ],
          },
        ],
      },
    ],
  },
}
