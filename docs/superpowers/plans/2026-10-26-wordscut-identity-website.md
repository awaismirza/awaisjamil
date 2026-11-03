# WordsCut Identity Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the WordsCut product marketing website with the newly approved graphite/indigo visual identity, web-optimised app icon, restrained indigo/lavender accent system, updated social preview, and verified SEO and responsive presentation.

**Architecture:** 
1. Replace `public/wordscut/icon.svg` with the web-optimised version of the supplied `wordscut-app-icon-master.svg` (scoped SVG gradient IDs, responsive viewBox, precise squircle and playhead paths).
2. Update `src/data/product-sites/wordsCut.js` with the restrained indigo/lavender palette (`accent: '#4F5EE8'`, `accentDark: '#3644B8'`, `accentOnDark: '#9AA8FF'`, `accentSoft: 'rgba(79, 94, 232, 0.12)'`, `socialPreview: '/wordscut/social-preview.png'`) meeting WCAG AA contrast.
3. Update `src/data/products.js` and `src/components/ProductCard.jsx` to ensure consistent icon presentation for WordsCut while preserving exact styling for all other products.
4. Generate a new 1200x630 `public/wordscut/social-preview.png` matching the graphite/indigo identity, replacing the superseded purple graphic.
5. Enhance `src/components/Seo.jsx` and product layout pages (`ProductOverviewPage.jsx`, `ProductDocPage.jsx`, `ProductSupportPage.jsx`) to emit OpenGraph and Twitter card image metadata.
6. Verify through unit tests, lint, production build, and Playwright visual screenshot comparisons across desktop/mobile and light/dark modes.

**Tech Stack:** React 19, Vite 8, Tailwind CSS, Lucide icons, AppKit/Swift (headless SVG-to-PNG rendering), Playwright (automated visual verification).

**Spec:** AGENTS.md, docs/authoring-content.md, supplied SVG masters in `public/wordscut/`.

## Global Constraints

- Do not invent another logo; use the supplied app-icon SVG master.
- Preserve the portfolio's global favicon (`public/favicon.svg`) and styling for all other products.
- Preserve existing WordsCut copy, feature claims, facts ("Latest Mac build": "1.0.0"), prices, legal pages, checkout logic and links.
- Do not modify domain, deployment, or hosting configuration.
- Validate with `npm run lint`, `npm run test`, and `npm run build`.

## Review Focus

1. Icon scaling and alignment: The web SVG must scale sharply at 36x36 (header/footer nav), 44x44 (product card), and 176x176 (hero) without clipped borders or whitespace gaps.
2. WCAG AA contrast: Indigo text on white in light mode must achieve >= 4.5:1; lavender text on ink/graphite in dark mode must achieve >= 4.5:1.
3. Social preview dimensions and fidelity: `public/wordscut/social-preview.png` must be exactly 1200x630, valid image format, featuring the new master icon and graphite/indigo palette.
4. Meta tags: `<meta property="og:image">` and `<meta name="twitter:image">` must correctly resolve to the absolute URL on awaisjamil.com.
5. Non-regression: All other product mini-sites (WFH Focus, Voice Alarm Pro, Driver Logbook, etc.) and portfolio pages must remain completely unaffected.

---

### Task 1: Web-Optimise and Install the Master App Icon

**Files:**
- Modify: `public/wordscut/icon.svg`
- Track: `public/wordscut/wordscut-app-icon-master.svg`, `public/wordscut/wordscut-menubar-template.svg`, `public/wordscut/wordscut-project-icon-master.svg`
- Test: `src/data/product-sites/wordsCut.test.js`

**Interfaces:**
- Consumes: `public/wordscut/wordscut-app-icon-master.svg`
- Produces: `public/wordscut/icon.svg` (web-optimised SVG with `wc-` scoped IDs, `viewBox="38 38 948 948"`, clean scalable vectors)

- [ ] **Step 1: Write unit tests in `src/data/product-sites/wordsCut.test.js` verifying the new master icon**

Add tests checking that `public/wordscut/icon.svg`:
- Exists and has valid SVG markup
- Uses the new graphite background (`#232A3E` or `#161B2B` or `#0C1020`) and indigo gradient (`#5C6EF0` / `#8092FF`), not `#7040a0`
- Contains scoped gradient IDs preventing DOM ID collisions
- Has `<title>WordsCut</title>`

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL due to existing purple `#7040a0` icon.

