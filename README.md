# Megaladon Hosting — Static Site Scaffold

This repository contains a ready-to-use static website scaffold for "Megaladon Hosting" — a dark, conversion-focused hosting website themed around "Shark-Fast Hosting for Serious Websites".

## 📦 What's Included

- Desktop / mobile responsive HTML templates for: Home (/), Pricing (/pricing), Domains (/domains), About (/about), Support (/support), Login (/login)
- Brand colors, fonts, and UI components
- Domain search widget wired to a WHMCS-style domain checker URL
- All order buttons wired to WHMCS cart URL patterns (configurable pids)
- **Complete WHMCS dark theme** matching the main site design
- **5 shark-themed hosting packages** (Pup, Reef Shark, Hammerhead, TigerShark, Megaladon)
- **Full setup guides** for WHMCS integration and WHM package configuration

## 🔵 WHMCS Integration

**New!** This project now includes a complete WHMCS theme and setup guides:

📚 **Setup Guides:**
- **[WHMCS-DEPLOYMENT.md](WHMCS-DEPLOYMENT.md)** - Start here! Complete overview and quick setup
- **[WHMCS-SETUP-GUIDE.md](WHMCS-SETUP-GUIDE.md)** - Detailed step-by-step instructions
- **[WHMCS-QUICK-REFERENCE.md](WHMCS-QUICK-REFERENCE.md)** - Quick reference cheat sheet

🎨 **WHMCS Theme:** `whmcs-theme/megaladon/`
- Dark theme matching main site (#020d18 bg, #0aa8e8 accents)
- Custom header/footer with shark branding
- Styled navbar, cards, tables, buttons, forms, modals
- Mobile responsive
- Ready to upload and activate

📦 **Hosting Packages:**
- 🐾 **Pup** - $3.99/mo - 5 GB SSD, starter plan
- 🦈 **Reef Shark** - $7.99/mo - 20 GB SSD, business plan
- 🔨 **Hammerhead** - $12.99/mo - 50 GB SSD, pro plan
- 🐯 **TigerShark** - $16.99/mo - 75 GB SSD, power plan
- 🐋 **Megaladon** - $19.99/mo - 100 GB SSD, enterprise plan

All packages include: AutoSSL, cPanel, unlimited bandwidth, all PHP versions

## Quick Setup

### 1. Main Site Setup

1) Upload / copy the site files to your web server (e.g., to the web root or a folder such as /var/www/megaladon).

2) Configure your WHMCS base URL and product IDs

	- Confirm `assets/js/config.js` has `whmcsBase` set to your billing domain. This project is prefilled with:

```javascript
whmcsBase: 'https://billing.megaladonhosting.com'
```
  Edit `assets/js/config.js` if your WHMCS is hosted elsewhere (no trailing slash).

```javascript
window.MEGALADON = {
	whmcsBase: 'https://billing.megaladonhosting.com',
	pids: { 
		pup: 1,
		reefshark: 2,
		hammerhead: 3,
		tigershark: 4,
		megaladon: 5
	}
}

// Optionally provide a productCatalog to display friendly names/prices in demo cart pages
productCatalog: {
  '1': { title: 'Pup - Starter Hosting', price: 3.99 },
  '2': { title: 'Reef Shark - Business Hosting', price: 7.99 },
  '3': { title: 'Hammerhead - Pro Hosting', price: 12.99 },
  '4': { title: 'TigerShark - Power Hosting', price: 16.99 },
  '5': { title: 'Megaladon - Enterprise Hosting', price: 19.99 }
}
```

	- Buttons on the site use `data-whmcs-order` attributes. The script will convert those to cart URLs like `cart.php?a=add&pid=1` automatically. Update product ids above to match your WHMCS products.

### 2. WHMCS Integration Setup

For complete WHMCS theme installation and WHM package configuration:

👉 **[Start with WHMCS-DEPLOYMENT.md](WHMCS-DEPLOYMENT.md)** for the complete overview

Or jump to specific guides:
- **[WHMCS-SETUP-GUIDE.md](WHMCS-SETUP-GUIDE.md)** - Complete step-by-step setup
- **[WHMCS-QUICK-REFERENCE.md](WHMCS-QUICK-REFERENCE.md)** - Quick reference & checklists

**Quick summary:**
1. Upload `whmcs-theme/megaladon/` to `/public_html/billing/templates/megaladon/`
2. Activate theme in WHMCS Admin (Setup → General Settings)
3. Create 5 WHM packages under `danlake2012` reseller
4. Create matching WHMCS products and link to WHM packages
5. Update main site `config.js` with real PIDs
6. Test order flow

### 3. Domain Search & Registration

	- The front-end domain search is configurable. By default it uses WHMCS' domain checker path `/domainchecker.php?search={query}` and will redirect your users to your WHMCS domain checker with the query string.
	- You can change the provider and template by editing `assets/js/config.js`.
	  - domainProvider: 'whmcs' | 'hostgator' | 'custom' (default: 'whmcs')
	  - domainSearchTemplate: a URL template using {query} placeholder.

	- Examples:

