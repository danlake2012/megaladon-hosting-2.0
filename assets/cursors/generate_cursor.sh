#!/usr/bin/env bash
set -euo pipefail

# Generate PNG and CUR cursor from the SVG source.
# Requirements (install one of each group):
# - rsvg-convert (from librsvg) or ImageMagick (convert)
# - png2ico or ImageMagick (convert) to produce .cur/.ico

SVG="shark.svg"
PNG="shark-32.png"
CUR="shark.cur"

here_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$here_dir"

if [ ! -f "$SVG" ]; then
  echo "SVG source not found: $SVG" >&2
  exit 2
fi

# Render 32x32 PNG from SVG
if command -v rsvg-convert >/dev/null 2>&1; then
  echo "Rendering PNG with rsvg-convert..."
  rsvg-convert -w 32 -h 32 "$SVG" -o "$PNG"
elif command -v convert >/dev/null 2>&1; then
  echo "Rendering PNG with ImageMagick convert..."
  convert -background none -resize 32x32 "$SVG" "$PNG"
else
  echo "Install 'rsvg-convert' or 'ImageMagick (convert)' and re-run this script." >&2
  exit 3
fi

# Convert PNG -> CUR (cursor). Prefer png2ico if available, else try ImageMagick
if command -v png2ico >/dev/null 2>&1; then
  echo "Converting PNG to CUR with png2ico..."
  png2ico "$CUR" "$PNG"
  echo "Created $CUR"
elif command -v convert >/dev/null 2>&1; then
  echo "Attempting to create $CUR with ImageMagick convert (hotspot may not be set)."
  convert "$PNG" "$CUR"
  echo "Created $CUR (verify hotspot manually if needed)."
else
  echo "Install 'png2ico' or 'ImageMagick (convert)' to generate $CUR from $PNG" >&2
  exit 4
fi

echo "Files generated: $PNG, $CUR"
