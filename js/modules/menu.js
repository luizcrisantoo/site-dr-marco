/* ============================================================
   menu.js — Navegacao e menu hamburguer
   ============================================================ */
(function (App) {
  App.initMenu = function initMenu() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  };
})(window.App = window.App || {});
