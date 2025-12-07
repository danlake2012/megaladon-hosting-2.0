{*
 * Megaladon Hosting - WHMCS Header Template
 * Matches the main site design with dark theme and navigation
 *}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="{$charset}" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{if $kbarticle.title}{$kbarticle.title} - {/if}{$pagetitle} - {$companyname}</title>
    
    {* Favicons *}
    <link rel="icon" type="image/png" sizes="32x32" href="{$WEB_ROOT}/templates/{$template}/images/favicon-32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="{$WEB_ROOT}/templates/{$template}/images/favicon-64.png">
    {* Also include shark.jpg as an alternative favicon so cart pages can use the shark logo *}
    <!-- prefer a vector logo for crisp scaling, keep shark.jpg as a fallback if present -->
    <link rel="icon" type="image/svg+xml" href="{$WEB_ROOT}/templates/{$template}/images/logo.svg">
    <link rel="icon" type="image/png" sizes="any" href="{$WEB_ROOT}/templates/{$template}/images/shark.jpg">
    <link rel="shortcut icon" href="{$WEB_ROOT}/templates/{$template}/images/favicon.ico">
    
    {* Google Fonts - Inter & Poppins *}
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
    
    {* Font Awesome Icons *}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">
    
    {* jQuery - Load before WHMCS scripts *}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    
    {* WHMCS Default CSS *}
    <link href="{$WEB_ROOT}/templates/{$template}/css/all.min.css?v={$versionHash}" rel="stylesheet">
    
    {* Custom Megaladon CSS - MUST load after default styles *}
    <link href="{$WEB_ROOT}/templates/{$template}/css/custom.css?v={$versionHash}" rel="stylesheet">
    
    {* Head output for custom scripts/styles *}
    {$headoutput}
</head>

<body class="{$bodyClass}" data-phone-cc-input="{$phoneNumberInputStyle}">

{* WHMCS System Messages (announcements, errors) *}
{$headeroutput}

{* TEST BANNER - Confirm template changes are working *}
<div style="background: #ff0080; color: #fff; padding: 10px; text-align: center; font-weight: bold;">
    🔥 HEADER.TPL IS LOADING - Template changes ARE working!
</div>

{* NUCLEAR CSS + JAVASCRIPT FOR STORE PAGES *}
<style id="megaladon-dark-theme">
/* Absolute nuclear option - override inline styles */
* {
    background-color: #0e1a26 !important;
    color: #e6eef6 !important;
}

body {
    background: linear-gradient(180deg, #020d18 0%, #051022 100%) !important;
}

/* HIDE ALL SECONDARY NAVBARS */
nav:not(.site-header nav),
.navbar:not(.site-header .navbar),
body > nav,
body > div > nav:first-child,
.secondary-navbar,
#main-body nav,
.container > nav,
header:not(.site-header),
.header:not(.site-header),
#header:not(.site-header),
.top-nav,
.primary-nav,
ul.nav,
.nav-tabs,
.breadcrumb {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    max-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    opacity: 0 !important;
}

/* Keep only our custom header */
.site-header {
    display: block !important;
}

/* Spacing fixes */
.container, .container-fluid {
    max-width: 1200px !important;
    margin: 0 auto !important;
    padding: 24px !important;
}

#main-body,
.content-container {
    padding: 32px 24px !important;
    margin-top: 20px !important;
}

/* Product cards spacing */
.panel, .card, .product, .well {
    margin-bottom: 20px !important;
    padding: 20px !important;
    border-radius: 10px !important;
    border: 2px solid #0aa8e8 !important;
    box-shadow: 0 0 20px rgba(10, 168, 232, 0.3) !important;
}

/* Sidebar spacing */
.sidebar, .panel-actions, .actions, .sidebar-content {
    padding: 24px !important;
    border: 2px solid #0aa8e8 !important;
    border-radius: 10px !important;
    font-size: 16px !important;
}

/* Actions section - make it bigger */
.panel-actions, .actions, [class*="action"] {
    padding: 30px !important;
    font-size: 18px !important;
    line-height: 1.8 !important;
}

.panel-actions .btn, .actions .btn {
    font-size: 18px !important;
    padding: 14px 24px !important;
    min-width: 180px !important;
}

/* Buttons */
.btn-primary, .btn-success, button {
    background: linear-gradient(90deg, #0aa8e8, #00c8e8) !important;
    color: #002 !important;
    padding: 10px 18px !important;
    border-radius: 8px !important;
    margin: 8px !important;
}

/* Allow order form templates (WHMCS order form pages) to use their own styling
   so the default WHMCS order form can render correctly when selected. */
#order-standard_cart, #order-standard_cart * {
    background: unset !important;
    background-color: unset !important;
    color: unset !important;
    border-color: unset !important;
    box-shadow: unset !important;
}

/* Allow WHMCS order form nav/header elements to display normally when inside the cart */
#order-standard_cart nav,
#order-standard_cart .navbar,
#order-standard_cart header,
#order-standard_cart .nav,
#order-standard_cart .header,
#order-standard_cart .breadcrumb,
#order-standard_cart .panel-sidebar {
    display: block !important;
    visibility: visible !important;
    height: auto !important;
    max-height: none !important;
    opacity: 1 !important;
    margin: initial !important;
    padding: initial !important;
}
</style>

