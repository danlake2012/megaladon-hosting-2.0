# Next.js Server Setup for WHMCS Integration

## Option 1: Install Node.js via cPanel/WHM (Recommended)

1. **Log into WHM** (if you have root access)
2. Go to: **Software > Manage Node.js**
3. Install Node.js 20 LTS
4. OR contact your hosting provider to enable Node.js

## Option 2: User-level Node.js Installation (No root needed)

Run these commands via SSH:

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell
source ~/.bashrc

# Install Node.js 20
nvm install 20
nvm use 20
node --version
```

## After Node.js is installed:

### Step 1: Get WHMCS API Credentials

1. Log into WHMCS admin: https://megaladonhosting.com/billing/admin
2. Go to: **System Settings > API Credentials**
3. Click **Create API Credential**
4. Fill in:
   - Label: `Next.js Website`
   - IP Restriction: Leave blank (or add your server IP)
   - Permissions: Check **GetProducts**
5. Copy the **Identifier** and **Secret**

### Step 2: Update Environment Variables

Edit `.env.local` on your local machine:

```bash
WHMCS_API_URL=https://megaladonhosting.com/billing/includes/api.php
WHMCS_API_IDENTIFIER=your_identifier_here
WHMCS_API_SECRET=your_secret_here
```

### Step 3: Deploy the Application

```bash
# From your local machine
./deploy_tools/deploy_server.sh
```

### Step 4: Start Next.js Server

SSH into your server and run:

```bash
cd /home/danlake2012/nextjs_app
PORT=3001 npm start
```

The server will start on port 3001 (avoiding conflicts with other services).

### Step 5: Configure Apache Reverse Proxy

Add to your Apache virtual host config (usually `/etc/httpd/conf.d/vhosts.conf` or via cPanel):

```apache
<VirtualHost *:443>
    ServerName megaladonhosting.com
    
    # Existing SSL configuration...
    
    # Reverse proxy to Next.js (exclude billing)
    ProxyPreserveHost On
    ProxyPass /billing !
    ProxyPass /api http://localhost:3001/api
    ProxyPassReverse /api http://localhost:3001/api
    
    ProxyPass / http://localhost:3001/
    ProxyPassReverse / http://localhost:3001/
</VirtualHost>
```

Then restart Apache:
```bash
sudo systemctl restart httpd
```

### Step 6: Keep Next.js Running (PM2)

Install PM2 to keep the app running:

```bash
npm install -g pm2
cd /home/danlake2012/nextjs_app
pm2 start npm --name "nextjs-site" -- start
pm2 save
pm2 startup  # Follow the instructions it gives you
```

## Testing

After setup, test the WHMCS API:
```bash
curl https://megaladonhosting.com/api/whmcs/plans
```

You should see your WHMCS products in JSON format!

## Troubleshooting

**Port already in use?**
```bash
# Find what's using port 3001
sudo lsof -i :3001
# Use a different port
PORT=3002 npm start
```

**Can't access /api?**
- Check Apache proxy modules: `sudo apachectl -M | grep proxy`
- Enable if needed: `sudo a2enmod proxy proxy_http`

**WHMCS API not working?**
- Verify API credentials in WHMCS admin
- Check `.env.local` is in `/home/danlake2012/nextjs_app/`
- Test API directly: `curl https://megaladonhosting.com/billing/includes/api.php`
