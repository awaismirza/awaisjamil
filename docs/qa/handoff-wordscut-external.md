# WordsCut external-site migration — 26 October 2026

Base: origin/main 5d82899. Branch: feature/wordscut-external-site.
Owner requested a separate public wordscut-app-web repository and an external
WordsCut product link. They subsequently deferred DNS and asked for GitHub Pages
publication only for now. These portfolio changes are prepared on a review branch;
the live portfolio is left unchanged until wordscut.com is ready.

Removed the internal WordsCut definition/registry entry and screenshot payloads.
The existing product registry now supplies https://wordscut.com to desktop/mobile
menus and product listing links. Kept the small icon and earlier AGPL text.
Old WordsCut/YusafCut overview/privacy/terms/support links redirect to equivalent
new destinations, preserving query/hash. The 404 handler handles direct requests.
The generic product renderer and all other product definitions remain unchanged.

Checks: npm run lint, npm test (8/8), npm run build and git diff --check pass.
Browser production-preview check passes: Products menu has correct external href,
eight old URLs reach corresponding destinations and FreezerPal still renders.
Reproduce with npm run preview -- --host 127.0.0.1 --port 5194, then
node docs/qa/check-wordscut-links.mjs. External requests are intercepted in this
test because DNS is deliberately deferred; this is not a claim of domain readiness.

Rollback is a revert of this branch's code commit. Publish only when the new domain
is reachable or the owner explicitly wants the link changed before DNS. No PR,
main update or live portfolio deployment performed for this prepared branch.
