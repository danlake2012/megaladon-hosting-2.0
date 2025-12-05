{*
  Megaladon Hosting - megaladon_cart viewcart.tpl
  Keeps the native cart behavior while re-styling the result to a neat dark layout.
*}

<link href="{$WEB_ROOT}/templates/{$template}/orderforms/megaladon_cart/style.css" rel="stylesheet">
<script defer src="{$WEB_ROOT}/templates/{$template}/orderforms/megaladon_cart/script.js"></script>

<div id="order-standard_cart" class="megaladon-orderform">
  <div class="contentarea">
    <div class="mg-top mg-card" style="margin-bottom:18px;">
      <h2>Shopping Cart</h2>
      <p style="margin:6px 0 0 0; color:var(--text-secondary)">Choose your hosting plan and complete checkout below.</p>
    </div>

    {* Insert the default viewcart markup - keep WHMCS behaviour intact *}
    {include file="$template/orderforms/standard_cart/viewcart.tpl"}
  </div>
</div>