<script>
// Force dark theme and remove duplicate navbars
(function() {
    function fixTheme() {
        // If we're on an order form / cart page, skip the site-wide theme forcing so WHMCS can render its default order form styling
        if (document.querySelector('#order-standard_cart')) {
            return;
        }
        // Remove all navbars and duplicates except our custom one
        const removalSelectors = ['nav', '.navbar', '#header', '.secondary-navbar', '.legacy-nav', '.breadcrumb', '.store-nav', '.order-nav', '.header'];
        removalSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(nav => {
                if (!nav.closest('.site-header')) {
                    nav.remove();
                }
            });
        });
    
        document.querySelectorAll('nav, .navbar, header, .breadcrumb, ul.nav, .nav-tabs').forEach(nav => {
            if (!nav.closest('.site-header')) {
                nav.style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; max-height: 0 !important; opacity: 0 !important; overflow: hidden !important;';
            }
        });
        
        // Force dark backgrounds
        document.querySelectorAll('*').forEach(el => {
            if (!el.closest('.site-header') && !el.closest('.site-footer')) {
                el.style.setProperty('background-color', '#0e1a26', 'important');
                el.style.setProperty('color', '#e6eef6', 'important');
            }
        });
        // Do NOT touch elements inside #order-standard_cart — let WHMCS order form templates style themselves
    }
    
    // Run immediately and multiple times
    fixTheme();
    setTimeout(fixTheme, 100);
    setTimeout(fixTheme, 500);
    setTimeout(fixTheme, 1000);
    
    // Watch for DOM changes
    const observer = new MutationObserver(fixTheme);
    observer.observe(document.body, { childList: true, subtree: true });
})();
</script>

<!-- Removed emergency cart override to allow default standard_cart styles to load -->

{* ========================================
   MEGALADON HEADER & NAVIGATION
   ======================================== *}
