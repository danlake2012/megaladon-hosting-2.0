# SSH / rsync atomic deployment (overview)

This folder contains a simple, safe atomic deployment helper that uses SSH and rsync.

Files:
- `ssh_rsync_deploy.sh` — uploads a local directory to a timestamped remote `releases/<ts>` directory and atomically updates a `current` symlink.

How it works (recommended flow):
1. On the remote server each site is stored under <deploy_base>:
   - releases/        (timestamped folders)
   - current          -> releases/<current-release>
2. `ssh_rsync_deploy.sh ./dist user@host:/home/<user>/site` will upload `./dist` into
   `/home/<user>/site/releases/<timestamp>`.
3. The script switches `/home/<user>/site/current` to point at the new release atomically
   (`ln -sfn`). The webserver's DocumentRoot should point to `/home/<user>/site/current`.

Prerequisites
- Your hosting account must allow SSH and rsync on the remote side.
- You must have SSH access (key or password). For passwordless deploy use an SSH key with an agent or `~/.ssh/config` set up for the host.
- `rsync` and `ssh` must be available locally.

Example usage
```bash
# dry-run to preview (safe)
./ssh_rsync_deploy.sh ./public_html user@example.com:/home/youruser/public_html --dry-run

# actual deploy
./ssh_rsync_deploy.sh ./public_html user@example.com:/home/youruser/public_html
```

Server-side setup (recommended)
1. Enable SSH for your HostGator account and verify connecting from your machine:
   ssh user@example.com
2. Create the deploy base and ensure the webserver points DocumentRoot to `/home/user/public_html/current` or similar.
3. If your webserver currently points to `/home/user/public_html`, you can adjust it to the `current` symlink or use `current` as a convenience.

Rollback
- To rollback: ssh into the host and change the symlink:
  ```bash
  cd /home/user/public_html
  ln -sfn releases/20251101T000000Z current
  ```

Notes
- This script is intentionally small and opinionated. If HostGator doesn't allow `ln -s` for your account, we can adapt to copy or use an apache config rewrite instead.
