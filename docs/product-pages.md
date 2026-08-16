# Product mini-site quick reference

The complete, repository-wide guide is [authoring-content.md](authoring-content.md). This page is a short checklist for internal product mini-sites.

## Required files and data

1. Create `src/data/product-sites/<camelCaseName>.js`.
2. Store its icon and screenshots in `public/<slug>/`.
3. Register the product in `src/data/product-sites/index.js`.
4. Add its card to `src/data/products.js` with `href: '/products/<slug>'`.
5. Supply overview content plus `privacy`, `terms`, and `support` data in the product definition.

No new route, navigation component, legal page component, or product layout is needed. The shared route in `src/App.jsx` and `ProductSiteLayout` automatically render:

- `/products/<slug>` — Overview
- `/products/<slug>/privacy` — Privacy Policy
- `/products/<slug>/terms` — Terms & Conditions
- `/products/<slug>/support` — Support

They also provide responsive product navigation, current-page highlighting, dark mode, the portfolio return strip, and footer links.

## Do not ship until

- all claims match the product’s authoritative documentation;
- privacy, terms, pricing, and support copy agree;
- screenshots have useful alt text and load from `public/<slug>/`;
- the product card appears on `/products` and in both Products menus;
- light/dark theme and mobile/desktop navigation are checked;
- `npm run lint`, `npm run test`, and `npm run build` pass.
