# WordsCut distribution from awaisjamil.com

Updated 22 October 2026. The owner requested consolidation into this repository and a paid product. The canonical product URL is https://awaisjamil.com/products/wordscut with privacy, terms and support under the same path. The source application remains in the private `awaismirza/wordscut-app` repository. This website repository is public; never commit app-source snapshots, installers, private build logs, keys or certificate exports here.

## What moved

- The product's page, screenshots, licence information, support and future purchase entry point live in the existing data-driven product site (`src/data/product-sites/wordsCut.js`). The earlier free-download/GitHub links are removed. The version is corrected to 1.0.0.
- Release orchestration lives in `.github/workflows/wordscut-release.yml`. The shared local/CI build, source preparation and signed-download verifier live in `distribution/wordscut/`.
- All five original v1.0.0 release assets are retained, byte-for-byte, in the **draft** `wordscut-v1.0.0` release in `awaismirza/awaisjamil`. Its installer SHA-256 is `c91a6eab13e537deb64845f8eb4dd8b2b9662783278b64ac79c790e4bb17c171`.
- The complete former distribution repository history, original website implementation, licence, workflow files, metadata and successful verification log are preserved in the migration backup attached to that draft. A durable local copy is kept under `.wordscut-private-backup/` in the owner's awaisjamil folder; it is excluded from Git.
- Seven existing Apple credentials were transferred using sealed-box encryption for this repository's GitHub secret-store public key. No credential values were printed or committed. The temporary transfer draft was removed after installation.

Draft releases are maintainer staging, not customer delivery. GitHub documents that draft release listings require push access: https://docs.github.com/en/rest/releases/releases#list-releases. **Never publish the WordsCut draft releases:** doing so would expose both the paid installer and source. Never use public Pages files, public Actions artifacts, public caches of app build outputs, or published GitHub Releases to deliver a paid installer.

## Verify an existing staged release automatically

In this repository, run **Actions → WordsCut signed distribution → Run workflow**, branch `main`, version `1.0.0`, mode `verify-existing`.

The first job imports the existing Developer ID certificate into a temporary keychain, checks that the identity is present and that Apple accepts the notarization API credentials, and removes the private files/keychain afterward. It does not submit a new app or accept agreements. The second job downloads the actual private-draft assets and validates all checksums, application-source/provenance versions, DMG/app Developer ID signatures, stapled tickets, Gatekeeper, Team ID `APFM7SNP9X`, bundle ID `dev.yusafcut.app`, executable and arm64 architecture. The verification record is saved in the same private draft. Both jobs must pass before the migrated setup is described as verified.

