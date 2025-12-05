#!/usr/bin/env bash
set -euo pipefail
# Atomic deploy helper
# Usage: ./atomic_deploy.sh <source-file> <target-file>

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <source-file> <target-file>" >&2
  exit 2
fi

src=$1
dst=$2

if [ ! -f "$src" ]; then
  echo "Source file does not exist: $src" >&2
  exit 3
fi

dstdir=$(dirname "$dst")
tmpfile="$dstdir/.$(basename "$dst").tmp.$$"

echo "[atomic_deploy] copying $src -> $tmpfile" >&2
cp -p -- "$src" "$tmpfile"
echo "[atomic_deploy] renaming $tmpfile -> $dst" >&2
mv -f -- "$tmpfile" "$dst"
echo "$(date -Is) atomic_deploy: $src -> $dst" >> "$PWD/deploy_tools/deploy.log"

exit 0
