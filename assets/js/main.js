// Megaladon Hosting — basic JS: domain search redirect, year, simple helpers
/* merged into the top-level DOMContentLoaded handler above */
  // Set year in footer
  var yr = document.getElementById('year'); if(yr) yr.textContent = new Date().getFullYear();

  /* Theme toggle & testing flags
     - Accept ?theme=light or ?theme=dark to temporarily change theme
     - Persist choice to localStorage (key: megaladon_theme) if toggled
     - When theme is provided via URL or localStorage debug flag is set, show a small toggle UI
  */
  (function themeToggle(){
    try{
      var params = new URLSearchParams(window.location.search);
      var paramTheme = params.get('theme');
      var stored = localStorage.getItem('megaladon_theme');
      var theme = paramTheme || stored || 'dark';
      document.body.setAttribute('data-theme', theme);

      // Show debug toggle if theme param is present OR explicit debug flag is enabled
      var showToggle = !!paramTheme || localStorage.getItem('megaladon_debug') === '1';
      if(!showToggle) return;

      var btn = document.createElement('button');
      btn.id = 'theme-debug-toggle';
      btn.setAttribute('aria-label','Toggle site theme (debug)');
      btn.textContent = 'Theme: ' + (theme === 'light' ? 'Light' : 'Dark');
      btn.addEventListener('click', function(){
        var current = document.body.getAttribute('data-theme') || 'dark';
        var next = current === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('megaladon_theme', next);
        localStorage.setItem('megaladon_debug', '1');
        btn.textContent = 'Theme: ' + (next === 'light' ? 'Light' : 'Dark');
      });

      // Small keyboard accessible placement
      btn.style.cursor = 'pointer';
      document.body.appendChild(btn);
    }catch(e){/* fail gracefully */}
  })();

  /* ===== Plans carousel ===== */
  (function plansCarousel(){
    function initCarousel(root){
      var track = root.querySelector('.carousel-track');
      var viewport = root.querySelector('.carousel-viewport');
      var slides = Array.prototype.slice.call(track.children);
      var prev = root.querySelector('.carousel-prev');
      var next = root.querySelector('.carousel-next');
      var dotsWrap = root.querySelector('.carousel-dots');
      var index = 0;
      var slideW = 0;

      function getGap(){
        try{ var cs = getComputedStyle(track); return parseFloat(cs.gap) || 16; }catch(e){return 16}
      }

      function slidesToShowFor(width){
        if(width >= 1500) return 5;
        if(width >= 1100) return 5;
        if(width >= 900) return 4;
        if(width >= 700) return 3;
        if(width >= 480) return 2;
        return 1;
      }

      function updateSizes(){
        var vpw = Math.max(1, viewport.clientWidth);
        var show = Math.min(slides.length, slidesToShowFor(window.innerWidth));
        var gap = getGap();
        slideW = Math.floor((vpw - (show - 1) * gap) / show);
        slides.forEach(function(s){ s.style.minWidth = slideW + 'px'; });

        // recompute max index and adjust index if needed
        var maxIndex = Math.max(0, slides.length - show);
        if(index > maxIndex) index = maxIndex;
        goTo(index, true);

        // show/hide controls
        if(slides.length <= show){ root.setAttribute('data-all-fit','true'); } else { root.removeAttribute('data-all-fit'); }
        renderDots(maxIndex + 1);
      }

      function goTo(i, snap){
        var gap = getGap();
        var show = Math.min(slides.length, slidesToShowFor(window.innerWidth));
        var maxIndex = Math.max(0, slides.length - show);
        index = Math.max(0, Math.min(i, maxIndex));
        var offset = (slideW + gap) * index;
        track.style.transform = 'translateX(-' + offset + 'px)';
        // update active dot
        if(dotsWrap){ Array.prototype.slice.call(dotsWrap.children).forEach(function(b,j){ b.classList.toggle('active', j === index); }); }
        if(!snap){ /* animation uses CSS transition */ }
      }

      function renderDots(total){
        if(!dotsWrap) return;
        dotsWrap.innerHTML = '';
        for(var i=0;i<total;i++){
          var btn = document.createElement('button');
          btn.setAttribute('aria-label','Go to page ' + (i+1));
          (function(ii){ btn.addEventListener('click', function(){ goTo(ii); }); })(i);
          if(i===index) btn.classList.add('active');
          dotsWrap.appendChild(btn);
        }
      }

      // prev/next
      if(prev){ prev.addEventListener('click', function(){ goTo(index-1); }); }
      if(next){ next.addEventListener('click', function(){ goTo(index+1); }); }

      // keyboard left/right
      root.addEventListener('keydown', function(e){ if(e.key === 'ArrowLeft'){ e.preventDefault(); goTo(index-1); } else if(e.key==='ArrowRight'){ e.preventDefault(); goTo(index+1); }});

      // touch swipe
      var startX=0, deltaX=0, dragging=false;
      track.addEventListener('pointerdown', function(e){ dragging=true; startX = e.clientX; track.style.transition = 'none'; });
      window.addEventListener('pointermove', function(e){ if(!dragging) return; deltaX = e.clientX - startX; track.style.transform = 'translateX(' + ( - (index*(slideW + getGap())) + deltaX ) + 'px)'; });
      window.addEventListener('pointerup', function(){ if(!dragging) return; dragging=false; track.style.transition = ''; if(Math.abs(deltaX) > 60){ if(deltaX < 0) goTo(index+1); else goTo(index-1); } else { goTo(index); } deltaX = 0; });

      var resizeTimer;
      function onResize(){ clearTimeout(resizeTimer); resizeTimer = setTimeout(updateSizes, 90); }
      window.addEventListener('resize', onResize);

      updateSizes();
    }

    // init all carousels on the page
    document.querySelectorAll('[data-carousel]').forEach(function(node){ try{ node.setAttribute('tabindex', '0'); initCarousel(node); }catch(e){ console.error('carousel init error', e); } });
  })();

  // Domain search: redirect using the configured provider/template (WHMCS, HostGator, or custom)
  // support both homepage search form (#domainForm) and top-of-domains page (#domainFormTop)
  Array.prototype.slice.call(document.querySelectorAll('#domainForm, #domainFormTop')).forEach(function(form){
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // choose either the paired select/input or fall back
      var tldEl = form.querySelector('#tldSelect, #tldSelectTop');
      var domainEl = form.querySelector('#domainInput, #domainInputTop, #domainInput');
      var tld = tldEl ? tldEl.value : '.com';
      var name = domainEl ? domainEl.value : '';
      name = name.trim().toLowerCase();
      // sanitize: remove spaces, leading www., and any extra dot suffixes like .com.com
      name = name.replace(/^www\./,'');
      // if user provided a dot, take only the first segment as domain name and keep tld from select
      if(name.indexOf('.')>0){ name = name.split('.')[0]; }

      if(!name){ window.location.href = 'domains'; return; }

      // Pull configuration from central config (assets/js/config.js).
      // domainSearchTemplate supports placeholders like '/domainchecker.php?search={query}' or
      // absolute urls such as 'https://www.hostgator.com/domains/search?search={query}'.
      var cfg = window.MEGALADON || {};
      var base = cfg.whmcsBase || '';
      var template = cfg.domainSearchTemplate || '/domainchecker.php?search={query}';
      var query = encodeURIComponent(name + tld);

      var targetUrl;
      if (/^https?:\/\//i.test(template)){
        targetUrl = template.replace('{query}', query);
      } else {
        // template is a relative path — prefer prefixing with whmcsBase if present
        if(base && template.charAt(0) === '/') targetUrl = base.replace(/\/$/, '') + template.replace('{query}', query);
        else targetUrl = template.replace('{query}', query);
      }

      // Redirect to the built URL
      window.location.href = targetUrl;
    });
  });

