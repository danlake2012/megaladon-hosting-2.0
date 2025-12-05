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
export FTP_HOST='danlakemedia.com'      # optional override
export FTP_USER='danlake2012'           # optional override
export FTP_REMOTE='/public_html/megaladonhosting'  # optional override
./deploy.sh
# clear the password from the shell
unset FTP_PASSWORD
```

Notes:
- The script attempts FTPS first, then falls back to plain FTP if FTPS is not supported.
- The script reads `FTP_PASSWORD` from the environment or prompts securely.
- `lftp` mirror will synchronize the project directory to the remote path (delete remote files not present locally).

Fallback (if you can't install `lftp`): the script will use `curl` to upload `index.html` only. Installing `lftp` is strongly recommended.

Security:
- Do not store passwords in repository files. Add `.sftp.json` to `.gitignore` (this repository will be updated accordingly).
- Prefer hosting providers that support SFTP/SSH or FTPS.
