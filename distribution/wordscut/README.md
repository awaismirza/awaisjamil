# WordsCut release tooling

The website and release orchestration now belong to `awaismirza/awaisjamil`. Application source remains private in `awaismirza/wordscut-app`; installers, source snapshots and logs are held as maintainer-only draft release assets, never public Pages files or Actions artifacts.

- `prepare-inputs.sh` packages committed private app source for a draft input release.
- `build.sh` tests, builds, signs, notarizes, staples and verifies a candidate locally or in CI.
- `verify.sh` independently verifies the actual downloaded/staged release.

Canonical runbook: [../../docs/wordscut-distribution.md](../../docs/wordscut-distribution.md). Paid checkout/delivery options: [../../docs/wordscut-commerce.md](../../docs/wordscut-commerce.md).
