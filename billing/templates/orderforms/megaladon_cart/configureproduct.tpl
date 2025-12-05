{*
  Megaladon Hosting - megaladon_cart configureproduct.tpl
  Clean Dark layout wrapper. Includes standard_cart configureproduct.tpl logic so form behaviour is preserved.
*}

<link href="{$WEB_ROOT}/templates/{$template}/orderforms/megaladon_cart/style.css" rel="stylesheet">
<script defer src="{$WEB_ROOT}/templates/{$template}/orderforms/megaladon_cart/script.js"></script>

<div id="order-configure" class="megaladon-orderform contentarea">
  <div class="mg-card" style="margin-bottom:18px;">
    <h3>Customize Product</h3>
    <p style="margin:6px 0 0 0; color:var(--text-secondary)">Configure the product options below, then continue to checkout.</p>
  </div>

  {* Preserve WHMCS configureproduct markup/logic *}
  {include file="$template/orderforms/standard_cart/configureproduct.tpl"}
</div>