{*
 * Megaladon Hosting - Store Products Template
 * Dark theme styling for /store/ product pages
 *}

{* Add custom styling for store pages *}
<style>
/* Force dark theme on store pages */
.product-selection-container,
.product-grid,
.product-box-container,
.products-container,
.store-content,
.category-container {
    background: transparent !important;
}

/* Product boxes */
.product,
.package,
.pricing-box,
.product-block {
    background: var(--bg-card) !important;
    border: 1px solid var(--border-subtle) !important;
    color: var(--text-primary) !important;
}

/* Product headers/names */
.product-title,
.package-name,
.product-name,
h3.product-title {
    color: var(--text-primary) !important;
    background: rgba(255,255,255,0.02) !important;
}

/* Pricing display */
.price,
.product-price,
.pricing {
    color: var(--accent-primary) !important;
}

/* Feature lists */
.product-features,
.features-list {
    color: var(--text-primary) !important;
}

.product-features li {
    border-bottom: 1px solid rgba(255,255,255,0.03) !important;
    color: var(--text-primary) !important;
}

/* Order buttons */
.order-button,
.btn-order {
    background: linear-gradient(90deg, var(--accent-primary), #00c8e8) !important;
    color: #002 !important;
    border: 0 !important;
}
</style>

{* Store page content - use default WHMCS product display *}
