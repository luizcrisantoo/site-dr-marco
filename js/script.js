/* ============================================================
   script.js — Arquivo principal
   Inicializa os modulos quando o DOM esta pronto.
   (Scripts classicos: funcionam tanto localmente quanto hospedado.)
   ============================================================ */
(function (App) {
  function init() {
    if (App.initMenu) App.initMenu();
    if (App.initScroll) App.initScroll();
    if (App.initContact) App.initContact();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window.App = window.App || {});
