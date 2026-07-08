# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

This is the source for `awaisjamil.com` — a React + Vite personal/portfolio site with a generic product-page system (`src/data/product-sites/`) for products that have their own `/products/<slug>` page. See `docs/product-pages.md` for the page-structure conventions.

## Driver Logbook product page

The Driver Logbook (rideshare income/expense tracker iOS app) product page lives entirely in `src/data/product-sites/driverLogbook.js` — feature cards, pricing, and the Privacy Policy / Terms & Conditions content are all defined there as plain JS objects, rendered by `src/components/product/ProductOverviewPage.jsx`.

**The Driver Logbook iOS app repo is a separate repo, expected as a sibling directory at `../Rideshare-expense-tracker`** (i.e. `/Users/mohr/code/projects/Rideshare-expense-tracker` relative to this repo). Clone it there first if it's missing before updating this site's Driver Logbook copy. That repo's `CLAUDE.md` is the authoritative source for what the app actually does — Premium gating, mileage tracking behavior, and the standing rule against reintroducing ATO/tax-authority framing — and this site's feature/pricing/legal copy must stay consistent with it whenever either one changes.
