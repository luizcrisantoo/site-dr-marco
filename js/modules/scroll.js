/* ============================================================
   scroll.js — Header com sombra, animacoes on-scroll, voltar ao topo
   ============================================================ */
(function (App) {
  App.initScroll = function initScroll() {
    var header = document.getElementById('header');
    var toTop = document.getElementById('toTop');

    function onScroll() {
      var y = window.scrollY;
      if (header) header.classList.toggle('scrolled', y > 10);
      if (toTop) toTop.classList.toggle('show', y > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && items.length) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      items.forEach(function (el) { observer.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('visible'); });
    }
  };
})(window.App = window.App || {});
