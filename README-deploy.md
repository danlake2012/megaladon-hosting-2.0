IMPORTANT: FTP / editor auto-sync DEPLOY DISABLED — DO NOT USE

We removed the old FTP / editor auto-sync deploy helpers from the repo due to
serious safety issues (file truncation and accidental overwrites). These files
were moved into `deploy_tools/legacy/` and are intentionally disabled.

Please follow secure deployment procedures instead:

- Preferred: SSH + rsync with the repository's atomic deploy helpers.
  See `deploy_tools/ssh_rsync_deploy.sh` and `deploy_tools/atomic_deploy.sh`.

- If you are using CI (GitHub Actions), set the repository secrets and use the
  included `.github/workflows/auto-deploy.yml` workflow (requires SSH_PRIVATE_KEY,
  DEPLOY_HOST and DEPLOY_TARGET).

Security notes & checklist:
- DO NOT keep FTP credentials, passwords, or .sftp.json files in the repository.
- If you have any saved .sftp.json (or other credentials) on any machine, remove
  them now and rotate the credentials.
- Keep deployment keys/credentials outside version control; use environment
  secrets or SSH keys.

If you want, I can run a final secrets scan or help wire-up the SSH+rsync
deploy flow and CI integration.

