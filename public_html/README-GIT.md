Repository for the live site content in `public_html`.

Important:
- Do NOT commit any database credentials, private keys, or other secrets. Files like `billing/configuration.php` and `teletran1/config.php` are ignored by default.
- Use the SSH/rsync atomic deploy scripts in `deploy_tools/` to publish changes instead of client-side FTP auto-upload.

Next steps:
- Add a remote (e.g., GitHub/GitLab) only if you want versioned history off-site. Avoid pushing secrets.
