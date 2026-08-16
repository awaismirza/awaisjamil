# Content authoring guide

This is the canonical workflow for adding or changing content in `awaisjamil.com`. It is intentionally tool-agnostic: Codex, Claude, Cursor, Copilot, human contributors, and any other agent should follow the same guide.

The site is a React + Vite app styled with Tailwind utilities. It is data-driven: most new content belongs in a data file, and the shared UI renders it. Prefer extending the model below to making a one-off page.

## Data-first rule

**All product, portfolio, and experience content must be added through the existing data files.** Do not hard-code a new product card, experience card, navigation row, or product-page section into a React page or layout.

- Internal product mini-site content, including the Overview, Privacy Policy, Terms & Conditions, Support FAQ, pricing, screenshots, and theme accent, lives in `src/data/product-sites/<camelCaseName>.js`.
- Product portfolio cards and the data that powers the Products page, home-page product preview, and desktop/mobile Products menus live in `src/data/products.js`.
- Professional experience entries live in the `experience` array in `src/data/experience.js`.
- The legacy personal-project list lives in the `personalProjects` array in `src/data/experience.js`.

Shared React components, layouts, routes, and navigation consume these data sources automatically. Change those shared files only when the requested work introduces a reusable capability that the current data model cannot represent; then extend the model and document the new field in this guide.

## Before editing

1. Inspect the current working tree. Preserve unrelated changes.
2. Find the authoritative source for the facts being published. For a shipping app, read its README, product requirements, release/support/privacy docs, and repository instructions. Do not infer pricing, platform support, subscription terms, privacy practices, or product capabilities.
3. Choose the correct content surface below.
4. Add the content through the correct data file and reuse the shared components. Copy the closest existing data shape; do not copy stale claims from an older product.
5. Run all validation commands after the change.

## Choose the right content surface

| Change | Where it belongs | Visitor-facing result |
| --- | --- | --- |
| A product with its own internal product site | `src/data/product-sites/<camelCaseName>.js`, registry, and portfolio registry | `/products/<slug>` plus privacy, terms, and support pages |
| A product that only links to an external site | `src/data/products.js` | Card on `/products`, Home preview, and Products menu |
| A professional job, contract, or creator role | `experience` in `src/data/experience.js` | Home experience preview and `/experience` timeline |
| A personal project for the legacy Work list | `personalProjects` in `src/data/experience.js` | Only rendered by `WorkPage`; see the note below |
| A service, article, or contact detail | `src/data/services.js`, `src/content/posts/`, or `src/data/contact.js` | The matching site page |

### Product versus experience

Do **not** add a personal product to the professional `experience` timeline unless the user explicitly wants it represented as a role. New products normally go in `src/data/products.js`.

The `personalProjects` list is separate from `experience`. It is used by `src/pages/WorkPage.jsx`, but `src/App.jsx` does not currently expose a `/work` route. If someone asks for a new product to appear there too, clarify whether they also want that route restored or added; changing the data alone will not make the item publicly visible.

## Adding a complete internal product mini-site

Use this workflow when a product needs its own overview, privacy policy, terms, and support URL.

### 1. Gather facts and assets

Before writing, confirm:

- product name, slug, category, supported platforms, release status, App Store/GitHub URL, and whether the product is live;
- free and paid plan limits, prices, purchase type (one-time vs subscription), restoration/cancellation rules, and entitlements;
- actual features and important platform limitations;
- whether data leaves the device, accounts/sign-in, cloud sync, notifications, microphone/camera/photo access, analytics, advertising, and tracking;
- support email and any valid external support/issue links;
- app icon and screenshots, with exact descriptions for meaningful alt text;
- the product’s required safety or compliance wording.

Never make medical, security, tax, reliability, background-playback, or privacy claims that are not supported by the product’s documentation.

### 2. Add a product definition

Create `src/data/product-sites/<camelCaseName>.js`. Export one object using the closest existing file as a template (for example, `voiceAlarmPro.js`, `freezerpal.js`, or `wfhFocus.js`). It must have:

```js
export const exampleProduct = {
  slug: 'example-product',
  name: 'Example Product',
  category: 'Short product category',
  icon: '/example-product/icon.svg',
  seoDescription: 'Accurate, concise search description.',
  accent: '#...',
  accentDark: '#...',
  accentSoft: 'rgba(...)',
  download: { kind: 'app-store', url: 'https://…' },
  facts: [],
  hero: {},
  screenshots: [],
  features: [],
  support: {},
  privacy: {},
  terms: {},
}
```

The standard overview renderer reads these optional sections when present:

| Field | Purpose |
| --- | --- |
| `facts` | Short platform/pricing/privacy facts below the hero |
| `hero` | Eyebrow, two-part heading, product copy, app screenshot, badges, and optional CTAs |
| `metrics` | Concise proof points |
| `screenshots` | App/gallery screenshots; use `src`, `alt`, `title`, and `caption` |
| `features` | Feature cards, each with a `lucide-react` icon, title, and accurate description |
| `howItWorks` | Three-step explainer |
| `pricing` | Plan names, prices, features, notes, and one highlighted plan |
| `closing` | Final CTA copy |
| `timerShowcase` or `recordingShowcase` | Optional hero animation supported by `ProductOverviewPage` |

If a new visual treatment is necessary, make it a reusable component in `src/components/product/` and add only an opt-in data field. It must be decorative when it does not convey essential information, respect `prefers-reduced-motion`, and work in both themes.

### 3. Add product assets

