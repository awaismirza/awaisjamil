import { BarChart3, Bell, BookOpen, CalendarCheck, CircleCheck, Headphones, Heart, MapPin, Repeat2, ShieldCheck, Volume2 } from 'lucide-react'

export const fivePrayers = {
  slug: 'five-prayers',
  name: 'Five Prayers',
  category: 'Private prayer and Quran companion for iPhone',
  icon: '/five-prayers/icon.png',
  seoDescription:
    'Five Prayers is a private iPhone companion for daily Salah tracking, guided Quran reading, listening, and personal progress.',

  accent: '#1D8A5B',
  accentDark: '#136645',
  accentSoft: 'rgba(29, 138, 91, 0.13)',
  download: { kind: 'app-store', url: 'https://apps.apple.com/us/app/five-prayers/id6780003136' },

  facts: [
    { label: 'Platform', value: 'iPhone' },
    { label: 'Data', value: 'Local-first' },
    { label: 'Ads & tracking', value: 'None' },
  ],

  metrics: [
    { value: '5', label: 'daily prayers' },
    { value: '114', label: 'surahs to explore' },
    { value: '0', label: 'accounts required' },
  ],

  hero: {
    eyebrow: 'A daily worship companion',
    headline: 'Prayer and Quran practice',
    headlineAccent: 'in one private place.',
    sub: 'Track the five daily prayers, build a guided Quran reading habit, and listen to the Quran without ads, accounts, or social pressure.',
    heroShot: '/five-prayers/screenshot-home.png',
    heroShotAlt: "Five Prayers home screen showing today's prayers and the next prayer card",
    badges: ['Guided Quran reading', 'Private local progress', 'No ads or data selling'],
  },

  closing: {
    title: 'Keep your worship close and private.',
    sub: 'Five Prayers keeps your personal practice on your device — no ads, no accounts, no social pressure.',
  },

  screenshotsLabel: 'Showcase',
  screenshotsTitle: 'A calm place for daily worship.',
  screenshots: [
    {
      src: '/five-prayers/screenshot-home.png',
      alt: "Five Prayers home screen showing today's prayer checklist and Isha prayer card",
      title: 'Home',
      caption: "Track today's prayers and see what is next.",
    },
    {
      src: '/five-prayers/screenshot-quran.png',
      alt: 'Five Prayers Quran library showing searchable surahs, favourites, recent selections, and play controls',
      title: 'Quran library',
      caption: 'Read, listen, favourite, and revisit all 114 surahs.',
    },
    {
      src: '/five-prayers/screenshot-settings.png',
      alt: 'Five Prayers settings showing city prayer times, reminders, Fajr alarm, and adhan controls',
      title: 'Settings',
      caption: 'Appearance, tracking, prayer time, and adhan controls.',
    },
  ],

  featuresTitle: 'Built for daily worship, without the noise.',
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
      title: 'Follow your progress',
      description:
        'Review prayer consistency, ayahs read, ayahs left, reading sets, and progress across your private practice.',
    },
    {
      icon: MapPin,
      title: 'Download prayer times',
      description:
        'Choose your city and download prayer times from a provider when you refresh prayer schedules.',
    },
    {
      icon: BookOpen,
      title: 'Build a guided Quran reading',
      description:
        'Start at Al-Faatiha and continue through the Quran in order with a daily ayah goal. Your next set is always ready when you return.',
    },
    {
      icon: Headphones,
      title: 'Listen your way',
      description:
        'Choose a reciter and, where available, a spoken translation. Playback continues in the background with lock-screen controls.',
    },
    {
      icon: Heart,
      title: 'Keep favorite surahs close',
      description:
        'Save favorite surahs, revisit recently played selections, and build a personal listening loop that repeats until you stop it.',
    },
    {
      icon: Repeat2,
      title: 'Save Quran content for offline replay',
      description:
        'When you play a surah, its selected text, translation, and audio are saved on your device for later replay. You can clear these downloads in Settings.',
    },
    {
      icon: CalendarCheck,
      title: 'Create custom reading goals',
      description:
        'Add optional named readings with daily, hourly, every-second-day, or weekly private reminders.',
    },
    {
      icon: Bell,
      title: 'Receive local prayer reminders',
      description: 'Use local iOS notifications for reminders while keeping your data on your device.',
    },
    {
      icon: Volume2,
      title: 'Hear the adhan',
      description:
        'When a prayer notification arrives while the app is open, Five Prayers plays the full adhan. Choose from several recordings by different muezzins in Settings.',
    },
    {
      icon: ShieldCheck,
      title: 'Private and local-first',
      description: 'No ads, no social profiles, no leaderboards, and no selling user data.',
    },
  ],

  howItWorksTitle: 'A simple rhythm for reading more consistently.',
  howItWorks: [
    {
      title: 'Choose your reading',
      description:
        'Set up the optional After prayer reading plan or add a named custom reading with a goal that fits your day.',
    },
    {
      title: 'Read or listen',
      description:
        'Continue from the next sequential ayah, read manually, or listen with your selected reciter.',
    },
    {
      title: 'See your progress',
      description:
        'Keep ayahs read, reading sets, goal days, and ayahs remaining in private on-device insights.',
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
        a: 'It may contact a prayer time provider to download prayer times for the selected city and year. The Quran reader also contacts Al Quran Cloud when it needs Quran text, edition information, or audio that has not already been saved on your device.',
      },
      {
        q: 'Where do the prayer times and adhan recordings come from?',
        a: 'Prayer times and adhan recordings are provided by the AlAdhan API (aladhan.com), a free service run by Islamic Network. The adhan recordings are bundled with the app, so they play without an internet connection.',
      },
      {
        q: 'Where do Quran text, translations, and recitations come from?',
        a: 'The Quran reader uses Al Quran Cloud, an Islamic Network service, for Quran editions and audio delivery. The selected translator and reciter are shown in the reader. Al Quran Cloud attributes Arabic text curation to sources including Tanzil.net and Quran Academy; recitations and translations remain subject to their respective rights holders.',
      },
      {
        q: 'Can I listen without internet?',
        a: 'After a surah has been played successfully, the app saves its selected Quran text, translation, recitation, and optional spoken-translation audio on the device for offline replay. You can review the cache size or remove these downloads in Settings.',
      },
      {
        q: 'How do Quran reading plans work?',
        a: 'The primary After prayer reading plan continues sequentially from Al-Faatiha and shows the next set of ayahs. You can also create custom reading plans with their own labels, goals, and optional local reminders.',
      },
      {
        q: 'Can I set a reminder after prayer?',
        a: 'After-prayer reading is connected to the Salah handoff and does not use a fixed-time reminder. Custom reading plans can optionally use hourly, daily, every-second-day, or weekly local reminders.',
      },
      {
        q: 'Why might prayer times differ from my mosque?',
        a: 'Prayer times are estimated and can vary by calculation method, settings, and local adjustments. Verify times with your local mosque or trusted authority when accuracy matters.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '31 August 2026',
    seoDescription:
      'Five Prayers is local-first. Personal prayer and Quran reading data stays on the device, and the app avoids ads, profiling, and data selling.',
    summary:
      'Five Prayers is local-first. Personal prayer and Quran reading data stays on the device, and the app avoids ads, profiling, and data selling.',
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
        heading: 'Prayer and Quran data',
        blocks: [
          {
            p: "Prayer logs are stored on the user's device. App settings such as reminders, selected city, calculation method, display preferences, Quran reader preferences, favorites, recent selections, and reading plans are also stored locally on the device.",
          },
          {
            p: 'This may include prayer status, prayer date, prayer name, reminders, selected city, calculation method, display preferences, Quran favorites and listening-loop selections, and reading progress.',
          },
          {
            p: 'Users can delete their app data from within the app where available or by deleting the app from their device.',
          },
        ],
      },
      {
        heading: 'Quran downloads and providers',
        blocks: [
          {
            p: 'When you open or play a Quran selection, Five Prayers may request Quran text, translation/reciter edition information, and ayah audio from Al Quran Cloud, an Islamic Network service. The app does not create an account for this service or send it your prayer log, favorites, or reading history.',
          },
          {
            p: 'After a successful Quran load, the app saves the selected Quran text and translation in persistent app storage. When playback starts, it also saves the selected recitation audio and optional spoken-translation audio for offline replay. These Quran downloads are excluded from iCloud Backup and can be removed at any time in the app’s Settings.',
          },
          {
            p: 'As with any internet request, a provider may receive technical request information such as your IP address and device/network information under its own terms and privacy practices. See [Al Quran Cloud’s Terms & Conditions](https://alquran.cloud/terms-and-conditions).',
          },
        ],
      },
      {
        heading: 'City selection',
        blocks: [
          { p: 'A selected city is used only to calculate prayer times.' },
          {
            p: 'The app may contact a prayer time provider — the AlAdhan API (aladhan.com), run by Islamic Network — to download prayer times for the selected city and year when the user chooses a city or refreshes prayer times.',
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
    lastUpdated: '31 August 2026',
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
            p: 'The app may rely on third-party prayer time data providers, such as the AlAdhan API by Islamic Network. We do not guarantee that third-party data will always be available, complete, or error-free.',
          },
          {
            p: 'Adhan recordings are provided by the AlAdhan adhan collection by Islamic Network and are bundled with the app.',
          },
          {
            p: 'The Quran reader uses Al Quran Cloud and its media CDN, services of Islamic Network, for Quran editions and ayah audio. Al Quran Cloud’s provider attribution identifies GlobalQuran.com as an original text/audio source and Arabic text curation sources including Tanzil.net and Quran Academy. The app preserves the Uthmani text and shows the selected translation and reciter attribution in the reader.',
          },
          {
            p: 'Translations are attributed to their selected translators. Recitations and spoken translations remain subject to their respective rights holders. Al Quran Cloud permits streaming, embedding, and personal or educational downloads of the recitations it publishes, subject to its terms. See [Al Quran Cloud’s Terms & Conditions](https://alquran.cloud/terms-and-conditions).',
          },
          {
            p: 'Quran content is saved for personal, educational offline replay within the app. Do not use the app to remove attribution, misrepresent Quran text, or redistribute content in a way that violates applicable rights or provider terms.',
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
