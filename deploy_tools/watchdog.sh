#!/usr/bin/env bash
set -euo pipefail

# Simple watchdog: watch for critical files being truncated / zero-sized
# If a watched file is invalid (size < threshold) replace it from the backup
# The script looks for a backup in these locations (in order):
#  1) $PWD/../remote_backups/public_html-20251202-151724
#  2) the known absolute backup path used by the repo

WATCH_BASE="$PWD"
FALLBACK1="$PWD/../remote_backups/public_html-20251202-151724"
FALLBACK2="/home/dan/.config/Code/User/globalStorage/humy2833.ftp-simple/remote-workspace-temp/0625f42bd9132c5e4598a21e63f4a28e/home/danlake2012/public_html/remote_backups/public_html-20251202-151724"

if [ -d "$FALLBACK1" ]; then
  BACKUP_BASE="$FALLBACK1"
elif [ -d "$FALLBACK2" ]; then
  BACKUP_BASE="$FALLBACK2"
else
  BACKUP_BASE="$FALLBACK1"
fi

WATCHLIST="$PWD/watchlist.txt"
LOG="$PWD/watch.log"
DEPLOY="$PWD/atomic_deploy.sh"

# ensure deploy helper executable
if [ ! -x "$DEPLOY" ]; then
  chmod +x "$DEPLOY" 2>/dev/null || true
fi

if [ ! -f "$WATCHLIST" ]; then
  echo "No watchlist found at $WATCHLIST" >&2
  exit 1
fi

echo "$(date -Is) watchdog starting (backup=$BACKUP_BASE)" >> "$LOG"

check_and_restore() {
  local rel="$1"
  local live="$WATCH_BASE${rel}"
  local bak="$BACKUP_BASE${rel}"

  if [ ! -f "$bak" ]; then
    echo "$(date -Is) watchdog: backup missing for $rel" >> "$LOG"
    return
  fi

  if [ ! -f "$live" ] || [ $(stat -c%s "$live" 2>/dev/null || echo 0) -lt 16 ]; then
    echo "$(date -Is) watchdog: invalid/empty $rel -> restoring from backup" >> "$LOG"
    "$DEPLOY" "$bak" "$live" >> "$LOG" 2>&1 || echo "deploy failed for $rel" >> "$LOG"
    return
  fi

  # detect small unexpected differences
  local live_md5
  live_md5=$(md5sum "$live" | awk '{print $1}')
  local bak_md5
  bak_md5=$(md5sum "$bak" | awk '{print $1}')
  if [ "$live_md5" != "$bak_md5" ] && [ $(stat -c%s "$live") -lt 256 ]; then
    echo "$(date -Is) watchdog: $rel looks suspicious (small + differs) -> restore" >> "$LOG"
    "$DEPLOY" "$bak" "$live" >> "$LOG" 2>&1 || echo "deploy failed for $rel" >> "$LOG"
  fi
}

while true; do
  while read -r path || [ -n "$path" ]; do
    # trim whitespace
    path="$(echo "$path" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
    case "$path" in
      ''|#*) continue ;;
      *) check_and_restore "$path" ;;
    esac
  done < "$WATCHLIST"

  sleep 8
done
#!/usr/bin/env bash
set -euo pipefail
# Simple watchdog: watch for critical files being truncated / zero-sized
# If a watched file is invalid (size < threshold) replace it from the backup
# Requires: the remote backup path is available locally (we found public_html-20251202-151724)

WATCH_BASE="$PWD"
# Try a few known backup locations (workspace-local first, then alternate temp)
FALLBACK1="$PWD/../remote_backups/public_html-20251202-151724"
FALLBACK2="/home/dan/.config/Code/User/globalStorage/humy2833.ftp-simple/remote-workspace-temp/0625f42bd9132c5e4598a21e63f4a28e/home/danlake2012/public_html/remote_backups/public_html-20251202-151724"
if [ -d "$FALLBACK1" ]; then
  BACKUP_BASE="$FALLBACK1"
elif [ -d "$FALLBACK2" ]; then
  BACKUP_BASE="$FALLBACK2"
else
  BACKUP_BASE="$FALLBACK1" # default — script will log missing backups
fi
WATCHLIST="$PWD/watchlist.txt"
LOG="$PWD/watch.log"
DEPLOY="$PWD/atomic_deploy.sh"

# small sanity checks
if [ ! -x "$DEPLOY" ]; then
  chmod +x "$DEPLOY" 2>/dev/null || true
fi
if [ ! -f "$WATCHLIST" ]; then
  echo "No watchlist found at $WATCHLIST" >&2
  exit 1
fi

echo "$(date -Is) watchdog starting (backup=$BACKUP_BASE)" >> "$LOG"

check_and_restore(){
  local rel="$1"
  local live="$WATCH_BASE${rel}"
  local bak="$BACKUP_BASE${rel}"

  # if backup doesn't exist, nothing we can do (report and continue)
  if [ ! -f "$bak" ]; then
    echo "$(date -Is) watchdog: backup missing for $rel" >> "$LOG"
    return
  fi

  # if live file is missing or very small/empty, restore
  if [ ! -f "$live" ] || [ $(stat -c%s "$live" 2>/dev/null || echo 0) -lt 16 ]; then
    echo "$(date -Is) watchdog: invalid/empty $rel -> restoring from backup" >> "$LOG"
    "$DEPLOY" "$bak" "$live" >> "$LOG" 2>&1 || echo "deploy failed for $rel" >> "$LOG"
    return
  fi

  # as a secondary measure detect obvious corruption by comparing md5s with backup
  local live_md5
  live_md5=$(md5sum "$live" | awk '{print $1}')
  local bak_md5
  bak_md5=$(md5sum "$bak" | awk '{print $1}')
  if [ "$live_md5" != "$bak_md5" ] && [ $(stat -c%s "$live") -lt 256 ]; then
    echo "$(date -Is) watchdog: $rel looks suspicious (small + differs) -> restore" >> "$LOG"
    "$DEPLOY" "$bak" "$live" >> "$LOG" 2>&1 || echo "deploy failed for $rel" >> "$LOG"
  fi
}

while true; do
  while read -r path || [ -n "$path" ]; do
    # skip empty/comment
    path="$(echo "$path" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
    case "$path" in
      ''|#*) continue ;;
      *) check_and_restore "$path" ;;
    esac
  done < "$WATCHLIST"

  # sleep short — check frequently while you work
  sleep 8
done
