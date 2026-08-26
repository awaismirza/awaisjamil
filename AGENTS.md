# Repository instructions for AI agents

Start here. This file is the repository's tool-agnostic operating agreement for
Codex, Claude, Gemini, Cursor, Copilot, and human contributors.

This file applies to every AI agent working in this repository. The canonical, tool-agnostic workflow is [docs/authoring-content.md](docs/authoring-content.md). Read it before changing site content, product pages, product legal copy, or portfolio/experience data.

## Required reading order

1. This file.
2. [docs/authoring-content.md](docs/authoring-content.md) for any content, product,
   legal, support, portfolio, or experience work.
3. The sibling product repository's instructions, specification, changelog, and
   relevant implementation docs when it is the authoritative source for a product.
4. The relevant product's website data and legal/support copy before changing public
   claims, so the surfaces remain consistent.
5. The project history and existing tests when the scope or current behaviour is
   unclear.
   authoritative source.

## Non-negotiable conventions

- A standard internal product page is data-driven: create one product definition in `src/data/product-sites/`, register it in `src/data/product-sites/index.js`, and add its portfolio card to `src/data/products.js`.
- All product, portfolio, and experience content is data-first: use `src/data/product-sites/`, `src/data/products.js`, and the `experience`/`personalProjects` arrays in `src/data/experience.js`; do not hard-code content into React pages or navigation components.
- Every internal product mini-site must supply Overview, Privacy Policy, Terms & Conditions, and Support content. The shared product layout automatically provides desktop/mobile navigation, dark mode, the portfolio return strip, and footer legal links.
- Do not create a second bespoke route or copy the product layout for a normal product. `src/App.jsx` already serves every registered product at `/products/:slug` and its three companion pages.
- Match product claims, pricing, platform support, privacy statements, and legal wording to the product’s authoritative source. For a sibling app repository, read its agent instructions and relevant docs before writing website copy.
- Preserve existing user changes. Do not modify unrelated files or replace project content with generic template copy.
- Validate content/code changes with `npm run lint`, `npm run test`, and `npm run build`.
- Before committing, run `git diff --check`, review `git status`, and stage only files
  belonging to the requested change. Never include unrelated working-tree changes.
- When a product change needs versioned documentation, keep the canonical spec and
  changelog in that product's own repository. This website may link to or summarise
  them, but its global agent instructions must remain product-neutral.

## Driver Logbook exception

Driver Logbook’s authoritative app repository is expected at `../Rideshare-expense-tracker`. Before changing Driver Logbook copy, read that repository’s `AGENTS.md` and relevant docs. Its Premium gating, mileage behaviour, and rule against ATO/tax-authority framing are authoritative for this site.
