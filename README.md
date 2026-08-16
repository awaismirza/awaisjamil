# awaisjamil.com

The source for [awaisjamil.com](https://awaisjamil.com): a React + Vite portfolio with a reusable product mini-site system.

## Start here

All content-authoring conventions live in [docs/authoring-content.md](docs/authoring-content.md). Read it before adding or changing a product, experience entry, personal project, or product legal/support page. It is written for people and every coding agent, not for one particular AI tool.

For a product-specific quick reference, see [docs/product-pages.md](docs/product-pages.md).

## Local development

```sh
npm install
npm run dev
```

Before handing off a change, run:

```sh
npm run lint
npm run test
npm run build
```

## Content locations

| Content | Source |
| --- | --- |
| Product cards, Products page, main-nav product menu | `src/data/products.js` |
| Product mini-sites and their legal/support copy | `src/data/product-sites/` |
| Registered product mini-sites | `src/data/product-sites/index.js` |
| Professional experience timeline | `src/data/experience.js` (`experience`) |
| Legacy personal-project list | `src/data/experience.js` (`personalProjects`) |

The app routes and layouts render these data sources automatically; do not duplicate navigation or page markup for a normal product addition.