- [ ] **Step 3: Implement web-optimised `public/wordscut/icon.svg`**

Create `public/wordscut/icon.svg` using the master vector paths and colors from `wordscut-app-icon-master.svg`, scoped gradient IDs (`wc-bg`, `wc-violet`, `wc-pearl`, `wc-tile`), and responsive `viewBox="38 38 948 948"` so the squircle edges align with CSS containers.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add public/wordscut/icon.svg public/wordscut/wordscut-app-icon-master.svg public/wordscut/wordscut-menubar-template.svg public/wordscut/wordscut-project-icon-master.svg src/data/product-sites/wordsCut.test.js
git commit -m "feat(wordscut): install web-optimised master app icon"
```

---

### Task 2: Apply Restrained Indigo/Lavender Accent Palette

**Files:**
- Modify: `src/data/product-sites/wordsCut.js:20-24`
- Test: `src/data/product-sites/wordsCut.test.js`

**Interfaces:**
- Consumes: Graphite/indigo visual identity tokens
- Produces: Updated `wordsCut` accent tokens in `src/data/product-sites/wordsCut.js`:
  - `accent: '#4F5EE8'` (indigo, 4.99:1 contrast vs white)
  - `accentDark: '#3644B8'` (deep indigo)
  - `accentOnDark: '#9AA8FF'` (periwinkle lavender, 8.35:1 contrast vs ink `#111316`)
  - `accentSoft: 'rgba(79, 94, 232, 0.12)'` (delicate lavender mist)
  - `socialPreview: '/wordscut/social-preview.png'`

- [ ] **Step 1: Write unit tests in `src/data/product-sites/wordsCut.test.js` verifying the accent system**

Add assertions verifying:
- `wordsCut.accent` is `'#4F5EE8'`
- `wordsCut.accentDark` is `'#3644B8'`
- `wordsCut.accentOnDark` is `'#9AA8FF'`
- `wordsCut.accentSoft` is `'rgba(79, 94, 232, 0.12)'`
- `wordsCut.socialPreview` is `'/wordscut/social-preview.png'`
- Neither purple `#7040A0` nor `#B88DE2` remain in `wordsCut.js`

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because `wordsCut.js` currently has old purple accents.

- [ ] **Step 3: Update `src/data/product-sites/wordsCut.js`**

Update `accent`, `accentDark`, `accentOnDark`, `accentSoft`, and add `socialPreview` property.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/data/product-sites/wordsCut.js src/data/product-sites/wordsCut.test.js
git commit -m "feat(wordscut): apply restrained indigo/lavender accent system"
```

---

### Task 3: Consistent Icon Presentation in Product Cards and Metadata

**Files:**
- Modify: `src/data/products.js:76-87`
- Modify: `src/components/ProductCard.jsx:10-30`
- Test: `src/data/product-sites/wordsCut.test.js`

**Interfaces:**
- Consumes: `product.icon` optional property
- Produces: Optional icon rendering in `ProductCard` for products defining `icon`, without breaking any other product card

- [ ] **Step 1: Write test verifying `src/data/products.js` has WordsCut icon registered**

Assert that the WordsCut entry in `products.js` has `icon: '/wordscut/icon.svg'`, while existing entries retain their exact fields.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL

- [ ] **Step 3: Update `src/data/products.js` and `src/components/ProductCard.jsx`**

- In `src/data/products.js`, add `icon: '/wordscut/icon.svg'` to the WordsCut product object.
- In `src/components/ProductCard.jsx`, if `product.icon` is defined, display `<img alt="" className="mt-0.5 h-11 w-11 shrink-0 rounded-xl border border-line" height={44} src={product.icon} width={44} />` beside the title block.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/data/products.js src/components/ProductCard.jsx src/data/product-sites/wordsCut.test.js
git commit -m "feat(wordscut): present product icon on portfolio cards"
```

---

### Task 4: Generate Updated 1200x630 Social Preview Artwork

**Files:**
- Modify: `public/wordscut/social-preview.png`
- Test: `src/data/product-sites/wordsCut.test.js`

