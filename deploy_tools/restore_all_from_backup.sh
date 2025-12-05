#!/usr/bin/env bash
set -euo pipefail
# Restore all files listed in deploy_tools/watchlist.txt from the backup base
WATCH_BASE="$PWD"
BACKUP_BASE="/home/dan/.config/Code/User/globalStorage/humy2833.ftp-simple/remote-workspace-temp/0625f42bd9132c5e4598a21e63f4a28e/home/danlake2012/public_html/remote_backups/public_html-20251202-151724"
DEPLOY="$PWD/atomic_deploy.sh"

if [ ! -f watchlist.txt ]; then
  echo "watchlist.txt missing in $PWD" >&2
  exit 2
fi

while read -r rel || [ -n "$rel" ]; do
  rel="$(echo "$rel" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
  [ -z "$rel" ] && continue
  if [ ! -f "$BACKUP_BASE$rel" ]; then
    echo "backup missing for $rel, skipping" >&2
    continue
  fi
  dst="$WATCH_BASE$rel"
  dstdir=$(dirname "$dst")
  mkdir -p "$dstdir"
  echo "Restoring $rel -> $dst"
  "$DEPLOY" "$BACKUP_BASE$rel" "$dst"
done < watchlist.txt

echo "All done." 
