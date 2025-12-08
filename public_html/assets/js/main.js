// Simple interactions for the Megaladon site
(function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'flex';
    });
  }

  // Tiny accessibility helper: focus outline for keyboard users
  document.addEventListener('keydown', function(e){
    if(e.key === 'Tab') document.body.classList.add('show-focus');
  });
})();