**Interfaces:**
- Consumes: Master icon vectors and graphite/indigo branding
- Produces: `public/wordscut/social-preview.png` (1200x630 PNG with dark graphite background, master icon, crisp typography, and indigo accents)

- [ ] **Step 1: Write test checking `public/wordscut/social-preview.png` dimensions and presence**

Add test verifying `public/wordscut/social-preview.png` exists, is non-empty, and has valid header/size.

- [ ] **Step 2: Create generator script and produce `public/wordscut/social-preview.png`**

Design a 1200x630 graphic in SVG featuring:
- Background: Deep graphite gradient (`#0C1020` -> `#161B2B` -> `#232A3E`) with subtle radial indigo glow
- Master WordsCut app icon prominently displayed
- Typography: "WordsCut" brand mark, "Edit words. Shape video." headline with periwinkle/indigo accent, and concise product summary
- Badge: "Local-first video editor for Apple Silicon Macs · No telemetry"
Render the SVG cleanly to `public/wordscut/social-preview.png` using native AppKit.

- [ ] **Step 3: Visually verify `public/wordscut/social-preview.png` using `read_file`**

Verify with `read_file` that the resulting PNG renders crisply with no distortion or artifacts.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add public/wordscut/social-preview.png src/data/product-sites/wordsCut.test.js
git commit -m "feat(wordscut): update social preview artwork with graphite/indigo identity"
```

---

### Task 5: Wire OpenGraph / Twitter Image Metadata in SEO and Product Pages

**Files:**
- Modify: `src/components/Seo.jsx:4-22`
- Modify: `src/components/product/ProductOverviewPage.jsx:65`
- Modify: `src/components/product/ProductDocPage.jsx:42`
- Modify: `src/components/product/ProductSupportPage.jsx:12-16`
- Test: `src/data/product-sites/wordsCut.test.js`

**Interfaces:**
- Consumes: `site.socialPreview` or `site.icon`
- Produces: `<meta property="og:image">` and `<meta name="twitter:image">` absolute URLs

- [ ] **Step 1: Write test verifying SEO metadata generation**

Add unit tests verifying `<Seo>` produces `og:image` and `twitter:image` tags when an `image` prop is supplied.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL

- [ ] **Step 3: Implement `image` prop in `Seo.jsx` and pass in product pages**

- In `src/components/Seo.jsx`: support optional `image` prop, computing absolute URL via `new URL(image, site.domain).toString()` and rendering `og:image` and `twitter:image`.
- In `ProductOverviewPage.jsx`, `ProductDocPage.jsx`, and `ProductSupportPage.jsx`: pass `image={site.socialPreview ?? site.icon}` to `<Seo>`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Seo.jsx src/components/product/ProductOverviewPage.jsx src/components/product/ProductDocPage.jsx src/components/product/ProductSupportPage.jsx src/data/product-sites/wordsCut.test.js
git commit -m "feat(seo): emit og:image and twitter:image metadata for product pages"
```

---

### Task 6: Full Visual Verification, Lint, Tests, and Build

**Files:**
- Modify: none
- Test: `npm run lint`, `npm run test`, `npm run build`, visual screenshot audit

**Interfaces:**
- Consumes: Built web assets and running dev/preview server
- Produces: Screenshot evidence in desktop (light/dark) and mobile (light/dark) modes, all tests passing

- [ ] **Step 1: Run linter**

Run: `npm run lint`
Expected: Exit code 0, no errors or warnings.

- [ ] **Step 2: Run all unit tests**

Run: `npm run test`
Expected: All tests pass.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Exit code 0, production build succeeds.

- [ ] **Step 4: Capture and inspect responsive screenshots in light and dark mode**

Using Playwright with Chrome, capture:
- Desktop light mode: `http://localhost:5173/products/wordscut`
- Desktop dark mode: `http://localhost:5173/products/wordscut`
- Mobile light mode: `http://localhost:5173/products/wordscut`
- Mobile dark mode: `http://localhost:5173/products/wordscut`
- Products listing card: `http://localhost:5173/products`
Inspect all screenshots with `read_file` to confirm visual excellence, typography contrast, and logo fidelity.

- [ ] **Step 5: Verify git cleanliness and push branch**

Run `git diff --check`, `git status`, push `design/wordscut-identity-website` to `origin`, and report commit SHA.
