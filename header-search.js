(() => {
  const style = document.createElement('style');
  style.textContent = `.header-search{display:flex;align-items:center;height:34px;border:1px solid var(--line);border-radius:6px;overflow:hidden;background:var(--paper)}.header-search input{width:128px;height:100%;border:0;outline:0;background:transparent;color:var(--ink);padding:0 9px;font:500 11px var(--sans)}.header-search input::placeholder{color:var(--muted)}.header-search button{width:32px;height:100%;border:0;border-left:1px solid var(--line);background:transparent;color:var(--burgundy);font-size:15px;cursor:pointer;transition:background .2s,color .2s}.header-search button:hover{background:var(--gold);color:#281e12}.mobile-menu .header-search{display:none}@media(max-width:850px){.header-actions>.header-search{display:none}.mobile-menu .header-search{display:flex;margin:4px 0 10px}.mobile-menu .header-search input{width:100%;font-size:13px}.mobile-menu .header-search button{width:42px}}`;
  document.head.appendChild(style);
  const form = `<form class="header-search" action="category.html" method="get" role="search"><input type="search" name="search" placeholder="Search" aria-label="Search news"><button type="submit" aria-label="Search">⌕</button></form>`;
  document.querySelector('.header-actions')?.insertAdjacentHTML('afterbegin', form);
  document.querySelector('.mobile-menu')?.insertAdjacentHTML('afterbegin', form);
})();

