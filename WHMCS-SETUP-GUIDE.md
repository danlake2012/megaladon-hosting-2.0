# WHMCS Theme & WHM Integration Setup Guide
## Megaladon Hosting - Complete Configuration Instructions

---

## 📦 PART 1: Upload & Activate WHMCS Theme

### Step 1: Upload Theme Files via FTP/SFTP

1. **Connect to your billing server** using FileZilla or another FTP client:
   - Host: `billing.megaladonhosting.com` (or your WHMCS server IP)
   - Protocol: SFTP
   - Port: 22
   - Username: Your cPanel/SSH username
   - Password: Your cPanel/SSH password

2. **Navigate to the WHMCS templates folder:**
   ```
   /public_html/billing/templates/
   ```
   (Or wherever your WHMCS is installed - could be `/public_html/whmcs/templates/`)

3. **Upload the entire `megaladon` folder** from:
   ```
   Local: /home/dan/projects/megaladonhosting/whmcs-theme/megaladon/
   Remote: /public_html/billing/templates/megaladon/
   ```

4. **Verify the uploaded structure looks like this:**
   ```
   /public_html/billing/templates/megaladon/
   ├── css/
   │   └── custom.css
   ├── images/
   │   ├── shark.jpg
   │   ├── favicon-32.png
   │   ├── favicon-64.png
   │   └── favicon.ico
   ├── header.tpl
   └── footer.tpl
   ```

### Step 2: Activate the Theme in WHMCS Admin

1. **Login to WHMCS admin panel:**
   ```
   https://billing.megaladonhosting.com/admin
   ```

2. **Navigate to:**
   ```
   Setup → General Settings → General
   ```

3. **Scroll to "Template" dropdown** and select:
   ```
   megaladon
   ```

4. **Click "Save Changes"** at the bottom

5. **Visit your WHMCS homepage** (log out first to see the public view):
   ```
   https://billing.megaladonhosting.com
   ```
   
   ✅ You should now see the dark Megaladon theme!

---

## 🖥️ PART 2: Create WHM Hosting Packages

These packages must be created **under the reseller account `danlake2012`**.

### Login to WHM

```
https://your-server-hostname.com:2087
```
Or if you're on shared hosting with reseller access:
```
https://your-server-hostname.com/whm
```

### Create Package 1: 🐾 PUP (Starter)

1. **Navigate to:** Packages → Add a Package
2. **Package Name:** `pup_danlake2012`
3. **Settings:**
   - Quota (Disk Space): `5000` MB (5 GB)
   - Bandwidth: `unlimited`
   - Max Addon Domains: `0`
   - Max Parked Domains: `1`
   - Max Subdomains: `5`
   - Max SQL Databases: `2`
   - Max Email Accounts: `5`
   - Max FTP Accounts: `5`
   - Max Mailing Lists: `1`
   - CGI Access: ✅ Checked
   - Shell Access: ❌ Unchecked (security)
   - cPanel Theme: `jupiter`
   - Feature List: `default`
   - AutoSSL: ✅ Enabled
   - Dedicated IP: ❌ Not required

4. **Click "Add"**

### Create Package 2: 🦈 REEF SHARK (Business)

1. **Navigate to:** Packages → Add a Package
2. **Package Name:** `reefshark_danlake2012`
3. **Settings:**
   - Quota (Disk Space): `20000` MB (20 GB)
   - Bandwidth: `unlimited`
   - Max Addon Domains: `5`
   - Max Parked Domains: `5`
   - Max Subdomains: `20`
   - Max SQL Databases: `5`
   - Max Email Accounts: `20`
   - Max FTP Accounts: `10`
   - Max Mailing Lists: `3`
   - CGI Access: ✅ Checked
   - Shell Access: ❌ Unchecked
   - cPanel Theme: `jupiter`
   - Feature List: `default`
   - AutoSSL: ✅ Enabled

4. **Click "Add"**

### Create Package 3: 🔨 HAMMERHEAD (Pro)

1. **Navigate to:** Packages → Add a Package
2. **Package Name:** `hammerhead_danlake2012`
3. **Settings:**
   - Quota (Disk Space): `50000` MB (50 GB)
   - Bandwidth: `unlimited`
   - Max Addon Domains: `10`
   - Max Parked Domains: `10`
   - Max Subdomains: `50`
   - Max SQL Databases: `10`
   - Max Email Accounts: `50`
   - Max FTP Accounts: `20`
   - Max Mailing Lists: `5`
   - CGI Access: ✅ Checked
   - Shell Access: ❌ Unchecked
   - cPanel Theme: `jupiter`
   - Feature List: `default`
   - AutoSSL: ✅ Enabled

