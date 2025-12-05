Megaladon WHMCS order form: megaladon_cart

Purpose:
- Dark, modern redesign of the WHMCS standard_cart order form to match the MegaladonHosting site.
- Keeps WHMCS functionality by including the existing `standard_cart` templates for logic and flow.

Files created:
- cart.tpl — main wrapper & includes `standard_cart/cart.tpl` (keeps functionality) + loads CSS/JS
- viewcart.tpl — wrapper for the cart view; includes `standard_cart/viewcart.tpl`
- configureproduct.tpl — wrapper for product configuration; includes `standard_cart/configureproduct.tpl`
- style.css — the new theme styles (dark, cards, inputs, buttons)
- script.js — small helper (sticky order summary, removes embedded navs if present)

Important notes / Deploy steps:
1. Copy `templates/orderforms/megaladon_cart` from this theme into your live WHMCS installation at `public_html/billing/templates/orderforms/megaladon_cart`.
2. Make sure WHMCS has access to the original `standard_cart` templates: either in the core WHMCS `/orderforms/standard_cart` path or your theme's `orderforms/standard_cart/` files. The megaladon_cart templates include the standard_cart files for logic. If you don't have those files in your theme, copy them from your WHMCS installation's orderforms/standard_cart directory.
3. In WHMCS Admin go to Settings → System Settings → Ordering → Default Order Form Template and set `megaladon_cart`.
4. Clear any WHMCS template cache: Utilities → System → System Cleanup → Clear Cache (and browser cache).

Testing checklist:
- Add a hosting product to the cart and proceed through configure → domain → addons → checkout
- Try promo codes, update quantities, remove items, and verify the summary updates
- Confirm UI matches the theme across devices and that there are no duplicate navbars

If anything isn't working live, send me the rendered HTML of `/billing/cart.php` (or a screenshot) and I’ll refine the template directly against the server output. If your live server's `orderforms/standard_cart` templates are in a different path, I can update megaladon_cart to directly include from core templates instead of the theme copy.
