// Calendly popup + small utilities
(function(){
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
  const base = document.body.getAttribute('data-calendly') || '#';
  $$('[data-action="book"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      if (window.Calendly && Calendly.initPopupWidget){
        Calendly.initPopupWidget({url: base});
      } else {
        window.location.href = base;
      }
    });
  });
  const yearEl = document.getElementById('year');
  if (yearEl){ yearEl.textContent = new Date().getFullYear(); }
})();