<header class="site-header sticky" style="background: #0b1621; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 12px 0; position: fixed; top: 0; left: 0; right: 0; width:100%; z-index: 1000;">
    <div class="container">
        <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            
            {* Logo *}
            <a class="logo" href="{$WEB_ROOT}/index.php" style="display: flex; align-items: center; gap: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; color: #e6eef6; text-decoration: none; font-size: 20px;">
                <img src="{$WEB_ROOT}/templates/{$template}/images/logo.svg" alt="{$companyname}" style="height: 36px; border-radius: 6px;" onerror="this.src='{$WEB_ROOT}/templates/{$template}/images/logo.png'"/>
                <span class="logo-text">{$companyname}</span>
            </a>
            
            {* Main Navigation *}
            <nav class="nav" style="display: flex; gap: 14px; margin-left: 12px; flex: 1;">
                <a href="https://megaladonhosting.com" style="color: #e6eef6; opacity: 0.85; text-decoration: none; padding: 8px 12px; border-radius: 6px;">Home</a>
                <a href="https://megaladonhosting.com/pricing" style="color: #e6eef6; opacity: 0.85; text-decoration: none; padding: 8px 12px; border-radius: 6px;">Pricing</a>
                <a href="https://megaladonhosting.com/domains" style="color: #e6eef6; opacity: 0.85; text-decoration: none; padding: 8px 12px; border-radius: 6px;">Domains</a>
                <a href="{$WEB_ROOT}/index.php?rp=/knowledgebase" style="color: #e6eef6; opacity: 0.85; text-decoration: none; padding: 8px 12px; border-radius: 6px;">Support</a>
            </nav>
            
            {* Mobile Toggle (Bootstrap handles visibility) *}
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#mobile-nav" style="display: none; background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #e6eef6; padding: 8px 12px; border-radius: 6px; font-size: 18px;">
                ☰
            </button>
            
            {* User Account / Login *}
            <div class="header-cta" style="margin-left: auto; display: flex; gap: 10px; align-items: center;">
                {if $loggedin}
                    {* Logged in - show client area link *}
                    <a href="{$WEB_ROOT}/clientarea.php" class="btn btn-default" style="padding: 8px 14px; border-radius: 8px; text-decoration: none; font-weight: 600; border: 1px solid rgba(255,255,255,0.06); background: transparent; color: #e6eef6;">
                        Client Area
                    </a>
                    <a href="{$WEB_ROOT}/logout.php" class="btn btn-link" style="color: #9ca3af; font-size: 14px;">Logout</a>
                {else}
                    {* Not logged in - show login + signup *}
                    <a href="{$WEB_ROOT}/clientarea.php" class="btn btn-default" style="padding: 8px 14px; border-radius: 8px; text-decoration: none; font-weight: 600; border: 1px solid rgba(255,255,255,0.06); background: transparent; color: #e6eef6;">
                        Login
                    </a>
                    <a href="{$WEB_ROOT}/register.php" class="btn btn-primary" style="padding: 8px 14px; border-radius: 8px; text-decoration: none; font-weight: 600; background: linear-gradient(90deg, #0aa8e8, #00c8e8); color: #002; border: 0;">
                        Get Hosting
                    </a>
                {/if}
            </div>
            
        </div>
        
        {* Mobile Navigation Collapse *}
        <div id="mobile-nav" class="collapse" style="margin-top: 12px; background: rgba(2,8,23,0.95); padding: 12px; border-radius: 8px;">
            <nav style="display: flex; flex-direction: column; gap: 8px;">
                <a href="https://megaladonhosting.com" style="color: #e6eef6; padding: 10px; border-radius: 6px; text-decoration: none;">Home</a>
                <a href="https://megaladonhosting.com/pricing" style="color: #e6eef6; padding: 10px; border-radius: 6px; text-decoration: none;">Pricing</a>
                <a href="https://megaladonhosting.com/domains" style="color: #e6eef6; padding: 10px; border-radius: 6px; text-decoration: none;">Domains</a>
                <a href="{$WEB_ROOT}/index.php?rp=/knowledgebase" style="color: #e6eef6; padding: 10px; border-radius: 6px; text-decoration: none;">Support</a>
            </nav>
        </div>
    </div>
</header>

<!-- spacer so fixed header doesn't overlap page content -->
<div class="site-header-spacer" style="height:72px;display:block;width:100%"></div>

<!-- When on WHMCS order form (cart), keep the site header visible but hide ONLY its nav/cta so we don't get two navbars; logo/favicons stay visible -->
<script>
    (function(){
        function adjustHeaderForCart(){
            try{
                var isCart = !!document.querySelector('#order-standard_cart');
                var site = document.querySelector('.site-header');
                if(!site) return;

                var nav = site.querySelector('.nav');
                var cta = site.querySelector('.header-cta');
                var mobileNav = document.querySelector('#mobile-nav');
                var toggle = site.querySelector('.navbar-toggle');

                if(isCart){
                    // hide navigation and CTAs to avoid duplication but keep the logo visible
                    if(nav) nav.style.cssText = 'display:none !important; visibility:hidden !important; height:0 !important; opacity:0 !important;';
                    if(cta) cta.style.cssText = 'display:none !important; visibility:hidden !important; height:0 !important; opacity:0 !important;';
                    if(mobileNav) mobileNav.style.cssText = 'display:none !important; visibility:hidden !important;';
                    if(toggle) toggle.style.cssText = 'display:none !important; visibility:hidden !important;';
                } else {
                    // restore normal header elements
                    if(nav) nav.style.cssText = '';
                    if(cta) cta.style.cssText = '';
                    if(mobileNav) mobileNav.style.cssText = '';
                    if(toggle) toggle.style.cssText = '';
                }
            }catch(e){/* non-breaking */}
        }

        document.addEventListener('DOMContentLoaded', adjustHeaderForCart);
        const moHide = new MutationObserver(adjustHeaderForCart);
        moHide.observe(document.body, { childList: true, subtree: true });
    })();
</script>

{* Mobile toggle script *}
<style>
@media (max-width: 768px) {
    .nav { display: none !important; }
    .navbar-toggle { display: block !important; }
}
.nav a:hover {
    background: rgba(255,255,255,0.05);
    opacity: 1;
}
</style>

{* Main Content Container *}
<div class="main-content" style="min-height: 60vh; padding: 24px 0;">
    <div class="container">
