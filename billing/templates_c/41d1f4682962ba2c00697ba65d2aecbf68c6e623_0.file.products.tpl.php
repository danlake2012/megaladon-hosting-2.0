<?php
/* Smarty version 3.1.48, created on 2025-12-01 17:51:59
  from '/home/danlake2012/public_html/billing/templates/orderforms/pure_comparison/products.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.48',
  'unifunc' => 'content_692e1c0f4e6f21_78057535',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '41d1f4682962ba2c00697ba65d2aecbf68c6e623' => 
    array (
      0 => '/home/danlake2012/public_html/billing/templates/orderforms/pure_comparison/products.tpl',
      1 => 1748871040,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:orderforms/standard_cart/sidebar-categories.tpl' => 1,
    'file:orderforms/pure_comparison/recommendations-modal.tpl' => 1,
  ),
),false)) {
function content_692e1c0f4e6f21_78057535 (Smarty_Internal_Template $_smarty_tpl) {
?><!-- Product Recommendations CSS -->
<link type="text/css" rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['BASE_PATH_CSS']->value;?>
/recommendations.min.css" property="stylesheet" />
<!-- Core CSS -->
<link type="text/css" rel="stylesheet" href="<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['assetPath'][0], array( array('file'=>"style.css"),$_smarty_tpl ) );?>
" property="stylesheet" />
<?php echo '<script'; ?>
>
jQuery(document).ready(function () {
    jQuery('#btnShowSidebar').click(function () {
        if (jQuery(".product-selection-sidebar").is(":visible")) {
            jQuery('.row-product-selection').css('left','0');
            jQuery('.product-selection-sidebar').fadeOut();
            jQuery('#btnShowSidebar').html('<i class="fas fa-arrow-circle-right"></i> <?php echo $_smarty_tpl->tpl_vars['LANG']->value['showMenu'];?>
');
        } else {
            jQuery('.product-selection-sidebar').fadeIn();
            jQuery('.row-product-selection').css('left','300px');
            jQuery('#btnShowSidebar').html('<i class="fas fa-arrow-circle-left"></i> <?php echo $_smarty_tpl->tpl_vars['LANG']->value['hideMenu'];?>
');
        }
    });
});
<?php echo '</script'; ?>
>

<?php if ($_smarty_tpl->tpl_vars['showSidebarToggle']->value) {?>
    <button type="button" class="btn btn-default btn-sm" id="btnShowSidebar">
        <i class="fas fa-arrow-circle-right"></i>
        <?php echo $_smarty_tpl->tpl_vars['LANG']->value['showMenu'];?>

    </button>
<?php }?>

<div class="row row-product-selection">
    <div class="col-md-3 sidebar product-selection-sidebar" id="premiumComparisonSidebar">
        <?php $_smarty_tpl->_subTemplateRender("file:orderforms/standard_cart/sidebar-categories.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    </div>
    <div class="col-md-12">

        <div id="order-pure_comparison" class="page-container">
            <div class="txt-center">
                <h3 id="headline" class="font-size-24">
                    <?php if ($_smarty_tpl->tpl_vars['productGroup']->value['headline']) {?>
                        <?php echo $_smarty_tpl->tpl_vars['productGroup']->value['headline'];?>

                    <?php } else { ?>
                        <?php echo $_smarty_tpl->tpl_vars['productGroup']->value['name'];?>

                    <?php }?>
                </h3>
                <?php if ($_smarty_tpl->tpl_vars['productGroup']->value['tagline']) {?>
                    <h5 id="tagline">
                        <?php echo $_smarty_tpl->tpl_vars['productGroup']->value['tagline'];?>

                    </h5>
                <?php }?>
                <?php if ($_smarty_tpl->tpl_vars['errormessage']->value) {?>
                    <div class="alert alert-danger">
                        <?php echo $_smarty_tpl->tpl_vars['errormessage']->value;?>

                    </div>
                <?php } elseif (!$_smarty_tpl->tpl_vars['productGroup']->value) {?>
                    <div class="alert alert-info">
                        <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderForm.selectCategory'),$_smarty_tpl ) );?>

                    </div>
                <?php }?>
            </div>
            <div id="products" class="price-table-container">
                <ul>
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['products']->value, 'product');
$_smarty_tpl->tpl_vars['product']->iteration = 0;
$_smarty_tpl->tpl_vars['product']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['product']->value) {
$_smarty_tpl->tpl_vars['product']->do_else = false;
$_smarty_tpl->tpl_vars['product']->iteration++;
$__foreach_product_0_saved = $_smarty_tpl->tpl_vars['product'];
?>
                        <?php $_smarty_tpl->_assignInScope('idPrefix', $_smarty_tpl->tpl_vars['product']->value['bid'] ? (("bundle").($_smarty_tpl->tpl_vars['product']->value['bid'])) : (("product").($_smarty_tpl->tpl_vars['product']->value['pid'])));?>
                        <li id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
">
                            <div class="price-table<?php if ($_smarty_tpl->tpl_vars['product']->value['isFeatured']) {?> active<?php }?>">
                                <div class="top-head">
                                    <div class="top-area">
                                        <h4 id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
-name">
                                            <?php echo $_smarty_tpl->tpl_vars['product']->value['name'];?>

                                        </h4>
                                        <?php if ($_smarty_tpl->tpl_vars['product']->value['isFeatured']) {?>
                                            <div class="popular-plan">
                                                <div class="plan-container">
                                                    <div class="txt-container"><?php echo mb_strtoupper($_smarty_tpl->tpl_vars['LANG']->value['featuredProduct'], 'UTF-8');?>
</div>
                                                </div>
                                            </div>
                                        <?php }?>
                                        <?php if ($_smarty_tpl->tpl_vars['product']->value['tagLine']) {?>
                                            <p id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
-tag-line"><?php echo $_smarty_tpl->tpl_vars['product']->value['tagLine'];?>
</p>
                                        <?php }?>
                                    </div>
                                </div>
                                <ul id="productDescription<?php echo $_smarty_tpl->tpl_vars['product']->iteration;?>
">
                                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['product']->value['features'], 'value', false, 'feature');
$_smarty_tpl->tpl_vars['value']->iteration = 0;
$_smarty_tpl->tpl_vars['value']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['feature']->value => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->do_else = false;
$_smarty_tpl->tpl_vars['value']->iteration++;
$__foreach_value_1_saved = $_smarty_tpl->tpl_vars['value'];
?>
                                        <li id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
-feature<?php echo $_smarty_tpl->tpl_vars['value']->iteration;?>
">
                                            <span><?php echo $_smarty_tpl->tpl_vars['value']->value;?>
</span> <?php echo $_smarty_tpl->tpl_vars['feature']->value;?>

                                        </li>
                                    <?php
$_smarty_tpl->tpl_vars['value'] = $__foreach_value_1_saved;
}
if ($_smarty_tpl->tpl_vars['value']->do_else) {
?>
                                        <li id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
-description">
                                            <?php echo $_smarty_tpl->tpl_vars['product']->value['description'];?>

                                        </li>
                                    <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                                </ul>
                                <div class="price-area">
                                    <div class="price" id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
-price">
                                        <?php if ($_smarty_tpl->tpl_vars['product']->value['bid']) {?>
                                            <?php echo $_smarty_tpl->tpl_vars['LANG']->value['bundledeal'];?>

                                            <?php if ($_smarty_tpl->tpl_vars['product']->value['displayprice']) {?>
                                                <br /><br /><span><?php echo $_smarty_tpl->tpl_vars['product']->value['displayPriceSimple'];?>
</span>
                                            <?php }?>
                                        <?php } elseif ($_smarty_tpl->tpl_vars['product']->value['paytype'] == "free") {?>
                                            <?php echo $_smarty_tpl->tpl_vars['LANG']->value['orderfree'];?>

                                        <?php } elseif ($_smarty_tpl->tpl_vars['product']->value['paytype'] == "onetime") {?>
                                            <?php echo $_smarty_tpl->tpl_vars['product']->value['pricing']['onetime'];?>
 <?php echo $_smarty_tpl->tpl_vars['LANG']->value['orderpaymenttermonetime'];?>

                                        <?php } else { ?>
                                            <?php if ($_smarty_tpl->tpl_vars['product']->value['pricing']['hasconfigoptions']) {?>
                                                <?php echo $_smarty_tpl->tpl_vars['LANG']->value['from'];?>

                                            <?php }?>
                                            <?php echo $_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['cycleText'];?>

                                            <br>
                                            <?php if ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['setupFee']) {?>
                                                <small><?php echo $_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['setupFee']->toPrefixed();?>
 <?php echo $_smarty_tpl->tpl_vars['LANG']->value['ordersetupfee'];?>
</small>
                                            <?php }?>
                                        <?php }?>
                                    </div>
                                    <?php if ($_smarty_tpl->tpl_vars['product']->value['qty'] == "0") {?>
                                        <span id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
-unavailable" class="order-button unavailable">
                                            <?php echo $_smarty_tpl->tpl_vars['LANG']->value['outofstock'];?>

                                        </span>
                                    <?php } else { ?>
                                        <a href="<?php echo $_smarty_tpl->tpl_vars['product']->value['productUrl'];?>
" class="order-button" id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
-order-button"<?php if ($_smarty_tpl->tpl_vars['product']->value['hasRecommendations']) {?> data-has-recommendations="1"<?php }?>>
                                            <?php echo $_smarty_tpl->tpl_vars['LANG']->value['ordernowbutton'];?>

                                        </a>
                                    <?php }?>
                                </div>
                            </div>
                        </li>
                    <?php
$_smarty_tpl->tpl_vars['product'] = $__foreach_product_0_saved;
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                </ul>
            </div>

            <?php if (count($_smarty_tpl->tpl_vars['productGroup']->value['features']) > 0) {?>
                <div class="includes-features">
                    <div class="row clearfix">
                        <div class="col-md-12">
                            <div class="head-area">
                                <span class="primary-bg-color">
                                    <?php echo $_smarty_tpl->tpl_vars['LANG']->value['orderForm']['includedWithPlans'];?>

                                </span>
                            </div>
                            <ul class="list-features">
                                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['productGroup']->value['features'], 'features');
$_smarty_tpl->tpl_vars['features']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['features']->value) {
$_smarty_tpl->tpl_vars['features']->do_else = false;
?>
                                    <li><?php echo $_smarty_tpl->tpl_vars['features']->value['feature'];?>
</li>
                                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php }?>

        </div>
    </div>
</div>

<?php $_smarty_tpl->_subTemplateRender("file:orderforms/pure_comparison/recommendations-modal.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php echo '<script'; ?>
 src="<?php echo $_smarty_tpl->tpl_vars['BASE_PATH_JS']->value;?>
/whmcs/recommendations.min.js"><?php echo '</script'; ?>
>
<?php }
}
