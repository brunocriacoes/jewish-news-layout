document.querySelectorAll('.nav a,.mobile-menu a').forEach(link=>{const label=link.textContent.trim().toLowerCase();if(label==='about us')link.href='page.html';if(label==='communities')link.href='communities.html'});

