#!/usr/bin/env bash
set -euo pipefail

# watch-deploy.sh
# Watches the project directory for changes and runs ./deploy.sh when files change.
# Requires: inotifywait (inotify-tools) on Linux.

WATCH_DIR="${1:-.}"
EXCLUDE='(\\.git|node_modules|dist|\.DS_Store|\.sftp.json)'
DEBOUNCE=${DEBOUNCE:-2}

# Flags
RUN_ONCE=0
CONFIRM=0

usage() {
  cat <<EOF
Usage: $0 [watch_dir] [--once] [--confirm]

Options:
  --once      Run deploy once after the first change, then exit.
  --confirm   Prompt for confirmation before each deploy.
  watch_dir   Directory to watch (default: current directory)
EOF
  exit 1
}

# Parse args
ARGS=()
for arg in "$@"; do
  case "$arg" in
    --once) RUN_ONCE=1 ;;
    --confirm) CONFIRM=1 ;;
    -h|--help) usage ;;
    *) ARGS+=("$arg") ;;
  esac
done

if [ ${#ARGS[@]} -ge 1 ]; then
  WATCH_DIR="${ARGS[0]}"
fi

command -v inotifywait >/dev/null 2>&1 || { echo "inotifywait not found. Install inotify-tools: sudo apt install inotify-tools" >&2; exit 1; }

echo "Watching '$WATCH_DIR' for changes. Excluding: $EXCLUDE"
echo "Press Ctrl-C to stop. Debounce: ${DEBOUNCE}s"

while true; do
  # Wait for an event. This blocks until an event happens.
  inotifywait -r -e modify,attrib,close_write,create,delete,move --exclude "$EXCLUDE" "$WATCH_DIR" >/dev/null 2>&1
  echo "Change detected. Waiting ${DEBOUNCE}s for additional changes..."
  sleep "$DEBOUNCE"

  if [ "$CONFIRM" -eq 1 ]; then
    read -p "Run deploy now? [y/N] " yn
    case "$yn" in
      [Yy]*) ;; # continue
      *) echo "Skipping deploy." ; if [ "$RUN_ONCE" -eq 1 ]; then exit 0; else continue; fi ;;
    esac
  fi

  echo "Running ./deploy.sh ..."
  if ./deploy.sh; then
    echo "Deploy finished at $(date)."
  else
    echo "Deploy failed at $(date). Check output above." >&2
  fi

  if [ "$RUN_ONCE" -eq 1 ]; then
    echo "--once specified; exiting after first deploy."
    exit 0
  fi

  echo "Watching for changes..."
done
