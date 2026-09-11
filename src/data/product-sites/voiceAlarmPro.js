import { AlarmClock, BellRing, CalendarClock, CirclePlay, ShieldCheck, Volume2 } from 'lucide-react'

export const voiceAlarmPro = {
  slug: 'voice-alarm-pro',
  // Briefly deployed under this slug before the App Store release; old links redirect here.
  aliases: ['sayso'],
  name: 'Voice Alarm Pro',
  category: 'Voice reminders and alarms in your own voice, for iPhone',
  icon: '/voice-alarm-pro/icon.svg',
  iconDark: '/voice-alarm-pro/icon-dark.svg',
  seoDescription:
    'Voice Alarm Pro plays back a reminder you recorded yourself — never a synthetic voice reading text. Record a short message, choose the moment, and hear your own words on time. Private and entirely on-device.',

  accent: '#08415C',
  accentDark: '#489BC4',
  accentSoft: 'rgba(8, 65, 92, 0.12)',
  download: { kind: 'app-store', url: 'https://apps.apple.com/au/app/voice-alarm-pro/id6801838682' },

  facts: [
    { label: 'Platform', value: 'iPhone · iOS 18 or later' },
    { label: 'Pricing', value: 'Free · $9.99 one-time Pro unlock' },
    { label: 'Data', value: '100% on-device · No account' },
  ],

  hero: {
    eyebrow: 'No robot voices. Yours.',
    headline: 'Say it once.',
    headlineAccent: 'Hear yourself when it counts.',
    sub: 'Most talking alarms read typed text aloud in a computer voice. Voice Alarm Pro plays back a recording you made yourself — your words, your tone — at the moment you chose. There is no text-to-speech in it at all.',
    badges: ['No text-to-speech, ever', 'Your own recorded voice', 'Private by design', 'No account required'],
  },

  recordingShowcase: {
    label: 'Your reminder, in your voice',
  },

  closing: {
    title: 'Your voice. Your routine. Your device.',
    sub: 'Voice Alarm Pro is free to download on the App Store for iPhone. Recordings never leave your device.',
  },

  screenshotsTitle: 'A calmer way to stay on track.',
  screenshots: [
    {
      src: '/voice-alarm-pro/screenshot-today.png',
      alt: 'Voice Alarm Pro Today screen showing the next alarm at 10:15 am, a later alarm at 4:15 pm, and the record button',
      title: 'Today',
      caption: 'See your next alarm and what is coming up later, with record one tap away.',
    },
    {
      src: '/voice-alarm-pro/screenshot-recording.png',
      alt: 'Voice Alarm Pro recording screen with a live waveform, an elapsed-time counter, and a stop button',
      title: 'Record',
      caption: 'Speak your reminder while a live waveform follows your voice.',
    },
    {
      src: '/voice-alarm-pro/screenshot-new-alarm.png',
      alt: 'Voice Alarm Pro New Alarm screen with recording playback, voice-only or voice-plus-alarm playback, loop setting, Test Alarm button, and schedule presets',
      title: 'Review and schedule',
      caption: 'Play it back, test it with the alarm sound, then choose when it should arrive.',
    },
    {
      src: '/voice-alarm-pro/screenshot-paywall.png',
      alt: 'Voice Alarm Pro upgrade screen showing the $9.99 one-time Pro Lifetime Unlock and its features',
      title: 'Pro, once',
      caption: 'Unlock unlimited alarms with a one-time purchase — no subscription.',
    },
  ],

  featuresTitle: 'Built around one idea: your own voice, on time.',
  features: [
    {
      icon: CirclePlay,
      title: 'Your voice — never a computer voice',
      description: 'Voice Alarm Pro contains no text-to-speech and no synthetic, system, or purchased voices, and it has no typed reminders. Record a short message, listen back, and re-record until it sounds right. A recording is the only way an alarm is made.',
    },
    {
      icon: Volume2,
      title: 'Hear it before you save it',
      description: 'Choose voice only or voice plus an alarm sound for each alarm, then tap Test Alarm to hear your recording and the tone together before you save.',
    },
    {
      icon: CalendarClock,
      title: 'Schedules that fit real routines',
      description: 'Set an alarm once or on a repeating schedule, with quick Morning, Lunch, Evening, and Bedtime presets. Check the plain-language summary before you save. Advanced repeat and interval schedules are part of Pro.',
    },
    {
      icon: AlarmClock,
      title: 'Loop, snooze, or stop',
      description: 'Play once or loop for a window you choose, then stop or snooze from the full-screen ringing alarm. An optional passcode adds friction before stopping — it is not device security.',
    },
    {
      icon: BellRing,
      title: 'Notification first, playback when possible',
      description: 'A local notification is the reliable baseline. Recorded-voice playback and alarm sounds are best-effort within iOS and your device settings. Per-alarm quiet hours decide whether an alarm skips, arrives silently, or waits.',
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
      description: 'Tap the microphone and capture a short message in your own voice. Microphone permission is requested only at that moment.',
    },
    {
      title: 'Pick the right moment',
      description: 'Choose when it should play, decide between voice only or voice plus alarm, and use Test Alarm to hear the combination before saving.',
    },
    {
      title: 'Hear the prompt',
      description: 'At the scheduled time, Voice Alarm Pro delivers a local notification and plays your recording when iOS allows it.',
    },
  ],

  pricing: {
    title: 'Useful from the first alarm. Pro when you need more.',
    sub: 'Start free with the essentials. Unlock Pro once for your complete routine library — no subscription and no recurring fee.',
    plans: [
      {
        name: 'Free',
        price: '$0',
        description: 'A focused way to build and keep the routines that matter most.',
        features: ['Up to 5 active alarms', 'Recording, Test Alarm, and the full-screen ringing alarm', 'Standard schedules', '7 days of history'],
      },
      {
        name: 'Pro Lifetime Unlock',
        price: '$9.99',
        per: 'one-time',
        description: 'Pay once. It never expires and never renews.',
        features: ['Unlimited active alarms', 'Advanced repeat and interval schedules', 'Unlimited history and simple insights', 'Everything in Free'],
        highlight: true,
      },
    ],
  },

  support: {
    email: 'support@awaisjamil.com',
    intro: 'Need help with Voice Alarm Pro? Send an email with a short description of what happened and we will get back to you.',
    checklist: ['Your device model and iOS version', 'The app version', 'A short description of the issue (please do not include your recording)'],
    faqs: [
      {
        q: 'Can Voice Alarm Pro read out typed text instead of a recording?',
        a: 'No, and that is deliberate. Voice Alarm Pro has no text-to-speech and no synthetic, system, or purchased voices. Every alarm is a recording you made in your own voice, so you know what it is about without looking at the screen.',
      },
      {
        q: 'How is this different from a talking alarm clock?',
        a: 'A talking alarm clock announces the time or reads a typed note aloud in a computer voice. Voice Alarm Pro plays back the exact audio you recorded, with the words and emphasis you used. Creation is recording-first — you record, listen back, then choose when it should play — and Test Alarm lets you hear the recording and the alarm sound together before you save.',
      },
      {
        q: 'Why did I receive a notification but not hear my recording?',
        a: 'Notifications are the dependable delivery channel. iOS can limit an app’s ability to start audio when it is in the background or your device is locked, so recorded-voice playback is best-effort. Open the app and use Test Alarm to check your recording and sound settings.',
      },
      {
        q: 'Where are my recordings stored?',
        a: 'Your recordings and alarm data are stored locally on your device. Voice Alarm Pro does not upload them to a server or use them for advertising, analytics, or transcription.',
      },
      {
        q: 'Why are my alarms not arriving?',
        a: 'If notifications are turned off, Voice Alarm Pro shows a “Notifications are off” banner — tap it to go to iOS Settings and allow them. Then check the alarm is active, its schedule has a next delivery time, and its quiet-hours setting is not set to skip. Focus and Scheduled Summary can also delay notifications.',
      },
      {
        q: 'How do I restore my Pro purchase?',
        a: 'Tap Upgrade on the Today screen, or Upgrade to Pro in Settings, then choose Restore Purchases while signed in with the same Apple Account used to buy Pro.',
      },
      {
        q: 'Can I delete everything?',
        a: 'Yes. Use Delete All Data in the app’s settings to remove your alarms, delivery history, preferences, and saved recordings from the device. Deleting the app also removes its local data.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '11 September 2026',
    seoDescription: 'Voice Alarm Pro privacy policy: recordings and alarm data stay on your device, with no account, analytics, advertising, or tracking.',
    summary: 'Voice Alarm Pro keeps your recordings, alarm details, and history on your device. We do not collect, transmit, sell, or use your data for advertising.',
    sections: [
      {
        heading: 'No account, no server',
        blocks: [
          { p: 'Voice Alarm Pro has no account or sign-in. The app does not operate a backend service for your recordings or alarm data, and it does not send that data to us.' },
          { p: 'To check for app updates, Voice Alarm Pro requests a small version file from awaisjamil.com. That request carries no recordings, alarm details, or personal identifiers.' },
        ],
      },
      {
        heading: 'Your recordings stay on your device',
        blocks: [{ p: 'Your recorded audio, alarm names, schedules, delivery history, and preferences are stored locally on your device. Voice Alarm Pro does not upload, transcribe, analyse, or share your recordings.' }],
      },
      {
        heading: 'Permissions',
        blocks: [
          { p: 'Voice Alarm Pro asks for microphone access only when you choose to record an alarm. It asks for notification permission after onboarding so it can deliver local alarms; you can decline and turn notifications on later in iOS Settings. These permissions support the app’s core functions and are not used for tracking.' },
        ],
      },
      {
        heading: 'No analytics, advertising, or tracking',
        blocks: [{ p: 'Voice Alarm Pro has no advertising, analytics, crash-reporting, or tracking SDKs. We do not sell personal information or use it to build advertising profiles.' }],
      },
      {
        heading: 'Purchases',
        blocks: [{ p: 'The optional Pro Lifetime Unlock is processed by Apple through the App Store. We do not receive or store your payment details.' }],
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
    lastUpdated: '11 September 2026',
    seoDescription: 'Terms and conditions for Voice Alarm Pro, including its one-time Pro Lifetime Unlock and important delivery limitations.',
    summary: 'Voice Alarm Pro is a personal reminder app. Notifications are the reliable delivery channel; playback of a recorded voice or sound is subject to iOS and device conditions.',
    sections: [
      {
        heading: 'Personal-use license',
        blocks: [{ p: 'Voice Alarm Pro is licensed for personal use on Apple devices you own or control, subject to Apple’s standard End User License Agreement.' }],
      },
      {
        heading: 'Delivery and playback limitations',
        blocks: [{ p: 'Local notifications are the app’s dependable delivery channel. iOS, device settings, Focus modes, audio sessions, and other system conditions can limit recorded-voice or alarm-sound playback, especially when the app is in the background or the device is locked. Playback is therefore best-effort, not guaranteed.' }],
      },
      {
        heading: 'Not for emergencies or medical use',
        blocks: [{ p: 'Voice Alarm Pro is not a medical device and must not be relied on for emergency alerts, medication management, or any situation where a missed reminder could cause harm.' }],
      },
      {
        heading: 'Pro Lifetime Unlock',
        blocks: [{ p: 'The Pro Lifetime Unlock is an optional one-time in-app purchase, not a subscription. It unlocks the Pro features described in the app and does not auto-renew or expire. Purchases and eligible refunds are handled by Apple under its App Store policies.' }],
      },
      {
        heading: 'No warranty',
        blocks: [{ p: 'Voice Alarm Pro is provided “as is” without warranties of any kind. You are responsible for reviewing your alarm setup and for keeping any important information in an appropriate independent system.' }],
      },
      {
        heading: 'Changes and contact',
        blocks: [{ p: 'We may update these terms from time to time and will update the date above when we do. Questions can be sent to [support@awaisjamil.com](mailto:support@awaisjamil.com).' }],
      },
    ],
  },
}
