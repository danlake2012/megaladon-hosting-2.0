SFTP deploy helper — deploy_from_filezilla.py
-------------------------------------------

This helper script parses a FileZilla XML export (e.g. `FileZilla.xml`) and uses the saved host/user/port/password to connect over SFTP (Paramiko) and upload files or directories.

Why this exists
- You told me you use FileZilla — this script reads that same saved entry and automates uploads so I can run the upload from the repo after I make changes.

Quick notes
- The script is intentionally conservative & requires explicit local path and remote path.
- Use `--dry-run` to preview what will be uploaded.
- FileZilla stores saved passwords in base64 — do not commit export files with passwords publicly. Keep them private.

Example
  # dry run
  ./scripts/deploy_from_filezilla.py --filezilla ./FileZilla.xml --local assets/images/mega-hero.jpg --remote /public_html/megaladonhosting/assets/images/ --dry-run

  # real upload
  ./scripts/deploy_from_filezilla.py --filezilla ./FileZilla.xml --local ready-to-upload/mega-hero --remote /public_html/megaladonhosting/assets/images/

Requirements
- Python + paramiko (pip install paramiko)
