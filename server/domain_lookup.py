#!/usr/bin/env python3
"""
Simple domain lookup proxy.

Usage:
  - Install: pip install -r server/requirements.txt
  - Run: DOMAINR_API_KEY=your_key python3 server/domain_lookup.py

This service exposes a single endpoint:
  GET /lookup?domain=example.com

If a Domainr API key is provided in `DOMAINR_API_KEY` it will call the Domainr status API.
If no key is present it will return the deterministic simulation used in the static demo.

Return format (JSON): { domain: 'example.com', status: 'available'|'taken'|'unknown', raw: <provider response> }
"""
from flask import Flask, request, jsonify
import os
import requests
import hashlib

app = Flask(__name__)

DOMAINR_KEY = os.environ.get('DOMAINR_API_KEY')


def deterministic_status(domain: str):
    # Stable hash-based availability: ~1/3 taken, 2/3 available
    h = int(hashlib.sha1(domain.encode('utf-8')).hexdigest()[:8], 16)
    if h % 3 == 0:
        return 'taken'
    return 'available'


@app.route('/lookup')
def lookup():
    domain = request.args.get('domain')
    if not domain:
        return jsonify({'error': 'missing domain query param'}), 400

    # If Domainr API key available, call Domainr (https://domainr.com/docs/api)
    if DOMAINR_KEY:
        try:
            url = 'https://api.domainr.com/v2/status'
            params = {'domain': domain, 'client_id': DOMAINR_KEY}
            r = requests.get(url, params=params, timeout=8)
            r.raise_for_status()
            data = r.json()
            # Normalize: Domainr may return 'inactive'/'active'/'undelegated' etc.
            status = 'unknown'
            if 'status' in data and isinstance(data['status'], list) and len(data['status'])>0:
                # Domainr returns status codes like 'inactive', 'undelegated', 'inactive'
                s = data['status'][0]
                # try simple mapping
                if 'active' in s or 'ok' in s:
                    status = 'taken'
                elif 'inactive' in s or 'undelegated' in s or 'available' in s:
                    status = 'available'
                else:
                    status = 'unknown'
            return jsonify({'domain': domain, 'status': status, 'raw': data})
        except Exception as e:
            return jsonify({'domain': domain, 'status': 'unknown', 'error': str(e)}), 502

    # Fallback: deterministic simulation used in static site
    return jsonify({'domain': domain, 'status': deterministic_status(domain), 'raw': None})


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
