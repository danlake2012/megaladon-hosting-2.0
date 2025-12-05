#!/usr/bin/env bash
set -euo pipefail

# auto_deploy.sh - small helper to rsync this repo to a remote server using SSH.
# It supports reading the private key from SSH_PRIVATE_KEY (env) or using an existing
# SSH agent / identity at ~/.ssh/id_rsa.

SSH_USER=${SSH_USER:-danlake2012}
SSH_HOST=${SSH_HOST:-megaladonhosting.com}
SSH_PORT=${SSH_PORT:-22}
TARGET_DIR=${TARGET_DIR:-/public_html}
DRY_RUN=${DRY_RUN:-0}

function usage(){
  cat <<EOF
Usage: $0 [--dry-run] [--no-mkdir]

Environment variables:
  SSH_PRIVATE_KEY - optional, the private key contents. If set, it will be used for the run.
  SSH_USER, SSH_HOST, SSH_PORT, TARGET_DIR can override defaults.

Examples:
  SSH_USER=danlake2012 SSH_HOST=megaladonhosting.com TARGET_DIR=/public_html ./scripts/auto_deploy.sh
  DRY_RUN=1 ./scripts/auto_deploy.sh
EOF
}

CREATE_DIRS=1
while [ "$#" -gt 0 ]; do
  case "$1" in
    --dry-run) DRY_RUN=1; shift ;;
    --no-mkdir) CREATE_DIRS=0; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown arg: $1"; usage; exit 2 ;;
  esac
done

SSH_OPTS="-o StrictHostKeyChecking=accept-new -p ${SSH_PORT}"

TMP_KEY_FILE=""
if [ -n "${SSH_PRIVATE_KEY:-}" ]; then
  # write private key to tempfile and use it
  TMP_KEY_FILE=$(mktemp)
  umask 077 && printf "%s" "$SSH_PRIVATE_KEY" > "$TMP_KEY_FILE"
  SSH_OPTS="$SSH_OPTS -i $TMP_KEY_FILE"
fi

echo "Deploying to ${SSH_USER}@${SSH_HOST}:${TARGET_DIR} (dry-run=${DRY_RUN})"

if [ "$CREATE_DIRS" -eq 1 ]; then
  echo "Ensuring remote target dir exists..."
  ssh $SSH_OPTS ${SSH_USER}@${SSH_HOST} "mkdir -p '${TARGET_DIR}' || true"
fi

RSYNC_CMD=( rsync -az --delete --exclude '.git' --exclude 'node_modules' -e "ssh $SSH_OPTS" ./ ${SSH_USER}@${SSH_HOST}:${TARGET_DIR} )

if [ "$DRY_RUN" -eq 1 ]; then
  echo "Dry run: ${RSYNC_CMD[*]}"
  "${RSYNC_CMD[@]}" --dry-run
else
  echo "Running: ${RSYNC_CMD[*]}"
  "${RSYNC_CMD[@]}"
fi

if [ -n "$TMP_KEY_FILE" ]; then
  shred -u "$TMP_KEY_FILE" || rm -f "$TMP_KEY_FILE"
fi

echo "Deploy finished."
