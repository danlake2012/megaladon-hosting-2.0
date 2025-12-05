#!/usr/bin/env bash
# DEPRECATED / LEGACY FTP DEPLOY
# This file used to provide an FTP/LFTP-based deploy method and has been
# intentionally disabled and moved to the deploy_tools/legacy directory.
#
# REASON: FTP / editor auto-sync has caused data loss for this project.
# The trusted deployment workflow is now SSH + rsync with atomic swap helpers.
# DO NOT USE this script. It is kept for historical reference only.

echo "ERROR: FTP deploy disabled. See README-deploy.md for recommended workflows."
exit 1
