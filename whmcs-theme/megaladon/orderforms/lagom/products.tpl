{*
 * Megaladon Hosting - Lagom Order Form Products Override
 * This template is used for /store/ pages
 *}

{* TEST BANNER *}
<div style="background: linear-gradient(90deg, #0aa8e8, #00c8e8); color: #000; padding: 20px; text-align: center; font-size: 18px; font-weight: bold; margin: 20px auto; border-radius: 10px; max-width: 1200px;">
    ✅ LAGOM TEMPLATE LOADED - Applying dark theme...
</div>

<style>
/* Force dark theme on Lagom order form */
.order-box,
.product-selection-container,
.product-info-container,
.pricing-box,
.package-box,
#products .panel,
#products .well,
.lagom-product,
div[class*="product-"] {
    background: #0e1a26 !important;
    background-color: #0e1a26 !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    color: #e6eef6 !important;
}

/* Container width fix */
.container,
.container-fluid,
#main-body {
    max-width: 1200px !important;
    margin: 0 auto !important;
    padding: 24px !important;
}

/* Product grid */
.products-container {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
    gap: 20px !important;
}

/* All text */
* {
    color: #e6eef6 !important;
}

/* Prices */
.price,
.product-price,
.pricing {
    color: #0aa8e8 !important;
}
</style>