4. **Click "Add"**

### Create Package 4: 🐯 TIGERSHARK (Power)

1. **Navigate to:** Packages → Add a Package
2. **Package Name:** `tigershark_danlake2012`
3. **Settings:**
   - Quota (Disk Space): `75000` MB (75 GB)
   - Bandwidth: `unlimited`
   - Max Addon Domains: `20`
   - Max Parked Domains: `20`
   - Max Subdomains: `100`
   - Max SQL Databases: `20`
   - Max Email Accounts: `100`
   - Max FTP Accounts: `30`
   - Max Mailing Lists: `10`
   - CGI Access: ✅ Checked
   - Shell Access: ❌ Unchecked (or ✅ if desired)
   - cPanel Theme: `jupiter`
   - Feature List: `default`
   - AutoSSL: ✅ Enabled
   - **Resource Limits (if available):**
     - Max CPU: `150%`
     - Max Physical Memory: `2 GB`
     - Max I/O: `2048 KB/s`

4. **Click "Add"**

### Create Package 5: 🐋 MEGALADON (Enterprise)

1. **Navigate to:** Packages → Add a Package
2. **Package Name:** `megaladon_danlake2012`
3. **Settings:**
   - Quota (Disk Space): `100000` MB (100 GB)
   - Bandwidth: `unlimited`
   - Max Addon Domains: `unlimited`
   - Max Parked Domains: `unlimited`
   - Max Subdomains: `unlimited`
   - Max SQL Databases: `unlimited`
   - Max Email Accounts: `unlimited`
   - Max FTP Accounts: `unlimited`
   - Max Mailing Lists: `unlimited`
   - CGI Access: ✅ Checked
   - Shell Access: ✅ Checked (enterprise tier)
   - cPanel Theme: `jupiter`
   - Feature List: `default`
   - AutoSSL: ✅ Enabled
   - **Resource Limits (if available):**
     - Max CPU: `200%`
     - Max Physical Memory: `4 GB`
     - Max I/O: `4096 KB/s`

4. **Click "Add"**

---

## 📊 PART 3: Create WHMCS Products

### Step 1: Create Product Group

1. **Login to WHMCS Admin:**
   ```
   https://billing.megaladonhosting.com/admin
   ```

2. **Navigate to:**
   ```
   System Settings → Products/Services → Products/Services
   ```

3. **Click "Create a New Group"**
   - Group Name: `Web Hosting`
   - Description: `Shark-fast shared hosting plans`
   - Click "Save Changes"

### Step 2: Configure cPanel Server in WHMCS

Before creating products, ensure your WHM/cPanel server is configured in WHMCS:

1. **Navigate to:**
   ```
   System Settings → Servers
   ```

2. **Add Server** (if not already configured):
   - Name: `Main Server` (or your server name)
   - Hostname: Your WHM server hostname (e.g., `server1.megaladonhosting.com`)
   - IP Address: Your server IP
   - Type: `cPanel`
   - Username: Your WHM username (e.g., `root` or reseller username)
   - Password/Hash: Your WHM root password or access hash
   - Port: `2087` (or `2083` for reseller)
   - Secure: ✅ Check "Use SSL Connection"
   - Click "Test Connection" to verify
   - Click "Save Changes"

### Step 3: Create Product 1 - Pup

1. **Navigate to:**
   ```
   System Settings → Products/Services → Products/Services
   ```

2. **Click "Create a New Product"**

3. **Product Details:**
   - Product Type: `Hosting Account`
   - Product Group: `Web Hosting`
   - Product Name: `Pup`
   - Description (Welcome Email): 
     ```
     Welcome to Megaladon Hosting! Your Pup plan is ready.
     ```

4. **Module Settings Tab:**
   - Module: `cPanel`
   - Server Group: Leave as `Default` or select your server
   - Package Name: **`pup_danlake2012`** ← MUST match WHM package exactly
   - Welcome Email: `Hosting Account Welcome Email`
   - Automatically setup: ✅ `when you manually accept a pending order` AND ✅ `as soon as an order is placed`
   - Automatically terminate: ✅ `When cancelled` AND ✅ `When payment is overdue`
   - Username: `Domain prefix` (recommended)
   - Password: `Auto generate`

