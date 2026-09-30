const pages = ['home', 'research', 'teaching'];
function showPage() {
  const candidate = location.hash.slice(1);
  if (candidate === 'main') return;
  const current = pages.includes(candidate) ? candidate : 'home';
  for (const name of pages) document.getElementById(name).hidden = name !== current;
  for (const link of document.querySelectorAll('nav [data-nav]')) {
    const active = link.dataset.nav === current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  document.title = current === 'home' ? 'Kayoung Shin | Information Systems' : `${current === 'research' ? 'Research' : 'Teaching & Service'} | Kayoung Shin`;
}
window.addEventListener('hashchange', () => { showPage(); window.scrollTo({top: 0, behavior: 'instant'}); document.getElementById('main').focus({preventScroll:true}); });
showPage();
