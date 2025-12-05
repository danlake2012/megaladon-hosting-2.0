// Megaladon orderform small script: keeps order summary sticky and ensures form areas clean
(function(){
  function init(){
    // safety: remove any duplicate header rendered inside the order form (if any)
    try{
      document.querySelectorAll('#order-standard_cart header, #order-standard_cart .site-header').forEach(el=>{ if(!el.closest('.site-header')) el.remove(); });
    }catch(e){}

    // friendly resize: ensure sticky summary top offset matches site header
    const summary = document.querySelector('.mg-summary');
    if(summary){
      const header = document.querySelector('.site-header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      summary.style.top = (headerHeight + 10) + 'px';
    }
  }
  // init when DOM ready and after ajax updates
  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('ajaxComplete', init);
  const mo = new MutationObserver(init);
  mo.observe(document.body, { childList: true, subtree: true });
})();