#!/usr/bin/env bash
set -euo pipefail

# DEPRECATED / LEGACY FTP DEPLOY
# This file used to provide an FTP/LFTP-based deploy method. It's been disabled
# and moved here due to the high risk of accidental truncation and insecure
# credential handling. DO NOT USE.
# If you need the legacy script for any reason it is kept here as read-only
# reference; prefer `deploy_tools/ssh_rsync_deploy.sh` which uses SSH + rsync.

echo "ERROR: This FTP-based deploy helper has been intentionally disabled and moved to deploy_tools/legacy. DO NOT USE."
exit 1
