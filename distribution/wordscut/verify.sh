#!/usr/bin/env bash
# Verify the actual staged/downloaded installer, independent of the build job.
set -euo pipefail
assets="${1:?Usage: verify.sh ASSET_DIRECTORY VERSION}"
version="${2:?Version required}"
[[ "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || exit 2
[[ "$(uname -s)" == Darwin ]] || { echo 'Verification requires macOS.'; exit 1; }
cd "$assets"
python3 - "$version" <<'PY'
import json, pathlib, re, subprocess, sys
v = sys.argv[1]
expected = {f'WordsCut_{v}_aarch64.dmg', f'WordsCut_{v}_source.tar.gz', 'WordsCut_dependency_sources.tar.gz', 'source-provenance.json'}
lines = pathlib.Path('SHA256SUMS.txt').read_text().splitlines()
names = []
for line in lines:
    match = re.fullmatch(r'([a-fA-F0-9]{64})\s+\*?(?:\./)?([^/]+)', line)
    if not match: raise SystemExit('Invalid checksum manifest')
    names.append(match[2])
if len(names) != 4 or set(names) != expected: raise SystemExit('Unexpected or missing release files')
if any(not pathlib.Path(name).is_file() or pathlib.Path(name).stat().st_size == 0 for name in expected): raise SystemExit('Empty or missing release file')
archive = f'WordsCut_{v}_source.tar.gz'
def source(path):
    return subprocess.check_output(['tar', '-xOzf', archive, path], text=True)
pkg = json.loads(source('package.json'))
tauri = json.loads(source('src-tauri/tauri.conf.json'))
cargo = re.search(r'^version = "([^"]+)"', source('src-tauri/Cargo.toml'), re.M)[1]
assert pkg['version'] == tauri['version'] == cargo == v, 'Source versions disagree'
assert tauri['productName'] == tauri['mainBinaryName'] == 'WordsCut'
assert json.loads(pathlib.Path('source-provenance.json').read_text())['version'] == v
PY
shasum -a 256 -c SHA256SUMS.txt
dmg="WordsCut_${version}_aarch64.dmg"
codesign --verify --strict --verbose=2 "$dmg"
xcrun stapler validate "$dmg"
spctl --assess --type open --context context:primary-signature --verbose=2 "$dmg"
mount="$(mktemp -d "${TMPDIR:-/tmp}/wordscut-verify.XXXXXX")"
mounted=0
cleanup() {
  if [[ "$mounted" == 1 ]]; then hdiutil detach "$mount" >/dev/null 2>&1 || true; fi
  rmdir "$mount" 2>/dev/null || true
}
trap cleanup EXIT
hdiutil attach "$dmg" -readonly -nobrowse -mountpoint "$mount" >/dev/null
mounted=1
app="$mount/WordsCut.app"
test -d "$app"
codesign --verify --deep --strict --verbose=2 "$app"
xcrun stapler validate "$app"
spctl --assess --type execute --verbose=2 "$app"
signature="$(codesign -dv --verbose=4 "$app" 2>&1)"
printf '%s\n' "$signature" | grep -Fx 'TeamIdentifier=APFM7SNP9X'
printf '%s\n' "$signature" | grep '^Authority=Developer ID Application:'
/usr/libexec/PlistBuddy -c 'Print CFBundleIdentifier' "$app/Contents/Info.plist" | grep -Fx dev.yusafcut.app
/usr/libexec/PlistBuddy -c 'Print CFBundleShortVersionString' "$app/Contents/Info.plist" | grep -Fx "$version"
/usr/libexec/PlistBuddy -c 'Print CFBundleExecutable' "$app/Contents/Info.plist" | grep -Fx WordsCut
lipo -archs "$app/Contents/MacOS/WordsCut" | grep -Fx arm64
printf 'Verified signed and notarized WordsCut %s from the staged download.\n' "$version"
