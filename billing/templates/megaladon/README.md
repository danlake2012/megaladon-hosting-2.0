# Megaladon WHMCS Theme

A dark-themed WHMCS template that matches the Megaladon Hosting main website.

## Features

✅ **Dark Theme** - Matches main site with #020d18 background, #0aa8e8 accents  
✅ **Custom Header** - Same navigation and logo as main site  
✅ **Custom Footer** - Consistent branding across all pages  
✅ **Responsive** - Mobile-friendly navigation and layouts  
✅ **Shark Branding** - Logo, favicons, and brand colors throughout  
✅ **Modern Fonts** - Inter (body) and Poppins (headings) from Google Fonts  
✅ **Styled Components** - Custom CSS for buttons, cards, tables, forms, modals, alerts  

## Installation

### 1. Upload Files

Upload this entire `megaladon` folder to your WHMCS server:

```
/public_html/billing/templates/megaladon/
```

(Or wherever your WHMCS installation is located)

### 2. Activate Theme

1. Login to WHMCS Admin Panel
2. Navigate to: **Setup → General Settings → General**
3. Find the **Template** dropdown
4. Select: **megaladon**
5. Click **Save Changes**

### 3. Clear Cache

1. Navigate to: **Utilities → System → Template Cache**
2. Click **Clear Cache**

### 4. Test

Visit your WHMCS homepage (logged out) to see the new theme:
```
https://billing.megaladonhosting.com
```

## File Structure

```
megaladon/
├── css/
│   └── custom.css          # All custom styling (loads after default WHMCS CSS)
├── images/
│   ├── shark.jpg          # Main logo (used in header)
│   ├── favicon-32.png     # 32x32 favicon
│   ├── favicon-64.png     # 64x64 favicon
│   └── favicon.ico        # Standard .ico favicon
├── header.tpl             # Custom header template (Smarty)
└── footer.tpl             # Custom footer template (Smarty)
```

## Customization

### Change Colors

Edit `css/custom.css` and update the CSS variables:

```css
:root {
  --bg-body: #020d18;           /* Main background */
  --bg-nav: #0b1621;            /* Navigation background */
  --bg-card: #0e1a26;           /* Card/panel background */
  --accent-primary: #0aa8e8;    /* Primary accent (buttons, links) */
  --accent-hover: #087db4;      /* Hover state for accents */
  --text-primary: #e6eef6;      /* Primary text color */
  --text-muted: #9ca3af;        /* Muted/secondary text */
}
```

### Update Logo

Replace `images/shark.jpg` with your own logo. The header scales it to 36px height.

### Change Navigation Links

Edit `header.tpl` and update the `<nav>` section:

```smarty
<nav class="nav" ...>
    <a href="https://megaladonhosting.com">Home</a>
    <a href="https://megaladonhosting.com/pricing">Pricing</a>
    {* Add more links here *}
</nav>
```

### Update Footer Links

Edit `footer.tpl` and modify the footer grid columns.

## Color Palette

| Element          | Color                      | Hex       |
|------------------|----------------------------|-----------|
| Body Background  | Deep Navy                  | #020d18   |
| Navigation       | Dark Blue-Gray             | #0b1621   |
| Cards/Panels     | Slate Blue                 | #0e1a26   |
| Primary Accent   | Cyan Blue                  | #0aa8e8   |
| Hover Accent     | Dark Cyan                  | #087db4   |
| Text Primary     | Off-White                  | #e6eef6   |
| Text Muted       | Gray                       | #9ca3af   |
| Borders          | Subtle White (6% opacity)  | rgba(255,255,255,0.06) |

## Fonts

- **Body/UI:** [Inter](https://fonts.google.com/specimen/Inter) (300, 400, 600, 700)
- **Headings:** [Poppins](https://fonts.google.com/specimen/Poppins) (600, 700)

Loaded via Google Fonts CDN in `header.tpl`.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Theme not applying?

1. **Clear WHMCS template cache:**
   - Utilities → System → Template Cache → Clear Cache

2. **Check file permissions:**
   ```bash
   chmod 755 megaladon/
   chmod 644 megaladon/*.tpl
   chmod 644 megaladon/css/*.css
   chmod 755 megaladon/css/
   chmod 755 megaladon/images/
   ```

3. **Verify correct folder location:**
   - Should be: `/public_html/billing/templates/megaladon/`
   - NOT: `/public_html/billing/megaladon/`

### Logo not showing?

1. Check that `images/shark.jpg` exists
2. Verify file permissions (should be 644)
3. Clear browser cache

### Styles look wrong?

1. Ensure `custom.css` is loading **after** default WHMCS CSS
2. Check browser console for CSS errors
3. Try disabling browser extensions that might inject CSS

## Credits

- **Theme:** Megaladon Hosting
- **Based on:** WHMCS Default Templates
- **Fonts:** Google Fonts (Inter, Poppins)
- **Icons:** Unicode emoji (no external icon library required)

## License

Proprietary - For use with Megaladon Hosting only.

## Support

For theme issues or customization help, contact:
- Email: support@megaladonhosting.com
- Ticket: https://billing.megaladonhosting.com/submitticket.php

---

**Version:** 1.0  
**Last Updated:** December 1, 2025  
**Compatible With:** WHMCS 8.0+
