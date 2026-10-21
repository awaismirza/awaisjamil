#!/usr/bin/env bash
# Same build/sign/verification entry point for this Mac and GitHub Actions.
set -euo pipefail
tooling="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source_dir="${1:?Usage: build.sh PRIVATE_SOURCE_DIRECTORY OUTPUT_DIRECTORY VERSION}"
output="${2:?Output directory required}"
version="${3:?Version required}"
[[ "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || exit 2
source_dir="$(cd "$source_dir" && pwd)"
mkdir -p "$output"
output="$(cd "$output" && pwd)"
test ! -e "$output/SHA256SUMS.txt" || { echo 'Use a fresh output directory; releases are never overwritten.'; exit 1; }
[[ "$(uname -m)" == arm64 ]] || { echo 'Build requires an Apple Silicon Mac.'; exit 1; }
cd "$source_dir"
node scripts/verify-release.mjs
test "$(node -p "require('./package.json').version")" = "$version"
if [[ -n "${WORDSCUT_SOURCE_ARCHIVE:-}" ]]; then
  cp "$WORDSCUT_SOURCE_ARCHIVE" "$output/WordsCut_${version}_source.tar.gz"
  cp "${WORDSCUT_PROVENANCE:?Source provenance required}" "$output/source-provenance.json"
else
  test -z "$(git status --porcelain --untracked-files=no)" || { echo 'Tracked source changes must be committed first.'; exit 1; }
  git archive --format=tar.gz HEAD > "$output/WordsCut_${version}_source.tar.gz"
  VERSION="$version" OUTPUT="$output" python3 - <<'PY'
import json,os,pathlib,subprocess
p={'version':os.environ['VERSION'], 'commit':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()}
pathlib.Path(os.environ['OUTPUT'],'source-provenance.json').write_text(json.dumps(p)+'\n')
PY
fi
npm ci
npm run check
npm test
npm run native:test
npm run engine:test
if [[ ! -s src-tauri/binaries/ffmpeg-aarch64-apple-darwin || ! -s src-tauri/binaries/ffprobe-aarch64-apple-darwin ]]; then
  npm run media:build
fi
if [[ ! -s src-tauri/binaries/whisper-cli-aarch64-apple-darwin ]]; then
  bash scripts/build-whisper.sh
fi
npm run native:build
for name in ffmpeg ffprobe whisper-cli yusafcut-capture; do
  binary="src-tauri/binaries/${name}-aarch64-apple-darwin"
  lipo -archs "$binary" | grep -qw arm64
  test "$(stat -f%z "$binary")" -gt 100000
  minos="$(vtool -show-build "$binary" | awk '/minos/ { print $2; exit }')"
  python3 -c 'import sys; assert tuple(map(int,sys.argv[1].split("."))) <= (13,0,0), "Sidecar requires a newer macOS"' "${minos:-99.0.0}"
  if otool -L "$binary" | grep -E '@rpath|/opt/homebrew|/usr/local'; then
    echo 'Unbundled dynamic dependency'; exit 1
  fi
done
npm run test:rust
npx tauri build --bundles app --no-sign
export APPLE_SIGNING_IDENTITY="${APPLE_SIGNING_IDENTITY:-Developer ID Application: Awais Jamil (APFM7SNP9X)}"
if [[ -z "${APPLE_API_KEY_PATH:-}" ]]; then export NOTARY_PROFILE="${NOTARY_PROFILE:-WordsCut-notary}"; fi
bash scripts/sign-and-notarize.sh
cp "src-tauri/target/release/bundle/dmg/WordsCut_${version}_aarch64.dmg" "$output/"
bash scripts/package-dependency-sources.sh "$output"
(cd "$output" && shasum -a 256 "WordsCut_${version}_aarch64.dmg" "WordsCut_${version}_source.tar.gz" WordsCut_dependency_sources.tar.gz source-provenance.json > SHA256SUMS.txt)
bash "$tooling/verify.sh" "$output" "$version"
echo "Verified candidate is in $output. Deliver through the paid store; do not publish these GitHub assets."
