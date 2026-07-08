import { Calculator, Car, Home, LineChart, ShieldCheck, Table } from 'lucide-react'

export const aussieLoanCalculator = {
  slug: 'aussie-loan-calculator',
  name: 'Aussie Loan Calculator',
  category: 'Loan estimates for Australia',
  icon: '/aussie-loan-calculator/icon.png',
  seoDescription:
    'Aussie Loan Calculator provides mortgage, car loan, personal loan, stamp duty, and LMI repayment estimates for Australia — all calculated on your device.',

  accent: '#C77A18',
  accentDark: '#95560B',
  accentSoft: 'rgba(199, 122, 24, 0.13)',
  // TODO: set the App Store listing URL once available
  download: { kind: 'app-store', url: 'https://apps.apple.com/us/app/aussie-loan-cal/id6759710626' },

  facts: [
    { label: 'Platform', value: 'iPhone' },
    { label: 'Data', value: 'On-device only' },
    { label: 'Accounts', value: 'None required' },
  ],

  hero: {
    eyebrow: 'Australian loan estimates',
    headline: 'Run the numbers',
    headlineAccent: 'before the bank does.',
    sub: 'Mortgage, car loan, and personal loan estimates for Australia — plus stamp duty, LMI, and amortisation schedules. Calculated entirely on your device, with no accounts and no loan details sent to any server.',
    badges: ['No accounts', 'Nothing leaves your device', 'Indicative estimates in seconds'],
  },

  closing: {
    title: 'Run the numbers before you sign.',
    sub: 'Indicative estimates only — always confirm rates, fees, and repayments with your lender or broker.',
  },

  featuresTitle: 'Every big Australian loan question, one app.',
  features: [
    {
      icon: Home,
      title: 'Mortgage repayments',
      description: 'Estimate home loan repayments monthly, fortnightly, or weekly, with principal-and-interest or interest-only options.',
    },
    {
      icon: Car,
      title: 'Car loan estimates',
      description: 'Work out car loan repayments quickly before you talk to a dealer or lender.',
    },
    {
      icon: Calculator,
      title: 'Personal loan estimates',
      description: 'Check what a personal loan really costs across different rates and terms.',
    },
    {
      icon: Table,
      title: 'Stamp duty & LMI',
      description: "Estimate stamp duty and Lenders Mortgage Insurance so there are no surprises at settlement.",
    },
    {
      icon: LineChart,
      title: 'Amortisation & charts',
      description: 'See how repayments split between principal and interest over the life of the loan.',
    },
    {
      icon: ShieldCheck,
      title: 'Private by design',
      description: 'Loan inputs are used for on-device calculations only — no analytics, no tracking SDKs, no advertising identifiers.',
    },
  ],

  support: {
    email: 'owaesmirza@gmail.com',
    intro: 'Need help or found an issue with Aussie Loan Calculator? Contact us by email.',
    checklist: ['App version', 'Device model and iOS version', 'A short description of the issue'],
    faqs: [
      {
        q: 'Are the results financial advice?',
        a: 'No. The app provides indicative calculations only and is not financial advice. Always confirm rates, fees, and final repayments with your lender or broker.',
      },
      {
        q: 'Where are my loan inputs stored?',
        a: 'Your inputs are used to calculate results on your device. The app may store recent inputs and calculator settings locally to pre-fill them next time — this data never leaves your device.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: '26 February 2026',
    seoDescription:
      'Aussie Loan Calculator privacy policy: no personal information collected, no analytics, all calculations on-device.',
    summary:
      'Your loan inputs (amounts, rates, terms) are used to calculate results on your device and are not sent to us. No accounts, no analytics, no tracking.',
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            p: 'Aussie Loan Calculator ("we", "us", "our") is an iOS app that provides loan repayment and cost estimates (for example mortgage repayments, car loans, personal loans, stamp duty and LMI). We designed the app to work without creating accounts or sending your loan details to our servers.',
          },
        ],
      },
      {
        heading: 'Information we collect',
        blocks: [
          {
            p: 'We do not collect personal information such as your name, email, phone number, address, or identity details.',
          },
          {
            p: 'We do not collect analytics (usage analytics, crash analytics, performance analytics) and we do not use tracking SDKs. We do not track you across apps or websites and we do not use advertising identifiers.',
          },
          {
            p: 'In short: your loan inputs (amounts, rates, terms) are used to calculate results on your device and are not sent to us.',
          },
        ],
      },
      {
        heading: 'Information you choose to store on your device',
        blocks: [
          {
            p: 'To make the app more convenient, Aussie Loan Calculator may store certain app preferences and recent inputs locally on your device using Apple platform storage (for example, user defaults or local files). This may include:',
          },
          {
            ul: [
              'Calculator settings (repayment frequency, interest-only vs principal-and-interest selections)',
              'Recent values you entered (loan amount, rate, term) to pre-fill inputs next time',
            ],
          },
          {
            p: 'This local data does not leave your device. We do not have access to it. You can remove it at any time by deleting the app or resetting app data (where available).',
          },
        ],
      },
      {
        heading: 'How we use information',
        blocks: [
          {
            p: 'Because we do not collect data on our servers, we do not use your information for profiling, advertising, analytics, or marketing. Inputs you enter are used only to perform calculations and display results in the app.',
          },
        ],
      },
      {
        heading: 'Sharing with third parties',
        blocks: [
          {
            p: 'We do not sell, rent, or share your personal information with third parties. We do not integrate third-party advertising or analytics services that receive your loan input data.',
          },
        ],
      },
      {
        heading: 'Third-party links',
        blocks: [
          {
            p: "The app or our website may include links (for example to support pages). If you follow a link, the destination site's privacy practices apply. We encourage you to review any external site's privacy policy.",
          },
        ],
      },
      {
        heading: "Children's privacy",
        blocks: [
          {
            p: 'Aussie Loan Calculator is not directed to children under 13, and we do not knowingly collect personal information from children.',
          },
        ],
      },
      {
        heading: 'Security',
        blocks: [
          {
            p: 'We take reasonable measures to keep the app simple and privacy-friendly. Since we do not transmit your loan inputs to our servers, the primary protection is on-device security provided by iOS. Please keep your device updated and protected.',
          },
        ],
      },
      {
        heading: 'International users',
        blocks: [
          {
            p: 'The app performs calculations on your device. We do not operate servers that receive your calculator inputs, and we do not transfer your loan input data internationally.',
          },
        ],
      },
      {
        heading: 'Changes to this policy',
        blocks: [
          {
            p: 'We may update this Privacy Policy from time to time (for example, if we add optional analytics, cloud sync, or new features). When we make changes, we will update the "Last updated" date at the top of this page.',
          },
        ],
      },
      {
        heading: 'Important note (estimates only)',
        blocks: [
          {
            p: 'Aussie Loan Calculator provides estimates for informational purposes only. Results may differ from actual lender offers, fees, policies, and eligibility. Consider checking with a qualified financial professional or your lender for accurate figures.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [
          {
            p: 'If you have questions about privacy, please contact us at [owaesmirza@gmail.com](mailto:owaesmirza@gmail.com).',
          },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    lastUpdated: 'July 2026',
    seoDescription:
      'Terms for Aussie Loan Calculator: indicative estimates only, not financial advice.',
    summary:
      'The app provides indicative calculations only and is not financial advice. Always confirm rates, fees, and final repayments with your lender or broker.',
    sections: [
      {
        heading: 'Purpose of the app',
        blocks: [
          {
            p: 'Aussie Loan Calculator is a personal calculation tool that provides indicative loan repayment and cost estimates for informational use. The app is provided as-is.',
          },
        ],
      },
      {
        heading: 'Not financial advice',
        blocks: [
          {
            p: 'The app does not provide financial advice, credit assistance, or lending recommendations. Estimates may differ from actual lender offers, fees, policies, and eligibility criteria.',
          },
          {
            p: 'Always confirm rates, fees, and final repayments with your lender, broker, or a qualified financial professional before making financial decisions.',
          },
        ],
      },
      {
        heading: 'User responsibility',
        blocks: [
          {
            p: "You are responsible for the accuracy of the inputs you enter and for any reliance you place on the app's estimates.",
          },
        ],
      },
      {
        heading: 'License',
        blocks: [
          {
            p: "The app is licensed for personal use on devices you own or control, under Apple's standard End User License Agreement.",
          },
        ],
      },
      {
        heading: 'Availability and changes',
        blocks: [
          {
            p: 'We aim to keep the app useful and reliable, but we do not guarantee that it will always be available, error-free, or accurate. We may update, modify, or discontinue features at any time without notice.',
          },
        ],
      },
      {
        heading: 'Limitation of liability',
        blocks: [
          {
            p: 'To the maximum extent permitted by law, Aussie Loan Calculator and its developer are not liable for any loss or consequence arising from use of the app, including decisions made in reliance on its estimates. Nothing in these terms limits rights you may have under Australian Consumer Law.',
          },
        ],
      },
      {
        heading: 'Related privacy policy',
        blocks: [
          {
            p: 'Your use of the app is also governed by the [Privacy Policy](/products/aussie-loan-calculator/privacy).',
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
