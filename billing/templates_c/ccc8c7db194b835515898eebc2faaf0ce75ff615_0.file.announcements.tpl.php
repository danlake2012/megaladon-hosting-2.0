<?php
/* Smarty version 3.1.48, created on 2025-12-01 18:10:43
  from '/home/danlake2012/public_html/billing/templates/six/announcements.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.48',
  'unifunc' => 'content_692e20732c9d33_03770079',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ccc8c7db194b835515898eebc2faaf0ce75ff615' => 
    array (
      0 => '/home/danlake2012/public_html/billing/templates/six/announcements.tpl',
      1 => 1748871040,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_692e20732c9d33_03770079 (Smarty_Internal_Template $_smarty_tpl) {
if ($_smarty_tpl->tpl_vars['announcementsFbRecommend']->value) {?>
    <?php echo '<script'; ?>
>
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/<?php echo $_smarty_tpl->tpl_vars['LANG']->value['locale'];?>
/all.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    <?php echo '</script'; ?>
>
<?php }
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['announcements']->value, 'announcement');
$_smarty_tpl->tpl_vars['announcement']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['announcement']->value) {
$_smarty_tpl->tpl_vars['announcement']->do_else = false;
?>

    <div class="announcement-single">

        <a href="<?php echo routePath('announcement-view',$_smarty_tpl->tpl_vars['announcement']->value['id'],$_smarty_tpl->tpl_vars['announcement']->value['urlfriendlytitle']);?>
" class="title">
            <?php echo $_smarty_tpl->tpl_vars['announcement']->value['title'];?>

        </a>

        <?php if (strlen(preg_replace('!<[^>]*?>!', ' ', $_smarty_tpl->tpl_vars['announcement']->value['text'])) < 350) {?>
            <p><?php echo $_smarty_tpl->tpl_vars['announcement']->value['text'];?>
</p>
        <?php } else { ?>
            <p><?php echo $_smarty_tpl->tpl_vars['announcement']->value['summary'];?>

            <a href="<?php echo routePath('announcement-view',$_smarty_tpl->tpl_vars['announcement']->value['id'],$_smarty_tpl->tpl_vars['announcement']->value['urlfriendlytitle']);?>
" class="label label-warning"><?php echo $_smarty_tpl->tpl_vars['LANG']->value['readmore'];?>
 &raquo;</a>
            </p>
        <?php }?>

        <div class="article-items">
            <i class="fas fa-calendar-alt fa-fw"></i>
            <?php echo $_smarty_tpl->tpl_vars['carbon']->value->createFromTimestamp($_smarty_tpl->tpl_vars['announcement']->value['timestamp'])->format('jS M Y');?>

            <?php if ($_smarty_tpl->tpl_vars['announcement']->value['editLink']) {?>
                <a href="<?php echo $_smarty_tpl->tpl_vars['announcement']->value['editLink'];?>
" class="admin-inline-edit">
                    <i class="fas fa-pencil-alt fa-fw"></i>
                    <?php echo $_smarty_tpl->tpl_vars['LANG']->value['edit'];?>

                </a>
            <?php }?>
        </div>

        <?php if ($_smarty_tpl->tpl_vars['announcementsFbRecommend']->value) {?>
            <div class="fb-like hidden-sm hidden-xs" data-layout="standard" data-href="<?php echo fqdnRoutePath('announcement-view',$_smarty_tpl->tpl_vars['announcement']->value['id'],$_smarty_tpl->tpl_vars['announcement']->value['urlfriendlytitle']);?>
" data-send="true" data-width="450" data-show-faces="true" data-action="recommend"></div>
            <div class="fb-like hidden-lg hidden-md" data-layout="button_count" data-href="<?php echo fqdnRoutePath('announcement-view',$_smarty_tpl->tpl_vars['announcement']->value['id'],$_smarty_tpl->tpl_vars['announcement']->value['urlfriendlytitle']);?>
" data-send="true" data-width="450" data-show-faces="true" data-action="recommend"></div>
        <?php }?>

    </div>

<?php
}
if ($_smarty_tpl->tpl_vars['announcement']->do_else) {
?>

    <?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['template']->value)."/includes/alert.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('type'=>"info",'msg'=>((string)$_smarty_tpl->tpl_vars['LANG']->value['noannouncements']),'textcenter'=>true), 0, true);
?>

<?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

<?php if ($_smarty_tpl->tpl_vars['prevpage']->value || $_smarty_tpl->tpl_vars['nextpage']->value) {?>
    <div class="col-xs-12 margin-bottom">
        <form class="form-inline" role="form">
            <div class="form-group">
                <div class="input-group">
                    <span class="btn-group">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['pagination']->value, 'item');
$_smarty_tpl->tpl_vars['item']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->do_else = false;
?>
                            <a href="<?php echo $_smarty_tpl->tpl_vars['item']->value['link'];?>
" class="btn btn-default<?php if ($_smarty_tpl->tpl_vars['item']->value['active']) {?> active<?php }?>"<?php if ($_smarty_tpl->tpl_vars['item']->value['disabled']) {?> disabled="disabled"<?php }?>><?php echo $_smarty_tpl->tpl_vars['item']->value['text'];?>
</a>
                        <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
                    </span>
                </div>
            </div>
        </form>
    </div>
    <div class="clearfix"></div>
<?php }
}
}