// Wire product buttons across the site: use data-whmcs-pid on anchors, and data-domain/data-tld for domains.
document.addEventListener('DOMContentLoaded', function(){
  var cfg = (window.MEGALADON || {});
  var base = cfg.whmcsBase || 'https://billing.megaladonhosting.com';

  // Buttons with data-whmcs-pid
  document.querySelectorAll('a[data-whmcs-pid]').forEach(function(a){
    var pid = a.getAttribute('data-whmcs-pid');
    if(pid){ a.href = base + '/cart.php?a=add&pid=' + encodeURIComponent(pid); }
  });

  // Domain register links: data-domain and data-tld
  document.querySelectorAll('a[data-domain][data-tld]').forEach(function(a){
    var name = a.getAttribute('data-domain');
    var tld = a.getAttribute('data-tld');
    if(name && tld){
      // If the site is configured to use WHMCS for domains, preserve cart behavior.
      var cfg = (window.MEGALADON || {});
      var template = cfg.domainSearchTemplate || '/domainchecker.php?search={query}';
      if((cfg.domainProvider && cfg.domainProvider === 'whmcs') || !cfg.domainProvider){
        a.href = base + '/cart.php?a=add&domain=' + encodeURIComponent(name) + '&tld=' + encodeURIComponent(tld);
      } else {
        // For non-WHMCS providers (eg: HostGator) redirect to the search/lookup page for the full domain
        var domainFull = encodeURIComponent(name + tld);
        if(/^https?:\/\//i.test(template)){
          a.href = template.replace('{query}', domainFull);
        } else if(base && template.charAt(0) === '/'){
          a.href = base.replace(/\/$/, '') + template.replace('{query}', domainFull);
        } else {
          a.href = template.replace('{query}', domainFull);
        }
      }
    }
  });

  // Links to client area or ticket pages
  document.querySelectorAll('a[data-whmcs-client]').forEach(function(a){ a.href = base + '/clientarea.php'; });
  document.querySelectorAll('a[data-whmcs-ticket]').forEach(function(a){ a.href = base + '/submitticket.php'; });

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  if(toggle){
    toggle.addEventListener('click', function(){
      var nav = document.querySelector('.nav');
      if(!nav) return;
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    // close on escape or click outside
    document.addEventListener('keyup', function(e){ if(e.key === 'Escape'){ var nav = document.querySelector('.nav'); if(nav) nav.classList.remove('open');}});
    document.addEventListener('click', function(e){ var nav = document.querySelector('.nav'); if(!nav) return; if(!nav.contains(e.target) && e.target !== toggle){ nav.classList.remove('open'); } });
  }
  // Try to load an uploaded logo in order: svg -> png -> webp -> keep placeholder
  (function tryLoadLogo(){
    var logoImg = document.querySelector('.logo-img');
    if(!logoImg) return;
    // The site will ever only need to fall back to the shark JPG or placeholder in most installs.
    // Try the existing `shark.jpg` first to avoid triggering multiple HEAD requests for files that aren't present
    // on many installs (logo.svg/logo.png/logo.webp). This reduces noisy 404s in the network/console.
    // prefer the vector logo first — fallback to png/webp then the legacy shark.jpg if absolutely required
    var paths = ['assets/images/logo.svg','assets/images/logo.png','assets/images/logo.webp','assets/images/shark.jpg','assets/images/logo-placeholder.svg'];

    function check(url){
      return fetch(url, {method:'HEAD'})
        .then(function(resp){ return resp.ok; })
        .catch(function(){ return false; });
    }

    // sequentially check and set src to the first that exists
    paths.reduce(function(prev, url){
      return prev.then(function(found){
        if(found){ return Promise.resolve(true); }
        return check(url).then(function(ok){
          if(ok){ logoImg.src = url; return true; }
          return false;
        });
      });
    }, Promise.resolve(false));
  })();

  // Hero image: add fade-in when the full-res image finishes loading to avoid flash
  (function(){
    var heroImg = document.querySelector('.hero-visual .hero-img');
    if(!heroImg) return;
    // ensure we prefer the browser-picked source (picture element) — reveal image when loaded
    if(heroImg.complete && heroImg.naturalWidth > 0){ heroImg.classList.add('visible'); return; }
    heroImg.addEventListener('load', function(){ heroImg.classList.add('visible'); });
    heroImg.addEventListener('error', function(){
      // hero image failed to load — we won't fallback to the shark asset (removed)
      // leave the hero blank or let CSS background/placeholder take over
      console.warn('Hero image failed to load; no fallback asset will be used.');
    });
  })();

    // Foreground subject (alpha) — reveal when the image loads; hide it if it is the same as the hero image
    (function(){
      var subject = document.querySelector('.hero-subject');
      var heroImgEl = document.querySelector('.hero-visual .hero-img');
      if(!subject) return;

      try{
        // Normalize and compare paths (use URL to resolve relative src)
        var sSrc = subject.src ? (new URL(subject.src, window.location.href)).pathname : '';
        var hSrc = heroImgEl && heroImgEl.src ? (new URL(heroImgEl.src, window.location.href)).pathname : '';
        if(sSrc && hSrc && sSrc === hSrc){
          // identical image — hide the subject element to avoid duplicate stacking
          var wrapper = document.querySelector('.hero-subject-picture');
          if(wrapper) wrapper.style.display = 'none';
          return;
        }
      }catch(err){ /* ignore normalization errors */ }

      if(subject.complete && subject.naturalWidth > 0){ subject.classList.add('visible'); return; }
      subject.addEventListener('load', function(){ subject.classList.add('visible'); });
      // if subject fails to load we'll just leave it blank (background will still show)
    /* end merged code */
  })();

  // Ensure the favicon is set correctly regardless of which folder a page lives in.
  // Tries a few likely relative paths and sets the first one that loads.
  (function ensureFavicon(){
    var candidates = ['/favicon.ico','assets/images/favicon.ico','assets/images/favicon-32.png','../assets/images/favicon.ico','../assets/images/favicon-32.png','../../assets/images/favicon.ico','../../assets/images/favicon-32.png'];
    function tryNext(i){
      if(i>=candidates.length) return;
      var img = new Image();
      img.onload = function(){
        // set favicon link(s)
        var rels=['icon','shortcut icon'];
        rels.forEach(function(r){
          var l = document.querySelector('link[rel="' + r + '"]');
          if(!l){ l = document.createElement('link'); l.rel = r; document.head.appendChild(l); }
          l.href = candidates[i];
        });
        // set apple-touch too
        var apple = document.querySelector('link[rel="apple-touch-icon"]');
        if(!apple){ apple = document.createElement('link'); apple.rel='apple-touch-icon'; document.head.appendChild(apple); }
        apple.href = candidates[i].endsWith('.ico') ? candidates[i].replace('.ico','.png') : candidates[i];
      };
      img.onerror = function(){ tryNext(i+1); };
      img.src = candidates[i];
    }
    tryNext(0);
  })();

  // ---- New: Smooth scroll, sticky header, active nav highlighting, reveal animations ----
  (function pageEnhancements(){
    var header = document.getElementById('site-header');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('#main-nav a[data-scroll]'));

    // Smooth-scrolling anchors (data-scroll)
    navLinks.concat(Array.prototype.slice.call(document.querySelectorAll('a[data-scroll]'))).forEach(function(a){
      a.addEventListener('click', function(e){
        var href = a.getAttribute('href');
        if(href && href.charAt(0) === '#'){
          e.preventDefault();
          var target = document.querySelector(href);
          if(target){
            target.scrollIntoView({behavior:'smooth', block:'start'});
            // update active state immediately
            updateActiveLink(href);
            history.replaceState && history.replaceState(null, '', href);
          }
        }
      });
    });

    function updateActiveLink(hash){
      navLinks.forEach(function(l){ l.classList.remove('active'); if(l.getAttribute('href')===hash) l.classList.add('active'); });
    }

    // Highlight nav on scroll and toggle sticky header background
    var sections = Array.prototype.slice.call(document.querySelectorAll('main > section[id]'));
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(ent){
        if(ent.isIntersecting){
          var id = ent.target.id ? '#' + ent.target.id : '';
          updateActiveLink(id);
        }
      });
    }, {threshold: [0.5]});
    sections.forEach(function(s){ observer.observe(s); });

    // header scrolled class (small threshold)
    var lastKnownY = 0;
    function onScroll(){
      var y = window.scrollY || window.pageYOffset;
      if(y>20){ header && header.classList.add('scrolled'); } else { header && header.classList.remove('scrolled'); }
      lastKnownY = y;
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Reveal animations for elements marked .reveal
    var revealTargets = document.querySelectorAll('.reveal');
    var revealObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
    }, {threshold: 0.12});
    revealTargets.forEach(function(r){ revealObs.observe(r); });

  })();
});
