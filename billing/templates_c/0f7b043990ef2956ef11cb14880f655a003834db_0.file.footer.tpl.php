<?php
/* Smarty version 3.1.48, created on 2025-12-01 17:47:26
  from '/home/danlake2012/public_html/billing/templates/megaladon/footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.48',
  'unifunc' => 'content_692e1afe026b14_84001037',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '0f7b043990ef2956ef11cb14880f655a003834db' => 
    array (
      0 => '/home/danlake2012/public_html/billing/templates/megaladon/footer.tpl',
      1 => 1764629157,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_692e1afe026b14_84001037 (Smarty_Internal_Template $_smarty_tpl) {
?>    </div> </div> 
<footer class="site-footer" style="padding: 32px 0; border-top: 1px solid rgba(255,255,255,0.06); background: rgba(0,0,0,0.2); margin-top: 48px; color: #9ca3af;">
    <div class="container">
        
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; margin-bottom: 28px;">
            
                        <div>
                <h4 style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 700; color: #e6eef6; margin-bottom: 12px;">
                    Megaladon Hosting
                </h4>
                <p style="font-size: 14px; line-height: 1.6; color: #9ca3af;">
                    Shark-fast hosting for serious websites. Lightning-fast servers, free SSL, and real human support.
                </p>
            </div>
            
                        <div>
                <h4 style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: #e6eef6; margin-bottom: 12px;">
                    Quick Links
                </h4>
                <nav style="display: flex; flex-direction: column; gap: 8px;">
                    <a href="https://megaladonhosting.com/pricing" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Pricing</a>
                    <a href="https://megaladonhosting.com/domains" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Domains</a>
                    <a href="https://megaladonhosting.com/about" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">About</a>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/index.php?rp=/knowledgebase" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Knowledgebase</a>
                </nav>
            </div>
            
                        <div>
                <h4 style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: #e6eef6; margin-bottom: 12px;">
                    Support
                </h4>
                <nav style="display: flex; flex-direction: column; gap: 8px;">
                    <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/submitticket.php" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Submit Ticket</a>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/contact.php" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Contact Us</a>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/serverstatus.php" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Server Status</a>
                    <?php if ($_smarty_tpl->tpl_vars['loggedin']->value) {?>
                        <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/clientarea.php" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Client Area</a>
                    <?php }?>
                </nav>
            </div>
            
                        <div>
                <h4 style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: #e6eef6; margin-bottom: 12px;">
                    Legal
                </h4>
                <nav style="display: flex; flex-direction: column; gap: 8px;">
                    <a href="https://megaladonhosting.com/terms" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Terms of Service</a>
                    <a href="https://megaladonhosting.com/privacy" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Privacy Policy</a>
                    <a href="https://megaladonhosting.com/aup" style="color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s;">Acceptable Use</a>
                </nav>
            </div>
            
        </div>
        
                <div style="border-top: 1px solid rgba(255,255,255,0.03); padding-top: 20px; margin-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <p style="margin: 0; font-size: 13px; color: #6b7280;">
                © <?php echo $_smarty_tpl->tpl_vars['date_year']->value;?>
 <?php echo $_smarty_tpl->tpl_vars['companyname']->value;?>
. All rights reserved.
            </p>
            <div style="display: flex; gap: 10px; font-size: 13px;">
                <a href="https://megaladonhosting.com" style="color: #9ca3af; text-decoration: none;">Main Site</a>
                <span style="color: rgba(255,255,255,0.1);">•</span>
                <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/index.php" style="color: #9ca3af; text-decoration: none;">Billing Home</a>
            </div>
        </div>
        
    </div>
</footer>

<style>
.site-footer a:hover {
    color: #0aa8e8 !important;
}
@media (max-width: 768px) {
    .site-footer > div > div:first-child {
        grid-template-columns: 1fr;
    }
}
</style>

<?php echo '<script'; ?>
>
(function() {
    // Remove inline white backgrounds and apply dark theme
    function applyDarkTheme() {
        // Target all elements with inline white backgrounds
        const whiteBackgrounds = document.querySelectorAll('[style*="background"]');
        whiteBackgrounds.forEach(el => {
            const style = el.getAttribute('style');
            if (style && (style.includes('white') || style.includes('#fff') || style.includes('#ffffff'))) {
                el.style.backgroundColor = '#0e1a26';
                el.style.color = '#e6eef6';
            }
        });
        
        // Force dark theme on common WHMCS elements
        const selectors = [
            '.product', '.package', '.pricing-table', '.panel-body',
            '.product-info', '.well', '.panel-default', '.product-container'
        ];
        
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.backgroundColor = '#0e1a26';
                el.style.color = '#e6eef6';
                el.style.borderColor = 'rgba(255,255,255,0.06)';
            });
        });
    }
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyDarkTheme);
    } else {
        applyDarkTheme();
    }
    
    // Re-apply after AJAX loads (WHMCS uses AJAX for some content)
    setTimeout(applyDarkTheme, 500);
    setTimeout(applyDarkTheme, 1000);
    
    // Watch for DOM changes
    const observer = new MutationObserver(applyDarkTheme);
    observer.observe(document.body, { childList: true, subtree: true });
})();
<?php echo '</script'; ?>
>

<?php echo $_smarty_tpl->tpl_vars['footeroutput']->value;?>


</body>
</html>
<?php }
}
