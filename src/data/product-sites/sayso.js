import { AlarmClock, BellRing, CalendarClock, CirclePlay, Repeat, ShieldCheck } from 'lucide-react'

export const sayso = {
  slug: 'sayso',
  name: 'Sayso',
  category: 'Alarms in your own voice, for iPhone',
  icon: '/sayso/icon.svg',
  iconDark: '/sayso/icon-dark.svg',
  seoDescription:
    'Sayso plays back a reminder you recorded yourself — never a synthetic voice reading text. Record a short message, choose the moment, and hear your own words on time. Private and entirely on-device.',

  accent: '#08415C',
  accentDark: '#489BC4',
  accentSoft: 'rgba(8, 65, 92, 0.12)',
  download: { kind: 'coming-soon', platform: 'ios' },

  facts: [
    { label: 'Platform', value: 'iPhone & iPad · iOS 18+' },
    { label: 'Pricing', value: 'Free · $9.99 one-time Plus unlock' },
    { label: 'Data', value: '100% on-device · No account' },
  ],

  hero: {
    eyebrow: 'No robot voices. Yours.',
    headline: 'Say it once.',
    headlineAccent: 'Hear yourself when it counts.',
    sub: 'Every other talking alarm reads text aloud in a computer voice. Sayso plays back a recording you made yourself — your words, your tone — at the moment you chose. There is no text-to-speech in it at all.',
    ctaNote: 'Coming soon to the App Store',
    badges: ['No text-to-speech, ever', 'Your own recorded voice', 'Private by design', 'No account required'],
  },

  recordingShowcase: {
    label: 'Your reminder, in your voice',
  },

  closing: {
    title: 'Your voice. Your routine. Your device.',
    sub: 'Sayso is coming soon to the App Store for iPhone and iPad. Recordings never leave your device.',
  },

  screenshotsTitle: 'A calmer way to stay on track.',
  screenshots: [
    {
      src: '/sayso/screenshot-today.png',
      alt: 'Sayso Today screen showing the next alarm and later alarms',
      title: 'Today',
      caption: 'See your next alarm and what is coming up today.',
    },
    {
      src: '/sayso/screenshot-new-alarm.png',
      alt: 'Sayso new alarm screen with recording, playback, and schedule controls',
      title: 'New alarm',
      caption: 'Record once, preview it, and choose when it should arrive.',
    },
    {
      src: '/sayso/screenshot-alarm-detail.png',
      alt: 'Sayso alarm detail screen showing delivery and quiet-hours settings',
      title: 'Alarm controls',
      caption: 'Fine-tune voice, sound, vibration, and quiet hours.',
    },
    {
      src: '/sayso/screenshot-settings.png',
      alt: 'Sayso settings screen with Plus features and playback options',
      title: 'Your setup',
      caption: 'Set your defaults, volume, loop behaviour, and Plus options.',
    },
    {
      src: '/sayso/screenshot-recording.png',
      alt: 'Sayso recording screen with a live audio waveform',
      title: 'Recording',
      caption: 'A simple, focused space to capture the prompt in your own voice.',
    },
  ],

  featuresTitle: 'Built around one idea: your own voice, on time.',
  features: [
    {
      icon: CirclePlay,
      title: 'Your voice — never a computer voice',
      description: 'Sayso contains no text-to-speech and no synthetic, system, or purchased voices, and it has no typed reminders. Record a short message, listen back, and re-record until it sounds right. A recording is the only way an alarm is made.',
    },
    {
      icon: CalendarClock,
      title: 'Schedules that fit real routines',
      description: 'Set alarms once, daily, on selected days, weekdays, or at an interval. Check the plain-language schedule before you save.',
    },
    {
      icon: BellRing,
      title: 'Notification first, playback when possible',
      description: 'A local notification is the reliable baseline. Recorded-voice playback and optional sounds are best-effort within iOS and your device settings.',
    },
    {
      icon: Repeat,
      title: 'Loop, snooze, or move on',
      description: 'Choose to play once or loop for a selected window, then stop or snooze from the ringing alarm experience.',
    },
    {
      icon: AlarmClock,
      title: 'Quiet hours on your terms',
      description: 'Decide whether an alarm should skip, arrive silently, or wait until quiet hours end — without changing every reminder.',
    },
    {
      icon: ShieldCheck,
      title: 'Private by default',
      description: 'Recordings, alarm details, and history stay on your device. There is no account, advertising, analytics, or tracking.',
    },
  ],

  howItWorksTitle: 'From thought to timely prompt in three steps.',
  howItWorks: [
    {
      title: 'Record your reminder',
      description: 'Tap record when you are ready and capture a short message in your own voice. Microphone permission is requested only then.',
    },
    {
      title: 'Pick the right moment',
      description: 'Choose when to be reminded, add an optional sound or vibration, and preview the combination before saving.',
    },
    {
      title: 'Hear the prompt',
      description: 'At the scheduled time, Sayso delivers a local notification and plays your recording when iOS allows it.',
    },
  ],

  pricing: {
    title: 'Useful from the first alarm. Plus when you need more.',
    sub: 'Start free with the essentials. Unlock once for your complete routine library — no subscription and no recurring fee.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        description: 'A focused way to build and keep the routines that matter most.',
        features: ['Up to 5 active alarms', 'Standard schedules', 'Default playback and alarm sound', '7 days of history'],
      },
      {
        name: 'Sayso',
        price: '$9.99',
        per: 'one-time',
        description: 'Pay once to keep every routine in one calm, reliable place.',
        features: ['Unlimited active alarms', 'Advanced repeat and interval schedules', 'Unlimited history and simple insights', 'Everything in Free, forever'],
        highlight: true,
      },
    ],
  },

  support: {
    email: 'support@awaisjamil.com',
    intro: 'Need help with Sayso? Send an email with a short description of what happened and we will get back to you.',
    checklist: ['Your device model and iOS version', 'The app version', 'A short description of the issue (please do not include your recording)'],
    faqs: [
      {
        q: 'Can Sayso read out typed text instead of a recording?',
        a: 'No, and that is deliberate. Sayso has no text-to-speech and no synthetic, system, or purchased voices. Every alarm is a recording you made in your own voice, which is what makes it recognisable at a glance — or rather, without a glance.',
      },
      {
        q: 'How is this different from a talking alarm clock?',
        a: 'A talking alarm clock announces the time or reads a typed note aloud in a computer voice. Sayso plays back the exact audio you recorded, with the words and emphasis you used. Creation is recording-first — you record, listen back, then choose when it should play — and you can hear the recording and the alarm tone together before you save.',
      },
      {
        q: 'Why did I receive a notification but not hear my recording?',
        a: 'Notifications are the dependable delivery channel. iOS can limit an app’s ability to start audio when it is in the background or your device is locked, so recorded-voice playback is best-effort. Open the app and use the test control to check your recording and sound settings.',
      },
      {
        q: 'Where are my recordings stored?',
        a: 'Your recordings and alarm data are stored locally on your device. Sayso does not upload them to a server or use them for advertising, analytics, or transcription.',
      },
      {
        q: 'Why are my alarms not arriving?',
        a: 'First check that notifications are allowed for Sayso in iOS Settings. Then check the alarm is active, its schedule has a next delivery time, and its quiet-hours setting is not set to skip. Focus and Scheduled Summary can also delay notifications.',
      },
      {
        q: 'How do I restore my Plus purchase?',
        a: 'Open the purchase or subscription section in Sayso and choose Restore Purchases while signed in with the same Apple Account used to buy Plus.',
      },
      {
        q: 'Can I delete everything?',
        a: 'Yes. Use Delete All Data in the app’s settings to remove your alarms, delivery history, preferences, and saved recordings from the device. Deleting the app also removes its local data.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '16 August 2026',
    seoDescription: 'Sayso privacy policy: recordings and alarm data stay on your device, with no account, analytics, advertising, or tracking.',
    summary: 'Sayso keeps your recordings, alarm details, and history on your device. We do not collect, transmit, sell, or use your data for advertising.',
    sections: [
      {
        heading: 'No account, no server',
        blocks: [{ p: 'Sayso has no account or sign-in. The app does not operate a backend service for your recordings or alarm data, and it does not send that data to us.' }],
      },
      {
        heading: 'Your recordings stay on your device',
        blocks: [{ p: 'Your recorded audio, alarm names, schedules, delivery history, and preferences are stored locally on your device. Sayso does not upload, transcribe, analyse, or share your recordings.' }],
      },
      {
        heading: 'Permissions',
        blocks: [
          { p: 'Sayso asks for microphone access only when you choose to record an alarm. It asks for notification permission so it can schedule local reminders. These permissions support the app’s core functions and are not used for tracking.' },
        ],
      },
      {
        heading: 'No analytics, advertising, or tracking',
        blocks: [{ p: 'Sayso has no advertising, analytics, crash-reporting, or tracking SDKs. We do not sell personal information or use it to build advertising profiles.' }],
      },
      {
        heading: 'Purchases',
        blocks: [{ p: 'Optional Plus purchases are processed by Apple through the App Store. We do not receive or store your payment details.' }],
      },
      {
        heading: 'Deleting your data',
        blocks: [{ p: 'You can use Delete All Data in the app’s settings to remove your alarms, delivery history, preferences, and recordings. Deleting the app also removes its local data.' }],
      },
      {
        heading: 'Changes and contact',
        blocks: [{ p: 'If we change this policy, we will update the date above. Questions about privacy can be sent to [support@awaisjamil.com](mailto:support@awaisjamil.com).' }],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: '16 August 2026',
    seoDescription: 'Terms and conditions for Sayso, including its one-time Plus purchase and important delivery limitations.',
    summary: 'Sayso is a personal reminder app. Notifications are the reliable delivery channel; playback of a recorded voice or sound is subject to iOS and device conditions.',
    sections: [
      {
        heading: 'Personal-use license',
        blocks: [{ p: 'Sayso is licensed for personal use on Apple devices you own or control, subject to Apple’s standard End User License Agreement.' }],
      },
      {
        heading: 'Delivery and playback limitations',
        blocks: [{ p: 'Local notifications are the app’s dependable delivery channel. iOS, device settings, Focus modes, audio sessions, and other system conditions can limit recorded-voice or alarm-sound playback, especially when the app is in the background or the device is locked. Playback is therefore best-effort, not guaranteed.' }],
      },
      {
        heading: 'Not for emergencies or medical use',
        blocks: [{ p: 'Sayso is not a medical device and must not be relied on for emergency alerts, medication management, or any situation where a missed reminder could cause harm.' }],
      },
      {
        heading: 'Sayso purchase',
        blocks: [{ p: 'Sayso is an optional one-time in-app purchase, not a subscription. It unlocks the Plus features described in the app and does not auto-renew or expire. Purchases and eligible refunds are handled by Apple under its App Store policies.' }],
      },
      {
        heading: 'No warranty',
        blocks: [{ p: 'Sayso is provided “as is” without warranties of any kind. You are responsible for reviewing your alarm setup and for keeping any important information in an appropriate independent system.' }],
      },
      {
        heading: 'Changes and contact',
        blocks: [{ p: 'We may update these terms from time to time and will update the date above when we do. Questions can be sent to [support@awaisjamil.com](mailto:support@awaisjamil.com).' }],
      },
    ],
  },
}
