<?php
/* Smarty version 3.1.48, created on 2025-12-01 17:44:07
  from '/home/danlake2012/public_html/billing/templates/orderforms/legacy_boxes/products.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.48',
  'unifunc' => 'content_692e1a37d8c6e4_48391995',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7f8af1359fc9152dee7bd8286d2b86ace17c523a' => 
    array (
      0 => '/home/danlake2012/public_html/billing/templates/orderforms/legacy_boxes/products.tpl',
      1 => 1748871040,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:orderforms/standard_cart/sidebar-categories.tpl' => 1,
    'file:orderforms/standard_cart/sidebar-categories-collapsed.tpl' => 1,
  ),
),false)) {
function content_692e1a37d8c6e4_48391995 (Smarty_Internal_Template $_smarty_tpl) {
?><link rel="stylesheet" type="text/css" href="<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['assetPath'][0], array( array('file'=>"style.css"),$_smarty_tpl ) );?>
" />

<div id="order-boxes">

    <div class="pull-md-right float-md-right col-md-9">

        <div class="header-lined">
            <h1 class="font-size-36"><?php echo $_smarty_tpl->tpl_vars['groupname']->value;?>
</h1>
        </div>

    </div>

    <div class="col-md-3 pull-md-left sidebar hidden-xs hidden-sm d-none d-md-block float-md-left">

        <?php $_smarty_tpl->_subTemplateRender("file:orderforms/standard_cart/sidebar-categories.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

    </div>

    <div class="col-md-9 pull-md-right float-md-right">

        <div class="line-padded visible-xs visible-sm d-block d-md-none clearfix">

            <?php $_smarty_tpl->_subTemplateRender("file:orderforms/standard_cart/sidebar-categories-collapsed.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

        </div>

        <?php if (!$_smarty_tpl->tpl_vars['products']->value && !$_smarty_tpl->tpl_vars['errormessage']->value) {?>
            <div class="alert alert-info">
                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderForm.selectCategory'),$_smarty_tpl ) );?>

            </div>
        <?php } else { ?>
            <form method="post" action="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?a=add">

                <div class="fields-container">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['products']->value, 'product');
$_smarty_tpl->tpl_vars['product']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['product']->value) {
$_smarty_tpl->tpl_vars['product']->do_else = false;
?>
                        <div class="field-row clearfix">
                            <div class="col-xs-12 col-12">
                                <label class="radio-inline product-radio"><input type="radio" name="pid" id="pid<?php echo $_smarty_tpl->tpl_vars['product']->value['pid'];?>
" value="<?php if ($_smarty_tpl->tpl_vars['product']->value['bid']) {?>b<?php echo $_smarty_tpl->tpl_vars['product']->value['bid'];
} else {
echo $_smarty_tpl->tpl_vars['product']->value['pid'];
}?>"<?php if ($_smarty_tpl->tpl_vars['product']->value['qty'] == "0") {?> disabled<?php }?> /> <strong><?php echo $_smarty_tpl->tpl_vars['product']->value['name'];?>
</strong> <?php if ($_smarty_tpl->tpl_vars['product']->value['stockControlEnabled']) {?><em>(<?php echo $_smarty_tpl->tpl_vars['product']->value['qty'];?>
 <?php echo $_smarty_tpl->tpl_vars['LANG']->value['orderavailable'];?>
)</em><?php }
if ($_smarty_tpl->tpl_vars['product']->value['description']) {?> - <?php echo $_smarty_tpl->tpl_vars['product']->value['description'];
}?></label>
                            </div>
                        </div>
                    <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                </div>

                <div class="line-padded text-center">
                    <button type="submit" class="btn btn-primary btn-lg"><?php echo $_smarty_tpl->tpl_vars['LANG']->value['continue'];?>
 &nbsp;<i class="fas fa-arrow-circle-right"></i></button>
                </div>

            </form>
        <?php }?>

    </div>

    <div class="clearfix"></div>

    <div class="secure-warning">
        <img src="assets/img/padlock.gif" align="absmiddle" border="0" alt="Secure Transaction" /> &nbsp;<?php echo $_smarty_tpl->tpl_vars['LANG']->value['ordersecure'];?>
 (<strong><?php echo $_smarty_tpl->tpl_vars['ipaddress']->value;?>
</strong>) <?php echo $_smarty_tpl->tpl_vars['LANG']->value['ordersecure2'];?>

    </div>

</div>
<?php }
}