Destination proof: both credential preflight and exact downloaded-asset verification passed in [run 39689869482](https://github.com/awaismirza/awaisjamil/actions/runs/39689869482). The retained 1.0.0 files are unchanged. Anonymous release metadata and installer requests returned 404. The verification record is attached privately to `wordscut-v1.0.0`.

Apple ticket validation and Gatekeeper checks retry at most three times, with short delays, because the first destination run hit an Apple CloudKit network disconnect (error 68). Every gate still requires a successful response; exhausting retries fails the verification. Signing-credential preflight passed in that first run.

Local equivalent on a Mac:

```sh
bash distribution/wordscut/verify.sh /absolute/path/to/downloaded-assets 1.0.0
```

## Prepare private inputs and build the next candidate

Start with a reviewed, committed application version in the private app repository. The version in package.json, Cargo.toml, tauri.conf.json and lockfiles must agree. Do not change the retained v1.0.0 release files.

```sh
bash distribution/wordscut/prepare-inputs.sh /absolute/path/to/wordscut-app .wordscut-release/inputs
gh release create wordscut-input-vVERSION --repo awaismirza/awaisjamil --draft --target main --title 'WordsCut private build inputs' --notes 'PRIVATE source snapshot. Never publish.' .wordscut-release/inputs/WordsCut-source.tar.gz .wordscut-release/inputs/provenance.json .wordscut-release/inputs/SHA256SUMS.txt
```

Replace `VERSION` with the application version. Keep inputs draft-only. Then run the workflow on `main` with that version and mode `build`. It tests the reviewed snapshot, builds the native media tools/helper, checks arm64/minimum macOS/linkage, builds the app, Developer ID signs every native component, notarizes/staples the app and disk image, verifies locally, and stores a unique **draft** candidate. A separate job downloads that candidate and repeats the full verification. Private compiler/test diagnostics are saved only to a draft build-log release on failure. Signing material is removed even on failure. This workflow never publishes a public release or accepts payment.

Fresh build [39690042800](https://github.com/awaismirza/awaisjamil/actions/runs/39690042800) passed 1,350 frontend tests and 61 capture tests, then reproduced the old Swift engine fixture-creation failure. Private source PR #67 changes only the fixture feeding schedule and diagnostics: audio and video feed independently and each marks completion. All 17 media and 9 core engine tests pass locally. The committed 1.0.1 snapshot (`9a3eb28`) in [run 39691034070](https://github.com/awaismirza/awaisjamil/actions/runs/39691034070) passed all frontend, capture, engine and Rust tests, compiled/signed the app and received Apple notarization Accepted. Apple CloudKit then disconnected during stapling (error 68), so no completed candidate was staged. The source signing helper now applies the same bounded retry policy as verification. The updated snapshot is local: automatic approval review requires explicit owner permission before uploading new private source to draft storage in this public repository. The shared local/CI build then completed locally from committed snapshot `7049953`: all tests, app/DMG signing, Apple notarization, stapling, Gatekeeper and final source/checksum/identity/architecture verification passed. The retained local candidate is in ignored `.wordscut-release/candidates/1.0.1/`, with `signed-release-verification.txt`; DMG SHA-256 is `9d06fcb48813d344a23d2015a0b544fa03a0cb66b136256e0dc4ecb78dcdabfd`. Its copied files passed checksum verification. No new candidate was uploaded or published. Remote input `wordscut-input-v1.0.1` still holds snapshot `9a3eb28`, so do not dispatch it expecting the retry fix. Hosted fresh-build success remains unproven until the updated snapshot is authorized and a new run succeeds. The transferred existing-release verification is independent of that build test. Private-repository Actions also previously had a billing block; no payment/spending changes are authorized here.

Local build and signing use exactly the same entry point:

```sh
bash distribution/wordscut/build.sh /absolute/path/to/wordscut-app .wordscut-release/new-candidate VERSION
```

This requires an Apple Silicon Mac, Xcode tools, Node/Rust, the installed Developer ID signing identity, and the existing `WordsCut-notary` Keychain profile (or explicit Apple API credential environment variables). Each output directory must be fresh. The script refuses unsigned or unnotarized success. Source and pinned dependency sources accompany the retained AGPL/GPL build.

## Paid delivery and source rights

Checkout is not live. The site defaults to a contact CTA. Before sales, move the storefront hosting off GitHub Pages to a service that permits commercial storefronts, keeping the code and builds in this repository (see the commerce guide). After approving the price, purchase terms, licence, delivery files and an actual checkout, configure the production build environment with the public checkout URL. The existing Pages build reads the public HTTPS URL from repository variable `WORDSCUT_CHECKOUT_URL`. The Pages build passes this as `VITE_WORDSCUT_CHECKOUT_URL`; a secret Stripe API key must never go in that variable. For a new hosting provider, pass the same public URL as `VITE_WORDSCUT_CHECKOUT_URL` during its build. Rebuild and verify the purchase, receipt, customer download, source delivery where required, and signed installer as a complete flow before advertising availability.

See [wordscut-commerce.md](wordscut-commerce.md) for the Lemon Squeezy/Stripe comparison and commercial-licensing gates. Deleting the old repo does not revoke the earlier AGPL release. Keep its source available to existing recipients through support, without an extra charge.

## Rollback and old repository removal

The old free release is now a draft, its obsolete Release workflow is disabled, and the old Pages entry point redirects to the personal product page (browser verified). Permanent deletion is pending the owner’s action-time confirmation required by Computer Use policy.

Before deletion: preserve and checksum every original asset, preserve the Git history and verification record, validate destination credentials, deploy the updated product/support/terms pages, and verify the actual destination download. Confirm anonymous visitors cannot retrieve draft releases or their files. Remove only `awaismirza/wordscut`; do not alter `wordscut-app`, personal-site visibility, or unrelated credentials.

The local mirror or attached Git bundle can restore the former distribution repository if needed, and the original assets can be restored byte-for-byte. GitHub Issues/Actions URLs cannot be guaranteed to survive deletion; the successful verification log is backed up. Old GitHub Pages and release URLs stop working after deletion; all maintained website CTAs point to awaisjamil.com. Previously granted source-code licences and other people's existing copies cannot be withdrawn.
