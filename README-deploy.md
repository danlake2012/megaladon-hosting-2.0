Deploy instructions

This project includes `deploy.sh`, a small deploy helper that mirrors the project to your FTP host.

Recommended (secure): use `lftp` with FTPS support

1. Install `lftp` (Debian/Ubuntu):

```bash
sudo apt update && sudo apt install lftp
```

2. Run the deploy script. The script will prompt for the password if `FTP_PASSWORD` is not set.

```bash
# from project root
chmod +x ./deploy.sh
export FTP_HOST='megaladonhosting.com'      # optional override
export FTP_USER='danlake2012'           # optional override
export FTP_REMOTE='/public_html/megaladonhosting'  # optional override
./deploy.sh
# clear the password from the shell
unset FTP_PASSWORD
```

Notes:
GitHub Actions (auto-deploy)
---------------------------------
This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that will run on pushes to `homepage-redesign` and deploy via rsync over SSH.

You must configure these repository Secrets in GitHub (Settings → Secrets) for the workflow to work:
- SSH_PRIVATE_KEY — the private key (PEM) for the user that can write to the target folder
- SSH_USER — the remote username (e.g. `danlake2012`)
- SSH_HOST — the server host (e.g. `megaladonhosting.com`)
- SSH_PORT — port (usually `22`)
- TARGET_DIR — target path list (e.g. `/public_html`)

Once the secrets are added, pushing to `homepage-redesign` will automatically rsync the repo to `TARGET_DIR`.

Local deploy helper
---------------------------------
Use `scripts/auto_deploy.sh` to deploy from your local workstation or CI environment. Example:

```
SSH_USER=danlake2012 SSH_HOST=megaladonhosting.com TARGET_DIR=/public_html ./scripts/auto_deploy.sh
```

If you'd like me to run an initial deploy from this workspace, reply `RUN_NOW` and I will attempt to deploy using the SSH identity available in this environment (or I'll prompt for a password if needed).

- The script attempts FTPS first, then falls back to plain FTP if FTPS is not supported.
- The script reads `FTP_PASSWORD` from the environment or prompts securely.
- `lftp` mirror will synchronize the project directory to the remote path (delete remote files not present locally).
Fallback (if you can't install `lftp`): the script will use `curl` to upload `index.html` only. Installing `lftp` is strongly recommended.

Automatic watch deploy (run after every change)
--------------------------------------------

If you want to automatically deploy after each local change, use the included `watch-deploy.sh` script. It watches the project directory and runs `./deploy.sh` when files change. This script requires `inotifywait` from `inotify-tools` (Linux).

Install `inotify-tools` (Debian/Ubuntu):

```bash
sudo apt update && sudo apt install inotify-tools
```

Run the watcher from your project root:

```bash
chmod +x ./watch-deploy.sh
./watch-deploy.sh
```

Optional: pass a different directory to watch as the first argument:

```bash
./watch-deploy.sh ./assets
```

Notes:
- The watcher ignores `/.git`, `node_modules`, `dist`, `.DS_Store`, and `/.sftp.json` by default.
- `watch-deploy.sh` debounces rapid changes (2s) before calling `deploy.sh`.
- Run the watcher locally (on your machine) — it will prompt for credentials when `deploy.sh` runs.

Security:
- Do not store passwords in repository files. Keep `/.sftp.json` out of version control (it's already in `.gitignore`).
- Prefer key-based auth where possible.