5. **Pricing Tab:**
   - Payment Type: `Recurring`
   - Currency: `USD`
   - Monthly: `3.99`
   - Quarterly: `10.99` (saves ~8%)
   - Semi-Annually: `20.99` (saves ~12%)
   - Annually: `39.99` (saves ~17%)
   - Enable all billing cycles you want to offer

6. **Click "Save Changes"**
   - **Note the Product ID (PID)** — you'll see it in the URL or product list

### Step 4: Create Product 2 - Reef Shark

1. **Repeat the process:**
   - Product Name: `Reef Shark`
   - Package Name: **`reefshark_danlake2012`**
   - Pricing:
     - Monthly: `7.99`
     - Quarterly: `22.99`
     - Semi-Annually: `44.99`
     - Annually: `84.99`

### Step 5: Create Product 3 - Hammerhead

1. **Repeat the process:**
   - Product Name: `Hammerhead`
   - Package Name: **`hammerhead_danlake2012`**
   - Pricing:
     - Monthly: `12.99`
     - Quarterly: `37.99`
     - Semi-Annually: `72.99`
     - Annually: `139.99`

### Step 6: Create Product 4 - TigerShark

1. **Repeat the process:**
   - Product Name: `TigerShark`
   - Package Name: **`tigershark_danlake2012`**
   - Pricing:
     - Monthly: `16.99`
     - Quarterly: `49.99`
     - Semi-Annually: `94.99`
     - Annually: `179.99`

### Step 7: Create Product 5 - Megaladon

1. **Repeat the process:**
   - Product Name: `Megaladon`
   - Package Name: **`megaladon_danlake2012`**
   - Pricing:
     - Monthly: `19.99`
     - Quarterly: `57.99`
     - Semi-Annually: `109.99`
     - Annually: `199.99`

---

## 🔗 PART 4: Update Main Site with PIDs

After creating products, WHMCS will assign **Product IDs (PIDs)** to each one.

### Find Your PIDs

1. **In WHMCS Admin, go to:**
   ```
   System Settings → Products/Services → Products/Services
   ```

2. **You'll see a list like:**
   ```
   ID | Name        | Group        | Type
   1  | Pup         | Web Hosting  | Hosting
   2  | Reef Shark  | Web Hosting  | Hosting
   3  | Hammerhead  | Web Hosting  | Hosting
   4  | TigerShark  | Web Hosting  | Hosting
   5  | Megaladon   | Web Hosting  | Hosting
   ```

3. **Note down the IDs**

### Update Main Site Config

Edit `/home/dan/projects/megaladonhosting/assets/js/config.js`:

```javascript
window.MEGALADON = {
  whmcsBase: 'https://billing.megaladonhosting.com',
  domainProvider: 'whmcs',
  domainSearchTemplate: '/domainchecker.php?search={query}',
  
  // UPDATE THESE PIDs with the real ones from WHMCS:
  pids: {
    pup: 1,           // ← Replace with actual PID
    reefshark: 2,     // ← Replace with actual PID
    hammerhead: 3,    // ← Replace with actual PID
    tigershark: 4,    // ← Replace with actual PID
    megaladon: 5      // ← Replace with actual PID
  },
  
  productCatalog: {
    '1': { title: 'Pup - Starter Hosting', price: 3.99 },
    '2': { title: 'Reef Shark - Business Hosting', price: 7.99 },
    '3': { title: 'Hammerhead - Pro Hosting', price: 12.99 },
    '4': { title: 'TigerShark - Power Hosting', price: 16.99 },
    '5': { title: 'Megaladon - Enterprise Hosting', price: 19.99 }
  }
};
```

### Update Pricing Page Links

Edit `/home/dan/projects/megaladonhosting/pricing/index.html`:

Find the "Order Now" buttons and update them with the correct PIDs:

```html
<!-- Pup -->
<a class="btn btn-primary" data-whmcs-order="1">Order Now</a>

<!-- Reef Shark -->
<a class="btn btn-primary" data-whmcs-order="2">Order Now</a>

<!-- Hammerhead -->
<a class="btn btn-primary" data-whmcs-order="3">Order Now</a>

<!-- TigerShark -->
<a class="btn btn-primary" data-whmcs-order="4">Order Now</a>

<!-- Megaladon -->
<a class="btn btn-primary" data-whmcs-order="5">Order Now</a>
```

