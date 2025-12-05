{*
  Megaladon Hosting - megaladon_cart (cart.tpl)
  Uses standard_cart logic for functionality but applies a cleaner dark layout for display.
*}

{* Load order-form specific CSS *}
<link href="{$WEB_ROOT}/templates/{$template}/orderforms/megaladon_cart/style.css" rel="stylesheet">

{* Optional: load a tiny orderform script *}
<script defer src="{$WEB_ROOT}/templates/{$template}/orderforms/megaladon_cart/script.js"></script>

<div id="order-standard_cart" class="megaladon-orderform">
  <div class="contentarea">
    <div class="mg-top" style="margin-bottom:18px;">
      <div class="mg-card">
        <h2>Shopping Cart</h2>
        <p style="margin:6px 0 0 0; color:var(--text-secondary)">Choose your hosting plan and complete checkout below.</p>
      </div>
    </div>

    {* Preserve default WHMCS form output (logic stays in the standard_cart templates) *}
    {* If your installation has a standard_cart template, this will include its logic and content; otherwise WHMCS will directly use this file as the order form *}
    {include file="$template/orderforms/standard_cart/cart.tpl"}

  </div>
</div>