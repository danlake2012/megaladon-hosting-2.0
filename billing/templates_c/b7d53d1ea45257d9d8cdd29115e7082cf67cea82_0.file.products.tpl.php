<?php
/* Smarty version 3.1.48, created on 2025-12-01 17:39:55
  from '/home/danlake2012/public_html/billing/templates/orderforms/legacy_modern/products.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.48',
  'unifunc' => 'content_692e193b1975c2_95124267',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b7d53d1ea45257d9d8cdd29115e7082cf67cea82' => 
    array (
      0 => '/home/danlake2012/public_html/billing/templates/orderforms/legacy_modern/products.tpl',
      1 => 1748871040,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_692e193b1975c2_95124267 (Smarty_Internal_Template $_smarty_tpl) {
echo '<script'; ?>
 type="text/javascript" src="<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['assetPath'][0], array( array('file'=>"main.js"),$_smarty_tpl ) );?>
"><?php echo '</script'; ?>
>
<link rel="stylesheet" type="text/css" href="<?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['assetPath'][0], array( array('file'=>"style.css"),$_smarty_tpl ) );?>
" />

<div id="order-modern">

    <div class="title-bar">
        <h1 class="font-size-36"><?php echo $_smarty_tpl->tpl_vars['groupname']->value;?>
</h1>
        <div class="choosecat btn-group" role="toolbar">
            <button type="button" class="btn btn-default btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'cartchooseanothercategory'),$_smarty_tpl ) );?>
 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['productgroups']->value, 'productgroup', false, 'num');
$_smarty_tpl->tpl_vars['productgroup']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['num']->value => $_smarty_tpl->tpl_vars['productgroup']->value) {
$_smarty_tpl->tpl_vars['productgroup']->do_else = false;
?>
                    <li class="dropdown-item"><a class="dropdown-item px-2 py-0" href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?gid=<?php echo $_smarty_tpl->tpl_vars['productgroup']->value['gid'];?>
"><?php echo $_smarty_tpl->tpl_vars['productgroup']->value['name'];?>
</a></li>
                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                <?php if ($_smarty_tpl->tpl_vars['loggedin']->value) {?>
                    <li class="dropdown-item"><a class="dropdown-item px-2 py-0" href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?gid=addons"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'cartproductaddons'),$_smarty_tpl ) );?>
</a></li>
                    <?php if ($_smarty_tpl->tpl_vars['renewalsenabled']->value) {?>
                        <li class="dropdown-item"><a class="dropdown-item px-2 py-0" href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?gid=renewals"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'domainrenewals'),$_smarty_tpl ) );?>
</a></li>
                    <?php }?>
                <?php }?>
                <?php if ($_smarty_tpl->tpl_vars['registerdomainenabled']->value) {?>
                    <li class="dropdown-item"><a class="dropdown-item px-2 py-0" href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?a=add&domain=register"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'registerdomain'),$_smarty_tpl ) );?>
</a></li>
                <?php }?>
                <?php if ($_smarty_tpl->tpl_vars['transferdomainenabled']->value) {?>
                    <li class="dropdown-item"><a class="dropdown-item px-2 py-0" href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?a=add&domain=transfer"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'transferdomain'),$_smarty_tpl ) );?>
</a></li>
                <?php }?>
                <li class="dropdown-item"><a class="dropdown-item px-2 py-0" href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?a=view"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'viewcart'),$_smarty_tpl ) );?>
</a></li>
            </ul>
        </div>
    </div>

    <?php if (!$_smarty_tpl->tpl_vars['loggedin']->value && $_smarty_tpl->tpl_vars['currencies']->value) {?>
        <div class="currencychooser">
            <div class="btn-group" role="group">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['currencies']->value, 'curr');
$_smarty_tpl->tpl_vars['curr']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['curr']->value) {
$_smarty_tpl->tpl_vars['curr']->do_else = false;
?>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?gid=<?php echo $_smarty_tpl->tpl_vars['gid']->value;?>
&currency=<?php echo $_smarty_tpl->tpl_vars['curr']->value['id'];?>
" class="btn btn-default<?php if ($_smarty_tpl->tpl_vars['currency']->value['id'] == $_smarty_tpl->tpl_vars['curr']->value['id']) {?> active<?php }?>">
                        <img src="<?php echo $_smarty_tpl->tpl_vars['BASE_PATH_IMG']->value;?>
/flags/<?php if ($_smarty_tpl->tpl_vars['curr']->value['code'] == "AUD") {?>au<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "CAD") {?>ca<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "EUR") {?>eu<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "GBP") {?>gb<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "INR") {?>in<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "JPY") {?>jp<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "USD") {?>us<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "ZAR") {?>za<?php } else { ?>na<?php }?>.png" border="0" alt="" />
                        <?php echo $_smarty_tpl->tpl_vars['curr']->value['code'];?>

                    </a>
                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
            </div>
        </div>
    <?php }?>

    <div class="row">

        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['products']->value, 'product', false, 'num');
$_smarty_tpl->tpl_vars['product']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['num']->value => $_smarty_tpl->tpl_vars['product']->value) {
$_smarty_tpl->tpl_vars['product']->do_else = false;
?>
            <?php $_smarty_tpl->_assignInScope('idPrefix', $_smarty_tpl->tpl_vars['product']->value['bid'] ? (("bundle").($_smarty_tpl->tpl_vars['product']->value['bid'])) : (("product").($_smarty_tpl->tpl_vars['product']->value['pid'])));?>
            <div class="col-md-6">
                <div id="<?php echo $_smarty_tpl->tpl_vars['idPrefix']->value;?>
" class="product" onclick="window.location='<?php echo $_smarty_tpl->tpl_vars['product']->value['productUrl'];?>
'">

                    <div class="pricing">
                        <?php if ($_smarty_tpl->tpl_vars['product']->value['bid']) {?>
                            <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'bundledeal'),$_smarty_tpl ) );?>
<br />
                            <?php if ($_smarty_tpl->tpl_vars['product']->value['displayprice']) {?>
                                <span class="pricing"><?php echo $_smarty_tpl->tpl_vars['product']->value['displayprice'];?>
</span>
                            <?php }?>
                        <?php } else { ?>
                            <?php if ($_smarty_tpl->tpl_vars['product']->value['pricing']['hasconfigoptions']) {?>
                                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'startingfrom'),$_smarty_tpl ) );?>

                                <br />
                            <?php }?>
                            <span class="pricing"><?php echo $_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['price'];?>
</span>
                            <br />
                            <?php if ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['cycle'] == "monthly") {?>
                                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderpaymenttermmonthly'),$_smarty_tpl ) );?>

                            <?php } elseif ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['cycle'] == "quarterly") {?>
                                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderpaymenttermquarterly'),$_smarty_tpl ) );?>

                            <?php } elseif ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['cycle'] == "semiannually") {?>
                                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderpaymenttermsemiannually'),$_smarty_tpl ) );?>

                            <?php } elseif ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['cycle'] == "annually") {?>
                                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderpaymenttermannually'),$_smarty_tpl ) );?>

                            <?php } elseif ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['cycle'] == "biennially") {?>
                                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderpaymenttermbiennially'),$_smarty_tpl ) );?>

                            <?php } elseif ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['cycle'] == "triennially") {?>
                                <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderpaymenttermtriennially'),$_smarty_tpl ) );?>

                            <?php }?>
                            <br>
                            <?php if ($_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['setupFee']) {?>
                                <small><?php echo $_smarty_tpl->tpl_vars['product']->value['pricing']['minprice']['setupFee']->toPrefixed();?>
 <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'ordersetupfee'),$_smarty_tpl ) );?>
</small>
                            <?php }?>
                        <?php }?>
                    </div>

                    <div class="name">
                        <?php echo $_smarty_tpl->tpl_vars['product']->value['name'];?>

                        <?php if ($_smarty_tpl->tpl_vars['product']->value['stockControlEnabled']) {?>
                            <span class="qty">
                                (<?php echo $_smarty_tpl->tpl_vars['product']->value['qty'];?>
 <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'orderavailable'),$_smarty_tpl ) );?>
)
                            </span>
                        <?php }?>
                    </div>

                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['product']->value['features'], 'value', false, 'feature');
$_smarty_tpl->tpl_vars['value']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['feature']->value => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->do_else = false;
?>
                        <span class="prodfeature">
                            <span class="feature"><?php echo $_smarty_tpl->tpl_vars['feature']->value;?>
</span>
                            <br />
                            <?php echo $_smarty_tpl->tpl_vars['value']->value;?>

                        </span>
                    <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

                    <div class="clear"></div>

                    <div class="description"><?php echo $_smarty_tpl->tpl_vars['product']->value['featuresdesc'];?>
</div>

                    <div class="text-right">
                        <a href="<?php echo $_smarty_tpl->tpl_vars['product']->value['productUrl'];?>
" class="btn btn-success btn-lg"><i class="fas fa-shopping-cart"></i> <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'ordernowbutton'),$_smarty_tpl ) );?>
</a>
                    </div>

                </div>
            </div>

            <?php if ($_smarty_tpl->tpl_vars['num']->value%2) {?>
                </div>
                <div class="row">
            <?php }?>

        <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

    </div>

    <?php if (!$_smarty_tpl->tpl_vars['loggedin']->value && $_smarty_tpl->tpl_vars['currencies']->value) {?>
        <div class="currencychooser">
            <div class="btn-group" role="group">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['currencies']->value, 'curr');
$_smarty_tpl->tpl_vars['curr']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['curr']->value) {
$_smarty_tpl->tpl_vars['curr']->do_else = false;
?>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['WEB_ROOT']->value;?>
/cart.php?gid=<?php echo $_smarty_tpl->tpl_vars['gid']->value;?>
&currency=<?php echo $_smarty_tpl->tpl_vars['curr']->value['id'];?>
" class="btn btn-default<?php if ($_smarty_tpl->tpl_vars['currency']->value['id'] == $_smarty_tpl->tpl_vars['curr']->value['id']) {?> active<?php }?>">
                        <img src="<?php echo $_smarty_tpl->tpl_vars['BASE_PATH_IMG']->value;?>
/flags/<?php if ($_smarty_tpl->tpl_vars['curr']->value['code'] == "AUD") {?>au<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "CAD") {?>ca<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "EUR") {?>eu<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "GBP") {?>gb<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "INR") {?>in<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "JPY") {?>jp<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "USD") {?>us<?php } elseif ($_smarty_tpl->tpl_vars['curr']->value['code'] == "ZAR") {?>za<?php } else { ?>na<?php }?>.png" border="0" alt="" />
                        <?php echo $_smarty_tpl->tpl_vars['curr']->value['code'];?>

                    </a>
                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
            </div>
        </div>
    <?php }?>

</div>
<?php }
}
