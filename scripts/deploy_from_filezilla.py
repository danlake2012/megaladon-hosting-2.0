#!/usr/bin/env python3
"""
deploy_from_filezilla.py

Small helper to upload files to a server using credentials saved in a FileZilla XML export.

Features:
- parses FileZilla3 XML to extract (host,user,port,password)
- supports SFTP uploads (Paramiko)
- uploads a single file or directory recursively

WARNING: FileZilla exports saved passwords in base64. Use carefully and keep this file private.

Usage examples:
  # Upload a local folder to the remote path (defaults to /public_html/megaladonhosting)
    ./scripts/deploy_from_filezilla.py --filezilla ~/.config/filezilla/sitemanager.xml --local assets/images/mega-hero.jpg --remote /public_html/megaladonhosting/assets/images/

  # Upload the whole site directory (dry-run first)
  ./scripts/deploy_from_filezilla.py --filezilla ./FileZilla.xml --local . --remote /public_html/megaladonhosting --dry-run

This script requires paramiko (pip install paramiko)

"""

import argparse
import base64
import os
import stat
import sys
import xml.etree.ElementTree as ET

try:
    import paramiko
except Exception:
    paramiko = None


def parse_filezilla_xml(path, tab_index=0):
    """Parse a FileZilla XML (FileZilla3) and return the first tab's host/user/port/password.

    Returns a dict with keys: host, user, port (int), password, protocol
    """
    tree = ET.parse(path)
    root = tree.getroot()

    # In FileZilla's XML export the config will be in Settings -> Tab data -> Tabs -> Tab
    # If there's a <Tab ... connected="1"> element we will use that - else the requested index.
    tab = None
    for tabs in root.findall('.//Tabs'):
        alltabs = tabs.findall('Tab')
        if not alltabs:
            continue
        # prefer the connected tab
        for t in alltabs:
            if t.get('connected') == '1':
                tab = t
                break
        if tab is None and len(alltabs) > tab_index:
            tab = alltabs[tab_index]
        if tab is not None:
            break

    if tab is None:
        # Some exports put tabs under Settings/Tab data/Tabs directly as Tab entries
        raise RuntimeError('No Tab/connection found in FileZilla XML')

    host = tab.findtext('Host') or tab.findtext('Host')
    port_text = tab.findtext('Port') or '22'
    user = tab.findtext('User') or tab.findtext('User')
    pass_el = tab.find('Pass')
    proto = tab.findtext('Protocol') or tab.findtext('Protocol')

    if pass_el is None:
        password = ''
    else:
        pass_text = pass_el.text or ''
        # FileZilla encodes saved passwords in base64 in the 'Pass' field
        try:
            password = base64.b64decode(pass_text).decode('utf-8')
        except Exception:
            # If it's not base64, just use raw text
            password = pass_text

    try:
        port = int(port_text or 22)
    except Exception:
        port = 22

    # Protocol 1 = SFTP in the sample file (FileZilla uses 0==FTP, 1==SFTP)
    protocol = int(proto) if proto and proto.isdigit() else 1

    return {
        'host': host,
        'user': user,
        'port': port,
        'password': password,
        'protocol': protocol,
    }


def ensure_remote_dir(sftp, remote_dir):
    # Create remote directory recursively. SFTP has no native mkdir -p
    parts = remote_dir.strip('/').split('/') if remote_dir.strip('/') else []
    cur = ''
    # If a skip flag is attached to the sftp object, don't attempt to mkdir
    skip_mkdir = getattr(sftp, '_skip_mkdir', False)
    for p in parts:
        cur = cur + '/' + p
        try:
            sftp.stat(cur)
        except IOError:
            # create unless user asked to skip mkdir
            if skip_mkdir:
                # skip attempting to create directories — caller will handle
                return
            try:
                sftp.mkdir(cur)
            except PermissionError:
                # cannot create directories — warn and stop attempting
                print('Warning: permission denied creating remote directory', cur)
                return


def upload_file(sftp, local_path, remote_path):
    # ensure remote path directory exists
    parent = os.path.dirname(remote_path)
    if parent:
        ensure_remote_dir(sftp, parent)
    sftp.put(local_path, remote_path)


