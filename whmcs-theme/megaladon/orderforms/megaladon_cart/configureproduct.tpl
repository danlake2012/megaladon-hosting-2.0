{*
  Megaladon Hosting - megaladon_cart configureproduct.tpl
  Clean Dark layout wrapper. Includes standard_cart configureproduct.tpl logic so form behaviour is preserved.
*}

{* Pass through to standard_cart configureproduct template so default ordering markup is used *}
{include file="$template/orderforms/standard_cart/configureproduct.tpl"}
{include file="orderforms/standard_cart/configureproduct.tpl"}