```js
// WHMCS (default)
domainProvider: 'whmcs',
domainSearchTemplate: '/domainchecker.php?search={query}'

// HostGator (example redirect to HostGator's public search page)
domainProvider: 'hostgator',
domainSearchTemplate: 'https://www.hostgator.com/domains/search?search={query}'

// Custom provider (use any site that accepts the domain in its query) — use a fully qualified URL
domainProvider: 'custom',
domainSearchTemplate: 'https://example-reseller.example.com/lookup?term={query}'
```

	- Domain registration buttons (`data-domain` and `data-tld`) will, by default, add the domain to a WHMCS cart when `domainProvider` is `whmcs`. For non-WHMCS providers the buttons will redirect the user to the provider's search/lookup page for the full domain (useful for HostGator or other public/search pages).

## Testing Locally

1. Run a simple local web server in the project root to check the design:

```bash
# Python 3 simple server
python -m http.server 8080

# or using npm serve
npx serve -l 8080 .
```

2. Open http://localhost:8080/ in your browser and try searching for a domain from the home page or domain page. Links will redirect to your WHMCS base URL once configured.

## Testing Domain Search
- The search widget uses the WHMCS domainchecker query style: `/domainchecker.php?search=example.com`. You can change the route in `assets/js/main.js` or set the `whmcsBase` in `assets/js/config.js`.

## Notes

- This is a static starter site. To make pages fully dynamic through your WHMCS backend, you may want to template these files into your CMS or web framework.
- The `assets/js/config.js` centralizes WHMCS base settings and pids so you can change values in one place.

## Logo / Favicon Guidance

 - Preferred filenames: put your shark logo at `assets/images/logo.svg` (preferred vector) or `assets/images/logo.png` (transparent raster). The site will try files in this order: `logo.svg` → `logo.png` → `logo.webp` → `shark.jpg` → fallback placeholder. If you uploaded `assets/images/shark.jpg` it will be detected and used automatically.
 - Recommended sizes: SVG is best. For raster images, provide a 2x width (e.g. 240–480px) and compress to under ~150KB where possible.
 - Favicon: place a favicon at `assets/images/favicon-32.png` or `assets/images/favicon.ico`.
 - To have me add your shark logo now, upload the image here and I'll place it into the project and wire it up.
 - Hero image: upload a bold hero image at `assets/images/mega-hero.jpg` (or `mega-hero.webp`). The homepage will use `mega-hero.webp` if present, otherwise it falls back to `mega-hero.jpg`.
 - If you want, I can optimize `mega-hero.jpg` and export a compressed `mega-hero.webp` for improved performance.
 - Hero image: upload a bold hero image at `assets/images/mega-hero.jpg` (or `mega-hero.webp`). The homepage can optionally use `mega-hero-alpha.webp` / `mega-hero-alpha.png` (transparent foreground if present), otherwise it falls back to `mega-hero-1200.jpg` and `mega-hero.jpg`.
 - I previously generated transparent variants `mega-hero-alpha.png` and `mega-hero-alpha.webp`, a mid-size `mega-hero-1200.jpg`, and a small blurred placeholder `mega-hero-lqip.txt` (base64). If you'd like me to regenerate or touch up any of these variants for the new hero, I can.

## Favicon — Shark Image

 - The repo now contains favicons generated from your `assets/images/shark.jpg`:
	 - `assets/images/favicon.ico` (multi-size ICO for cross-browser support)
	 - `assets/images/favicon-32.png` and `assets/images/favicon-64.png` (modern PNG sizes)
 - Every page has been updated to include a relative favicon link so the shark favicon shows in browsers when previewing locally or on a site.
 - There's also an auto-detection script in `assets/js/main.js` that will try common relative paths to the favicon so future pages added at different folder depths will pick up the same shark favicon automatically.

## Next Steps (Optional)

- Replace placeholder pids, domain provider/reseller settings, and exact billing domain — I can replace these instantly if you provide them.
- Create an optimized logo file or export a branded hero image and compressed responsive assets.
- Integrate this template into a CMS or a templating system (or build a small deployable package).
- **Set up complete WHMCS integration** - See [WHMCS-DEPLOYMENT.md](WHMCS-DEPLOYMENT.md) for the complete guide

## 📁 Project Structure

```
megaladonhosting/
├── index.html                      # Homepage
├── pricing/                        # Pricing page
├── domains/                        # Domain search page
├── about/                          # About page
├── support/                        # Support page
├── login/                          # Login redirect
├── terms/                          # Terms of Service
├── privacy/                        # Privacy Policy
├── assets/
│   ├── css/styles.css             # Main stylesheet
│   ├── js/
│   │   ├── config.js              # WHMCS config & PIDs
│   │   └── main.js                # Site behavior
│   └── images/                     # Logos, favicons, hero images
├── whmcs-theme/
│   └── megaladon/                 # WHMCS dark theme (ready to upload)
│       ├── css/custom.css         # Theme styling
│       ├── header.tpl             # Custom header
│       ├── footer.tpl             # Custom footer
│       ├── images/                # Theme assets
│       └── README.md              # Theme docs
├── WHMCS-DEPLOYMENT.md            # WHMCS setup overview
├── WHMCS-SETUP-GUIDE.md           # Detailed setup instructions
├── WHMCS-QUICK-REFERENCE.md       # Quick reference cheat sheet
└── README.md                       # This file
```

## 🚀 Deploy Scripts

The project includes automated deployment tools:

- `deploy.sh` - Auto-deploy to server via lftp/FTP
- `watch-deploy.sh` - Watch files and auto-deploy on changes
- `filezilla-deploy.sh` - Helper for FileZilla manual uploads

See [README-deploy.md](README-deploy.md) for deployment instructions.

---

**Project Status:** ✅ Ready to Deploy  
**Last Updated:** December 1, 2025
