(() => {
  const root = document.getElementById('ks-site');
  const main = document.getElementById('main');
  const titles = {
    home: 'Home',
    research: 'Research',
    teaching: 'Teaching & Service',
    experience: 'Professional Experience',
    media: 'Media & Talks'
  };
  const panels = Array.from(root.querySelectorAll('.ks-page'));
  const navigation = Array.from(root.querySelectorAll('.ks-nav [data-page]'));

  function showPage(moveFocus = false) {
    const candidate = window.location.hash.slice(1);
    if (candidate === 'main') return;
    const current = Object.hasOwn(titles, candidate) ? candidate : 'home';
    for (const panel of panels) panel.hidden = panel.id !== `ks-page-${current}`;
    for (const link of navigation) {
      const active = link.dataset.page === current;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
    document.title = current === 'home'
      ? 'Kayoung Shin | Information Systems'
      : `${titles[current]} | Kayoung Shin`;
    if (moveFocus) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      main.focus({ preventScroll: true });
    }
  }

  window.addEventListener('hashchange', () => showPage(true));
  showPage();
})();
