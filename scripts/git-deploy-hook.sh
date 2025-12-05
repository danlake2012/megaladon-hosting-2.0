#!/usr/bin/env bash
# Example git hook helper to run the FileZilla-based deploy script automatically.
#
# Copy this file to your repository's .git/hooks/post-commit (or post-push) and
# make it executable. It will call the repository's deploy helper.

set -euo pipefail

# Default locations (edit if your FileZilla export is elsewhere)
FILEZILLA_XML="${FILEZILLA_XML:-$HOME/FileZilla.xml}"
LOCAL_PATH="${LOCAL_PATH:-.}"
REMOTE_PATH="${REMOTE_PATH:-/public_html/megaladonhosting}"

# Toggle dry-run to verify what will be uploaded (set to empty for a real push)
DRY=${DRY:-1}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_SCRIPT="$SCRIPT_DIR/deploy_from_filezilla.py"

if [ ! -f "$DEPLOY_SCRIPT" ]; then
  echo "Deploy helper not found at: $DEPLOY_SCRIPT"
  exit 2
fi

echo "Running git-deploy-hook: filezilla:$FILEZILLA_XML -> remote:$REMOTE_PATH"
if [ "$DRY" -eq 1 ]; then
  echo "DRY RUN: preview only — no files will be uploaded"
  python3 "$DEPLOY_SCRIPT" --filezilla "$FILEZILLA_XML" --local "$LOCAL_PATH" --remote "$REMOTE_PATH" --dry-run
else
  echo "Deploying changes..."
  python3 "$DEPLOY_SCRIPT" --filezilla "$FILEZILLA_XML" --local "$LOCAL_PATH" --remote "$REMOTE_PATH"
fi

echo "git deploy helper finished"
