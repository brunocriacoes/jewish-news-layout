(() => {
  const style = document.createElement('style');
  style.textContent = `@media(max-width:850px){.site-header{position:sticky}.mobile-menu:not([hidden]){display:block!important;position:absolute;top:100%;left:0;right:0;z-index:10;padding:12px 20px 20px;background:var(--paper);border-top:1px solid var(--line);border-bottom:2px solid var(--burgundy);box-shadow:0 10px 18px rgba(33,23,25,.08)}.mobile-menu a{display:block;padding:12px 0;border-bottom:1px solid var(--line);font-size:12px}.mobile-menu a:last-child{border-bottom:0}.mobile-menu a:hover{color:var(--burgundy)}body.dark .mobile-menu:not([hidden]){box-shadow:0 10px 18px rgba(0,0,0,.25)}}`;
  document.head.appendChild(style);
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!button || !menu) return;
  button.addEventListener('click', event => {
    event.stopImmediatePropagation();
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
  }, true);
  menu.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  });
})();

