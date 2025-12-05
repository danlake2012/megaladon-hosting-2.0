Git hooks — automatic deploy with FileZilla credentials
----------------------------------------------------

This repository contains a small SFTP deploy helper which can use your FileZilla XML export to upload files automatically to the server.

To run a deploy automatically after commits (work like GitHub Actions but locally):

1. Adjust defaults if needed
   - Edit or set the environment variables where you keep your FileZilla export and prefer remote target:
     - FILEZILLA_XML (default: $HOME/FileZilla.xml)
     - REMOTE_PATH (default in the helper: /public_html/megaladonhosting)

2. Install dependencies (one-time):

    python3 -m pip install -r requirements.txt

3. Install the hook

    # In your local repo (where .git/ lives)
    cp scripts/git-deploy-hook.sh .git/hooks/post-commit
    chmod +x .git/hooks/post-commit

4. Try a dry-run first

    # By default the hook uses DRY=1. You can test without uploads by running manually:
    scripts/git-deploy-hook.sh

5. Enable real uploads

    # When you want to actually deploy after each commit, set DRY=0 in your environment
    export DRY=0
    # Or edit .git/hooks/post-commit and change DRY variable inside the script.

Notes and safety
- The script reads saved credentials from a FileZilla XML export. FileZilla saves passwords base64-encoded in the export.
- DO NOT commit FileZilla XML files with live passwords into public repositories. Keep them on your workstation only.
- If your remote path differs (e.g., site root is /public_html/), change REMOTE_PATH to that path.
