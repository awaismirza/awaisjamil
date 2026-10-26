# WordsCut marketing v2 handoff — 26 October 2026

## Status

Implementation commit: `536cbecee65c1af176eea99617e8bde471a43e43`.
Review branch: `design/wordscut-marketing-v2` in `/private/tmp/wordscut-marketing-v2`.
Website base: `5d82899` (fetched latest main before work).
Authoritative app source: `5875e4de0c01afc077c007cb98b093308c02c761`, version 1.10.1.
The final documentation commit follows the implementation commit on this branch.

Finished: dedicated data-driven overview; real editor hero; selectable workflow;
timeline, styling, recorder/export, local-first section; nine-image native gallery
with keyboard modal and actual-size mode; capabilities; FAQ and contact CTA;
master app icon; social preview; `.wordscut` development/legacy `.scribe` wording.
Existing routing, YusafCut aliases, checkout validation, earlier licence rights,
legal/support links, shared shell and other product overviews remain in place.
No dependency, application implementation, schema or version changes.

## Capture evidence and limitations

The real React server and Rust app ran through Tauri on this Apple Silicon Mac.
The default `npm run tauri:dev` failed first on the sandboxed Swift module cache;
a temporary-cache retry reached an iconutil sandbox failure. The successful
launch used `npm run tauri:dev -- --config '{"build":{"beforeDevCommand":"npm run dev"}}'`
with approved local execution, skipping icon regeneration to preserve existing
owner-generated icon work. Rust completed compilation and the native wrapper
launched WordsCut Dev; screenshots were taken via native app screenshot APIs,
not a browser mock of the editor.

Nine native states plus truthful crops were captured fresh on 26 October. Source
was an original Fieldnotes presentation video, a synthetic illustrated camera
stand-in and an authored transcript. This is not an ASR accuracy demonstration.
Only the synthetic project was edited. Private recordings, people, device names,
account information and private transcripts were excluded from public assets.

`public/wordscut/screenshots/manifest.json` records source commit, state, date,
fixture description, crop, dimensions, checksum and privacy review. All candidate
website captures passed review. No existing image is falsely labelled fresh.
The original logical window capture is 1400×900; it has not been upscaled to
pretend Retina resolution. Private source fixtures and raw captures remain local.

Camera picture capture is blocked: the synthetic camera layer was blank in this
dev session, despite working position/shape controls. Only a genuine inspector
crop is shown, explicitly captioned; no camera result was composited. The main
demo camera was removed using the app's ordinary controls. Recorder setup showed
the display-only FFmpeg fallback: window, area and system audio were unavailable.
Camera and microphone were turned off before the recorder screenshot. No real
recording, permissions grant, ASR run, export render or signed-release acceptance
was performed. Successful camera footage and native recorder acceptance need
separate owner Mac QA; app code was not changed to make marketing capture work.

The original app checkout remains on main with its pre-existing generated-icon
changes and untracked `dev` item; neither was staged. The normal dev command did
invoke the icon generator before failing. The successful launch skipped it. The
synthetic fixture now lives under an ignored build directory, not tracked files.
The owner's website checkout remains on its existing branding branch.

## Executed validation

- `npm run lint`: pass.
- `npm test`: 12/12 pass, no skips. Three new content/provenance tests were observed
  failing before implementation, then passing.
- `npm run build`: pass. Vite reports a >500 KB main-chunk advisory (622 KB, 187 KB
  gzip); no chunking refactor was added to this scoped redesign.
- `git diff --check`: pass.
- `node scripts/qa-wordscut.mjs`: pass, ten combinations (390, 768, 1280, 1440,
  1920 × light/dark). Checks overflow, all images decoded, max two-line headings,
  workflow selection, keyboard modal focus loop/return, actual-size mode, mobile
  menu, canonical/social metadata, contact semantics, all four alias/legal routes,
  portfolio/products/another product, preserved licence language and console errors.
- Independent read-only review: one P2 focus-contrast issue, fixed. Browser repro
  was 1.43:1 on a light panel before the fix; all combinations now pass >=3:1.
- Design source lint: 0 FAIL, 0 WARN. Browser inspector: 0 FAIL, 3 documented WARN
  (type scale, no autoplay footage, intentional mobile timeline scrolling).
- Actual screenshot review: desktop, full page, mobile, tablet, both themes and
  gallery reviewed; improvements and self-assessed rubric in
  `wordscut-marketing-review.md`.

App `npm run check`, app tests, Rust/native/engine/golden FFmpeg suites were not
run: this branch changes only the website. This work does not claim media-engine,
recording-permission, camera-sync or signed-release acceptance.

## Reproduce and review

```sh
cd /private/tmp/wordscut-marketing-v2
npm run dev -- --host 127.0.0.1 --port 5186
# In another terminal:
node scripts/qa-wordscut.mjs
npm run lint
npm test
npm run build
git diff --check
```

This worktree reuses the owner's installed dependencies through an ignored
node_modules symlink. A fresh checkout can install from the unchanged lockfile.
The browser suite uses installed Chrome and expects checkout to be unset.

Preview: `http://127.0.0.1:5186/products/wordscut`.
Review images under `docs/qa/wordscut-marketing/`:
- `light-1440-hero.png`, `light-1440-full.jpg` — desktop.
- `light-390-full.jpg`, `dark-390-full.jpg` — mobile.
- `light-768-full.jpg` — tablet.
- `light-gallery.jpg`, `dark-gallery-open.png` — gallery.
- Both themes also have 1280/1920 hero/full screenshots; `results.json` contains
  the matrix outcome. `taste/` has measured screenshots and `report.json`.
- `public/wordscut/social-preview.png` — 1200×630 screenshot-based social image.

## Next three actions / approvals

1. Owner reviews the branch and visual assets; camera/recorder limitations are
   visible in the page and provenance, not hidden behind a success claim.
2. Capture a successful authorized camera composition and full native recorder
   workflow on an accepted Mac build, then replace the limited captures and
   refresh their provenance.
3. Owner separately decides on PR/merge and deployment. No PR, merge, deploy,
   release, tag, domain change, pricing or live checkout was authorized/performed.
