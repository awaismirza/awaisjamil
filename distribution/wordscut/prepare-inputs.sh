#!/usr/bin/env bash
# Run locally against committed private source; never commit the output here.
set -euo pipefail
source_dir="${1:?Usage: prepare-inputs.sh PRIVATE_SOURCE_DIRECTORY OUTPUT_DIRECTORY}"
output="${2:?Output directory required}"
mkdir -p "$output"
output="$(cd "$output" && pwd)"
cd "$source_dir"
test -z "$(git status --porcelain --untracked-files=no)" || { echo 'Commit tracked source changes first.'; exit 1; }
node scripts/verify-release.mjs
version="$(node -p "require('./package.json').version")"
git archive --format=tar.gz HEAD > "$output/WordsCut-source.tar.gz"
VERSION="$version" OUTPUT="$output" python3 - <<'PY'
import json,os,pathlib,subprocess
p={'version':os.environ['VERSION'], 'commit':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()}
pathlib.Path(os.environ['OUTPUT'],'provenance.json').write_text(json.dumps(p)+'\n')
PY
(cd "$output" && shasum -a 256 WordsCut-source.tar.gz provenance.json > SHA256SUMS.txt)
echo "Prepared $version in $output. Upload only to the wordscut-input-v$version DRAFT release."