def upload_recursive(sftp, local_root, remote_root, include_hidden=False):
    # If local_root is a file, upload single file
    if os.path.isfile(local_root):
        basename = os.path.basename(local_root)
        upload_file(sftp, local_root, os.path.join(remote_root, basename))
        return

    for dirpath, dirnames, filenames in os.walk(local_root):
        # optionally filter hidden
        if not include_hidden and os.path.basename(dirpath).startswith('.'):
            continue
        # compute relative path
        rel = os.path.relpath(dirpath, local_root)
        rel = '' if rel == '.' else rel
        remote_dir = os.path.join(remote_root, rel).replace('\\', '/')
        ensure_remote_dir(sftp, remote_dir)
        for f in filenames:
            if not include_hidden and f.startswith('.'):
                continue
            local_file = os.path.join(dirpath, f)
            remote_file = os.path.join(remote_dir, f).replace('\\', '/')
            print('Uploading', local_file, '→', remote_file)
            upload_file(sftp, local_file, remote_file)


def main():
    parser = argparse.ArgumentParser(description='Upload files using credentials from FileZilla XML (SFTP)')
    parser.add_argument('--filezilla', '-f', default=None, help='path to FileZilla XML (sitemanager or FileZilla.xml)')
    # Allow passing explicit SFTP credentials (useful for CI or direct deploy)
    parser.add_argument('--host', help='SFTP host (overrides filezilla parsing)')
    parser.add_argument('--user', help='SFTP username (overrides filezilla parsing)')
    parser.add_argument('--port', type=int, help='SFTP port (overrides filezilla parsing)')
    parser.add_argument('--password', help='SFTP password (overrides filezilla parsing)')
    parser.add_argument('--local', '-l', required=True, help='local path (file or dir) to upload')
    parser.add_argument('--remote', '-r', default='/public_html/megaladonhosting', help='remote path root to upload into')
    parser.add_argument('--tab', type=int, default=0, help='which Site/Tab index to use from the XML (default: first or connected tab)')
    parser.add_argument('--dry-run', action='store_true', help='show what would be uploaded but don’t do it')
    parser.add_argument('--include-hidden', action='store_true', help='include hidden files and dirs')
    parser.add_argument('--skip-mkdir', action='store_true', help='do not attempt to create remote directories (skip mkdir errors)')

    args = parser.parse_args()

    creds = None
    if args.host and args.user:
        # explicit credentials provided; use them directly
        creds = {
            'host': args.host,
            'user': args.user,
            'port': args.port or 22,
            'password': args.password or '',
            'protocol': 1,
        }
    elif args.filezilla:
        if not os.path.exists(args.filezilla):
            print('FileZilla XML not found at', args.filezilla)
            sys.exit(2)
        creds = parse_filezilla_xml(args.filezilla, tab_index=args.tab)
    else:
        print('No FileZilla XML path and no explicit host/user provided. Provide --filezilla or --host/--user.')
        sys.exit(2)

    print('Using host:', creds['host'], 'user:', creds['user'], 'port:', creds['port'], 'protocol:', creds['protocol'])

    if creds['protocol'] != 1:
        print('Warning: this script expects an SFTP entry (protocol==1). FileZilla protocol value:', creds['protocol'])

    if args.dry_run:
        print('\nDRY RUN: The following local path would be uploaded to remote root:', args.remote)
        if os.path.isfile(args.local):
            print('File:', args.local, '→', os.path.join(args.remote, os.path.basename(args.local)))
        else:
            for root, dirs, files in os.walk(args.local):
                rel = os.path.relpath(root, args.local)
                rel = '' if rel == '.' else rel
                for f in files:
                    if not args.include_hidden and f.startswith('.'):
                        continue
                    print(os.path.join(root, f), '→', os.path.join(args.remote, rel, f).replace('\\', '/'))
        print('\nNo files transferred (dry run).')
        return

    if paramiko is None:
        print('Error: the script requires the paramiko package. Install it with `pip install paramiko`')
        sys.exit(1)

    # Connect via SFTP
    try:
        client = paramiko.SSHClient()
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        client.connect(creds['host'], port=creds['port'], username=creds['user'], password=creds['password'])
        sftp = client.open_sftp()
        # allow callers to set skip mkdir behavior via args
        sftp._skip_mkdir = args.skip_mkdir
    except Exception as e:
        print('SFTP connection failed:', str(e))
        sys.exit(1)

    try:
        upload_recursive(sftp, args.local, args.remote, include_hidden=args.include_hidden)
    finally:
        try:
            sftp.close()
        except Exception:
            pass
        try:
            client.close()
        except Exception:
            pass


if __name__ == '__main__':
    main()
