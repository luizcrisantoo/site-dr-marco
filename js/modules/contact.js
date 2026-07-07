/* ============================================================
   contact.js — Aplica dados de contato (WhatsApp / telefone)
   com validacao e sem injecao de HTML.
   ============================================================ */
(function (App) {
  function buildWhatsAppUrl(c) {
    var digits = String(c.whatsapp).replace(/\D/g, '');
    var text = encodeURIComponent(c.whatsappMessage || '');
    return 'https://wa.me/' + digits + '?text=' + text;
  }

  App.initContact = function initContact() {
    var c = App.CONTACT || {};
    var wppUrl = buildWhatsAppUrl(c);

    document.querySelectorAll('[data-wpp]').forEach(function (el) {
      el.setAttribute('href', wppUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    // Telefone — usa textContent (nunca innerHTML) para evitar XSS
    document.querySelectorAll('[data-phone]').forEach(function (el) {
      if (c.phoneDial) el.setAttribute('href', 'tel:' + c.phoneDial);
      if (c.phoneDisplay) el.textContent = c.phoneDisplay;
    });

    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  };
})(window.App = window.App || {});
