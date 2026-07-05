import { BarChart3, Bell, CalendarCheck, CircleCheck, MapPin, ShieldCheck } from 'lucide-react'

export const fivePrayers = {
  slug: 'five-prayers',
  name: 'Five Prayers',
  category: 'Simple Salah tracker for iPhone',
  icon: '/five-prayers/icon.png',
  seoDescription:
    'Five Prayers is a simple, private iPhone app that helps Muslims track the five daily prayers, log what they prayed, and understand what they missed.',

  accent: '#1D8A5B',
  accentDark: '#136645',
  accentSoft: 'rgba(29, 138, 91, 0.13)',
  // TODO: set the App Store listing URL once available
  download: { kind: 'app-store', url: null },

  facts: [
    { label: 'Platform', value: 'iPhone' },
    { label: 'Data', value: 'Local-first' },
    { label: 'Ads & tracking', value: 'None' },
  ],

  hero: {
    eyebrow: 'Simple Salah tracker',
    headline: 'Private prayer tracking',
    headlineAccent: 'for the five daily prayers.',
    sub: 'Five Prayers is a simple, private iPhone app that helps Muslims track the five daily prayers, log what they prayed, and understand what they missed.',
    heroShot: '/five-prayers/showcase-home.svg',
    heroShotAlt: "Five Prayers home screen showing today's prayers and the next prayer card",
    badges: ['Local-first prayer logs', 'City-based prayer times', 'No ads or data selling'],
  },

  closing: {
    title: 'Build a consistent prayer habit.',
    sub: 'Five Prayers keeps your salah log private, on your device — no ads, no social pressure.',
  },

  screenshotsLabel: 'Showcase',
  screenshotsTitle: 'Three calm screens, one clear purpose.',
  screenshots: [
    {
      src: '/five-prayers/showcase-home.svg',
      alt: "Five Prayers home screen showing today's prayers and the next prayer card",
      title: 'Home',
      caption: "Today's prayers and the next prayer card.",
    },
    {
      src: '/five-prayers/showcase-analytics.svg',
      alt: 'Five Prayers analytics screen showing streaks and consistency by prayer',
      title: 'Analytics',
      caption: 'Streaks and consistency by prayer.',
    },
    {
      src: '/five-prayers/showcase-settings.svg',
      alt: 'Five Prayers settings screen showing appearance, tracking, and prayer time controls',
      title: 'Settings',
      caption: 'Appearance, tracking, and prayer time controls.',
    },
  ],

  featuresTitle: 'Built for daily consistency.',
  features: [
    {
      icon: CircleCheck,
      title: 'Track the five daily prayers',
      description: 'Log Fajr, Dhuhr, Asr, Maghrib, and Isha with one tap.',
    },
    {
      icon: CalendarCheck,
      title: 'Automatically track missed prayers',
      description:
        'If you do not log a prayer, the app can count it as missed so you can understand consistency over time.',
    },
    {
      icon: BarChart3,
      title: 'See daily and long-term stats',
      description:
        'Review completion trends, consistency by prayer, and steady progress without social pressure.',
    },
    {
      icon: MapPin,
      title: 'Download prayer times',
      description:
        'Choose your city and download prayer times from a provider when you refresh prayer schedules.',
    },
    {
      icon: Bell,
      title: 'Receive local prayer reminders',
      description: 'Use local iOS notifications for reminders while keeping your data on your device.',
    },
    {
      icon: ShieldCheck,
      title: 'Private and local-first',
      description: 'No ads, no social profiles, no leaderboards, and no selling user data.',
    },
  ],

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'Need help with Five Prayers? Support, privacy questions, and App Store enquiries can be sent by email.',
    faqs: [
      {
        q: 'Does Five Prayers track me?',
        a: 'No. Five Prayers does not use advertising trackers and keeps prayer logs on your device.',
      },
      {
        q: 'Does the app use the internet?',
        a: 'It may contact a prayer time provider to download prayer times for the selected city and year.',
      },
      {
        q: 'Why might prayer times differ from my mosque?',
        a: 'Prayer times are estimated and can vary by calculation method, settings, and local adjustments. Verify times with your local mosque or trusted authority when accuracy matters.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '14 June 2026',
    seoDescription:
      'Five Prayers is local-first. Prayer logs stay on the device, and the app avoids ads, profiling, and data selling.',
    summary:
      'Five Prayers is local-first. Prayer logs stay on the device, and the app avoids ads, profiling, and data selling.',
    sections: [
      {
        heading: 'Overview',
        blocks: [
          { p: 'Five Prayers is a simple and private iPhone app for tracking the five daily prayers.' },
          {
            p: 'The app does not sell user data. The app does not show ads. The app does not use social profiles or leaderboards.',
          },
          { p: 'We do not use:' },
          {
            ul: [
              'Advertising trackers',
              'Third-party analytics trackers',
              'User profiling',
              'Cross-app tracking',
              'Data brokers',
            ],
          },
        ],
      },
      {
        heading: 'Prayer logs and settings',
        blocks: [
          {
            p: "Prayer logs are stored on the user's device. App settings such as reminders, selected city, calculation method, and display preferences are also stored locally on the device.",
          },
          {
            p: 'This may include prayer status, prayer date, prayer name, reminders, selected city, calculation method, and display preferences.',
          },
          {
            p: 'Users can delete their app data from within the app where available or by deleting the app from their device.',
          },
        ],
      },
      {
        heading: 'Location and city selection',
        blocks: [
          { p: 'Location or a selected city is used only to calculate prayer times.' },
          {
            p: 'The app may contact a prayer time provider to download prayer times for the selected city and year when the user chooses a city or refreshes prayer times.',
          },
        ],
      },
      {
        heading: 'Notifications',
        blocks: [
          {
            p: 'Notifications are local iOS notifications scheduled on your device. You can change notification permissions and reminder settings in the app or in iOS Settings.',
          },
        ],
      },
      {
        heading: "Children's privacy",
        blocks: [
          { p: 'Five Prayers does not knowingly collect personal information from children.' },
        ],
      },
      {
        heading: 'What stays private',
        blocks: [
          {
            ul: [
              'Prayer logs stay on the device',
              'No advertising trackers',
              'No third-party analytics trackers',
              'No social profiles or leaderboards',
              'No sale of user data',
              'No cross-app tracking using prayer history',
            ],
          },
        ],
      },
      {
        heading: 'Changes to this policy',
        blocks: [
          {
            p: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            p: 'If you have questions about this Privacy Policy, contact us at [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: '14 June 2026',
    seoDescription:
      'Terms for Five Prayers: a practical prayer tracking tool, not a religious authority.',
    summary:
      'Use the app with the understanding that it is a practical tracking tool, not a religious authority.',
    sections: [
      {
        heading: 'Purpose of the app',
        blocks: [
          { p: 'Five Prayers is a personal prayer tracking tool for informational and organisational use.' },
          { p: 'The app is provided as-is.' },
        ],
      },
      {
        heading: 'Prayer times',
        blocks: [
          {
            p: 'The app provides estimated prayer times based on your selected city, settings, and available prayer time data.',
          },
          {
            p: 'Users should verify prayer times with their local mosque, Islamic centre, or trusted authority when accuracy is important.',
          },
        ],
      },
      {
        heading: 'No religious ruling',
        blocks: [
          {
            p: 'Five Prayers is not a religious authority. The app does not provide religious rulings, fatwas, or scholarly advice.',
          },
        ],
      },
      {
        heading: 'User responsibility',
        blocks: [
          {
            p: "The user is responsible for how they use the app and for any reliance they place on the app's prayer times, reminders, and records.",
          },
        ],
      },
      {
        heading: 'Third-party providers',
        blocks: [
          {
            p: 'The app may rely on third-party prayer time data providers. We do not guarantee that third-party data will always be available, complete, or error-free.',
          },
        ],
      },
      {
        heading: 'Availability',
        blocks: [
          {
            p: 'We aim to keep the app useful and reliable, but we do not guarantee that the app will always be available, error-free, or accurate.',
          },
        ],
      },
      {
        heading: 'Changes to the app',
        blocks: [
          { p: 'We may update, modify, suspend, or discontinue features at any time without notice.' },
        ],
      },
      {
        heading: 'Limitation of liability',
        blocks: [
          {
            p: 'To the maximum extent permitted by law, Five Prayers and its creators are not liable for any loss, issue, or consequence arising from use of the app.',
          },
          { p: 'Important notes:' },
          {
            ul: [
              'Prayer time data can differ by method and local practice',
              'Reminder delivery still depends on iOS notification permissions',
              'Third-party prayer time services may affect freshness or availability',
            ],
          },
        ],
      },
      {
        heading: 'Related privacy policy',
        blocks: [
          {
            p: 'Your use of the app is also governed by the [Privacy Policy](/products/five-prayers/privacy).',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            p: 'If you have questions about these Terms, contact us at [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
    ],
  },
}
