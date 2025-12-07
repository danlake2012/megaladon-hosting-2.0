#!/usr/bin/env bash
set -euo pipefail

# SSH + rsync atomic deploy helper
# Usage:
#   ./ssh_rsync_deploy.sh <source-dir> <user@host:/path/to/deploy_base> [--dry-run]
# Behavior:
#  - Uploads <source-dir> into a timestamped release directory on the remote host
#    (remote: <deploy_base>/releases/<ts>) using rsync.
#  - Atomically updates the <deploy_base>/current symlink to point at the new
#    release so the web server can serve the new files.
#  - Keeps a simple directory layout on the remote: releases/, current -> releases/<ts>

set -u

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <source-dir> <user@host:/abs/path/to/deploy_base> [--dry-run]" >&2
  exit 2
fi

SRC="$1"
REMOTE="$2"
DRY_RUN=false
if [ "${3:-}" = "--dry-run" ]; then
  DRY_RUN=true
fi

if [ ! -d "$SRC" ]; then
  echo "Source directory does not exist: $SRC" >&2
  exit 3
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required on the local machine. Please install it and retry." >&2
  exit 4
fi

if ! command -v ssh >/dev/null 2>&1; then
  echo "ssh is required on the local machine. Please install it and retry." >&2
  exit 5
fi

# Create an atomic release name
ts=$(date -u +%Y%m%dT%H%M%SZ)
RELEASE_DIR="releases/$ts"

echo "Deploy: $SRC -> $REMOTE (release: $RELEASE_DIR)"

if [ "$DRY_RUN" = true ]; then
  echo "DRY RUN: will perform checks and rsync with --dry-run"
  ssh -o BatchMode=yes "${REMOTE%%:*}" "mkdir -p \"${REMOTE#*:}/releases\"" || true
  rsync -av --delete --dry-run --exclude=.git "$SRC/" "${REMOTE%%:*}:${REMOTE#*:}/$RELEASE_DIR/"
  echo "DRY RUN complete"
  exit 0
fi

# Ensure remote releases dir exists
echo "Creating remote releases dir and $RELEASE_DIR on target..."
# Use only the SSH host part when running remote shell commands
REMOTE_HOST="${REMOTE%%:*}"
REMOTE_PATH="${REMOTE#*:}"
ssh "$REMOTE_HOST" "mkdir -p \"${REMOTE_PATH}/releases\"; mkdir -p \"${REMOTE_PATH}/$RELEASE_DIR\""

# Rsync files
echo "Uploading files with rsync..."
# Safety: avoid accidental deletion of dynamic directories (WHMCS, billing, user uploads)
# by default exclude commonly-sensitive folders from transfer when deploying from a static
# source. You can override by setting DEPLOY_EXCLUDES (space-separated patterns).
DEFAULT_EXCLUDES=(".git" "billing/***" "billing" "uploads/***" "uploads" ".env")
if [ -n "${DEPLOY_EXCLUDES:-}" ]; then
  EXCLUDES=(${DEPLOY_EXCLUDES})
else
  EXCLUDES=(${DEFAULT_EXCLUDES[@]})
fi

# Build rsync exclude flags
RSYNC_EXCLUDE_FLAGS=()
for e in "${EXCLUDES[@]}"; do
  RSYNC_EXCLUDE_FLAGS+=("--exclude=$e")
done

rsync -az --delete "${RSYNC_EXCLUDE_FLAGS[@]}" "$SRC/" "${REMOTE_HOST}:${REMOTE_PATH}/$RELEASE_DIR/"

echo "Ensuring permissions (remote) and switching symlink atomically..."
# Use a safe ln -sfn to update symlink (modern POSIX-compliant behavior on most distros)
# Set release dir to 755 for dirs, 644 for files so Apache can serve them
ssh "$REMOTE_HOST" "cd '${REMOTE_PATH}' && find '$RELEASE_DIR' -type d -exec chmod 755 {} + && find '$RELEASE_DIR' -type f -exec chmod 644 {} + && ln -sfn '$RELEASE_DIR' current && echo 'current -> $RELEASE_DIR'"

echo "Deploy finished: $REMOTE -> current -> $RELEASE_DIR"
echo "You can rollback by pointing current -> a previous releases/<ts> or remove old releases as needed."

exit 0
