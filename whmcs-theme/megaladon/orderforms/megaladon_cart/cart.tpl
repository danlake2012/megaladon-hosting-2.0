{*
  Megaladon Hosting - megaladon_cart (cart.tpl)
  Uses standard_cart logic for functionality but applies a cleaner dark layout for display.
*}

    {* Use WHMCS default standard_cart output (theme fallback)
       This passes rendering to the standard_cart templates so the system default order form layout shows.
    *}
    {include file="$template/orderforms/standard_cart/cart.tpl"}
    {include file="orderforms/standard_cart/cart.tpl"}

  </div>
</div>