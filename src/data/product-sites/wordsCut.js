import { Cpu, FileVideo, GitBranch, Scissors, ShieldCheck, Type } from 'lucide-react'

const checkoutUrl = import.meta.env?.VITE_WORDSCUT_CHECKOUT_URL?.trim()
if (checkoutUrl) {
  const checkout = new URL(checkoutUrl)
  if (checkout.protocol !== 'https:' || checkout.username || checkout.password) {
    throw new Error('WordsCut checkout must be a public HTTPS checkout URL, never a secret key.')
  }
}

export const wordsCut = {
  slug: 'wordscut',
  aliases: ['yusafcut'],
  name: 'WordsCut',
  category: 'Local AI video editor for macOS',
  icon: '/wordscut/icon.svg',
  seoDescription:
    'WordsCut is a local-first, transcript-based video editor for Apple Silicon Macs. Edit the words; WordsCut edits the video. Local processing, no cloud upload, no telemetry.',

  accent: '#7040A0',
  accentOnDark: '#B88DE2',
  accentDark: '#A879D2',
  accentSoft: 'rgba(112, 64, 160, 0.13)',
  download: checkoutUrl
    ? { kind: 'website', url: checkoutUrl, label: 'Buy WordsCut for Mac', compactLabel: 'Buy WordsCut' }
    : { kind: 'website', url: 'mailto:owaesmirza@gmail.com?subject=WordsCut%20paid%20release', label: 'Ask about the paid release', compactLabel: 'Contact' },

  facts: [
    { label: 'Platform', value: 'macOS 13+ · Apple Silicon' },
    { label: 'Availability', value: checkoutUrl ? 'Paid download' : 'Paid release in preparation' },
    { label: 'Data', value: 'Local-first · No telemetry' },
    { label: 'Latest Mac build', value: '1.0.0' },
  ],

  hero: {
    eyebrow: 'Transcript-based video editing',
    headline: 'Edit words.',
    headlineAccent: 'Shape video.',
    sub: 'A local-first desktop editor for cutting talking-head videos, podcasts, interviews, courses, and creator clips by editing their transcript. Delete a word and the matching video disappears — everything runs on your Mac.',
    ctas: [{ label: 'Purchase and release questions', href: '/products/wordscut/support' }],
    badges: ['Local transcription', 'Apple Silicon · macOS 13+', checkoutUrl ? 'Paid Mac app' : 'Paid release coming soon'],
  },

  closing: {
    title: 'Cut your next video by editing words.',
    sub: 'WordsCut is the new name for YusafCut. Existing .scribe projects remain compatible. Purchase details and customer download delivery will be available here when checkout is ready.',
  },

  screenshotFormat: 'desktop',
  screenshotsTitle: 'Inside WordsCut',
  screenshots: [
    { src: '/wordscut/recording.png', alt: 'WordsCut recording controls for preparing a screen and microphone recording', title: 'Prepare a recording', caption: 'Choose capture settings in the Mac app before recording.' },
    { src: '/wordscut/editor.png', alt: 'WordsCut editor with a synthetic video, transcript and timeline', title: 'Words and footage together', caption: 'The real Mac editor, using a synthetic sample recording.' },
    { src: '/wordscut/transcript.png', alt: 'WordsCut transcript and cleanup controls', title: 'Keep the words you want', caption: 'Edit the transcript and refine the timing of your cut.' },
    { src: '/wordscut/export.png', alt: 'WordsCut video export settings', title: 'Export on your Mac', caption: 'Choose the format and render from your original media.' },
  ],
  featuresTitle: 'From recording to final cut',
  features: [
    { icon: Type, title: 'Edit the transcript', description: 'Delete words, reorder passages, remove fillers, and shorten pauses. The connected video follows your edits, with undo and redo.' },
    { icon: FileVideo, title: 'Record or import', description: 'Import footage or use screen, window, area, camera and microphone recording controls. Recording permissions are managed by macOS; native capture validation is still in progress.' },
    { icon: Cpu, title: 'Local transcription', description: 'whisper.cpp uses Core ML and Metal on Apple Silicon. Download a speech model, then transcribe on your Mac without uploading the recording.' },
    { icon: Scissors, title: 'Shape the timeline', description: 'Trim, split, duplicate and reorder clips. Work with chapters, in–out ranges, playback quality controls and audio waveforms.' },
    { icon: Type, title: 'Captions and annotations', description: 'Add captions and annotations, adjust their timing, and include them in a video export. Use source-time privacy masks for static regions and check their coverage.' },
    { icon: FileVideo, title: 'Style the frame', description: 'Choose backgrounds, padding, corners, aspect ratios and device frames. Add zooms, follow-cursor movement and cursor styling when event data is available.' },
    { icon: FileVideo, title: 'Music and narration', description: 'Add music and voice-over tracks with fades, mute and solo controls. Export supports music ducking, loudness targets and an audio report; preview does not apply ducking.' },
    { icon: Cpu, title: 'Export your way', description: 'Export MP4, MOV, ProRes, GIF, M4A or WAV, selected ranges and audio stems. ProRes 4444 supports transparency; other formats flatten unsupported alpha.' },
    { icon: GitBranch, title: 'Projects that stay editable', description: 'Save .scribe projects with edit decisions, snapshots and restore points. Existing YusafCut project files and application preferences keep their compatibility identifiers.' },
    { icon: ShieldCheck, title: 'Local by default', description: 'Media processing stays on your Mac. No telemetry or remote crash reporting. Optional CLI and MCP agent control is off by default and must be enabled in the app.' },
  ],
  howItWorksTitle: 'Make your next cut',
  howItWorks: [
    { title: 'Bring in a take', description: 'Import footage or record a take, then create its transcript locally.' },
    { title: 'Keep the story', description: 'Edit words, trim pauses, arrange clips and refine captions, framing and sound.' },
    { title: 'Export and keep editing', description: 'Render the finished video on your Mac and save the .scribe project for your next revision.' },
  ],

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'WordsCut is open source — bug reports and feature requests are best raised on GitHub, or reach out by email.',
    links: [
      { label: 'Purchase and release information', href: '/products/wordscut' },
      { label: 'Licence information', href: '/products/wordscut/terms' },
    ],
    faqs: [
      {
        q: 'Does WordsCut upload my videos anywhere?',
        a: 'No. Media, transcripts, models, and project files all stay on your Mac. Network access is limited to model downloads and, once enabled, release update metadata.',
      },
      {
        q: 'What do I need to run it?',
        a: 'An Apple Silicon Mac running macOS 13 Ventura or later. Intel Macs are not supported. The Mac build has been signed and notarized. A paid release is being prepared; contact support for availability and installation questions.',
      },
      { q: 'Is WordsCut available in the Mac App Store?', a: 'Not yet. A separate store build is being prepared; sandbox, persistent file access, capture and licensing checks remain open.' },
      { q: 'What happened to YusafCut?', a: 'YusafCut is now WordsCut. Existing .scribe projects stay compatible. The old product URLs redirect here.' },
      {
        q: 'Will WordsCut be a paid product?',
        a: 'Yes. A paid release is being prepared. Pricing, purchase terms and customer delivery will be shown before checkout opens. Existing recipients of the earlier AGPL-licensed 1.0.0 release retain their licence rights; contact support for the matching source files.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '22 October 2026',
    seoDescription:
      'WordsCut privacy: local-first video editing with no uploads, no telemetry, and no analytics.',
    summary:
      'WordsCut is local-first. Your media is not uploaded, transcripts stay on your machine, and there is no telemetry, analytics, or remote crash reporting.',
    sections: [
      {
        heading: 'Local-first by design',
        blocks: [
          { p: 'WordsCut runs entirely on your Mac:' },
          {
            ul: [
              'Your media is not uploaded.',
              'Generated transcripts stay on your machine.',
              'There is no telemetry, analytics, or remote crash reporting.',
              'Network access is limited to model downloads and, once enabled, release update metadata.',
            ],
          },
        ],
      },
      {
        heading: 'Project files',
        blocks: [
          {
            p: 'Projects are saved locally as .scribe bundles with edit decisions, metadata and snapshots. Media references may point to original files, so keep those files available and backed up. Optional agent integrations can access project information when you explicitly enable them.',
          },
        ],
      },
      { heading: 'Permissions and network requests', blocks: [{ p: 'macOS requests screen recording, camera or microphone access when needed. Model downloads and release links connect to third-party services. Optional agent connections are off by default. This product page uses the same hosting and external resources as awaisjamil.com; visiting a link sends ordinary connection information to its provider.' }] },
      {
        heading: 'Security reporting',
        blocks: [
          {
            p: 'Please do not open public issues for vulnerabilities. Email [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com) privately with vulnerability details; do not include private recordings or credentials.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            p: 'Questions about privacy? Email [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: '22 October 2026',
    seoDescription: 'WordsCut release and purchase information, earlier-version licence rights, and support.',
    summary:
      'WordsCut is preparing a paid release. Checkout, pricing and purchase terms are not yet available. The earlier 1.0.0 release remains subject to its existing licence.',
    sections: [
      {
        heading: 'Earlier release licence',
        blocks: [
          {
            p: 'The earlier WordsCut 1.0.0 release was provided under [AGPL-3.0-or-later](/wordscut/legacy-AGPL-3.0.txt). Removing the former distribution repository does not revoke those rights. Existing recipients can contact [support](mailto:owaesmirza@gmail.com?subject=WordsCut%201.0.0%20source) for the matching application and dependency sources at no additional charge. A paid release does not automatically change earlier licences.',
          },
        ],
      },
      {
        heading: 'Purchase availability',
        blocks: [
          {
            p: 'The paid launch is in preparation. No price, subscription, refund policy, or proprietary licence is being offered by this page yet. Purchase terms and delivery details must be shown before payment. Keep backups of your source media and projects.',
          },
        ],
      },
      {
        heading: 'Trademarks and name',
        blocks: [
          {
            p: 'Availability of the source code does not grant rights to use the WordsCut name or design assets outside what the license permits.',
          },
        ],
      },
      {
        heading: 'Changes',
        blocks: [
          {
            p: 'The project is under active development; features may change, and packaging still has rough edges. Contact support for current release status.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            p: 'Questions about these terms or an earlier release? Email [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
    ],
  },
}
