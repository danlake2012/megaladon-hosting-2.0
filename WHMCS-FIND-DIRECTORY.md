# Finding Your WHMCS Installation Directory

## Common WHMCS Locations

When you connect via FileZilla, WHMCS is typically in one of these locations:

### Option 1: Root Installation
```
/public_html/
```
Files: `configuration.php`, `clientarea.php`, `cart.php`

### Option 2: Subdomain (Most Likely for You)
```
/public_html/billing/
```
Or:
```
/billing/
```
Or:
```
/home/danlake2012/public_html/billing/
```

### Option 3: Subdomain with Full Path
```
/home/danlake2012/billing.megaladonhosting.com/
```
Or:
```
/home/danlake2012/billing.megaladonhosting.com/
```

### Option 4: Custom Folder Name
```
/public_html/whmcs/
```

---

## How to Find It

### Method 1: FileZilla Quick Search

1. **Connect to your server** (megaladonhosting.com, port 21, FTP)
2. **Navigate to your home directory** (should show automatically)
3. **Look for these folders:**
   - `public_html/` (main website root)
   - `billing.megaladonhosting.com/` (subdomain root)
   - `billing.megaladonhosting.com/` (subdomain root)

4. **Inside each folder, look for:**
   - `clientarea.php`
   - `cart.php`
   - `configuration.php`
   - `templates/` folder
   
   ✅ If you find these files, that's your WHMCS installation!

### Method 2: Check Your URLs

Based on your config, WHMCS is at:
```
https://billing.megaladonhosting.com
```

This means the folder is likely:
```
/home/danlake2012/billing.megaladonhosting.com/
```

Or if it's a subdomain pointing to a folder:
```
/public_html/billing/
```

---

## Step-by-Step: Upload Theme with FileZilla

### 1. Connect to Server

```
Host: megaladonhosting.com
Protocol: FTP
Port: 21
Username: danlake2012
Password: [your password]
```

Click **Quickconnect**

### 2. Navigate to WHMCS Root

Once connected, you'll see two panes:
- **Left:** Your local computer
- **Right:** Remote server

On the **right (server) side:**

1. Look for one of these folders (try in order):
   ```
   billing.megaladonhosting.com/
   billing.megaladonhosting.com/
   public_html/billing/
   public_html/
   ```

2. **Double-click to open** the folder

3. **Verify it's WHMCS** - you should see files like:
   ```
   clientarea.php
   cart.php
   configuration.php
   templates/
   modules/
   includes/
   ```

### 3. Navigate to Templates Folder

On the **right (server) side:**

1. Find and open the `templates/` folder
2. You should see existing WHMCS themes like:
   ```
   twenty-one/
   six/
   portal/
   ```

### 4. Upload Megaladon Theme

On the **left (local) side:**

1. Navigate to:
   ```
   /home/dan/projects/megaladonhosting/whmcs-theme/
   ```

2. You should see the `megaladon/` folder

**Drag the entire `megaladon` folder** from left to right into the `templates/` folder on the server.

### 5. Verify Upload

On the **right (server) side**, inside `templates/`, you should now see:

```
templates/
├── twenty-one/
├── six/
├── megaladon/          ← Your new theme!
│   ├── css/
│   │   └── custom.css
│   ├── images/
│   │   └── shark.jpg
│   ├── header.tpl
│   └── footer.tpl
```

---

## If You Still Can't Find WHMCS

### Check via Terminal/SSH

If you have SSH access, you can search for it:

**Option A: Search for WHMCS configuration file**
```bash
find /home/danlake2012 -name "configuration.php" -type f 2>/dev/null
```

**Option B: Search for templates folder**
```bash
find /home/danlake2012 -name "templates" -type d | grep -v node_modules 2>/dev/null
```

**Option C: Check subdomain document root in cPanel**

1. Login to cPanel
2. Go to: **Domains** → **Subdomains**
3. Find `billing.megaladonhosting.com`
4. Look at the **Document Root** column - that's where WHMCS is!

---

## Common Issues

### "I don't see billing/ folder"

**Solution:** WHMCS might be at the root level or in a subdomain folder.

Check these locations in FileZilla:
```
/home/danlake2012/public_html/
/home/danlake2012/billing.megaladonhosting.com/
/home/danlake2012/billing.megaladonhosting.com/
```

### "I see public_html/ but nothing else"

**Solution:** Double-click `public_html/` to open it.

You might see:
```
public_html/
├── megaladonhosting/    (your main site)
├── billing/             (WHMCS - look here!)
├── index.html
└── cgi-bin/
```

### "Templates folder is empty or doesn't exist"

**Solution:** WHMCS might not be installed yet, or you're in the wrong folder.

1. Verify WHMCS is working by visiting: `https://billing.megaladonhosting.com`
2. If it shows a WHMCS page, WHMCS IS installed
3. Use the terminal search commands above to find it

---

## Quick Test: Is WHMCS Installed?

**Visit in browser:**
```
https://billing.megaladonhosting.com
```

**If you see:**
- ✅ WHMCS login/homepage → WHMCS is installed, just need to find the folder
- ❌ 404 error → WHMCS is NOT installed yet
- ❌ DNS error → Subdomain not set up yet

---

## After You Find It

Once you locate the WHMCS `templates/` folder:

1. **Upload** `megaladon/` folder into `templates/`
2. **Activate** the theme:
   - Login to WHMCS admin: `https://billing.megaladonhosting.com/admin`
   - Setup → General Settings → General
   - Template dropdown → Select "megaladon"
   - Save Changes
3. **Test** by visiting billing homepage (logged out)

---

## Need Help?

**Try this first:**

1. Open FileZilla
2. Connect to server (SFTP, port 22)
3. Once connected, take a screenshot of the **right pane** (server folders)
4. Share the screenshot - I can help identify where WHMCS is

**Or run this command in terminal:**

```bash
# If you have SSH access
ssh danlake2012@megaladonhosting.com "find ~ -name clientarea.php 2>/dev/null"
```

This will show the exact path to WHMCS.
