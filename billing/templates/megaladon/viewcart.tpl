{*
 * Megaladon Hosting - Custom Cart Display
 * Styles the default WHMCS cart with dark theme
 *}

<style>
/* Cart page styling */
body {
    background: linear-gradient(180deg, #020d18 0%, #051022 100%) !important;
}

/* Container styling */
.container, .container-fluid {
    max-width: 1200px !important;
    margin: 0 auto !important;
    padding: 32px 20px !important;
}

/* All panels and cards */
.panel, .card, .well, 
.panel-default, .panel-sidebar {
    background: #0e1a26 !important;
    border: 2px solid #0aa8e8 !important;
    border-radius: 12px !important;
    padding: 20px !important;
    margin-bottom: 24px !important;
    box-shadow: 0 0 20px rgba(10, 168, 232, 0.2) !important;
    color: #e6eef6 !important;
}

.panel-heading, .card-header {
    background: rgba(10, 168, 232, 0.1) !important;
    border-bottom: 1px solid #0aa8e8 !important;
    padding: 16px 20px !important;
    border-radius: 10px 10px 0 0 !important;
}

.panel-title, .card-title, h3, h4 {
    color: #0aa8e8 !important;
    font-weight: 600 !important;
}

.panel-body, .card-body {
    padding: 20px !important;
    background: transparent !important;
}

/* Categories sidebar */
.panel-sidebar .list-group-item,
.sidebar .list-group-item {
    background: rgba(10, 168, 232, 0.05) !important;
    border: 1px solid rgba(10, 168, 232, 0.2) !important;
    color: #e6eef6 !important;
    padding: 14px 18px !important;
    margin-bottom: 8px !important;
    border-radius: 8px !important;
    font-size: 16px !important;
}

.list-group-item:hover {
    background: rgba(10, 168, 232, 0.15) !important;
    border-color: #0aa8e8 !important;
}

.list-group-item.active {
    background: linear-gradient(90deg, #0aa8e8, #00c8e8) !important;
    color: #002 !important;
    border-color: #0aa8e8 !important;
}

/* Actions panel */
.panel-actions, 
.btn-group-vertical {
    display: flex !important;
    flex-direction: column !important;
    gap: 12px !important;
}

.panel-actions .btn,
.btn-group-vertical .btn {
    font-size: 16px !important;
    padding: 14px 20px !important;
    border-radius: 8px !important;
    width: 100% !important;
    text-align: center !important;
}

/* Cart summary */
.order-summary,
.summary-container {
    background: #0e1a26 !important;
    border: 2px solid #0aa8e8 !important;
    border-radius: 12px !important;
    padding: 24px !important;
}

.item-title, .item-name {
    color: #0aa8e8 !important;
    font-weight: 600 !important;
    font-size: 18px !important;
}

.price, .item-price {
    color: #0aa8e8 !important;
    font-weight: 700 !important;
    font-size: 20px !important;
}

/* Buttons */
.btn-primary, .btn-success {
    background: linear-gradient(90deg, #0aa8e8, #00c8e8) !important;
    color: #002 !important;
    border: none !important;
    padding: 12px 24px !important;
    font-weight: 600 !important;
}

.btn-primary:hover, .btn-success:hover {
    background: linear-gradient(90deg, #00c8e8, #0aa8e8) !important;
    transform: translateY(-1px);
}

.btn-default, .btn-secondary {
    background: rgba(10, 168, 232, 0.1) !important;
    color: #e6eef6 !important;
    border: 1px solid #0aa8e8 !important;
}

.btn-default:hover {
    background: rgba(10, 168, 232, 0.2) !important;
}

/* Tables */
table {
    color: #e6eef6 !important;
    background: transparent !important;
}

table thead {
    background: rgba(10, 168, 232, 0.1) !important;
    border-bottom: 2px solid #0aa8e8 !important;
}

table th {
    color: #0aa8e8 !important;
    font-weight: 600 !important;
    padding: 14px !important;
}

table td {
    padding: 14px !important;
    border-bottom: 1px solid rgba(10, 168, 232, 0.1) !important;
}

/* Form inputs */
input, select, textarea {
    background: rgba(10, 168, 232, 0.05) !important;
    border: 1px solid rgba(10, 168, 232, 0.3) !important;
    color: #e6eef6 !important;
    padding: 10px 14px !important;
    border-radius: 6px !important;
}

input:focus, select:focus, textarea:focus {
    border-color: #0aa8e8 !important;
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(10, 168, 232, 0.1) !important;
}

/* Sidebar layout fix */
.sidebar-primary, .sidebar-secondary {
    position: static !important;
    float: none !important;
}

/* Remove extra spacing from nested elements */
.panel .panel {
    margin-bottom: 0 !important;
}
</style>

{* Let WHMCS load its default cart content here *}
