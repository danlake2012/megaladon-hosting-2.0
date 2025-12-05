#!/usr/bin/env bash
set -euo pipefail

# deploy.sh - FTP deploy that prompts for password if not set in environment
# It prefers lftp (mirror). If lftp is not available, it falls back to curl for
# a minimal single-file upload and instructs to install lftp for full mirror.

FTP_HOST="${FTP_HOST:-danlakemedia.com}"
FTP_USER="${FTP_USER:-danlake2012}"
FTP_REMOTE="${FTP_REMOTE:-/public_html/megaladonhosting}"
LOCAL_DIR="${LOCAL_DIR:-.}"

if [ -z "${FTP_PASSWORD:-}" ]; then
  # Prompt for password securely
  printf "FTP password for %s@%s: " "$FTP_USER" "$FTP_HOST" >&2
  stty -echo
  read -r FTP_PASSWORD
  stty echo
  printf "\n" >&2
fi

if command -v lftp >/dev/null 2>&1; then
  echo "Using lftp mirror (recommended). Trying FTPS first."
  # Try FTPS (secure) first. If the server doesn't support FTPS, retry with plain FTP.
  if lftp -u "$FTP_USER","$FTP_PASSWORD" "$FTP_HOST" -e "set ftp:ssl-allow yes; lcd $LOCAL_DIR; mirror -R --verbose --delete --parallel=4 ./ $FTP_REMOTE; bye"; then
    echo "FTPS mirror complete."
    exit 0
  else
    echo "FTPS failed, retrying plain FTP (no SSL)."
    lftp -u "$FTP_USER","$FTP_PASSWORD" "$FTP_HOST" -e "set ftp:ssl-allow no; lcd $LOCAL_DIR; mirror -R --verbose --delete --parallel=4 ./ $FTP_REMOTE; bye"
    echo "FTP mirror complete."
    exit 0
  fi
fi

if command -v curl >/dev/null 2>&1; then
  echo "lftp not found; using curl to upload core files (not recursive)."
  # Minimal fallback: upload index.html and assets directory files manually if needed
  if [ -f "$LOCAL_DIR/index.html" ]; then
    curl -T "$LOCAL_DIR/index.html" "ftp://$FTP_HOST$FTP_REMOTE/index.html" --ftp-create-dirs -u "$FTP_USER:$FTP_PASSWORD"
    echo "Uploaded index.html"
  else
    echo "No index.html found in $LOCAL_DIR"
  fi
  echo "Install lftp (e.g., sudo apt install lftp) for full-site mirror support."
  exit 0
fi

echo "Neither lftp nor curl are available. Install one of them and try again."
exit 2
