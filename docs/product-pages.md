# Product page conventions

For products that also have a real shipping app with its own repo (currently: Driver
Logbook), keep this site's feature/pricing/legal copy consistent with that app's own docs —
don't let the two drift. Driver Logbook's app repo is expected as a sibling directory at
`../Rideshare-expense-tracker` (see that repo's `CLAUDE.md` for the current feature set,
Premium gating, and copy rules); its product page data lives at
`src/data/product-sites/driverLogbook.js` in this repo.

Every product that has its own page on this site (an internal `/products/<slug>` route,
as opposed to a card that just links out to an external site) follows the same pattern:

1. An **Overview** page — the main product landing page (hero, features, screenshots, pricing).
2. A **Privacy Policy** page.
3. A **Terms & Conditions** page.
4. A **Support** page (FAQ + contact email).

## Sticky side navigation

On large screens (`lg:` breakpoint and up), every one of a product's pages shows a
**fixed, vertically-centered navigation panel docked to the right edge of the viewport**,
listing all four pages (Overview / Privacy Policy / Terms & Conditions / Support) with the
current page highlighted. This lets a visitor jump straight from the product page to its
Privacy Policy, from Privacy to Terms, etc., without needing to go back to `/products` first.

It uses `position: fixed` (not `position: sticky`) specifically because product Overview
pages are built from several full-bleed, alternating-background sections (see FreezerPal's
hero/screenshots/features/pricing sections) — a `sticky` element scoped to a single grid
column would break out of that layout. `fixed` keeps the nav pinned to the viewport
independent of the section structure, and is hidden below `lg` so it doesn't fight for space
with the mobile layout (mobile falls back to the in-page "Back to <Product>" link and the
footer links row instead).

**Reference implementation:** `src/pages/freezerpal/FreezerPalSideNav.jsx`, wired into
`src/pages/freezerpal/FreezerPalPage.jsx` (pass `current="overview"`) and
`src/pages/freezerpal/FreezerPalLegalLayout.jsx` (pass `current` through as a prop, one of
`"privacy" | "terms" | "support"`), which the three legal pages (`FreezerPalPrivacyPage.jsx`,
`FreezerPalTermsPage.jsx`, `FreezerPalSupportPage.jsx`) already forward.

When adding a new product with its own internal page (rather than an external link), copy
this pattern:

- `src/pages/<product>/<Product>Page.jsx` — overview
- `src/pages/<product>/<Product>LegalLayout.jsx` — shared shell for the three legal pages
- `src/pages/<product>/<Product>PrivacyPage.jsx`
- `src/pages/<product>/<Product>TermsPage.jsx`
- `src/pages/<product>/<Product>SupportPage.jsx`
- `src/pages/<product>/<Product>SideNav.jsx` — the fixed right-side nav, product-specific
  (its links are hardcoded to that product's routes, same as `FreezerPalSideNav.jsx`)

Products still in development without a real page yet (no Overview/Privacy/Terms/Support)
use the generic `src/pages/ProductComingSoonPage.jsx` placeholder instead — it doesn't need
the side nav since there's only one page.