Place icons and screenshots under `public/<slug>/`. Reference them with root-relative paths such as `/example-product/screenshot-home.png`.

- Use real, approved product screenshots whenever available; do not leave the `placeholder` flag in a shipping product when real screens have been supplied.
- Provide specific alternative text that explains the product screen, not “screenshot.”
- Keep image filenames predictable: `icon.svg`, `screenshot-home.png`, `screenshot-settings.png`, and so on.
- Do not alter or overwrite assets belonging to another product.

### 4. Register the mini-site and portfolio card

In `src/data/product-sites/index.js`:

1. Import the product definition.
2. Add `[exampleProduct.slug]: exampleProduct` to `productSites`.

In `src/data/products.js`, add one product-card object with:

```js
{
  title: 'Example Product',
  slug: 'example-product',
  type: 'Native iOS app',
  year: '2026',
  status: 'Coming soon', // omit if live
  summary: 'What it does for a visitor.',
  impact: 'How it was built or what makes it notable.',
  stack: ['Swift', 'SwiftUI', 'iOS'],
  href: '/products/example-product',
}
```

This one entry automatically powers all of these surfaces:

- the `/products` card grid;
- the product preview on the home page (the first four linked products);
- the desktop Products dropdown;
- the mobile Products submenu;
- internal navigation from a product card to its mini-site.

Do not manually edit `SiteLayout`, `ProductsNavDropdown`, `ProductCard`, or `App.jsx` just to make a normal registered product appear.

### 5. Supply all four product pages

Every registered internal product must expose all four pages:

| URL | Data field | Required content |
| --- | --- | --- |
| `/products/<slug>` | Overview fields | Hero, real feature/pricing/privacy claims, screenshots when available |
| `/products/<slug>/privacy` | `privacy` | What is stored, transmitted, collected, permissions, payments, deletion, contact |
| `/products/<slug>/terms` | `terms` | License, pricing/purchase terms, limitations, safety/warranty, changes, contact |
| `/products/<slug>/support` | `support` | Working email, clear intro, product-specific FAQ, optional links and support checklist |

`privacy` and `terms` each require `title`, `lastUpdated`, `seoDescription`, `summary`, and `sections`. A section has a `heading` and `blocks`; blocks use `{ p: '…' }`, `{ ul: ['…'] }`, or `{ h3: '…' }`. Markdown-style links in strings are rendered by the shared `InlineText` component.

`support` requires `email`, `intro`, and product-specific `faqs`; it may also have `checklist` and `links`. Do not use boilerplate FAQ answers that contradict the app’s actual support flow.

### 6. Navigation, dark mode, and SEO are automatic—but verify them

The nested route in `src/App.jsx` and `ProductSiteLayout` already provide:

- Overview / Privacy / Terms / Support navigation on desktop and mobile;
- product-header navigation on larger screens and a mobile menu;
- product footer links;
- theme toggle and the current global dark/light theme;
- a “Back to awaisjamil.com” strip for visitors arriving from the portfolio;
- SEO title/description for Overview, legal, and support pages.

The product definition must provide a dark-mode-safe `accent`, `accentDark`, and `accentSoft`, plus an icon that remains recognisable in the shared header/footer. Test both themes. Do not create a duplicate side navigation or product layout unless the user explicitly requests a deliberately different product experience.

## Adding a product that only has an external website

Add a card in `src/data/products.js` and set `href` to the full `https://…` URL. `ProductCard` and the Products navigation automatically recognize it as external and use an external link. Do not create `src/data/product-sites/` data or an internal product route for it unless the user asks for one.

## Adding professional experience

Add one object to `experience` in `src/data/experience.js`. It needs:

```js
{
  company: 'Company',
  role: 'Role',
  location: 'City, Region, Country',
  workMode: 'Remote / Hybrid / On-site',
  period: 'Mon YYYY — Present',
  type: 'Current role',
  summary: 'Outcome-focused overview.',
  highlights: ['Specific accomplishment', 'Specific accomplishment'],
  tags: ['Technology', 'Domain'],
}
```

Entries render on the full `/experience` timeline and the home-page preview, which shows the first six. Keep the newest or most important entries first. Write factual, outcome-focused highlights; do not invent metrics or responsibilities.

## Design and accessibility rules

- Use established shared components, Tailwind tokens/classes, `section-shell`, `section-label`, and `focus-ring` instead of ad-hoc page systems.
- Reuse the card rhythm: `rounded-md` or `rounded-2xl`, `border-line`, `bg-white`/`bg-mist`, `shadow-line`/`shadow-soft`, and responsive `sm:`/`md:`/`lg:` variants as used by neighboring components.
- All changes must remain legible in dark mode. The global `.dark` rules adapt the common background, text, border, and shadow classes; check any custom colors, gradients, images, and inline styles separately.
- Preserve keyboard-visible focus, semantic headings, readable contrast, image `alt` text, and accessible labels.
- Motion should use existing Framer Motion patterns and honor reduced-motion preferences whenever it is more than a simple entrance effect.
- Keep copy direct and human. Claims in product marketing, pricing, privacy, terms, and support must agree with one another.

## Validation and handoff

Run all three commands from the repository root:

```sh
npm run lint
npm run test
npm run build
```

Also inspect `git diff --check` and the final `git status`. For visual changes, run the local site and check the target product page on desktop/mobile widths and in both light and dark themes. Confirm all four internal product URLs load, the product appears on `/products` and in the Products navigation, the support mail link is correct, and screenshots resolve.

When asked to commit or publish, use a focused branch and commit. Never include unrelated working-tree changes.
