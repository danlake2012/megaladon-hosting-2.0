# Megaladon Hosting - WHMCS Quick Reference

## 📁 File Locations

### WHMCS Theme Files (Upload to Server)
```
Source: /home/dan/projects/megaladonhosting/whmcs-theme/megaladon/
Remote: /public_html/billing/templates/megaladon/

Structure:
├── css/
│   └── custom.css          # All dark theme styling
├── images/
│   ├── shark.jpg          # Logo (36px height in header)
│   ├── favicon-32.png     # 32x32 favicon
│   ├── favicon-64.png     # 64x64 favicon  
│   └── favicon.ico        # Standard favicon
├── header.tpl             # Custom header with nav
└── footer.tpl             # Custom footer with links
```

## 🎨 Theme Colors

```css
Background:      #020d18  (body)
Navigation:      #0b1621  (navbar)
Cards/Panels:    #0e1a26  (cards)
Primary Accent:  #0aa8e8  (buttons, links)
Hover Accent:    #087db4  (button hover)
Text:            #e6eef6  (primary)
Muted Text:      #9ca3af  (secondary)
Border:          rgba(255,255,255,0.06)
```

## 📦 WHM Package Names (Under danlake2012 Reseller)

| Package        | WHM Name              | Disk  | Addon Domains | Databases | Email   |
|----------------|-----------------------|-------|---------------|-----------|---------|
| 🐾 Pup         | `pup_danlake2012`     | 5 GB  | 0             | 2         | 5       |
| 🦈 Reef Shark  | `reefshark_danlake2012` | 20 GB | 5           | 5         | 20      |
| 🔨 Hammerhead  | `hammerhead_danlake2012` | 50 GB | 10          | 10        | 50      |
| 🐯 TigerShark  | `tigershark_danlake2012` | 75 GB | 20          | 20        | 100     |
| 🐋 Megaladon   | `megaladon_danlake2012` | 100 GB | Unlimited   | Unlimited | Unlimited |

## 💰 Pricing (Monthly)

| Product      | Price  | PID (Update After Creating) |
|--------------|--------|----------------------------|
| Pup          | $3.99  | TBD - Update config.js     |
| Reef Shark   | $7.99  | TBD - Update config.js     |
| Hammerhead   | $12.99 | TBD - Update config.js     |
| TigerShark   | $16.99 | TBD - Update config.js     |
| Megaladon    | $19.99 | TBD - Update config.js     |

## 🔗 WHMCS URLs

| Function         | URL Pattern                                    |
|------------------|------------------------------------------------|
| Cart Add         | `/cart.php?a=add&pid={PID}`                   |
| Domain Search    | `/domainchecker.php?search={DOMAIN}`          |
| Client Area      | `/clientarea.php`                             |
| Login            | `/clientarea.php`                             |
| Register         | `/register.php`                               |
| Submit Ticket    | `/submitticket.php`                           |
| Knowledgebase    | `/index.php?rp=/knowledgebase`                |

## ⚙️ Critical Module Settings for Each Product

```
Module: cPanel
Server: Main Server (or your configured server)
Package Name: [EXACT WHM PACKAGE NAME]
  - Example: pup_danlake2012

Welcome Email: Hosting Account Welcome Email

Automatically setup the product:
  ✅ when you manually accept a pending order
  ✅ as soon as an order is placed

Automatically terminate the account:
  ✅ When cancelled
  ✅ When payment is overdue

Username: Domain prefix
Password: Auto generate
```

## 🚀 Deployment Checklist

### Phase 1: Theme Upload
- [ ] Upload `megaladon` folder to `/public_html/billing/templates/`
- [ ] Activate theme in WHMCS Admin (Setup → General Settings → Template)
- [ ] Clear template cache (Utilities → System → Template Cache)
- [ ] Test by visiting billing homepage logged out

### Phase 2: WHM Packages
- [ ] Login to WHM as reseller `danlake2012`
- [ ] Create `pup_danlake2012` package
- [ ] Create `reefshark_danlake2012` package
- [ ] Create `hammerhead_danlake2012` package
- [ ] Create `tigershark_danlake2012` package
- [ ] Create `megaladon_danlake2012` package
- [ ] Verify all packages in WHM → Packages → List Packages

### Phase 3: WHMCS Products
- [ ] Create "Web Hosting" product group
- [ ] Configure cPanel server (System Settings → Servers)
- [ ] Test server connection
- [ ] Create Pup product (link to `pup_danlake2012`)
- [ ] Create Reef Shark product (link to `reefshark_danlake2012`)
- [ ] Create Hammerhead product (link to `hammerhead_danlake2012`)
- [ ] Create TigerShark product (link to `tigershark_danlake2012`)
- [ ] Create Megaladon product (link to `megaladon_danlake2012`)
- [ ] Note all Product IDs (PIDs)

### Phase 4: Main Site Integration
- [ ] Update `assets/js/config.js` with real PIDs
- [ ] Update pricing page "Order Now" buttons with `data-whmcs-order="X"`
- [ ] Deploy updated files to main site (FileZilla or deploy.sh)
- [ ] Test order flow from main site to WHMCS

### Phase 5: Testing
- [ ] Test order: Click "Order Now" on pricing page
- [ ] Verify WHMCS cart shows dark theme
- [ ] Complete test order (use test payment or mark as paid manually)
- [ ] Check WHMCS Admin for pending/active order
- [ ] Check WHM for auto-created cPanel account
- [ ] Login to client area, verify theme applies to all pages
- [ ] Test domain search from main site

## 🔧 Post-Launch Configuration

### Payment Gateways
```
WHMCS Admin → Setup → Payments → Payment Gateways
```
Enable:
- Stripe
- PayPal
- Other payment methods

### Domain Pricing
```
WHMCS Admin → Setup → Products/Services → Domain Pricing
```
Import pricing from registrar or set custom pricing.

### Email Configuration
```
WHMCS Admin → Setup → General Settings → Email
```
Configure SMTP or use PHP mail.

### SSL for Billing Subdomain
Install SSL certificate for `billing.megaladonhosting.com` via cPanel or Let's Encrypt.

### Automated Backups
Set up daily backups of:
- WHMCS database
- WHMCS files
- WHM/cPanel accounts

## 📞 Support Resources

- WHMCS Docs: https://docs.whmcs.com
- cPanel Docs: https://docs.cpanel.net
- Main Site Repo: `/home/dan/projects/megaladonhosting/`
- Theme Files: `/home/dan/projects/megaladonhosting/whmcs-theme/megaladon/`

---

**Last Updated:** December 1, 2025
