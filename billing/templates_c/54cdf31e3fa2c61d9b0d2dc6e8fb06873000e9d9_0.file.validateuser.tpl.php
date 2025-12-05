<?php
/* Smarty version 3.1.48, created on 2025-12-01 18:10:04
  from '/home/danlake2012/public_html/billing/templates/six/includes/validateuser.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.48',
  'unifunc' => 'content_692e204cb72c66_20870855',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '54cdf31e3fa2c61d9b0d2dc6e8fb06873000e9d9' => 
    array (
      0 => '/home/danlake2012/public_html/billing/templates/six/includes/validateuser.tpl',
      1 => 1748871040,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_692e204cb72c66_20870855 (Smarty_Internal_Template $_smarty_tpl) {
if ($_smarty_tpl->tpl_vars['showUserValidationBanner']->value) {?>
    <div class="verification-banner user-validation">
        <div class="container">
            <div class="row">
                <div class="col-xs-2 col-xs-push-10 col-sm-1 col-sm-push-11">
                    <button id="btnUserValidationClose" type="button" class="btn close" data-uri="<?php echo routePath('dismiss-user-validation');?>
"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="col-xs-10 col-xs-pull-2 col-sm-7 col-sm-pull-1 col-md-8">
                    <i class="fal fa-passport"></i>
                    <span class="text"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'fraud.furtherValShort'),$_smarty_tpl ) );?>
</span>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-3 col-sm-pull-1">
                    <a href="#" class="btn btn-default btn-sm btn-block btn-action" data-url="<?php echo $_smarty_tpl->tpl_vars['userValidationUrl']->value;?>
" onclick="openValidationSubmitModal(this);return false;">
                        <?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'fraud.submitDocs'),$_smarty_tpl ) );?>

                    </a>
                </div>
            </div>
        </div>
    </div>
    <div id="validationSubmitModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body top-margin-10">
                    <iframe id="validationContent" allow="camera <?php echo $_smarty_tpl->tpl_vars['userValidationHost']->value;?>
" width="100%" height="700" frameborder="0" src=""></iframe>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"><?php echo call_user_func_array( $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['lang'][0], array( array('key'=>'close'),$_smarty_tpl ) );?>
</button>
                </div>
            </div>
        </div>
    </div>
<?php }
}
}
