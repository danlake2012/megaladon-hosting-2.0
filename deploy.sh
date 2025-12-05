#!/usr/bin/env bash
set -euo pipefail

# deploy.sh - SFTP-first deploy (uses scripts/deploy_from_filezilla.py)
# Falls back to lftp/curl if SFTP path is not available. This avoids FTP when
# possible — prefer the in-repo SFTP helper which supports FileZilla XML or
# explicit credentials.

FTP_HOST="${FTP_HOST:-megaladonhosting.com}"
FTP_USER="${FTP_USER:-danlake2012}"
FTP_PORT="${FTP_PORT:-22}"
FTP_REMOTE="${FTP_REMOTE:-/public_html/megaladonhosting}"
# SFTP explicit variables — fall back to FTP_* for backwards compatibility
SFTP_HOST="${SFTP_HOST:-$FTP_HOST}"
SFTP_USER="${SFTP_USER:-$FTP_USER}"
SFTP_PORT="${SFTP_PORT:-$FTP_PORT}"
SFTP_REMOTE="${SFTP_REMOTE:-$FTP_REMOTE}"
DRY_RUN=0

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
  esac
done
LOCAL_DIR="${LOCAL_DIR:-.}"

if [ -z "${FILEZILLA_XML:-}" ] && [ -z "${FTP_PASSWORD:-}" ] && [ -z "${SFTP_PASSWORD:-}" ]; then
  # Prompt for password securely (only if not using FileZilla XML which already includes credentials)
  printf "SFTP password for %s@%s: " "$SFTP_USER" "$SFTP_HOST" >&2
  stty -echo
  read -r SFTP_PASSWORD
  stty echo
  printf "\n" >&2
fi

# If SFTP_PASSWORD wasn't set but FTP_PASSWORD was prompted/provided, reuse it
if [ -z "${SFTP_PASSWORD:-}" ] && [ -n "${FTP_PASSWORD:-}" ]; then
  SFTP_PASSWORD="$FTP_PASSWORD"
fi

if command -v python3 >/dev/null 2>&1 && [ -f "scripts/deploy_from_filezilla.py" ]; then
  echo "Using SFTP deploy helper (scripts/deploy_from_filezilla.py)"
  # By default we limit the upload to site-relevant paths to avoid uploading heavy dev files
  DEPLOY_LIST=(index.html assets about pricing domains login support whmcs-theme ready-to-upload/mega-hero)
  PY_ARGS=()
  if [ "$DRY_RUN" -eq 1 ]; then
    PY_ARGS+=(--dry-run)
  fi
  # By default avoid creating remote directories — skip mkdir to prevent permission errors
  PY_ARGS+=(--skip-mkdir)
  # Prefer a FileZilla XML path if provided, else use explicit SFTP env vars
  if [ -n "${FILEZILLA_XML:-}" ]; then
  # If a FileZilla XML is explicitly provided, let the helper mirror the specified local path(s)
  PY_ARGS+=(--filezilla "$FILEZILLA_XML" --local "$LOCAL_DIR" --remote "$SFTP_REMOTE")
  elif [ -n "$SFTP_HOST" ] && [ -n "$SFTP_USER" ]; then
    # Ensure we have a password to hand off; if missing, we'll prompt
    if [ -z "${SFTP_PASSWORD:-}" ]; then
      printf "SFTP password for %s@%s: " "$SFTP_USER" "$SFTP_HOST" >&2
      stty -echo
      read -r SFTP_PASSWORD
      stty echo
      printf "\n" >&2
    fi
    # We'll upload a curated list of site paths (not entire repo) unless LOCAL_DIR is set otherwise.
    if [ "$LOCAL_DIR" = "." ]; then
      for p in "${DEPLOY_LIST[@]}"; do
        if [ -e "$p" ]; then
          # set per-path args and remote target so the remote keeps same top-level name for directories
          if [ -f "$p" ]; then
            PY_ARGS+=(--host "$SFTP_HOST" --user "$SFTP_USER" --port "$SFTP_PORT" --password "$SFTP_PASSWORD" --local "$p" --remote "$SFTP_REMOTE")
          else
            # directory — upload into matching remote subfolder
            base=$(basename "$p")
            PY_ARGS+=(--host "$SFTP_HOST" --user "$SFTP_USER" --port "$SFTP_PORT" --password "$SFTP_PASSWORD" --local "$p" --remote "$SFTP_REMOTE/$base")
          fi
        fi
      done
    else
      PY_ARGS+=(--host "$SFTP_HOST" --user "$SFTP_USER" --port "$SFTP_PORT" --password "$SFTP_PASSWORD" --local "$LOCAL_DIR" --remote "$SFTP_REMOTE")
    fi
  else
    echo "No FileZilla XML path provided and no explicit SFTP host/user in env; skipping SFTP helper." >&2
    PY_ARGS=()
  fi

  if [ ${#PY_ARGS[@]} -gt 0 ]; then
    # shellcheck disable=SC2086
    # If we built multiple distinct PY_ARGS entries (one per path) we'll run them sequentially
    # Each PY_ARGS entry for a path contains 6+ elements; to keep it simple we detect when
    # the array represents multiple invocations (by grouping on --local)
    idx=0
    total=${#PY_ARGS[@]}
    # If any arg is --filezilla we just run once (skip-mkdir may appear earlier)
    found_filezilla=0
    for a in "${PY_ARGS[@]}"; do
      if [ "$a" = "--filezilla" ]; then found_filezilla=1; break; fi
    done
    if [ "$found_filezilla" -eq 1 ]; then
      if python3 scripts/deploy_from_filezilla.py "${PY_ARGS[@]}"; then
        echo "SFTP deploy complete."
        exit 0
      else
        echo "SFTP deploy failed. Exiting (SFTP-only mode)." >&2
        exit 1
      fi
    else
      # iterate; each invocation we expect contains the flags: --host --user --port --password --local --remote [--dry-run]
      # We'll detect --local positions and split
      local_args=()
      current=()
      for a in "${PY_ARGS[@]}"; do
        current+=("$a")
        if [ "$a" = "$SFTP_REMOTE" ] || [[ "$a" == $SFTP_REMOTE/* ]] || [[ "$a" == "--remote" ]]; then
          # continue until we collected a --remote value - handled below when encountering next --local or end
          :
        fi
      done
      # Simplified approach: run deploy_from_filezilla.py for each path by re-parsing DEPLOY_LIST
      for p in "${DEPLOY_LIST[@]}"; do
        if [ -e "$p" ]; then
          if [ "$DRY_RUN" -eq 1 ]; then
            echo "DRY RUN: would upload $p -> $SFTP_REMOTE"
          fi
          if [ "$DRY_RUN" -eq 0 ]; then
            if [ -f "$p" ]; then
              python3 scripts/deploy_from_filezilla.py --host "$SFTP_HOST" --user "$SFTP_USER" --port "$SFTP_PORT" --password "$SFTP_PASSWORD" --skip-mkdir --local "$p" --remote "$SFTP_REMOTE" || echo "Upload of $p failed";
            else
              base=$(basename "$p")
              python3 scripts/deploy_from_filezilla.py --host "$SFTP_HOST" --user "$SFTP_USER" --port "$SFTP_PORT" --password "$SFTP_PASSWORD" --skip-mkdir --local "$p" --remote "$SFTP_REMOTE/$base" || echo "Upload of $p failed";
            fi
          fi
        fi
      done
      echo "SFTP deploy finished (per-path)."
      exit 0
    fi
  fi

fi

echo "SFTP-only mode enabled. No FTP/FTPS/HTTP fallback — exiting if SFTP fails or is unavailable." >&2
exit 1
