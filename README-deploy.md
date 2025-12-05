IMPORTANT: FTP DEPLOY DISABLED (DO NOT USE)

This repository used to include a small FTP-based deploy helper (`deploy.sh`) and related instructions. FTP/auto-sync caused serious data corruption for this project in the past — for safety we have **disabled and moved** the legacy FTP helper to `deploy_tools/legacy/deploy.ftp.disabled.sh` and removed any automated FTP guidance.

Please do NOT use FTP, FTPS, or editor auto-sync tools for deployment any longer. Instead use the secure SSH + rsync flow (recommended) we ship in `deploy_tools/ssh_rsync_deploy.sh`. The rsync-based deploy uploads releases to a timestamped `releases/<ts>` directory and updates a `current` symlink atomically on the server.

Quick usage (local):

```bash
# preview (dry-run):
deploy_tools/ssh_rsync_deploy.sh . user@example.com:/home/youruser/public_html --dry-run

# actual deploy:
deploy_tools/ssh_rsync_deploy.sh . user@example.com:/home/youruser/public_html
```

If you'd like automated deployments on push, see `.github/workflows/auto-deploy.yml` — a GitHub Actions workflow will be added to this repo and will deploy to servers using an SSH deploy key stored in GitHub secrets (see README or the deploy workflow comments for setup instructions).

If you have any questions or want a full audit to ensure there are no FTP credentials anywhere, ask me and I will complete a secrets audit and remove any remaining traces.
