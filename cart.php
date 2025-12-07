<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Cart — Megaladon Hosting</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="/assets/css/styles.css">
    <style>
      /* Lightweight cart page tweaks to match the homepage look */
      .cart-hero{padding:48px 0;background:linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.3));color:white}
      .cart-panel{background:var(--panel);border:1px solid rgba(255,255,255,0.03);padding:20px;border-radius:10px}
      .cart-table{width:100%;border-collapse:collapse}
      .cart-table td,.cart-table th{padding:10px;border-bottom:1px dashed rgba(255,255,255,0.03);vertical-align:middle}
      .cart-empty{opacity:0.8;padding:36px;text-align:center}
      .price{font-weight:700;color:var(--muted)}
    </style>
  </head>
  <body class="dark">
    <header class="site-header sticky">
      <div class="container header-row">
        <a class="logo" href="index.html">
          <img class="logo-img" src="/assets/images/logo.svg" alt="Megaladon Hosting logo" onerror="this.onerror=null;this.src='/assets/images/logo-placeholder.svg'"/>
          <span class="logo-text">Megaladon Hosting</span>
        </a>
        <nav class="nav">
          <a href="index.html">Home</a>
          <a href="pricing/index.html">Pricing</a>
          <a href="domains/index.html">Domains</a>
          <a href="about/index.html">About</a>
          <a href="support/index.html">Support</a>
        </nav>
        <div class="header-cta">
          <a class="btn btn-ghost" data-whmcs-client>Login</a>
          <a class="btn btn-primary" href="pricing/index.html">Get Hosting</a>
        </div>
      </div>
    </header>

    <section class="cart-hero">
      <div class="container">
        <div style="display:flex;align-items:center;gap:18px;justify-content:space-between;flex-wrap:wrap">
          <div>
            <h1 style="margin:0">Your Cart</h1>
            <p class="sub" style="margin:6px 0 0">A quick look at items waiting for checkout.</p>
          </div>
          <div style="min-width:220px;text-align:right">
            <div style="font-size:12px;color:var(--muted);">Secure checkout powered by WHMCS</div>
            <div style="font-weight:700;font-size:18px">Megaladon Checkout</div>
          </div>
        </div>
      </div>
    </section>

    <main class="container" style="padding:34px 0 80px">
      <div class="cart-panel">
        <div id="cartContent">Loading cart…</div>
      </div>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid"><div class="brand">Megaladon Hosting</div><nav class="footer-nav"><a href="index.html">Home</a><a href="pricing/index.html">Pricing</a><a href="support/index.html">Support</a></nav><div class="copyright">© <span id="year"></span> Megaladon</div></div>
    </footer>

    <script src="assets/js/config.js"></script>
    <script>
      // Render a friendly cart preview for local/testing and demo
      // parse querystring into keys that can be arrays if repeated
      function parseQS(qs){
        var u=new URLSearchParams(qs);
        var o = {};
        for(const [k,v] of u.entries()){
          if(Object.prototype.hasOwnProperty.call(o, k)){
            if(Array.isArray(o[k])) o[k].push(v); else o[k] = [o[k], v];
          } else {
            o[k] = v;
          }
        }
        return o;
      }
      (function(){
        var now = document.getElementById('year'); if(now) now.textContent = new Date().getFullYear();
        var params = parseQS(location.search.replace(/^\?/,'') );
        var items = [];
        // support ?a=add&pid=NN (single) or repeated ?pid=NN&pid=NN (multiple)
        if(params.a === 'add' && params.pid){
          var pids = Array.isArray(params.pid) ? params.pid : [params.pid];
          pids.forEach(function(pid){
            var meta = (window.MEGALADON && window.MEGALADON.productCatalog && window.MEGALADON.productCatalog[pid]) || null;
            if(meta){ items.push({type:'product', id:pid, title: meta.title, price: meta.price}); }
            else { items.push({type:'product', id:pid, title:'Hosting Plan (pid '+pid+')', price: 6.99}); }
          });
        }
        if(params.domain && params.tld){ var d=params.domain + '.' + params.tld; items.push({type:'domain', title: d, price: 12.99}); }
        // also support multiple domains in comma-separated domain param (rare)
        if(params.domains){ params.domains.split(',').forEach(function(x){ items.push({type:'domain', title:x, price:12.99}); }); }

        var cfg = window.MEGALADON || {};
        var base = cfg.whmcsBase || '';

        var out = '';
        if(items.length === 0){
          out = '<div class="cart-empty">Your cart looks empty. Add hosting or domains from the site to get started.</div>';
        } else {
          var total = 0;
          out += '<table class="cart-table" role="table"><thead><tr><th style="text-align:left">Item</th><th style="width:120px">Price</th><th style="width:160px;text-align:right"></th></tr></thead><tbody>';
          items.forEach(function(it, idx){ total += it.price; out += '<tr><td style="padding-right:8px">' + it.title + '</td><td class="price">$' + it.price.toFixed(2) + '</td><td style="text-align:right">' + (it.type==='product' ? '<a class="btn btn-primary" href="'+(base.replace(/\/$/, '') + '/cart.php?a=view')+'">View cart</a>' : '<a class="btn btn-ghost" href="'+(base.replace(/\/$/, '') + '/domainchecker.php?search='+encodeURIComponent(it.title))+'">Check domain</a>') + '</td></tr>'; });
          out += '<tr><td style="font-weight:700">Total</td><td class="price">$' + total.toFixed(2) + '</td><td style="text-align:right"><a class="btn btn-primary" href="'+(base.replace(/\/$/, '') + '/cart.php')+'">Proceed to WHMCS</a></td></tr>';
          out += '</tbody></table>';
        }

        document.getElementById('cartContent').innerHTML = out;
      })();
    </script>

    <script src="assets/js/main.js"></script>
  </body>
</html>
