import { Cpu, FileVideo, GitBranch, Scissors, ShieldCheck, Type } from 'lucide-react'

export const yusafcut = {
  slug: 'yusafcut',
  name: 'YusafCut',
  category: 'Local AI video editor for macOS',
  icon: '/yusafcut/icon.svg',
  seoDescription:
    'YusafCut is a local-first, transcript-based video editor for Apple Silicon Macs. Edit the words; YusafCut edits the video. Open source, no cloud upload, no telemetry.',

  facts: [
    { label: 'Platform', value: 'macOS · Apple Silicon' },
    { label: 'License', value: 'AGPL-3.0 · Open source' },
    { label: 'Data', value: 'Local-first · No telemetry' },
    { label: 'Version', value: '3.7.0' },
  ],

  hero: {
    eyebrow: 'Transcript-based video editing',
    headline: 'Edit the words. YusafCut edits the video.',
    sub: 'A local-first desktop editor for cutting talking-head videos, podcasts, interviews, courses, and creator clips by editing their transcript. Delete a word and the matching video disappears — everything runs on your Mac.',
    ctas: [
      { label: 'View on GitHub', href: 'https://github.com/awaismirza/yusafCut', kind: 'primary', external: true },
      { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/awaismirza', kind: 'ghost', external: true },
    ],
    badges: ['No cloud upload', 'No telemetry or API keys', 'Open source (AGPL)'],
  },

  featuresTitle: 'The transcript is the timeline.',
  features: [
    {
      icon: Type,
      title: 'Transcript-first editing',
      description:
        'The transcript is the timeline, not a side panel. Delete a word and the matching video disappears; reorder paragraphs and the video follows.',
    },
    {
      icon: ShieldCheck,
      title: 'Local by default',
      description:
        'Media, transcripts, models, and project files stay on your machine. No cloud upload, no telemetry, no API keys.',
    },
    {
      icon: Cpu,
      title: 'Fast Apple Silicon pipeline',
      description:
        'whisper.cpp transcription uses Core ML and Metal; exports use FFmpeg with VideoToolbox where possible.',
    },
    {
      icon: Scissors,
      title: 'One-click filler removal',
      description:
        'Remove filler words in one click, refine word timestamps with DTW, and pad cut points with pre-roll for natural pacing.',
    },
    {
      icon: FileVideo,
      title: 'Smart-cut MP4 export',
      description:
        'Multi-clip editing, multi-track audio with music ducking, timeline zoom with in/out markers, and smart-cut export.',
    },
    {
      icon: GitBranch,
      title: 'Real project files',
      description:
        'Project bundles store the edit decision list, metadata, snapshots, and named restore points — with 50-step undo.',
    },
  ],

  howItWorksTitle: 'From recording to finished cut.',
  howItWorks: [
    {
      title: 'Import & transcribe',
      description:
        'Drop in your recording. YusafCut transcribes it locally with whisper.cpp, accelerated by Core ML and Metal on Apple Silicon.',
    },
    {
      title: 'Edit the transcript',
      description:
        'Cut, reorder, and clean up your video by editing words. Remove filler words in one click. The preview follows every edit.',
    },
    {
      title: 'Export smart-cut MP4',
      description:
        'Export a finished MP4 with FFmpeg and VideoToolbox. Your media never leaves your Mac at any step.',
    },
  ],

  support: {
    email: 'owaesmirza@gmail.com',
    intro:
      'YusafCut is open source — bug reports and feature requests are best raised on GitHub, or reach out by email.',
    links: [
      { label: 'GitHub repository', href: 'https://github.com/awaismirza/yusafCut' },
      { label: 'Report an issue', href: 'https://github.com/awaismirza/yusafCut/issues' },
    ],
    faqs: [
      {
        q: 'Does YusafCut upload my videos anywhere?',
        a: 'No. Media, transcripts, models, and project files all stay on your Mac. Network access is limited to model downloads and, once enabled, release update metadata.',
      },
      {
        q: 'What do I need to run it?',
        a: 'A Mac with Apple Silicon. Build instructions and requirements are in the GitHub README.',
      },
      {
        q: 'Is it really free?',
        a: 'Yes — YusafCut is open source under AGPL-3.0. If it helps you, you can support development via [Buy me a coffee](https://buymeacoffee.com/awaismirza).',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'July 2026',
    seoDescription:
      'YusafCut privacy: local-first video editing with no uploads, no telemetry, and no analytics.',
    summary:
      'YusafCut is local-first. Your media is not uploaded, transcripts stay on your machine, and there is no telemetry, analytics, or remote crash reporting.',
    sections: [
      {
        heading: 'Local-first by design',
        blocks: [
          { p: 'YusafCut runs entirely on your Mac:' },
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
            p: 'Projects are saved as local bundles containing the edit decision list, metadata, and snapshots. They are stored wherever you choose to save them and are never transmitted anywhere.',
          },
        ],
      },
      {
        heading: 'Security reporting',
        blocks: [
          {
            p: 'Please do not open public issues for vulnerabilities. Follow the private reporting process described in the SECURITY.md file in the [GitHub repository](https://github.com/awaismirza/yusafCut).',
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
    lastUpdated: 'July 2026',
    seoDescription: 'Terms for YusafCut: open-source software under AGPL-3.0, provided as-is.',
    summary:
      'YusafCut is open-source software licensed under AGPL-3.0-or-later, provided as-is without warranty.',
    sections: [
      {
        heading: 'License',
        blocks: [
          {
            p: 'YusafCut is licensed under [AGPL-3.0-or-later](https://github.com/awaismirza/yusafCut/blob/main/LICENSE). Your use, modification, and distribution of the software are governed by that license.',
          },
        ],
      },
      {
        heading: 'No warranty',
        blocks: [
          {
            p: 'YusafCut is provided "as is", without warranty of any kind, express or implied, as described in the AGPL license. Keep backups of source media — you are responsible for your own files and exports.',
          },
        ],
      },
      {
        heading: 'Trademarks and name',
        blocks: [
          {
            p: 'Availability of the source code does not grant rights to use the YusafCut name or design assets outside what the license permits.',
          },
        ],
      },
      {
        heading: 'Changes',
        blocks: [
          {
            p: 'The project is under active development; features may change, and packaging still has rough edges. See the GitHub repository for current status.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            p: 'Questions about these terms? Email [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com) or open a discussion on [GitHub](https://github.com/awaismirza/yusafCut).',
          },
        ],
      },
    ],
  },
}