The `assets/js/main.js` file already handles these `data-whmcs-order` attributes and redirects to WHMCS cart.

---

## ✅ PART 5: Test the Complete Flow

### Test 1: Order a Hosting Plan

1. **Visit your pricing page:**
   ```
   https://megaladonhosting.com/pricing
   ```

2. **Click "Order Now" on any plan**
   - Should redirect to: `https://billing.megaladonhosting.com/cart.php?a=add&pid=X`
   - Should show the dark Megaladon theme
   - Should display the correct product

3. **Complete checkout as a test customer:**
   - Fill in billing details
   - Use a test payment method
   - Place order

4. **Check WHMCS Admin:**
   ```
   Orders → Pending Orders
   ```
   - Order should appear
   - If payment succeeded, it should be "Active"

5. **Check WHM:**
   ```
   List Accounts
   ```
   - cPanel account should be auto-created with the correct package

### Test 2: Domain Search

1. **Visit domains page:**
   ```
   https://megaladonhosting.com/domains
   ```

2. **Search for a domain**
   - Enter a domain name and click "Search"
   - Should show deterministic availability results
   - Click "Register" on an available domain
   - Should redirect to styled `/cart.php` first (preserving theme)
   - Then to WHMCS for final checkout

### Test 3: Login & Client Area

1. **Click "Login" in header**
   - Should go to WHMCS client area
   - Should display dark theme
   - Should show shark logo and navigation

2. **Verify all pages use the theme:**
   - Dashboard
   - Services
   - Domains
   - Invoices
   - Support tickets

---

## 🚀 PART 6: Deploy Updated Main Site

After updating PIDs in `config.js`, deploy the changes:

### Option 1: FileZilla (Manual)

1. Open FileZilla
2. Connect to `megaladonhosting.com` (FTP, port 21)
3. Navigate to `/public_html/megaladonhosting/assets/js/`
4. Upload the updated `config.js` file

### Option 2: Deploy Script

```bash
cd /home/dan/projects/megaladonhosting
./deploy.sh
```

(Note: If lftp times out, use FileZilla as backup)

---

## 📝 Additional Notes

### PHP Version Support

All packages include **all PHP versions** available on your server. Clients can switch PHP versions via cPanel → MultiPHP Manager.

### AutoSSL

All packages have AutoSSL enabled, so client sites will automatically get free SSL certificates.

### Resource Limits

If your server supports CloudLinux or LVE resource limits, adjust CPU/memory/I/O limits in WHM:
```
WHM → Resource Usage → Manage Resources
```

### DNS & Nameservers

Ensure your WHMCS has correct nameservers configured:
```
WHMCS Admin → Setup → General Settings → General → Domain Settings
```

Example:
- Primary Nameserver: `ns1.megaladonhosting.com`
- Secondary Nameserver: `ns2.megaladonhosting.com`

### Email Templates

Customize WHMCS email templates to match your branding:
```
WHMCS Admin → System Settings → Email Templates
```

---

## 🐛 Troubleshooting

### Accounts Not Creating Automatically

1. Check server connection:
   ```
   WHMCS Admin → System Settings → Servers → Test Connection
   ```

2. Verify package names match exactly (case-sensitive):
   - WHM: `pup_danlake2012`
   - WHMCS: `pup_danlake2012`

3. Check WHMCS error logs:
   ```
   Utilities → Logs → Module Debug Log
   ```

### Theme Not Applying

1. Clear WHMCS template cache:
   ```
   Utilities → System → Template Cache → Clear Cache
   ```

2. Verify file permissions (should be `644` for files, `755` for folders):
   ```bash
   chmod -R 755 /public_html/billing/templates/megaladon/
   chmod 644 /public_html/billing/templates/megaladon/*.tpl
   chmod 644 /public_html/billing/templates/megaladon/css/*.css
   ```

### Orders Going to Wrong Package

- Double-check the "Package Name" field in WHMCS product module settings
- It must **exactly match** the WHM package name (case-sensitive)

---

## 🎉 Success!

Your Megaladon Hosting site is now fully integrated with WHMCS!

**Next Steps:**
1. Add domain pricing in WHMCS (Setup → Products/Services → Domain Pricing)
2. Configure payment gateways (Setup → Payments → Payment Gateways)
3. Set up automated backups for WHMCS database
4. Configure email settings for transactional emails
5. Add SSL certificate to billing subdomain

Need help? Create a support ticket or check the WHMCS docs: https://docs.whmcs.com
